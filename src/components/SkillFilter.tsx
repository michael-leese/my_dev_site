"use client";

import { useMemo, useState } from "react";

import type { Skill, SkillCategory } from "@/types/site";

type SkillFilter = SkillCategory | "All";

type SkillFilterProps = {
  /** Full list of skills to filter. */
  skills: Skill[];
};

const FILTERS: SkillFilter[] = [
  "All",
  "Frontend",
  "Backend",
  "Platform",
  "Cloud",
  "Data",
  "Tooling",
];

/**
 * Filter skills list based on the active category.
 */
const filterSkills = (skills: Skill[], filter: SkillFilter): Skill[] => {
  if (filter === "All") {
    return skills;
  }
  return skills.filter((skill: Skill) => skill.category === filter);
};

/**
 * Interactive skill filter with minimal footprint.
 */
export function SkillFilter({ skills }: SkillFilterProps): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<SkillFilter>("All");

  const visibleSkills: Skill[] = useMemo(
    () => filterSkills(skills, activeFilter),
    [skills, activeFilter],
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        {FILTERS.map((filter: SkillFilter) => {
          const isActive: boolean = filter === activeFilter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`tag transition ${
                isActive
                  ? "border-transparent bg-[color:var(--accent)] text-white"
                  : "hover:border-[color:var(--accent)]"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-2">
        {visibleSkills.map((skill: Skill) => (
          <span key={skill.name} className="pill">
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

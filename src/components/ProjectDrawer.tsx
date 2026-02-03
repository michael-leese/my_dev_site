"use client";

import { useEffect, useMemo, useState } from "react";

import type { Project } from "@/types/site";

type ProjectDrawerProps = {
  /** Projects list to display in cards and drawer. */
  projects: Project[];
};

/**
 * Format the project stack into a readable string.
 */
const formatStack = (stack: string[]): string => stack.join(" · ");

/**
 * Project grid with an accessible slide-over drawer.
 */
export function ProjectDrawer({ projects }: ProjectDrawerProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const activeStack: string = useMemo(() => {
    if (!activeProject) {
      return "";
    }
    return formatStack(activeProject.stack);
  }, [activeProject]);

  const closeDrawer = (): void => {
    setActiveProject(null);
  };

  useEffect(() => {
    if (!activeProject) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        closeDrawer();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid-two">
        {projects.map((project: Project) => (
          <article key={project.name} className="card flex flex-col gap-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-2 text-sm text-[color:var(--text-muted)]">
                  {project.summary}
                </p>
              </div>
              {project.isPrivate ? (
                <span className="tag text-xs">Private</span>
              ) : null}
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
              {formatStack(project.stack)}
            </p>
            <div className="mt-auto flex items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveProject(project)}
                className="button"
              >
                View details
              </button>
              {project.link ? (
                <a
                  className="button button-primary"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      {activeProject ? (
        <div
          className="fixed inset-0 z-40 flex items-center justify-end bg-black/40 p-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
          onClick={closeDrawer}
        >
          <div
            className="card relative h-full w-full max-w-xl overflow-y-auto"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeDrawer}
              className="absolute right-6 top-6 text-sm text-[color:var(--text-muted)]"
            >
              Close
            </button>
            <div className="flex flex-col gap-4">
              <span className="eyebrow">Project Detail</span>
              <h3 id="project-title" className="text-2xl font-semibold">
                {activeProject.name}
              </h3>
              <p className="text-sm text-[color:var(--text-muted)]">
                {activeProject.summary}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-muted)]">
                {activeStack}
              </p>
              <div className="divider" />
              <ul className="flex flex-col gap-3 text-sm text-[color:var(--text-muted)]">
                {activeProject.details.map((detail: string) => (
                  <li key={detail}>• {detail}</li>
                ))}
              </ul>
              {activeProject.isPrivate ? (
                <p className="tag w-fit text-xs">Commercial codebase</p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

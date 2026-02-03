/**
 * Shared type definitions for the portfolio site content.
 */

export type SocialLink = {
  /** Label displayed to visitors. */
  label: string;
  /** URL or protocol link (mailto, https). */
  href: string;
  /** Optional note for placeholders or future links. */
  note?: string;
};

export type ExperienceHighlight = {
  /** Short, impact-focused bullet. */
  detail: string;
};

export type ExperienceEntry = {
  /** Organization or client name. */
  company: string;
  /** Role or title held. */
  role: string;
  /** Location or context. */
  location: string;
  /** Date range for the role. */
  dates: string;
  /** Key contributions and outcomes. */
  highlights: ExperienceHighlight[];
};

export type Project = {
  /** Project name. */
  name: string;
  /** Short summary of the work. */
  summary: string;
  /** Technologies used. */
  stack: string[];
  /** Optional link to live site or repo. */
  link?: string;
  /** Extra context shown in the detail drawer. */
  details: string[];
  /** Whether the code is private. */
  isPrivate?: boolean;
};

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Platform"
  | "Cloud"
  | "Data"
  | "Tooling";

export type Skill = {
  /** Skill or technology name. */
  name: string;
  /** Category used for filtering. */
  category: SkillCategory;
  /** Optional short qualifier or nuance. */
  note?: string;
};

export type StackGroup = {
  /** Section title for grouped stack items. */
  title: string;
  /** Short description of the stack focus. */
  description: string;
  /** Tools within the group. */
  items: string[];
};

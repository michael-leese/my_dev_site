type SectionHeaderProps = {
  /** Short uppercase label shown above the title. */
  eyebrow: string;
  /** Primary section title. */
  title: string;
  /** Optional supporting sentence. */
  subtitle?: string;
  /** Horizontal alignment. */
  align?: "left" | "center";
};

/**
 * Reusable section heading with eyebrow, title, and subtitle.
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps): JSX.Element {
  const alignmentClass: string =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignmentClass}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
      {subtitle ? <p className="subhead">{subtitle}</p> : null}
    </div>
  );
}

import { cn } from "@/lib/utils";

/**
 * Consistent heading pattern: eyebrow chip + title + (optional accent) + subtitle.
 *
 * Props:
 *   eyebrow?       small chip above title
 *   title          main heading text
 *   accent?        accent-colored span appended to title
 *   subtitle?      paragraph below title
 *   align?         "left" | "center" (default "center")
 *   eyebrowColor?  tailwind classes for eyebrow chip
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  subtitle,
  align = "center",
  eyebrowColor = "bg-brand-amber/15 text-brand-amber-600",
  className,
}) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={cn("flex flex-col gap-4 max-w-2xl", align === "center" && "mx-auto", alignment, className)}>
      {eyebrow && (
        <span
          data-reveal
          className={cn(
            "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
            eyebrowColor
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        data-reveal
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight"
      >
        {title}
        {accent && (
          <>
            {" "}
            <span className="text-brand-amber-600">{accent}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p data-reveal className="text-base md:text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

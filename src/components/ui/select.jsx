import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Lightweight native <select> styled to match shadcn input look.
 * Native select is used for reliability (mobile UX, accessibility, no popover bugs).
 *
 * Usage:
 *   <Select value={v} onChange={(e) => setV(e.target.value)}>
 *     <option value="">Pilih...</option>
 *     <option value="a">A</option>
 *   </Select>
 */
const Select = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          "flex h-11 w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 pr-10 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-amber focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
    </div>
  );
});
Select.displayName = "Select";

export { Select };

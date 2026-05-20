import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Minimal slide-in sheet/drawer (right side) — no dialog library dependency.
 * Closes on backdrop click, Escape key, and via the X button.
 * Locks body scroll while open.
 */
export function Sheet({ open, onOpenChange, children, side = "right", className }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onOpenChange?.(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={() => onOpenChange?.(false)}
      />
      <div
        className={cn(
          "absolute top-0 h-full w-[85%] max-w-sm bg-brand-navy text-white shadow-xl",
          side === "right" ? "right-0 animate-in slide-in-from-right duration-300" : "left-0 animate-in slide-in-from-left duration-300",
          className
        )}
      >
        <button
          onClick={() => onOpenChange?.(false)}
          aria-label="Tutup menu"
          className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  );
}

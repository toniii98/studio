import { GraduationCap } from "lucide-react";

// Removed SVGProps as this component returns a div, not an SVG element directly.
export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="EduKids Manager logo">
      <GraduationCap className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold tracking-tight text-white">
        EduKids Manager
      </span>
    </div>
  );
}

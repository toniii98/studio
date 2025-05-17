import { GraduationCap } from "lucide-react";
import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2" aria-label="EduKids Manager logo">
      <GraduationCap className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold tracking-tight text-white">
        EduKids Manager
      </span>
    </div>
  );
}

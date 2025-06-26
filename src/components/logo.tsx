import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-6 w-6", props.className)}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2L12 6" />
      <path d="M12 18L12 22" />
      <path d="M22 12L18 12" />
      <path d="M6 12L2 12" />
      <polygon points="12 5 15 12 12 19 9 12" fill="currentColor" className="text-accent" />
      <polygon points="12 7 13.5 12 12 17 10.5 12" fill="currentColor" className="text-primary" />
    </svg>
  );
}

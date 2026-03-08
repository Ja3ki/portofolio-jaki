"use client";

import { type AnchorHTMLAttributes, type ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type TrackedExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName: string;
  eventLabel?: string;
};

export default function TrackedExternalLink({
  children,
  eventName,
  eventLabel,
  onClick,
  href,
  ...props
}: TrackedExternalLinkProps) {
  return (
    <a
      {...props}
      href={href}
      onClick={(e) => {
        trackEvent(eventName, {
          label: eventLabel,
          href: href ?? undefined,
        });

        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
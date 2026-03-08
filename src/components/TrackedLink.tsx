"use client";

import Link, { type LinkProps } from "next/link";
import { type ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  eventName: string;
  eventLabel?: string;
};

export default function TrackedLink({
  children,
  className,
  eventName,
  eventLabel,
  onClick,
  ...props
}: TrackedLinkProps & {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <Link
      {...props}
      className={className}
      onClick={(e) => {
        trackEvent(eventName, {
          label: eventLabel,
          href: typeof props.href === "string" ? props.href : undefined,
        });

        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Styleguide · Meridian",
};

export default function StyleguideLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-full flex flex-col">
      {children}
    </div>
  );
}

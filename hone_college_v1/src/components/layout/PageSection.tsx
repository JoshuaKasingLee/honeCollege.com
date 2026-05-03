import type { ReactNode } from "react";

type PageSectionProps = {
  children: ReactNode;
  theme: "light" | "dark";
};

export default function PageSection({ children, theme }: PageSectionProps) {
  const sectionClassName = theme === "dark" ? "section-dark" : "section-white";

  return (
    <div className={sectionClassName}>
      <div className="section-wrap">
        <div className="section-inner">{children}</div>
      </div>
    </div>
  );
}

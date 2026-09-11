import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-card bg-card p-6 transition-all duration-500 ease-in-out hover:-translate-y-2 md:p-8 ${className}`.trim()}
    >
      {children}
    </div>
  );
}

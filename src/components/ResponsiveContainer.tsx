import { ReactNode } from "react";

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
}

export const ResponsiveContainer = ({
  children,
  className = "",
}: ResponsiveContainerProps) => {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export const ResponsiveSection = ({
  children,
  className = "",
  id,
}: ResponsiveContainerProps & { id?: string }) => {
  return (
    <section
      id={id}
      className={`py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
};

export const ResponsiveHeading = ({
  children,
  className = "",
  level = "h2",
}: ResponsiveContainerProps & { level?: "h1" | "h2" | "h3" }) => {
  const baseClasses =
    "font-bold tracking-tight text-balance mx-auto text-center";
  const sizeClasses = {
    h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
    h2: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
    h3: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
  };

  const Tag = level;
  return (
    <Tag className={`${baseClasses} ${sizeClasses[level]} ${className}`}>
      {children}
    </Tag>
  );
};

export const ResponsiveText = ({
  children,
  className = "",
  size = "base",
}: ResponsiveContainerProps & { size?: "sm" | "base" | "lg" }) => {
  const sizeClasses = {
    sm: "text-sm sm:text-base",
    base: "text-base sm:text-lg",
    lg: "text-lg sm:text-xl md:text-2xl",
  };

  return (
    <p
      className={`text-muted-foreground leading-relaxed text-balance ${sizeClasses[size]} ${className}`}
    >
      {children}
    </p>
  );
};

import { cn } from "@/lib/utils";

export default function Heading({
  title,
  description,
  size = "default",
  center = false,
}: {
  title: string;
  description?: string;
  size?: "default" | "small";
  center?: boolean;
}) {
  return (
    <header
      className={cn("flex flex-col mb-3 lg:mb-8", {
        "space-y-0.5": size === "default",
        "items-center text-center": center,
      })}
    >
      <h1
        className={cn({
          "text-xl font-semibold tracking-tight": size === "default",
          "text-base font-medium": size === "small",
        })}
      >
        {title}
      </h1>
      {description && (
        <p className="text-muted-foreground text-sm">{description}</p>
      )}
    </header>
  );
}

import { AnimatedTooltip } from "./ui/animated-tooltip";
export function AnimatedTooltipPreview({
  contributors,
}: {
  contributors: string[];
}) {
  const people = contributors.map((name, idx) => ({
    id: idx,
    name,
    designation: "Contributor",
    // image: `https://api.dicebear.com/9.1/avataaars/svg?flip=false`,
    image: `https://ui-avatars.com/api/?name=${name}&background=random`,
  }));

  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

// contributors: ["Hemangi", "Neha", "Shivani", "Sahil", "Khushi", "Khushi"],
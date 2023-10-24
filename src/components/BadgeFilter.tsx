import { Pill } from "@mantine/core";

export function BadgeFilter ({ tag }: { tag: string }): JSX.Element {
  return (
    <Pill
      withRemoveButton
      styles={{
        root: {
          color: "#004EE5",
          backgroundColor: "rgba(0, 76, 229, 0.3)",
          fontWeight: "bold",
          borderRadius: "6px",
        },
      }}
    >
      {tag}
    </Pill>
  );
}

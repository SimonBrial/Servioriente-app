import { ContainerInside } from "@/components/container/ContainerInside";
import { Stack } from "@mantine/core";

export const AsideContainer = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <ContainerInside width="35%" allWhite={false}>
      <Stack gap={4}>{children}</Stack>
    </ContainerInside>
  );
};

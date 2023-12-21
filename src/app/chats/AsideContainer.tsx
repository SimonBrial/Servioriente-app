import { ContainerInside } from "@/components/container/ContainerInside";

export const AsideContainer = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <ContainerInside width="30%">{children}</ContainerInside>;
};

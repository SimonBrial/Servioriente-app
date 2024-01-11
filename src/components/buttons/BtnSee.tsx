import { Drawer, Stack, Tooltip, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HiOutlineEye } from "../../icons";
import btnClass from "../../styles/BtnStyles.module.css";
import BtnBack from "./BtnBack";

export default function BtnSee({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        styles={{
          header: { display: "none" },
        }}
      >
        <Stack justify="space-between" style={{ height: "100%" }}>
          {children}
          <BtnBack close={close} label="Volver" />
        </Stack>
      </Drawer>
      <Tooltip
        label="Ver"
        withArrow
        position="top"
        styles={(theme) => ({
          tooltip: {
            background: `${theme.colors.principalTheme[6]}`,
          },
        })}
      >
        <UnstyledButton
          variant="transparent"
          color="gray"
          aria-label="Ver"
          className={btnClass.btnEditView_item}
          onClick={open}
        >
          <HiOutlineEye />
        </UnstyledButton>
      </Tooltip>
    </>
  );
}

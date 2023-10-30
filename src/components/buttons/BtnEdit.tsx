import {
  Button,
  Center,
  Drawer,
  Stack,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HiOutlinePencil, HiOutlineSave } from "../IconsIndex";
import btnClass from "../../styles/BtnStyles.module.css";
import BtnActions from "./BtnActions";

type EditButtonStyles = "normal" | "special" | "unstyled";

export default function BtnEdit({
  children,
  buttonStyles,
}: {
  children: React.ReactNode;
  buttonStyles: EditButtonStyles;
}): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);

  let buttonSty: JSX.Element;

  const buttonType = (type: EditButtonStyles): JSX.Element => {
    if (type === "normal") {
      buttonSty = (
        <Button
          fullWidth
          leftSection={<HiOutlinePencil />}
          styles={(theme) => ({
            root: {
              backgroundColor: `${theme.colors.principalTheme[6]}`,
              height: "100%",
            },
            section: { fontSize: "1.2rem" },
          })}
          onClick={open}
        >
          Editar
        </Button>
      );
    } else if (type === "special") {
      buttonSty = (
        <Tooltip
          label="Editar"
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
            aria-label="Editar"
            className={btnClass.btnEditEdit_item}
            onClick={open}
          >
            <HiOutlinePencil />
          </UnstyledButton>
        </Tooltip>
      );
    } else if (type === "unstyled") {
      buttonSty = (
        <UnstyledButton style={{ fontSize: "1.5rem" }} onClick={open}>
          <Center>
            <HiOutlinePencil />
          </Center>
        </UnstyledButton>
      );
    }
    return buttonSty;
  };

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
        <Stack
          justify="space-between"
          style={{
            padding: "1rem 1rem 0 1rem",
            height: "96vh",
          }}
        >
          {children}
          <BtnActions icon={<HiOutlineSave />} title="Guardar" close={close} />
        </Stack>
      </Drawer>
      {buttonType(buttonStyles)}
    </>
  );
}

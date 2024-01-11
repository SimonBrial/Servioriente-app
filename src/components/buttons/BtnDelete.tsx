import { useDisclosure } from "@mantine/hooks";
import {
  Container,
  Modal,
  ScrollArea,
  Stack,
  Title,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import { HiOutlineTrash, HiOutlineCheck } from "../../icons";
import btnClass from "../../styles/BtnStyles.module.css";
import { TitleLayout } from "../layout/TitleLayout";
import BtnActions from "./BtnActions";
import React from "react";

export default function BtnDelete({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        <Stack style={{ padding: "1rem" }}>
          <TitleLayout
            title="Eliminar Registro"
            icon=""
            color=""
            onText={false}
          />
          <Title order={5} style={{ color: "#696969", textAlign: "center" }}>
            {" "}
            Estas seguro que quiere eliminar este registro?
          </Title>
          <Container
            py={16}
            w={370}
            style={{
              border: "1px solid #cdcdcd",
              borderRadius: "6px",
            }}
          >
            <ScrollArea h={350} offsetScrollbars>
              {" "}
              {children}
            </ScrollArea>
          </Container>
          <BtnActions title="Aceptar" icon={<HiOutlineCheck />} close={close} />
        </Stack>
      </Modal>

      <Tooltip
        label="Borrar"
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
          onClick={open}
          aria-label="Borrar"
          className={btnClass.btnEditDelete_item}
        >
          <HiOutlineTrash />
        </UnstyledButton>
      </Tooltip>
    </>
  );
}

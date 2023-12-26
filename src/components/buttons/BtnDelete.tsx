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
import RegisterInfo from "../RegisterInfo";
import StatusBadge from "../../app/data-base/StatusBadge";
import BtnActions from "./BtnActions";

export default function BtnDelete(): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);
  const fakeArr = {
    id: 1,
    name: "Mario",
    lastName: "Hurtado",
    car: "car",
    carID: "da6s5d4",
    site: "Estado",
    phone: "32165487",
    email: "correo@gmail.com",
    status: <StatusBadge title="GENERACION" />,
    birthdate: "16-12-1996",
  };

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        <Stack style={{ padding: "1rem" }}>
          <TitleLayout title="Eliminar Registro" icon="" color="" onText={false} />
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
              <Stack>
                <RegisterInfo keyInput={"Nombre: "} valueInput={fakeArr.name} />
                <RegisterInfo
                  keyInput={"Apellido: "}
                  valueInput={fakeArr.lastName}
                />
                <RegisterInfo
                  keyInput={"Vehiculo: "}
                  valueInput={fakeArr.car}
                />
                <RegisterInfo
                  keyInput={"Numero de Placa: "}
                  valueInput={fakeArr.carID}
                />
                <RegisterInfo keyInput={"Estado: "} valueInput={fakeArr.site} />
                <RegisterInfo
                  keyInput={"Telefono: "}
                  valueInput={fakeArr.phone}
                />
                <RegisterInfo
                  keyInput={"Correo: "}
                  valueInput={fakeArr.email}
                />
                <RegisterInfo
                  keyInput={"Status: "}
                  valueInput={fakeArr.status}
                />
                <RegisterInfo keyInput={"Facebook: "} valueInput={"Facebook"} />
                <RegisterInfo
                  keyInput={"Whatsapp: "}
                  valueInput={fakeArr.phone}
                />
                <RegisterInfo
                  keyInput={"Instagram: "}
                  valueInput={"Instagram"}
                />
              </Stack>
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

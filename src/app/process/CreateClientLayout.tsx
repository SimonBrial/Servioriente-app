import { CalendarInput } from "@/components/CalendarInput";
import HorizontalInputLayout from "@/components/HorizontalInputLayout";
import { HiOutlineUser } from "@/components/IconsIndex";
import PhoneInputLayout from "@/components/PhoneInputLayout";
import { SelectSocialRed } from "@/components/SelectSocialRed";
import { TitleLayout } from "@/components/TitleLayout";
import UserPhoto from "@/components/UserPhoto";
import { Container, Stack } from "@mantine/core";

export default function CreateClientLayout(): JSX.Element {
  return (
    <Container w={"100%"} p={0}>
      <TitleLayout color="" icon="" title="Crear Registro" />
      <Stack align="center" justify="space-between" gap={2} w={"100%"}>
        <UserPhoto userIconSize="6rem" />
        <HorizontalInputLayout
          inputSize="200px"
          asterisk
          icon={<HiOutlineUser />}
          title="Nombre"
        />
        <HorizontalInputLayout
          inputSize="200px"
          asterisk
          icon={<HiOutlineUser />}
          title="Apellido"
        />
        <HorizontalInputLayout
          inputSize="200px"
          asterisk
          icon={<HiOutlineUser />}
          title="Vehiculo"
        />
        <HorizontalInputLayout
          inputSize="200px"
          asterisk
          icon={<HiOutlineUser />}
          title="Placa del vehiculo"
        />
        <HorizontalInputLayout
          inputSize="200px"
          asterisk
          icon={<HiOutlineUser />}
          title="Zona"
        />
        <HorizontalInputLayout
          inputSize="200px"
          asterisk
          icon={<HiOutlineUser />}
          title="Email"
        />
        <SelectSocialRed />
        <CalendarInput withTitle title="Cumpleaños" />
        <PhoneInputLayout />
      </Stack>
    </Container>
  );
}

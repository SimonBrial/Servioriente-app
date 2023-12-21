import {
  Checkbox,
  Divider,
  Flex,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { AsideSearch } from "../AsideSearch";
import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { UserContactCard } from "../UserContactCard";
import { BtnAcept } from "@/components/buttons/BtnAcept";
import InsideContainer from "@/components/container/InsideContainer";

const page = (): JSX.Element => {
  return (
    <Stack gap={3} style={{ padding: "0.2rem 0.5rem" }}>
      <div style={{ width: "40%" }}>
        <BtnBackSection
          label="Volver a Chats"
          dir="/chats"
          withStyles={false}
        />
      </div>
      <TitleLayout
        color="blue"
        icon=""
        onText={false}
        title="Crear lista de Difusion"
      />
      <AsideSearch />
      <Flex align={"center"} gap={6}>
        <Text>Contactos: </Text>
        <Text style={{ color: "#004EE5" }}>Whatsapp</Text>
      </Flex>
      <Divider />
      <Flex justify={"space-between"} align={"center"}>
        <Text>Buscar por lista de Favoritos</Text>
        <Checkbox size="xs" color="#004EE5" />
      </Flex>
      <InsideContainer offset={315}>
        <ScrollArea h={"98%"} maw={"100%"} offsetScrollbars scrollbarSize={2}>
          <Stack gap={5} h={"50%"}>
            <UserContactCard favorite />
            <UserContactCard favorite={false} />
            <UserContactCard favorite />
            <UserContactCard favorite={false} />
            <UserContactCard favorite />
            <UserContactCard favorite />
            <UserContactCard favorite />
            <UserContactCard favorite />
            <UserContactCard favorite={false} />
            <UserContactCard favorite={false} />
            <UserContactCard favorite />
            <UserContactCard favorite={false} />
            <UserContactCard favorite />
            <UserContactCard favorite={false} />
            <UserContactCard favorite={false} />
            <UserContactCard favorite />
            <UserContactCard favorite={false} />
            <UserContactCard favorite={false} />
          </Stack>
        </ScrollArea>
      </InsideContainer>
      <Flex style={{ width: "100%" }} gap={5}>
        <BtnBackSection label="Volver" dir="/chats" withStyles />
        <BtnAcept />
      </Flex>
    </Stack>
  );
};

export default page;

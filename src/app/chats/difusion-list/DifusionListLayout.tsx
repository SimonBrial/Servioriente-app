"use client";

import {
  ScrollArea,
  Checkbox,
  Divider,
  Select,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import { AsideSearch } from "../AsideSearch";
import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import { TitleLayout } from "@/components/layout/TitleLayout";
import { UserContactCard } from "../UserContactCard";
import { BtnAcept } from "@/components/buttons/BtnAcept";
import InsideContainer from "@/components/container/InsideContainer";

export const DifusionListLayout = (): JSX.Element => {
  return (
    <>
      <TitleLayout
        color="blue"
        icon=""
        onText={false}
        title="Crear lista de Difusion"
      />
      <AsideSearch />
      <Flex align={"center"} gap={10}>
        <Text>Contactos: </Text>
        <Select
          variant="unstyled"
          placeholder="Select placeholder"
          defaultValue="Whatsapp"
          data={["Whatsapp", "Facebook", "Instagram"]}
          style={{ width: "100%" }}
          styles={(theme) => ({
            input: {
              color: `${theme.colors.principalTheme[6]}`,
              width: "100%",
            },
            options: {
              color: `${theme.colors.principalTheme[6]}`,
            },
          })}
        />
      </Flex>
      <Divider />
      <Flex
        justify={"space-between"}
        align={"center"}
        style={{ marginBottom: "0.3rem" }}
      >
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
    </>
  );
};

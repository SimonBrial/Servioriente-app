import { TitleLayout } from "@/components/layout/TitleLayout";
import {
  Divider,
  Flex,
  Stack,
  Tooltip,
  Text,
  Switch,
  ScrollArea,
} from "@mantine/core";
import React from "react";
import { AsideSearch } from "../AsideSearch";
import InsideContainer from "@/components/container/InsideContainer";
import { UserContactCard } from "../UserContactCard";

export const FavoritiesLayout = (): JSX.Element => {
  return (
    <Stack gap={3}>
      <TitleLayout color="" icon="" onText title="Favoritos" />
      <AsideSearch />
      <Divider />
      <Flex align={"center"} justify={"space-between"}>
        <Text>Ordenar por: </Text>
        <Tooltip
          offset={{ mainAxis: 10, crossAxis: -4 }}
          label="Ordenar lista de contactos"
          position="right-start"
          arrowPosition="side"
          refProp="rootRef"
          color="#004EE5"
          arrowOffset={14}
          arrowSize={5}
          withArrow
        >
          <Switch
            size="md"
            onLabel="Z→A"
            offLabel="A→Z"
            color="#004EE5"
          />
        </Tooltip>
      </Flex>
      <Divider style={{ marginBottom: "0.2rem" }} />
      <InsideContainer offset={252}>
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
    </Stack>
  );
};

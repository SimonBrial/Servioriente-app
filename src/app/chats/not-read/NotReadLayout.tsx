import { TitleLayout } from "@/components/layout/TitleLayout";
import { AsideSearch } from "../AsideSearch";
import InsideContainer from "@/components/container/InsideContainer";
import { Divider, ScrollArea, Stack } from "@mantine/core";
import { UserContactCard } from "../UserContactCard";

export const NotReadLayout = (): JSX.Element => {
  return (
    <Stack gap={3}>
      <TitleLayout color="blue" icon="" onText={false} title="No Leidos" />
      <AsideSearch />
      <Divider style={{ marginBottom: "0.2rem" }} />
      <InsideContainer offset={220}>
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

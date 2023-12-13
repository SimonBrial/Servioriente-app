import ColorSelectInput from "@/components/inputs/ColorSelectInput";
import { MdOutlineInsertEmoticon, MdTitle } from "@/components/icons";
import TextEditor from "@/components/TextEditor";
import { TitleLayout } from "@/components/layout/TitleLayout";
import VerticalInputLayout from "@/components/inputs/VerticalInputLayout";
import { ScrollArea, Stack } from "@mantine/core";

export default function CreateFolderLayout({
  title,
}: {
  title: string;
}): JSX.Element {
  return (
    <ScrollArea offsetScrollbars scrollbarSize={2} scrollHideDelay={500}>
      <Stack
        gap={"0.4rem"}
        styles={{
          root: { padding: "0 0.2rem" },
        }}
      >
        <TitleLayout title={title} color="" icon="" onText={false} />
        <VerticalInputLayout label="Titulo" icon={<MdTitle />} />
        <VerticalInputLayout label="Icono" icon={<MdOutlineInsertEmoticon />} />
        <ColorSelectInput />
        <TextEditor />
      </Stack>
    </ScrollArea>
  );
}

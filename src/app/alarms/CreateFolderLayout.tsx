import ColorSelectInput from "@/components/ColorSelectInput";
import { MdOutlineInsertEmoticon, MdTitle } from "@/components/IconsIndex";
import TextEditor from "@/components/TextEditor";
import { TitleLayout } from "@/components/TitleLayout";
import VerticalInputLayout from "@/components/VerticalInputLayout";
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
        <TitleLayout title={title} color="" icon="" />
        <VerticalInputLayout label="Titulo" icon={<MdTitle />} />
        <VerticalInputLayout label="Icono" icon={<MdOutlineInsertEmoticon />} />
        <ColorSelectInput />
        <TextEditor />
      </Stack>
    </ScrollArea>
  );
}

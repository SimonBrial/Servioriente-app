import { Stack } from "@mantine/core";
import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import { DifusionListLayout } from "./DifusionListLayout";

const page = (): JSX.Element => {
  return (
    <Stack gap={1} style={{ padding: "0.2rem 0.5rem" }}>
      <div style={{ width: "43.5%", marginBottom: "0" }}>
        <BtnBackSection
          label="Volver a Chats"
          dir="/chats"
          withStyles={false}
        />
      </div>
      <DifusionListLayout />
    </Stack>
  );
};

export default page;

import { Stack } from "@mantine/core";
import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import { DifusionListLayout } from "./DifusionListLayout";
import { AsideContainer } from "../AsideContainer";
import { ChatContainer } from "../ChatContainer";

const page = (): JSX.Element => {
  return (
    <>
      <AsideContainer>
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
      </AsideContainer>
      <ChatContainer />
    </>
  );
};

export default page;

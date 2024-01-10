import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import { FormatsLayout } from "./FormatsLayout";
import { AsideContainer } from "../AsideContainer";
import { ChatContainer } from "../ChatContainer";
import { FormatsEditor } from "./FormatsEditor";
import { FormatsHeader } from "./FormatsHeader";

const page = (): JSX.Element => {
  return (
    <>
      <AsideContainer>
        <div style={{ width: "40%" }}>
          <BtnBackSection
            label="Volver a Chats"
            dir="/chats"
            withStyles={false}
          />
        </div>
        <FormatsLayout />
      </AsideContainer>
      <ChatContainer>
        <FormatsHeader />
        <FormatsEditor />
      </ChatContainer>
    </>
  );
};

export default page;

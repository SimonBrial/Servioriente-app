import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import { FormatsLayout } from "./FormatsLayout";
import { AsideContainer } from "../AsideContainer";
import { ChatContainer } from "../ChatContainer";

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
      <ChatContainer />
    </>
  );
};

export default page;

import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import { NotReadLayout } from "./NotReadLayout";
import { AsideContainer } from "../AsideContainer";
import { ChatContainer } from "../ChatContainer";
import { UserChatHeader } from "../chatUserView/UserChatHeader";
import { ConversationContainer } from "../chatUserView/ConversationContainer";
import { ChatInputText } from "../chatUserView/ChatInputText";

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
        <NotReadLayout />
      </AsideContainer>
      <ChatContainer>
        <UserChatHeader colorUser="instagram" status={true} />
        <ConversationContainer />
        <ChatInputText />
      </ChatContainer>
    </>
  );
};

export default page;

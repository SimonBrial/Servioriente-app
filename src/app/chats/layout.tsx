import { Flex } from "@mantine/core";
import { ChatContainer } from "./ChatContainer";
import { AsideContainer } from "./AsideContainer";

const layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Flex gap={16} h={"100%"}>
      <AsideContainer>
        {children}
      </AsideContainer>
      <ChatContainer />
    </Flex>
  );
};

export default layout;

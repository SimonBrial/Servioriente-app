import { Flex } from "@mantine/core";
import BtnEdit from "./BtnEdit";
import BtnSee from "./BtnSee";
import BtnDelete from "./BtnDelete";
import RegisterEditLayout from "@/app/data-base/RegisterEditLayout";

function BtnFn(): JSX.Element {
  return (
    <Flex gap={"xs"}>
      <BtnDelete />
      <BtnSee />
      <BtnEdit buttonStyles="special">
        <RegisterEditLayout />
      </BtnEdit>
    </Flex>
  );
}

export default BtnFn;

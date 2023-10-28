import { Flex } from "@mantine/core";
import BtnEdit from "./BtnEdit";
import BtnSee from "./BtnSee";
import BtnDelete from "./BtnDelete";
import RegisterEditLayout from "@/app/data-base/RegisterEditLayout";

function BtnFn(): JSX.Element {
  return (
    <Flex gap={"xs"}>
      <BtnEdit label="Editar">
        <RegisterEditLayout />
      </BtnEdit>
      <BtnDelete />
      <BtnSee />
    </Flex>
  );
}

export default BtnFn;

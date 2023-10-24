import { Flex } from "@mantine/core";
import BtnEdit from "./BtnEdit";
import BtnSee from "./BtnSee";
import BtnDelete from "./BtnDelete";

function BtnFn(): JSX.Element {
  return (
    <Flex gap={"xs"}>
      <BtnEdit label="Editar" />
      <BtnDelete />
      <BtnSee />
    </Flex>
  );
}

export default BtnFn;

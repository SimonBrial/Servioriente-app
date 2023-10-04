import { ActionIcon, Tooltip, Flex, UnstyledButton } from "@mantine/core";
import { HiOutlineTrash, HiOutlineEye } from "../IconsIndex";
import btnClass from "../styles/BtnStyles.module.css";
import BtnEdit from "./BtnEdit";
import BtnSee from "./BtnSee";
import BtnDelete from "./BtnDelete";

function BtnFn() {
    return (
        <Flex gap={"xs"}>
            <BtnEdit label="Editar" />
            <BtnDelete />
            <BtnSee />
        </Flex>
    );
}

export default BtnFn;

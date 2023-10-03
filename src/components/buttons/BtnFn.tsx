import { ActionIcon, Menu, Flex } from "@mantine/core";
import { HiOutlineTrash } from "../IconsIndex";
import btnClass from "../styles/BtnStyles.module.css";
import BtnEdit from "./BtnEdit";

function BtnFn() {
    return (
        <Flex>
            <BtnEdit label="Editar" />
            <ActionIcon
                variant="transparent"
                color="gray"
                aria-label="Settings"
                className={btnClass.btnEditDelete_item}
            >
                <HiOutlineTrash />
            </ActionIcon>
        </Flex>
    );
}

export default BtnFn;

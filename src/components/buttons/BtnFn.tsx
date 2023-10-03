import { ActionIcon, Tooltip, Flex, UnstyledButton } from "@mantine/core";
import { HiOutlineTrash, HiOutlineEye } from "../IconsIndex";
import btnClass from "../styles/BtnStyles.module.css";
import BtnEdit from "./BtnEdit";
import BtnSee from "./BtnSee";

function BtnFn() {
    return (
        <Flex gap={"xs"}>
            <BtnEdit label="Editar" />
            <Tooltip
                label="Borrar"
                withArrow
                position="top"
                styles={(theme) => ({
                    tooltip: {
                        background: `${theme.colors.principalTheme[6]}`,
                    },
                })}
            >
                <UnstyledButton
                    variant="transparent"
                    color="gray"
                    aria-label="Borrar"
                    className={btnClass.btnEditDelete_item}
                >
                    <HiOutlineTrash />
                </UnstyledButton>
            </Tooltip>
            <BtnSee />
        </Flex>
    );
}

export default BtnFn;

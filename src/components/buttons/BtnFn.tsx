import { ActionIcon, Menu } from "@mantine/core";
import {
    HiOutlineDotsVertical,
    HiOutlinePencil,
    HiOutlineTrash,
} from "../IconsIndex";
import btnClass from "../styles/BtnStyles.module.css";

function BtnFn() {
    return (
        <Menu position="right" withArrow>
            <Menu.Target>
                <ActionIcon variant="transparent" color="#696969">
                    <HiOutlineDotsVertical />
                </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown
                style={{
                    BackgroundColor: "#F8F8F8",
                    border: "1px solid #CDCDCD",
                }}
            >
                <Menu.Item className={btnClass.btnEditDelete_item}>
                    <span>
                        <HiOutlinePencil />
                    </span>
                    Editar
                </Menu.Item>
                <Menu.Item className={btnClass.btnEditDelete_item}>
                    <span>
                        <HiOutlineTrash />
                    </span>
                    Eliminar
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}

export default BtnFn;

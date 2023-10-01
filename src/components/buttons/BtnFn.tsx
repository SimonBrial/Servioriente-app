import { ActionIcon, Menu } from "@mantine/core";
import { HiOutlineDotsVertical } from "react-icons/hi";

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
                <Menu.Item>Editar</Menu.Item>
                <Menu.Item>Eliminar</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}

export default BtnFn;

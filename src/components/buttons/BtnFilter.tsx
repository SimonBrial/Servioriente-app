import React from "react";
import { Menu } from "@mantine/core";
import { BsFilter } from "react-icons/bs";
import btnClass from "../styles/BtnStyles.module.css"

function BtnFilter() {
    return (
        <Menu>
                <div className={btnClass.btnFilter}>
                    <span className={btnClass.FilterIcon}>
                        <BsFilter />
                    </span>
                    <p>Filtrar</p>
                </div>
            {/* <Menu.Target>
            </Menu.Target> */}
        </Menu>
    );
}

export default BtnFilter;

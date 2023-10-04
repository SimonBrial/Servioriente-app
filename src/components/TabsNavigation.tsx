import { Tabs } from "@mantine/core";
import {
    BiMailSend,
    HiOutlineStar,
    HiOutlineTrash,
    HiOutlineDocumentText,
} from "./IconsIndex";

export default function TabsNavigation() {
    return (
        <Tabs color="gray" variant="outline" defaultValue="gallery">
            <Tabs.List>
                <Tabs.Tab value="Enviados" leftSection={<BiMailSend />}>
                    Enviados
                </Tabs.Tab>
                <Tabs.Tab value="Favoritos" leftSection={<HiOutlineStar />}>
                    Favoritos
                </Tabs.Tab>
                <Tabs.Tab value="Borrados" leftSection={<HiOutlineTrash />}>
                    Borrados
                </Tabs.Tab>
                <Tabs.Tab
                    value="Plantillas"
                    leftSection={<HiOutlineDocumentText />}
                >
                    Plantillas
                </Tabs.Tab>
            </Tabs.List>
        </Tabs>
    );
}

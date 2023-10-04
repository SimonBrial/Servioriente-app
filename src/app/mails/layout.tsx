import TabsNavigation from "@/components/TabsNavigation";
import ListLayout from "../data-base/layout";
import {
    BiMailSend,
    HiOutlineStar,
    HiOutlineTrash,
    HiOutlineDocumentText,
    HiOutlineSave,
} from "../../components/IconsIndex";

export default function MailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const mailSections = [
        { value: "Enviados", icon: <BiMailSend />, dir: "/mails" },
        {
            value: "Favoritos",
            icon: <HiOutlineStar />,
            dir: "/mails/favorities",
        },
        { value: "Borrados", icon: <HiOutlineTrash />, dir: "/mails/erased" },
        {
            value: "Plantillas",
            icon: <HiOutlineDocumentText />,
            dir: "/mails/formats",
        },
        {
            value: "Archivados",
            icon: <HiOutlineSave />,
            dir: "/mails/archived",
        },
    ];

    return (
        <ListLayout>
            <TabsNavigation sectionsArray={mailSections}/>
            {children}
        </ListLayout>
    );
}

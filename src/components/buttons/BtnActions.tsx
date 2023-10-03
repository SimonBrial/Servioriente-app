import { Button, Flex } from "@mantine/core";
import { IoClose } from "../IconsIndex";

interface BtnActionProps {
    title: string;
    icon: React.ReactNode;
}

export default function BtnActions({ title, icon }: BtnActionProps) {
    return (
        <Flex align={"center"} gap={"sm"}>
            <Button
                fullWidth
                variant="white"
                leftSection={<IoClose />}
                styles={(theme) => ({
                    root: {
                        border: `2px solid ${theme.colors.principalTheme[6]}`,
                        color: `${theme.colors.principalTheme[6]}`,
                    },
                    section: { fontSize: "1.2rem" },
                })}
            >
                Cancelar
            </Button>
            <Button
                fullWidth
                variant="filled"
                leftSection={icon}
                styles={(theme) => ({
                    root: {
                        backgroundColor: `${theme.colors.principalTheme[6]}`,
                    },
                    section: { fontSize: "1.2rem" },
                })}
            >
                {title}
            </Button>
        </Flex>
    );
}

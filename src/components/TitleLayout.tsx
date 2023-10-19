import { Divider, Title } from "@mantine/core";

export function TitleLayout({ title }: { title: string }) {
    return (
        <Title order={2} style={{ color: "#696969", textAlign: "center" }}>
            {title}
            <Divider
                size="md"
                styles={(theme) => ({
                    root: {
                        borderColor: `${theme.colors.principalTheme[6]}`,
                    },
                })}
            />
        </Title>
    );
}

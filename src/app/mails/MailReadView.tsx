"use client";

import {
  useMantineColorScheme,
  UnstyledButton,
  ScrollArea,
  Container,
  Avatar,
  Stack,
  Title,
  Flex,
  Text,
  Center,
} from "@mantine/core";
// import { useViewportSize } from "@mantine/hooks";
import {
  HiOutlineDotsVertical,
  CgCornerDoubleUpLeft,
  CgCornerUpRight,
  CgCornerUpLeft,
  HiOutlineStar,
} from "../../icons";
import mailReadViewClasses from "../../styles/BtnStyles.module.css";

export default function MailReadView(): JSX.Element {
  // const { height } = useViewportSize();
  const { colorScheme } = useMantineColorScheme();

  return (
    <>
      <Container
        styles={(theme) => ({
          root: { height: "12%", padding: "0.2rem 0.2rem 0.5rem 0.2rem" },
        })}
      >
        <Flex style={{}} gap={"sm"} w={"100%"} align={"center"}>
          <Avatar src={null} alt="no image here" color="indigo" size="lg" />
          <Stack justify={"space-between"} w={"100%"} gap={12}>
            <Flex
              justify={"space-between"}
              w={"100%"}
              style={{ marginBottom: "-1rem" }}
            >
              <Title
                order={4}
                styles={(theme) => ({
                  root: {
                    color:
                      colorScheme === "light"
                        ? `${theme.colors.lightTheme[2]}`
                        : `${theme.colors.darkTheme[2]}`,
                    marginBottom: "-0.25rem",
                  },
                })}
              >
                Title - Email
              </Title>
              <Flex
                style={{ marginBottom: "-0.25rem" }}
                align={"center"}
                justify={"end"}
                gap={2}
              >
                <UnstyledButton
                  classNames={{
                    root:
                      colorScheme === "light"
                        ? mailReadViewClasses.btnMail
                        : mailReadViewClasses.btnMail_dark,
                  }}
                >
                  <Center style={{ fontSize: "1.5rem" }}>
                    <HiOutlineStar />
                  </Center>
                </UnstyledButton>
                <UnstyledButton
                  classNames={{
                    root:
                      colorScheme === "light"
                        ? mailReadViewClasses.btnMail
                        : mailReadViewClasses.btnMail_dark,
                  }}
                >
                  <Center style={{ fontSize: "1.5rem" }}>
                    <CgCornerUpLeft />
                  </Center>
                </UnstyledButton>
                <UnstyledButton
                  classNames={{
                    root:
                      colorScheme === "light"
                        ? mailReadViewClasses.btnMail
                        : mailReadViewClasses.btnMail_dark,
                  }}
                >
                  <Center style={{ fontSize: "1.5rem" }}>
                    <CgCornerDoubleUpLeft />
                  </Center>
                </UnstyledButton>
                <UnstyledButton
                  classNames={{
                    root:
                      colorScheme === "light"
                        ? mailReadViewClasses.btnMail
                        : mailReadViewClasses.btnMail_dark,
                  }}
                >
                  <Center style={{ fontSize: "1.5rem" }}>
                    <CgCornerUpRight />
                  </Center>
                </UnstyledButton>
                <UnstyledButton
                  classNames={{
                    root:
                      colorScheme === "light"
                        ? mailReadViewClasses.btnMail
                        : mailReadViewClasses.btnMail_dark,
                  }}
                >
                  <Center style={{ fontSize: "1.5rem" }}>
                    <HiOutlineDotsVertical />
                  </Center>
                </UnstyledButton>
              </Flex>
            </Flex>
            <Flex justify={"space-between"} w={"100%"}>
              <Flex align={"center"} gap={"sm"}>
                <Text
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? theme.colors.lightTheme[6]
                          : theme.colors.darkTheme[1],
                    },
                  })}
                >
                  Para:
                </Text>
                <Text
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? `${theme.colors.lightTheme[2]}`
                          : `${theme.colors.darkTheme[2]}`,
                    },
                  })}
                >
                  (correo@correo.com)
                </Text>
              </Flex>
              <Flex align={"center"} gap={2}>
                <Text
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? `${theme.colors.lightTheme[2]}`
                          : `${theme.colors.darkTheme[2]}`,
                    },
                  })}
                >
                  Para:
                </Text>
                <Text
                  styles={(theme) => ({
                    root: {
                      color:
                        colorScheme === "light"
                          ? `${theme.colors.lightTheme[2]}`
                          : `${theme.colors.darkTheme[2]}`,
                    },
                  })}
                >
                  (correo@correo.com)
                </Text>
              </Flex>
            </Flex>
          </Stack>
        </Flex>
      </Container>
      <Container
        p={10}
        styles={(theme) => ({
          root: {
            height: "88%",
            border:
              colorScheme === "light"
                ? `1px solid ${theme.colors.lightTheme[3]}`
                : `1px solid ${theme.colors.darkTheme[5]}`,
            borderRadius: "6px",
            backgroundColor:
              colorScheme === "light"
                ? "#FFFFFF"
                : `${theme.colors.darkTheme[7]}`,
          },
        })}
      >
        <ScrollArea
          h={"100%"}
          style={{ borderRadius: "6px" }}
          offsetScrollbars
          scrollbarSize={2}
        >
          <ul>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
            <li>Prueba</li>
          </ul>
        </ScrollArea>
      </Container>
    </>
  );
}

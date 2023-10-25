"use client";

import { useDisclosure } from "@mantine/hooks";
import { HiOutlinePencil, PiFolderSimpleDashed } from "@/components/IconsIndex";
import { AlarmCardProps } from "@/interface/interface";
import {
  UnstyledButton,
  Container,
  Collapse,
  Divider,
  Tooltip,
  Center,
  Title,
  Stack,
  Badge,
  Flex,
  Text,
  Grid,
} from "@mantine/core";
import AlarmCard from "./AlarmCard";

const arrayTest: AlarmCardProps[] = [
  {
    id: crypto.randomUUID(),
    title: "Titulo 1",
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 2",
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 3",
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 4",
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 5",
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 6",
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
  {
    id: crypto.randomUUID(),
    title: "Titulo 7",
    createdAt: "20/9/2023",
    createHour: "10:58 AM",
    forDate: "20/09/2023",
    forHour: "10:58 AM",
    description:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of",
  },
];

export default function AlarmFolder(): JSX.Element {
  const [opened, { toggle }] = useDisclosure(false);

  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting";

  let items: JSX.Element[];

  function cardItems(): JSX.Element[] {
    items = arrayTest.map((item: AlarmCardProps) => {
      return (
        <Grid.Col key={item.id} span={4}>
          <AlarmCard
            key={item.id}
            id={item.id}
            createHour={item.createHour}
            createdAt={item.createdAt}
            description={item.description}
            forDate={item.forDate}
            forHour={item.forHour}
            title={item.title}
          />
        </Grid.Col>
      );
    });

    return items;
  }
  // #FD0E78
  return (
    <Container
      p={12}
      w={"100%"}
      style={{
        border: "2px solid #FD0E78",
        borderRadius: "6px",
        backgroundColor: "#fd0e7933",
      }}
    >
      <Stack pb={5}>
        <Flex
          align={"center"}
          justify={"space-between"}
          styles={(theme) => ({ root: { color: `${"#FD0E78"}` } })}
        >
          <Stack gap={1} w={"60%"} onClick={toggle}>
            <Flex
              align={"center"}
              gap={5}
              style={{
                cursor: `${cardItems().length > 3 ? "pointer" : "default"}`,
              }}
            >
              <Text size="1.6rem">🎂</Text>
              <Title order={3}>Cumpleaños</Title>
              <Badge
                radius="sm"
                style={{ marginLeft: "0.5rem" }}
                styles={{
                  root: { backgroundColor: `${"#FD0E78"}` },
                  label: { fontSize: "0.9rem", color: "#FFF" },
                }}
              >
                {arrayTest.length}
              </Badge>
            </Flex>
            <Divider size="md" color="#FD0E78" />
          </Stack>
          <Tooltip
            label="Editar"
            withArrow
            offset={5}
            position="top"
            color="#FD0E78"
            styles={(theme) => ({
              tooltip: { backgroundColor: `${"#FD0E78"}` },
            })}
            transitionProps={{ transition: "skew-up", duration: 300 }}
          >
            <UnstyledButton style={{ fontSize: "1.5rem" }}>
              <Center>
                <HiOutlinePencil />
              </Center>
            </UnstyledButton>
          </Tooltip>
        </Flex>
        <Text
          size="sm"
          mah={10}
          styles={(theme) => ({
            root: {
              color: `${"#FD0E78"}`,
              marginTop: "-0.8rem",
              cursor: "default",
            },
          })}
        >
          {description.length > 100
            ? description.slice(0, 100).trim().concat("...")
            : description}
        </Text>
        {cardItems().length === 0 ? (
          <Container>
            <Flex
              gap={8}
              align={"center"}
              styles={(theme) => ({ root: { color: `${"#FD0E78"}` } })}
            >
              <Center>
                <PiFolderSimpleDashed style={{ fontSize: "2.5rem" }} />
              </Center>
              <Text size="2rem">Carpeta vacía</Text>
            </Flex>
          </Container>
        ) : (
          <>
            {cardItems().length > 3 ? (
              <>
                <Grid gutter="xs" pt={5} style={{ marginBottom: "-0.3rem" }}>
                  {cardItems().slice(0, 3)}
                </Grid>
                <Collapse in={opened}>
                  <Grid gutter="xs">{cardItems().slice(3)}</Grid>
                </Collapse>
              </>
            ) : (
              <Grid gutter="xs" pt={5}>
                {cardItems()}
              </Grid>
            )}
          </>
        )}
      </Stack>
    </Container>
  );
}

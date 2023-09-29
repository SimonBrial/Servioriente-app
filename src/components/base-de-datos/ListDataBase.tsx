"use client";

import { Table } from "@mantine/core";
import { StatusBadge } from "..";

export default function ListDataBase() {
    const elements = [
        {
            id: 1,
            name: "Mario",
            lastName: "Hurtado",
            car: "car",
            carID: "da6s5d4",
            site: "Estado",
            phone: "32165487",
            email: "correo@gmail.com",
            status: <StatusBadge title="GENERACION" />,
            birthdate: "16-12-1996",
        },{
            id: 2,
            name: "Mario",
            lastName: "Hurtado",
            car: "car",
            carID: "da6s5d4",
            site: "Estado",
            phone: "32165487",
            email: "correo@gmail.com",
            status: <StatusBadge title="GENERACION" />,
            birthdate: "16-12-1996",
        },{
            id: 3,
            name: "Mario",
            lastName: "Hurtado",
            car: "car",
            carID: "da6s5d4",
            site: "Estado",
            phone: "32165487",
            email: "correo@gmail.com",
            status: <StatusBadge title="GENERACION" />,
            birthdate: "16-12-1996",
        },{
            id: 4,
            name: "Mario",
            lastName: "Hurtado",
            car: "car",
            carID: "da6s5d4",
            site: "Estado",
            phone: "32165487",
            email: "correo@gmail.com",
            status: <StatusBadge title="GENERACION" />,
            birthdate: "16-12-1996",
        },{
            id: 5,
            name: "Mario",
            lastName: "Hurtado",
            car: "car",
            carID: "da6s5d4",
            site: "Estado",
            phone: "32165487",
            email: "correo@gmail.com",
            status: <StatusBadge title="GENERACION" />,
            birthdate: "16-12-1996",
        },
    ];
    const rows = elements.map((element) => (
        <Table.Tr key={element.id} style={{ color: "000" }}>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{element.lastName}</Table.Td>
            <Table.Td>{element.car}</Table.Td>
            <Table.Td>{element.carID}</Table.Td>
            <Table.Td>{element.site}</Table.Td>
            <Table.Td>{element.phone}</Table.Td>
            <Table.Td>{element.email}</Table.Td>
            <Table.Td>{element.status}</Table.Td>
            <Table.Td>{element.birthdate}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Table highlightOnHover>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Nombre</Table.Th>
                    <Table.Th>Apellido</Table.Th>
                    <Table.Th>Vehiculo</Table.Th>
                    <Table.Th>ID Vehiculo</Table.Th>
                    <Table.Th>Lugar</Table.Th>
                    <Table.Th>Telefono</Table.Th>
                    <Table.Th>Correo</Table.Th>
                    <Table.Th>Status</Table.Th>
                    <Table.Th>Cumpleaños</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
}

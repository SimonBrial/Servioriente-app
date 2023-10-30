import { Autocomplete } from "@mantine/core";
import { HiOutlineSearch } from "./IconsIndex";
import autoCompleteClass from "../styles/autoComplete.module.css";

export function AutoCompleteInput(): JSX.Element {
  return (
    <div className={autoCompleteClass.container}>
      <span className={autoCompleteClass.icon}>
        <HiOutlineSearch />
      </span>
      <Autocomplete
        size="xs"
        style={{ width: "100%" }}
        maxDropdownHeight={100}
        placeholder="Buscar Informacion del usuario"
        data={["Mario Hurtado", "Simon Briceño", "Manuel"]}
      />
    </div>
  );
}

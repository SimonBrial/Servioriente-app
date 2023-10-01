import { Autocomplete } from "@mantine/core";
import { HiOutlineSearch } from "react-icons/hi";
import autoCompleteClass from "./styles/autoComplete.module.css";

export function AutoCompleteInput() {
    return (
        <div className={autoCompleteClass.container}>
            <span className={autoCompleteClass.icon}>
                <HiOutlineSearch />
            </span>
            <Autocomplete
                size="xs"
                style={{ width: "100%" }}
                maxDropdownHeight={100}
                placeholder="Pick value or enter anything"
                data={[
                    "Mario Hurtado",
                    "Simon Briceño",
                    "Manuel"
                ]}
            />
        </div>
    );
}

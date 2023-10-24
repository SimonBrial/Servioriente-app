"use client";
import { Combobox, Input, InputBase, useCombobox } from "@mantine/core";
import { useState } from "react";

export function SelectSocialRed (): JSX.Element {
  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
    },
  });
  const [value, setValue] = useState<string | null>(null);

  const socialRedArray: string[] = ["Facebook", "Instagram", "Whatsapp"];

  const options = socialRedArray.map((item: string, index) => (
    <Combobox.Option value={item} key={index}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Combobox
        store={combobox}
        onOptionSubmit={(val) => {
          setValue(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <InputBase
            component="button"
            pointer
            rightSection={<Combobox.Chevron />}
            onClick={() => {
              combobox.toggleDropdown();
            }}
          >
            {value !== null ? (
              <Input.Placeholder>Pick value</Input.Placeholder>
            ) : (
              <></>
            )}
          </InputBase>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}

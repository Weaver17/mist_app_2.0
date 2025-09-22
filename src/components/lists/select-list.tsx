import React from "react";
import { CustomSelectContent, CustomSelectItem } from "../custom/c_select";
import { SelectOption } from "@/types/types";

type SelectListProps = {
    options: SelectOption[];
};

function SelectList({ options }: SelectListProps) {
    return (
        <CustomSelectContent className="rounded-none border-2">
            {options.map((option) => (
                <CustomSelectItem key={option.title} value={option.slug}>
                    {option.title}
                </CustomSelectItem>
            ))}
        </CustomSelectContent>
    );
}

export default SelectList;

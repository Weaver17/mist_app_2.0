import React from "react";
import { SelectContent, SelectItem } from "../custom/c_select";
import { SelectOption } from "@/types/types";

type SelectListProps = {
    options: SelectOption[];
};

function SelectList({ options }: SelectListProps) {
    return (
        <SelectContent className="rounded-none border-2">
            {options.map((option) => (
                <SelectItem key={option.title} value={option.slug}>
                    {option.title}
                </SelectItem>
            ))}
        </SelectContent>
    );
}

export default SelectList;

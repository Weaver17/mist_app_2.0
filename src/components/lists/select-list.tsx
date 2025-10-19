import React from "react";
import { SelectOption } from "@/types/types";
import { SelectContent, SelectItem } from "../custom/components/form/c_select";

type SelectListProps = {
    options: SelectOption[];
};

function SelectList({ options }: SelectListProps) {
    return (
        <SelectContent className="rounded-none bg-card">
            {options.map((option) => (
                <SelectItem key={option.title} value={option.slug}>
                    {option.title}
                </SelectItem>
            ))}
        </SelectContent>
    );
}

export default SelectList;

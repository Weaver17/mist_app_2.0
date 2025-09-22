import React from "react";
import {
    CustomSelect,
    CustomSelectContent,
    CustomSelectItem,
    CustomSelectTrigger,
    CustomSelectValue,
} from "../custom/c_select";
import SelectList from "../lists/select-list";
import { CATEGORIES, PLATFORMS, SORT_OPTIONS } from "@/lib/constants";

function GamesSelect() {
    return (
        <div className="flex flex-col gap-2 w-full max-w-[800px] mx-auto items-center grid3:flex-row grid3:justify-between grid3:items-center grid3:px-8">
            <div className="games-select-container">
                <CustomSelect>
                    <CustomSelectTrigger className="games-select-trigger">
                        <CustomSelectValue placeholder={CATEGORIES[0].title} />
                    </CustomSelectTrigger>
                    <SelectList options={CATEGORIES} />
                </CustomSelect>
            </div>
            <div className="games-select-container">
                <CustomSelect>
                    <CustomSelectTrigger className="games-select-trigger">
                        <CustomSelectValue
                            placeholder={SORT_OPTIONS[0].title}
                        />
                    </CustomSelectTrigger>
                    <SelectList options={SORT_OPTIONS} />
                </CustomSelect>
            </div>
            <div className="games-select-container">
                <CustomSelect>
                    <CustomSelectTrigger className="games-select-trigger">
                        <CustomSelectValue placeholder={PLATFORMS[0].title} />
                    </CustomSelectTrigger>
                    <SelectList options={PLATFORMS} />
                </CustomSelect>
            </div>
        </div>
    );
}

export default GamesSelect;

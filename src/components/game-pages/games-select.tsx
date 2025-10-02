import React from "react";
import {
    CustomSelect,
    CustomSelectTrigger,
    CustomSelectValue,
} from "../custom/c_select";
import SelectList from "../lists/select-list";
import { SORT_OPTIONS } from "@/lib/constants";

type GamesSelectProps = {
    sortBy: string;
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
};

function GamesSelect({ sortBy, setSortBy }: GamesSelectProps) {
    return (
        <div className="flex flex-col gap-2 w-full max-w-[800px] mx-auto items-center grid3:flex-row grid3:justify-between grid3:items-center grid3:px-8">
            {/* <div className="flex flex-col gap-2 w-1/2 md:w-1/3">
                <span className="text-sm text-center">Category</span>
                <div className="games-select-container">
                    <CustomSelect
                        onValueChange={(value) =>
                            onFilterChange("category", value)
                        }
                        value={category}
                    >
                        <CustomSelectTrigger className="games-select-trigger">
                            <CustomSelectValue placeholder="Category" />
                        </CustomSelectTrigger>
                        <SelectList options={filteredCategories} />
                    </CustomSelect>
                </div>
            </div> */}
            <div className="flex flex-col mx-auto gap-2 w-[280px]">
                <span className="text-sm text-center">Sort By</span>
                <div className="games-select-container">
                    <CustomSelect
                        onValueChange={(value) => {
                            setSortBy(value);
                        }}
                        value={sortBy}
                    >
                        <CustomSelectTrigger className="games-select-trigger">
                            <CustomSelectValue
                                placeholder={SORT_OPTIONS[0].title}
                            />
                        </CustomSelectTrigger>
                        <SelectList options={SORT_OPTIONS} />
                    </CustomSelect>
                </div>
            </div>
            {/* <div className="flex flex-col gap-2 w-1/2 md:w-1/3">
                <span className="text-sm text-center">Platform</span>
                <div className="games-select-container">
                    <CustomSelect
                        onValueChange={(value) =>
                            onFilterChange("platform", value)
                        }
                        value={platform}
                    >
                        <CustomSelectTrigger className="games-select-trigger">
                            <CustomSelectValue
                                placeholder={PLATFORMS[0].title}
                            />
                        </CustomSelectTrigger>
                        <SelectList options={PLATFORMS} />
                    </CustomSelect>
                </div>
            </div> */}
        </div>
    );
}

export default GamesSelect;

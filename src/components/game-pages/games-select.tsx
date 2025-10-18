import React from "react";
import SelectList from "../lists/select-list";
import { SORT_OPTIONS } from "@/lib/constants";
import {
    Select,
    SelectTrigger,
    SelectValue,
} from "../custom/components/form/c_select";

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
                    <Select
                        onValueChange={(value) =>
                            onFilterChange("category", value)
                        }
                        value={category}
                    >
                        <SelectTrigger className="games-select-trigger">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectList options={filteredCategories} />
                    </Select>
                </div>
            </div> */}
            <div className="flex flex-col mx-auto gap-2 w-[280px]">
                <span className="text-sm text-center">Sort By</span>
                <div className="games-select-container">
                    <Select
                        onValueChange={(value) => {
                            setSortBy(value);
                        }}
                        value={sortBy}
                    >
                        <SelectTrigger className="games-select-trigger">
                            <SelectValue placeholder={SORT_OPTIONS[0].title} />
                        </SelectTrigger>
                        <SelectList options={SORT_OPTIONS} />
                    </Select>
                </div>
            </div>
            {/* <div className="flex flex-col gap-2 w-1/2 md:w-1/3">
                <span className="text-sm text-center">Platform</span>
                <div className="games-select-container">
                    <Select
                        onValueChange={(value) =>
                            onFilterChange("platform", value)
                        }
                        value={platform}
                    >
                        <SelectTrigger className="games-select-trigger">
                            <SelectValue
                                placeholder={PLATFORMS[0].title}
                            />
                        </SelectTrigger>
                        <SelectList options={PLATFORMS} />
                    </Select>
                </div>
            </div> */}
        </div>
    );
}

export default GamesSelect;

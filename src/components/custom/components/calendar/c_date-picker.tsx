"use client";

import * as React from "react";
import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "../buttons/c_button";
import { Calendar } from "./c_calendar";
import { Input } from "../form/c_input";
import { Label } from "../form/c_label";
import { Popover, PopoverTrigger, PopoverContent } from "../c_popover";

export function DatePickerDoB() {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    return (
        <div className="flex flex-col gap-3">
            <Label htmlFor="date" className="px-1">
                Date of birth
            </Label>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        id="date"
                        className="w-48 justify-between font-normal"
                    >
                        {date ? date.toLocaleDateString() : "Select date"}
                        <ChevronDownIcon />
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="w-auto overflow-hidden p-0"
                    align="start"
                >
                    <Calendar
                        mode="single"
                        selected={date}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                            setDate(date);
                            setOpen(false);
                        }}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}

function formatDate(date: Date | undefined) {
    if (!date) {
        return "";
    }
    return date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}
function isValidDate(date: Date | undefined) {
    if (!date) {
        return false;
    }
    return !isNaN(date.getTime());
}
export function DatePickerInput() {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(
        new Date("2025-06-01")
    );
    const [month, setMonth] = React.useState<Date | undefined>(date);
    const [value, setValue] = React.useState(formatDate(date));
    return (
        <div className="flex flex-col gap-3">
            <Label htmlFor="date" className="px-1">
                Subscription Date
            </Label>
            <div className="relative flex gap-2">
                <Input
                    id="date"
                    value={value}
                    placeholder="June 01, 2025"
                    className="bg-background pr-10"
                    onChange={(e) => {
                        const date = new Date(e.target.value);
                        setValue(e.target.value);
                        if (isValidDate(date)) {
                            setDate(date);
                            setMonth(date);
                        }
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "ArrowDown") {
                            e.preventDefault();
                            setOpen(true);
                        }
                    }}
                />
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            id="date-picker"
                            variant="ghost"
                            className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                        >
                            <CalendarIcon className="size-3.5" />
                            <span className="sr-only">Select date</span>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="end"
                        alignOffset={-8}
                        sideOffset={10}
                    >
                        <Calendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            month={month}
                            onMonthChange={setMonth}
                            onSelect={(date) => {
                                setDate(date);
                                setValue(formatDate(date));
                                setOpen(false);
                            }}
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}

export function DatePickerDateAndTime() {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    return (
        <div className="flex gap-4">
            <div className="flex flex-col gap-3">
                <Label htmlFor="date-picker" className="px-1">
                    Date
                </Label>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            id="date-picker"
                            className="w-32 justify-between font-normal"
                        >
                            {date ? date.toLocaleDateString() : "Select date"}
                            <ChevronDownIcon />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="start"
                    >
                        <Calendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            onSelect={(date) => {
                                setDate(date);
                                setOpen(false);
                            }}
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="flex flex-col gap-3">
                <Label htmlFor="time-picker" className="px-1">
                    Time
                </Label>
                <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    defaultValue="10:30:00"
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
            </div>
        </div>
    );
}

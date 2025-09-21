"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function CustomTable({ className, ...props }: React.ComponentProps<"table">) {
    return (
        <div
            data-slot="table-container"
            className="relative w-full overflow-x-auto"
        >
            <table
                data-slot="table"
                className={cn("w-full caption-top text-sm", className)}
                {...props}
            />
        </div>
    );
}

function CustomTableHeader({
    className,
    ...props
}: React.ComponentProps<"thead">) {
    return (
        <thead
            data-slot="table-header"
            className={cn("bg-muted/70 [&_tr]:border-b", className)}
            {...props}
        />
    );
}

function CustomTableBody({
    className,
    ...props
}: React.ComponentProps<"tbody">) {
    return (
        <tbody
            data-slot="table-body"
            className={cn("[&_tr:last-child]:border-0", className)}
            {...props}
        />
    );
}

function CustomTableFooter({
    className,
    ...props
}: React.ComponentProps<"tfoot">) {
    return (
        <tfoot
            data-slot="table-footer"
            className={cn(
                "bg-muted/70 border-t font-medium [&>tr]:last:border-b-0",
                className
            )}
            {...props}
        />
    );
}

function CustomTableRow({ className, ...props }: React.ComponentProps<"tr">) {
    return (
        <tr
            data-slot="table-row"
            className={cn(
                "hover:bg-muted/80 data-[state=selected]:bg-muted border-b transition-colors",
                className
            )}
            {...props}
        />
    );
}

function CustomTableHead({ className, ...props }: React.ComponentProps<"th">) {
    return (
        <th
            data-slot="table-head"
            className={cn(
                "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
                className
            )}
            {...props}
        />
    );
}

function CustomTableCell({ className, ...props }: React.ComponentProps<"td">) {
    return (
        <td
            data-slot="table-cell"
            className={cn(
                "p-3 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
                className
            )}
            {...props}
        />
    );
}

function CustomTableCaption({
    className,
    ...props
}: React.ComponentProps<"caption">) {
    return (
        <caption
            data-slot="table-caption"
            className={cn("text-muted-foreground my-4 text-sm", className)}
            {...props}
        />
    );
}

export {
    CustomTable,
    CustomTableHeader,
    CustomTableBody,
    CustomTableFooter,
    CustomTableHead,
    CustomTableRow,
    CustomTableCell,
    CustomTableCaption,
};

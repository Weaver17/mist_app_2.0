import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

function CustomBreadcrumb({ ...props }: React.ComponentProps<"nav">) {
    return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function CustomBreadcrumbList({
    className,
    ...props
}: React.ComponentProps<"ol">) {
    return (
        <ol
            data-slot="breadcrumb-list"
            className={cn(
                "text-muted-foreground flex flex-wrap items-center gap-2 text-xs break-words sm:gap-3",
                className
            )}
            {...props}
        />
    );
}

function CustomBreadcrumbItem({
    className,
    ...props
}: React.ComponentProps<"li">) {
    return (
        <li
            data-slot="breadcrumb-item"
            className={cn("inline-flex items-center gap-1.5", className)}
            {...props}
        />
    );
}

function CustomBreadcrumbLink({
    asChild,
    className,
    ...props
}: React.ComponentProps<"a"> & {
    asChild?: boolean;
}) {
    const Comp = asChild ? Slot : "a";

    return (
        <Comp
            data-slot="breadcrumb-link"
            className={cn("hover:text-foreground transition-colors", className)}
            {...props}
        />
    );
}

function CustomBreadcrumbPage({
    className,
    ...props
}: React.ComponentProps<"span">) {
    return (
        <span
            data-slot="breadcrumb-page"
            aria-disabled="true"
            aria-current="page"
            className={cn("text-foreground font-semibold", className)}
            {...props}
        />
    );
}

function CustomBreadcrumbSeparator({
    children,
    className,
    ...props
}: React.ComponentProps<"li">) {
    return (
        <li
            data-slot="breadcrumb-separator"
            aria-hidden="true"
            className={cn("[&>svg]:size-4", className)}
            {...props}
        >
            {children ?? <ChevronRight />}
        </li>
    );
}

function CustomBreadcrumbEllipsis({
    className,
    ...props
}: React.ComponentProps<"span">) {
    return (
        <span
            data-slot="breadcrumb-ellipsis"
            aria-hidden="true"
            className={cn("flex size-9 items-center justify-center", className)}
            {...props}
        >
            <MoreHorizontal className="size-4" />
            <span className="sr-only">More</span>
        </span>
    );
}

export {
    CustomBreadcrumb,
    CustomBreadcrumbList,
    CustomBreadcrumbItem,
    CustomBreadcrumbLink,
    CustomBreadcrumbPage,
    CustomBreadcrumbSeparator,
    CustomBreadcrumbEllipsis,
};

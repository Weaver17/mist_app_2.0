import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Separator } from "./c_separator";

function ItemGroup({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="item-group"
            className={cn("group/item-group flex flex-col ", className)}
            {...props}
        />
    );
}

function ItemSeparator({
    className,
    ...props
}: React.ComponentProps<typeof Separator>) {
    return (
        <Separator
            data-slot="item-separator"
            orientation="horizontal"
            className={cn("my-0", className)}
            {...props}
        />
    );
}

const customItemVariants = cva(
    "group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_-20px_40px_-20px_#dedede_inset] dark:transform-gpu dark:[box-shadow:0_-20px_40px_-20px_#ffffff1f_inset] dark:backdrop-blur-md",
    {
        variants: {
            variant: {
                default: "bg-transparent",
                outline: "border-border",
                muted: "bg-muted/50",
            },
            size: {
                default: "p-4 gap-4 ",
                sm: "py-3 px-4 gap-2.5",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

function Item({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    ...props
}: React.ComponentProps<"div"> &
    VariantProps<typeof customItemVariants> & { asChild?: boolean }) {
    const Comp = asChild ? Slot : "div";
    return (
        <Comp
            data-slot="item"
            data-variant={variant}
            data-size={size}
            className={cn(customItemVariants({ variant, size, className }))}
            {...props}
        />
    );
}

const customItemMediaVariants = cva(
    "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5",
    {
        variants: {
            variant: {
                default: "bg-transparent",
                icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
                image: "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

function ItemMedia({
    className,
    variant = "default",
    ...props
}: React.ComponentProps<"div"> & VariantProps<typeof customItemMediaVariants>) {
    return (
        <div
            data-slot="item-media"
            data-variant={variant}
            className={cn(customItemMediaVariants({ variant, className }))}
            {...props}
        />
    );
}

function ItemContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="item-content"
            className={cn(
                "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
                className
            )}
            {...props}
        />
    );
}

function ItemTitle({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="item-title"
            className={cn(
                "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
                className
            )}
            {...props}
        />
    );
}

function ItemDescription({ className, ...props }: React.ComponentProps<"p">) {
    return (
        <p
            data-slot="item-description"
            className={cn(
                "text-muted line-clamp-2 text-sm leading-normal font-normal text-balance",
                "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
                className
            )}
            {...props}
        />
    );
}

function ItemActions({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="item-actions"
            className={cn("flex items-center gap-2", className)}
            {...props}
        />
    );
}

function ItemHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="item-header"
            className={cn(
                "flex basis-full items-center justify-between gap-2",
                className
            )}
            {...props}
        />
    );
}

function ItemFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="item-footer"
            className={cn(
                "flex basis-full items-center justify-between gap-2",
                className
            )}
            {...props}
        />
    );
}

export {
    Item,
    ItemMedia,
    ItemContent,
    ItemActions,
    ItemGroup,
    ItemSeparator,
    ItemTitle,
    ItemDescription,
    ItemHeader,
    ItemFooter,
};

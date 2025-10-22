import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const customButtonVariants = cva(
    "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground hover:bg-primary/80 dark:hover:bg-primary/60 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_-20px_20px_-20px_#1a1a1a_inset] dark:transform-gpu dark:[box-shadow:0_-20px_20px_-20px_#0e0e0e_inset] dark:backdrop-blur-md",
                destructive:
                    "bg-destructive text-primary-foreground hover:bg-destructive/70 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 dark:hover:bg-destructive [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_-20px_20px_-20px_#1a1a1a_inset] dark:transform-gpu dark:[box-shadow:0_-20px_20px_-20px_#0e0e0e_inset] dark:backdrop-blur-md",
                outline:
                    "border bg-background shadow-xs hover:bg-muted-foreground hover:text-foreground hover:border-foreground dark:bg-transparent dark:border-border dark:hover:bg-muted  [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_-20px_20px_-20px_#b2b2b2_inset] dark:transform-gpu dark:[box-shadow:0_-20px_20px_-20px_#2f2f2f_inset] dark:backdrop-blur-md",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/50  [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_-20px_20px_-20px_#1a1a1a_inset] dark:transform-gpu dark:[box-shadow:0_-20px_20px_-20px_#0e0e0e_inset] dark:backdrop-blur-md",
                ghost: "hover:[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_-40px_40px_-40px_#c0c0c0_inset] hover:text-foreground dark:hover:[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_-40px_40px_-40px_#3d3d3d_inset] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_-20px_20px_-20px_#dedede_inset] dark:transform-gpu dark:[box-shadow:0_0_0_1px_#2d2d2d,0_2px_4px_#2d2d2d,0_-20px_20px_-20px_#2d2d2d_inset] dark:backdrop-blur-md",
                link: "text-primary underline-offset-3 hover:underline dark:text-foreground/90",
                shadowless:
                    "[box-shadow:(0,0,0)] dark:[box-shadow:(0,0,0)] hover:bg-muted/10",
                default_plain:
                    "bg-primary text-primary-foreground hover:bg-primary/80 dark:hover:bg-primary/60",
                destructive_plain:
                    "bg-destructive text-primary-foreground hover:bg-destructive/70 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 dark:hover:bg-destructive",
                outline_plain:
                    "border bg-background shadow-xs hover:bg-muted-foreground hover:text-foreground hover:border-foreground dark:bg-transparent dark:border-border dark:hover:bg-muted",
                secondary_plain:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/50",
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 rounded-md gap-1.5 px-3 text-xs has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 text-lg has-[>svg]:px-4",
                icon: "size-9",
                "icon-sm": "size-8",
                "icon-lg": "size-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof customButtonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            className={cn(customButtonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Button, customButtonVariants };

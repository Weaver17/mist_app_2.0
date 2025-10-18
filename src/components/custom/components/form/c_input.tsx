import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "file:text-foreground placeholder:text-muted selection:bg-primary selection:text-primary-foreground bg-input dark:bg-input border border-border/25 dark:border-border/50 dark:placeholder:text-muted h-9 w-full min-w-0 rounded-md px-3.5 py-1.5 text-base shadow-sm transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                "focus-visible:border-ring focus-visible:ring-ring/70 focus-visible:ring-[2px]",
                "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                className
            )}
            {...props}
        />
    );
}

function SquareInput({
    className,
    type,
    ...props
}: React.ComponentProps<"input">) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(
                "file:text-foreground placeholder:text-muted selection:bg-primary selection:text-primary-foreground h-9 w-full min-w-0 border-l border-b border-border bg-transparent dark:bg-transparent dark:placeholder:text-muted px-3.5 py-1.5 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                "focus-visible:border-l-2 focus-visible:border-b-2 focus-visible:border-l-ring focus-visible:border-b-ring dark:focus-visible:border-l-primary dark:focus-visible:border-b-primary",
                "aria-invalid:border-l-2 aria-invalid:border-b-2 dark:aria-invalid:border-l-destructive/40 dark:aria-invalid:border-b-destructive/40 aria-invalid:border-l-destructive aria-invalid:border-b-destructive",
                className
            )}
            {...props}
        />
    );
}

export { Input, SquareInput };

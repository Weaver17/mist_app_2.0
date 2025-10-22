import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "bg-input border placeholder:text-muted focus-visible:border-ring focus-visible:ring-ring/70 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input dark:placeholder:text-muted flex field-sizing-content min-h-16 w-full rounded-sm px-3 py-2 text-base shadow-sm transition-[color,box-shadow] outline-none focus-visible:ring-[2px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                className
            )}
            {...props}
        />
    );
}

export { Textarea };

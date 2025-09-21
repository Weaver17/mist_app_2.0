import { cn } from "@/lib/utils";

function CustomSkeleton({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="skeleton"
            className={cn("bg-zinc-300/75 animate-pulse rounded-md", className)}
            {...props}
        />
    );
}

export { CustomSkeleton };

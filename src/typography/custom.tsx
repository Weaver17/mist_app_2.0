import React from "react";
import { cn } from "@/lib/utils";

export function H1Custom({
    children,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <h1
            className={cn(
                "scroll-m-20 text-2xl font-extrabold tracking-tight text-balance md:text-3xl lg:text-4xl",
                className
            )}
        >
            {children}
        </h1>
    );
}

export function H2Custom({
    children,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <h2
            className={cn(
                "scroll-m-20 border-b pb-2 text-2xl font-bold tracking-tight first:mt-0 md:text-4xl",
                className
            )}
        >
            {children}
        </h2>
    );
}

export function H3Custom({
    children,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <h3
            className={cn(
                "scroll-m-20 text-2xl font-semibold tracking-tight",
                className
            )}
        >
            {children}
        </h3>
    );
}

export function H4Custom({
    children,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <h4
            className={cn(
                "scroll-m-20 text-xl font-semibold tracking-tight",
                className
            )}
        >
            {children}
        </h4>
    );
}

export function H5Custom({
    children,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <h4
            className={cn(
                "scroll-m-20 text-xl font-medium tracking-tight",
                className
            )}
        >
            {children}
        </h4>
    );
}

export function H6Custom({
    children,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <h4
            className={cn(
                "scroll-m-20 text-lg font-medium tracking-tight",
                className
            )}
        >
            {children}
        </h4>
    );
}

export function PCustom({
    children,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <p className={cn("leading-7 [&:not(:first-child)]:mt-4", className)}>
            {children}
        </p>
    );
}

export function BlockquoteCustom({
    children,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <blockquote className={cn("mt-6 border-l-2 pl-4 italic", className)}>
            {children}
        </blockquote>
    );
}

export function TableCustom({ className }: { className?: string }) {
    return (
        <div className={cn("my-6 w-full overflow-y-auto", className)}>
            <table className="w-full">
                <thead>
                    <tr className="even:bg-muted m-0 border-t p-0">
                        <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                            King&apos;s Treasury
                        </th>
                        <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                            People&apos;s happiness
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="even:bg-muted m-0 border-t p-0">
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Empty
                        </td>
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Overflowing
                        </td>
                    </tr>
                    <tr className="even:bg-muted m-0 border-t p-0">
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Modest
                        </td>
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Satisfied
                        </td>
                    </tr>
                    <tr className="even:bg-muted m-0 border-t p-0">
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Full
                        </td>
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Ecstatic
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export function ListCustom({
    children,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-1", className)}>
            {children}
        </ul>
    );
}

export function InlineCodeCustom({
    children,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <code
            className={cn(
                "bg-muted relative rounded-sm px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
                className
            )}
        >
            {children}
        </code>
    );
}

export function LeadCustom({
    children,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <p className={cn("text-muted-foreground text-xl", className)}>
            {children}
        </p>
    );
}

export function LargeCustom({
    children,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <div className={cn("text-lg font-semibold", className)}>
            {" "}
            {children}
        </div>
    );
}

export function SmallCustom({
    children,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <small className={cn("text-sm leading-none font-medium", className)}>
            {children}
        </small>
    );
}

export function MutedCustom({
    children,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <p className={cn("text-muted-dark text-sm", className)}>{children}</p>
    );
}

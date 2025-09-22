"use client";
import { H1Custom, MutedCustom, PCustom } from "@/typography/custom";
import {
    CustomCard,
    CustomCardContent,
    CustomCardHeader,
} from "@/components/custom/c_card";
import React from "react";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { CustomInput } from "@/components/custom/c_input";
import { CustomButton } from "@/components/custom/c_button";
import Link from "next/link";

function SignUpPage() {
    const signUpForm = useForm();

    return (
        <div className="p-4 flex flex-col gap-4 w-full mx-auto md:p-12 lg:p-18">
            <CustomCard className="min-w-[260px]">
                <CustomCardHeader className="border-b pb-2!">
                    <H1Custom className="text-center font-special">
                        Sign Up
                    </H1Custom>
                </CustomCardHeader>
                <CustomCardContent>
                    <Form {...signUpForm}>
                        <form
                            action=""
                            className="flex flex-col gap-4 max-w-[400px] mx-auto"
                        >
                            <div className="flex flex-col gap-4">
                                <FormField
                                    control={signUpForm.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-mono font-semibold">
                                                Username
                                            </FormLabel>
                                            <FormControl>
                                                <CustomInput
                                                    className="rounded-none! border-t-0 border-r-0 border-b! border-l! border-foreground! font-mono"
                                                    placeholder="Choose a username"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription className="text-xs font-semibold">
                                                Min 4 characters
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={signUpForm.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-mono font-semibold">
                                                Email
                                            </FormLabel>
                                            <FormControl>
                                                <CustomInput
                                                    className="rounded-none! border-t-0 border-r-0 border-b! border-l! border-foreground! font-mono"
                                                    placeholder="email@example.com"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription className="text-xs font-semibold">
                                                Enter your email
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={signUpForm.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-mono font-semibold">
                                                Password
                                            </FormLabel>
                                            <FormControl>
                                                <CustomInput
                                                    className="rounded-none! border-t-0 border-r-0 border-b! border-l! border-foreground! font-mono"
                                                    placeholder="Choose a password"
                                                    type="password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription className="text-xs font-semibold">
                                                Min 8 characters, 1 letter, 1
                                                number, 1 special character
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={signUpForm.control}
                                    name="confrim"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-mono font-semibold">
                                                Confirm Password
                                            </FormLabel>
                                            <FormControl>
                                                <CustomInput
                                                    className="rounded-none! border-t-0 border-r-0 border-b! border-l! border-foreground! font-mono"
                                                    placeholder="Passwords must match"
                                                    type="password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormDescription className="text-xs font-semibold">
                                                Confirm password
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex flex-col gap-4">
                                <CustomButton className="w-full text-muted-light font-special">
                                    Sign Up
                                </CustomButton>
                                <MutedCustom className="text-center">
                                    Already have an account?{" "}
                                    <Link
                                        href="/signin"
                                        className="underline underline-offset-4 hover:text-foreground"
                                    >
                                        Sign In
                                    </Link>
                                </MutedCustom>
                            </div>
                        </form>
                    </Form>
                </CustomCardContent>
            </CustomCard>
        </div>
    );
}

export default SignUpPage;

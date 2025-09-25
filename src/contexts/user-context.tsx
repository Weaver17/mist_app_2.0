"use client";
import { User } from "@/types/types";
import { createContext, useMemo, useState, useContext } from "react";

interface UserContextType {
    login: (user: User) => Promise<void>;
    logout: () => void;
    currentUser: User | null;
    isLoading: boolean;
    isLoggedIn: boolean;
}

export const userContext = createContext<UserContextType | null>(null);

export function UserProvider({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = async (user: User) => {
        setIsLoading(true);
        try {
            setIsLoggedIn(true);
            setCurrentUser(user);
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        setIsLoading(true);
        try {
            setCurrentUser(null);
            setIsLoggedIn(false);
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const values = useMemo(
        () => ({
            login,
            logout,
            currentUser,
            setCurrentUser,
            isLoading,
            setIsLoading,
            isLoggedIn,
            setIsLoggedIn,
        }),
        [
            currentUser,
            setCurrentUser,
            isLoading,
            setIsLoading,
            isLoggedIn,
            setIsLoggedIn,
        ]
    );

    return (
        <userContext.Provider value={values}>{children}</userContext.Provider>
    );
}

export function useUserContext() {
    const context = useContext(userContext);
    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
}

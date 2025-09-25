"use client";
import { SavedGame, User } from "@/types/types";
import {
    createContext,
    useMemo,
    useState,
    useContext,
    useCallback,
} from "react";

interface UserContextType {
    login: (user: User) => Promise<void>;
    logout: () => void;
    editUsername: (username: string) => Promise<void>;
    saveGame: (game: SavedGame) => Promise<void>;
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

    const logout = async () => {
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

    const editUsername = useCallback(
        async (username: string) => {
            setIsLoading(true);
            try {
                if (!currentUser) {
                    throw Error("Must be logged in to edit username");
                }

                setCurrentUser({ ...currentUser, username });
            } catch (error) {
                console.error(error);
                throw error;
            } finally {
                setIsLoading(false);
            }
        },
        [currentUser]
    );

    const saveGame = useCallback(
        async (game: SavedGame) => {
            setIsLoading(true);
            try {
                if (!currentUser) {
                    throw Error("Must be logged in to save game");
                }

                currentUser.savedGames?.push(game);
            } catch (error) {
                console.error(error);
                throw error;
            } finally {
                setIsLoading(false);
            }
        },
        [currentUser]
    );

    const values = useMemo(
        () => ({
            login,
            logout,
            editUsername,
            saveGame,
            currentUser,
            setCurrentUser,
            isLoading,
            setIsLoading,
            isLoggedIn,
            setIsLoggedIn,
        }),
        [
            editUsername,
            saveGame,
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

"use client";
import {
    createUser,
    fetchSession,
    getSavedGamesAction,
    getUserById,
    signIn,
    signOut,
} from "@/actions/actions";
import { TNewUser, TSignInSchema } from "@/types/types";
import {
    createContext,
    useMemo,
    useState,
    useContext,
    useCallback,
} from "react";
import { SavedGame, User } from "../../generated/prisma-client";

interface UserContextType {
    signUp: (
        { name, email, image }: TNewUser,
        password: string,
        confirmPassword: string
    ) => Promise<void>;
    login: (user: TSignInSchema) => Promise<void>;
    logout: () => void;
    editUsername: (username: string) => void;
    getSession: () => Promise<void>;
    saveGame: (game: SavedGame) => Promise<void>;
    unsaveGame: (gameId: number) => Promise<void>;
    getSavedGames: (currentUser: User) => Promise<void>;
    isGameSaved: (gameId: number) => boolean;
    currentUser: User | null;
    isLoading: boolean;
    isLoggedIn: boolean;
    savedGames: SavedGame[];
}

export const userContext = createContext<UserContextType | null>(null);

export function UserProvider({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [savedGames, setSavedGames] = useState<SavedGame[]>([]);

    const signUp = useCallback(
        async (
            { name, email, image }: TNewUser,
            password: string,
            confirmPassword: string
        ) => {
            setIsLoading(true);
            try {
                await createUser(
                    { name, email, image },
                    password,
                    confirmPassword
                );
            } catch (error) {
                console.error(error);
                throw error;
            } finally {
                setIsLoading(false);
            }
        },
        []
    );

    const login = async (user: TSignInSchema) => {
        setIsLoading(true);
        try {
            setIsLoggedIn(true);
            await signIn(user).then((user) => {
                setCurrentUser(user.user as User);
            });
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
            await signOut();
            setCurrentUser(null);
            setIsLoggedIn(false);
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const getSession = async () => {
        setIsLoading(true);
        try {
            await fetchSession().then((session) => {
                if (!session) return;
                getUserById(session.user.id).then((user) => {
                    setCurrentUser(user);
                    setIsLoggedIn(true);
                });
            });
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const editUsername = useCallback(
        async (name: string) => {
            setIsLoading(true);
            try {
                if (!currentUser) {
                    throw Error("Must be logged in to edit name");
                }

                setCurrentUser({ ...currentUser, name });
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
                setSavedGames((prevSavedGames) => [...prevSavedGames, game]);
            } catch (error) {
                console.error(error);
                throw error;
            } finally {
                setIsLoading(false);
            }
        },
        [currentUser]
    );

    const unsaveGame = useCallback(
        async (gameId: number) => {
            setIsLoading(true);
            try {
                if (!currentUser) {
                    throw Error("Must be logged in to unsave game");
                }
                setSavedGames((prevSavedGames) =>
                    prevSavedGames.filter((game) => game.id !== gameId)
                );
            } catch (error) {
                console.error(error);
                throw error;
            } finally {
                setIsLoading(false);
            }
        },
        [currentUser]
    );

    const getSavedGames = useCallback(async (currentUser: User) => {
        try {
            const games = await getSavedGamesAction(currentUser.email);
            setSavedGames(games);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }, []);

    const isGameSaved = useCallback(
        (gameId: number) => {
            return savedGames.some((game) => game.id === gameId);
        },
        [savedGames]
    );

    const values = useMemo(
        () => ({
            signUp,
            login,
            logout,
            editUsername,
            getSession,
            saveGame,
            unsaveGame,
            getSavedGames,
            isGameSaved,
            savedGames,
            currentUser,
            isLoading,
            isLoggedIn,
        }),
        [
            signUp,
            editUsername,
            saveGame,
            unsaveGame,
            getSavedGames,
            isGameSaved,
            savedGames,
            currentUser,
            isLoading,
            isLoggedIn,
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

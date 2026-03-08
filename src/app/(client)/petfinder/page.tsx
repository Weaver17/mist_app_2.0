"use client";

import { H1, P } from "@/typography/custom";
import Script from "next/script";
import { useState, useEffect } from "react";

declare global {
    interface HTMLElementTagNameMap {
        "pet-scroller": HTMLElement & { [key: string]: unknown };
    }
}

declare module "react" {
    interface IntrinsicElements {
        "pet-scroller": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement> & { [key: string]: unknown },
            HTMLElement
        >;
    }
}

export default function PetfinderPage() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="client-page">
            <H1 className="text-center font-special pb-4">Adopt a Pet</H1>

            <P className="text-center w-1/2 mx-auto">
                Find your next co-op partner here! They may not be free like the
                games, but adopting a pet can bring just as much joy as gaming!
            </P>

            {isClient && (
                // @ts-expect-error snippet works just fine as far a I can tell
                <pet-scroller
                    s3Url="https://dbw3zep4prcju.cloudfront.net/"
                    apiBase="https://psl.petfinder.com/graphql"
                    organization="[]"
                    status="adoptable"
                    petfinderUrl="https://www.petfinder.com/"
                    hideBreed="false"
                    limit="24"
                    petListTitle=""
                >
                    {/* @ts-expect-error snippet works just fine as far a I can tell */}
                </pet-scroller>
            )}
            <Script
                src="https://www.petfinder.com/pet-scroller.bundle.js"
                strategy="lazyOnload"
            />
        </div>
    );
}

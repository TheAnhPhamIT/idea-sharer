import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/app/provider";
import { Header } from "@/app/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Idea Sharer",
    description: "Share your ideas with everyone",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className={inter.className}>
                <Provider>
                    <Header />
                    {children}
                </Provider>
            </body>
        </html>
    );
}

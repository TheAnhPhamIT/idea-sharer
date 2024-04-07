import { Header } from "@/app/(main)/_components/header";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <div className="container mx-auto mt-20">{children}</div>
        </>
    );
}

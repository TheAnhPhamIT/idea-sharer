import { Header } from "@/app/(main)/_components/header";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container mx-auto">
            <Header />
            {children}
        </div>
    );
}

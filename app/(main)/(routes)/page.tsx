// import * as React from "react";
// import { twMerge } from "tailwind-merge";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function LandingPage() {
    return (
        <main className="min-h-screen mx-auto relative">
            <div className="mx-auto max-w-2xl py-12 sm:py-24 lg:py-36">
                <div className="text-center">
                    <Image
                        className="inline-block"
                        src="/icon.png"
                        alt="logo"
                        width={240}
                        height={240}
                    />
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-6xl">
                        Find other awesome devs to pair with online
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-100">
                        This platform is for sharing your screen and working
                        with other random developers online so that you can work
                        together
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button asChild>
                            <Link
                                href="/browse"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="#">
                                Learn more{" "}
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}

// type AsChildProps<DefaultElementProps> =
//     | ({ asChild?: false } & DefaultElementProps)
//     | { asChild: true; children: React.ReactNode };

// type ButtonProps = AsChildProps<
//     React.ButtonHTMLAttributes<HTMLButtonElement>
// > & {
//     style?: React.CSSProperties;
//     className?: string;
// };

// function Button({ asChild, ...props }: ButtonProps) {
//     const Comp = asChild ? Slot : "button";

//     return <Comp {...props} />;
// }

// function Slot({
//     children,
//     ...props
// }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) {
//     if (React.isValidElement(children)) {
//         return React.cloneElement(children, {
//             ...props,
//             ...children.props,
//             style: {
//                 ...props.style,
//                 ...children.props.style,
//             },
//             className: twMerge(props.className, children.props.className),
//         });
//     }

//     if (React.Children.count(children) > 1) {
//         React.Children.only(null);
//     }

//     return null;
// }

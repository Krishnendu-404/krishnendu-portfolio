import "./globals.css";

export const metadata = {
    title: "KRISHNENDU | Portfolio",
    description:
        "Portfolio of KRISHNENDU KHASKAL — developer, builder and problem solver.",

    icons: {
        icon: "/krishnendu-favicon.png",
    },
        
    authors: [
        {
            name: "KRISHNENDU KHASKAL",
        },
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
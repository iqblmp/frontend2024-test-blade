import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}

// 1. b. Tinggi teks pada elemen HTML
// 2. b. baseline.css
// 3. b. Struct
// 4. b. 012
// 5. c. $("".headtable").hide();
// 6. d. $('tr:gt(3)').hide();
// 7. b.
// 8. c.
// 9. c.
// 10. a. Jinja2
// 11. b. Menyusun aturan CSS bersarang di dalam satu aturan induk
// 12. e.
// 13. d.
// 14. c.
// 15. c.

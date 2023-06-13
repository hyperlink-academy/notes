import "./globals.css";
import Link from "next/link";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full">
      <body className="">
        <div className="p-2 flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <Link href="/">home</Link>
            <Link href="/about">about</Link>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}

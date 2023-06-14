import "./globals.css";
import Link from "next/link";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full">
      {/* page wrapper */}
      <body className="px-4 pb-4 max-w-3xl m-auto flex flex-col gap-4">
        {/* <div className="px-4 pb-4 flex flex-col gap-2 max-w-3xl m-auto"> */}
        {/* header nav bar */}
        {/* shadow matches card shadow */}
        <div
          style={{ boxShadow: "3px 4px 0px 0px rgb(0 0 0 / 0.5)" }}
          className="flex flex-row justify-between border-b border-grey-80 shadow border-l border-r rounded-b-md px-4 pt-4 pb-2 -mt-2 bg-white"
        >
          <Link href="/">home</Link>
          <Link href="/about">about</Link>
        </div>
        {children}
        {/* </div> */}
      </body>
    </html>
  );
}

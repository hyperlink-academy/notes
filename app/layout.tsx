import "./globals.css";
import localFont from "next/font/local";
import Link from "next/link";
const fonts = localFont({
  src: [
    {
      path: "../public/fonts/iAWriterQuattroS-Regular.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "../public/fonts/iAWriterQuattroS-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "../public/fonts/iAWriterQuattroS-Italic.woff2",
      weight: "normal",
      style: "italic",
    },
    {
      path: "../public/fonts/iAWriterQuattroS-BoldItalic.woff2",
      weight: "bold",
      style: "italic",
    },
  ],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`w-full ${fonts.className}}`}>
      {/* page wrapper */}
      <body className="px-4 pb-4 sm:pb-8 max-w-3xl m-auto flex flex-col gap-8">
        {/* header nav bar */}
        {/* link styles (e.g. shadow) match cards */}
        <div className="flex flex-row justify-between">
          <Link
            href="/"
            style={{ boxShadow: "3px 4px 0px 0px rgb(0 0 0 / 0.5)" }}
            className="border-b border-grey-80 shadow border-l border-r rounded-b-md px-4 pt-4 pb-2 -mt-2 bg-white no-underline hover:scale-105 hover:border-grey-35"
          >
            home
          </Link>
          {/* <h2 className="pt-2">hyperlink notes</h2> */}
          <Link
            href="/about"
            style={{ boxShadow: "3px 4px 0px 0px rgb(0 0 0 / 0.5)" }}
            className="border-b border-grey-80 shadow border-l border-r rounded-b-md px-4 pt-4 pb-2 -mt-2 bg-white no-underline hover:scale-105 hover:border-grey-35"
          >
            about
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}

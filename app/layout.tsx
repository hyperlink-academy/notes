import "./globals.css";
import Link from "next/link";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // shadow x-offset changes based on hour of day lol (+/- 6px)
  const d = new Date();
  let hour = d.getHours();
  let shadow = (hour - 12) / 2;

  return (
    <html lang="en" className="w-full">
      {/* page wrapper */}
      <body className="px-4 pb-8 sm:pb-16 max-w-3xl m-auto flex flex-col gap-8">
        {/* header nav bar */}
        {/* link styles (e.g. shadow) match cards */}
        <div className="flex flex-row justify-between">
          <Link
            href="/"
            style={{ boxShadow: `${shadow}px 4px 0px 0px rgb(0 0 0 / 0.5)` }}
            className="border-b border-grey-80 shadow border-l border-r rounded-b-md px-4 pt-4 pb-2 -mt-2 bg-white no-underline hover:scale-105 hover:border-grey-35"
          >
            home
          </Link>
          {/* <h2 className="pt-2">hyperlink notes</h2> */}
          <div className="flex flex-col gap-4">
            <Link
              href="https://buttondown.email/hyperlink/"
              style={{ boxShadow: `${shadow}px 4px 0px 0px rgb(0 0 0 / 0.5)` }}
              className="border-b border-grey-80 shadow border-l border-r rounded-b-md px-4 pt-4 pb-2 -mt-2 bg-white no-underline hover:scale-105 hover:border-grey-35"
            >
              subscribe
            </Link>
          </div>
          <Link
            href="/about"
            style={{ boxShadow: `${shadow}px 4px 0px 0px rgb(0 0 0 / 0.5)` }}
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

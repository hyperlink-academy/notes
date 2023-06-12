import fs from "fs/promises";
import { cache } from "react";
import "./globals.css";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let pages = await getPageData();

  return (
    <html lang="en" className="w-full">
      <body className="">
        {/* <div className="m-auto w-fit px-4 py-2 rounded-b-md bg-[gold] text-center">
          <em>artifacts</em> & <em>working notes</em> from{" "}
          <a href="https://hyperlink.academy/">hyperlink.academy</a>
        </div> */}
        <div className="m-auto flex max-w-4xl gap-8 sm:gap-16 p-4 sm:p-8">
          <div className="w-24 sm:w-32 flex flex-col flex-shrink-0 gap-8 leading-5 sticky self-start top-8">
            <Link href="/">home</Link>
            {pages
              .sort((a, b) =>
                a.metadata.published < b.metadata.published ? 1 : -1
              )
              .map((page) => (
                // rotate each card from random -10 to 10 degrees
                <Link
                  href={`/note/${page.filename.slice(0, -4)}`}
                  key={page.filename}
                  style={{
                    rotate: `${Math.floor(
                      Math.random() * (10 - -10) + -10
                    )}deg`,
                    boxShadow: "3px 4px 0px 0px rgb(0 0 0 / 0.5)",
                  }}
                  className="text-grey-15 hover:scale-105 transition-all no-underline border border-grey-80 rounded-md p-4 min-h-[72px] shadow bg-white"
                >
                  {page.metadata?.title || page.filename}
                </Link>
              ))}
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}

async function getPageData() {
  let pages = await readdir("./notes");
  return Promise.all(
    pages.map(async (f) => {
      let { metadata } = await import(`notes/${f}`);
      return { metadata, filename: f };
    })
  );
}

const readdir = cache(fs.readdir);

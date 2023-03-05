import fs from "fs/promises";
import { cache } from "react";
import "./globals.css";
import Link from "next/link";
import Head from "next/head";

export const metadata = {};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let pages = await getPageData();
  return (
    <html lang="en" className="w-full">
      <Head>
        <title>notes.hyperlink.academy</title>
      </Head>
      <body className="max-w-4xl p-4 w-full grid grid-cols-[200px,1fr]">
        <div className="w-52 flex flex-col gap-2 sticky top-2">
          <Link href="/">home</Link>
          {pages
            .sort((a, b) =>
              a.metadata.published < b.metadata.published ? 1 : -1
            )
            .map((page) => (
              <Link
                href={`/note/${page.filename}`}
                key={page.filename}
                className="text-accent-blue hover:underline"
              >
                {page.metadata?.title || page.filename}
              </Link>
            ))}
        </div>
        <div>{children}</div>
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
export const metadata = { title: "notes.hyperlink.academy" };
import fs from "fs/promises";
import Link from "next/link";
import { cache } from "react";

export default async function HomePage() {
  return <NotesList />;
}

async function NotesList() {
  let pages = await getPageData();
  return (
    <div className="m-auto flex flex-col gap-8 sm:gap-16 p-4">
      {pages
        .sort((a, b) => (a.metadata.published < b.metadata.published ? 1 : -1))
        .map((page) => (
          // CARD WRAPPER
          // rotate each card from random -10 to 10 degrees
          // translate each card (x-axis) from random -50 to 50%
          // TODO - maybe add min-height? e.g. min-h-[72px] sm:min-h-[192px]
          <Link
            href={`/note/${page.filename.slice(0, -4)}`}
            passHref
            key={page.filename}
            style={{
              rotate: `${Math.floor(Math.random() * (10 - -10) + -10)}deg`,
              translate: `${Math.floor(Math.random() * (50 - -50) + -50)}%`,
              boxShadow: "3px 4px 0px 0px rgb(0 0 0 / 0.5)",
            }}
            className="text-grey-15 hover:scale-105 hover:border-grey-35 transition-all no-underline border border-grey-80 rounded-md p-4 shadow bg-white w-48 sm:w-64 md:w-96"
          >
            {/* card metadata wrapper */}
            <div className="flex flex-col gap-2">
              <h2 className="text-lg">
                {page.metadata?.title || page.filename}
              </h2>
              <p className="text-sm">{page.metadata?.description}</p>
              {/* wrap tags + date */}
              <div className="flex gap-2 justify-between items-center flex-wrap mt-4">
                <div>
                  {page.metadata.tags.map((tag: string, index: number) => (
                    <span
                      className="text-xs text-grey-35 font-bold p-1 border border-grey-55 bg-accent-gold rounded-md"
                      key={index}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="italic text-xs">{page.metadata?.published}</div>
              </div>
            </div>
          </Link>
        ))}
    </div>
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

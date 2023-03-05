import { Feed } from "feed";
import fs from "fs/promises";
const feed = new Feed({
  title: "Hyperlink Team Notes",
  description: "Some notes from the hyperlink team",
  id: "https://notes.hyperlink.academy",
  link: "https://notes.hyperlink.academy",
  language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  copyright: "",
  feedLinks: {
    rss: "https://notes.hyperlink.academy/rss",
  },
});

export async function GET() {
  let notes = await getNotes();
  notes.forEach((note) => {
    feed.addItem({
      title: note.metadata.title,
      date: new Date(note.metadata.published),
      id: `https://notes.hyperlink.academy/note/${note.filename.slice(0, -4)}`,
      link: `https://notes.hyperlink.academy/note/${note.filename.slice(
        0,
        -4
      )}`,
    });
  });
  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}

async function getNotes() {
  let pages = await fs.readdir("./notes");
  return Promise.all(
    pages.map(async (f) => {
      let { metadata } = await import(`notes/${f}`);
      return { metadata, filename: f };
    })
  );
}

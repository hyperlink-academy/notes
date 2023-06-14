import fs from "fs/promises";
import path from "path";

type PostMetadata = {
  title: string;
  author: string;
  published: string;
  tags: string[];
};

type Params = { note: string };

export async function generateMetadata({ params }: { params: Params }) {
  let note = await getNoteData(params.note);
  if (!note) return { title: "404 not found" };
  return { title: note.metadata.title };
}

export default async function NotePage(props: { params: Params }) {
  //I need to do this to make sure notes are cached in this function!
  await fs.readdir(path.join(process.cwd(), "./notes"));
  let note = await getNoteData(props.params.note);
  if (!note) return <div>404 note not found</div>;
  return (
    <div className="flex flex-col gap-4">
      {/* post meta wrapper */}
      <div className="flex flex-col gap-2 mb-4">
        <h1 className="text-2xl font-bold">{note.metadata.title}</h1>
        <p className="text-grey-35">
          <span className="italic">{note.metadata.author}</span> |{" "}
          <span className="italic">{note.metadata.published}</span>
        </p>
        <div className="shrink-0">
          {note.metadata.tags.map((tag, index) => (
            <span
              className="text-xs p-1 border border-grey-55 bg-accent-gold rounded-md"
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* post content wrapper */}
      <div className="flex flex-col gap-4 text-lg">
        <note.default />
      </div>
    </div>
  );
}

async function getNoteData(note: string) {
  try {
    let Page: { default: React.FC; metadata: PostMetadata } = await import(
      `notes/${note}.mdx`
    );
    return Page;
  } catch (e) {
    return null;
  }
}

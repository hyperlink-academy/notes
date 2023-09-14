import fs from "fs/promises";
import path from "path";

type PostMetadata = {
  title: string;
  author: string;
  description: string;
  published: string;
  tags: string[];
};

type Params = { note: string };

export async function generateMetadata({ params }: { params: Params }) {
  let note = await getNoteData(params.note);
  if (!note) return { title: "404 not found" };
  return {
    title: note.metadata.title,
    twitter: {
      card: "summary",
      title: note.metadata.title,
      description: note.metadata.description,
      creator: "@hyperlink_a",
    },
  };
}

export default async function NotePage(props: { params: Params }) {
  //I need to do this to make sure notes are cached in this function!
  await fs.readdir(path.join(process.cwd(), "./notes"));
  let note = await getNoteData(props.params.note);
  if (!note) return <div>404 note not found</div>;
  return (
    <div className="flex flex-col gap-4">
      <div className="shrink-0">
        {note.metadata.tags.map((tag, index) => (
          <span
            className="text-xs text-grey-35 font-bold p-1 border border-grey-55 bg-accent-gold rounded-md"
            key={index}
          >
            {tag}
          </span>
        ))}
      </div>
      {/* post meta wrapper */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold mb-0">{note.metadata.title}</h1>
        <p className="text-grey-55 italic">
          <span className="italic">{note.metadata.author}</span> |{" "}
          <span className="italic">{note.metadata.published}</span>
        </p>
      </div>
      {/* post content wrapper */}
      <div className="flex flex-col text-lg">
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

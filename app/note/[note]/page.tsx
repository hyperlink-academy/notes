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
      <div className="w-full flex gap-2 justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{note.metadata.title}</h1>
          <p className="italic text-grey-35">by {note.metadata.author}</p>
          <p className="italic text-grey-35">{note.metadata.published}</p>
        </div>

        <div>
          {note.metadata.tags.map((tag, index) => (
            <span className="text-xs p-1 border rounded-md" key={index}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      {/* <hr className="my-2" /> */}
      <hr className="border-dotted my-2" />
      <note.default />
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

import fs from "fs/promises";
import path from "path";
import Head from "next/head";

type PostMetadata = {
  title: string;
  author: string;
  published: string;
  tags: string[];
};

type Params = { note: string };

export async function generateMetadata({ params }: { params: Params }) {
  let Content: { default: React.FC; metadata: PostMetadata } = await import(
    `notes/${params.note}`
  );

  return { title: Content.metadata.title };
}

export default async function NotePAge(props: { params: Params }) {
  //I need to do this to make sure notes are cached in this function!
  await fs.readdir(path.join(process.cwd(), "./notes"));
  let Content: { default: React.FC; metadata: PostMetadata } = await import(
    `notes/${props.params.note}`
  );
  return (
    <>
      <Head>
        <title>Content.metadata.title</title>
      </Head>
      <div className="flex flex-col gap-4">
        <div className="w-full ">
          <h1 className="text-2xl font-bold">{Content.metadata.title}</h1>
          <p className="italic text-grey-35">by {Content.metadata.author}</p>
          <div>
            {Content.metadata.tags.map((tag, index) => (
              <span className="text-xs p-1 border rounded-md" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <Content.default />
      </div>
    </>
  );
}

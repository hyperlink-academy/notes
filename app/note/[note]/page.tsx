import fs from "fs/promises";
import path from "path";
import Head from "next/head";

type Metadata = {
  title: string;
  author: string;
  published: string;
  tags: string[];
};

export default async function NotePAge(props: { params: { note: string } }) {
  //I need to do this to make sure notes are cached in this function!
  await fs.readdir(path.join(process.cwd(), "./notes"));
  let Content: { default: React.FC; metadata: Metadata } = await import(
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
          <p className="italic text-grey-55">by {Content.metadata.author}</p>
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

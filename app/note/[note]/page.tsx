import fs from "fs/promises";
import path from "path";
const Home = async (props: { params: { note: string } }) => {
  //I need to do this to make sure notes are cached in this function!
  await fs.readdir(path.join(process.cwd(), "./notes"));
  let Content = await import(`notes/${props.params.note}`);
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full ">
        <h1 className="text-2xl font-bold">{Content.metadata.title}</h1>
        <p className="italic text-grey-55">by {Content.metadata.author}</p>
        <div>
          {Content.metadata.tags.map((tag: string) => (
            <span className="text-xs p-1 border rounded-md">{tag}</span>
          ))}
        </div>
      </div>
      <Content.default />
    </div>
  );
};

export default Home;

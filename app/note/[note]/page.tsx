import fs from "fs/promises";
import path from "path";
const Home = async (props: { params: { note: string } }) => {
  //I need to do this to make sure notes are cached in this function!
  await fs.readdir(path.join(process.cwd(), "./notes"));
  let Content = await import(`notes/${props.params.note}`);
  console.log(Content);
  return <Content.default />;
};

export default Home;

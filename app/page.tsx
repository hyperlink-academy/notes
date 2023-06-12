export const metadata = { title: "notes.hyperlink.academy" };

import HomeContent from "./home.mdx";

const Home = async () => {
  return (
    <div className="flex flex-col gap-4">
      <HomeContent />
    </div>
  );
};

export default Home;

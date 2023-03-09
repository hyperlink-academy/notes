export const metadata = { title: "notes.hyperlink.academy" };
const Home = async () => {
  return (
    <div className="flex flex-col gap-4">
      <p>Hi, welcome!</p>
      <p>
        We made this site to collect weeknotes, research, and ephemera — things
        we generate as we build Hyperlink and explore learning futures.
      </p>
      <p>
        Our first year, we made a little{" "}
        <a href="https://year-one.hyperlink.academy/library">library</a>. The
        next year, we wove a wiki in{" "}
        <a href="https://space.hyperlink.academy/299766632440398340">
          hyperspace
        </a>
        . This year, a lab notebook.
      </p>
      <p>
        Among other things, we're trying{" "}
        <a href="https://interconnected.org/home/2018/07/24/weeknotes">
          weeknotes
        </a>
        , writing the kind of thing we enjoy reading. We write primarily for
        ourselves, but hope you find something interesting here too.
      </p>
      <p>
        Things we're thinking about: attention, intention, boundaries, play,
        visuals and vibes, rooms and READMEs, co-presence and conversation,
        presence and aliveness, sessions, sprints, cycles, cadences…
      </p>
      <p>
        Last year was exploratory: lots of research, evolution, laying new
        foundations. Now (early 2023) we're finding focus in what we're making,
        playing with new ways of working, having fun with process.
      </p>
      <div>
        <p>~-~-~-~</p>
        <p>Brendan, Jared, Celine</p>
        <p>March, 2023</p>
      </div>

      <p>
        <em>
          PS — if you'd like an RSS feed of these notes, you can grab that{" "}
          <a href="/rss">here</a>.
        </em>
      </p>
    </div>
  );
};

export default Home;

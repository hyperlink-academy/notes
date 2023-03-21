/*
embed a youtube video!
just include the video id (alphanumeric str in the url)
and this will add a responsive embed

example:
<YouTubeEmbed id="y9l0C6zfIeg" />
*/
function YouTubeEmbed(props: { id: string }) {
  return (
    <iframe
      style={{ aspectRatio: "16/9", width: "100%" }}
      src={`https://www.youtube.com/embed/${props.id}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}

/*
annotation block!
add an author + date (strings, not formatted so however you like)
and 'children' as html (plaintext will work for a single block, but NOT markdown)

example:
<Annotation author="brendan" date="3.20.23">
  <p>One sentence.</p>
  <p>Another sentence.</p>
</Annotation>
*/
function Annotation(props: {
  author: "brendan" | "jared" | "celine";
  date: string;
  children: React.ReactNode;
}) {
  let borderColor = "";
  let bgColor = "";
  if (props.author === "brendan") {
    borderColor = "border-[crimson]";
    bgColor = "bg-[#fff3f3]";
  } else if (props.author === "jared") {
    borderColor = "border-[blue]";
    bgColor = "bg-[#efefff]";
  } else if (props.author === "celine") {
    borderColor = "border-[gold]";
    bgColor = "bg-[#fffadd]";
  }
  return (
    <div
      className={`border-4 ${borderColor} ${bgColor} rounded-md p-4 flex flex-col gap-4`}
    >
      {props.children}
      <div className="text-sm self-end">
        <em>{props.author}</em> | <em>{props.date}</em>
      </div>
    </div>
  );
}

export function useMDXComponents(components: { [k: string]: React.Component }) {
  return { YouTubeEmbed, Annotation, ...components };
}

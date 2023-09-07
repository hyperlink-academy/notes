import Image from "next/image";

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

/*
simple blockquote, used between sections
centered block of large, italic text
+ small divider before and after
*/
export function Quote(props: any) {
  return (
    <div className="flex flex-col gap-8 my-4">
      <hr className="w-24 m-auto text-grey-55" />
      <div className="bg-white text-xl p-4 leading-[2rem] text-grey-35 text-center rounded-md italic flex flex-col gap-4">
        {props.children}
      </div>
      <hr className="w-24 m-auto text-grey-55" />
    </div>
  );
}

/*
generic CTA block
text with big blue border
*/
export function CTA(props: any) {
  return (
    <div className="bg-white p-4 border-8 border-accent-blue rounded-md flex flex-col gap-4 my-4">
      {props.children}
    </div>
  );
}

/*
generic sidebar block
TBD
*/
export function Sidebar(props: any) {
  return (
    <div className="bg-white p-4 border-8 border-accent-gold rounded-md flex flex-col gap-4 my-4">
      {props.children}
    </div>
  );
}

/*
PLACEHOLDER for an image, diagram, etc.
*/
export function VisualPlaceholder(props: any) {
  return <div className="bg-white p-4 border h-48 my-4">{props.children}</div>;
}

/* captions on images */
export function Caption(props: any) {
  return (
    <small className="mx-auto text-grey-55 max-w-sm mb-4 italic text-center">
      {props.children}
    </small>
  );
}

export function Button(props: { content: string; href: string }) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
      flex w-max gap-2
      items-center justify-center
      border py-1 px-2 rounded-md
      font-bold text-white no-underline
      border-accent-blue bg-accent-blue 
      hover:bg-bg-blue hover:text-accent-blue
      active:bg-bg-blue active:text-accent-blue active:outline active:outline-2
      `}
    >
      {props.content}
    </a>
  );
}

export function useMDXComponents(components: { [k: string]: React.Component }) {
  return {
    YouTubeEmbed,
    Annotation,
    Quote,
    CTA,
    Sidebar,
    VisualPlaceholder,
    Image,
    Caption,
    Button,
    ...components,
  };
}

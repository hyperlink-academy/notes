import NextImage from "next/image";
import { PrintLink } from "./components/PrintLink";

/*
embed a youtube video!
just include the video id (alphanumeric str in the url)
and this will add a responsive embed

example:
<YouTubeEmbed id="y9l0C6zfIeg" />
*/
function YouTubeEmbed(props: { id: string }) {
  return (
    <div className="mb-4">
      <iframe
        style={{ aspectRatio: "16/9", width: "100%" }}
        src={`https://www.youtube.com/embed/${props.id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
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
      className={`border-4 ${borderColor} ${bgColor} flex flex-col gap-4 rounded-md p-4`}
    >
      <div>{props.children}</div>
      <div className="self-end text-sm">
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
    <div className="blockquote text-grey-55 mb-8 mt-4 flex flex-col gap-2 text-center">
      <div>※ ※ ※</div>
      <div className="quotetext text-grey-35 flex flex-col gap-4 rounded-md px-8 text-center text-xl italic leading-[2rem]">
        {props.children}
      </div>
      <div>※ ※ ※</div>
    </div>
  );
}

/*
generic CTA block
text with big blue border
*/
export function CTA(props: any) {
  return (
    <div className="bg-bg-blue border-grey-80 text-grey-35 mb-6 mt-2 flex flex-col rounded-md border p-4 text-center">
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
    <div className="border-accent-gold mb-6 mt-2 flex flex-col rounded-lg border-4 border-double bg-white p-4">
      {props.children}
    </div>
  );
}

/*
PLACEHOLDER for an image, diagram, etc.
*/
export function VisualPlaceholder(props: any) {
  return <div className="my-4 h-48 border bg-white p-4">{props.children}</div>;
}

/* captions on images */
export function Caption(props: any) {
  return (
    <small className="text-grey-55 mx-auto -mt-4 mb-4 max-w-sm text-center italic">
      {props.children}
    </small>
  );
}

export function Button(props: {
  content: string;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
      border-accent-blue bg-accent-blue hover:bg-bg-blue
      hover:text-accent-blue active:bg-bg-blue
      active:text-accent-blue flex w-max items-center
      justify-center gap-2 rounded-md
      border px-2
      py-1 font-bold
      text-white no-underline active:outline active:outline-2
      ${props?.className}`}
    >
      {props.content}
    </a>
  );
}

export function Image(props: { caption?: string; src: string; alt: string }) {
  return (
    <div className="image relative mx-auto my-4 flex h-auto  w-full flex-col gap-2 text-center first:mt-0">
      <NextImage
        src={props.src}
        alt={props.alt}
        width={1600}
        height={2000}
        className="border-grey-80 rounded-lg border p-1"
      />
      {props.caption && (
        <small className=" text-grey-55 mx-auto mb-4 max-w-sm italic">
          {props.caption}
        </small>
      )}
    </div>
  );
}

export function Video(props: { src: string; alt: string; caption?: string }) {
  return (
    <div className="video relative mx-auto my-4 flex h-auto  w-full flex-col gap-2 text-center first:mt-0">
      <video
        src={props.src}
        className="border-grey-80 rounded-lg border p-1"
        autoPlay
        loop
        playsInline
      />
      {props.caption && (
        <small className=" text-grey-55 mx-auto mb-4 max-w-sm italic">
          {props.caption}
        </small>
      )}
    </div>
  );
}
export function SpotImage(props: {
  alt: string;
  src: string;
  className?: string;
  noTopMargin?: boolean;
}) {
  return (
    <NextImage
      width={1600}
      height={2000}
      alt={props.alt}
      src={props.src}
      noTopMargin={props.noTopMargin}
      className={`-mb-4 border-transparent bg-transparent ${props.noTopMargin ? "mt-0" : "mt-8"} ${props?.className}`}
    />
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
    Video,
    Caption,
    Button,
    SpotImage,
    PrintLink,
    ...components,
  };
}

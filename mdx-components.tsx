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
    <div className="flex flex-col gap-2 my-4 text-grey-55 text-center">
      <div>※ ※ ※</div>
      <div className="text-md px-8 leading-[2rem] text-grey-35 text-center rounded-md italic flex flex-col gap-4">
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
    <div className="bg-bg-blue p-4 border border-grey-80 rounded-md flex flex-col text-grey-35 mt-4 mb-6 text-center">
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
    <div className="bg-white p-4 border-double border-4 border-accent-gold rounded-lg flex flex-col my-4">
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
    <small className="mx-auto text-grey-55 max-w-sm mb-4 -mt-4 italic text-center">
      {props.children}
    </small>
  );
}

// Handles images with optional caption. You need to import images into each blog post the way next wants you to ugh.
// see https://nextjs.org/docs/app/building-your-application/optimizing/images#local-images for more info. or ask celine.
export function Image(props: { caption?: string; src: string; alt: string }) {
  return (
    <div className="text-center mx-auto flex flex-col gap-4 relative w-full h-auto my-4 first:mt-0">
      <NextImage src={props.src} alt={props.alt} />
      {props.caption && (
        <small className=" text-grey-55 max-w-sm mx-auto mb-4 -mt-4 italic">
          {props.caption}
        </small>
      )}
    </div>
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
      flex w-max gap-2
      items-center justify-center
      border py-1 px-2 rounded-md
      font-bold text-white no-underline
      border-accent-blue bg-accent-blue 
      hover:bg-bg-blue hover:text-accent-blue
      active:bg-bg-blue active:text-accent-blue active:outline active:outline-2
      ${props?.className}`}
    >
      {props.content}
    </a>
  );
}

export function SpotImage(props: {
  alt: string;
  src: string;
  className?: string;
}) {
  return (
    <NextImage
      width={160}
      height={200}
      alt={props.alt}
      src={props.src}
      className={`bg-transparent border-transparent  -mb-10 mt-12 ${props?.className}`}
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
    Caption,
    Button,
    SpotImage,
    PrintLink,
    ...components,
  };
}

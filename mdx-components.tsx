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
PLACEHOLDER for an image, diagram, etc.
*/
export function VisualPlaceholder(props: any) {
  return <div className="bg-white p-4 border h-48">{props.children}</div>;
}

// export function ButtondownSubscribeForm(props: any) {
//   return (
//     <div className="flex flex-col gap-4 bg-white rounded-md p-4 text-center my-8 max-w-fit m-auto">
//       <p className="font-bold">sign up for Hyperlink&apos;s newsletter!</p>
//       <form
//         action="https://buttondown.email/api/emails/embed-subscribe/hyperlink"
//         method="post"
//         target="popupwindow"
//         onSubmit={
//           typeof window !== "undefined" &&
//           window.open("https://buttondown.email/hyperlink", "popupwindow")
//         }
//         className="embeddable-buttondown-form flex gap-2 items-center m-auto"
//       >
//         <label htmlFor="bd-email" className="italic">
//           email:
//         </label>
//         <input
//           type="email"
//           name="email"
//           id="bd-email"
//           className="p-2 rounded-md border"
//         />
//         <input
//           type="submit"
//           value="subscribe"
//           className="bg-accent-blue p-2 rounded-md text-white hover:cursor-pointer hover:bg-grey-15"
//         />
//       </form>
//     </div>
//   );
// }

export function useMDXComponents(components: { [k: string]: React.Component }) {
  return {
    YouTubeEmbed,
    Annotation,
    Quote,
    CTA,
    VisualPlaceholder,
    // ButtondownSubscribeForm,
    ...components,
  };
}

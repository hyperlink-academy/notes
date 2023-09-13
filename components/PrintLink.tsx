"use client";

export function PrintLink(props: { src: string; content: string }) {
  return (
    <button
      className="text-accent-blue underline"
      onClick={() => {
        const hideFrame = document.createElement("iframe");
        hideFrame.addEventListener("load", function (this: HTMLIFrameElement) {
          if (!this.contentWindow) return;
          const closePrint = () => {
            document.body.removeChild(this);
          };
          this.contentWindow.onbeforeunload = closePrint;
          this.contentWindow.onafterprint = closePrint;
          this.contentWindow.print();
        });

        hideFrame.style.display = "none"; // hide iframe
        hideFrame.src = props.src;
        console.log(props.src);
        document.body.appendChild(hideFrame);
      }}
    >
      {props.content}
    </button>
  );
}

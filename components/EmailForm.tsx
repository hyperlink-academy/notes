"use client";

// shadow x-offset changes based on hour of day lol (+/- 6px)
const d = new Date();
let hour = d.getHours();
let shadow = (hour - 12) / 2;

export function EmailForm() {
  return (
    <div
      style={{ boxShadow: `${shadow}px 4px 0px 0px rgb(0 0 0 / 0.5)` }}
      className="border border-grey-80 shadow rounded-md p-4 -mt-2 bg-white no-underline hover:scale-105 hover:border-grey-35 transition-all"
    >
      <p className="text-sm italic text-center">subscribe for updates!</p>
      <div className="mx-auto flex gap-2 justify-center">
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/hyperlink"
          method="post"
          target="popupwindow"
          onSubmit={async () => {
            window.open("https://buttondown.email/hyperlink", "popupwindow");
          }}
          className="embeddable-buttondown-form  flex h-9 gap-1"
        >
          <input
            type="email"
            name="email"
            id="bd-email"
            placeholder="email"
            required
            className="rounded-md border border-grey-55 p-3 box-border"
          />
          <button
            type="submit"
            className="border-accent-blue bg-accent-blue hover:bg-bg-blue
      hover:text-accent-blue active:bg-bg-blue
      active:text-accent-blue flex w-max items-center
      justify-center gap-2 rounded-md
      border px-2
      py-1 font-bold
      text-white no-underline active:outline active:outline-2"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

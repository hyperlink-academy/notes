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

export function useMDXComponents(components: { [k: string]: React.Component }) {
  return { YouTubeEmbed: YouTubeEmbed, ...components };
}

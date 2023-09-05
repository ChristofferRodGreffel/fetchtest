import parse from "html-react-parser";

export default function Content({ post }) {
  return (
    <article>
      <h1>{parse(post.title.rendered)}</h1>
      {parse(post.content.rendered)}
    </article>
  );
}

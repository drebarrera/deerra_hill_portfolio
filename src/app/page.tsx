//import { type SanityDocument } from "next-sanity";
import '@/assets/fonts/fonts.css';

//import { client } from "@/sanity/client";
import Header from "@/components/Header";
import Hero from "@/components/index/Hero";
import Main from "@/components/index/Main";

/*const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const options = { next: { revalidate: 30 } };*/

export default async function IndexPage() {
  //const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="relative w-full text-white" style={{ fontFamily: "Inter" }}>
      <Header/>
      <Hero/>
      <Main/>
    </main>
  );
}
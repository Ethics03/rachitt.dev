import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMetaData = {
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
};

export default function getPostMetaData(): PostMetaData[] {
  const postDir = path.join(process.cwd(), "src/app/posts");
  const files = fs.readdirSync(postDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const filepath = path.join(postDir, file);
    const content = fs.readFileSync(filepath, "utf-8");

    const { data } = matter(content); 

    return {
      title: data.title ?? "Untitled",
      slug: data.slug ?? file.replace(/\.mdx$/, ""),
      date: data.date ?? "2025-10-24", 
      excerpt: data.excerpt ?? "",
    };
  });

 
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

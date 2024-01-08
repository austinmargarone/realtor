import { createClient, groq } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";
import { Post } from "@/types/Post";
import { Author } from "next/dist/lib/metadata/types/metadata-types";
import { Category } from "@/types/Category";

export async function getPost(): Promise<Post> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });
  return client.fetch(
    groq`*[_type == 'post']{
      title,
      slug,
      author->{
        name
      },
      mainImage{
        asset->{
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        },
        alt
      },      
      categories[]->{
        // Assuming the 'category' type has a 'name' field
        name
      },
      publishedAt,
      body
    }`
  );
}

export async function getAuthor(): Promise<Author> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });
  return client.fetch(
    groq`*[_type == 'Author']{
      name,
      slug,
      image{
        alt
      },
      bio
    }`
  );
}

export async function getCategory(): Promise<Category> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });
  return client.fetch(
    groq`*[_type == 'Category']{
      title,
      description
    }`
  );
}

import { createClient, groq } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";
import { Post } from "@/types/Post";
import { Author } from "next/dist/lib/metadata/types/metadata-types";
import { Category } from "@/types/Category";
import { SoldProperty } from "@/types/Sold";
import { PropertyListing } from "@/types/Listings";

export async function getPost(slug: string): Promise<Post> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });
  return client.fetch(
    groq`*[_type == 'post' && slug.current == $slug][0]{
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
        title,
      },
      publishedAt,
      body
    }`,
    { slug }
  );
}

export async function getAllPost(): Promise<Post> {
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
        title,
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

export async function getPropertyListings(): Promise<PropertyListing[]> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });
  return client.fetch(
    `*[_type == 'propertyListing'] {
      slug,
      id,
      title,
      address,
      image,
      description,
      list,
      sale,
      beds,
      baths,
      sqft,
      lot,
      year,
      garage,
      tour,
      embed,
      status,
      color,
      MLS
    }`
  );
}

export async function getSoldProperties(): Promise<SoldProperty[]> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });
  return client.fetch(/* groq */ `*[_type == 'soldProperty'] {
      id,
      address,
      image,
      sale,
      beds,
      baths,
      sqft,
      lot,
      year,
      garage,
      status,
      color,
      link
    }`);
}

import { createClient, groq } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";
import { BlogPost } from "@/types/BlogPost";
import { Author } from "next/dist/lib/metadata/types/metadata-types";
import { Category } from "@/types/Category";
import { SoldPortfolio } from "@/types/SoldPortfolio";
import { ListPortfolio } from "@/types/ListPortfolio";

export async function getPost(slug: string): Promise<BlogPost> {
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
      body,
      description,
      keywords,
      links[]{
        text,
        url,
      }    }`,
    { slug }
  );
}

export async function getAllPost(): Promise<BlogPost> {
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
      description,
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

export async function getMyListing(slug: string): Promise<ListPortfolio> {
  try {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
    });

    const result = await client.fetch(
      groq`*[_type == 'listPortfolio' && slug == $slug][0]{
        id,
        address, 
        sale,
        beds,
        baths,
        sqft,
        lot,
        year,
        status,
        color,
        slug,
        description,
        list,
       imageSlideshow[]{
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
        garage,
        tour,
        embed,
        MLS,
        keywords,
        metadesc
      }`,
      { slug }
    );

    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getSoldPortfolio(): Promise<SoldPortfolio[]> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });
  return client.fetch(/* groq */ `*[_type == 'soldPortfolio'] {
      id,
      address,
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
      sale,
      beds,
      baths,
      sqft,
      lot,
      year,
      link
    }`);
}

export async function getListPortfolio(): Promise<ListPortfolio[]> {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
  });
  return client.fetch(/* groq */ `*[_type == 'listPortfolio'] {
      id,
      address,
      imageSlideshow[]{
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
      sale,
      beds,
      baths,
      sqft,
      lot,
      year,
      status,
      color,
      slug
    }`);
}

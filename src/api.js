import {sanityClient} from "sanity:client"
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
    return builder.image(source);
  }

export async function getPosts() {
    return await sanityClient.fetch( groq  `*[_type == "post" ] | order(_createdAt desc){
        title,
        _createdAt,
        "mainImage": mainImage.asset -> url,
        slug,
        body
    }`)
}

export async function getPostBySlug(slug) {
    return await sanityClient.fetch(groq`*[_type == "post" && slug.current == $slug][0]{
        title,
        _createdAt,
        "mainImage": mainImage.asset->url,
        slug,
        body
    }`, { slug });
}

const createSanityDocument = async () => {
    try {
    const response = await fetch("https:7ryphrdj.api.sanity.io/v1/data/mutate/production", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer skQkRWpEw9v4btNsZ5V9SBNhySSnt7Yz5SgcVPWnNEmAR7BLv3uCurauFCaLD5SQdV4ccMcAttqp7VHiDdMArOfSPhJZeg5dUV7fnMFeHGoTjEgwh4tirXbK5jWLc8uJGsnoEe5wJpwJYvdP5cRGpZvR7fiMIHOwfGT0F7B2q9q96jJEFIvb`,
    },
    body: JSON.stringify({
    mutations: [
    {
    create: {
    _type: "post", // Replace with your document type in Sanity
    // Add other fields and their values as needed
    },
    },
    ],
    }),
    });
    
    if (!response.ok) {
    throw new Error("Failed to create document in Sanity");
    }
    
    const data = await response.json();
    console.log("Document created:", data);
    } catch (error) {
    console.error("Error creating document:", error);
    }
    };
    
    createSanityDocument();
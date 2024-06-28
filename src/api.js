import {sanityClient} from "sanity:client"
import groq from "groq";

export async function getPosts() {
    return await sanityClient.fetch( groq  `*[_type == "post" ] | order(_createdAt desc)`)
}
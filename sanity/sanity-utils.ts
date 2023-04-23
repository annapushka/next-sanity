import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: 'hwaywruo',
    dataset: 'production',
    apiVersion: '2021-04-22',
  })

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
    }`
  )
}
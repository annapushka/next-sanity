import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className="max-w-5xl mx-auto py-20 ">
      <h1 className="text-7xl font-extrabold">Hello I'm <span className="bg-gradient-to-r from-pink-500 via-blue-300 to-violet-500 bg-clip-text text-transparent">Anna</span>!</h1>
      <p className="mt-3 text-xl text-gray-600">I'm a Frontend Developer based in SPb.</p>
      <h2 className="mt-24 text-3xl font-bold text-gray-700">My Projects</h2>
      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project._id} className="border border-gray-100 rounded-lg p-1 hover:scale-105 transition-all duration-300  hover:shadow-xl">
            <div className="font-extrabold bg-gradient-to-r from-pink-500 via-blue-300 to-violet-500 bg-clip-text text-transparent mb-2">{project.name}</div>
            {project.image && (
              <Image src={project.image} alt={project.name} width={750} height={300} className="object-cover rounded-lg" />
            )}
          </Link>))
        }
      </div>
    </div >
  )
}

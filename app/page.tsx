import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image"

export default async function Home() {
  const projects = await getProjects()

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-7xl font-extrabold">Hello I'm <span className="bg-gradient-to-r from-pink-500 via-blue-300 to-violet-500
       bg-clip-text text-transparent">Anna</span>!</h1>
      <p className="mt-3 text-xl text-gray-600">I'm a software engineer based in SPb. I love building things and learning new things.</p>
      <h2 className="mt-24 text-3xl font-bold text-gray-700">My Projects</h2>
      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project._id} className="border border-gray-100 rounded-lg">
            {project.image && (
              <Image src={project.image} alt={project.name} width={500} height={100} className="object-cover rounded-lg border border-gray-100" />
            )}
            <div className="font-extrabold bg-gradient-to-r from-pink-500 via-blue-300 to-violet-500 bg-clip-text text-transparent">{project.name}</div>
          </div>))
        }
      </div>
    </div >
  )
}

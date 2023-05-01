import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
    params: { progect: string }
}

export default async function Project({ params }: Props) {

    const slug = params.progect;
    const project = await getProject(slug);

    return (
        <div className="max-w-3xl mx-auto py-20">
            <header className="flex items-center justify-between">
                <h1 className="bg-gradient-to-r from-pink-500 via-blue-300 to-violet-500 bg-clip-text text-transparent text-5xl drop-shadow-lg font-extrabold">{project.name}</h1>

                <a className="bg-gray-100 rounded-lg px-4 py-2 text-gray-500 hover:bg-pink-100 hover:text-pink-00 hover:scale-105 transition-all duration-300  hover:shadow-xl" href={project.url} title="View Project" target="_blank" rel="noreferrer noopener">View Project</a>
            </header>
            <div>
                <PortableText value={project.content} />
            </div>
        </div>
    )
}
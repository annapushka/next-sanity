import { getProject } from "@/sanity/sanity-utils";

type Props = {
    params: { progect: string }
}

export default async function Project({ params }: Props) {

    const slug = params.progect;
    const project = await getProject(slug);

    return <div>{project.name}</div>
}
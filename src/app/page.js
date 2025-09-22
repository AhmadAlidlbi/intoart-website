import { client, urlFor } from "../sanity/lib/client";


export default async function Home() {
  const projects = await client.fetch(`*[_type == "project"]{title, image}`);

  return (
    <main className="p-10">
    <h1 className="text-5xl font-bold text-red-500">
      Tailwind is working 🎉
    </h1>
    <div className="grid grid-cols-3 gap-6 mt-6">
    {projects.map((p) => (
      <div key={p.title}>
        <img src={urlFor(p.image)} alt={p.title} className="rounded-lg shadow" />
        <h2 className="mt-2">{p.title}</h2>
      </div>
    ))}
  </div>
  </main>
  );
}
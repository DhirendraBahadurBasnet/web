import Image from "next/image"

const projects = [
  {
    name: "Project 1",
    description: "A brief description of Project 1",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Project 2",
    description: "A brief description of Project 2",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Project 3",
    description: "A brief description of Project 3",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


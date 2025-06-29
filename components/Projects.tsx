import { Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    name: "Vet Xray Web System",
    description: `
      Full-stack veterinary system with secure API and role-based access (Admin, Vet, Staff).
      Built using React, Django REST, and PostgreSQL with JWT authentication.
      Features include patient record handling, x-ray management, and CI/CD deployment via Render.
    `,
    image: "/placeholder.svg?height=300&width=400",
    githubLink: "https://github.com/zekarki/vet-xray-API",
  },
  {
    name: "Classroom Manager",
    description: `
      Desktop app built with C# Windows Forms for managing student records via binary random-access files.
      Supports custom sort, search, persistent file I/O, and a user-friendly GUI with validation.
    `,
    image: "/placeholder.svg?height=300&width=400",
    githubLink: "https://github.com/zekarki/ClassroomPlan",
  },
  {
    name: "Personal Portfolio Website",
    description: `
      Responsive single-page portfolio built with Nextjs and TypeScript.
      Deployed using Cloudflare Pages with smooth scrolling, dynamic routing, and modular design.
    `,
    image: "/placeholder.svg?height=300&width=400",
    githubLink: "https://github.com/zekarki/",
  },
];

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
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-semibold ">{project.name}</h3>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-slate-300 transition-colors duration-300"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                </div>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600"
    >
      <div className="text-center">
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="Jeetendra Karki"
          width={200}
          height={200}
          className="rounded-full border-4 border-white mx-auto mb-8"
        />
        <h1 className="text-5xl font-bold mb-4">Jeetendra Karki</h1>
        <p className="text-2xl mb-8">Full Stack Developer | Problem Solver | Tech Enthusiast</p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}


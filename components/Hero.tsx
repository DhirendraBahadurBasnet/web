import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600"
    >
      <div className="text-center">
        <div className="w-72 h-72 mx-auto ">
          <div
            style={{ transformStyle: "preserve-3d" }}
            className="w-full h-full  border-4 border-white rounded-full overflow-hidden "
          >
            <Image
              src="/profile.jpg"
              alt="Jeetendra Karki"
              width={300}
              height={300}
              priority
              className="rounded-full aspect-square object-bottom w-full h-full transition-transform [perspective:1000px]  duration-500 hover:rotate-x-6 hover:rotate-y-6 hover:scale-105 "
            />
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4">Jeetendra Karki</h1>
        <p className="text-2xl mb-8">
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </p>
        <a
          href="/Resume.pdf"
          download
          className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

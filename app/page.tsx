import Contact from "./components/Contact";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import { FaDownload } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <main>
        <header className="fixed top-0 left-0 right-0 backdrop-filter backdrop-blur-sm bg-opacity-70 bg-gray-200 text-black py-4 z-10">
          <div className="container mx-auto flex items-center justify-between px-4">
            <h1 className="text-3xl text-black font-bold">Baby Bridge</h1>
            <a
              href="https://drive.google.com/uc?export=download&id=1zVqAKcR8GeDlUpqvMGg6Dt7zwGHiy6fc"
              className="flex items-center bg-[#FFBF9B] text-black py-2 px-4 rounded-md hover:bg-blue-100 transition duration-300"
            >
              <FaDownload className="mr-2" />
              Download Application
            </a>
          </div>
        </header>


        <Hero />

        <Services />

        <Contact />

        <footer className="py-4">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Baby Bridge. Makerere University School Project.</p>
          </div>
        </footer>
      </main>

    </>
  )
}

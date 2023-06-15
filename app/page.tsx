import Contact from "./components/Contact";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import { FaDownload } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <main>
        <header className="bg-[#FFBF9B] text-white py-4">
          <div className="container mx-auto flex items-center justify-between px-4">
            <h1 className="text-3xl text-black font-bold">Baby Bridge</h1>
            <a
              href="https://playstore-link.com"
              className="flex items-center bg-white text-black py-2 px-4 rounded-md hover:bg-blue-100 transition duration-300"
            >
              <FaDownload className="mr-2" />
              Download App Here
            </a>
          </div>
        </header>

        <Hero />

        <Services />

        <Contact />

        <footer className="bg-gray-300 py-4">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Baby Bridge. Makerere University School Project.</p>
          </div>
        </footer>
      </main>

    </>
  )
}

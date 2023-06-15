import Image from "next/image";
import Banner from "@/public/images/banner.jpg"
import Logo from "@/public/images/baby.png"

const Hero = () => {
    return (
        <>
            <div className="relative h-screen">
                <Image
                    src={Banner}
                    alt="banner"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 h-full w-full">
                    <div className={Classes.container}>
                        <Image src={Logo} alt="BabyBridge" className={Classes.logo} width={200} height={200} />
                        <h1 className={Classes.heading}>
                            Baby Bridge
                        </h1>
                        <h2 className={Classes.subheading}>Bringing families together, one surrogate at a time!</h2>
                        <center>
                            <button className={`${Classes.button} hidden md:flex items-center gap-3`}>
                                See What We Do <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                    <path fill-rule="evenodd" d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z" clip-rule="evenodd" />
                                </svg>


                            </button>
                        </center>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero

const Classes = {
    container: "pb-8 pt-20 text-primary-dark px-4 lg:px-36 ",
    heading: "tracking-wide text-7xl font-bold mb-6 text-center mt-3 text-white hover:text-[#FFBF9B] cursor-pointer",
    subheading: "text-center text-white mb-12 text-4xl cursor-pointer",
    button: "font-bold text-4xl mb-6 text-black text-center px-10 py-3 rounded-md bg-[#FFBF9B]",
    categoriesContainer:
        "flex flex-col lg:flex-row gap-8 justify-between items-center",
    logo: "mx-auto"
};
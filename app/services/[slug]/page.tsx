import React from 'react'
import { FaDownload } from 'react-icons/fa';

const servicesOffered = [
    {
        id: '1',
        title: 'Surrogate Matching',
        description: 'Surrogate Matching is a comprehensive service that aims to connect intended parents with suitable surrogate mothers. Our experienced team meticulously reviews and evaluates potential surrogates based on various criteria such as medical history, personal background, and psychological evaluations. We prioritize compatibility and ensure that both parties share similar values and expectations. With Surrogate Matching, we strive to create meaningful connections and facilitate the journey towards parenthood.',
        key: 'matching'
    },
    {
        id: '2',
        title: 'Surrogate Screening',
        description: 'Surrogate Screening is a rigorous process that ensures the physical, mental, and emotional well-being of potential surrogates. Our dedicated team conducts thorough medical examinations, psychological assessments, and background checks to ensure the highest standards of health and suitability. We prioritize the safety and satisfaction of intended parents by selecting qualified surrogates who meet our stringent screening criteria. With Surrogate Screening, we provide peace of mind and confidence throughout the surrogacy journey.',
        key: 'screening'
    },
    {
        id: '3',
        title: 'Legal Support',
        description: 'Legal Support is a crucial aspect of the surrogacy process, and we offer comprehensive guidance and assistance to intended parents and surrogates. Our experienced legal team ensures that all necessary contracts and agreements are drafted, reviewed, and executed accurately. We provide legal consultations, navigate the complex legal landscape, and advocate for the rights and interests of our clients. With Legal Support, we strive to create a secure and legally sound surrogacy experience.',
        key: 'legals'
    },
    {
        id: '4',
        title: 'Surrogate Education',
        description: 'Surrogate Education plays a vital role in preparing surrogates for their journey and providing them with the necessary knowledge and resources. We offer comprehensive educational programs that cover various aspects of surrogacy, including physical and emotional health, pregnancy care, and communication with intended parents. Our goal is to empower surrogates with the information and tools they need to have a positive and fulfilling surrogacy experience. With Surrogate Education, we prioritize the well-being and confidence of our surrogates.',
        key: 'education'
    },
    {
        id: '5',
        title: 'Surrogate Agency Coordination',
        description: 'Surrogate Agency Coordination involves seamless collaboration between intended parents, surrogates, and our agency. We act as a reliable intermediary, facilitating communication, managing appointments, and coordinating logistics throughout the surrogacy process. Our dedicated team ensures that all parties are well-informed, supported, and connected at every step. With Surrogate Agency Coordination, we aim to streamline the surrogacy journey and provide a supportive network for all involved.',
        key: 'coordination'
    },
    {
        id: '6',
        title: 'Communication Tools',
        description: 'Communication Tools are essential for fostering open and transparent communication between intended parents and surrogates. We provide intuitive and secure platforms that facilitate regular and efficient communication, including video calls, messaging systems, and shared document repositories. Our user-friendly tools enable easy information sharing, updates, and collaboration, ensuring that all parties are connected and informed throughout the surrogacy journey. With Communication Tools, we prioritize effective and seamless communication for a successful surrogacy experience.',
        key: 'communication'
    },
    {
        id: '7',
        title: 'Surrogate Journey Tracking',
        description: 'Surrogate Journey Tracking allows intended parents and surrogates to stay informed and engaged throughout the surrogacy process. We provide a user-friendly online platform that enables tracking and monitoring of important milestones, medical appointments, and progress updates. Our platform ensures transparency and enables all parties to have a comprehensive overview of the surrogacy journey. With Surrogate Journey Tracking, we empower intended parents and surrogates by keeping them involved and connected at every stage.',
        key: 'tracking'
    },
    {
        id: '8',
        title: 'Support Network',
        description: 'Support Network is a vital component of our surrogacy program, providing emotional and practical support to intended parents and surrogates. We offer a dedicated team of professionals who are available to address concerns, answer questions, and provide guidance throughout the surrogacy journey. Our supportive community brings together individuals who share similar experiences, fostering connections and understanding. With our Support Network, we aim to create a nurturing environment and alleviate any anxieties along the path to parenthood.',
        key: 'support'
    }
]

const ServiceDetails = ({ params }: { params: { slug: string } }) => {
    console.log(params.slug);
    const foundService = servicesOffered.filter((service) => service.key === params.slug)

    return (
        <>
            <div className="min-h-screen">
                <header className="fixed top-0 left-0 right-0 backdrop-filter backdrop-blur-sm bg-opacity-70 bg-gray-200 text-black py-4 z-10">
                    <div className="container mx-auto flex items-left justify-between px-4">
                        <h1 className="text-3xl font-bold"><a href='/'>Baby Bridge</a> / Services / {params.slug}</h1>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1zVqAKcR8GeDlUpqvMGg6Dt7zwGHiy6fc"
                            className="flex items-center bg-[#FFBF9B] text-black py-2 px-4 rounded-md hover:bg-blue-100 transition duration-300"
                        >
                            <FaDownload className="mr-2" />
                            Download Application
                        </a>
                    </div>
                </header>

                <section>
                    <div className="container mx-auto py-8 mt-20">
                        {foundService?.map((service) =>
                            <>
                                <h1 className="text-5xl font-bold mb-4">{service.title}</h1>
                                <div className="text-gray-700 text-2xl">
                                    <p className="mb-4">
                                        {service.description}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </section>

                <footer className="bg-gray-300 py-4">
                    <div className="container mx-auto text-center">
                        <p>&copy; {new Date().getFullYear()} Baby Bridge. Makerere University School Project.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default ServiceDetails
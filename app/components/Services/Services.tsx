import Image from "next/image";
import Matching from "@/public/images/puzzle.png";
import Screening from "@/public/images/candidate.png";
import Legal from "@/public/images/auction.png";
import Education from "@/public/images/education.png";
import Agency from "@/public/images/temporary-agency.png";
import Communication from "@/public/images/networking.png";
import Tracking from "@/public/images/track.png";
import Support from "@/public/images/support.png";

const Services = () => {
    return (
        <>
            <section className="bg-sky-50">
                <div className="container mx-auto py-16 md:py-32">
                    <div className="w-11/12 mx-auto">
                        <div className="text-center mb-8 md:mb-12">
                            <p className="text-3xl md:text-5xl font-bold text-gray-600">
                                Popular Services
                            </p>
                            <p className="text-gray-600 text-xl md:text-3xl">
                                Building Bonds, Creating Miracles.
                            </p>
                        </div>
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                                <a
                                    href="/services/matching"
                                    className="p-4 bg-white w-full md:w-48 shadow hover:shadow space-y-5 rounded-lg"
                                >
                                    <Image
                                        src={Matching}
                                        alt="matching"
                                        className="w-20 h-20 mx-auto"
                                    />
                                    <div className="space-y-2 text-center">
                                        <p className="text-gray-700 text-lg font-semibold mb-3">
                                            Surrogate Matching
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href="/services/screening"
                                    className="p-4 bg-white w-full md:w-48 shadow hover:shadow space-y-5 rounded-lg"
                                >
                                    <Image
                                        src={Screening}
                                        alt="screening"
                                        className="w-20 h-20 mx-auto"
                                    />
                                    <div className="space-y-2 text-center">
                                        <p className="text-gray-700 text-lg font-semibold mb-3">
                                            Surrogate Screening
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href="/services/legals"
                                    className="p-4 bg-white w-full md:w-48 shadow hover:shadow space-y-5 rounded-lg"
                                >
                                    <Image
                                        src={Legal}
                                        alt="legal"
                                        className="w-20 h-20 mx-auto"
                                    />
                                    <div className="space-y-2 text-center">
                                        <p className="text-gray-700 text-lg font-semibold mb-3">
                                            Legal Support
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href="/services/education"
                                    className="p-4 bg-white w-full md:w-48 shadow hover:shadow space-y-5 rounded-lg"
                                >
                                    <Image
                                        src={Education}
                                        alt="educationn"
                                        className="w-20 h-20 mx-auto"
                                    />
                                    <div className="space-y-2 text-center">
                                        <p className="text-gray-700 text-lg font-semibold mb-3">
                                            Surrogate Education
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href="/services/coordination"
                                    className="p-4 bg-white w-full md:w-48 shadow hover:shadow space-y-5 rounded-lg"
                                >
                                    <Image
                                        src={Agency}
                                        alt="agency"
                                        className="w-20 h-20 mx-auto"
                                    />
                                    <div className="space-y-2 text-center">
                                        <p className="text-gray-700 text-lg font-semibold mb-3">
                                            Surrogacy Agency Coordination
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href="/services/communication"
                                    className="p-4 bg-white w-full md:w-48 shadow hover:shadow space-y-5 rounded-lg"
                                >
                                    <Image
                                        src={Communication}
                                        alt="communication"
                                        className="w-20 h-20 mx-auto"
                                    />
                                    <div className="space-y-2 text-center">
                                        <p className="text-gray-700 text-lg font-semibold mb-3">
                                            Communication Tools
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href="/services/tracking"
                                    className="p-4 bg-white w-full md:w-48 shadow hover:shadow space-y-5 rounded-lg"
                                >
                                    <Image
                                        src={Tracking}
                                        alt="tracking"
                                        className="w-20 h-20 mx-auto"
                                    />
                                    <div className="space-y-2 text-center">
                                        <p className="text-gray-700 text-lg font-semibold mb-3">
                                            Surrogacy Journey Tracking
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href="/services/support"
                                    className="p-4 bg-white w-full md:w-48 shadow hover:shadow space-y-5 rounded-lg"
                                >
                                    <Image
                                        src={Support}
                                        alt="support"
                                        className="w-20 h-20 mx-auto"
                                    />
                                    <div className="space-y-2 text-center">
                                        <p className="text-gray-700 text-lg font-semibold mb-3">
                                            Support Network
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;

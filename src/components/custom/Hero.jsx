import { Button } from "@/components/ui/button";
import {
    Compass,
    Globe2,
    RefreshCw,
    UtensilsCrossedIcon,
    FileEdit,
    Map,
    Bed,
    DollarSign,
    ArrowRight,
} from "lucide-react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Hero() {
    return (
        <>
           <section className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 py-20 md:py-24 lg:py-28">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-gray-50 opacity-50" />
                </div>
                <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
                <div className="relative z-10 px-4 md:px-6">
                    {/* Text content */}
                    <div className="mx-auto mb-16 max-w-4xl text-center">
                        <h1 className="pb-4 text-4xl font-extrabold tracking-tight text-gray-800 md:text-6xl lg:text-7xl">
                            Unlock Your Dream
                            <br />
                            Journey with VoyageAI
                        </h1>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
                            VoyageAI creates personalized travel itineraries tailored to your preferences,
                            budget, and schedule with AI-powered tools to help you discover your
                            perfect adventure.
                        </p>
                        <div className="pt-8">
                            <Link to= {'/create-trip'}>
                            <Button
                                size="lg"
                                className="h-10 rounded-lg border border-gray-300 bg-gray-200 px-8 py-6 text-lg font-medium text-gray-800 shadow-sm transition-all duration-300 hover:bg-gray-300 hover:shadow-md"
                            >
                                Begin Your Journey
                            </Button></Link>
                            
                        </div>
                    </div>

                    {/* Image container */}
                    <div className="mx-auto max-w-4xl">
                        <img
                            src="/hero.png"
                            alt="Dashboard Preview"
                            className="mx-auto w-full rounded-lg border shadow-2xl"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 py-16 md:py-20 lg:py-24">
                <div className="relative z-10 px-4 md:px-6 max-w-6xl mx-auto">
                    <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-gray-800 md:text-4xl">
                        Powerpacked AI Features for Effortless Travel
                    </h2>
                    <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
                        {/* Feature 1 */}
                        <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center space-y-4">
                            <Globe2 className="h-8 w-8 text-gray-700" />
                            <h3 className="text-xl font-semibold text-gray-800">AI-Powered Itineraries</h3>
                            <p className="text-gray-600">
                                Automatically craft day-to-day travel schedules based on your preferences,
                                budget, and time constraints.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center space-y-4">
                            <Compass className="h-8 w-8 text-gray-700" />
                            <h3 className="text-xl font-semibold text-gray-800"> Best Places & Activities </h3>
                            <p className="text-gray-600">
                                VoyageAI curates the best places to visit and the top activities to enjoy at your favorite locales.

                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center space-y-4">
                            <UtensilsCrossedIcon className="h-8 w-8 text-gray-700" />
                            <h3 className="text-xl font-semibold text-gray-800">Personalized Recommendations</h3>
                            <p className="text-gray-600">
                                Get tailored suggestions for restaurants and must-see spots
                                at every destination on your list.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 py-10 md:py-24 lg:py-28">
                {/* Same background lines/gradients as hero */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-gray-50 opacity-50" />
                </div>
                <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

                <div className="relative z-10 px-4 md:px-6 max-w-6xl mx-auto">
                    <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-gray-800 md:text-4xl">
                        How It Works
                    </h2>
                    <p className="mb-12 text-center text-gray-600 md:text-lg">
                        4 simple steps to plan your perfect trip
                    </p>

                    <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
                        {/* Step 1 */}
                        <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center space-y-4">
                            <FileEdit className="h-8 w-8 text-gray-700" />
                            <h3 className="text-xl font-semibold text-gray-800">
                                Fill the Form
                            </h3>
                            <p className="text-gray-600">
                                Provide your travel details and preferences so VoyageAI can
                                tailor the perfect itinerary.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center space-y-4">
                            <Map className="h-8 w-8 text-gray-700" />
                            <h3 className="text-xl font-semibold text-gray-800">
                                Detailed Itinerary & Hotels
                            </h3>
                            <p className="text-gray-600">
                                Get a day-to-day plan with recommended hotels based on your
                                budget and group size.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center space-y-4">
                            <Bed className="h-8 w-8 text-gray-700" />
                            <h3 className="text-xl font-semibold text-gray-800">
                                Check Availability
                            </h3>
                            <p className="text-gray-600">
                                Click on the hotel link to confirm availability and book
                                directly on the hotel's site.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center space-y-4">
                            <DollarSign className="h-8 w-8 text-gray-700" />
                            <h3 className="text-xl font-semibold text-gray-800">
                                Book & Estimate Costs
                            </h3>
                            <p className="text-gray-600">
                                Finalize your bookings and get an estimated total price for
                                hotels, activities, and local cuisine.
                            </p>
                        </div>
                    </div>
                </div>

            </section>
            <section className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800 py-16 md:py-20 lg:py-24">
                <div className="max-w-6xl mx-auto px-4 md:px-6 text-center mb-8">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-800">
                        What Our Users Say
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-6xl mx-auto px-4 md:px-6">

                    {/* Testimonial 1 */}
                    <Card className="bg-black">
                        <CardContent className="pt-6">
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="relative h-12 w-12 flex-shrink-0">
                                        <img src="user1.png" alt="Moulik Shah" className="h-15 w-15 rounded-full object-cover border-2 border-primary/20" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Moulik Shah</p>
                                        <p className="text-sm text-white">Travel Blogger</p>
                                    </div>
                                </div>
                                <blockquote>
                                    <p className="text-white italic relative">
                                        <span className="text-3xl text-primary absolute -top-4 -left-2">
                                            &quot;
                                        </span>
                                        VoyageAI made planning my entire trip a breeze. The itineraries
                                        were spot on, and I loved the hotel suggestions!
                                        <span className="text-3xl text-primary absolute -bottom-4">
                                            &quot;
                                        </span>
                                    </p>
                                </blockquote>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Testimonial 2 */}
                    <Card className="bg-black">
                        <CardContent className="pt-6">
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="relative h-12 w-12 flex-shrink-0">
                                        <img src="user2.png" alt="John Smith" className="h-15 w-15 rounded-full object-cover border-2 border-primary/20" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Kinjal Modi</p>
                                        <p className="text-sm text-white">Frequent Traveler</p>
                                    </div>
                                </div>
                                <blockquote>
                                    <p className="text-white italic relative">
                                        <span className="text-3xl text-primary absolute -top-4 -left-2">
                                            &quot;
                                        </span>
                                        I found the best activities for my family vacation. VoyageAI's
                                        recommendations were perfect for our budget!
                                        <span className="text-3xl text-primary absolute -bottom-4">
                                            &quot;
                                        </span>
                                    </p>
                                </blockquote>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Testimonial 3 */}
                    <Card className="bg-black">
                        <CardContent className="pt-6">
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="relative h-12 w-12 flex-shrink-0">
                                        <img src="user3.png" alt="Emily Nguyen" className="h-15 w-15 rounded-full object-cover border-2 border-primary/20" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">John Nguyen</p>
                                        <p className="text-sm text-white">Adventure Seeker</p>
                                    </div>
                                </div>
                                <blockquote>
                                    <p className="text-white italic relative">
                                        <span className="text-3xl text-primary absolute -top-4 -left-2">
                                            &quot;
                                        </span>
                                        The personalized itinerary saved me hours of research. Highly
                                        recommend VoyageAI for anyone planning a trip!
                                        <span className="text-3xl text-primary absolute -bottom-4">
                                            &quot;
                                        </span>
                                    </p>
                                </blockquote>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
            {/* cta */}
            <section className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 py-16 md:py-20 lg:py-24">
                <div className="relative z-10 mx-auto max-w-3xl px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter text-gray-800 sm:text-4xl md:text-5xl">
                        Ready For Your Next Vacation?
                    </h2>
                    <p className="mx-auto mt-4 max-w-[700px] text-gray-600 md:text-xl">
                        Join thousands of fellow travelers who crafted their itineraries using VoyageAI.
                    </p>
                    <a href="/create-trip">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="mt-8 hover:bg-gray-300 animate-bounce"
                        >
                            Gear Up For Your Journey Today{" "}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </a>
                </div>
            </section>
            <footer className="bg-black py-12">
                <div className="container mx-auto px-4 text-center text-gray-200">
                    <p>Made with ❤️ by DarshilModi</p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="https://www.instagram.com/darshil_modii" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="w-6 h-6 hover:text-primary transition-colors" />
                        </a>
                        <a href="https://wa.me/3157461195" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="w-6 h-6 hover:text-primary transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/in/modi-darshil" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="w-6 h-6 hover:text-primary transition-colors" />
                        </a>
                        <a href="https://github.com/darsh-foryou" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="w-6 h-6 hover:text-primary transition-colors" />
                        </a>
                    </div>
                </div>
            </footer>

        </>
    );
}

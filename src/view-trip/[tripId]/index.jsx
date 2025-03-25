// import { db } from '@/service/firebaseConfig';
// import { doc, getDoc } from 'firebase/firestore';
// import { AlertCircle, HotelIcon, LightbulbIcon, LuggageIcon, Navigation, Sailboat, UtensilsCrossed } from 'lucide-react';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { toast } from 'sonner';

// function Viewtrip() {
//     const { tripId } = useParams();
//     const [trip, setTrip] = useState(null);
//     const [loading, setLoading] = useState(true);

//     // Use to get info from firebase
//     useEffect(() => {
//         if (tripId) {
//             GetTripData();
//         }
//     }, [tripId]);

//     const GetTripData = async () => {
//         try {
//             setLoading(true);
//             const docRef = doc(db, 'AITrips', tripId);
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 console.log("Doc", docSnap.data());
//                 setTrip(docSnap.data());
//             } else {
//                 console.log("NO SUCH DOC");
//                 toast.error('No trip found');
//             }
//         } catch (error) {
//             console.error("Error fetching trip:", error);
//             toast.error('Failed to load trip data');
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Debug info
//     console.log("Trip state:", trip);
//     console.log("Loading state:", loading);

//     if (loading) {
//         return (
//             <section className="w-full bg-gray-100 text-gray-800 min-h-screen py-16">
//                 <div className="max-w-6xl mx-auto px-4">
//                     <div className="flex items-center justify-center">
//                         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }

//     if (!trip) {
//         return (
//             <section className="w-full bg-gray-100 text-gray-800 min-h-screen py-16">
//                 <div className="max-w-6xl mx-auto px-4">
//                     <div className="text-center">
//                         <h2 className="text-2xl font-bold mb-4">Trip not found</h2>
//                         <p>We couldn't find the trip you're looking for.</p>
//                     </div>
//                 </div>
//             </section>
//         );
//     }

//     // Basic info to display
//     const location = trip.userSelection?.location?.label || "Your Destination";
//     const days = trip.userSelection?.noOfDays || "";
//     const budget = trip.userSelection?.budget || "";
//     const travelGroup = trip.userSelection?.travelGroup || "";
//     const description = trip.description || "";

//     return (
//         <section className="w-full bg-gray-100 text-gray-800 min-h-screen py-16">
//             <div className="max-w-6xl mx-auto px-4">
//                 {/* Header */}
//                 <div className="text-center mb-10">
//                     <h1 className="text-4xl font-bold mb-4">Your Trip to {location}</h1>
//                     <p className="text-lg text-gray-600 mb-4">{description}</p>
//                     <div className="flex justify-center space-x-4">
//                         {days && (
//                             <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
//                                 {days} days
//                             </span>
//                         )}
//                         {budget && (
//                             <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
//                                 {budget}
//                             </span>
//                         )}
//                         {travelGroup && (
//                             <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
//                                 {travelGroup}
//                             </span>
//                         )}
//                     </div>
//                 </div>
//                 {/* DESCRIPTION */}
//                 {trip?.tripData?.description && (
//                     <div className="bg-white rounded-lg shadow p-6 mb-8">
//                         <div className="flex items-center mb-4">
//                             <span className="mr-2">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="h-5 w-5 text-blue-500"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"
//                                     />
//                                 </svg>
//                             </span>
//                             <h2 className="text-xl font-bold text-gray-800">About the Place</h2>
//                         </div>
//                         <p className="text-gray-700 leading-relaxed text-justify">
//                             {trip?.tripData?.description}
//                         </p>
//                     </div>
//                 )}


//                 {/* Weather Section - Simple Version */}
//                 {trip?.tripData?.weather && (
//                     <div className="bg-white rounded-lg shadow p-6 mb-8">
//                         <h2 className="text-2xl font-bold mb-4">Weather </h2>
//                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
//                             <div className="bg-blue-50 p-4 rounded">
//                                 <h3 className="font-semibold">Temperature:</h3>
//                                 <p>{trip?.tripData?.weather?.temperature}</p>
//                                 <p className="text-sm">Min: {trip?.tripData?.weather?.minTemperature || ""}</p>
//                                 <p className="text-sm">Max: {trip?.tripData?.weather?.maxTemperature || ""}</p>
//                             </div>
//                             <div className="bg-blue-50 p-4 rounded">
//                                 <h3 className="font-semibold">Feels Like</h3>
//                                 <p>{trip?.tripData?.weather?.feelsLike || ""}</p>
//                             </div>
//                             <div className="bg-blue-50 p-4 rounded">
//                                 <h3 className="font-semibold">Humidity</h3>
//                                 <p>{trip?.tripData?.weather?.humidity || ""}</p>
//                             </div>
//                             <div className="bg-blue-50 p-4 rounded">
//                                 <h3 className="font-semibold">Sea Level</h3>
//                                 <p>{trip?.tripData?.weather?.seaLevel || ""}</p>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//                 {/* top activities */}
//                 {trip?.tripData?.topActivities && Object.keys(trip?.tripData?.topActivities).length > 0 && (
//                     <div className="bg-white rounded-lg shadow p-6 mb-8 border">
//                         <div className="flex items-center mb-4">
//                             <span className="mr-2">
//                                 <Sailboat />
//                             </span>
//                             <h2 className="text-xl font-bold text-gray-800">Top activities to look for</h2>
//                         </div>

//                         <ol className="space-y-1 list-decimal list-inside">
//                             {Object.keys(trip?.tripData?.topActivities).map((key) => {
//                                 const activity = trip?.tripData?.topActivities[key];
//                                 return (
//                                     <li key={key} className="text-gray-700">
//                                         <span className="font-medium">{activity["Activity-name"] || "Activity"}</span> - {activity["Activity-place"] || "Location"}
//                                     </li>
//                                 );
//                             })}
//                         </ol>
//                     </div>
//                 )}

//                 {/* top actvities */}
//                 {trip?.tripData?.topPlacesToVisit && Object.keys(trip?.tripData?.topPlacesToVisit).length > 0 && (
//                     <div className="bg-white rounded-lg shadow p-6 mb-8 border">
//                         <div className="flex items-center mb-4">
//                             <span className="mr-2">
//                                 <Navigation />
//                             </span>
//                             <h2 className="text-xl font-bold text-gray-800">Top places to visit</h2>
//                         </div>

//                         <ol className="space-y-3 list-decimal pl-5">
//                             {Object.keys(trip?.tripData?.topPlacesToVisit).map((key) => {
//                                 const place = trip?.tripData?.topPlacesToVisit[key];
//                                 return (
//                                     <li key={key} className="text-gray-700">
//                                         <span className="font-semibold">{place["Name of the place 🏞️"]?.replace('🏞️', '')}</span> -{" "}
//                                         <span className="text-sm text-gray-600">{place["Description of the place 📝"] || ""}</span>
//                                     </li>
//                                 );
//                             })}
//                         </ol>
//                     </div>
//                 )}
//                 {/* hotel */}
//                 {trip?.tripData?.["hotel-recommendation"] && Object.keys(trip?.tripData?.["hotel-recommendation"]).length > 0 && (
//                     <div className="bg-white rounded-lg shadow p-6 mb-8 border">
//                         <div className="flex items-center mb-4">
//                             <HotelIcon />
//                             <h2 className="text-xl font-bold text-gray-800">Hotel Recommendations</h2>
//                         </div>

//                         <div className="space-y-4">
//                             {Object.keys(trip?.tripData?.["hotel-recommendation"]).map((key) => {
//                                 const hotel = trip?.tripData?.["hotel-recommendation"][key];
//                                 return (
//                                     <div key={key} className="bg-blue-50 p-4 rounded">
//                                         <h3 className="font-semibold mb-1">Name: {hotel["Hotel name"]}</h3>
//                                         <p className="text-sm text-gray-600 mb-2">Address: {hotel["Hotel address"]}</p>
//                                         <p className="text-sm mb-1">💰Average per night cost per person <strong>{hotel["Hotel average price per person"]}</strong></p>
//                                         <p className="text-sm mb-1">⭐Rating: {hotel["Rating"]}</p>
//                                         <p className="text-sm italic mb-2">Reason: "{hotel["Reason why suggesting that hotel"]}"</p>
//                                         {hotel["Booking url of that hotel"] && (
//                                             <a
//                                                 href={hotel["Booking url of that hotel"]}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="inline-block mt-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
//                                             >
//                                                 Book Now
//                                             </a>
//                                         )}
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 )}


//                 {/* Itineary */}
//                 {trip?.tripData?.itinerary && Object.keys(trip?.tripData?.itinerary).length > 0 && (
//                     <div className="bg-white rounded-lg shadow p-6 mb-8 border">
//                         <div className="flex items-center mb-4">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10m-10 4h6M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                             </svg>
//                             <h2 className="text-xl font-bold text-gray-800">Itinerary</h2>
//                         </div>

//                         {Object.keys(trip?.tripData?.itinerary).sort().map((dayKey, idx) => {
//                             const day = trip?.tripData?.itinerary[dayKey];
//                             return (
//                                 <div key={dayKey} className="mb-6">
//                                     <h3 className="font-bold text-lg mb-4">Day {idx + 1}</h3>

//                                     {/* Morning */}
//                                     {day.Morning && (
//                                         <div className="bg-blue-50 p-4 rounded mb-3">
//                                             <h4 className="font-semibold flex items-center mb-1">
//                                                 <span className="mr-2">🌅</span> Morning
//                                             </h4>
//                                             <p>{day.Morning}</p>
//                                         </div>
//                                     )}

//                                     {/* Afternoon */}
//                                     {day.Afternoon && (
//                                         <div className="bg-blue-50 p-4 rounded mb-3">
//                                             <h4 className="font-semibold flex items-center mb-1">
//                                                 <span className="mr-2">☀️</span> Afternoon
//                                             </h4>
//                                             <p>{day.Afternoon}</p>
//                                         </div>
//                                     )}

//                                     {/* Evening */}
//                                     {day.Evening && (
//                                         <div className="bg-blue-50 p-4 rounded mb-3">
//                                             <h4 className="font-semibold flex items-center mb-1">
//                                                 <span className="mr-2">🌆</span> Evening
//                                             </h4>
//                                             <p>{day.Evening}</p>
//                                         </div>
//                                     )}

//                                     {/* Night */}
//                                     {day.Night && (
//                                         <div className="bg-blue-50 p-4 rounded mb-3">
//                                             <h4 className="font-semibold flex items-center mb-1">
//                                                 <span className="mr-2">🌙</span> Night
//                                             </h4>
//                                             <p>{day.Night}</p>
//                                         </div>
//                                     )}
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 )}

//                 {/* local cuisine */}
//                 {trip?.tripData?.LocalCuisine && Object.keys(trip?.tripData?.LocalCuisine).length > 0 && (
//                     <div className="bg-white rounded-lg shadow p-6 mb-8 border">
//                         <div className="flex items-center mb-4">
//                             <UtensilsCrossed />
//                             <h2 className="text-xl font-bold text-gray-800">Local Cuisine to Try</h2>
//                         </div>

//                         <div className="space-y-4">
//                             {Object.keys(trip?.tripData?.LocalCuisine).map((key) => {
//                                 const cuisine = trip?.tripData?.LocalCuisine[key];
//                                 return (
//                                     <div key={key} className="bg-blue-50 p-4 rounded space-y-1">
//                                         <p className="font-semibold">Must-Try Delicacy: {cuisine["The dish 🍽️"]}</p>
//                                         <p className="text-sm">Culinary Destination: <strong>{cuisine["The best hotel/restaurant serving that cuisine 🍴"]}</strong></p>
//                                         <p className="text-sm">Find It Here: {cuisine["Hotel/restaurant address 📍"]}</p>
//                                         <p className="text-sm italic">Insider's Tip: "{cuisine["Reason why it's the best 📝"]}"</p>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 )}

//                 {/* travel tips */}
//                 {trip?.tripData?.travelTip && Object.keys(trip?.tripData?.travelTip).length > 0 && (
//                     <div className="bg-white rounded-lg shadow p-6 mb-8 border">
//                         <div className="flex items-center mb-4">
//                             <LightbulbIcon />
//                             <h2 className="text-xl font-bold text-gray-800">Travel Tips</h2>
//                         </div>

//                         <ul className="space-y-3 list-disc list-inside leading-relaxed">
//                             {Object.keys(trip?.tripData?.travelTip).map((key) => (
//                                 <li key={key} className="text-gray-700 max-w-3xl">{trip?.tripData?.travelTip[key]}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}

//                 {/* packing tip  */}
//                 {trip?.tripData?.packingTips && Object.keys(trip?.tripData?.packingTips).length > 0 && (
//                     <div className="bg-white rounded-lg shadow p-6 mb-8 border">
//                         <div className="flex items-center mb-4">
//                             <LuggageIcon />
//                             <h2 className="text-xl font-bold text-gray-800">Packing Tips</h2>
//                         </div>

//                         <ul className="space-y-3 list-disc list-inside leading-relaxed">
//                             {Object.keys(trip?.tripData?.packingTips).map((key) => (
//                                 <li key={key} className="text-gray-700 max-w-3xl">{trip?.tripData?.packingTips[key]}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//                 {/* estimated expense */}
//                 {trip?.tripData?.overallTravelExpense && (
//                     <div className="bg-white rounded-lg shadow p-6 mb-8 border">
//                         <div className="flex items-center mb-4">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 12c-4.418 0-8-2.239-8-5v-1c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2v1c0 2.761-3.582 5-8 5z" />
//                             </svg>
//                             <h2 className="text-xl font-bold text-gray-800">Travel Expense Breakdown</h2>
//                         </div>

//                         <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
//                             <div className="flex justify-between border-b pb-1">
//                                 <span>🎡 Activities & Transport</span>
//                                 <span>{trip?.tripData?.overallTravelExpense?.activities_and_transportation}</span>
//                             </div>
//                             <div className="flex justify-between border-b pb-1">
//                                 <span>✈️ Flights</span>
//                                 <span>{trip?.tripData?.overallTravelExpense?.flights}</span>
//                             </div>
//                             <div className="flex justify-between border-b pb-1">
//                                 <span>🍽️ Food</span>
//                                 <span>{trip?.tripData?.overallTravelExpense?.food}</span>
//                             </div>
//                             <div className="flex justify-between border-b pb-1">
//                                 <span>🏨 Hotel</span>
//                                 <span>{trip?.tripData?.overallTravelExpense?.hotel}</span>
//                             </div>
//                             <div className="flex justify-between border-b pb-1">
//                                 <span>🧾 Miscellaneous</span>
//                                 <span>{trip?.tripData?.overallTravelExpense?.miscellaneous}</span>
//                             </div>
//                             <div className="flex justify-between font-semibold pt-2">
//                                 <span>💰 Total</span>
//                                 <span>{trip?.tripData?.overallTravelExpense?.total}</span>
//                             </div>
//                         </div>
//                     </div>
//                 )}






//             </div>
//         </section>
//     );
// }

// export default Viewtrip;

import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  CalendarDays,
  DollarSign,
  Hotel,
  Info,
  Lightbulb,
  Luggage,
  Map,
  Sailboat,
  Sun,
  UtensilsCrossed,
  Users,
  Send
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

// Import shadcn components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from '@/components/ui/button';

function Viewtrip() {
    const { tripId } = useParams();
    const [trip, setTrip] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (tripId) {
            GetTripData();
        }
    }, [tripId]);

    const GetTripData = async () => {
        try {
            setLoading(true);
            const docRef = doc(db, 'AITrips', tripId);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Doc", docSnap.data());
                setTrip(docSnap.data());
            } else {
                console.log("NO SUCH DOC");
                toast.error('No trip found');
            }
        } catch (error) {
            console.error("Error fetching trip:", error);
            toast.error('Failed to load trip data');
        } finally {
            setLoading(false);
        }
    };

    console.log("Trip state:", trip);
    console.log("Loading state:", loading);

    if (loading) {
        return (
            <section className="w-full bg-gradient-to-b from-blue-50 to-white min-h-screen py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="space-y-4">
                        <Skeleton className="h-16 w-[60%] mx-auto" />
                        <Skeleton className="h-8 w-[40%] mx-auto" />
                        <div className="flex justify-center space-x-4">
                            <Skeleton className="h-6 w-20 rounded-full" />
                            <Skeleton className="h-6 w-20 rounded-full" />
                            <Skeleton className="h-6 w-20 rounded-full" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                            <Skeleton className="h-64 w-full rounded-xl" />
                            <Skeleton className="h-64 w-full rounded-xl" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (!trip) {
        return (
            <section className="w-full bg-gradient-to-b from-blue-50 to-white min-h-screen py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <Alert variant="destructive" className="mb-4">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Trip not found</AlertTitle>
                        <AlertDescription>
                            We couldn't find the trip you're looking for. Please check the URL or try again later.
                        </AlertDescription>
                    </Alert>
                </div>
            </section>
        );
    }

    // Basic info to display
    const location = trip.userSelection?.location?.label || "Your Destination";
    const days = trip.userSelection?.noOfDays || "";
    const budget = trip.userSelection?.budget || "";
    const travelGroup = trip.userSelection?.travelGroup || "";
    const description = trip.description || "";

    return (
        <section className="w-full bg-gradient-to-b from-blue-50 to-white min-h-screen py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="relative">

                    <div className="absolute top-4 right-4 z-50">
                        <Button variant="secondary" className="inline-flex items-center gap-2">
                            <Send className="h-4 w-4" />
                            Share
                        </Button>
                    </div>

                    {/* Header Content */}
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold mb-4 text-blue-900">{`Your Trip to ${location}`}</h1>
                        <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">{description}</p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {days && (
                                <Badge variant="secondary" className="text-sm">
                                    <CalendarDays className="h-3.5 w-3.5 mr-1" />
                                    {days} days
                                </Badge>
                            )}
                            {budget && (
                                <Badge variant="secondary" className="text-sm">
                                    <DollarSign className="h-3.5 w-3.5 mr-1" />
                                    {budget}
                                </Badge>
                            )}
                            {travelGroup && (
                                <Badge variant="secondary" className="text-sm">
                                    <Users className="h-3.5 w-3.5 mr-1" />
                                    {travelGroup}
                                </Badge>
                            )}
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="overview" className="w-full mb-8">
                    <TabsList className="grid grid-cols-7 gap-2 mb-8">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="hotel">Hotel Recommendation</TabsTrigger>
                        <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                        <TabsTrigger value="places">Places & Activities</TabsTrigger>
                        <TabsTrigger value="culinary">Local Culinary</TabsTrigger>
                        <TabsTrigger value="important">Important Info</TabsTrigger>
                        <TabsTrigger value="budget">Total Budget</TabsTrigger>
                    </TabsList>

                    {/* Overview Tab: Description and Weather */}
                    <TabsContent value="overview" className="space-y-6">
                        {trip?.tripData?.description && (
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center">
                                        <Info className="h-5 w-5 mr-2 text-blue-600" />
                                        <CardTitle>About {location}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700 leading-relaxed">
                                        {trip?.tripData?.description}
                                    </p>
                                </CardContent>
                            </Card>
                        )}
                        {trip?.tripData?.weather && (
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center">
                                        <Sun className="h-5 w-5 mr-2 text-yellow-500" />
                                        <CardTitle>Weather</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                            <h3 className="font-semibold text-blue-800 mb-1">Temperature</h3>
                                            <p>{trip?.tripData?.weather?.temperature}</p>
                                            <div className="flex justify-between text-sm text-gray-600 mt-1">
                                                <span>Min: {trip?.tripData?.weather?.minTemperature || "-"}</span>
                                                <span>Max: {trip?.tripData?.weather?.maxTemperature || "-"}</span>
                                            </div>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                            <h3 className="font-semibold text-blue-800 mb-1">Feels Like</h3>
                                            <p>{trip?.tripData?.weather?.feelsLike || "-"}</p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                            <h3 className="font-semibold text-blue-800 mb-1">Humidity</h3>
                                            <p>{trip?.tripData?.weather?.humidity || "-"}</p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                            <h3 className="font-semibold text-blue-800 mb-1">Sea Level</h3>
                                            <p>{trip?.tripData?.weather?.seaLevel || "-"}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </TabsContent>

                    {/* Itinerary Tab */}
                    <TabsContent value="itinerary" className="space-y-6">
                        {trip?.tripData?.itinerary && Object.keys(trip?.tripData?.itinerary).length > 0 ? (
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center">
                                        <CalendarDays className="h-5 w-5 mr-2 text-blue-600" />
                                        <CardTitle>Your {days}-Day Itinerary</CardTitle>
                                    </div>
                                    <CardDescription>
                                        Day-by-day plan for your trip to {location}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {Object.keys(trip?.tripData?.itinerary).sort().map((dayKey, idx) => {
                                        const day = trip?.tripData?.itinerary[dayKey];
                                        return (
                                            <div key={dayKey} className="border rounded-lg overflow-hidden">
                                                <div className="bg-blue-50 px-4 py-2 border-b">
                                                    <h3 className="font-bold text-lg">Day {idx + 1}</h3>
                                                </div>
                                                <div className="p-4 space-y-3">
                                                    {day.Morning && (
                                                        <div className="border-l-4 border-yellow-400 pl-4 py-2">
                                                            <h4 className="font-semibold flex items-center text-blue-800 mb-1">
                                                                <span className="mr-2">🌅</span> Morning
                                                            </h4>
                                                            <p className="text-gray-700">{day.Morning}</p>
                                                        </div>
                                                    )}
                                                    {day.Afternoon && (
                                                        <div className="border-l-4 border-orange-400 pl-4 py-2">
                                                            <h4 className="font-semibold flex items-center text-blue-800 mb-1">
                                                                <span className="mr-2">☀️</span> Afternoon
                                                            </h4>
                                                            <p className="text-gray-700">{day.Afternoon}</p>
                                                        </div>
                                                    )}
                                                    {day.Evening && (
                                                        <div className="border-l-4 border-purple-400 pl-4 py-2">
                                                            <h4 className="font-semibold flex items-center text-blue-800 mb-1">
                                                                <span className="mr-2">🌆</span> Evening
                                                            </h4>
                                                            <p className="text-gray-700">{day.Evening}</p>
                                                        </div>
                                                    )}
                                                    {day.Night && (
                                                        <div className="border-l-4 border-blue-400 pl-4 py-2">
                                                            <h4 className="font-semibold flex items-center text-blue-800 mb-1">
                                                                <span className="mr-2">🌙</span> Night
                                                            </h4>
                                                            <p className="text-gray-700">{day.Night}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </CardContent>
                            </Card>
                        ) : (
                            <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle>No itinerary available</AlertTitle>
                                <AlertDescription>
                                    This trip does not have a detailed itinerary yet.
                                </AlertDescription>
                            </Alert>
                        )}
                    </TabsContent>

                    {/* Places & Activities Tab */}
                    <TabsContent value="places" className="space-y-6">
                        {(trip?.tripData?.topPlacesToVisit && Object.keys(trip?.tripData?.topPlacesToVisit).length > 0) ||
                         (trip?.tripData?.topActivities && Object.keys(trip?.tripData?.topActivities).length > 0) ? (
                            <>
                                {trip?.tripData?.topPlacesToVisit && Object.keys(trip?.tripData?.topPlacesToVisit).length > 0 && (
                                    <Card>
                                        <CardHeader className="pb-3">
                                            <div className="flex items-center">
                                                <Map className="h-5 w-5 mr-2 text-green-600" />
                                                <CardTitle>Must-Visit Places</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {Object.keys(trip?.tripData?.topPlacesToVisit).map((key) => {
                                                    const place = trip?.tripData?.topPlacesToVisit[key];
                                                    return (
                                                        <div key={key} className="bg-green-50 p-4 rounded-lg border border-green-100">
                                                            <h3 className="font-semibold text-green-800 mb-1">
                                                                {place["Name of the place 🏞️"]?.replace('🏞️', '')}
                                                            </h3>
                                                            <p className="text-sm text-gray-700">
                                                                {place["Description of the place 📝"] || ""}
                                                            </p>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}
                                {trip?.tripData?.topActivities && Object.keys(trip?.tripData?.topActivities).length > 0 && (
                                    <Card>
                                        <CardHeader className="pb-3">
                                            <div className="flex items-center">
                                                <Sailboat className="h-5 w-5 mr-2 text-blue-600" />
                                                <CardTitle>Must-Try Activities</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {Object.keys(trip?.tripData?.topActivities).map((key) => {
                                                    const activity = trip?.tripData?.topActivities[key];
                                                    return (
                                                        <div key={key} className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                                            <h3 className="font-semibold text-blue-800 mb-1">
                                                                {activity["Activity-name"] || "Activity"}
                                                            </h3>
                                                            <p className="text-sm text-gray-700">
                                                                Location: {activity["Activity-place"] || ""}
                                                            </p>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}
                            </>
                        ) : (
                            <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle>No places or activities available</AlertTitle>
                                <AlertDescription>
                                    This trip does not have recommended places or activities.
                                </AlertDescription>
                            </Alert>
                        )}
                    </TabsContent>

                    {/* Epicurean Escapade Tab (Local Culinary) */}
                    <TabsContent value="culinary" className="space-y-6">
                        {trip?.tripData?.LocalCuisine && Object.keys(trip?.tripData?.LocalCuisine).length > 0 ? (
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center">
                                        <UtensilsCrossed className="h-5 w-5 mr-2 text-orange-600" />
                                        <CardTitle>Local Culinary Delights</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 gap-4">
                                        {Object.keys(trip?.tripData?.LocalCuisine).map((key) => {
                                            const cuisine = trip?.tripData?.LocalCuisine[key];
                                            return (
                                                <div key={key} className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                                                    <h3 className="font-semibold text-orange-800 mb-1">
                                                        {cuisine["The dish 🍽️"]}
                                                    </h3>
                                                    <div className="space-y-1 mt-2">
                                                        <p className="text-sm">
                                                            <span className="font-medium">Where to try:</span> {cuisine["The best hotel/restaurant serving that cuisine 🍴"]}
                                                        </p>
                                                        <p className="text-sm">
                                                            <span className="font-medium">Address:</span> {cuisine["Hotel/restaurant address 📍"]}
                                                        </p>
                                                        <p className="text-sm italic mt-2">
                                                            "{cuisine["Reason why it's the best 📝"]}"
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        ) : (
                            <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle>No local culinary info available</AlertTitle>
                                <AlertDescription>
                                    This trip does not have any recommended local culinary delights.
                                </AlertDescription>
                            </Alert>
                        )}
                    </TabsContent>

                    {/* Hotel Recommendation Tab */}
                    <TabsContent value="hotel" className="space-y-6">
                        {trip?.tripData?.["hotel-recommendation"] && Object.keys(trip?.tripData?.["hotel-recommendation"]).length > 0 ? (
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center">
                                        <Hotel className="h-5 w-5 mr-2 text-blue-600" />
                                        <CardTitle>Hotel Recommendation</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 gap-4">
                                        {Object.keys(trip?.tripData?.["hotel-recommendation"]).map((key) => {
                                            const hotel = trip?.tripData?.["hotel-recommendation"][key];
                                            return (
                                                <div key={key} className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="font-semibold text-blue-800">{hotel["Hotel name"]}</h3>
                                                        <Badge variant="outline" className="bg-yellow-100 border-yellow-200">
                                                            ⭐ {hotel["Rating"]}
                                                        </Badge>
                                                    </div>
                                                    <p className="text-sm text-gray-600 mb-2">{hotel["Hotel address"]}</p>
                                                    <p className="text-sm mb-2">
                                                        <span className="font-medium">Average price per night:</span> {hotel["Hotel average price per person"]}
                                                    </p>
                                                    <p className="text-sm italic bg-blue-100 p-2 rounded mb-3">
                                                        "{hotel["Reason why suggesting that hotel"]}"
                                                    </p>
                                                    {hotel["Booking url of that hotel"] && (
                                                        <div className="mt-3">
                                                            <a
                                                                href={hotel["Booking url of that hotel"]}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors"
                                                            >
                                                                Check Availability
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </CardContent>
                            </Card>
                        ) : (
                            <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle>No hotel recommendations available</AlertTitle>
                                <AlertDescription>
                                    This trip does not have any hotel recommendations.
                                </AlertDescription>
                            </Alert>
                        )}
                    </TabsContent>

                    {/* Important Info Tab */}
                    <TabsContent value="important" className="space-y-6">
                        {(trip?.tripData?.travelTip && Object.keys(trip?.tripData?.travelTip).length > 0) ||
                         (trip?.tripData?.packingTips && Object.keys(trip?.tripData?.packingTips).length > 0) ? (
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center">
                                        <Lightbulb className="h-5 w-5 mr-2 text-amber-500" />
                                        <CardTitle>Important Info & Tips</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <Tabs defaultValue="travel" className="w-full">
                                        <TabsList className="grid w-full grid-cols-2">
                                            <TabsTrigger value="travel">Travel Tips</TabsTrigger>
                                            <TabsTrigger value="packing">Packing Tips</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="travel" className="mt-4">
                                            {trip?.tripData?.travelTip && Object.keys(trip?.tripData?.travelTip).length > 0 ? (
                                                <ul className="space-y-2">
                                                    {Object.keys(trip?.tripData?.travelTip).map((key) => (
                                                        <li key={key} className="flex items-start gap-2 text-gray-700">
                                                            <div className="bg-amber-100 text-amber-600 rounded-full p-1 mt-0.5 flex-shrink-0">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                                                                </svg>
                                                            </div>
                                                            <span>{trip?.tripData?.travelTip[key]}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-gray-500 italic">No travel tips available for this trip.</p>
                                            )}
                                        </TabsContent>
                                        <TabsContent value="packing" className="mt-4">
                                            {trip?.tripData?.packingTips && Object.keys(trip?.tripData?.packingTips).length > 0 ? (
                                                <ul className="space-y-2">
                                                    {Object.keys(trip?.tripData?.packingTips).map((key) => (
                                                        <li key={key} className="flex items-start gap-2 text-gray-700">
                                                            <div className="bg-blue-100 text-blue-600 rounded-full p-1 mt-0.5 flex-shrink-0">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                                                                </svg>
                                                            </div>
                                                            <span>{trip?.tripData?.packingTips[key]}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-gray-500 italic">No packing tips available for this trip.</p>
                                            )}
                                        </TabsContent>
                                    </Tabs>
                                </CardContent>
                            </Card>
                        ) : (
                            <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle>No important info available</AlertTitle>
                                <AlertDescription>
                                    This trip does not have any additional important information.
                                </AlertDescription>
                            </Alert>
                        )}
                    </TabsContent>

                    {/* Total Budget Tab */}
                    <TabsContent value="budget" className="space-y-6">
                        {trip?.tripData?.overallTravelExpense ? (
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center">
                                        <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                                        <CardTitle>Total Budget Breakdown</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center border-b pb-2">
                                            <span className="flex items-center">
                                                <Sailboat className="h-4 w-4 mr-2 text-blue-600" />
                                                Activities & Transport
                                            </span>
                                            <Badge variant="outline" className="font-mono">
                                                {trip?.tripData?.overallTravelExpense?.activities_and_transportation}
                                            </Badge>
                                        </div>
                                        <div className="flex justify-between items-center border-b pb-2">
                                            <span className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                                </svg>
                                                Flights
                                            </span>
                                            <Badge variant="outline" className="font-mono">
                                                {trip?.tripData?.overallTravelExpense?.flights}
                                            </Badge>
                                        </div>
                                        <div className="flex justify-between items-center border-b pb-2">
                                            <span className="flex items-center">
                                                <UtensilsCrossed className="h-4 w-4 mr-2 text-blue-600" />
                                                Food
                                            </span>
                                            <Badge variant="outline" className="font-mono">
                                                {trip?.tripData?.overallTravelExpense?.food}
                                            </Badge>
                                        </div>
                                        <div className="flex justify-between items-center border-b pb-2">
                                            <span className="flex items-center">
                                                <Hotel className="h-4 w-4 mr-2 text-blue-600" />
                                                Hotel
                                            </span>
                                            <Badge variant="outline" className="font-mono">
                                                {trip?.tripData?.overallTravelExpense?.hotel || trip?.tripData?.overallTravelExpense?.hostel}
                                            </Badge>
                                        </div>
                                        <div className="flex justify-between items-center border-b pb-2">
                                            <span className="flex items-center">
                                                <Luggage className="h-4 w-4 mr-2 text-blue-600" />
                                                Miscellaneous
                                            </span>
                                            <Badge variant="outline" className="font-mono">
                                                {trip?.tripData?.overallTravelExpense?.miscellaneous}
                                            </Badge>
                                        </div>
                                        <div className="flex justify-between items-center pt-2 font-semibold">
                                            <span>Total</span>
                                            <Badge variant="default" className="font-mono bg-green-600">
                                                {trip?.tripData?.overallTravelExpense?.total}
                                            </Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ) : (
                            <Alert>
                                <Info className="h-4 w-4" />
                                <AlertTitle>No budget information available</AlertTitle>
                                <AlertDescription>
                                    This trip does not have any budget breakdown information.
                                </AlertDescription>
                            </Alert>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}

export default Viewtrip;

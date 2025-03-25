// import React, { useEffect, useState } from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { SelectBudgetOptions, SelectTravelList } from '@/constants/options';
// import { Button } from '@/components/ui/button';
// import { RocketIcon } from 'lucide-react';

// function CreateTrip() {
//     const [place, setPlace] = useState();
//     const [days, setDays] = useState('');
//     const [selectedBudget, setSelectedBudget] = useState(null);
//     const [selectedTravelGroup, setSelectedTravelGroup] = useState(null);
//     const[formData, setFormData] = useState([]);
//     const handleInputChange = (name, value) =>{
//         setFormData({
//             ...formData,
//             [name] : value
//         })
//     }

//     useEffect(() => {
//         console.log(formData);
//     }, [formData])
  
//     return (
//       <section className="w-full bg-gradient-to-b from-gray-100 to-gray-150 text-gray-800 pt-16 pb-16">
//         <div className="px-5 sm:px-10 md:px-32 lg:px-56 xl:px-10 mt-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="pb-4 text-xl font-extrabold tracking-tight text-gray-800 md:text-3xl lg:text-4xl">
//               Tell VoyageAI🧠 Your Travel Preferences🧳
//             </h2>
//             <p className="mx-auto max-w-2xl text-gray-600 md:text-lg">
//               Provide the details below to create your perfect itinerary.
//             </p>
//           </div>
          
//           <div className="max-w-lg mx-auto mt-20">
//             <section className="mb-10">
//               <h2 className="text-xl my-3 font-medium text-center">Where do you want to go?</h2>
//               <GooglePlacesAutocomplete
//                 apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
//                 selectProps={{
//                   place,
//                   onChange: (v) => {
//                     setPlace(v);
//                     // console.log(v);
//                     handleInputChange("location", v);
//                   },
//                   styles: {
//                     control: (provided) => ({
//                       ...provided,
//                       width: '100%',
//                       height: '40px',
//                     }),
//                     container: (provided) => ({
//                       ...provided,
//                       width: '100%',
//                     }),
//                   },
//                   placeholder: 'Select...',
//                 }}
//               />
//             </section>
            
//             <section className="mb-10">
//               <h2 className="text-xl my-3 font-medium text-center">How many days are you planning to travel?</h2>
//               <Label htmlFor="tripDays" className="sr-only">Days</Label>
//               <Input
//                 id="tripDays"
//                 placeholder="Enter number of days"
//                 type="number"
//                 min="1"
//                 value={days}
//                 onChange={(e) => {
//                   handleInputChange('noOfDays', e.target.value)
//                   console.log(e.target.value);
//                   // handleInputChange("days", e.target.value);
//                 }}
//                 className="h-10 w-full text-center bg-white text-black font-semibold border border-zinc-300"
//               />
//             </section>
  
//             <section className="mb-10">
//               <h2 className="text-xl my-3 font-medium text-center">What is Your Budget?</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
//                 {SelectBudgetOptions.map((item, index) => (
//                   <button 
//                     key={index} 
//                     type="button"
//                     className={`p-4 border rounded-lg text-center transition-all ${
//                       selectedBudget === index 
//                         ? 'border-blue-500 shadow-md bg-blue-50' 
//                         : 'hover:shadow-lg hover:border-gray-300'
//                     }`}
//                     onClick={() => {
//                       handleInputChange("budget", item.title);
//                     //   setSelectedBudget(index);
//                       console.log(item.title);
                      
//                     }}
//                   >
//                     <span className="text-3xl mb-2 block">{item.icon}</span>
//                     <strong className="font-medium block mb-1">{item.title}</strong>
//                     <span className="text-sm text-gray-600">{item.desc}</span>
//                   </button>
//                 ))}
//               </div>
//             </section>
            
//             {/* How many people */}
//             <section className="mb-10">
//               <h2 className="text-xl my-3 font-medium text-center">How many people travelling with you?</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
//                 {SelectTravelList.map((item) => (
//                   <button 
//                     key={item.id} 
//                     type="button"
//                     className={`p-4 border rounded-lg text-center transition-all ${
//                       selectedTravelGroup === item.id 
//                         ? 'border-blue-500 shadow-md bg-blue-50' 
//                         : 'hover:shadow-lg hover:border-gray-300'
//                     }`}
//                     onClick={() => {
//                     //   setSelectedTravelGroup(item.id);
//                       handleInputChange("travelGroup", item.people);
//                       console.log(item.title, item.people);
                     
//                     }}
//                   >
//                     <span className="text-3xl mb-2 block">{item.icon}</span>
//                     <strong className="font-medium block mb-1">{item.title}</strong>
//                     <span className="text-sm text-gray-600 block mb-1">{item.desc}</span>
//                     <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{item.people}</span>
//                   </button>
//                 ))}
//               </div>
//             </section>
//             <div className="flex justify-center pt-5"> 
//                 <Button variant="outline" className="px-8 py-3 text-lg rounded-xl shadow-md" > 
//                     <RocketIcon/> Generate Trip</Button>
            
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
  
//   export default CreateTrip;
import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelList } from '@/constants/options';
import { Button } from '@/components/ui/button';
import { Loader2, Loader2Icon, RocketIcon } from 'lucide-react';
import { toast } from 'sonner';
import { chatSession } from '@/service/ai-modal';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '@/service/firebaseConfig';
import { useNavigate } from 'react-router-dom';

function CreateTrip() {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
    const currentMonthName = monthNames[new Date().getMonth()];
    const [place, setPlace] = useState();
    const [days, setDays] = useState('');
    const [formData, setFormData] = useState({});
    const[openDialog, setOpenDialog] = useState(false);
    const[loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleInputChange = (name, value) => {
        if (name === 'noOfDays') {
            if (value > 15) {
                toast.error('Please select less than 15 days');
                return;
            }
            setDays(value);
        }

        setFormData({
            ...formData,
            [name]: value
        });
    };

    // useEffect(() => {
    //     console.log(formData);
    // }, [formData]);
    const login = useGoogleLogin({
        onSuccess:(codeResp)=> {console.log(codeResp); GetUserProfile(codeResp); },
        onError:(error) => console.log(error)
    })
    const generateTrip = async() => {
        const user = localStorage.getItem('user');
        if(!user){
            setOpenDialog(true);
            return;
        }
        const { location, noOfDays, budget, travelGroup } = formData;
    
        if (!location || !noOfDays || !budget || !travelGroup) {
            toast.error('Please fill all the fields before generating your trip');
            return;
        }
        setLoading(true);
        toast.success('Generating Trip');
        console.log(formData);
        const FINAL_PROMPT = AI_PROMPT
        .replace(/{location}/g, formData?.location?.label)
        .replace(/{noOfDays}/g, formData?.noOfDays)
        .replace(/{month}/g, currentMonthName)
        .replace(/{travelGroup}/g, formData?.travelGroup)
        .replace(/{budget}/g, formData?.budget);

        console.log(FINAL_PROMPT);
        const result = await chatSession.sendMessage(FINAL_PROMPT);
        console.log(result?.response?.text());
        setLoading(false);
        SaveAiTrip(result?.response?.text());
    };
    const SaveAiTrip = async(TripData) => {
        // Add a new document in collection "cities"
        setLoading(true);
        const user = JSON.parse(localStorage.getItem('user'));
        const docID = Date.now().toString()
        await setDoc(doc(db, "AITrips", docID), {
            userSelection: formData,
            tripData : JSON.parse(TripData),
            userEmail: user?.email,
            id: docID
        });
        setLoading(false);
        navigate('/view-trip/'+docID);

    }
    const GetUserProfile = (tokenInfo) => {
        axios
          .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
            {
              headers: {
                Authorization: `Bearer ${tokenInfo.access_token}`,
                Accept: "application/json",
              },
            }
          )
          .then((resp) => {
            console.log(resp.data);
            localStorage.setItem("user", JSON.stringify(resp.data));
            setOpenDialog(false);
            toast.success('Sign in successful! Now you can generate your trip');
            generateTrip();
          })
          .catch((error) => {
            console.error("Error fetching user profile:", error);
          });
      }; 
    return (
        
        <section className="w-full bg-gradient-to-b from-gray-100 to-gray-150 text-gray-800 pt-16 pb-16">
            <div className="px-5 sm:px-10 md:px-32 lg:px-56 xl:px-10 mt-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="pb-4 text-xl font-extrabold tracking-tight text-gray-800 md:text-3xl lg:text-4xl">
                        Tell VoyageAI🧠 Your Travel Preferences🧳
                    </h2>
                    <p className="mx-auto max-w-2xl text-gray-600 md:text-lg">
                        Provide the details below to create your perfect itinerary.
                    </p>
                </div>

                <div className="max-w-lg mx-auto mt-20">
                    {/* Location */}
                    <section className="mb-10">
                        <h2 className="text-xl my-3 font-medium text-center">Where do you want to go?</h2>
                        <GooglePlacesAutocomplete
                            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                            selectProps={{
                                place,
                                onChange: (v) => {
                                    setPlace(v);
                                    handleInputChange("location", v);
                                },
                                styles: {
                                    control: (provided) => ({
                                        ...provided,
                                        width: '100%',
                                        height: '40px',
                                    }),
                                    container: (provided) => ({
                                        ...provided,
                                        width: '100%',
                                    }),
                                },
                                placeholder: 'Select...',
                            }}
                        />
                    </section>

                    {/* Days */}
                    <section className="mb-10">
                        <h2 className="text-xl my-3 font-medium text-center">How many days are you planning to travel?</h2>
                        <Label htmlFor="tripDays" className="sr-only">Days</Label>
                        <Input
                            id="tripDays"
                            placeholder="Enter number of days"
                            type="number"
                            min="1"
                            value={days}
                            onChange={(e) => {
                                // setDays(e.target.value);
                                handleInputChange('noOfDays', e.target.value);
                            }}
                            className="h-10 w-full text-center bg-white text-black font-semibold border border-zinc-300"
                        />
                    </section>

                    {/* Budget */}
                    <section className="mb-10">
                        <h2 className="text-xl my-3 font-medium text-center">What is Your Budget?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                            {SelectBudgetOptions.map((item, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`p-4 border rounded-lg text-center transition-all ${
                                        formData.budget === item.title
                                            ? 'border-blue-500 ring-2 ring-blue-400 shadow-md bg-blue-50'
                                            : 'hover:shadow-lg hover:border-gray-300'
                                    }`}
                                    onClick={() => {
                                        handleInputChange("budget", item.title);
                                    }}
                                >
                                    <span className="text-3xl mb-2 block">{item.icon}</span>
                                    <strong className="font-medium block mb-1">{item.title}</strong>
                                    <span className="text-sm text-gray-600">{item.desc}</span>
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Travel Group */}
                    <section className="mb-10">
                        <h2 className="text-xl my-3 font-medium text-center">How many people travelling with you?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                            {SelectTravelList.map((item) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    className={`p-4 border rounded-lg text-center transition-all ${
                                        formData.travelGroup === item.people
                                            ? 'border-blue-500 ring-2 ring-blue-400 shadow-md bg-blue-50'
                                            : 'hover:shadow-lg hover:border-gray-300'
                                    }`}
                                    onClick={() => {
                                        handleInputChange("travelGroup", item.people);
                                    }}
                                >
                                    <span className="text-3xl mb-2 block">{item.icon}</span>
                                    <strong className="font-medium block mb-1">{item.title}</strong>
                                    <span className="text-sm text-gray-600 block mb-1">{item.desc}</span>
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{item.people}</span>
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-5">
                        <Button
                            disabled={loading}
                            onClick={generateTrip}
                            variant="outline"
                            className="px-8 py-3 text-lg rounded-xl shadow-md"
                        >
                            {loading ?
                                <Loader2Icon className='h-7 w-7 animate-spin' /> :
                                <>
                                    <RocketIcon /> Generate Trip
                                </>
                            }
                        </Button>
                    </div>
                    <Dialog open={openDialog}>
                        <DialogContent className="bg-white rounded-xl p-6 w-full max-w-sm text-black space-y-5">
                            <DialogHeader className="flex flex-col items-center space-y-2">
                                <img
                                    src="/logo.png"
                                    alt="Logo"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <h2 className="text-xl font-semibold text-center">Sign in to VoyageAI</h2>
                                <p className="text-sm text-gray-400 text-center">Welcome. Please sign in to get your personalized itenary</p>
                            </DialogHeader>

                            <div className="flex justify-center">
                                <Button onClick={login} variant="outline" className="flex items-center justify-center w-1/2 py-2 border border-gray-600 rounded-md hover:bg-gray-300 transition">
                                    <img src="/google-logo.svg" alt="Google" className="w-4 h-4 mr-2" />
                                    Google
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>

                </div>
            </div>
        </section>
    );
}

export default CreateTrip;

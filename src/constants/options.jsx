export const SelectTravelList = [
    {
      id: 1,
      title: "Solo Adventure",
      desc: "Embark on a journey of self-discovery",
      icon: "🎒",
      people: "1 person",
    },
    {
      id: 2,
      title: "Romantic Getaway",
      desc: "Experience the world together",
      icon: "💑",
      people: "2 people",
    },
    {
      id: 3,
      title: "Family Fun",
      desc: "Create unforgettable memories with loved ones",
      icon: "🏠",
      people: "3 to 4 people",
    },
    {
      id: 4,
      title: "Friends' Escapade",
      desc: "Thrilling adventures with your best pals",
      icon: "🧑‍🤝‍🧑",
      people: "5 to 10 people",
    },
  ];
  
  export const SelectBudgetOptions = [
    {
      id: 1,
      title: "Budget-Friendly",
      desc: "Travel smart, spend less",
      icon: "💸",
    },
    {
      id: 2,
      title: "Moderate",
      desc: "Balance comfort and cost",
      icon: "💵",
    },
    {
      id: 3,
      title: "Luxury",
      desc: "Indulge in lavish experiences",
      icon: "💎",
    },
  ];
  // if (!location || !noOfDays || !budget || !travelGroup)
  
  export const AI_PROMPT = `Generate a travel itenary for the destination: {location} for {noOfDays} days in the month of {month} 
  Traveler type: {travelGroup}, with a {budget} budget. 

First, add a impressive,funny, descriptive description paragraph about {location}.

Then give me the weather of {location} in the month of {month}, including:

Temperature in celsius and emoji based in the temperature(☀️/☁️/🌧️/❄️)

Humidity (💧 %)

Max Temperature (🌡️ °C)

Min Temperature (🌡️ °C)

Feels like (🌡️ °C)

Sea Level (🗺️ hPa)

Then provide 5 top activities to look out for ("Activity-name" : "Activity-place")

Then provide 3 luxury hotel recommendations with:

Hotel name

Hotel address

Hotel average price per person

Hotel image URL

Geocoding (Latitude & Longitude)

Rating

Reason why suggesting that hotel

Booking url of that hotel



Then give me 5 top places to visit with:

Name of the place 🏞️

Description of the place 📝

Image URL 🖼️

Geocoding (Latitude & Longitude) 🗺️

Then create a detailed itinerary as:

Day 0:

Morning:

Afternoon:

Evening:

Night: (Include specific visiting times when visiting any of the suggested places.)

Then give me the top 5 best local cuisines with:

The dish 🍽️

The best hotel/restaurant serving that cuisine 🍴

Hotel/restaurant address 📍

Reason why it's the best 📝

Then give me 3 travel tip ✈️

Then give me 5 packing tips based on the climate of {location} in {month}, with relevant emojis (🌡️❄️☔🧥 etc.)

Finally, provide the overall travel expense for {travelGroup} people for {noOfDays} days (🧾) with an estimate.

Output format: Respond in JSON format 
description : ... 
weather: ...
topActivities: ...
topPlacesToVisit: ...
hotel-recommendation: ... 
itinerary: ...
LocalCuisine: ...
travelTip: ...
packingTips: ...
overallTravelExpense: ...
with all the above information. Add emojis wherever necessary to make it more descriptive.   
  `;
  export const PHOTO_REF_URL =
    "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=" +
    import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
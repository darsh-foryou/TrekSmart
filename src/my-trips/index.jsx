import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

function MyTrips() {
  const [userTrip, setUserTrip] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    GetUserTrips();
  }, []);

  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/');
      return;
    }
  
    // Start fresh
    setUserTrip([]);
  
    // Query Firestore
    const q = query(collection(db, 'AITrips'), where('userEmail', '==', user.email));
    const querySnapshot = await getDocs(q);
  
    // Temporary array to hold trips
    const tripsArray = [];
  
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      tripsArray.push({ ...doc.data(), id: doc.id });
    });
  
    // Now update state once
    setUserTrip(tripsArray);
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-100 to-gray-150 text-gray-800 pt-16 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">My Trips</h2>

        {userTrip.length === 0 ? (
          <p>No trips found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userTrip.map((trip) => (
              <Link key={trip.id} to={`/view-trip/${trip.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Your Trip to {trip?.userSelection?.location?.label || 'Unknown'}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      {trip?.tripData?.description?.slice(0, 150) || 'No description available...'}
                      {trip?.tripData?.description?.length > 150 && '...'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-between items-center text-sm text-gray-600">
                    <span>Days: {trip?.userSelection?.noOfDays || '--'}</span>
                    <span>Budget: {trip?.userSelection?.budget || '--'}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default MyTrips;

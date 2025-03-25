import React from 'react'

function InfoSection({trip}) {
  return (
    <div>
        <img src='/title.png' className='h-[340px] w-full object-cover rounded-xl'/>
        <div className='my-5 flex flex-col gap-2'>
              <h2 className='font-bold text-2xl'> Detailed Itenary to {trip?.userSelection?.location?.label} for {trip?.userSelection?.
                  travelGroup} </h2>
                <div>
                    <h2 className='font-semibold text-xl'> for {trip?.userSelection?.noOfDays} Days </h2>
                    <h2 className='font-semibold text-xl'> {trip?.tripData?.description}  </h2>
                    <h2> {trip?.tripData?.weather?.month}</h2>

                </div>
        </div>
      
    </div>
  )
}

export default InfoSection

import { Button } from "@/components/ui/button"
import { MapPin, Plane, User } from "lucide-react"
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import axios from 'axios';
import { toast } from 'sonner';



export default function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const[openDialog, setOpenDialog] = useState(false);
  const login = useGoogleLogin({
    onSuccess:(codeResp)=> {console.log(codeResp); GetUserProfile(codeResp); },
    onError:(error) => console.log(error)
})

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
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error fetching user profile:", error);
    });
}; 



  useEffect(() =>{
    console.log(user);
  },[])



  return (
    <header className="fixed w-full border-b border-gray-200 bg-white/90 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-white/80">
      <div className="p-2 shadow-sm flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <Plane className="h-8 w-8 text-gray-600" strokeWidth={1.5} />
            <span className="text-xl font-bold text-gray-800">VoyageAI</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="/create-trip" className="text-gray-900 hover:text-gray-800 transition-colors">
            Plan Your Trip
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <a href='/my-trips'>
              <Button
                variant="outline"
                className="
              rounded-full
              border-gray-300 
              bg-white 
              px-4 
              py-2 
              text-gray-700 
              hover:border-gray-400 
              hover:bg-gray-50 
              focus:ring-2 
              focus:ring-gray-300
            "
              >
                My Trip
              </Button>
              </a>

              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className="
                  flex 
                  h-10 
                  w-10 
                  items-center 
                  justify-center 
                  rounded-full 
                  bg-gray-200 
                  text-gray-600 
                  hover:bg-gray-300 
                  focus:outline-none 
                  focus:ring-2 
                  focus:ring-gray-300
                "
                  >
                    <User className="h-5 w-5" />
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  className="
                      w-44 
                      rounded-md 
                      border 
                      border-gray-200 
                      bg-white 
                      p-3
                      shadow-md 
                      focus:outline-none
                    "
                >
                  <div className="flex flex-col items-start gap-2">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick ={() => {
                        googleLogout();
                        localStorage.clear();
                        window.location.reload();
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          ) :
            <Button onClick ={() =>setOpenDialog(true)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-300">
              Sign In
            </Button>
          }
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
    </header>
  )
}
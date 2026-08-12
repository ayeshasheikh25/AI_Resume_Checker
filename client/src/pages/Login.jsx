import React, { useContext } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { api } from "@/services/api";
import { aiResumeContext } from "@/context/aiResumeContext";

function Login() {
  const navigate = useNavigate()
  const {setUserData} = useContext(aiResumeContext)
  
  const [user , setUser] = useState({
    email: null,
    password:null
  })
  const [message, setMsg] = useState("");
  const changeEvent = (e) => {
    setMsg('')
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const formHandler = async(e) => {
    e.preventDefault();
    try {
      if (!user.email || !user.password) {
        return setMsg('Invalid form')
      }
      console.log(user)
      const res = await api.post('/auth/login', user, {withCredentials:true})
      const {data} = res
      if(data){

        const obj={
            id:data._id,
            email:data.email
        }
        setUserData(obj)
        localStorage.setItem('user', JSON.stringify(obj))
        navigate('/dashboard')
         console.log("Navigating...");
      }
    } catch (err) {
        if(!err.response?.data.success){
            alert(err.response?.data.message)
        }else{
            console.log(err)
        }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="bg-green-50 min-h-screen">
        <div className="flex items-center justify-center px-4">
          <Card className="w-full max-w-md mt-10">
            <CardHeader>
              <CardTitle>Login your account</CardTitle>

              <CardDescription>
                Fill in your details to login a account.
              </CardDescription>

              <CardAction>
                <NavLink to="/sign-up">
                  <Button
                    variant="link"
                    className="text-green-600 cursor-pointer"
                  >
                    Sign-up
                  </Button>
                </NavLink>
              </CardAction>
            </CardHeader>

            <CardContent>
              <form className="space-y-5">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={user.email}
                    onChange={changeEvent}
                    placeholder="abc@gmail.com"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={user.password}
                    onChange={changeEvent}
                    placeholder="********"
                    required
                  />
                </div>

                {message && (
                  <p className="ml-5 text-red-500 text-sm"> {message} </p>
                )}

                <CardFooter className="flex flex-col gap-3">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 cursor-pointer"
                    onClick={formHandler}
                  >
                    Login
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <NavLink
                      to="/sign-up"
                      className="font-medium text-green-600 hover:underline"
                    >
                      Sign-up
                    </NavLink>
                  </p>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Login;

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
import { api } from "@/services/api";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate()
  const [user, setUser] = useState({
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
  });
  const [message, setMsg] = useState("");
  const changeEvent = (e) => {
    setMsg("");
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(user);

  const formHandler = async(e) => {
    e.preventDefault();
    try{
    if (!user.name || !user.email || !user.password) {
      return setMsg("All fields required");
    }

    if (user.password !== user.confirmPassword) {
      return setMsg("Incorrect Password");
    }
    
    const res = await api.post('/auth/registration',user)
    const {data} = res
    if(data){
      navigate('/login')
    }
    }catch(err){
        if(err.response?.data?.exist){
            alert('Already Registered')
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
              <CardTitle>Create your account</CardTitle>

              <CardDescription>
                Fill in your details to create a new account.
              </CardDescription>

              <CardAction>
                <NavLink to="/login">
                  <Button
                    variant="link"
                    className="text-green-600 cursor-pointer"
                  >
                    Login
                  </Button>
                </NavLink>
              </CardAction>
            </CardHeader>

            <CardContent>
              <form className="space-y-5">
                <div className="grid gap-2">
                  <Label htmlFor='name'>Full Name</Label>
                  <Input
                    id='name'
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={changeEvent}
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    name="email"
                    type="email"
                    value={user.email}
                    onChange={changeEvent}
                    placeholder="abc@gmail.com"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    id='password'
                    name="password"
                    type="password"
                    onChange={changeEvent}
                    value={user.password}
                    placeholder="********"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor='confirmPassword'>Confirm Password</Label>
                  <Input
                    id='confirmPassword'
                    name="confirmPassword"
                    type="password"
                    value={user.confirmPassword}
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
                    Create Account
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <NavLink
                      to="/login"
                      className="font-medium text-green-600 hover:underline"
                    >
                      Login
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

export default SignUp;

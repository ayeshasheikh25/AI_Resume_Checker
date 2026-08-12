import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Upload,
  History,
  User,
  LogOut,
  FileText,
  CircleUser,
} from "lucide-react";
import { api } from "@/services/api";
import { aiResumeContext } from "@/context/aiResumeContext";

function Sidebar() {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
  });
  const {userData} = useContext(aiResumeContext)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.post("/auth/user", {id: userData.id}, { withCredentials: true });
        const { data } = res;
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  console.log(user);
  const links = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Upload Resume",
      path: "/upload",
      icon: <Upload size={20} />,
    },
    {
      name: "Resume History",
      path: "/history",
      icon: <History size={20} />,
    },
    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: <User size={20} />,
    },
  ];

  const logoutFunction = async()=>{
    try{
      const res = await api.get('/auth/logout', {withCredentials: true})
      const {data} = res 
      localStorage.removeItem('user')
  
      if(data){
        navigate('/')
      }
    }catch(err){
      console.log(err)
    }
  }
  return (

    
    <aside className="fixed bg-gradient-to-b from-green-700 to-green-900 h-full w-20 md:w-64 shadow-xl shadow-black/80 text-lg text-white">
      <div className="flex justify-center items-center m-2 gap-2 border-b border-green-300 p-6">
        <FileText size={28} />
        <span className="hidden md:block">AI Resume</span>
      </div>

      <nav className="flex flex-col gap-4 p-2 mt-6">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-2 rounded-lg transition-all ${isActive ? "bg-white text-green-700 font-semibold" : "hover:bg-green-600"}`
            }
          >
            {link.icon}
            <span className="hidden md:block">{link.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className=" absolute bottom-0 w-full">
        <div className=" flex gap-1.5 m-4 px-4 py-2 items-center hover:bg-green-600 rounded-lg cursor-pointer" onClick={()=>setShowMenu(!showMenu)}>
          <div className="">
            <CircleUser />
          </div>
          <div className="hidden md:block">
            <h3 className="text-xs font-semibold">{user.name} </h3>
            <span className="text-xs">{user.email}</span>
          </div>
        </div>
        {showMenu && (
          <div className="absolute md:bottom-5 md:right-[-120px] md:left-auto transition-all duration-200 ease-in-out top-4 right-[-100px] left-auto z-50">
            <div
              className="flex bg-white text-green-700 font-medium items-center gap-2 text-sm cursor-pointer rounded-lg px-4 py-3 shadow-lg shadow-black/80 border border-green-700 hover:bg-green-100 transition"
            >
              <LogOut size={18} />
              <span className=" cursor-pointer" onClick={logoutFunction}>Logout</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;

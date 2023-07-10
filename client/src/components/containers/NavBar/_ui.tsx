import { Link } from "react-router-dom"

export const Navbar = () => {
   return <>
    <div className="bg-primary max-w-5xl mx-auto flex flex-row space-x-3 py-3 px-5 rounded-lg text-lg text-white/90">
        <Link to="/chats">Chats</Link>
        <Link to = "/room">Rooms</Link>
        <Link to = "/">Home</Link>
    </div>
    </>
}
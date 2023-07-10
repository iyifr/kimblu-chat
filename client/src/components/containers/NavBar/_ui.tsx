import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

export const Navbar = () => {
    const roomId = uuidv4()
   return <>
    <div className="bg-primary max-w-5xl mx-auto flex flex-row space-x-3 py-3 px-5 rounded-lg text-lg text-white/90">
        <Link to="/chats">Chats</Link>
        <Link to = {`room/${roomId}`}>Rooms</Link>
        <Link to = "/">Home</Link>
    </div>
    </>
}
import { Outlet } from "react-router-dom"
import { Navbar } from "./components/containers/NavBar/_ui"

function App() {
	return (
		<>
			<p className='text-primary text-7xl my-5 text-center'> Kimblu Chat! </p>
			<Navbar />
			<Outlet />
		</>
	)
}

export default App

import { Outlet } from "react-router-dom"
import DirectMessage from "./components/containers/DirectMessage/_ui"

function App() {
	return (
		<>
			<p className='text-primary text-8xl my-5 text-center'> Welcome to Kimblu </p>
			<Outlet />
			{/* <DirectMessage /> */}
		</>
	)
}

export default App

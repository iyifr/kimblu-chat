import { useState, useEffect } from "react"
import { Socket, io } from "socket.io-client"
import DirectMessage from "./components/containers/Messages/screen.directMessage"

function App() {
	const [socket, setSocket] = useState<null | Socket>(null)

	useEffect(() => {
		const newSocket = io("http://localhost:5000")
		setSocket(newSocket)

		return () => {
			newSocket.disconnect()
		}
	}, [])

	return (
		<>
			<p className='text-red-500 text-8xl'> Hello world! </p>
			<p>Welcome , lovely to have you here!</p>
			<p>Hiii hello thereeee</p>
			<DirectMessage />
		</>
	)
}

export default App

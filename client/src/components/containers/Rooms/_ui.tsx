import { useEffect } from "react"
import { useParams } from "react-router-dom"


const Room = () => {
    const routeParams = useParams()

    useEffect(() => {
        console.log(routeParams)
    }, [routeParams])
  return (
    <div> Room 
    </div>
    
  )
}

export default Room
import { useContext} from "react"
import { Groccerycontext } from "../context/Groccerycontext"
import { useNavigate } from "react-router-dom"

const Reset=()=>{
  let [,dispath]=useContext(Groccerycontext)
  let navigate=useNavigate()

    const handleNavigate=()=>{
        navigate('/')
        dispath({
            type:'RESET_CLEATE'
        })
    }
    return(
        <button onClick={handleNavigate} className="resetbtn">Proceed to bill & Reset</button>
    )
}
export default Reset
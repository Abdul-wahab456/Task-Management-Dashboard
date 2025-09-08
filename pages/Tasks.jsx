import { useNavigate } from "react-router-dom"

export default function Task(){
    const navigate=useNavigate();

    return(
        <>
        <h1>Task Page</h1>
        <button onClick={()=>navigate(-1)}>Dashboard</button>
        </>
    )
}
import { useNavigate } from "react-router-dom"

export default function Setting(){
    const navigate=useNavigate();

    return(
        <>
        <h1>Setting Page</h1>
        <button onClick={()=>navigate(-1)}>Dashboard</button>
        </>
    )
}
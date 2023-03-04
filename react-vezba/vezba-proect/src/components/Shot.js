import { useState } from "react"

export const Shot = ()=>{
    const[car,setCar] = useState(" ")

    //ist rezultat davaat funkciite, samo vtorata funkcija e so parametar "a"

        const shoot = () =>{
            alert("hello")
    }

    const shoot2 = (a)=> {
        alert(a)
    }

return (
    <>
<button onClick={shoot}>hello</button>
<button onClick={()=> shoot2("Goodbye")}>goodbye</button>
<input
type="text"
value={car}
onChange={(e) => setCar(e.target.value)}
/>
   </>

)
}
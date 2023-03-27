import React from "react"
import { User2Context } from "../App"
//import { Location } from "./Location"

export function UserInfo (){
    const context = React.useContext(User2Context)
    return (

        <div>
                Information about logged in user
                <p>Theme used: {context.theme} </p>
               <p>Font size: {context.fontSize} </p>
        </div>
    )
}
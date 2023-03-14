import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {API_URL} from "../utils/constants"

export const UserDetails = ()=>{
const {userId} =  useParams();
const [userDetails, setUserDetails] = useState(undefined)


useEffect(()=>{
    fetch(`${API_URL}users/${userId}`)
    .then((res)=> res.json())
    .then((element)=> setUserDetails(element), [userId])
})

    return(

        userDetails && (
        <div>
        <p>e-mail: {userDetails.email}</p>
        <p>street: {userDetails.address.street}</p>
        <p>suite: {userDetails.address.suite}</p>
        <p>city: {userDetails.address.city}</p>
        <p>zipcode: {userDetails.address.zipcode}</p>
        <p>phone: {userDetails.phone}</p>
        <p>website: {userDetails.website}</p>
        <p>Company-name: {userDetails.company.name}</p>




        </div>
        )
    )
}
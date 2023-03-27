import {useState} from "react"

export const FavoriteColor = () => {
    const [color, setColor] = useState ("red")

    return (
        <h2> my favorite color is {color}</h2>
    )
}


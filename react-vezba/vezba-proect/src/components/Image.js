import {Hover} from "./Hover";
    
    export const Image = () => {
     let slikaOdKniga = "https://cdn.pixabay.com/photo/2015/06/02/12/59/book-794978_960_720.jpg"
    return (
    
        <div className="Hobi">
            <h1>Jas imam 3 hobija:</h1>
            <ul>
                <li>Citanje knigi</li>
                <li>vozenje roleri</li>
                <li className="omileno">Planinarenje</li>
            </ul>
            <h1> Omileno hobi mi e:</h1>
            <img className="slika" onMouseOver={Hover} src={slikaOdKniga} alt="slika"></img>


        </div>
    )
}


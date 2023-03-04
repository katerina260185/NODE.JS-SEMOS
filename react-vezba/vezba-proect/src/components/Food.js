import {useState, useEffect} from "react";

export const Food = () => {

    //prva slika
    const[counterLike, setCounterLike] = useState(0);
    const[counterUnlike, setCounterUnlike] = useState(0);
    const[counterLikeTwo, setCounterlikeTwo] = useState(0);
    const[counterUnlikeTwo, setCounterUnlikeTwo] = useState(0);
    const[counterLikeThree, setCounterlikeThree] = useState(0);
    const[counterUnlikeThree, setCounterUnlikeThree] = useState(0);




    useEffect(() => {
        if(counterLike === 10) {
           console.log("The winner is ice-cream !!!")
        } else if(counterLikeTwo === 10) {
            console.log("The winner is hamburger !!!")
        } else if (counterUnlike === 10) {
            console.log("The worst meal is ice-cream !!! ")
        } else if (counterUnlikeTwo === 10) {
            console.log("The worst meal is hamburger !!! ")
        } else if (counterLikeThree === 10) {
            console.log("The winner is chicken salad !!! ")
        } else if (counterUnlikeThree === 10) {
            console.log("The worst meal is chicken salad !!! ")
        }
    });
    //prva slika
    const zgolemi = () => {
        setCounterLike((counterLike) => {
            return counterLike +1
        })
    }

    const namali = () => {
        setCounterUnlike((counterUnlike) => {
            return counterUnlike +1
        })
    }
// vtora slika
    const zgolemiTwo = () => {
        setCounterlikeTwo((counterLikeTwo) => {
            return counterLikeTwo +1
        })
    }

    const namaliTwo = () => {
        setCounterUnlikeTwo((counterUnlikeTwo) => {
            return counterUnlikeTwo +1
        })
    }

    // treta slika

    const zgolemiThree = () => {
        setCounterlikeThree((counterLikeThree) => {
            return counterLikeThree +1
        })
    }

    const namaliThree = () => {
        setCounterUnlikeThree((counterUnlikeThree) => {
            return counterUnlikeThree +1
        })
    }


    let foodOne = "https://cdn.pixabay.com/photo/2016/10/03/23/15/ice-1713160_960_720.jpg";
    let foodTwo = "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg"
    let foodThree = "https://cdn.pixabay.com/photo/2017/08/11/00/32/salad-2629262_960_720.jpg"

    return (

        <div className="foodDiv">
            <header>Vote for your favorite meal:</header>
            <div className="flexDiv">
                
            <div className="divOne">
            <img src={foodOne} alt="slika1"></img>
            <br/>
            <button onClick={zgolemi} className="like">like</button>
            <button onClick={namali} className="unlike">unlike</button>
            <h6> Total like: {counterLike}</h6>
            <h6> Total unlike: {counterUnlike}</h6>
            </div>

            <div className="divTwo">
            <img src={foodTwo} alt="slika2"></img>
            <br/> 
            <button onClick={zgolemiTwo}className="like">like</button>
            <button onClick={namaliTwo} className="unlike">unlike</button>
            <h6> Total like: {counterLikeTwo}</h6>
            <h6> Total unlike: {counterUnlikeTwo}</h6>
            </div>


            <div className="divThree">
            <img src={foodThree} alt="slika3"></img>
            <br/>
            <button onClick={zgolemiThree} className="like">like</button>
            <button onClick={namaliThree} className="unlike">unlike</button>
            <h6> Total like: {counterLikeThree}</h6>
            <h6> Total unlike: {counterUnlikeThree}</h6>
            </div>
            </div>


            <div  className="tableDiv">
            <table>
                <thead>
                <tr>
                 <th>Food</th>
                 <th>Like</th>
                 <th>Unlike</th>
             </tr>
             </thead>
             <tbody>

             <tr>
              <td>Ice-cream</td>
              <td>like: {counterLike}</td>
             <td>unlike: {counterUnlike}</td>
            </tr>
              <tr>
             <td>Hamburger</td>
             <td>like: {counterLikeTwo}</td>
             <td>unlike: {counterUnlikeTwo}</td>
             </tr>

             <tr>
             <td>Chicken-salad</td>
             <td>like: {counterLikeThree}</td>
             <td>unlike: {counterUnlikeThree}</td>
             </tr>
             </tbody>

            </table>
            </div>
        </div>

        
    )













}
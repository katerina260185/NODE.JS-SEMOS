import React from "react"

export class Datesclass extends React.Component{
    constructor(props) {
        super(props)

        this.state= {
            dates: []
        }
    }

    setDate = ()=> {
        let date = new Date().toString(); 
    }
    render() {
        return (
            <div className="App">
              {dates.map((date, i) => {
                return <p key={i}> {date}</p>;
            })}

            </div>
        )
    }
}
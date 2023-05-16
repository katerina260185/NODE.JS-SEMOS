import React from 'react';

export const Books =()=>{
    
    return (
        <div>
        
    <form action="/api/v1/book/create" method="post"/>
        <label for="book">book</label>
        <input type="text" name="book" id="book"/>
        <br />
        <label for="author">author</label>
        <input type="text" name="author" id="author"/>
        <br />
        <label for="year">year</label>
        <input type="number" name="year" id="year"/>
        <br />
        <input type="submit" value="submit"/>
        </div>
    )
}

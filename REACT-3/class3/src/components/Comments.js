// klasna komponenta

//import React from "react";
/*
export class CommentsClass extends React.Component {
  render() {
    let comments2 = this.props.data;
    //console.log(comments);

    return (
      <div>
        {comments2.map((comment) => {
          return (
            <div>
              <h2>id: {comment.id}</h2>
              <h2>author: {comment.author}</h2>
              <h2>body: {comment.body}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}
*/
import PropTypes from "prop-types";

export const CommentsClass = (props)=> {
  return (
    <div>
      {
        props.userComments ? (
          <div>
            {props.comments.map((object, i)=> {
              return(
                <div> 
              <h2>id: {object.id} author: {object.author} body: {object.body}</h2>
    
              </div>
              )
            })}
              
          </div>
        ) : (
          <div> 
            <h1>You don`t have access</h1>
          </div>
        )
      } 
    </div>
  )
}

CommentsClass.propTypes = {
  userComments: PropTypes.bool.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
}

CommentsClass.defaultProps = {
  comments: { id: "Default id", author: "Default author", body: "Default body" },
};

// Da dodademe propTypes za Comments komponentata
// Pokraj listata so komentari, prakajte i boolean
// property koe dokolku e false da pokazuva nekoja h1
// element so tekst You don't have access
// no stavete i default props da ako boolean propety-to
// ne e prateno po default da bide false
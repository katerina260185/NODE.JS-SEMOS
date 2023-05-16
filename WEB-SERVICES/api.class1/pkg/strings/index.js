
const makeId = (length) => {
    let result = "";
    let characters =
     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charLength));
    }
    //implement this with while loop
    return result;
  };

  // let charLength = characters.length;
  // let i = 0;
  // while (i < length) {
  //   result += characters.charAt(Math.floor(Math.random() * charLength));
  //   i++;
  // }
  // return result;

  
  module.exports = { makeId };
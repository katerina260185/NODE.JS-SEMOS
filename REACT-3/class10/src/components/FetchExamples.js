// POST dodavas nov user , podatocite gi citas od body-to
export const FetchExamples = () => {
    const fetchExample = () => {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Katerina Atanasovska",
          username: "katerina.atanasovska",
          email: "katerina.atanasovska@example.com",
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    };
  
    // PUT go menuvas userot sto e so ID-4 i go dodavas Martin 
    const fetchExamplePut = () => {
      fetch("https://jsonplaceholder.typicode.com/users/4", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": "asfetthfgh54r5rh5gy5hyu5hrg544t5",
          Secret: "safsaf4thtyrthrh",
          Authentication: "Bearer asfjklasjflkjaslkfjlk939209i259gsgjdsl",
        },
        body: JSON.stringify({
          name: "Martin",
          email: "martin.trajkov@example.com",
        }),
      }).then((res) => res.json().then((data) => console.log(data)));
    };
  
    // DELETE brises user
    const fetchExampleDelete = () => {
      fetch("https://jsonplaceholder.typicode.com/users/4", {
        method: "Delete",
      }).then((res) => res.json().then((data) => console.log(data)));
    };
  
    return (
      <div>
        <button onClick={fetchExample}>Fetch POST</button>
        <br />
        <button onClick={fetchExamplePut}>Fetch PUT</button>
        <br />
        <button onClick={fetchExampleDelete}>Fetch DELETE</button>
      </div>
    );
  };
  
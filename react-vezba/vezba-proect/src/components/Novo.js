import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [data, setData] = useState("Some sensitive data");
  const [showData, setShowData] = useState(true);

  const handleButtonClick = () => {
    setShowData(false);
  };

  return (
    <div>
      {showData && <p>{data}</p>}
      <button onClick={handleButtonClick}>Hide Data</button>
      <ChildComponent data={data} />
    </div>
  );
}

export default ParentComponent;
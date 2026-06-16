import { useState } from "react";
import data from "./data";
import List from "./components/List";

const App = () => {
  const [info, setInfo] = useState(data);

   const handleRemove = ()=>{
    setInfo([])
   }

  return (
    <main>
    <div className="container">
      <h3>{info.length} Birthdays Today</h3>
      <List val={info} />

      <button onClick={handleRemove} className="btn btn-block" type="button">Remove all</button>
    </div>
    </main>
  );
};
export default App;

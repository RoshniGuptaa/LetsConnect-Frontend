

import {Route,Routes}from "react-router-dom";
import HomePage from "./Components/HomePage";
import Status from "./Components/Status/Status";

function App() {
  return (
    <div >
      
      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/status" element={<Status/>}/>
      </Routes>

    </div>
  );
}

export default App;

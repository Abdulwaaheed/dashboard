import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Aside from "./Components/Aside/Aside";
import Overview from "./Page/Overview/Overview";
import Ticket from "./Page/Ticket/Ticket";
import Ideas from "./Page/Ideas/Ideas";
import Navbar from "./Components/Navbar/Navbar";
const App = () => {
  const [title, setTitle] = useState(" ");

  return (
    <div>
      <Aside setTitle={setTitle} title={title} />

      <Navbar title={title} setTitle={setTitle} />
      <Routes>
        <Route path="/" element={<Ticket />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/ideas" element={<Ideas />} />
      </Routes>
    </div>
  );
};

export default App;

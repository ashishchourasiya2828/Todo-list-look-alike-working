import React, { useState } from "react";
import Form from "./Form";
import Sidepanel from "./Sidepanel";
const App = () => {

  const [users, setusers] = useState([])
  
  return (
    <>
    <div className="h-screen w-full bg-zinc-200 flex items-center p-4" >

    <Form form={setusers} />
    <Sidepanel users={users} />
    </div>
    </>
  );
};

export default App;

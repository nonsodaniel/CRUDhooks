import React from "react";

// import Navbar from "./components/layouts/Navbar";

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add user</h2>
          </div>
          <div className="flex-large">
            <h2>View users</h2>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

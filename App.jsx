import React from "react";
import User from "./User";
const App = () =>{
    const displayName = (name) => {
        alert(name);
    }
    const getUser = () => {
        alert("get user function called");
    }
    return( 
    <div>
        <h1>Call parent function from child component</h1>
        <User displayName={displayName} name="Taimoor Ameen" getUser={getUser}/>
        <User displayName={displayName} name="Dawood" getUser={getUser}/>
        <User displayName={displayName} name="Ahmad" getUser={getUser}/>
        <User displayName={displayName} name="kiran" getUser={getUser}/>
        <User displayName={displayName} name="musfira" getUser={getUser}/>

    </div>
    );  
}
export default App;

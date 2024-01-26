import React, {useState} from "react";

const Greeting =({isUserLoggedin}) => (
    <div>
        {isUserLoggedin ? (
            <h1>Welcome</h1>
        ):(
            <h1>Login Again</h1>
        )

        }
    </div>
)

const Ter = ()=>{
    const[UserLoggedin,setUserLoggedin] = useState(false);
    return(
        <div>
            <Greeting isUserLoggedin={UserLoggedin}/>
            <button onClick ={()=>
            setUserLoggedin(!UserLoggedin)}>Login</button>
        </div>
    );
};

export default Ter;
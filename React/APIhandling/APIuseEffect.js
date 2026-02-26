import React, { useState, useEffect }from "react";
import  ReactDOM from 'react-dom/client';

function Users(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data) => {
            setUsers(data);
            setLoading(false);
        })
        .catch((error)=>{
            console.error("Error: ", error)
            setLoading(false)
        });
    }, []); //empty dependency array - runs only once

    if(loading) return <p>Loading...</p>

    return(
        <div>
            {users.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}
ReactDOM.createRoot(document.getElementById("root")).render(<Users/>);
export default Users

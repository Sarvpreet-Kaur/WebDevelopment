import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import { useDispatch, Provider } from 'react-redux';
import stores from "./stores";
import CoinCreate from "./CoinCreate";

function App(){
    return (
        <Provider store={stores}>
            <CoinCreate></CoinCreate>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)
//using async/await 
// useEffect(() => {
//     const fetchUsers = async () => {
//         try {
//             const res = await fetch("https://jsonplaceholder.typicode.com/users");
//             const data = await res.json();
//             setUsers(data);
//         } 
        
//         catch (err) {
//             console.error(err);
//         }
//     };

//     fetchUsers();
// }, []);


// function fetchUsers(){
//     const [data, setData] = useState(null)
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null)

//     useEffect(()=>{
//         const getData = async()=>{
//             setLoading(true);
//             try{
//                 const res = await fetch("https://jsonplaceholder.typicode.com/users")
//                 const result = await res.json();

//                 setData(result)
//             }
//             catch(error){
//                 setError(error.message)
//             }
//             finally{
//                 setLoading(false);
//             }
//         };

//         getData();

//     }, [])
// }

//using useEffect+Redux
// function FetchUser(){
//     const dispatch = useDispatch();

//     useEffect(()=>{
//         const fetchUser = async()=>{
//             dispatch(LoadingData(true))
//             try{
//                 const response = await fetch("https://api.github.com/users/octocat");
//                 const data = await response.json();
//             }
//             catch(error){
//                 dispatch(ErrorData("Error Occurred"))
//             }
//         };
//         fetchUser();
//     }, [])
// }

// Object: Redux Actions
// {type: 'slice/LoadingData', payload:true};
// {type: 'slice/UpdateData', payload:da};
// {type: 'slice/ErrorData', payload:"Error Occured"};

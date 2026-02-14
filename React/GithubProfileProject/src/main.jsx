import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/header.jsx';
import Body from './Components/body.jsx';

//https://api.github.com/users?per_page=10
//https://api.github.com/users?per_page=${count}`)
//https://api.github.com/users/name
// eslint-disable-next-line react-refresh/only-export-components
function GithubProfile(){
  return (
    <>
      <Header></Header>

      <Body></Body>
      
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<GithubProfile/>);
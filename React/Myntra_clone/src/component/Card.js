export default function Card(props){
    return (
        <div className="card" style = {{border: "2px solid black", padding:"2px"}}>
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVAzA7ex7j4uWmHS7bvJGy9R88mJZepvNiiU7JMfVStg&s" height="200px" width="150px"/>
            <div style = {{textAlign:"center"}}> 
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Price: {props.price}</h2>
            </div>
        </div>
    )
}
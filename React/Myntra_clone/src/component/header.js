export default function Header(){
return (
    <div className="heading">
    <img className="images" src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTkl1yCWqEfjmgmD-TMY2a3BpWNryGIBa_bw&s" height = "100px" width = "200px"/>
    <div className="option">
        <button className="but">Men</button>
        <button className="but">Women</button>
        <button className="but">Kids</button>
        <button className="but">Home Living</button>
        <button className="but">Beauty </button>
    </div>

    <input className="search" placeholder="Search"></input>

    <div className="profile">
        <button className="pr">Profile</button>
        <button className="pr">WishList</button>
        <button className="pr">Bag</button>
    </div>
    
    </div>
)
}
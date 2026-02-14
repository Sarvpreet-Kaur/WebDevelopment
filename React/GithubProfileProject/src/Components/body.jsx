import { useCallback, useEffect, useState } from "react";

export default function Body() {
    //this as a state because if no state is taken then await will run after some time
    //i.e as in JS promise is returned after all the functions are completed
    //since profile array is empty and then cards will be formed , there will be no data displayed
    const [profile, setProfile] = useState([]);
    const [nprofile, setNprofile] = useState("");
    const [name, setName] = useState("")
    const [error, setError] = useState("");



    //as it will be called once only =, therefore if changes in parent function
    //then children should not re render
    
    async function fetchInfoCount(count) {
        let ran = (Math.floor(Math.random()*100000))
        try{
            const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);

            const data = await response.json();
            setProfile(data);
        }
        catch(error){
            console.log(error)
        }
    }

    async function fetchInfoName(name) {
        try {
            const response = await fetch(`https://api.github.com/users/${name}`);
            const data = await response.json();

            if (!response.ok) {
                setError("User does not exist");
                setProfile([]);
                return;
            }

            setError("");
            setProfile([data]); // wrap in array for mapping
        }
        catch (err) {
            console.log(err);
            setError("Something went wrong");
        }
    }


    useCallback(()=>{fetchInfoCount(nprofile)}, [nprofile])
    useCallback(()=>{fetchInfoName(name)}, [name])

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchInfoCount(10);
    }, []);

    return (
        //Returns array and jsx can read array
        <div>
            {error && <p style={{color:"red"}}>{error}</p>}

            <div className="buttonProfile">
                    <input type="text" className="inpProfile" value = {nprofile} onChange={(e)=>setNprofile(e.target.value)}></input>
                    <button onClick={()=>{fetchInfoCount(Number(nprofile))}} className="buts">Show these</button>

                    <input type="text" className="inpProfile" value = {name} onChange={(e)=>setName(e.target.value)}></input>
                    <button onClick={()=>{fetchInfoName(name)}} className="buts">Show</button>
            </div>
            <div className="profiles">
                
                {Array.isArray(profile) && profile.map((value) => (
                    <div key={value.id} className="Cards">
                        <img src={value.avatar_url} alt={value.login} />
                        <h2>{value.login}</h2>
                        <a href={value.html_url} target="_blank" rel="noreferrer"> Profile </a>
                    </div>
                ))}

            </div>
        </div>
    );
}

//Extra:
//Try catch functionality - done
//Add UseCallback function - done
//Search button: for name
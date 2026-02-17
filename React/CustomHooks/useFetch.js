import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Standard for web

export default function useFetch(name){

    const [profile, setProfile] = useState(null);

    async function fetchuser() {
        // Safety Check 1: Don't fetch if name is missing
        if (!name) return; 

        try {
            const response = await fetch(`https://api.github.com/users/${name}`);
            if (!response.ok) throw new Error("User not found");
            const data = await response.json();
            setProfile(data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchuser();
    }, [name]); 

    return {profile, name}
}
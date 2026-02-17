import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Standard for web
import useFetch from "./useFetch";

export default function Github() {
    const {name} = useParams()
    const {profile} = useFetch(name)
    if (!profile) return <h2>Loading profile for {name}...</h2>;

    return (
        <>
            <h1>My dynamic Github profile</h1>
            <div>
                <img src={profile.avatar_url} alt={name} width="150" />
                <h2>{profile.login}</h2> 
                <p>{profile.bio}</p>
            </div>
        </>
    );
}
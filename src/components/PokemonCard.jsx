/* eslint-disable react/prop-types */
import { useState } from "react";
import saveStatus from "../services/likeService";

const PokemonCard = ({ pokemon }) => {
    const [liked, setLiked] = useState(null);

    const handleLike = () => setLiked(()=>{
        saveStatus(pokemon.url, true);
        return true;
    });
    const handeDislike = () => setLiked(()=>{
        saveStatus(pokemon.url, false);
        return false;
    });

    return (
        <div className="pokemon-card">
            <h2>{pokemon.name}</h2>
            <div>
                <button onClick={handleLike} style={{color: liked === true ? "green" : "black"}}>Like</button>
                <button onClick={handeDislike} style={{color: liked === false ? "red" : "black"}}>Disike</button>
            </div>
        </div>
    )
}

export default PokemonCard;
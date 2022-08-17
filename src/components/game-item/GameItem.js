import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
import { GameBuy } from "../game-buy/GameBuy";
import { GameCover } from "../game-cover/GameCover";
import { GameGenre } from "../game-genre/GameGenre";
import './GameItem.css'
import { setCurrentGame } from "../../redux/games/reducer";


export const GameItem =({game}) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handeleClick = () => {
        dispatch(setCurrentGame(game));
        navigate(`/app/${game.title}`)
    }
    return(
        <div className="game-item" onClick={handeleClick}>
        <GameCover image={game.image}/>
        <div className="game-item__details">
            <span className="game-item__title">{game.title}</span>

            <div className="game-item__gengre">
                {
                    game.genres.map((genre) => <GameGenre genre={genre} key={genre}/>)
                }
            </div>
            <div className="game-item__buy">
                <GameBuy game={game}/>
            </div>
        </div>


        </div>
    )
}
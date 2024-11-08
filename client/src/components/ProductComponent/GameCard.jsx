import { Link } from "react-router-dom";
import "./gamecard.scss";

import { PiGameControllerDuotone } from "react-icons/pi";
const GameCard = (prop) => {
  const single = prop.single;
  return (
    <div className="game-card">
      <div className="game-icon">
        <PiGameControllerDuotone />
      </div>
      <div className="textBox">
        <p className="text head">{single ? prop[0].id :prop.id}</p>
        <span>{single ? prop[0].name :prop.name}</span>
        <Link to={`/user/user-game-swap?id=${single ? prop[0].id :prop.id}&name=${single ? prop[0].name :prop.name}`} type="button" className="button-submit">
          SWAP
        </Link>
      </div>
    </div>
  );
};

export default GameCard;

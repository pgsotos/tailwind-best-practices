import { VideoGame } from "../models/video-game";

const GameItem = (game: Omit<VideoGame, "id">) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          className="w-full h-full object-cover object-center"
          src={game.image}
          alt={game.title}
        />
        <div className="card-overlay">
          <p className="card-icon">🎮</p>
        </div>
      </div>
      <div className="card-content">
        <h3 className="title">{game.title}</h3>
        <h4 className="subtitle">{game.subtitle}</h4>
        <p className="text-gray-400 text-sm">{game.description}</p>
      </div>
    </div>
  );
};

export default GameItem;

import "./App.css";
import { VideoGame } from "./models/video-game";
import VideoGameGrid from "./VideoGames/VideoGameGrid";

// layour -> display -> spacing -> border -> colors -> text

function App() {
  const games: VideoGame[] = [
    {
      id: 1,
      title: "Stellar Odyssey",
      subtitle: "Space Adventure RPG",
      description:
        "Embark on an epic journey through the cosmos, discovering ancient civilizations and battling intergalactic threats.",
      image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Mythical Warriors",
      subtitle: "Fantasy Combat",
      description:
        "Join legendary warriors in their quest to protect the realm from dark forces and mythical creatures.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
      rating: 4.5,
    },
    {
      id: 3,
      title: "Cyber Revolution",
      subtitle: "Dystopian Action",
      description:
        "Navigate through a neon-lit cyberpunk world, hacking systems and fighting corporate corruption.",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
      rating: 4.9,
    },
    {
      id: 4,
      title: "Speed Demons",
      subtitle: "Racing Simulator",
      description:
        "Experience high-octane racing action across beautifully detailed tracks from around the world.",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
      rating: 4.6,
    },
    {
      id: 5,
      title: "Kingdom Siege",
      subtitle: "Strategy & Tactics",
      description:
        "Build your empire, train armies, and engage in epic medieval battles for territory control.",
      image: "https://images.unsplash.com/photo-1582921017967-79d1cb6702ee",
      rating: 4.7,
    },
    {
      id: 6,
      title: "Ocean Explorer",
      subtitle: "Underwater Adventure",
      description:
        "Dive into mysterious ocean depths, discover marine life, and solve underwater puzzles.",
      image: "https://images.unsplash.com/photo-1601987177651-8edfe6c20009",
      rating: 4.4,
    },
  ];

  return <VideoGameGrid games={games} />;
}

export default App;

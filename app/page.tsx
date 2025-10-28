"use client";

import Image from "next/image";

export default function Home() {
  const movies = [
    {
      title: "One Battle After Another",
    rating: "⭐ 3.7 / 5",
    poster: "https://upload.wikimedia.org/wikipedia/en/2/2a/War_movie_poster_2024.jpg", // placeholder image
    summary: "A fierce clash between loyalties and survival — non-stop action and intense drama.",
    },
    {
    title: "Tron: Ares",
    rating: "⭐ 3.8 / 5",
    poster: "https://upload.wikimedia.org/wikipedia/en/f/f3/Tron_Ares_temp_poster.jpg",
    summary: "A futuristic digital rebellion continues — visually stunning sci-fi action thriller.",
    },
    {
    title: "War 2",
    rating: "⭐ 3.6 / 5",
    poster: "https://m.media-amazon.com/images/M/MV5BNzYwMWQ3ZmItNzBlNC00YWFjLTk0NjEtNzU2NjYxZjJhNjZjXkEyXkFqcGc@._V1_.jpg",
    summary: "Hrithik Roshan returns with high-voltage action, espionage, and YRF spy universe intensity.",
    },
    {
    title: "Salaar: Cease Fire",
    rating: "⭐ 4.1 / 5",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/3f/Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
    summary: "Prabhas returns in a dark, violent epic. Prashanth Neel’s trademark world-building.",
    },
    {
      title: "Pushpa 2: The Rule",
      rating: "⭐ 4.0 / 5",
      poster: "https://upload.wikimedia.org/wikipedia/en/0/0e/Pushpa_2_The_Rule.jpg",
      summary: "Stylish, gritty, and packed with attitude. Sukumar’s world of red sand and rebellion continues to burn.",
    },
    {
      title: "Game Changer",
      rating: "⭐ 3.6 / 5",
      poster: "https://upload.wikimedia.org/wikipedia/en/5/5c/Game_Changer_film_poster.jpg",
      summary: "Political power meets Shankar’s grand visuals. Ram Charan shines, though screenplay dips midway.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center px-4">
      <header className="w-full text-center py-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-pink-500">🎬 CineReel</h1>
        <p className="mt-3 text-lg text-gray-400">
          Honest Telugu Movie Reviews • OTT Buzz • Cinema Vibes
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl pb-20">
        {movies.map((movie, index) => (
          <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
            <Image
              src={movie.poster}
              alt={movie.title}
              width={500}
              height={700}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-white">{movie.title}</h2>
              <p className="text-pink-400 mb-2">{movie.rating}</p>
              <p className="text-gray-300 text-sm">{movie.summary}</p>
            </div>
          </div>
        ))}
      </section>

      <footer className="w-full text-center py-6 border-t border-gray-800 text-gray-500 text-sm">
        © {new Date().getFullYear()} CineReelHub. Non-commercial hobby site.
      </footer>
    </main>
  );
}

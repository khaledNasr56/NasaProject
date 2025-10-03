import { useState } from "react";
import { Leaf, Recycle, Droplets, Wind, Zap } from "lucide-react";
import { Link } from "react-router-dom";


export default function Challanges() {
  const categories = [
    { id: "plastic", label: "Reduce Plastic", icon: <Recycle className="w-5 h-5 text-emerald-600" /> },
    { id: "green", label: "Expand Green Spaces", icon: <Leaf className="w-5 h-5 text-emerald-600" /> },
    { id: "pollution", label: "Reduce Pollution", icon: <Wind className="w-5 h-5 text-emerald-600" /> },
    { id: "energy", label: "Save Energy", icon: <Zap className="w-5 h-5 text-emerald-600" /> },
    { id: "water", label: "Water Conservation", icon: <Droplets className="w-5 h-5 text-emerald-600" /> },
  ];

  const allChallenges = [
    {
      id: 1,
      category: "plastic",
      title: "Use a Reusable Bottle",
      desc: "Say no to single-use plastics by using your own bottle.",
      points: 100,
      image: "Submit-blastic.avif",
    },
    {
      id: 2,
      category: "green",
      title: "Plant a Tree",
      desc: "Contribute to a greener planet by planting a tree.",
      points: 250,
      image: "Submit-3.jpg",
    },
    {
      id: 3,
      category: "pollution",
      title: "Car-Free Day",
      desc: "Use public transport or cycle instead of driving.",
      points: 150,
      image: "Submit-6.avif",
    },
    {
      id: 4,
      category: "energy",
      title: "Turn Off Lights",
      desc: "Save electricity by switching off unused lights.",
      points: 80,
      image: "Submit-4.avif",
    },
    {
      id: 5,
      category: "water",
      title: "Short Showers",
      desc: "Limit your shower time to conserve water.",
      points: 120,
      image: "Submit-5.avif",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("plastic");

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-12">
        🌍 Challenges
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full border transition ${
              selectedCategory === cat.id
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white text-emerald-600 border-emerald-400 hover:bg-emerald-50"
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Challenge Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {allChallenges
          .filter((c) => c.category === selectedCategory)
          .map((challenge) => (
            <div
              key={challenge.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center"
            >
            <img
  src={challenge.image}
  alt={challenge.title}
  className="w-full h-48 object-contain rounded-xl mb-4 bg-gray-100"
/>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {challenge.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{challenge.desc}</p>
              <p className="font-bold text-emerald-600 mb-4">
                {challenge.points} pts
              </p>
              <Link to="/submit"  className="cursor-pointer bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition">
                Join Challenge
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

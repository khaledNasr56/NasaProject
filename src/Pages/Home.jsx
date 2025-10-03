import { Gift, Award, Sprout, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Trophy, Medal } from "lucide-react";



export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="133192022-volunteering-young-people.jpg"
            alt="Modern green buildings with vegetation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Join the EarthGuardins
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-light">
              Take action today for a sustainable tomorrow. Participate in eco-challenges and earn rewards for making a
              difference.
            </p>

            {/* CTA Button */}
            <div className="flex items-center justify-center pt-3">
              <Link to ="signup" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Get Started
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/80 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-gray-600 mb-12">Get started in three simple steps</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className=" cursor-pointer bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
               <div className="text-emerald-600 mb-4 flex justify-center">
              <Sprout size={50} strokeWidth={2} />
            </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Join eco-challenges</h3>
              <p className="text-gray-600">
                Participate in daily and weekly challenges to reduce your carbon footprint
              </p>
            </div>

            {/* Step 2 */}
            <div className="cursor-pointer bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-emerald-600 mb-4 flex justify-center">
              <Award size={50} strokeWidth={2} />
            </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Collect points</h3>
              <p className="text-gray-600">
                Earn points for every eco-friendly action you complete
              </p>
            </div>

            {/* Step 3 */}
            <div className="cursor-pointer bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
               <div className="text-emerald-600 mb-4 flex justify-center">
              <Gift size={50} strokeWidth={2} />
            </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Redeem rewards</h3>
              <p className="text-gray-600">
                Exchange your points for sustainable products and exclusive perks
              </p>
            </div>
          </div>
        </div>

      </section>

        {/* Rewards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Redeem Your Rewards
          </h2>
          <p className="text-gray-600 mb-12">
            Turn your eco-actions into tangible rewards
          </p>

          {/* Rewards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="cursor-pointer bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <img
                src="reward-0.jpg"
                alt="Eco Bottle"
                className="w-60 h-60 object-cover rounded mb-4"
              />
              <h3 className="font-semibold text-lg">Canvas Tote Bag</h3>
              <p className="text-gray-600 text-sm mt-2">
                Exclusive achievement badges to showcase your impact
              </p>
              <span className="mt-4 inline-block bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                100 pts
              </span>
            </div>

            {/* Card 2 */}
            <div className=" cursor-pointer bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <img
                src="reward-1.jpg"
                alt="Eco Bottle"
                className="w-60 h-60 object-cover rounded mb-4"
              />
              <h3 className="font-semibold text-lg">Eco Water Bottle</h3>
              <p className="text-gray-600 text-sm mt-2">
                Sustainable stainless steel water bottle
              </p>
              <span className="mt-4 inline-block bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                500 pts
              </span>
            </div>

            {/* Card 3 */}
            <div className="cursor-pointer bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <img
                src="reward-2.jpg"
                alt="Canvas Bag"
                className="w-60 h-60 object-cover rounded mb-4"
              />
              <h3 className="font-semibold text-lg">Canvas Tote Bag</h3>
              <p className="text-gray-600 text-sm mt-2">
                100% organic cotton tote bag
              </p>
              <span className="mt-4 inline-block bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                350 pts
              </span>
            </div>

            {/* Card 4 */}
            <div className="cursor-pointer bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
              <img
                src="reward-3.jpg"
                alt="Plant a Tree"
                className="w-60 h-60 object-cover rounded mb-4"
              />
              <h3 className="font-semibold text-lg">Plant a Tree</h3>
              <p className="text-gray-600 text-sm mt-2">
                Plant a tree with your name in our global forest
              </p>
              <span className="mt-4 inline-block bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                1000 pts
              </span>
            </div>
          </div>

          {/* Button */}
          <div className="mt-12 cursor-pointer" >
            <Link to="/rewards" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all">
              View All Rewards
            </Link>
          </div>
        </div>
      </section>

          <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
           Community Leaderboard
        </h2>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-emerald-100 text-emerald-800 text-lg">
                <th className="py-4 px-6">Rank</th>
                <th className="py-4 px-6">Team</th>
                <th className="py-4 px-6">Neighborhood</th>
                <th className="py-4 px-6 text-right">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              <tr>
                <td className="py-4 px-6 flex items-center gap-2">
                  <Trophy className="text-yellow-500 w-5 h-5" /> 1
                </td>
                <td className="py-4 px-6 font-semibold">Green Warriors</td>
                <td className="py-4 px-6">Downtown</td>
                <td className="py-4 px-6 text-right font-bold">15,420</td>
              </tr>
              <tr>
                <td className="py-4 px-6 flex items-center gap-2">
                  <Medal className="text-gray-400 w-5 h-5" /> 2
                </td>
                <td className="py-4 px-6 font-semibold">Eco Champions</td>
                <td className="py-4 px-6">Riverside</td>
                <td className="py-4 px-6 text-right font-bold">14,850</td>
              </tr>
              <tr>
                <td className="py-4 px-6 flex items-center gap-2">
                  <Award className="text-orange-500 w-5 h-5" /> 3
                </td>
                <td className="py-4 px-6 font-semibold">Planet Savers</td>
                <td className="py-4 px-6">Hillside</td>
                <td className="py-4 px-6 text-right font-bold">13,900</td>
              </tr>
              <tr>
                <td className="py-4 px-6">4</td>
                <td className="py-4 px-6 font-semibold">Nature Lovers</td>
                <td className="py-4 px-6">Westside</td>
                <td className="py-4 px-6 text-right font-bold">12,340</td>
              </tr>
              <tr>
                <td className="py-4 px-6">5</td>
                <td className="py-4 px-6 font-semibold">Green Team</td>
                <td className="py-4 px-6">Eastside</td>
                <td className="py-4 px-6 text-right font-bold">11,890</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>


      <section className="bg-emerald-500 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to start your green journey?
        </h2>
        <p className="text-lg md:text-xl text-white mb-8">Join thousands of eco-warriors making a real impact today</p>
        <Link to="signup" className="bg-white text-emerald-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
          Sign Up Now
        </Link>
      </div>
    </section>


    </div>
  )
}

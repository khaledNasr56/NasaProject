import { Link } from "react-router-dom"


export default function About() {
  const featureCards = [
    {
      title: "How It Works",
      description: "Users earn points by completing eco-friendly challenges, participating in community events, or winning eco-league games.",
      image: "/about-1.png",
    },
    {
      title: "Types of Rewards",
      description: "Digital badges, profile upgrades, real-world eco-products, and community rewards that motivate sustainable actions.",
      image: "/about-2.png",
    },
    {
      title: "Impact & Progression",
      description: "See how your participation helps the environment, and unlock higher-value rewards as your points grow.",
      image: "/about-3.jpg",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* About Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Green Rewards</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            "EarthGuardins, earn rewards! Complete challenges, join events, and turn your eco-actions into real impact."
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-60 object-cover rounded-2xl mb-6"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 border border-emerald-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make a Difference?</h2>
            <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
              Join our community today and start earning rewards while contributing to a sustainable future for our
              planet.
            </p>
            <Link to="/signup" className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 shadow-md hover:shadow-lg">
              Get Started Now
            </Link>
          </div>
        </div>
    </section>
  )
}

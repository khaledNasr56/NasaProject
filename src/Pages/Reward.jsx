import { BookOpen, CreditCard, Leaf, Star } from "lucide-react";

export default function Rewards() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-12">
        Rewards & Achievements
      </h1>

      {/* 📚 تعلم وتجارب */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-7 h-7 text-emerald-600" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Learning & Experiences
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RewardCard 
            image="Learning-1.jpg " 
            title="Eco Workshop Ticket" 
            desc="Attend hands-on workshops about recycling and sustainability." 
          />
          <RewardCard 
            image="Learning-2.jpg" 
            title="Virtual Sustainability Course" 
            desc="Free online course about renewable energy and eco-living." 
          />
          <RewardCard 
            image="Learning-3.avif" 
            title="Community Clean-up Event" 
            desc="Join a local clean-up event and get a special badge." 
          />
        </div>
      </section>

      {/* 💳 قسائم وخصومات */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <CreditCard className="w-7 h-7 text-emerald-600" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Vouchers & Discounts
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RewardCard 
            image="Gift-Card.avif" 
            title="Gift Card" 
            desc="Redeem points for gift cards at eco-friendly stores." 
          />
          <RewardCard 
            image="Store-Discounts.avif" 
            title="Store Discounts" 
            desc="Get % discounts on sustainable products." 
          />
          <RewardCard 
            image="Free-Coffee.avif" 
            title="Free Coffee" 
            desc="Enjoy a free coffee at partner cafés." 
          />
        </div>
      </section>

      {/* 🌍 منتجات صديقة للبيئة */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Leaf className="w-7 h-7 text-emerald-600" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Eco-Friendly Products
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RewardCard 
            image="Water-Bottle.avif" 
            title="Reusable Water Bottle" 
            desc="Sustainable stainless steel water bottle." 
          />
          <RewardCard 
            image="Tote-Bag.avif" 
            title="Canvas Tote Bag" 
            desc="Organic cotton tote bag for eco shopping." 
          />
          <RewardCard 
            image="Bamboo-Toothbrush.avif" 
            title="Bamboo Toothbrush" 
            desc="Eco-friendly bamboo toothbrush for daily use." 
          />
        </div>
      </section>

      {/* 🔥 جوائز مميزة */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Star className="w-7 h-7 text-emerald-600" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Premium Rewards
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RewardCard 
            image="Bike-Pass.avif" 
            title="Bike Sharing Pass" 
            desc="Free subscription to eco-friendly bike sharing service." 
          />
          <RewardCard 
           image="Solar-Bowerbank.png"
            title="Solar Charger" 
            desc="Portable solar-powered mobile charger." 
          />
          <RewardCard 
            image="T-shirt.avif"
            title="Sustainable T-shirt" 
            desc="Organic cotton t-shirt with eco message." 
          />
        </div>
      </section>
    </div>
  );
}

// Card Component
function RewardCard({ image, title, desc }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center object-cover">
      {image && (
       <img 
  src={image} 
  alt={title} 
  className="w-full h-40 object-contain rounded-xl mb-4 bg-gray-100"
/>

      )}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Mail } from "lucide-react";
export default function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* العنوان */}
         <h2 className="flex items-center justify-center text-4xl font-bold text-emerald-700 text-center mb-12 gap-3">
          <Mail className="w-10 h-10 text-emerald-600" />
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* الفورم */}
          <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* بيانات التواصل */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-emerald-600 w-6 h-6" />
              <span className="text-gray-700 text-lg">+20 123 456 7890</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-emerald-600 w-6 h-6" />
              <span className="text-gray-700 text-lg">ecoapp@green.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-emerald-600 w-6 h-6" />
              <span className="text-gray-700 text-lg">Cairo, Egypt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

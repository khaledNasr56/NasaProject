import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Challenges from "./Pages/Chellanges";
import Rewards from "./Pages/Reward";
import Contact from "./Pages/Contact";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Footer from "./Components/Footer";
import Header from "./Components/Header"; // 👈 استدعاء الهيدر
import Submit from "./Pages/Submit";

export default function App() {
  return (
    <Router>
      {/* Navbar */}
      <Header />

      {/* Routes */}
      <main className="min-h-screen pt-20"> 
        {/* pt-20 عشان ما يتغطاش بالمينيو الثابت فوق */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer /> 
    </Router>
  );
}

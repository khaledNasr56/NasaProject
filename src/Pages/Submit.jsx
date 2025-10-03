import { useState } from "react";
import { Upload, Video, Image as ImageIcon, CheckCircle } from "lucide-react";

export default function Submit() {
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      setSubmitted(true);
      console.log("Submitted file:", file);
      // هنا ترفع الملف للباك إند (API) أو Firebase مثلاً
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center text-emerald-700 mb-8 flex items-center justify-center gap-2">
        <Upload className="w-7 h-7 text-emerald-600" />
        Submit Your Proof
      </h1>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white shadow-md rounded-2xl p-8 flex flex-col items-center"
        >
          <p className="text-gray-600 mb-6 text-center">
            Upload a photo or video as proof of completing your challenge.
          </p>

          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center border-2 border-dashed border-emerald-400 rounded-xl p-6 w-full cursor-pointer hover:bg-emerald-50 transition"
          >
            <ImageIcon className="w-10 h-10 text-emerald-500 mb-2" />
            <Video className="w-10 h-10 text-emerald-500 mb-2" />
            <span className="text-gray-600">
              {file ? file.name : "Click to upload image or video"}
            </span>
            <input
              id="file-upload"
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          <button
            type="submit"
            className=" cursor-pointer mt-6 bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition"
            disabled={!file}
          >
            Submit Proof
          </button>
        </form>
      ) : (
       <div className="max-w-lg mx-auto bg-green-50 border border-green-200 rounded-2xl p-6 flex flex-col items-center text-center">
  <CheckCircle className="w-12 h-12 text-emerald-600 mb-4" />
  <h2 className="text-xl font-semibold text-emerald-700 mb-2">
    ✅ Activity Submitted Successfully!
  </h2>
  <p className="text-gray-600">
    Thank you for participating in the challenge. Our team will review your submission soon 🌱
  </p>
</div>

      )}
    </div>
  );
}

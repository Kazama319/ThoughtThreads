import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");
  const [c, sett] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f72057bf-c6d3-4277-aeb4-0341e3f22871");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Submitted Successfully! Thank you for your feedback.");
      sett(true);
      event.target.reset();} else {
      console.error("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#02AABD] to-[#00CEAC] p-6">
      {/* Centered Section - Contact Form */}
      <div className="w-1/3 bg-gradient-to-r from-gray-800 to-black rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-4xl font-sans mb-6 text-center">Share Your Feedback</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full md:w-50 lg:w-70 h-10 bg-gray-800 text-white border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
             className="mt-1 block w-full md:w-50 lg:w-70 h-10 bg-gray-800 text-white rounded-md  sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="8" // Increased rows for larger textarea
              required
              className="mt-1 block w-full bg-gray-800 text-white border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="block mt-4 text-center">
  {result}
  {result !==""  && (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-smile inline-block align-middle ml-2"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
    <line x1="9" y1="9" x2="9.01" y2="9"></line>
    <line x1="15" y1="9" x2="15.01" y2="9"></line>
  </svg>
)}
  
</div>

      </div>
    </div>
  );
}

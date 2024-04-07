import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Simulate form submission (replace with your actual form submission logic)
    console.log('Form submitted:', formData);

    // Clear form data after submission
    setFormData({ email: '', message: '' });
  };

  return (
    <div className="h-[600px] ">
      <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-[#778D45] p-8">
        <h2 className="title-font mb-1 text-lg font-medium text-white">Save The Date</h2>
        <p className="mb-5 leading-relaxed text-white">ניתן ליצור קשר</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm leading-7 text-white">המייל שלך</label>
            <input type="email" id="email" name="email" value={formData.email}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="text-sm leading-7 text-white">הערות</label>
            <textarea id="message" name="message" value={formData.message}
              onChange={handleChange}
              className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
          </div>
          <button className="rounded border-0 bg-white py-2 px-6 text-lg text-black hover:bg-[#4c5f22] focus:outline-none">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

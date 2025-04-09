import React from 'react';
import { useForm } from '@formspree/react';

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mkgjpddq");

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-green-100 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Thank You!</h2>
          <p className="text-green-600">Your message has been sent successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
            <span className="text-red-500 text-sm">{state.errors?.firstName && "First Name is required."}</span>
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
            <span className="text-red-500 text-sm">{state.errors?.lastName && "Last Name is required."}</span>
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="text-red-500 text-sm">{state.errors?.email && "A valid email is required."}</span>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="text-red-500 text-sm">{state.errors?.phone && "Phone number is required."}</span>
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company *
          </label>
          <input
            type="text"
            name="company"
            id="company"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="text-red-500 text-sm">{state.errors?.company && "Company name is required."}</span>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="text-red-500 text-sm">{state.errors?.subject && "Subject is required."}</span>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
          <span className="text-red-500 text-sm">{state.errors?.message && "Message is required."}</span>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={state.submitting}
            className="border rounded-md px-6 py-3 font-medium text-lg bg-[#1F2937] text-[#FFFFFF] border-[#1F2937] hover:bg-[#374151] transition-colors"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs; 
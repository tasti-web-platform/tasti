import React from 'react';
import { useForm } from '@formspree/react';

const TryDemo = () => {
  const [state, handleSubmit] = useForm("xblgqroq"); 
  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-green-100 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Thank You!</h2>
          <p className="text-green-600">Your request has been submitted successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Join our Beta Program</h1>
      <p className="text-center text-gray-600 mb-8">Specify which tools you would like to try during the TASTI WEB PLATFORM beta.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Surname */}
          <div>
            <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-1">
              Surname *
            </label>
            <input
              type="text"
              name="surname"
              id="surname"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
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
        </div>

        {/* Job Title */}
        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
            Job Title *
          </label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Industry */}
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
            Industry *
          </label>
          <input
            type="text"
            name="industry"
            id="industry"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Tools Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Which tools would you like to try? *
          </label>
          <div className="space-y-2">
            <div>
              <input type="checkbox" name="tools" value="CamFITool" id="camfitool" className="mr-2" />
              <label htmlFor="camfitool">CamFITool</label>
            </div>
            <div>
              <input type="checkbox" name="tools" value="CamGenTool" id="camgentool" className="mr-2" />
              <label htmlFor="camgentool">CamGenTool</label>
            </div>
            <div>
              <input type="checkbox" name="tools" value="CamTrainTool" id="camtraintool" className="mr-2" />
              <label htmlFor="camtraintool">CamTrainTool</label>
            </div>
            <div>
              <input type="checkbox" name="tools" value="CamQTool" id="camqtool" className="mr-2" />
              <label htmlFor="camqtool">CamQTool</label>
            </div>
            <div>
              <input type="checkbox" name="tools" value="GenerativeZoo" id="generativezoo" className="mr-2" />
              <label htmlFor="generativezoo">GenerativeZoo</label>
            </div>
          </div>
        </div>

        {/* Intended Use */}
        <div>
          <label htmlFor="intendedUse" className="block text-sm font-medium text-gray-700 mb-1">
            What is your intended use? *
          </label>
          <input
            type="text"
            name="intendedUse"
            id="intendedUse"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={state.submitting}
            className="border rounded-md px-6 py-3 font-medium text-lg bg-[#1F2937] text-[#FFFFFF] border-[#1F2937] hover:bg-[#374151] transition-colors"
          >
            {state.submitting ? "Submitting..." : "Confirm"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TryDemo; 
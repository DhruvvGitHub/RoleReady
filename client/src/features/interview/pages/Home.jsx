import React from "react";

const Home = () => {
  return (
    <main className="home min-h-screen flex justify-center">
      <div className="main-container py-16 flex flex-col gap-8">
        <h1 className="text-2xl">Enter the following details and generate your report</h1>
        <div className="input-container w-full">
          <div className="left flex flex-col gap-2">
            <label htmlFor="jobDescription" className="text-xl font-semibold">Job Description</label>
            <textarea
              name="jobDescription"
              id="jobDescription"
              placeholder="Enter job description here"
              className="w-full min-h-50 border border-gray-400 outline-none p-2 rounded-md"
            ></textarea>
          </div>
          <div className="right">
            <div className="input-group"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

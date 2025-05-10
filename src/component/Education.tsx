const Education = () => {
  return (
    <div className="text-gray-300 space-y-2">
      {/* Bachelor's Degree */}
      <div className="bg-[#1F1F1F] p-4 rounded-lg shadow-md">
        <span className="text-[#00AAFF]">Jan 2020 - July 2024</span>
        <h1 className="text-xl font-semibold mt-1 text-white">
          Bachelor of Technology (B.tech)
        </h1>
        <h2 className="">Grade: 8.62 CGPA</h2>
        <h2 className="">
          Maharaja Surajmal Institute of Technology (GGSIPU), Delhi
        </h2>
      </div>

      {/* 12th Grade */}
      <div className="bg-[#1F1F1F] p-4 rounded-lg shadow-md">
        <span className="text-[#00AAFF]">March 2017 - April 2019</span>
        <h1 className="text-xl font-semibold mt-1 text-white">
          Higher Secondary Education
        </h1>
        <h2 className="">Percentage: 81%</h2>
        <h2 className="">Lucent International School</h2>
      </div>

      {/* 10th Grade */}
      <div className="bg-[#1F1F1F] p-4 rounded-lg shadow-md">
        <span className="text-[#00AAFF]">2017 February</span>
        <h1 className="text-xl font-semibold mt-1 text-white">
          Secondary Education
        </h1>
        <h2 className="">Grade: 10 CGPA</h2>
        <h2 className="">Lucent International School</h2>
      </div>
    </div>
  );
};

export default Education;

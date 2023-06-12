import React from "react";

function StepOne() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="border bg-white border-#E6E6E6-500 h-24 h-auto w-2/5 p-8 shadow-lg">
        <div className="flex flex-row justify-between mb-6">
          <div className="font-sans not-italic font-normal text-xl leading-7">
            Create a job
          </div>
          <div className="font-sans not-italic font-medium text-base leading-6">
            Step 1
          </div>
        </div>
        <div>
          <div className="font-sans not-italic font-medium text-sm leading-5 ">
            Job title<span className="text-red-600">*</span>
          </div>
          <div>
            <input type="text" className="px-4 py-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepOne;

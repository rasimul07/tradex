import { fetchSingleCourse } from "@/utils/actions";
import React from "react";

async function AgreementInfo({courseId}:{courseId:string}) {
  const program = await fetchSingleCourse({courseId})
  return (
    <div>
      <header
        className="text-white text-center py-8 rounded-t-lg shadow-md"
        style={{ backgroundColor: "#0077cc" }}
      >
        <h1 className="text-xl font-bold">{program?.title}</h1>
      </header>

      <img
        src="https://share1.cloudhq-mkt3.net/cce86d0594b1f5.png"
        alt="THE TRADX LOGO"
        className="block mx-auto my-8 max-w-full h-auto"
        width={1000} // Set the width according to your image
        height={150} // Set the height according to your image
      />

      <div className="text-center py-4">
        <h2 className="text-2xl text-blue-500 mb-3 font-bold">
          Offer Acceptance
        </h2>
        <p className="text-base mb-6">
          Welcome to the Tradx Fellowship Program 2024! As a selected fellow,
          you are required to review and accept the terms of this fellowship.
          Kindly upload the essential documents for physical verification, and
          record a selfie video stating your acceptance using the provided video
          code.
        </p>

        <h3 className="text-xl text-center font-semibold mb-3">
          Fellowship Benefits 🎖️
        </h3>
        <ul className="list-none text-center pl-5 space-y-2 leading-none">
          <li>📚 A Fellowship Student ID Card valid for 45 days.</li>
          <li>👨‍🏫 1-on-1 mentorship from Tradx experts for 45 days.</li>
          <li>💰 Access to a $10,000 practice trading account.</li>
          <li>
            🌟 Based on your performance during the practice period, you will be
            eligible for the next phase of the Tradx Funded Program (Nov 2024).
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-center text-blue-500 font-bold text-xl mt-2 mb-3">
          Agreement and Terms & Conditions
        </h3>
        <div className="bg-gray-200 p-8 rounded-xl text-sm">
          <p className="mb-4">
            By accepting this fellowship, you agree to the following:
          </p>
          <ul className="list-disc pl-5">
            <li>
              1. You will adhere to the rules and regulations of the Tradx
              Fellowship Program.
            </li>
            <li>
              2. The fellowship benefits, including mentorship and practice
              accounts, are valid for the stated period of 45 days.
            </li>
            <li>
              3. Participation in this fellowship does not guarantee any
              financial compensation or future employment, but you may qualify
              for future funded programs based on performance.
            </li>
            <li>
              4. All documents provided must be accurate and authentic. Any
              discrepancies may result in the termination of this fellowship.
            </li>
            <li>
              5. You must provide a selfie video, stating your acceptance of
              this fellowship and reciting the provided video code.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AgreementInfo;

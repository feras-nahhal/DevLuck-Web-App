"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useMemo, useRef, useEffect } from "react";
import DashboardLayout from "@/src/components/Student/DashboardLayout";
import { mockContracts } from "@/src/mocks/mockContract";





const ITEMS_PER_PAGE = 10;
export default function contractDetailPage() {
   const { contractId } = useParams();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showApplicants, setShowApplicants] = useState(true);
  const [activeTab, setActiveTab] = useState<"description" | "candidates">(
    "description"
  );

  // Find contract by ID from mockContracts
  const contract = mockContracts.find(
    (c) => c.id.toString() === contractId
  );

  if (!contract) {
    return (
      <DashboardLayout>
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold">Job Not Found</h2>
          <button
            className="mt-4 px-4 py-2 bg-yellow-300 rounded hover:bg-yellow-400"
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="px-4 sm:px-6 lg:px-8 py-6">

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          {/* Description Tab */}
          <button
            onClick={() => setActiveTab("description")}
            className={
              activeTab === "description"
                ? "relative w-[180px] h-[40px] skew-x-[-12deg] bg-[#FFEB9C] flex items-center justify-center overflow-hidden rounded-md transition duration-200 hover:bg-[#FFE066] hover:scale-105"
                : "w-[180px] h-[40px] flex items-center justify-center text-black/60 hover:text-black transition"
            }
          >
            <span
              className={
                activeTab === "description" ? "skew-x-[12deg] font-semibold" : ""
              }
            >
              Description
            </span>
          </button>

          {/* Applied Candidates Tab */}
          <button
            onClick={() => setActiveTab("candidates")}
            className={
              activeTab === "candidates"
                ? "relative w-[180px] h-[40px] skew-x-[-12deg] bg-[#FFEB9C] flex items-center justify-center overflow-hidden rounded-md transition duration-200 hover:bg-[#FFE066] hover:scale-105"
                : "w-[180px] h-[40px] flex items-center justify-center text-black/60 hover:text-black transition"
            }
          >
            <span
              className={
                activeTab === "candidates" ? "skew-x-[12deg] font-semibold" : ""
              }
            >
              Applied Candidates
            </span>
          </button>
        </div>


        {/* Job Header */}
        <h1 className="text-3xl font-bold mb-2">{contract.contractTitle}</h1>
        <p className="text-sm text-black/60 mb-6">
          {contract.jobType} • {contract.location} • Job ID: {contract.id}
        </p>

        {/* TAB CONTENT */}
        {activeTab === "description" && (
          <div className="flex flex-col gap-6">


            <section>
              <h2 className="font-semibold text-xl mb-2">Job Description</h2>
              <p>{contract.jobDescription}</p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">Key Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-1">
                {contract.keyResponsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

             <section>
              <h3 className="font-semibold mb-2">
                Why You&apos;ll Love Working Here
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                {contract.whyYoullLoveWorkingHere.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

           



           

          </div>
        )}

        {activeTab === "candidates" && (
    <div className="bg-white p-6 ">

           {/* Jobs Section */}
      <div className="flex flex-row pl-2">
        {/* Main column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
          {/* Search Input – Parallelogram */}
            <div
              className="
                relative
                w-full max-w-md
                skew-x-[-12deg]
                rounded-lg
                overflow-hidden
                border border-black/15
                focus-within:border-black
                transition-all
              "
            >
              <input
                type="text"
                placeholder="Search applicants..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="
                  w-full
                  px-4 py-2
                  bg-transparent
                  text-black
                  placeholder:text-black/40
                  focus:outline-none
                  skew-x-[12deg]
                "
              />
              {/* Search icon */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2  flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8067 12.86L11.54 10.6C12.2713 9.66831 12.6681 8.51777 12.6667 7.33334C12.6667 6.2785 12.3539 5.24736 11.7678 4.37029C11.1818 3.49323 10.3489 2.80965 9.37431 2.40598C8.39978 2.00231 7.32742 1.89669 6.29285 2.10248C5.25829 2.30827 4.30798 2.81622 3.5621 3.5621C2.81622 4.30798 2.30827 5.25829 2.10248 6.29285C1.89669 7.32742 2.00231 8.39978 2.40598 9.37431C2.80965 10.3489 3.49323 11.1818 4.37029 11.7678C5.24736 12.3539 6.2785 12.6667 7.33334 12.6667C8.51777 12.6681 9.66831 12.2713 10.6 11.54L12.86 13.8067C12.922 13.8692 12.9957 13.9188 13.077 13.9526C13.1582 13.9864 13.2453 14.0039 13.3333 14.0039C13.4213 14.0039 13.5085 13.9864 13.5897 13.9526C13.671 13.9188 13.7447 13.8692 13.8067 13.8067C13.8692 13.7447 13.9188 13.671 13.9526 13.5897C13.9864 13.5085 14.0039 13.4213 14.0039 13.3333C14.0039 13.2453 13.9864 13.1582 13.9526 13.077C13.9188 12.9957 13.8692 12.922 13.8067 12.86ZM3.33334 7.33334C3.33334 6.54221 3.56793 5.76885 4.00746 5.11106C4.44698 4.45326 5.0717 3.94057 5.8026 3.63782C6.53351 3.33507 7.33777 3.25585 8.1137 3.41019C8.88962 3.56454 9.60235 3.9455 10.1618 4.50491C10.7212 5.06432 11.1021 5.77705 11.2565 6.55297C11.4108 7.3289 11.3316 8.13317 11.0289 8.86407C10.7261 9.59497 10.2134 10.2197 9.55562 10.6592C8.89782 11.0987 8.12446 11.3333 7.33334 11.3333C6.27247 11.3333 5.25505 10.9119 4.50491 10.1618C3.75476 9.41162 3.33334 8.3942 3.33334 7.33334Z" fill="#1E1E1E"/>
                </svg>

              </div>
            </div>
            {/* Filter Buttons – Parallelogram on right */}
            <div className="flex gap-2 ml-auto">
              {/* First Filter Button */}
              <button className="relative w-[60px] h-[40px] skew-x-[-12deg] bg-transparent border border-black flex items-center justify-center overflow-hidden rounded-lg hover:bg-black/10 transition-all"
              onClick={() => setShowApplicants(!showApplicants)}>
                <span className="skew-x-[12deg] font-bold text-sm text-black flex items-center gap-2">
                  <svg width="24" height="41" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.5V1H24V0.5V0H0V0.5ZM24 40.5V40H0V40.5V41H24V40.5Z" fill="#141A21"/>
                    <path d="M5.5 25C6.03043 25 6.53914 25.2107 6.91421 25.5858C7.28929 25.9609 7.5 26.4696 7.5 27C7.5 27.5304 7.28929 28.0391 6.91421 28.4142C6.53914 28.7893 6.03043 29 5.5 29C4.96957 29 4.46086 28.7893 4.08579 28.4142C3.71071 28.0391 3.5 27.5304 3.5 27C3.5 26.4696 3.71071 25.9609 4.08579 25.5858C4.46086 25.2107 4.96957 25 5.5 25ZM5.5 18.5C6.03043 18.5 6.53914 18.7107 6.91421 19.0858C7.28929 19.4609 7.5 19.9696 7.5 20.5C7.5 21.0304 7.28929 21.5391 6.91421 21.9142C6.53914 22.2893 6.03043 22.5 5.5 22.5C4.96957 22.5 4.46086 22.2893 4.08579 21.9142C3.71071 21.5391 3.5 21.0304 3.5 20.5C3.5 19.9696 3.71071 19.4609 4.08579 19.0858C4.46086 18.7107 4.96957 18.5 5.5 18.5ZM5.5 12C6.03043 12 6.53914 12.2107 6.91421 12.5858C7.28929 12.9609 7.5 13.4696 7.5 14C7.5 14.5304 7.28929 15.0391 6.91421 15.4142C6.53914 15.7893 6.03043 16 5.5 16C4.96957 16 4.46086 15.7893 4.08579 15.4142C3.71071 15.0391 3.5 14.5304 3.5 14C3.5 13.4696 3.71071 12.9609 4.08579 12.5858C4.46086 12.2107 4.96957 12 5.5 12Z" fill="#1E1E1E"/>
                    <path d="M20.0809 12.5858C19.7058 12.2107 19.1971 12 18.6667 12H12C11.4696 12 10.9609 12.2107 10.5858 12.5858C10.2107 12.9609 10 13.4696 10 14C10 14.5304 10.2107 15.0391 10.5858 15.4142C10.9609 15.7893 11.4696 16 12 16H18.6667C19.1971 16 19.7058 15.7893 20.0809 15.4142C20.456 15.0391 20.6667 14.5304 20.6667 14C20.6667 13.4696 20.456 12.9609 20.0809 12.5858Z" fill="#1E1E1E"/>
                    <path d="M20.0809 19.0858C19.7058 18.7107 19.1971 18.5 18.6667 18.5H12C11.4696 18.5 10.9609 18.7107 10.5858 19.0858C10.2107 19.4609 10 19.9696 10 20.5C10 21.0304 10.2107 21.5391 10.5858 21.9142C10.9609 22.2893 11.4696 22.5 12 22.5H18.6667C19.1971 22.5 19.7058 22.2893 20.0809 21.9142C20.456 21.5391 20.6667 21.0304 20.6667 20.5C20.6667 19.9696 20.456 19.4609 20.0809 19.0858Z" fill="#1E1E1E"/>
                    <path d="M20.0809 25.5858C19.7058 25.2107 19.1971 25 18.6667 25H12C11.4696 25 10.9609 25.2107 10.5858 25.5858C10.2107 25.9609 10 26.4696 10 27C10 27.5304 10.2107 28.0391 10.5858 28.4142C10.9609 28.7893 11.4696 29 12 29H18.6667C19.1971 29 19.7058 28.7893 20.0809 28.4142C20.456 28.0391 20.6667 27.5304 20.6667 27C20.6667 26.4696 20.456 25.9609 20.0809 25.5858Z" fill="#1E1E1E"/>
                  </svg>
                </span>
              </button>

             
            </div>
            </div>
            
       

        </div>
      </div>
           
          </div>
          
        )}

      </div>
    </DashboardLayout>
  );
}

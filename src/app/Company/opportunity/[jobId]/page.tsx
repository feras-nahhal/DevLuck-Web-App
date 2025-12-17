"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import DashboardLayout from "@/src/components/Company/DashboardLayout";
import { mockJobs } from "@/src/mocks/companyJobs";
import { mockApplicants } from "@/src/mocks/mockApplicants";


const ApplicantCard = ({
  applicant,
  onClick,
}: {
  applicant: typeof mockApplicants[0];
  onClick?: () => void;
}) => {
  return (
    <div className="relative w-[265px] h-[455px]">
      {/* SVG Card Body */}
      <img 
          src="/cards/applicant.svg" 
          alt="Applied Students"
        />

      {/* Content Container */}
      <div className="absolute w-[340px] h-[120px] left-[50%] top-[35%] -translate-x-[50%] -translate-y-[50%] rounded-[24px_0_0_24px] flex flex-col gap-3">
   
        {/* Info Row */}
    
        <div className="absolute bottom-28 left-[50%] -translate-x-[110%]  w-[102px] h-[111px] flex items-center justify-center">
         <div className="flex flex-col items-start gap-1">
            {/* Value */}
            <span className="font-semibold text-[16px] leading-[24px] text-[#1E1E1E]">
              {applicant.salaryPaid}
            </span>

            {/* Label */}
            <span className="font-normal text-[12px] leading-[18px] text-black/56">
              Salary Paid
            </span>
          </div>
        </div>

         <div className=" flex flex-col absolute top-25 left-[50%] -translate-x-[110%]  w-[102px] h-[111px] flex items-center justify-center">
         <div className="flex flex-col items-start gap-1">
            {/* Value */}
            <span className="font-semibold text-[16px] leading-[24px] text-[#1E1E1E]">
              {applicant.startDate}
            </span>

            {/* Label */}
            <span className="font-normal text-[12px] leading-[18px] text-black/56">
              Start Date
            </span>
          </div>
        
         <div className="flex flex-col items-start gap-1">
            {/* Value */}
            <span className="font-semibold text-[16px] leading-[24px] text-[#1E1E1E]">
              {applicant.endDate}
            </span>

            {/* Label */}
            <span className="font-normal text-[12px] leading-[18px] text-black/56">
              End Date
            </span>
          </div>
        </div>

        {/* Profile Id Number  */}
        <div className="absolute bottom-32 left-[50%] -translate-x-[-40%] w-[86px] h-[92px]">
          <img
            src="/cards/applicantNumber.svg"
            alt="Applied Students"
          />
        {/* Applicant ID text */}
          <div className="absolute bottom-10 left-[40%] -translate-x-[20%] flex flex-col items-center">
            <span className="font-semibold text-[11px] leading-[17px] text-black">
              {applicant.applicantId}
            </span>
          </div>
        </div>


        {/* Work Progress Bar */}

        <div className="absolute top-56 left-[50%] -translate-x-[50%]  w-[187px] h-[81px] p-[16px] flex flex-col gap-[8px] bg-white/60 backdrop-blur-[17px] rounded-[21px]">
          {/* Work Progress Label */}
          <div className="flex flex-row justify-between items-center w-[154px] h-[19px]">
            <span className="font-bold text-[12px] leading-[18px] uppercase text-[#1E1E1E]">
              Work Progress
            </span>
            
            <span className="font-bold text-[12px] leading-[18px] uppercase text-[#1E1E1E]">
              {applicant.workProgress}%
            </span>
          </div>

          {/* Progress Bar Container */}
          <div className="relative w-[154px] h-[16px] bg-[#1E1E1E] transform -skew-x-[20deg]  rounded-[4px]">
             {/* SVG Indicator */}
              <div className="relative z-100 w-[42px] h-[26px] ml-[-10px] mt-[-5px]">
                <img
                  src="/cards/applicantIndicator.svg"
                  alt="Applied Students"
                />
              </div>
            {/* Progress Fill */}
            <div
              className="absolute left-0 top-1/2 h-[14px] -translate-y-1/2 rounded bg-[#FFEB9C]"
              style={{ width: `${applicant.workProgress}%` }}
            />

          </div>
        </div>
      </div>

      {/* View Details Button */}
      <button
        className="absolute bottom-4 left-[50%] -translate-x-[120%] top-20 w-[102px] h-[111px] flex items-center justify-center"
        onClick={onClick}
      >
        <img
          src="/cards/applicantDetailsButton.svg"
          alt="Applied Students"
        />
      </button>
    </div>
  );
};

const ITEMS_PER_PAGE = 10;
export default function JobDetailPage() {
  const { jobId } = useParams();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
const [currentPage, setCurrentPage] = useState(1);

// 🔍 Filter applicants
const filteredApplicants = useMemo(() => {
  if (!searchQuery.trim()) return mockApplicants;

  return mockApplicants.filter(applicant =>
    applicant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    applicant.experience.toLowerCase().includes(searchQuery.toLowerCase()) ||
    applicant.education.toLowerCase().includes(searchQuery.toLowerCase()) ||
    applicant.language.toLowerCase().includes(searchQuery.toLowerCase())
  );
}, [searchQuery]);

// 📄 Pagination
const totalPages = Math.ceil(filteredApplicants.length / ITEMS_PER_PAGE);

const paginatedApplicants = filteredApplicants.slice(
  (currentPage - 1) * ITEMS_PER_PAGE,
  currentPage * ITEMS_PER_PAGE
);

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages) setCurrentPage(page);
};

const goToPrevious = () => {
  if (currentPage > 1) setCurrentPage(prev => prev - 1);
};

const goToNext = () => {
  if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
};


  const [activeTab, setActiveTab] = useState<
    "description" | "candidates"
  >("description");

  // Find job data
  const job = mockJobs.find(j => j.jobNumber === jobId);

  if (!job) {
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
      <div className="max-w-[1400px] pl-6 pr-6 py-6">

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
        <h1 className="text-3xl font-bold mb-2">{job.jobName}</h1>
        <p className="text-sm text-black/60 mb-6">
          {job.jobtype} • {job.country} • Job ID: {job.jobNumber}
        </p>

        {/* TAB CONTENT */}
        {activeTab === "description" && (
          <div className="flex flex-col gap-6">


            <section>
              <h2 className="font-semibold text-xl mb-2">Job Description</h2>
              <p>{job.description}</p>
            </section>

            <section>
              <h3 className="font-semibold mb-2">Key Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-1">
                {job.keyResponsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

             <section>
              <h3 className="font-semibold mb-2">
                Why You&apos;ll Love Working Here
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                {job.whyYouWillLoveWorkingHere.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

           <section>
              <h3 className="font-semibold mb-3">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {job.skills.map((item, i) => (
                  <div
                    key={i}
                    className="skew-x-[-12deg] border border-black/20 px-4 py-2 rounded-md hover:bg-black/5 transition"
                  >
                    <span className="skew-x-[12deg] text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="font-semibold mb-3">Benefits</h3>
              <div className="flex flex-wrap gap-3">
                {job.benefits.map((item, i) => (
                  <div
                    key={i}
                    className="skew-x-[-12deg] border border-black/20 px-4 py-2 rounded-md hover:bg-black/5 transition"
                  >
                    <span className="skew-x-[12deg] text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
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
                placeholder="Search opportunities..."
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
              <button className="relative w-[60px] h-[40px] skew-x-[-12deg] bg-transparent border border-black flex items-center justify-center overflow-hidden rounded-lg hover:bg-black/10 transition-all">
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

              {/* Second Filter Button */}
              <button className="relative w-[60px] h-[40px] skew-x-[-12deg] bg-transparent border border-black flex items-center justify-center overflow-hidden rounded-lg hover:bg-black/10 transition-all">
                <span className="skew-x-[12deg] font-bold text-sm text-black flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 16.5C14.3852 16.5002 14.7556 16.6486 15.0344 16.9144C15.3132 17.1802 15.479 17.5431 15.4975 17.9279C15.516 18.3127 15.3858 18.6898 15.1338 18.9812C14.8818 19.2726 14.5274 19.4558 14.144 19.493L14 19.5H10C9.61478 19.4998 9.24441 19.3514 8.96561 19.0856C8.68682 18.8198 8.52099 18.4569 8.50248 18.0721C8.48396 17.6873 8.61419 17.3102 8.86618 17.0188C9.11816 16.7274 9.47258 16.5442 9.856 16.507L10 16.5H14ZM17 10.5C17.3978 10.5 17.7794 10.658 18.0607 10.9393C18.342 11.2206 18.5 11.6022 18.5 12C18.5 12.3978 18.342 12.7794 18.0607 13.0607C17.7794 13.342 17.3978 13.5 17 13.5H7C6.60218 13.5 6.22064 13.342 5.93934 13.0607C5.65804 12.7794 5.5 12.3978 5.5 12C5.5 11.6022 5.65804 11.2206 5.93934 10.9393C6.22064 10.658 6.60218 10.5 7 10.5H17ZM20 4.5C20.3978 4.5 20.7794 4.65804 21.0607 4.93934C21.342 5.22064 21.5 5.60218 21.5 6C21.5 6.39782 21.342 6.77936 21.0607 7.06066C20.7794 7.34196 20.3978 7.5 20 7.5H4C3.60218 7.5 3.22064 7.34196 2.93934 7.06066C2.65804 6.77936 2.5 6.39782 2.5 6C2.5 5.60218 2.65804 5.22064 2.93934 4.93934C3.22064 4.65804 3.60218 4.5 4 4.5H20Z" fill="#1E1E1E"/>
                  </svg>
                </span>
              </button>
            </div>
            </div>
            
          {/* Cards Grid: 3 rows × 3 columns */}
          <div className="grid grid-cols-5 grid-rows-2 gap-2">
          {paginatedApplicants.map((applicant, index) => (
            <ApplicantCard
              key={index}
              applicant={applicant}
              onClick={() => router.push(`/Company/opportunity/${jobId}/${applicant.applicantId}`)}
            />
          ))}
        </div>

        </div>
      </div>
            {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-3 mt-10">
                      {/* Previous */}
                      <button
                        onClick={goToPrevious}
                        disabled={currentPage === 1}
                        className="px-3 py-1 text-sm font-medium rounded-md 
                                  disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                      <img 
                      src="/ic-eva_arrow-ios-back-fill.svg" 
                      alt="Applied Students"
                    />
                      </button>

                    {/* Page numbers */}
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => goToPage(page)}
                          className={`
                            relative
                            w-11 h-9
                            skew-x-[-12deg]
                            rounded-md
                            overflow-hidden
                            text-sm font-semibold
                            transition-all duration-200
                            ${
                              currentPage === page
                                ? "border border-black text-black"
                                : "border border-transparent text-black/60 hover:bg-black/10 hover:text-black"
                            }
                          `}
                        >
                          {/* Un-skew content */}
                          <span className="flex h-full w-full items-center justify-center skew-x-[12deg]">
                            {page}
                          </span>
                        </button>
                      ))}



                      {/* Next */}
                      <button
                        onClick={goToNext}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 text-sm font-medium rounded-md 
                                  disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        <img 
                      src="/ic-eva_arrow-ios-forward-fill.svg" 
                      alt="Applied Students"
                    />
                      </button>
                    </div>
                  )}
          </div>
          
        )}

      </div>
    </DashboardLayout>
  );
}

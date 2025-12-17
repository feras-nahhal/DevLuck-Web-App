"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import DashboardLayout from "@/src/components/Company/DashboardLayout";
import { mockApplicants } from "@/src/mocks/mockApplicants";
import { educationData } from "@/src/mocks/mockEducation";
import { experienceData } from "@/src/mocks/mockExperience";
import { languageData  } from "@/src/mocks/mockLanguages";
import { portfolioData  } from "@/src/mocks/mockPortfolio";

export default function ApplicantPage() {
  const router = useRouter();
  const params = useParams(); // { applicantId: "456" }
  const {applicantId } = params;
  const [showAll, setShowAll] = useState(false);
  const [showAllExp, setShowAllExp] = useState(false);
  const [showAllLang, setShowAllLang] = useState(false);
  const [showAllPortfolio, setShowAllPortfolio] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Find applicant by ID
  const applicant = mockApplicants.find(a => a.applicantId === applicantId);

  if (!applicant) {
    return (
      <DashboardLayout>
        <div className="p-6 text-lg font-semibold text-red-600">
          Applicant not found
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div
        className="relative max-w-[1400px] pl-6 p-4 min-h-[800px]"
        style={{
          backgroundImage: "url('/pages/applicantInfoBackground.svg')",
          backgroundPosition: "65% top",
          backgroundRepeat: "no-repeat",
        }}
      >
        
        <div
        className="
          flex flex-row items-start
          justify-start
        "
      >
        <div className="w-[557px] h-auto flex flex-col gap-4"> {/* <-- gap between sections */}
  
        <div className="flex flex-col gap-[10px] w-[557px]">
  
            {/* Name + Button Row */}
            <div className="flex items-center justify-between w-full">
              <h1 className="font-barlow font-extrabold text-[40px] leading-[64px] text-[#1E1E1E]">
                {applicant ? applicant.name : applicantId}
              </h1>

             <div
                className="relative w-[120px] h-[35px] skew-x-[-12deg] bg-[#FFEB9C] flex items-center justify-center overflow-hidden rounded-md hover:bg-[#FFE066] transition duration-200 hover:scale-105"
              >
                <span className="skew-x-[12deg] font-bold text-[14px] text-[#1E1E1E]">
                  {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
                </span>
              </div>

            </div>

            {/* Description */}
            <p className="font-publicSans text-[16px] leading-[24px] text-[#1E1E1E]">
              {applicant
                ? applicant.description.length > 250
                  ? applicant.description.slice(0, 250) + "..."
                  : applicant.description
                : "Applicant description not found."}
            </p>

          </div>


          {/* Frame 313 example */}
          <div className="flex flex-row justify-between items-center gap-[10px] w-[557px] h-[175px]"> {/* <-- updated height */}

            {/* Profile Ranking Card */}
            <div className="relative flex flex-col items-center justify-center w-[250px] h-[260px]">

              <div className="relative w-[250px] h-[175px]">
                {/* Background number or placeholder */}
                <div className="font-barlow font-extrabold text-[200px] leading-[175px] text-[#C2C2C2] flex  w-[225px] h-[175px]">
                  {applicant ? applicant.profileRanking : "Applicant Ranking not found."}
                </div>

                {/* Profile Ranking label */}
                <h4 className="absolute left-[70px] top-[85px] font-publicSans font-bold text-[24px] leading-[36px] text-[#1E1E1E] flex ">
                  Profile Ranking 
                </h4>
              </div>
              <div className=" justify-between items-center w-[250px] h-[81px] p-[16px] flex flex-col gap-[8px] bg-white/60 backdrop-blur-[17px] rounded-[21px]">
              {/* Profile Progress Label */}
              <div className="flex flex-row justify-between items-center w-[154px] h-[19px]">
                <span className="font-bold text-[12px] leading-[18px] uppercase text-[#1E1E1E]">
                  Profile Progress
                </span>
                
                <span className="font-bold text-[12px] leading-[18px] uppercase text-[#1E1E1E]">
                  {applicant.profileComplete}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="relative w-[154px] h-[16px] bg-[#1E1E1E] transform -skew-x-[20deg]  rounded-[4px]">
                {/* Progress Fill */}
                <div
                  className="absolute left-0.5 top-1/2 h-[14px] -translate-y-1/2 rounded bg-[#FFEB9C]"
                  style={{ width: `${applicant.profileComplete}%` }}
                />

              </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[62px] h-[152px] mx-auto">
              {/* First pair */}
              <div className="flex flex-col gap-1">
                <span className="font-publicSans text-[14px] leading-[22px] text-[#1C252E]">Label 1</span>
                <span className="font-publicSans text-[12px] leading-[18px] text-[#1C252E]">Caption</span>
              </div>

              {/* Second pair */}
              <div className="flex flex-col gap-1">
                <span className="font-publicSans text-[14px] leading-[22px] text-[#1C252E]">Label 2</span>
                <span className="font-publicSans text-[12px] leading-[18px] text-[#1C252E]">Caption</span>
              </div>
              {/* Third pair */}
              <div className="flex flex-col gap-1">
                <span className="font-publicSans text-[14px] leading-[22px] text-[#1C252E]">Label 3</span>
                <span className="font-publicSans text-[12px] leading-[18px] text-[#1C252E]">Caption</span>
              </div>
            </div>
          </div>
        </div>
        {/* Skills Parallelogram Card */}
        <div className="absolute top-50 left-90 w-[439px] h-auto relative">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-barlow font-bold text-[24px] text-[#1E1E1E]">
            Skills
          </h3>

          {/* More Button */}
          <div
            className="relative w-[80px] h-[32px] skew-x-[-12deg] border border-black flex items-center justify-center rounded-md cursor-pointer duration-200 hover:scale-105  transition"
          >
            <span className="skew-x-[12deg] font-semibold text-[14px] text-[#1E1E1E]">
              More
            </span>
          </div>
        </div>

        {/* Parallelogram background */}
        <div
          className={`w-[439px] bg-white shadow-[0_4px_12px_rgba(145,158,171,0.3),0_0_4px_rgba(145,158,171,0.2)]
            transform -skew-x-12 rounded-[24px] flex flex-col items-start justify-start p-6
            overflow-hidden transition-all duration-300 ${showAllSkills ? "max-h-[2000px]" : "max-h-[250px]"}
          `}
        >
          {/* Content (counter-skew) */}
          <div className="transform skew-x-12 px-8 w-full">
            <div className="flex flex-wrap gap-3">
              {applicant?.skills?.slice(0, showAllSkills ? undefined : 8).map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-[14px] font-publicSans text-[#1E1E1E] transform -skew-x-12 rounded-[8px] border border-black/80 whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Show More / Show Less */}
            {applicant?.skills && applicant.skills.length > 8 && (
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setShowAllSkills(!showAllSkills)}
                  className="flex items-center gap-2 text-[#1E1E1E] font-semibold"
                >
                  {showAllSkills ? "Show Less" : "Show More"}
                  <svg
                    className={`w-4 h-4 transform transition-transform ${showAllSkills ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>

      {/* Skills Parallelogram Card */}
      <div className="flex flex-col items-start justify-start mt-65 gap-10">
        {/* Row 1 */}
        <div className="flex flex-row items-start justify-start gap-10">
          {/* Experience Card */}
          <div className="w-[655px] h-auto relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-barlow font-bold text-[24px] text-[#1E1E1E]">
              Experience
              </h3>

              {/* More Button */}
              <div
                className="relative w-[80px] h-[32px] skew-x-[-12deg]  border border-black flex items-center justify-center rounded-md cursor-pointer duration-200 hover:scale-105  transition"
              >
                <span className="skew-x-[12deg] font-semibold text-[14px] text-[#1E1E1E]">
                  More
                </span>
              </div>
            </div>
            <div className={`w-[655px] bg-white shadow-[0_4px_12px_rgba(145,158,171,0.3),0_0_4px_rgba(145,158,171,0.2)] transform -skew-x-12 rounded-[24px] flex flex-col items-start justify-start p-6 overflow-hidden transition-all duration-300 ${showAllExp ? "max-h-[2000px]" : "max-h-[250px]"}`}>
              <div className="transform skew-x-12 px-8 w-full flex flex-col gap-3">
                {experienceData
                  .filter((exp) => exp.applicantId === applicant?.applicantId)
                  .slice(0, showAllExp ? undefined : 2)
                  .map((exp) => (
                    <div key={exp.id} className="px-4 py-2 w-full">
                      <div className="flex items-center justify-between">
                        {/* Left side: SVG + Role */}
                        <div className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7.89111" width="11.16" height="11.16" transform="rotate(45 7.89111 0)" fill="#FFEB9C"/>
                          </svg>
                          <h4 className="font-publicSans font-semibold text-[14px] text-[#1E1E1E]">
                            {exp.role}
                          </h4>
                        </div>

                        {/* Right side: button with custom SVG */}
                        <button className="transition-transform">
                          <svg
                            width="30"
                            height="24"
                            viewBox="0 0 30 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5.53809 0.666992H24.4619C27.1522 0.667195 29.3328 2.84777 29.333 5.53809V9C29.333 16.9161 22.9161 23.333 15 23.333C7.08392 23.333 0.666993 16.9161 0.666992 9V5.53809C0.667195 2.84777 2.84777 0.667195 5.53809 0.666992Z" fill="#FFEB9C"/>
                            <path d="M5.53809 0.666992H24.4619C27.1522 0.667195 29.3328 2.84777 29.333 5.53809V9C29.333 16.9161 22.9161 23.333 15 23.333C7.08392 23.333 0.666993 16.9161 0.666992 9V5.53809C0.667195 2.84777 2.84777 0.667195 5.53809 0.666992Z" stroke="#E6D48C" strokeWidth="1.33333"/>
                            <path d="M14.6001 16.1007L19.5308 11.1701C18.7012 10.8237 17.9478 10.3177 17.3134 9.68072C16.6762 9.04619 16.1699 8.29257 15.8234 7.46272L10.8928 12.3934C10.5081 12.7781 10.3154 12.9707 10.1501 13.1827C9.95483 13.4329 9.7874 13.7036 9.65076 13.9901C9.53543 14.2327 9.44943 14.4914 9.27743 15.0074L8.36943 17.7294C8.32764 17.854 8.32144 17.9878 8.35152 18.1158C8.38161 18.2438 8.44679 18.3608 8.53974 18.4537C8.63269 18.5467 8.74972 18.6119 8.87769 18.642C9.00565 18.672 9.13946 18.6658 9.26409 18.6241L11.9861 17.7161C12.5028 17.5441 12.7608 17.4581 13.0034 17.3427C13.2901 17.2061 13.5608 17.0387 13.8108 16.8434C14.0228 16.6781 14.2154 16.4854 14.6001 16.1007ZM20.8988 9.80205C21.3904 9.31043 21.6666 8.64364 21.6666 7.94838C21.6666 7.25312 21.3904 6.58634 20.8988 6.09472C20.4071 5.6031 19.7404 5.3269 19.0451 5.3269C18.3498 5.3269 17.6831 5.6031 17.1914 6.09472L16.6001 6.68605L16.6254 6.76005C16.9168 7.59386 17.3937 8.35065 18.0201 8.97338C18.6614 9.61852 19.4447 10.1048 20.3074 10.3934L20.8988 9.80205Z" fill="#1E1E1E"/>
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-center gap-2 text-[12px] text-[#555]">
                        <span className="font-publicSans">{exp.companyName}</span>

                        {/* small rotated square */}
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transform rotate-45"
                        >
                          <rect x="3.53564" width="5" height="5" fill="black" />
                        </svg>

                        <span className="font-publicSans">{exp.date}</span>
                      </div>

                      <p className="font-publicSans text-[12px] text-[#1E1E1E] mt-1 break-words">
                        {exp.description.split(" ").slice(0, 10).join(" ")}
                        {exp.description.split(" ").length > 10 ? "..." : ""}
                      </p>
                    </div>
                  ))}

                {experienceData.filter((exp) => exp.applicantId === applicant?.applicantId).length > 2 && (
                  <div className="flex justify-end">
                    <button
                      onClick={() => setShowAllExp(!showAllExp)}
                      className="flex items-center gap-2 text-[#1E1E1E] font-semibold "
                    >
                      {showAllExp ? "Show Less" : "Show More"}
                      <svg
                        className={`w-4 h-4 transform transition-transform ${showAllExp ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}

              </div>
            </div>
          </div>


          {/* Card 2 */}
          <div className="w-[655px] h-auto relative">
            <div className="flex items-center justify-between mb-6">
               <h3 className="font-barlow font-bold text-[24px] text-[#1E1E1E] ">
                  Education
                </h3>

              {/* More Button */}
              <div
                className="relative w-[80px] h-[32px] skew-x-[-12deg]  border border-black flex items-center justify-center rounded-md cursor-pointer duration-200 hover:scale-105  transition"
              >
                <span className="skew-x-[12deg] font-semibold text-[14px] text-[#1E1E1E]">
                  More
                </span>
              </div>
            </div>
            <div className={`w-[655px] bg-white shadow-[0_4px_12px_rgba(145,158,171,0.3),0_0_4px_rgba(145,158,171,0.2)] transform -skew-x-12 rounded-[24px] flex flex-col items-start justify-start p-6 overflow-hidden transition-all duration-300 ${showAll ? "max-h-[2000px]" : "max-h-[250px]"}`}>
              <div className="transform skew-x-12 px-8 w-full flex flex-col gap-3">
                {educationData
                  .filter((edu) => edu.applicantId === applicant?.applicantId)
                  .slice(0, showAll ? undefined : 2)
                  .map((edu) => (
                    <div
                      key={edu.id}
                      className="px-4 py-2  w-full"
                    >
                      <div className="flex items-center justify-between">
                        {/* Left side: SVG + Major */}
                        <div className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7.89111" width="11.16" height="11.16" transform="rotate(45 7.89111 0)" fill="#FFEB9C"/>
                          </svg>
                          <h4 className="font-publicSans font-semibold text-[14px] text-[#1E1E1E]">
                            {edu.major}
                          </h4>
                        </div>

                        {/* Right side: Button with new SVG */}
                        <button className="transition-transform">
                          <svg
                            width="30"
                            height="24"
                            viewBox="0 0 30 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.53809 0.666992H24.4619C27.1522 0.667195 29.3328 2.84777 29.333 5.53809V9C29.333 16.9161 22.9161 23.333 15 23.333C7.08392 23.333 0.666993 16.9161 0.666992 9V5.53809C0.667195 2.84777 2.84777 0.667195 5.53809 0.666992Z"
                              fill="#FFEB9C"
                            />
                            <path
                              d="M5.53809 0.666992H24.4619C27.1522 0.667195 29.3328 2.84777 29.333 5.53809V9C29.333 16.9161 22.9161 23.333 15 23.333C7.08392 23.333 0.666993 16.9161 0.666992 9V5.53809C0.667195 2.84777 2.84777 0.667195 5.53809 0.666992Z"
                              stroke="#E6D48C"
                              strokeWidth="1.33333"
                            />
                            <path
                              d="M14.6001 16.1007L19.5308 11.1701C18.7012 10.8237 17.9478 10.3177 17.3134 9.68072C16.6762 9.04619 16.1699 8.29257 15.8234 7.46272L10.8928 12.3934C10.5081 12.7781 10.3154 12.9707 10.1501 13.1827C9.95483 13.4329 9.7874 13.7036 9.65076 13.9901C9.53543 14.2327 9.44943 14.4914 9.27743 15.0074L8.36943 17.7294C8.32764 17.854 8.32144 17.9878 8.35152 18.1158C8.38161 18.2438 8.44679 18.3608 8.53974 18.4537C8.63269 18.5467 8.74972 18.6119 8.87769 18.642C9.00565 18.672 9.13946 18.6658 9.26409 18.6241L11.9861 17.7161C12.5028 17.5441 12.7608 17.4581 13.0034 17.3427C13.2901 17.2061 13.5608 17.0387 13.8108 16.8434C14.0228 16.6781 14.2154 16.4854 14.6001 16.1007ZM20.8988 9.80205C21.3904 9.31043 21.6666 8.64364 21.6666 7.94838C21.6666 7.25312 21.3904 6.58634 20.8988 6.09472C20.4071 5.6031 19.7404 5.3269 19.0451 5.3269C18.3498 5.3269 17.6831 5.6031 17.1914 6.09472L16.6001 6.68605L16.6254 6.76005C16.9168 7.59386 17.3937 8.35065 18.0201 8.97338C18.6614 9.61852 19.4447 10.1048 20.3074 10.3934L20.8988 9.80205Z"
                              fill="#1E1E1E"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center gap-2 text-[12px] text-[#555]">
                        <span className="font-publicSans">{edu.name}</span>
                        
                        {/* small rotated square */}
                        <svg
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transform rotate-45"
                        >
                          <rect x="3.53564" width="5" height="5" fill="black" />
                        </svg>

                        <span className="font-publicSans">{edu.date}</span>
                      </div>
                      <p className="font-publicSans text-[12px] text-[#1E1E1E] mt-1">
                        {edu.description.split(" ").slice(0, 10).join(" ")}
                        {edu.description.split(" ").length > 10 ? "..." : ""}
                      </p>
                    </div>
                ))}

                {educationData.filter((edu) => edu.applicantId === applicant?.applicantId).length > 2 && (
                  <div className="flex justify-end"> 
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="flex items-center gap-2 text-[#1E1E1E] font-semibold"
                    >
                      {showAll ? "Show Less" : "Show More"}
                      <svg
                        className={`w-4 h-4 transform transition-transform ${showAll ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-row items-start justify-start gap-10">
          {/* Language Card */}
          <div className="w-[655px] h-auto relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-barlow font-bold text-[24px] text-[#1E1E1E]">
              Languages
              </h3>

              {/* More Button */}
              <div
                className="relative w-[80px] h-[32px] skew-x-[-12deg]  border border-black flex items-center justify-center rounded-md cursor-pointer duration-200 hover:scale-105  transition"
              >
                <span className="skew-x-[12deg] font-semibold text-[14px] text-[#1E1E1E]">
                  More
                </span>
              </div>
            </div>
            <div className={`w-[655px] bg-white shadow-[0_4px_12px_rgba(145,158,171,0.3),0_0_4px_rgba(145,158,171,0.2)] transform -skew-x-12 rounded-[24px] flex flex-col items-start justify-start p-6 overflow-hidden transition-all duration-300 ${showAllLang ? "max-h-[2000px]" : "max-h-[250px]"}`}>
              <div className="transform skew-x-12 px-8 w-full flex flex-col gap-3">
                {languageData
                  .filter((lang) => lang.applicantId === applicant?.applicantId)
                  .slice(0, showAllLang ? undefined : 2)
                  .map((lang) => (
                    <div key={lang.id} className="px-4 py-2 w-full">
                      <div className="flex items-center justify-between">
                        {/* Left side: SVG + Language name */}
                        <div className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7.89111" width="11.16" height="11.16" transform="rotate(45 7.89111 0)" fill="#FFEB9C"/>
                          </svg>
                          <h4 className="font-publicSans font-semibold text-[14px] text-[#1E1E1E]">
                            {lang.name}
                          </h4>
                        </div>

                        {/* Right side: level button */}
                        <button className="transition-transform">
                          <svg
                            width="30"
                            height="24"
                            viewBox="0 0 30 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5.53809 0.666992H24.4619C27.1522 0.667195 29.3328 2.84777 29.333 5.53809V9C29.333 16.9161 22.9161 23.333 15 23.333C7.08392 23.333 0.666993 16.9161 0.666992 9V5.53809C0.667195 2.84777 2.84777 0.667195 5.53809 0.666992Z" fill="#FFEB9C"/>
                            <path d="M5.53809 0.666992H24.4619C27.1522 0.667195 29.3328 2.84777 29.333 5.53809V9C29.333 16.9161 22.9161 23.333 15 23.333C7.08392 23.333 0.666993 16.9161 0.666992 9V5.53809C0.667195 2.84777 2.84777 0.667195 5.53809 0.666992Z" stroke="#E6D48C" strokeWidth="1.33333"/>
                            <path d="M14.6001 16.1007L19.5308 11.1701C18.7012 10.8237 17.9478 10.3177 17.3134 9.68072C16.6762 9.04619 16.1699 8.29257 15.8234 7.46272L10.8928 12.3934C10.5081 12.7781 10.3154 12.9707 10.1501 13.1827C9.95483 13.4329 9.7874 13.7036 9.65076 13.9901C9.53543 14.2327 9.44943 14.4914 9.27743 15.0074L8.36943 17.7294C8.32764 17.854 8.32144 17.9878 8.35152 18.1158C8.38161 18.2438 8.44679 18.3608 8.53974 18.4537C8.63269 18.5467 8.74972 18.6119 8.87769 18.642C9.00565 18.672 9.13946 18.6658 9.26409 18.6241L11.9861 17.7161C12.5028 17.5441 12.7608 17.4581 13.0034 17.3427C13.2901 17.2061 13.5608 17.0387 13.8108 16.8434C14.0228 16.6781 14.2154 16.4854 14.6001 16.1007ZM20.8988 9.80205C21.3904 9.31043 21.6666 8.64364 21.6666 7.94838C21.6666 7.25312 21.3904 6.58634 20.8988 6.09472C20.4071 5.6031 19.7404 5.3269 19.0451 5.3269C18.3498 5.3269 17.6831 5.6031 17.1914 6.09472L16.6001 6.68605L16.6254 6.76005C16.9168 7.59386 17.3937 8.35065 18.0201 8.97338C18.6614 9.61852 19.4447 10.1048 20.3074 10.3934L20.8988 9.80205Z" fill="#1E1E1E"/>
                          </svg>
                        </button>
                      </div>

                      {/* Level text (optional) */}
                      <p className="font-publicSans text-[12px] text-[#555] mt-1">
                        {lang.level}
                      </p>
                    </div>
                  ))}

                {languageData.filter((lang) => lang.applicantId === applicant?.applicantId).length > 2 && (
                  <div className="flex justify-end">
                    <button
                      onClick={() => setShowAllLang(!showAllLang)}
                      className="flex items-center gap-2 text-[#1E1E1E] font-semibold "
                    >
                      {showAllLang ? "Show Less" : "Show More"}
                      <svg
                        className={`w-4 h-4 transform transition-transform ${showAllLang ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}

              </div>
            </div>
          </div>


          {/* Portfolio Card */}
          <div className="w-[655px] h-auto relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-barlow font-bold text-[24px] text-[#1E1E1E]">
              Portfolio
              </h3>

              {/* More Button */}
              <div
                className="relative w-[80px] h-[32px] skew-x-[-12deg]  border border-black flex items-center justify-center rounded-md cursor-pointer duration-200 hover:scale-105 transition"
              >
                <span className="skew-x-[12deg] font-semibold text-[14px] text-[#1E1E1E]">
                  More
                </span>
              </div>
            </div>
            <div className={`w-[655px] bg-white shadow-[0_4px_12px_rgba(145,158,171,0.3),0_0_4px_rgba(145,158,171,0.2)] transform -skew-x-12 rounded-[24px] flex flex-col items-start justify-start p-6 overflow-hidden transition-all duration-300 ${showAllPortfolio ? "max-h-[2000px]" : "max-h-[250px]"}`}>
              <div className="transform skew-x-12 px-8 w-full flex flex-col gap-3">
                {portfolioData
                  .filter((port) => port.applicantId === applicant?.applicantId)
                  .slice(0, showAllPortfolio ? undefined : 2)
                  .map((port) => (
                    <div key={port.id} className="px-4 py-2 w-full">
                      <div className="flex items-center justify-between">
                        {/* Left side: SVG + Portfolio Name */}
                        <div className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="7.89111" width="11.16" height="11.16" transform="rotate(45 7.89111 0)" fill="#FFEB9C"/>
                          </svg>
                          <h4 className="font-publicSans font-semibold text-[14px] text-[#1E1E1E]">
                            {port.name}
                          </h4>
                        </div>

                        {/* Right side: clickable link SVG */}
                        <button className="transition-transform">
                          <svg
                            width="30"
                            height="24"
                            viewBox="0 0 30 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5.53809 0.666992H24.4619C27.1522 0.667195 29.3328 2.84777 29.333 5.53809V9C29.333 16.9161 22.9161 23.333 15 23.333C7.08392 23.333 0.666993 16.9161 0.666992 9V5.53809C0.667195 2.84777 2.84777 0.667195 5.53809 0.666992Z" fill="#FFEB9C"/>
                            <path d="M5.53809 0.666992H24.4619C27.1522 0.667195 29.3328 2.84777 29.333 5.53809V9C29.333 16.9161 22.9161 23.333 15 23.333C7.08392 23.333 0.666993 16.9161 0.666992 9V5.53809C0.667195 2.84777 2.84777 0.667195 5.53809 0.666992Z" stroke="#E6D48C" strokeWidth="1.33333"/>
                            <path d="M14.6001 16.1007L19.5308 11.1701C18.7012 10.8237 17.9478 10.3177 17.3134 9.68072C16.6762 9.04619 16.1699 8.29257 15.8234 7.46272L10.8928 12.3934C10.5081 12.7781 10.3154 12.9707 10.1501 13.1827C9.95483 13.4329 9.7874 13.7036 9.65076 13.9901C9.53543 14.2327 9.44943 14.4914 9.27743 15.0074L8.36943 17.7294C8.32764 17.854 8.32144 17.9878 8.35152 18.1158C8.38161 18.2438 8.44679 18.3608 8.53974 18.4537C8.63269 18.5467 8.74972 18.6119 8.87769 18.642C9.00565 18.672 9.13946 18.6658 9.26409 18.6241L11.9861 17.7161C12.5028 17.5441 12.7608 17.4581 13.0034 17.3427C13.2901 17.2061 13.5608 17.0387 13.8108 16.8434C14.0228 16.6781 14.2154 16.4854 14.6001 16.1007ZM20.8988 9.80205C21.3904 9.31043 21.6666 8.64364 21.6666 7.94838C21.6666 7.25312 21.3904 6.58634 20.8988 6.09472C20.4071 5.6031 19.7404 5.3269 19.0451 5.3269C18.3498 5.3269 17.6831 5.6031 17.1914 6.09472L16.6001 6.68605L16.6254 6.76005C16.9168 7.59386 17.3937 8.35065 18.0201 8.97338C18.6614 9.61852 19.4447 10.1048 20.3074 10.3934L20.8988 9.80205Z" fill="#1E1E1E"/>
                          </svg>
                        </button>
                      </div>
                      {/* portfolio link */}
                      <div key={port.id} className=" w-full">
                        <div className="flex items-center gap-2">
                          {/* Conditional SVG icon */}
                          {port.name.toLowerCase() === "github" ? (
                            <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="40" height="40" rx="8" fill="#FFEB9C"/>
                              <g clipPath="url(#clip0)">
                                <path d="M20 8.5C13.37 8.5 8 13.78 8 20.292C8 25.503 11.438 29.922 16.205 31.48C16.805 31.591 17.025 31.226 17.025 30.913C17.025 30.633 17.015 29.891 17.01 28.908C13.672 29.619 12.968 27.326 12.968 27.326C12.422 25.965 11.633 25.601 11.633 25.601C10.546 24.87 11.717 24.885 11.717 24.885C12.922 24.967 13.555 26.1 13.555 26.1C14.625 27.903 16.364 27.382 17.05 27.081C17.158 26.318 17.467 25.799 17.81 25.504C15.145 25.209 12.344 24.195 12.344 19.677C12.344 18.39 12.809 17.338 13.579 16.513C13.444 16.215 13.039 15.016 13.684 13.392C13.684 13.392 14.689 13.076 16.984 14.601C17.944 14.339 18.964 14.209 19.984 14.203C21.004 14.209 22.024 14.339 22.984 14.601C25.264 13.076 26.269 13.392 26.269 13.392C26.914 15.016 26.509 16.215 26.389 16.513C27.154 17.338 27.619 18.39 27.619 19.677C27.619 24.207 24.814 25.204 22.144 25.494C22.564 25.848 22.954 26.571 22.954 27.676C22.954 29.254 22.939 30.522 22.939 30.905C22.939 31.214 23.149 31.583 23.764 31.465C28.565 29.917 32 25.495 32 20.292C32 13.78 26.627 8.5 20 8.5Z" fill="black"/>
                              </g>
                              <defs>
                                <clipPath id="clip0">
                                  <rect width="24" height="24" fill="white" transform="translate(8 8)"/>
                                </clipPath>
                              </defs>
                            </svg>
                          ) : (
                            <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="40" height="40" rx="8" fill="#FFEB9C"/>
                              <path d="M12.5 15.5C12.8978 15.5 13.2794 15.658 13.5607 15.9393C13.842 16.2206 14 16.6022 14 17V27.5C14 27.8978 13.842 28.2794 13.5607 28.5607C13.2794 28.842 12.8978 29 12.5 29H9.5C8.673 29 8 28.328 8 27.5V17C8 16.172 8.673 15.5 9.5 15.5H12.5ZM21.5 11C21.8978 11 22.2794 11.158 22.5607 11.4393C22.842 11.7206 23 12.1022 23 12.5V27.5C23 27.8978 22.842 28.2794 22.5607 28.5607C22.2794 28.842 21.8978 29 21.5 29H18.5C17.673 29 17 28.328 17 27.5V12.5C17 11.672 17.673 11 18.5 11H21.5ZM30.5 18.5C30.8978 18.5 31.2794 18.658 31.5607 18.9393C31.842 19.2206 32 19.6022 32 20V27.5C32 27.8978 31.842 28.2794 31.5607 28.5607C31.2794 28.842 30.8978 29 30.5 29H27.5C27.1022 29 26.7206 28.842 26.4393 28.5607C26.158 28.2794 26 27.8978 26 27.5V20C26 19.6022 26.158 19.2206 26.4393 18.9393C26.7206 18.658 27.1022 18.5 27.5 18.5H30.5Z" fill="black"/>
                            </svg>
                          )}

                          {/* Link text */}
                          <p className="font-publicSans text-[12px] text-[#555] break-words">
                            {port.link.split(" ").slice(0, 10).join(" ")}
                            {port.link.split(" ").length > 10 ? "..." : ""}
                          </p>
                        </div>
                      </div>

                    </div>
                  ))}

                {/* Show More / Show Less button */}
                {portfolioData.filter((port) => port.applicantId === applicant?.applicantId).length > 2 && (
                  <div className="flex justify-end">
                    <button
                      onClick={() => setShowAllPortfolio(!showAllPortfolio)}
                      className="flex items-center gap-2 text-[#1E1E1E] font-semibold "
                    >
                      {showAllPortfolio ? "Show Less" : "Show More"}
                      <svg
                        className={`w-4 h-4 transform transition-transform ${showAllPortfolio ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>

       
    </div>
    </DashboardLayout>
  );
}

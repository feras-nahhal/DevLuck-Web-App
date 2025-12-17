// src/app/Company/dashboard/page.tsx
"use client";

import DashboardLayout from "@/src/components/Company/DashboardLayout";

import { ArrowUpRight } from 'lucide-react';
import { mockJobs } from "@/src/mocks/companyJobs";
import { mockStudents } from "@/src/mocks/students";


/* ──────────────────────────────────────────────
   Card Component
────────────────────────────────────────────── */
const Card = ({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle?: string;
}) => {
  return (
    <div className="relative w-[329px] h-[185px]">
      {/* SVG Shape */}
      <svg
        viewBox="0 0 329 185"
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <g filter="url(#cardShadow)">
          {/* BORDER */}
          <path
            d="M244.278 8C252.822 8 258.583 18.8815 258.583 27.4258C258.583 45.0952 272.907 59.4197 290.576 59.4199C298.805 59.4199 308.932 64.9539 308.932 73.1832V123.865C308.932 139.881 295.948 152.865 279.932 152.865H49C32.9837 152.865 20 139.881 20 123.865V37C20 20.9837 32.9837 8 49 8H244.278Z"
            fill="none"
            stroke="#e6e5eb02"        // ← border color
            strokeWidth="2"         // ← border thickness
          />

          {/* FILL */}
          <path
            d="M244.278 8C252.822 8 258.583 18.8815 258.583 27.4258C258.583 45.0952 272.907 59.4197 290.576 59.4199C298.805 59.4199 308.932 64.9539 308.932 73.1832V123.865C308.932 139.881 295.948 152.865 279.932 152.865H49C32.9837 152.865 20 139.881 20 123.865V37C20 20.9837 32.9837 8 49 8H244.278Z"
            fill="white"
          />
        </g>

        <defs>
        <filter
          id="cardShadow"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
          filterUnits="objectBoundingBox"
        >
          {/* Small ambient shadow */}
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="1"
            floodColor="rgba(145,158,171,0.2)"
          />

          {/* Main lifted shadow */}
          <feDropShadow
            dx="0"
            dy="12"
            stdDeviation="12"
            floodColor="rgba(145,158,171,0.12)"
          />
        </filter>
      </defs>


      </svg>

      {/* Content */}
      <div
        className="
          absolute
          left-[6.23%]
          top-[14.48%]
          right-[9.69%]
          z-10
          flex
          flex-col
          gap-1
          pl-5
        "
      >
        <h3 className="text-[32px] font-bold leading-[48px] text-[#1E1E1E]">
          {value}
        </h3>

        <h6 className="text-[18px] font-semibold leading-[28px] text-[#1E1E1E]">
          {title}
        </h6>

        {subtitle && (
          <p className="text-[12px] leading-[18px] text-[#1E1E1E]">
            {subtitle}
          </p>
        )}
      </div>
     {/* Button */}
      <button
        className="
          absolute left-[81.86%] top-[0%]
          w-12 h-12 rounded-full
          bg-[#FFEB9C]
          flex items-center justify-center
          shadow-md z-20
          transition-all duration-200 ease-out
          hover:bg-[#FFE066]
          hover:scale-105
          group
        "
      >
        <ArrowUpRight
          size={24}
          className="
            transition-transform duration-200 ease-out
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
          "
        />
      </button>

    </div>
    );
  };

  const JobCard = ({
    jobName,
    jobNumber,
    jobtype,
    country,
    numberOfApplicants,

  }: {
    jobName: string;
    jobNumber: string;
    jobtype: string;
    country: string;
    numberOfApplicants: string;
  }) => {
    return (
      <div className="relative w-[437px] h-[217px]">
        
        {/* SVG Card Body */}
        <img 
          src="/cards/opportunityCard.svg" 
          alt="ContractCard Background"
        />

       <div className="absolute w-[340px] h-[84px] left-[50%] top-[35%] -translate-x-[50%] -translate-y-[50%] rounded-[24px_0_0_24px] flex flex-col gap-4">
          {/* Text */}
          {/* Front End Developer */}
          <div className="flex flex-col gap-2 w-[312px] h-[28px] flex-none">
            <h6 className="font-semibold text-[18px] leading-[28px] text-[#1E1E1E] flex-none">
              {jobName}
            </h6>
          </div>


          {/* Frame 271 - Job tags row */}
          <div className="flex flex-row flex-wrap items-center gap-1 w-[370px] h-[40px]">
            {/* Job-Tag 1 */}
            <div className="flex flex-row items-center gap-1.5 w-[115px] h-[40px]">
             <img 
              src="/cards/tag.svg" 
              alt="Tag Icon"
            />
                {/* Frame 97 - Label container */}
              <div className="flex flex-col justify-center items-start w-[77px] h-[40px] flex-none gap-1">
                {/* body2 text */}
                <span className="w-[77px] h-[22px] text-[14px] font-normal leading-[22px] text-[#1E1E1E] flex items-center">
                  {jobtype}
                </span>
                {/* caption text */}
                <span className="w-[49px] h-[18px] text-[12px] font-normal leading-[18px] text-[#00000090] flex items-center">
                  Job Type
                </span>
              </div>
            </div>

            {/* Job-Tag 1 */}
            <div className="flex flex-row items-center gap-1.5 w-[115px] h-[40px]">
             <img 
              src="/cards/tag.svg" 
              alt="Tag Icon"
            />
                {/* Frame 97 - Label container */}
              <div className="flex flex-col justify-center items-start w-[77px] h-[40px] flex-none gap-1">
                {/* body2 text */}
                <span className="w-[77px] h-[22px] text-[14px] font-normal leading-[22px] text-[#1E1E1E] flex items-center">
                  {country}
                </span>
                {/* caption text */}
                <span className="w-[49px] h-[18px] text-[12px] font-normal leading-[18px] text-[#00000090] flex items-center">
                  Country
                </span>
              </div>
            </div>
            {/* Job-Tag 1 */}
            <div className="flex flex-row items-center gap-1.5 w-[115px] h-[40px]">
             <img 
              src="/cards/tag.svg" 
              alt="Tag Icon"
            />
                {/* Frame 97 - Label container */}
              <div className="flex flex-col justify-center items-start w-[77px] h-[40px] flex-none gap-1">
                {/* body2 text */}
                <span className="w-[77px] h-[22px] text-[14px] font-normal leading-[22px] text-[#1E1E1E] flex items-center">
                  {numberOfApplicants}
                </span>
                {/* caption text */}
                <span className="w-[49px] h-[18px] text-[12px] font-normal leading-[18px] text-[#00000090] flex items-center">
                  Applied
                </span>
              </div>
            </div>
          </div>
        </div>
      {/* Label */}
      <div className="absolute left-[77%] top-[8%] flex flex-row items-center justify-center gap-1.5 w-20  bg-black/20 rounded-[6px]">
        {/* Label Text */}
        <span className=" h-[20px] text-[12px] font-bold leading-[20px] text-[#1E1E1E] flex-none order-1 text-center">
          JOB - {jobNumber}
        </span>
      </div>
      {/* Button */}
      <button className="absolute left-[8%] top-[68%] flex flex-row items-center justify-center gap-2 px-3 min-w-[64px] h-[36px] bg-[#FFEB9C] rounded-[8px] transition-all duration-200 hover:bg-[#FFE066] hover:scale-105">
        {/* Start Icon (hidden) */}
        <div className="w-5 h-5 hidden flex-none order-0"></div>

        {/* Button Label */}
        <span className="w-[83px] h-[24px] text-[14px] font-bold leading-[24px] text-[#1E1E1E] flex-none order-1 text-center">
          View Details
        </span>

        {/* End Icon (hidden) */}
        <div className="w-5 h-5 hidden flex-none order-2"></div>
      </button>
        </div>
      );
    };

    const AppliedStudentCard = ({
    studentName,
    studentNumber,
  }: {
    studentName: string;
    studentNumber: string;
  }) => {
    return (
      <div className="relative w-[220px] h-[350px]">
        {/* SVG Card Body */}
      <img 
          src="/cards/appliedStudent.svg" 
          alt="Applied Students"
        />
        {/* Placeholder for profile image */}
            <div
          className="absolute left-1/2"
          style={{
            width: "161.46px",
            height: "150.38px",
            borderRadius: "51.8066px",
            backgroundColor: "#E0E0E0", // placeholder color
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            color: "#888",
            bottom: "-75px",
            transform: "translate(-51%, -85%)", // center the div
            zIndex: 2,
          }}
        >
          No Image
          <div
            className="absolute left-1/2"
            style={{
              width: "60px",
              height: "60px",
              bottom: "-12px",
              transform: "translateX(-50%)",
          
            }}
          >
            <img
              src="/cards/appliedStudentIcon.svg"
              alt="Applied Students"
              className="w-full h-full object-contain"
            />
          </div>
          </div>
    
            {/* Student Name */}
          <div
            className="absolute flex items-center justify-center"
            style={{
              flexDirection: "row",
              gap: "4.75px",
              width: "144.87px",
              height: "48px",
              left: "50%",
              top: "77.14px",
              transform: "translateX(-50%)",
            }}
          >
            {/* Rotated rectangle */}
            <div
              style={{
                width: "7.16px",
                height: "7.16px",
                backgroundColor: "#FFEB9C",
                transform: "rotate(-45deg)",
              }}
            />

            {/* Student name text */}
            <div
              style={{
                width: "130px",
                height: "48px",
                fontFamily: "'Rock Salt', cursive", // same font
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "20px", // exact size
                lineHeight: "47px",     // exact line height
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                color: "#1C252E",
                textShadow: "0px 14.2468px 17.4128px rgba(213, 118, 246, 0.33)", // same shadow
              }}
            >
              {studentName}
            </div>
          </div>
        {/* Student Number */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "4.75px",
            width: "23px",
            height: "48px",
            left: `calc(50% - 23px/2 - 65.12px)`, // matches your design
            top: "22.91px", // adjust relative to card container
            fontFamily: "'Public Sans', sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "15.8298px",
            lineHeight: "47px",
            textAlign: "center",
            color: "#1C252E",
            flex: "none",
            order: 0,
            flexGrow: 0,
          }}
        >
          #{studentNumber}
        </div>
        </div>

      );
    };

export default function DashboardPage() {
  return (
    <DashboardLayout>
       <div className="max-w-[1400px] pl-6">
        <h1 className="text-[28px] font-bold text-[#1E1E1E] mb-8">
          Dashboard
        </h1>
      {/* Top row: 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 ">
        <Card title="Total Sales" value="$12.3K" subtitle="2+ this week" />
        <Card title="New Users" value="345" subtitle="10% growth" />
        <Card title="Revenue" value="$8.9K" subtitle="5% growth" />
        <Card title="Opportunities" value="24" subtitle="2+ this week" />
      </div>

      <div className="flex flex-row gap-8 pl-2">
        {/* Bottom left column */}
        <div className="flex flex-col gap-6">
          {/* Section Title */}
          <h4
            className="
              text-[24px]
              font-bold
              leading-[36px]
              text-[#1E1E1E]
              font-bold
            "
          >
            Recent Created Opportunity
          </h4>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-8">
            {mockJobs.map((job, index) => (
              <JobCard
                key={index}
                jobName={job.jobName}
                jobNumber={job.jobNumber}
                jobtype={job.jobtype}
                country={job.country}
                numberOfApplicants={job.numberOfApplicants}
              />
            ))}
          </div>
        </div>
        {/* Bottom right column */}
        <div className="flex flex-col gap-8 flex-1">
          <h4
            className="
              text-[24px]
              font-bold
              leading-[36px]
              text-[#1E1E1E]
              font-bold
            "
          >
            Recent Applied Students
          </h4>
          {/* Bottom left column */}
          <div className="grid grid-cols-2 gap-8">
            {mockStudents.map((student, index) => (
              <AppliedStudentCard
                key={index}
                studentName={student.studentName}
                studentNumber={student.studentId}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </DashboardLayout>
  );
}

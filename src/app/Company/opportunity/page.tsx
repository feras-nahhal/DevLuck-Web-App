// src/app/Company/opportunity/page.tsx
"use client";
import DashboardLayout from "@/src/components/Company/DashboardLayout";
import { ArrowUpRight } from 'lucide-react';
import { useState, useMemo } from "react";
import OpportunityModal from "@/src/components/Company/OpportunityModal";
import { useRouter } from "next/navigation";

// Mock data from backend
const mockJobs = [
  {
    jobName: "Front End Developer",
    jobNumber: "101",
    jobtype: "Full Time",
    country: "Egypt",
    numberOfApplicants: "25",
  },
  {
    jobName: "Back End Developer",
    jobNumber: "102",
    jobtype: "Part Time",
    country: "USA",
    numberOfApplicants: "13",
  },
  {
    jobName: "UI/UX Designer",
    jobNumber: "103",
    jobtype: "Contract",
    country: "Canada",
    numberOfApplicants: "8",
  },
  {
    jobName: "DevOps Engineer",
    jobNumber: "104",
    jobtype: "Full Time",
    country: "UK",
    numberOfApplicants: "15",
  },
  {
    jobName: "Data Scientist",
    jobNumber: "105",
    jobtype: "Full Time",
    country: "Germany",
    numberOfApplicants: "20",
  },
  {
    jobName: "Product Manager",
    jobNumber: "106",
    jobtype: "Part Time",
    country: "India",
    numberOfApplicants: "10",
  },
   {
    jobName: "Product Manager",
    jobNumber: "106",
    jobtype: "Part Time",
    country: "India",
    numberOfApplicants: "10",
  },
   {
    jobName: "Product Manager",
    jobNumber: "106",
    jobtype: "Part Time",
    country: "India",
    numberOfApplicants: "10",
  },
   {
    jobName: "Product Manager",
    jobNumber: "106",
    jobtype: "Part Time",
    country: "India",
    numberOfApplicants: "10",
  },
   {
    jobName: "Product Manager",
    jobNumber: "106",
    jobtype: "Part Time",
    country: "India",
    numberOfApplicants: "10",
  },
];

const mockStudents = [
  {
    studentName: "Alice Johnson",
    studentNumber: "75",
  },
  {
    studentName: "Bob Smith",
    studentNumber: "16",
  },
  {
    studentName: "Charlie Brown",
    studentNumber: "13",
  },
  {
    studentName: "Diana Prince",
    studentNumber: "11",
  },
];

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
            stroke="#e6e5eb02"      // border color
            strokeWidth="2"         // border thickness
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
          absolute
          left-[81.86%]
          top-[0%]
          w-12
          h-12
          rounded-full
          bg-[#FFEB9C]
          flex
          items-center
          justify-center
          shadow-md
          z-20
          transition-all
          duration-200
          ease-out
          hover:bg-[#FFE066]
          hover:scale-105
          group
        "
      >
        <ArrowUpRight
          size={24}
          className="
            transition-transform
            duration-200
            ease-out
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
  onClick,
}: {
  jobName: string;
  jobNumber: string;
  jobtype: string;
  country: string;
  numberOfApplicants: string;
  onClick?: () => void;
}) => {
  return (
    <div className="relative w-[437px] h-[217px]">
      {/* SVG Card Body */}
      <svg
        viewBox="0 0 437 217"
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <g filter="url(#cardShadow)">
          <path
            d="M324.419 27.0303C324.419 37.5404 332.939 46.0605 343.449 46.0605H392.015C405.269 46.0605 416.015 56.8057 416.015 70.0605V126.183C416.015 133.732 412.463 140.84 406.428 145.373L360.262 180.047C356.106 183.169 351.048 184.856 345.849 184.856H179.133C166.871 184.856 156.93 174.916 156.93 162.653C156.93 150.39 146.989 140.449 134.726 140.449H44C30.7452 140.449 20 129.704 20 116.449V32C20 18.7452 30.7452 8 44 8H305.389C315.899 8 324.419 16.5201 324.419 27.0303Z"
            fill="white"
          />
        </g>

        <defs>
          <filter
            id="cardShadow"
            x="0"
            y="0"
            width="436.015"
            height="216.856"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            {/* Main drop shadow */}
            <feOffset dy="12" />
            <feGaussianBlur stdDeviation="12" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.568627 0 0 0 0 0.619608 0 0 0 0 0.670588 0 0 0 0.12 0"
            />

            {/* Ambient shadow */}
            <feGaussianBlur stdDeviation="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.568627 0 0 0 0 0.619608 0 0 0 0 0.670588 0 0 0 0.2 0"
            />
          </filter>
        </defs>
      </svg>

      {/* Content Container */}
      <div className="absolute w-[340px] h-[84px] left-[50%] top-[35%] -translate-x-[50%] -translate-y-[50%] rounded-[24px_0_0_24px] flex flex-col gap-4">
        {/* Job Title */}
        <div className="flex flex-col gap-2 w-[312px] h-[28px]">
          <h6 className="font-semibold text-[18px] leading-[28px] text-[#1E1E1E]">
            {jobName}
          </h6>
        </div>

        {/* Job Tags Row */}
        <div className="flex flex-row flex-wrap items-center gap-1 w-[370px] h-[40px]">
          {/* Job Type */}
          <div className="flex flex-row items-center gap-1.5 w-[115px] h-[40px]">
            {/* Icon */}
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG paths unchanged */}
            </svg>

            <div className="flex flex-col justify-center items-start w-[77px] h-[40px] gap-1">
              <span className="text-[14px] leading-[22px] text-[#1E1E1E]">
                {jobtype}
              </span>
              <span className="text-[12px] leading-[18px] text-[#00000090]">
                Job Type
              </span>
            </div>
          </div>

          {/* Country */}
          <div className="flex flex-row items-center gap-1.5 w-[115px] h-[40px]">
            <svg width="32" height="24" viewBox="0 0 32 24" />
            <div className="flex flex-col justify-center items-start w-[77px] h-[40px] gap-1">
              <span className="text-[14px] leading-[22px] text-[#1E1E1E]">
                {country}
              </span>
              <span className="text-[12px] leading-[18px] text-[#00000090]">
                Country
              </span>
            </div>
          </div>

          {/* Applicants */}
          <div className="flex flex-row items-center gap-1.5 w-[115px] h-[40px]">
            <svg width="32" height="24" viewBox="0 0 32 24" />
            <div className="flex flex-col justify-center items-start w-[77px] h-[40px] gap-1">
              <span className="text-[14px] leading-[22px] text-[#1E1E1E]">
                {numberOfApplicants}
              </span>
              <span className="text-[12px] leading-[18px] text-[#00000090]">
                Applied
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Job Number Label */}
      <div className="absolute left-[77%] top-[8%] flex items-center justify-center w-20 bg-black/20 rounded-[6px]">
        <span className="text-[12px] font-bold leading-[20px] text-[#1E1E1E] text-center">
          JOB - {jobNumber}
        </span>
      </div>

      {/* Button */}
      <button className="absolute left-[8%] top-[68%] flex items-center justify-center px-3 min-w-[64px] h-[36px] bg-[#FFEB9C] rounded-[8px] transition-all duration-200 hover:bg-[#FFE066] hover:scale-105"
        onClick={onClick}>
        <span className="text-[14px] font-bold leading-[24px] text-[#1E1E1E]">
          View Details
        </span>
      </button>
    </div>
  );
};

/* ──────────────────────────────────────────────
   Main Opportunity Page Component
────────────────────────────────────────────── */
  const ITEMS_PER_PAGE = 9;

export default function OpportunityPage() {

  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingOpportunity, setEditingOpportunity] = useState<any>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // 🔍 Filter jobs
  const filteredJobs = useMemo(() => {
    if (!searchQuery.trim()) return mockJobs;

    return mockJobs.filter(job =>
      job.jobName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.jobtype.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // 📄 Pagination
  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);

  const paginatedJobs = filteredJobs.slice(
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

  return (
    <DashboardLayout>
    <div className="max-w-[1400px] pl-6">
      <div className="flex items-center justify-between mb-8">
        {/* Left: Title */}
        <h1 className="text-[28px] font-bold text-[#1E1E1E]">
          Opportunity
        </h1>

        {/* Right: Button group */}
        <div className="flex items-center gap-4">
          {/* Example Button 1 */}
          <button
            className="relative w-[180px] h-[40px] skew-x-[-12deg] bg-[#FFEB9C] flex items-center justify-center overflow-hidden rounded-md hover:bg-[#FFE066] transition duration-200 hover:scale-105"
            onClick={() => {
              setEditingOpportunity(null); // clear previous data
              setIsModalOpen(true);
            }}
          >
            <span className="skew-x-[12deg] font-bold text-[#1E1E1E] flex items-center justify-center">
              Create Opportunity
            </span>
          </button>

        </div>
      </div>

      {/* Top row: 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8 ">
        <Card title="Total Sales" value="$12.3K" subtitle="2+ this week" />
        <Card title="New Users" value="345" subtitle="10% growth" />
        <Card title="Revenue" value="$8.9K" subtitle="5% growth" />
        <Card title="Opportunities" value="24" subtitle="2+ this week" />
      </div>

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
          <div className="grid grid-cols-3 grid-rows-3 gap-2">
            {paginatedJobs.map((job, index) => (
              <JobCard
                key={index}
                jobName={job.jobName}
                jobNumber={job.jobNumber}
                jobtype={job.jobtype}
                country={job.country}
                numberOfApplicants={job.numberOfApplicants}
                onClick={() => router.push(`/Company/opportunity/${job.jobNumber}`)}
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

    {/* Next */}
    <OpportunityModal
    isOpen={isModalOpen}
    opportunity={editingOpportunity} // null for new opportunity
    onClose={() => setIsModalOpen(false)}
    onSave={(data) => {
      console.log("Opportunity saved:", data);
      setIsModalOpen(false);
  }}
/>
    </DashboardLayout>
  );
}
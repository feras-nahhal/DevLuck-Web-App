// src/app/Company/dashboard/page.tsx
"use client";

import DashboardLayout from "@/src/components/Company/DashboardLayout";

import { ArrowUpRight } from 'lucide-react';

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
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.53809 0.666992H26.4619C29.1522 0.667192 31.3328 2.84776 31.333 5.53809V8C31.333 16.4684 24.4684 23.333 16 23.333C7.53163 23.333 0.666992 16.4684 0.666992 8V5.53809C0.667195 2.84777 2.84777 0.667195 5.53809 0.666992Z" fill="#FFEB9C" fill-opacity="0.16"/>
              <path d="M5.53809 0.666992H26.4619C29.1522 0.667192 31.3328 2.84776 31.333 5.53809V8C31.333 16.4684 24.4684 23.333 16 23.333C7.53163 23.333 0.666992 16.4684 0.666992 8V5.53809C0.667195 2.84777 2.84777 0.667195 5.53809 0.666992Z" stroke="#E6D48C" stroke-width="1.33333"/>
              <path opacity="0.5" d="M19.9241 17.3102C19.7383 17.8794 19.4117 18.3924 18.9748 18.8018C18.325 19.4106 17.3223 19.6791 15.3179 20.216C13.3134 20.7529 12.3108 21.0222 11.4441 20.8195C10.7593 20.6599 10.1372 20.3007 9.65654 19.7875C9.04765 19.1378 8.77831 18.1351 8.24143 16.1306L7.78187 14.4133C7.24409 12.4089 6.97565 11.4062 7.17743 10.5395C7.33735 9.85463 7.6968 9.23255 8.21031 8.75197C8.86009 8.14308 9.86276 7.87464 11.8672 7.33686C12.2459 7.23553 12.5899 7.14308 12.9028 7.06219L12.6859 7.86753L12.2263 9.58486C11.6885 11.5893 11.4201 12.5911 11.6219 13.4586C11.7818 14.1435 12.1412 14.7656 12.6548 15.2462C13.3045 15.8551 14.3072 16.1235 16.3116 16.6613C18.1179 17.1449 19.1108 17.4106 19.9241 17.3102Z" fill="#E6D48C"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.849 10.8578L23.3885 12.5751C22.8508 14.5796 22.5823 15.5822 21.9734 16.232C21.493 16.745 20.8712 17.1042 20.1868 17.264C20.1005 17.2844 20.0134 17.2996 19.9245 17.3102C19.1112 17.4107 18.1183 17.1449 16.3121 16.6613C14.3077 16.1236 13.305 15.8551 12.6552 15.2462C12.142 14.7655 11.7829 14.1435 11.6232 13.4587C11.4205 12.5911 11.689 11.5893 12.2268 9.58489L12.6863 7.86755L12.9032 7.06311C13.3077 5.58222 13.5797 4.76711 14.1014 4.20978C14.582 3.69706 15.2037 3.33826 15.8881 3.17866C16.7557 2.976 17.7583 3.24444 19.7637 3.78222C21.7672 4.31911 22.7699 4.58755 23.4197 5.19555C23.933 5.67649 24.2921 6.29889 24.4517 6.984C24.6543 7.85155 24.3859 8.85333 23.849 10.8578ZM15.1574 10.0489C15.1801 9.96431 15.2193 9.88502 15.2726 9.81557C15.3259 9.74611 15.3924 9.68785 15.4683 9.6441C15.5441 9.60035 15.6279 9.57197 15.7147 9.5606C15.8015 9.54921 15.8898 9.55505 15.9743 9.57778L20.2677 10.7289C20.3545 10.7495 20.4363 10.7873 20.5082 10.84C20.5801 10.8928 20.6407 10.9595 20.6864 11.0361C20.7321 11.1127 20.762 11.1977 20.7742 11.2861C20.7864 11.3745 20.7808 11.4644 20.7577 11.5505C20.7345 11.6367 20.6943 11.7173 20.6395 11.7877C20.5846 11.858 20.5161 11.9166 20.4382 11.96C20.3603 12.0034 20.2744 12.0307 20.1857 12.0403C20.097 12.05 20.0073 12.0417 19.9219 12.016L15.6285 10.8658C15.4579 10.8199 15.3125 10.7083 15.2241 10.5553C15.1358 10.4023 15.1118 10.2196 15.1574 10.0489ZM14.4677 12.6249C14.5135 12.4543 14.6252 12.3088 14.7782 12.2205C14.9312 12.1321 15.113 12.1082 15.2837 12.1538L17.8597 12.8444C17.9469 12.8646 18.0291 12.9021 18.1016 12.9547C18.174 13.0073 18.2351 13.0739 18.2812 13.1507C18.3273 13.2274 18.3575 13.3126 18.3699 13.4012C18.3824 13.4899 18.3769 13.5801 18.3537 13.6666C18.3305 13.753 18.2902 13.834 18.2351 13.9045C18.18 13.975 18.1112 14.0337 18.0329 14.0771C17.9546 14.1205 17.8684 14.1477 17.7794 14.1571C17.6904 14.1664 17.6004 14.1577 17.5148 14.1316L14.9388 13.4418C14.8542 13.4191 14.7749 13.38 14.7055 13.3266C14.636 13.2733 14.5777 13.2068 14.534 13.1309C14.4902 13.0551 14.4619 12.9713 14.4505 12.8845C14.4391 12.7977 14.4449 12.7095 14.4677 12.6249Z" fill="#E6D48C"/>
              </svg>
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
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.53809 0.666992H26.4619C29.1522 0.667192 31.3328 2.84776 31.333 5.53809V8C31.333 16.4684 24.4684 23.333 16 23.333C7.53163 23.333 0.666992 16.4684 0.666992 8V5.53809C0.667195 2.84777 2.84777 0.667195 5.53809 0.666992Z" fill="#FFEB9C" fill-opacity="0.16"/>
              <path d="M5.53809 0.666992H26.4619C29.1522 0.667192 31.3328 2.84776 31.333 5.53809V8C31.333 16.4684 24.4684 23.333 16 23.333C7.53163 23.333 0.666992 16.4684 0.666992 8V5.53809C0.667195 2.84777 2.84777 0.667195 5.53809 0.666992Z" stroke="#E6D48C" stroke-width="1.33333"/>
              <path opacity="0.5" d="M19.9241 17.3102C19.7383 17.8794 19.4117 18.3924 18.9748 18.8018C18.325 19.4106 17.3223 19.6791 15.3179 20.216C13.3134 20.7529 12.3108 21.0222 11.4441 20.8195C10.7593 20.6599 10.1372 20.3007 9.65654 19.7875C9.04765 19.1378 8.77831 18.1351 8.24143 16.1306L7.78187 14.4133C7.24409 12.4089 6.97565 11.4062 7.17743 10.5395C7.33735 9.85463 7.6968 9.23255 8.21031 8.75197C8.86009 8.14308 9.86276 7.87464 11.8672 7.33686C12.2459 7.23553 12.5899 7.14308 12.9028 7.06219L12.6859 7.86753L12.2263 9.58486C11.6885 11.5893 11.4201 12.5911 11.6219 13.4586C11.7818 14.1435 12.1412 14.7656 12.6548 15.2462C13.3045 15.8551 14.3072 16.1235 16.3116 16.6613C18.1179 17.1449 19.1108 17.4106 19.9241 17.3102Z" fill="#E6D48C"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.849 10.8578L23.3885 12.5751C22.8508 14.5796 22.5823 15.5822 21.9734 16.232C21.493 16.745 20.8712 17.1042 20.1868 17.264C20.1005 17.2844 20.0134 17.2996 19.9245 17.3102C19.1112 17.4107 18.1183 17.1449 16.3121 16.6613C14.3077 16.1236 13.305 15.8551 12.6552 15.2462C12.142 14.7655 11.7829 14.1435 11.6232 13.4587C11.4205 12.5911 11.689 11.5893 12.2268 9.58489L12.6863 7.86755L12.9032 7.06311C13.3077 5.58222 13.5797 4.76711 14.1014 4.20978C14.582 3.69706 15.2037 3.33826 15.8881 3.17866C16.7557 2.976 17.7583 3.24444 19.7637 3.78222C21.7672 4.31911 22.7699 4.58755 23.4197 5.19555C23.933 5.67649 24.2921 6.29889 24.4517 6.984C24.6543 7.85155 24.3859 8.85333 23.849 10.8578ZM15.1574 10.0489C15.1801 9.96431 15.2193 9.88502 15.2726 9.81557C15.3259 9.74611 15.3924 9.68785 15.4683 9.6441C15.5441 9.60035 15.6279 9.57197 15.7147 9.5606C15.8015 9.54921 15.8898 9.55505 15.9743 9.57778L20.2677 10.7289C20.3545 10.7495 20.4363 10.7873 20.5082 10.84C20.5801 10.8928 20.6407 10.9595 20.6864 11.0361C20.7321 11.1127 20.762 11.1977 20.7742 11.2861C20.7864 11.3745 20.7808 11.4644 20.7577 11.5505C20.7345 11.6367 20.6943 11.7173 20.6395 11.7877C20.5846 11.858 20.5161 11.9166 20.4382 11.96C20.3603 12.0034 20.2744 12.0307 20.1857 12.0403C20.097 12.05 20.0073 12.0417 19.9219 12.016L15.6285 10.8658C15.4579 10.8199 15.3125 10.7083 15.2241 10.5553C15.1358 10.4023 15.1118 10.2196 15.1574 10.0489ZM14.4677 12.6249C14.5135 12.4543 14.6252 12.3088 14.7782 12.2205C14.9312 12.1321 15.113 12.1082 15.2837 12.1538L17.8597 12.8444C17.9469 12.8646 18.0291 12.9021 18.1016 12.9547C18.174 13.0073 18.2351 13.0739 18.2812 13.1507C18.3273 13.2274 18.3575 13.3126 18.3699 13.4012C18.3824 13.4899 18.3769 13.5801 18.3537 13.6666C18.3305 13.753 18.2902 13.834 18.2351 13.9045C18.18 13.975 18.1112 14.0337 18.0329 14.0771C17.9546 14.1205 17.8684 14.1477 17.7794 14.1571C17.6904 14.1664 17.6004 14.1577 17.5148 14.1316L14.9388 13.4418C14.8542 13.4191 14.7749 13.38 14.7055 13.3266C14.636 13.2733 14.5777 13.2068 14.534 13.1309C14.4902 13.0551 14.4619 12.9713 14.4505 12.8845C14.4391 12.7977 14.4449 12.7095 14.4677 12.6249Z" fill="#E6D48C"/>
              </svg>
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
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.53809 0.666992H26.4619C29.1522 0.667192 31.3328 2.84776 31.333 5.53809V8C31.333 16.4684 24.4684 23.333 16 23.333C7.53163 23.333 0.666992 16.4684 0.666992 8V5.53809C0.667195 2.84777 2.84777 0.667195 5.53809 0.666992Z" fill="#FFEB9C" fill-opacity="0.16"/>
              <path d="M5.53809 0.666992H26.4619C29.1522 0.667192 31.3328 2.84776 31.333 5.53809V8C31.333 16.4684 24.4684 23.333 16 23.333C7.53163 23.333 0.666992 16.4684 0.666992 8V5.53809C0.667195 2.84777 2.84777 0.667195 5.53809 0.666992Z" stroke="#E6D48C" stroke-width="1.33333"/>
              <path opacity="0.5" d="M19.9241 17.3102C19.7383 17.8794 19.4117 18.3924 18.9748 18.8018C18.325 19.4106 17.3223 19.6791 15.3179 20.216C13.3134 20.7529 12.3108 21.0222 11.4441 20.8195C10.7593 20.6599 10.1372 20.3007 9.65654 19.7875C9.04765 19.1378 8.77831 18.1351 8.24143 16.1306L7.78187 14.4133C7.24409 12.4089 6.97565 11.4062 7.17743 10.5395C7.33735 9.85463 7.6968 9.23255 8.21031 8.75197C8.86009 8.14308 9.86276 7.87464 11.8672 7.33686C12.2459 7.23553 12.5899 7.14308 12.9028 7.06219L12.6859 7.86753L12.2263 9.58486C11.6885 11.5893 11.4201 12.5911 11.6219 13.4586C11.7818 14.1435 12.1412 14.7656 12.6548 15.2462C13.3045 15.8551 14.3072 16.1235 16.3116 16.6613C18.1179 17.1449 19.1108 17.4106 19.9241 17.3102Z" fill="#E6D48C"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.849 10.8578L23.3885 12.5751C22.8508 14.5796 22.5823 15.5822 21.9734 16.232C21.493 16.745 20.8712 17.1042 20.1868 17.264C20.1005 17.2844 20.0134 17.2996 19.9245 17.3102C19.1112 17.4107 18.1183 17.1449 16.3121 16.6613C14.3077 16.1236 13.305 15.8551 12.6552 15.2462C12.142 14.7655 11.7829 14.1435 11.6232 13.4587C11.4205 12.5911 11.689 11.5893 12.2268 9.58489L12.6863 7.86755L12.9032 7.06311C13.3077 5.58222 13.5797 4.76711 14.1014 4.20978C14.582 3.69706 15.2037 3.33826 15.8881 3.17866C16.7557 2.976 17.7583 3.24444 19.7637 3.78222C21.7672 4.31911 22.7699 4.58755 23.4197 5.19555C23.933 5.67649 24.2921 6.29889 24.4517 6.984C24.6543 7.85155 24.3859 8.85333 23.849 10.8578ZM15.1574 10.0489C15.1801 9.96431 15.2193 9.88502 15.2726 9.81557C15.3259 9.74611 15.3924 9.68785 15.4683 9.6441C15.5441 9.60035 15.6279 9.57197 15.7147 9.5606C15.8015 9.54921 15.8898 9.55505 15.9743 9.57778L20.2677 10.7289C20.3545 10.7495 20.4363 10.7873 20.5082 10.84C20.5801 10.8928 20.6407 10.9595 20.6864 11.0361C20.7321 11.1127 20.762 11.1977 20.7742 11.2861C20.7864 11.3745 20.7808 11.4644 20.7577 11.5505C20.7345 11.6367 20.6943 11.7173 20.6395 11.7877C20.5846 11.858 20.5161 11.9166 20.4382 11.96C20.3603 12.0034 20.2744 12.0307 20.1857 12.0403C20.097 12.05 20.0073 12.0417 19.9219 12.016L15.6285 10.8658C15.4579 10.8199 15.3125 10.7083 15.2241 10.5553C15.1358 10.4023 15.1118 10.2196 15.1574 10.0489ZM14.4677 12.6249C14.5135 12.4543 14.6252 12.3088 14.7782 12.2205C14.9312 12.1321 15.113 12.1082 15.2837 12.1538L17.8597 12.8444C17.9469 12.8646 18.0291 12.9021 18.1016 12.9547C18.174 13.0073 18.2351 13.0739 18.2812 13.1507C18.3273 13.2274 18.3575 13.3126 18.3699 13.4012C18.3824 13.4899 18.3769 13.5801 18.3537 13.6666C18.3305 13.753 18.2902 13.834 18.2351 13.9045C18.18 13.975 18.1112 14.0337 18.0329 14.0771C17.9546 14.1205 17.8684 14.1477 17.7794 14.1571C17.6904 14.1664 17.6004 14.1577 17.5148 14.1316L14.9388 13.4418C14.8542 13.4191 14.7749 13.38 14.7055 13.3266C14.636 13.2733 14.5777 13.2068 14.534 13.1309C14.4902 13.0551 14.4619 12.9713 14.4505 12.8845C14.4391 12.7977 14.4449 12.7095 14.4677 12.6249Z" fill="#E6D48C"/>
              </svg>
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
                studentNumber={student.studentNumber}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </DashboardLayout>
  );
}

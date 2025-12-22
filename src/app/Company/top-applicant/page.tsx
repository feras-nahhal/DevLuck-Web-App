// src/app/Company/top-applicant/page.tsx
"use client";
import { useParams, useRouter } from "next/navigation";
import DashboardLayout from "@/src/components/Company/DashboardLayout";
import { mockApplicants } from "@/src/mocks/mockApplicants";

// =======================
// APPLIED STUDENT CARD COMPONENT
// ========================
const AppliedStudentCard = ({
  studentName,
  studentNumber,
  imageUrl,
  onClick,
}: {
  studentName: string;
  studentNumber: string;
  imageUrl?: string; // ✅ ready for backend
  onClick?: () => void;
}) => {
  return (
    <div className="relative w-[220px] h-[350px]"
      onClick={onClick}
      role="button"
      tabIndex={0}
      >
      {/* =======================
          SVG CARD BACKGROUND
      ======================== */}
      <img
        src="/cards/appliedStudent.svg"
        alt="Applied Students"
      />

      {/* =======================
          PROFILE IMAGE PLACEHOLDER / IMAGE
      ======================== */}
      <div
        className="absolute left-1/2 overflow-hidden"
        style={{
          width: "161.46px",
          height: "150.38px",
          borderRadius: "51.8066px",
          backgroundColor: "#E0E0E0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bottom: "-75px",
          transform: "translate(-51%, -85%)",
          zIndex: 2,
        }}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={studentName}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-[14px] text-[#888]">No Image</span>
        )}

        {/* =======================
            PROFILE ICON OVERLAY
        ======================== */}
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


      {/* =======================
          STUDENT NAME
      ======================== */}
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
        {/* Rotated yellow square */}
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
            fontFamily: "'Rock Salt', cursive",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "47px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            color: "#1C252E",
            textShadow:
              "0px 14.2468px 17.4128px rgba(213, 118, 246, 0.33)",
          }}
        >
          {studentName}
        </div>
      </div>

      {/* =======================
          STUDENT NUMBER
      ======================== */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          flexDirection: "row",
          gap: "4.75px",
          width: "23px",
          height: "48px",
          left: `calc(50% - 23px/2 - 65.12px)`,
          top: "22.91px",
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


export default function TopApplicantPage() {
  const router = useRouter();
  return (
    <DashboardLayout>
      <div className="max-w-[1400px] pl-6">
        <h1 className="text-[28px] font-bold text-[#1E1E1E] mb-8">
          Top Applicants
        </h1>
        {/* =======================
            APPLIED STUDENTS GRID
        ======================== */}
        <div className="grid grid-cols-6 gap-x-2 gap-y-10">
          {mockApplicants.slice(0, 12).map((applicant) => (
            <AppliedStudentCard
              key={applicant.applicantId}
              studentName={applicant.name}
              studentNumber={applicant.applicantId}
              imageUrl={applicant.image} // 👈 backend-ready
              onClick={() => router.push(`/Company/top-applicant/${applicant.applicantId}`)}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

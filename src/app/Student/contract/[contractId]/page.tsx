"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useMemo, useRef, useEffect } from "react";
import DashboardLayout from "@/src/components/Student/DashboardLayout";
import { mockContracts } from "@/src/mocks/mockContract";
import { mockPayments } from "@/src/mocks/mockPayments";


// Parallelogram Input Component
const ParallelogramInput = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
}) => (
  <div className="relative w-full sm:w-120 h-[48px]">
    <label
      className="absolute -top-2 left-5 h-[18px] px-3 bg-[#FFEB9C] text-[#1E1E1E] text-xs font-normal select-none flex items-center skew-x-[-12deg] z-20 "
      style={{ borderRadius: "6px" }}
    >
      <span className="skew-x-[2deg]">{label}</span>
    </label>
    <div className="overflow rounded-[12px] h-full w-full">
      <div
        className="h-30 w-full border border-[#1C252E]"
        style={{ transform: "skewX(-2deg)", borderRadius: "12px", background: "transparent" }}
      >
        <div
          style={{
            transform: "skewX(2deg)",
            height: "100%",
            display: "flex",
            alignItems: "flex-start", // Align text at top
            padding: "10px 20px 0", // Top padding so text doesn't touch border
          }}
        >
          {type === "textarea" ? (
            <textarea
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="bg-transparent outline-none w-full resize-none text-[14px] text-[#171717cc] h-full"
            />
          ) : (
            <input
              type={type}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="bg-transparent outline-none w-full text-[14px] text-[#171717cc]"
            />
          )}
        </div>
      </div>
    </div>
  </div>
);

type PaymentRowProps = {
  payment: typeof mockPayments[0];
  showCheckbox?: boolean;

};

const PaymentRow = ({ payment,showCheckbox = false }: PaymentRowProps) => {
    const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-2  ">


      {/* Main 80% section */}
      <div
        className="flex  items-center skew-x-[-12deg] rounded-[8] sm:h-[72px] h-[100px] shadow-lg  bg-white cursor-pointer hover:bg-gray-50"
      >

        {/* Left spacer */}
        <div className="w-6 h-full flex-none"></div>

         {/* Checkbox */}
        {showCheckbox && (
          <div
            className="flex items-center skew-x-[12deg] justify-center w-11 h-full pl-2 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation(); // 🔥 prevent row click
              setChecked((prev) => !prev);
            }}
          >
            {checked ? (
              /* ✅ SELECTED SVG */
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path
                  d="M15.0537 9.16113C16.6809 7.53396 19.3191 7.53395 20.9463 9.16113L26.8389 15.0537C28.4659 16.6809 28.466 19.3192 26.8389 20.9463L20.9463 26.8389C19.3192 28.466 16.6809 28.4659 15.0537 26.8389L9.16113 20.9463C7.53395 19.3191 7.53396 16.6809 9.16113 15.0537L15.0537 9.16113Z"
                  fill="#FFEB9C"
                />
                <path
                  d="M31.5873 8.96738C25.7014 13.6017 22.2888 16.641 18.7083 22.3035C18.6366 22.4169 18.4767 22.4333 18.3856 22.3348L12.7212 16.2001C12.6426 16.115 12.6504 15.9817 12.7383 15.9064L15.8265 13.2606C15.9194 13.181 16.0609 13.2004 16.129 13.3019L18.3444 16.6048C24.2049 11.4469 29.2798 9.33343 31.3963 8.61265C31.6142 8.53845 31.7681 8.82499 31.5873 8.96738Z"
                  fill="#1E1E1E"
                />
              </svg>
            ) : (
              /* ⬜ UNSELECTED SVG */
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.9463 9.16112C19.3191 7.53394 16.6809 7.53394 15.0537 9.16112L9.16117 15.0537C7.53398 16.6809 7.53398 19.319 9.16117 20.9462L15.0537 26.8388C16.6809 28.466 19.3191 28.466 20.9463 26.8388L26.8388 20.9462C28.466 19.319 28.466 16.6809 26.8388 15.0537L20.9463 9.16112ZM20.357 10.3396C19.0553 9.03789 16.9447 9.03789 15.643 10.3396L10.3397 15.6429C9.03793 16.9447 9.03793 19.0552 10.3397 20.357L15.643 25.6603C16.9447 26.962 19.0553 26.962 20.357 25.6603L25.6603 20.357C26.9621 19.0552 26.9621 16.9447 25.6603 15.6429L20.357 10.3396Z"
                  fill="#637381"
                />
              </svg>
            )}
          </div>
        )}

        {/* Applicant Info */}
         <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 md:flex md:items-center  skew-x-[12deg]">
          {/* CO-ID */}
          <div className="flex flex-col justify-center w-[160px] ">
            <span className="text-sm font-semibold text-gray-900">{payment.paymentId}</span>
            <span className="text-xs text-gray-400">Payment ID</span>
          </div>

          {/* End Date */}
          <div className="flex flex-col justify-center w-[160px]">
            <span className="text-sm font-semibold text-gray-900">{payment.nextPayment}</span>
            <span className="text-xs text-gray-400">Next Payment</span>
          </div>
          

          {/* Contract Status */}
          <div className="flex flex-col justify-start md:justify-center items-start md:items-center">
            <div
              className={`
                ml-4 px-3 py-1 skew-x-[-12deg] rounded-[8] text-xs font-semibold flex justify-start md:justify-center items-start md:items-center 
                ${payment.status === "Paid" ? "bg-[#D3FCD2] border border-[#22C55E] text-[#22C55E] " : ""}
                ${payment.status === "Upcoming" ? "bg-[#DFE3E8] border border-black text-black" : ""}
              `}
            >
              {payment.status}
            </div>
            <span className="text-xs text-gray-400">payment Status</span>
          </div>

        </div>
      </div>

  
    </div>
  );
};




export default function contractDetailPage() {
    const [review, setReview] = useState("");
    const [starRating, setStarRating] = useState(0);


    
   const { contractId } = useParams();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"Contract Details" | "Job Details">(
    "Contract Details"
  );

  // Find contract by ID from mockContracts
  const contract = mockContracts.find(
    (c) => c.id.toString() === contractId
  );

  if (!contract) {
    return (
      <DashboardLayout>
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold">contract Not Found</h2>
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


    const payments = useMemo(() => {
  return mockPayments.filter(
    (p) => p.contractId.toString() === contractId
  );
}, [contractId]);




  return (
    <DashboardLayout>
        <div className="px-4 sm:px-6 lg:px-6 py-6">

            <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2">
                {/* Tabs */}
                <div className="flex gap-4 mb-6 sm:mt-0 mt-4">
                    {/* Contract Details */}
                    <button
                    onClick={() => setActiveTab("Contract Details")}
                    className={
                        activeTab === "Contract Details"
                        ? "relative w-[180px] h-[40px] skew-x-[-12deg] bg-[#FFEB9C] flex items-center justify-center rounded-md transition hover:scale-105"
                        : "w-[180px] h-[40px] flex items-center justify-center text-black/60 hover:text-black"
                    }
                    >
                    <span className={activeTab === "Contract Details" ? "skew-x-[12deg] font-semibold" : ""}>
                        Contract Details
                    </span>
                    </button>

                    {/* Job Details */}
                    <button
                    onClick={() => setActiveTab("Job Details")}
                    className={
                        activeTab === "Job Details"
                        ? "relative w-[180px] h-[40px] skew-x-[-12deg] bg-[#FFEB9C] flex items-center justify-center rounded-md transition hover:scale-105"
                        : "w-[180px] h-[40px] flex items-center justify-center text-black/60 hover:text-black"
                    }
                    >
                    <span className={activeTab === "Job Details" ? "skew-x-[12deg] font-semibold" : ""}>
                        Job Details
                    </span>
                    </button>
                </div>

                {/* Content */}
                {activeTab === "Contract Details" && (
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
                        <h3 className="font-semibold mb-2">Why You'll Love Working Here</h3>
                        <ul className="list-disc pl-6 space-y-1">
                        {contract.whyYoullLoveWorkingHere.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                        </ul>
                    </section>
                     {/* Skills */}
                        <section>
                          <h3 className="font-semibold mb-2">Skills</h3>
                          <div className="flex flex-wrap gap-2">
                            {contract.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-sm skew-x-[-12deg]  rounded-[6px] border border-black "
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </section>

                        {/* Benefits */}
                        <section>
                          <h3 className="font-semibold mb-2">Benefits</h3>
                          <div className="flex flex-wrap gap-2">
                            {contract.benefits.map((benefit, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-sm skew-x-[-12deg]  rounded-[6px] border border-black "
                              >
                                {benefit}
                              </span>
                            ))}
                          </div>
                        </section>
                    </div>
                )}
            </div>

            <div className="w-full lg:w-1/2 flex items-start">
                <div className="flex flex-col gap-2 w-full">
                    <div className="w-full ">

                        {/* Payments Label */}
                        <h3 className="text-lg font-semibold mb-4">
                        Payments
                        </h3>

                        {/* Payments List */}
                        <div className="max-h-[400px] overflow-y-auto pr-4 pl-4 overflow-x-hidden ">
                        <div className="flex flex-col gap-2">
                            {payments.length === 0 ? (
                            <p className="text-sm text-gray-500">
                                No payments found for this contract.
                            </p>
                            ) : (
                            payments.map((payment) => (
                                <PaymentRow
                                key={payment.id}
                                payment={payment}
                                showCheckbox={true} // optional
                                />
                            ))
                            )}
                        </div>
                        </div>
                    </div>
                    {/* Payments Label */}
                        <h3 className="text-lg font-semibold mb-4">
                        Review
                        </h3>
                    <div className="flex w-full md:skew-x-[-12deg] max-w-[560px] h-[320px] shadow-lg bg-white sm:items-start items-center rounded-[8] overflow-hidden mt-5 flex-col p-10">

                        <div className="flex flex-col ">
  
                        {/* Input */}
                        <div className="w-full flex justify-center  mb-25">
                            <div className="w-full max-w-md">
                            <ParallelogramInput
                                label="Write your comments"
                                placeholder="Ex: 6 months Project"
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                type="textarea"
                            />
                            </div>
                        </div>

                        {/* Stars */}
                        <div className="flex justify-start  md:skew-x-[12deg] gap-2 mb-5">
                            {[1,2,3,4,5].map((star) => (
                            <button
                                key={star}
                                onClick={() => setStarRating(star)}
                                className="text-yellow-400 text-3xl"
                            >
                                {star <= starRating ? "★" : "☆"}
                            </button>
                            ))}
                        </div>

                      {/* Buttons */}
                        <div className="flex w-full flex-row gap-5 sm:flex-row sm:justify-between px-4">
                            <button
                                className="px-6 py-2  border border-black rounded-md transition hover:scale-105 "
                                onClick={() => {
                                setReview("");
                                setStarRating(0);
                                }}
                            >
                              <div className=" md:skew-x-[12deg]">
                                Cancel
                              </div>

                                
                            </button>
                            <button
                                className="px-6 py-2 bg-[#FFEB9C] rounded-md transition hover:scale-105"
                            > <div className=" md:skew-x-[12deg]">
                                Send
                                </div>
                            </button>
                        </div>

                        </div>
                    </div>
                </div>
            </div>


    </div>
        </div>

    </DashboardLayout>
  );
}

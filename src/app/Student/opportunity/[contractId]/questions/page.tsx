"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import DashboardLayout from "@/src/components/Student/DashboardLayout";
import { mockQuestions } from "@/src/mocks/mockQuestions"; // You can create mock questions
import ConfirmSubmitModal from "@/src/components/Student/ConfirmSubmitModal";
import SubmitSuccessModal from "@/src/components/Student/SubmitSuccessModal";

export default function ContractQuestionsPage() {
  const { contractId } = useParams();
  const router = useRouter();

  const [questions, setQuestions] = useState<{ id: string; question: string }[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [page, setPage] = useState(0); // current page
  const pageSize = 3; // show 3 questions per page


  // Load questions for this contract
  useEffect(() => {
  if (!contractId) return;
  const id = Number(contractId);
  const contractQuestions = mockQuestions
    .filter((q) => q.contractId === id)
    .map((q) => ({ id: q.id.toString(), question: q.question }));
  setQuestions(contractQuestions); // ✅ matches { id: string; question: string }[]
}, [contractId]);


  const handleChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const isSelected = (questionId: string, option: string) => {
  return answers[questionId]?.split(",").includes(option) || false;
  };

  const totalPages = Math.ceil(questions.length / pageSize);
  const paginatedQuestions = questions.slice(page * pageSize, (page + 1) * pageSize);

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);



  return (
    <DashboardLayout>
        <div className="px-6 py-6 min-h-[calc(100vh-120px)] relative">
        <h1 className="text-2xl font-bold mb-6">Contract Application Questions</h1>

        {paginatedQuestions.map((q) => {
  // Find the original question object in mockQuestions to get type & options
  const original = mockQuestions.find((mq) => mq.id.toString() === q.id);
  if (!original) return null;

  return (
   <div
  key={q.id}
  className="
    w-[984px]
    skew-x-[-12deg]
    bg-white
    shadow-[0px_12px_24px_-4px_rgba(145,158,171,0.12)]
    drop-shadow-[0px_0px_2px_rgba(145,158,171,0.2)]
    rounded-xl
    overflow-hidden
    mb-6
    mx-auto
  "
>
        {/* Unskewed content */}
  <div className="skew-x-[12deg] px-8 py-6 flex flex-col gap-4">
      <label className="font-semibold">{q.question}</label>

      {/* TEXT INPUT */}
                {original.type === "text" && (
                  <div className="relative w-full h-[154px]">
                    <div
                      className="absolute inset-0"
                      style={{
                        transform: "skewX(-12deg)",
                        borderRadius: "20px",
                        background: "#FBFBFB",
                        border: "1px solid #A2A2A2",
                        boxSizing: "border-box",
                        alignItems: "flex-start", // Align text at top
                      }}
                    />
                   <textarea
                    value={answers[q.id] || ""}
                    onChange={(e) => handleChange(q.id, e.target.value)}
                    placeholder="Your answer..."
                    className="absolute top-0 left-0 w-full h-full bg-transparent outline-none px-5 pt-4 pb-2 text-[14px] text-[#171717cc] resize-none"
                    />  

                  </div>
                )}


      {original.type === "checkbox" && (
  <div className="flex flex-col gap-3">
    {original.options.map((opt) => {
      const value = opt.toString();
      const selected = isSelected(q.id, value);

      return (
        <div
          key={value}
          onClick={() => {
            const prev = answers[q.id]?.split(",") || [];
            const updated = selected
              ? prev.filter((o) => o !== value)
              : [...prev, value];

            handleChange(q.id, updated.join(","));
          }}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          {/* ✅ Custom Checkbox */}
          <div className="w-9 h-9 flex items-center justify-center">
            {selected ? (
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

          {/* Option label */}
          <span className="text-sm font-medium">{value}</span>
        </div>
      );
    })}
  </div>
)}


      {original.type === "rating" && (
        <select
          value={answers[q.id] || ""}
          onChange={(e) => handleChange(q.id, e.target.value)}
          className="border rounded p-2 w-32"
        >
          <option value="">Select rating</option>
          {original.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}
    </div>
    </div>
  );
})}

      {/* Pagination buttons */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
          className="px-4 py-2 rounded-lg skew-x-[-12deg]  border-1 border-black"
        >
          <span className="skew-x-[12deg] inline-block">
            Previous
          </span>
        </button>

        {page < totalPages - 1 ? (
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
            className="px-4 py-2 rounded bg-[#FFEB9C] rounded-lg skew-x-[-12deg]  "
          >
            <span className="skew-x-[12deg] inline-block">
            Next
            </span>
          </button>
        ) : (
          <button
            onClick={() => setShowConfirmModal(true)}
            className="px-4 py-2 rounded bg-[#FFEB9C] rounded-lg skew-x-[-12deg] "
          >
            <span className="skew-x-[12deg] inline-block">
            Confirm
            </span>
          </button>
        )}
      </div>


      </div> 
     <ConfirmSubmitModal
  isOpen={showConfirmModal}
  onClose={() => setShowConfirmModal(false)}
  onConfirm={() => {
    setShowConfirmModal(false);   // close confirm modal
    setShowSuccessModal(true);    // open success modal
  }}
/>


<SubmitSuccessModal
  isOpen={showSuccessModal}
  onClose={() => {
    setShowSuccessModal(false);
    router.push("/Student/opportunity");
  }}
/>

    </DashboardLayout>
  );
}

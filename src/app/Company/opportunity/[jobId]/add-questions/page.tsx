"use client";

import { useState } from "react";
import DashboardLayout from "@/src/components/Company/DashboardLayout";

type QuestionType = "text" | "select" | "checkbox" | "rating";

interface NewQuestion {
  id: string;
  question: string;
  type: QuestionType;
  options?: string[]; // for select and checkbox
}

export default function AddQuestionsPage() {
  const [questions, setQuestions] = useState<NewQuestion[]>([]);
  const [questionInput, setQuestionInput] = useState("");
  const [questionType, setQuestionType] = useState<QuestionType>("text");
  const [optionsInput, setOptionsInput] = useState(""); // comma separated
  const [answers, setAnswers] = useState<{ [questionId: string]: string | string[] | number }>({});
  const [questionTypeDropdownOpen, setQuestionTypeDropdownOpen] = useState(false);


  // Add new question
  const addQuestion = () => {
    if (!questionInput) return;

    const newQuestion: NewQuestion = {
      id: Date.now().toString(),
      question: questionInput,
      type: questionType,
      options: (questionType === "select" || questionType === "checkbox")
        ? optionsInput.split(",").map(o => o.trim()).filter(o => o)
        : undefined,
    };

    setQuestions([...questions, newQuestion]);
    setQuestionInput("");
    setOptionsInput("");
    setQuestionType("text");
  };

  // Delete a question
  const deleteQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
    const updatedAnswers = { ...answers };
    delete updatedAnswers[id];
    setAnswers(updatedAnswers);
  };

  // Delete a single option from select/checkbox
  const deleteOption = (qId: string, opt: string) => {
    setQuestions(prev => prev.map(q => {
      if (q.id === qId && q.options) {
        return { ...q, options: q.options.filter(o => o !== opt) };
      }
      return q;
    }));
    const updatedAnswers = answers[qId];
    if (Array.isArray(updatedAnswers)) {
      setAnswers({ ...answers, [qId]: updatedAnswers.filter(v => v !== opt) });
    } else if (updatedAnswers === opt) {
      setAnswers({ ...answers, [qId]: "" });
    }
  };

  // Handle answer selection
  const handleAnswer = (qId: string, value: string | number, type: QuestionType, checked?: boolean) => {
    if (type === "checkbox") {
      const prev = (answers[qId] as string[]) || [];
      let updated: string[];
      if (checked) updated = [...prev, value as string];
      else updated = prev.filter(v => v !== value);
      setAnswers({ ...answers, [qId]: updated });
    } else {
      setAnswers({ ...answers, [qId]: value });
    }
  };

  return (
    <DashboardLayout>
      <div className="px-6 py-6 min-h-[calc(100vh-120px)]">
        <h1 className="text-3xl font-bold mb-2 text-center">Create opportunity exam Form</h1>
        <p className="text-center text-gray-500 mb-8">
        Insert questions for the contract application exam.
        </p>


        {/* Add Question Form */}
        <div className="max-w-[700px] mx-auto bg-white p-6 rounded-xl shadow-md flex flex-col gap-4">
          <label className="font-semibold text-lg">Question</label>
          <input
            type="text"
            value={questionInput}
            onChange={(e) => setQuestionInput(e.target.value)}
            placeholder="Type your question here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 outline-none"
          />

          <label className="font-semibold text-lg">Question Type</label>
          {/* Question Type */}
            <div className="relative w-full mt-2">
            {/* Dropdown header */}
            <div
                onClick={() => setQuestionTypeDropdownOpen(!questionTypeDropdownOpen)}
                className="
                flex px-3.5 py-2.5 justify-between items-center
                bg-white/0
                rounded-lg
                text-black
                text-sm
                cursor-pointer
                backdrop-blur-md
                border border-black/15
                transition
                hover:bg-black/5
                skew-x-[-12deg]
                "
            >
                <span className="skew-x-[12deg]">
                {questionType.charAt(0).toUpperCase() + questionType.slice(1)}
                </span>
                <span className="ml-2 text-xs opacity-70 skew-x-[12deg]">
                <svg
                    width="12"
                    height="6"
                    viewBox="0 0 12 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M5.8344 5.8344C5.63969 5.83478 5.45099 5.76696 5.30106 5.64273L0.301063 1.47606C-0.0533202 1.18151 -0.101823 0.655445 0.192729 0.301062C0.487281 -0.0533202 1.01335 -0.101823 1.36773 0.192729L5.8344 3.92606L10.3011 0.326063C10.4732 0.186254 10.694 0.120838 10.9145 0.1443C11.1351 0.167761 11.3372 0.278163 11.4761 0.451063C11.6303 0.624279 11.7054 0.85396 11.6833 1.08486C11.6612 1.31576 11.5438 1.52699 11.3594 1.66773L6.3594 5.69273C6.20516 5.79733 6.02031 5.8472 5.8344 5.8344Z"
                    fill="#919EAB"
                    fillOpacity="0.8"
                    />
                </svg>
                </span>
            </div>

            {/* Dropdown menu */}
            {questionTypeDropdownOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.15)] z-50 max-h-48 overflow-y-scroll">
                <style>{`
                    div::-webkit-scrollbar {
                    display: none;
                    }
                `}</style>

                {(["text", "select", "checkbox", "rating"] as QuestionType[]).map((type) => (
                    <div
                    key={type}
                    onClick={() => {
                        setQuestionType(type);
                        setQuestionTypeDropdownOpen(false);
                    }}
                    className="p-2 text-sm hover:bg-black/5 cursor-pointer"
                    >
                    {type.charAt(0).toUpperCase() + type.slice(1)} 
                    {type === "select" ? " (Single choice)" : ""}
                    {type === "checkbox" ? " (Multiple choice)" : ""}
                    {type === "rating" ? " (1-5 stars)" : ""}
                    </div>
                ))}
                </div>
            )}
            </div>


          {(questionType === "select" || questionType === "checkbox") && (
            <>
              <label className="font-semibold text-lg">Options (comma separated)</label>
              <input
                type="text"
                value={optionsInput}
                onChange={(e) => setOptionsInput(e.target.value)}
                placeholder="Option1, Option2, Option3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 outline-none"
              />
            </>
          )}

          <button
            onClick={addQuestion}
            className="w-full bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 rounded-lg transition shadow"
          >
            Add Question
          </button>
        </div>

        {/* Questions Preview */}
        {questions.length > 0 && (
          <div className="mt-10 max-w-[800px] mx-auto flex flex-col gap-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Questions & Answers</h2>

            {questions.map((q, idx) => (
              <div key={q.id} className="bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg">{idx + 1}. {q.question}</span>
                  <button
                    onClick={() => deleteQuestion(q.id)}
                    className="text-red-500 hover:text-red-700 font-bold transition"
                  >
                    Delete
                  </button>
                </div>

                {/* Answer Inputs */}
                {q.type === "text" && (
                  <input
                    type="text"
                    value={answers[q.id] as string || ""}
                    placeholder="Your answer..."
                    onChange={(e) => handleAnswer(q.id, e.target.value, "text")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 outline-none"
                  />
                )}

                {q.type === "select" && (
                  <div className="flex flex-col gap-2">
                    {q.options?.map(opt => (
                      <div key={opt} className="flex items-center justify-between">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name={q.id}
                            value={opt}
                            checked={answers[q.id] === opt}
                            onChange={(e) => handleAnswer(q.id, e.target.value, "select")}
                            className="accent-yellow-300"
                          />
                          <span>{opt}</span>
                        </label>
                        <button
                          onClick={() => deleteOption(q.id, opt)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          x
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Custom Checkbox */}
                {q.type === "checkbox" && (
                <div className="flex flex-col gap-2">
                    {q.options?.map((opt) => {
                    const isChecked = (answers[q.id] as string[] || []).includes(opt);
                    return (
                        <div key={opt} className="flex items-center justify-between">
                        <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={(e) => {
                            e.stopPropagation(); // prevent row click issues
                            handleAnswer(q.id, opt, "checkbox", !isChecked);
                            }}
                        >
                            {/* Custom SVG */}
                            <div className="flex items-center justify-center w-9 h-9">
                            {isChecked ? (
                                /* ✅ SELECTED */
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
                                /* ⬜ UNSELECTED */
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

                            {/* Option text */}
                            <span>{opt}</span>
                        </div>

                        {/* Delete option */}
                        <button
                            onClick={() => deleteOption(q.id, opt)}
                            className="text-red-500 hover:text-red-700 text-sm"
                        >
                            x
                        </button>
                        </div>
                    );
                    })}
                </div>
                )}


                {q.type === "rating" && (
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <svg
                        key={star}
                        onClick={() => handleAnswer(q.id, star, "rating")}
                        className={`w-8 h-8 cursor-pointer transition-colors ${
                          (answers[q.id] as number) >= star ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.564-.955L10 0l2.946 5.955 6.564.955-4.755 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

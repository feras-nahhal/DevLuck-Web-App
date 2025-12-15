"use client";

import { useParams, useRouter } from "next/navigation";
import DashboardLayout from "@/src/components/Company/DashboardLayout";


// You can replace this with your real backend fetch
const mockJobs = [
  { jobNumber: "101", jobName: "Front End Developer", country: "Egypt", jobtype: "Full Time", description: "This is a front-end developer role..." },
  { jobNumber: "102", jobName: "Back End Developer", country: "USA", jobtype: "Part Time", description: "This is a back-end developer role..." },
  // Add all jobs here
];

export default function JobDetailPage() {
  const { jobId } = useParams(); // fetch jobId from URL
  const router = useRouter();

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
      <div className="max-w-[1400px] pl-6">
    

        <h1 className="text-3xl font-bold mb-2">{job.jobName}</h1>
        <p className="text-sm text-black/60 mb-4">
          {job.jobtype} | {job.country} | Job ID: {job.jobNumber}
        </p>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-xl mb-2">Job Description</h2>
          <p>{job.description}</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

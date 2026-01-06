import DashboardLayout from "@/src/components/Student/DashboardLayout";
export default function StudentLoading() {
  return (
    <DashboardLayout>
    <div className="flex h-screen items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
    </div>
    </DashboardLayout>
  );
}

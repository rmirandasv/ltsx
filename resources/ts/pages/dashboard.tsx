import AppLayout from "@/components/layout/app-layout";

export default function Dashboard() {
  return (
    <AppLayout>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="mt-4 text-lg">Welcome to your dashboard!</p>
      </div>
    </AppLayout>
  );
}

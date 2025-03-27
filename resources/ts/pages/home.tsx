import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card>
        <CardContent>
          <h1 className="text-2xl font-bold">Welcome to your new app!</h1>
          <p className="mt-2">
            This is a simple starter template for your new app. It includes
            Tailwind CSS, TypeScript, and Laravel.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

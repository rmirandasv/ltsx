import AppLogo from "@/components/logo/app-logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@inertiajs/react";
import route from "ziggy-js";

export default function Home() {
  return (
    <div className="min-h-screen bg-background antialiased flex flex-col">
      <div className="px-4 py-3 flex items-center justify-end space-x-3 bg-gray-100">
        <Button asChild>
          <Link href={route('login')}>Login</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href={route('register')}>Register</Link>
        </Button>
      </div>
      <div className="max-w-7xl w-full mx-auto py-6 px-4">
        <Card>
          <CardHeader>
            <CardTitle>LTSX</CardTitle>
            <CardDescription>
              Laravel + Tailwind + Inertia + React + TypeScript
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AppLogo />
            <p className="mt-4">
              Welcome to LTSX.
              <br />
              This is a starter template for Laravel + Tailwind + Inertia +
              React + TypeScript.
              <br />
              You can start building your application from here.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

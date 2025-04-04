import RegisterForm from "@/components/auth/register-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@inertiajs/react";
import route from "ziggy-js";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="min-w-sm">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Already have an account?&nbsp;
            <Link
              href={route("login")}
              className="text-blue-500 hover:underline"
              prefetch
            >
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

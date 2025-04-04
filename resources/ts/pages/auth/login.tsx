import LoginForm from "@/components/auth/login-form";
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

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="min-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Please enter your credentials to login.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              Don't have an account?&nbsp;
              <Link
                href={route("register")}
                className="text-blue-500 hover:underline"
                prefetch
              >
                Register now
              </Link>
            </p>
            <p className="text-sm text-muted-foreground">
              <Link
                href={route("password.request")}
                className="text-blue-500 hover:underline"
                prefetch
              >
                Forgot password?
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

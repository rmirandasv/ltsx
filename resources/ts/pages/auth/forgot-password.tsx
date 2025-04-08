import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { z } from "zod";
import route from "ziggy-js";
import { SharedData } from "@/types";
import Heading from "@/components/ui/heading";

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function ForgotPassword() {
  const { status } = usePage<SharedData>().props;
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof schema>) => {
    router.post(route("password.email"), data, {
      onStart: () => setLoading(true),
      onFinish: () => setLoading(false),
    });
  };

  useEffect(() => {
    if (status) {
      form.reset();
      toast(status, {
        duration: 5000,
      });
    }
  }, [status]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Toaster />
      <div className="px-8 lg:px-0 flex flex-col w-full max-w-sm">
        <Heading
          title="Forgot Password"
          description="Enter your email to reset your password."
          center
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Reset Link"}
            </Button>
          </form>
        </Form>
        <div className="mt-8 flex justify-center">
          <p className="text-sm text-muted-foreground">
            Or, return to&nbsp;<Link className="font-medium underline" href={route("login")}>log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

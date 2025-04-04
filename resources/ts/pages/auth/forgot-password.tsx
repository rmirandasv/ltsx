import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { z } from "zod";
import route from "ziggy-js";
import { SharedData } from "@/types";

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
      <div className="min-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>Forgot Password</CardTitle>
            <CardDescription>
              Enter your email address to reset your password.
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                <Button disabled={loading}>
                  {loading ? "Sending..." : "Send Reset Link"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

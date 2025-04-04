import Heading from "@/components/ui/heading";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import route from "ziggy-js";
import { useState } from "react";
import { router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";

const schema = z
  .object({
    email: z.string().email(),
    token: z.string(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    password_confirmation: z.string().min(8, {
      message: "Password confirmation must be at least 8 characters long",
    }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords don't match",
  });

export default function ResetPassword() {
  const [loading, setLoading] = useState<boolean>(false);
  const { email, token } =
    (route().params as { email: string; token: string }) || {};
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email,
      token,
      password: "",
      password_confirmation: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof schema>) => {
    router.post(route("password.update"), data, {
      onStart: () => setLoading(true),
      onFinish: () => setLoading(false),
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="max-w-sm w-full flex flex-col">
        <Heading title="Reset Password" description="Enter your new password" />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input disabled value={email} />
              </FormControl>
            </FormItem>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter new password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password_confirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password Confirmation</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm new password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={loading}>
                {loading ? "Loading..." : "Reset Password"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

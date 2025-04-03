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
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { router } from "@inertiajs/react";
import route from "ziggy-js";
import { toast } from "sonner";

const schema = z
  .object({
    current_password: z.string().min(8, {
      message: "Current password must be at least 8 characters long",
    }),
    password: z
      .string()
      .min(8, { message: "New password must be at least 8 characters long" }),
    password_confirmation: z.string().min(8, {
      message: "Password confirmation must be at least 8 characters long",
    }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords must match",
  });

export type ChangePasswordFormValues = z.infer<typeof schema>;

export default function ChangePasswordForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      current_password: "",
      password: "",
      password_confirmation: "",
    },
  });

  const handleSubmit = (data: ChangePasswordFormValues) => {
    router.put(route("user-password.update"), data, {
      onStart: () => setLoading(true),
      onFinish: () => setLoading(false),
      onSuccess: () => {
        form.reset();
        toast("Password updated successfully");
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="current_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Current Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="New Password" {...field} />
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
              <FormLabel>Confirm New Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm New Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end">
          <Button disabled={loading} type="submit">
            {loading ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { router, usePage } from "@inertiajs/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import route from "ziggy-js";

const schema = z.object({
  code: z
    .string()
    .min(6, "Code must be 6 characters long")
    .max(6, "Code must be 6 characters long"),
});

export default function TwoFactorAuthPage() {
  const { errors } = usePage().props;
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      code: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof schema>) => {
    router.post(route("two-factor.login.store"), data, {
      onStart: () => setLoading(true),
      onFinish: () => setLoading(false),
      onError: () => {
        if (errors) {
          form.setError("code", {
            type: "manual",
            message: "Invalid code",
          });
        }
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="w-full max-w-sm flex flex-col">
        <Heading
          title="Two-Factor Authentication"
          description="Enter the code from your authenticator app."
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={loading}>
              {loading ? "Loading..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

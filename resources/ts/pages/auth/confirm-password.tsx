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
import { router } from "@inertiajs/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import route from "ziggy-js";
import { useState } from "react";

const schema = z.object({
  password: z.string().nonempty("Password is required"),
});

export default function ConfirmPassword() {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      password: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof schema>) => {
    router.post(route("password.confirm.store"), data, {
      onStart: () => setLoading(true),
      onFinish: () => setLoading(false),
    });
  };

  return (
    <div className="flex flex-col space-y-6 min-h-screen justify-center">
      <div className="flex flex-col max-w-lg mx-auto">
        <Heading
          size="small"
          title="Confirm Password"
          description="Please enter your password to confirm your identity."
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      autoFocus
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-end">
              <Button disabled={loading}>
                {loading ? "Loading..." : "Confirm Password"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

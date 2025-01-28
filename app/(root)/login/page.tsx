"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMyProfileStore } from "@/stores/useProfileStore";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
interface LoginForm {
  email: string;
  password: string;
}
const Login = () => {
  const { control, handleSubmit } = useForm<LoginForm>();
  const setProfile = useMyProfileStore((s) => s.setProfile);
  const supabase = createClient();
  const router = useRouter();
  async function onSubmit(values: LoginForm) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });
    if (error) {
      toast("Login Failed", { duration: 200 });
      return;
    }
    setProfile({
      id: data.user.id,
      username: data.user.user_metadata.username,
    });
    toast("Logged in!", { duration: 200 });
    router.replace("form-guides");
  }

  return (
    <div className="w-full">
      <div className="w-1/2 px-10">
        <div className="flex flex-row items-center gap-4">
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <div className="w-full">
                <Label htmlFor="email">Email</Label>
                <Input onChange={field.onChange} value={field.value} />
              </div>
            )}
          />
        </div>

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <div className="w-full">
              <Label htmlFor="password">Password</Label>
              <Input onChange={field.onChange} value={field.value} />
            </div>
          )}
        />
        <Button className="mt-4 w-full" onClick={handleSubmit(onSubmit)}>
          Log in
        </Button>
      </div>
    </div>
  );
};

export default Login;

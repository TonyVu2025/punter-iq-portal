"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMyProfileStore } from "@/stores/useProfileStore";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
interface RegisterForm {
  email: string;
  phone: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  post_code: string;
  terms_and_conditions: boolean;
  over_18: boolean;
}
const Register = () => {
  const { control, handleSubmit } = useForm<RegisterForm>();
  const setProfile = useMyProfileStore((s) => s.setProfile);
  const supabase = createClient();
  const router = useRouter();
  async function onSubmit(values) {
    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      phone: values.phone,
      password: values.password,
      options: {
        data: {
          first_name: values.first_name,
          last_name: values.last_name,
          post_code: values.post_code,
          username: values.username,
        },
      },
    });
    if (error) {
      toast("Failed to register", { duration: 200 });
      return;
    }
    setProfile({ id: data.user.id, username: values.username });
    toast("Registered", { duration: 200 });
    router.replace("form-guides");
  }

  return (
    <div className="w-full">
      <div className="w-1/2 px-10">
        <div className="flex flex-row items-center gap-4">
          <Controller
            control={control}
            name="username"
            render={({ field }) => (
              <div className="w-1/2">
                <Label htmlFor="email">Username</Label>
                <Input onChange={field.onChange} />
              </div>
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <div className="w-1/2">
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
        <div className="flex flex-row items-center gap-4">
          <Controller
            control={control}
            name="first_name"
            render={({ field }) => (
              <div className="w-full">
                <Label htmlFor="first_name">First Name</Label>
                <Input onChange={field.onChange} value={field.value} />
              </div>
            )}
          />
          <Controller
            control={control}
            name="last_name"
            render={({ field }) => (
              <div className="w-full">
                <Label htmlFor="last_name">Last Name</Label>
                <Input onChange={field.onChange} value={field.value} />
              </div>
            )}
          />
        </div>
        <Controller
          control={control}
          name="post_code"
          render={({ field }) => (
            <div className="w-full">
              <Label htmlFor="post_code">Post Code</Label>
              <Input onChange={field.onChange} value={field.value} />
            </div>
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <div className="w-full">
              <Label htmlFor="phone_number">Phone Number</Label>
              <Input onChange={field.onChange} value={field.value} />
            </div>
          )}
        />
        <Controller
          control={control}
          name="terms_and_conditions"
          render={({ field }) => (
            <div className="w-full">
              <Checkbox
                name="tos_and_pp"
                onChange={field.onChange}
                checked={field.value}
              />
              <Label
                htmlFor="tos_and_pp"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I have read and agree to the Privacy Policy and Terms and
                Conditions. I agree that by registering I am also registering to
                the network and that News Pty Limited and any of its related
                companies can contact me with special offers, marketing
                information and weekly newsletters. You can unsubscribe at any
                time.
              </Label>
            </div>
          )}
        />
        <Controller
          control={control}
          name="over_18"
          render={({ field }) => (
            <div className="w-full">
              <Checkbox
                name="over_18"
                onChange={field.onChange}
                checked={field.value}
              />
              <Label
                htmlFor="over_18"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I am over 18
              </Label>
            </div>
          )}
        />
        <Button className="w-full" onClick={handleSubmit(onSubmit)}>
          Complete Registration
        </Button>
      </div>
      <div className="w-1/2"> </div>
    </div>
  );
};

export default Register;

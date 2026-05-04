"use client";

import { type ComponentProps, useState } from 'react';
import axios from '@/lib/axios';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import { API } from '@/api-urls';
import { ROUTES } from '@/routes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LoginFormSchema } from '@/lib/definitions';

type FormFields = {
  email: string;
  password: string;
};

export function LoginForm({ className, ...props }: ComponentProps<"div">) {
  const router = useRouter();
  const [formError, setFormError] = useState<string | null>(null)
  const { handleSubmit, control } = useForm<FormFields>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(LoginFormSchema)
  });

  async function onSubmit(data: { email: string, password: string }) {
    let errorMessage: string | null = null;

    try {
      await axios.post(API.AUTH.LOGIN, data);
      router.refresh();
      void router.push(ROUTES.HOME);
    } catch(error) {
      if (isAxiosError(error) && error.response?.status === 401) {
        errorMessage = 'Invalid email or password.';
      } else {
        errorMessage = 'Something went wrong. Please try again.';
      }
    }

    setFormError(errorMessage);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>
            Sign in to continue to your dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email is required" }}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                    />
                    <FieldError errors={[fieldState.error]} />
                  </Field>
                )}
              />
              <Controller
                name="password"
                control={control}
                rules={{ required: "Password is required" }}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <a
                        href="#"
                        className="ml-auto hidden text-sm underline-offset-4 hover:underline text-primary"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input {...field} id="password" type="password" />
                    <FieldError errors={[fieldState.error]} />
                  </Field>
                )}
              />
              <Field>
                <Button type="submit" className="w-full">
                  Sign in
                </Button>
              </Field>
              {formError && <div className="text-sm text-destructive">{formError}</div>}
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

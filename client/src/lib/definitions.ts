import { z } from 'zod';

const minPwdChars = 6;

const LoginFormSchema = z.object({
  email: z.email({
    message: 'Email is required',
  }).trim(),
  password: z
    .string()
    .trim()
    .min(minPwdChars, { message: `Should be minimum ${minPwdChars} characters`  })
})

export {
  LoginFormSchema,
}

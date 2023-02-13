import {z} from 'zod';

export const loginSchema = z
  .object({
    cellphone: z.string().min(1, {message: 'Cellphone is required'}),
    password: z.string().min(1, {message: 'Password is required'}),
  })
  .required();

export type LoginType = z.infer<typeof loginSchema>;

export const addUserSchema = z
  .object({
    username: z.string({required_error: 'Username is required'}),
    name: z.string({required_error: 'Name is required'}),
    email: z
      .string({required_error: 'Email is required'})
      .email({message: 'Invalid email address'}),
    phone: z.string({required_error: 'Cellphone is required'}),
  })
  .required();

export type AddUserType = z.infer<typeof addUserSchema>;

import { Role } from "@prisma/client";
import { z } from "zod";

export type AdminCreateForm = z.infer<typeof AdminCreate>;

export const AdminCreate = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Please enter email address."),
  fullName: z.string().optional(),
  name: z.string().max(255).min(1, "Please enter your first name"),
  lastName: z.string().max(255).min(1, "Please enter your last name"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(16, "Password can not exceed 16 characters")
    .regex(/[0-9]/, "Password must include at least 1 number")
    .regex(/[a-z]/, "Password must include at least 1 lower-case character")
    .regex(/[A-Z]/, "Password must include at least 1 upper-case character"),
  profilePicture: z.instanceof(File).nullable().optional(),
  profilePicturePath: z.string().optional(),
  role: z.nativeEnum(Role).default(Role.RW),
  isAdmin: z.boolean().default(false),
});

export const AdminEdit = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Please enter email address."),
  fullName: z.string().optional(),
  name: z.string().max(255).min(1, "Please enter your first name"),
  lastName: z.string().max(255).min(1, "Please enter your last name"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(16, "Password can not exceed 16 characters")
    .regex(/[0-9]/, "Password must include at least 1 number")
    .regex(/[a-z]/, "Password must include at least 1 lower-case character")
    .regex(/[A-Z]/, "Password must include at least 1 upper-case character")
    .or(z.literal("")),
  profilePicture: z.instanceof(File).nullable().optional(),
  profilePicturePath: z.string().optional(),
  role: z.nativeEnum(Role).default(Role.RW),
  isAdmin: z.boolean().default(false),
});

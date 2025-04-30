import { z } from "zod";

/**
 * Password regex
 */
const passReg = {
  upperCase: /[A-Z]/,
  lowerCase: /[a-z]/,
  digit: /[0-9]/,
  specialChar: /[@$!%*?&]/,
};

/**
 * Schéme pre validáciu údajov vytvorenia nového užívateľa
 */
export const RegisterSchema = z
  .object({
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Please enter your email address."),
    name: z.string().max(255).min(1, "Please enter your first name"),
    lastName: z.string().max(255).min(1, "Please enter your last name"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(16, "Password can not exceed 16 characters")
      .regex(/[0-9]/, "Password must include at least 1 number")
      .regex(/[a-z]/, "Password must include at least 1 lower-case character")
      .regex(/[A-Z]/, "Password must include at least 1 upper-case character"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(16, "Password can not exceed 16 characters")
      .regex(/[0-9]/, "Password must include at least 1 number")
      .regex(/[a-z]/, "Password must include at least 1 lower-case character")
      .regex(/[A-Z]/, "Password must include at least 1 upper-case character"),
    sendEmail: z.boolean(),
    role: z.enum(["RO", "RW"], { invalid_type_error: "Invalid role" }),
    profilePicturePath: z.string().optional(),
    isAdmin: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

/**
 * Schéma pre validáciu údajov vytvorenia nového užívateľa
 */
export const LoginSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Prosím zadajte email",
    })
    .email({
      message: "Prosím zadajte email",
    }),
  password: z
    .string({
      invalid_type_error: "Prosím zadajte heslo",
    })
    .max(16, "Heslo nemôže presahovať 16 znakov")
    .min(6, "Heslo musí obsahovať aspoň 6 znakov"),
});

export const RichTextValidation = z.object({
  title: z.string().min(1, "Please enter a title"),
  description: z
    .string()
    .max(90, "Description is too long (max 90 characters).")
    .optional(),
  content: z.string().min(10, "Content is required (min 10 characters)."),
  folderId: z.string().optional(),
  owner: z.string().optional(),
});

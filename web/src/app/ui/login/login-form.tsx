"use client";
import { login } from "@/lib/user-actions";
import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Prosím zadajte platnú emailovú adresu")
    .max(255)
    .required("Prosím zadajte platnú emailovú adresu"),
  password: Yup.string()
    .min(6, "Heslo musí obsahovať aspoň 6 znakov")
    .required("Prosím zadajte heslo"),
});

export default function Login() {
  const formik = useFormik({
    validateOnBlur: true,
    initialValues: {
      email: "",
      password: "",
      submit: null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      setSubmitting(true);
      const res = await login(values);
      if (res) {
        setErrors({ submit: res });
      }
      setSubmitting(false);
    },
  });
  const {
    errors,
    touched,
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting,
  } = formik;

  /**Využité na fixnutie problému: Autofill nespúšťa onChange takže hodnoty sú prázdne aj ak sú doplnené pomocou autofill */
  useEffect(() => {
    const email = document.getElementsByName("email")[0] as HTMLInputElement;
    const password = document.getElementsByName(
      "password"
    )[0] as HTMLInputElement;

    if (email.value && password.value) {
      formik.setValues({
        email: email.value,
        password: password.value,
        submit: null,
      });
    }
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6 mt-5">
        <label htmlFor="email" className="p-2 font-bold">
          Email
        </label>
        <input
          value={values.email}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="w-full rounded-full p-3 mt-2 autofill:bg-none"
          autoComplete="username"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className="h-[15px]">
          {touched.email && errors.email && (
            <p className="p-2 font-bold text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
      </div>
      <div className="mb-10 mt-6">
        <label htmlFor="password" className="p-2 font-bold">
          Password
        </label>
        <input
          value={values.password}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="w-full rounded-full p-3 mt-2 autofill:bg-none"
          autoComplete="current-password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div className="h-[15px]">
          {touched.password && errors.password && (
            <p className="p-2 font-bold text-red-500 text-sm">
              {errors.password}
            </p>
          )}
        </div>
        <div className="h-[15px]">
          {errors.submit && (
            <p className="p-2 font-bold text-red-500 text-sm text-center">
              Nesprávne prihlasovacie údaje
            </p>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center mb-6">
        <button
          type="submit"
          className="bg-[#2b3a64] hover:bg-[#415897] font-black text-white w-1/2 py-2 rounded-full disabled:bg-[#919fc5]"
          disabled={isSubmitting}
        >
          Prihlásiť sa
        </button>
      </div>
    </form>
  );
}

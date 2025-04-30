"use client";

import { RegisterSchema } from "@/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import FormControl from "../common/Form/FormControl";
import Input from "../common/Form/Input";
import { Button } from "@/components/ui/button";
import { createUser } from "@/lib/user-actions";
import Helper from "@/components/common/Helper";

const SignUp: React.FC = () => {
  const formMethods = useForm<z.infer<typeof RegisterSchema>>({
    mode: "onBlur",
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      sendEmail: false,
      role: "RO",
      isAdmin: false,
      profilePicturePath: "",
    },
  });

  const { control, getValues, trigger } = formMethods;

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const isValid = await trigger();
    if (!isValid) return;

    try {
      await createUser(getValues());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...formMethods}>
      <div className="w-[90%] md:w-[30%] lg:w-[15%] py-5">
        <form>
          <div className="flex flex-col w-full">
            <FormControl title="Name" isRequired formularPath="name">
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    placeholder="John"
                    id="name"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </FormControl>
            <FormControl title="Last name" isRequired formularPath="lastName">
              <Controller
                control={control}
                name="lastName"
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    placeholder="Doe"
                    id="lastName"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                )}
              />
            </FormControl>
            <FormControl title="Email" isRequired formularPath="email">
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    placeholder="john.doe@example.com"
                    id="email"
                    value={value}
                    onChange={onChange}
                    autoComplete="email"
                    onBlur={onBlur}
                  />
                )}
              />
            </FormControl>
            <FormControl title="Password" isRequired formularPath="password">
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                    id="password"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    type="password"
                    autoComplete="new-password"
                  />
                )}
              />
            </FormControl>
            <FormControl
              title="Confirm password"
              isRequired
              formularPath="confirmPassword"
            >
              <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                    id="password"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    type="password"
                    autoComplete="new-password"
                  />
                )}
              />
            </FormControl>
            {/*             <Button
              onClick={handleSubmit}
              className="mt-3 w-full font-bold bg-foreground text-background capitalize text-md h-12 hover:bg-foreground/80 transition-colors duration-200"
            >
              Sign up
            </Button> */}
            <Helper>Register form is disabled</Helper>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default SignUp;

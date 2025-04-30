"use client";

import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas/schemas";
import FormControl from "../common/Form/FormControl";
import { Button } from "@/components/ui/button";
import { login } from "@/lib/user-actions";
import Input from "../common/Form/Input";

const SignIn: React.FC = () => {
  const formMethods = useForm({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "superadmin@example.com",
      password: "&;-)84%9ek-:PAx",
    },
  });

  const { control, getValues, trigger } = formMethods;

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!(await trigger())) console.log("error");

    const values = getValues();
    await login(values);
  };

  return (
    <FormProvider {...formMethods}>
      <div className="w-[90%] md:w-[30%] lg:w-[15%]">
        <form>
          <div className="flex flex-col w-full">
            <FormControl title="Email" isRequired formularPath="email">
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value, onBlur } }) => (
                  <Input
                    placeholder="Your email"
                    id="email"
                    value={value}
                    onChange={onChange}
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
                  />
                )}
              />
            </FormControl>
            <Button
              onClick={handleSubmit}
              className="mt-3 w-full font-bold bg-foreground text-background capitalize text-md h-12 hover:bg-foreground/80 transition-colors duration-200"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
};

export default SignIn;

"use client";
import { Controller, useFormContext } from "react-hook-form";

import { AdminCreateForm } from "@/schemas/account";
import React from "react";
import Flex from "./Flex";
import FormControl from "@/app/ui/common/Form/FormControl";
import { Input } from "../ui/input";
import { Eye } from "lucide-react";
import { EyeClosed } from "lucide-react";
import IconButton from "./IconButton";
import { createUser, updateUser } from "@/lib/user-actions";
import Toastify from "./Toastify";
import Collapse from "./Collapse";
import { useAuth } from "@/context/AuthContext";

type Props = {
  edit?: boolean;
  showSaveButton?: boolean;
  userId?: string;
};

const UserGeneralForm: React.FC<Props> = ({ edit, showSaveButton, userId }) => {
  const { user, mutate } = useAuth();
  const { control, trigger, getValues, reset } =
    useFormContext<AdminCreateForm>();
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let uploadedPicturePath = "";

    const isValid = await trigger();
    if (!isValid) return;

    const { profilePicture, ...validData } = getValues();

    try {
      if (profilePicture) {
        const filesFormData = new FormData();

        filesFormData.append(profilePicture.name, profilePicture);
        const response = await fetch("/api/file/upload", {
          method: "POST",
          body: filesFormData,
        });
        const data = await response.json();
        uploadedPicturePath = data?.filePath ?? undefined;
      }
      await createUser({
        ...validData,
        ...(uploadedPicturePath
          ? { profilePicturePath: uploadedPicturePath }
          : {}),
      });
      reset();
      Toastify.success({ label: "User created!" });
    } catch (error) {
      console.log(error);
      Toastify.error({ label: "A mysterious error has occurred!" });
    }
  };
  const handleUpdateUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let uploadedPicturePath = "";

    const isValid = await trigger();
    if (!isValid) return;

    const { profilePicture, ...validData } = getValues();

    try {
      if (profilePicture) {
        const filesFormData = new FormData();

        filesFormData.append(profilePicture.name, profilePicture);
        const response = await fetch("/api/file/upload", {
          method: "POST",
          body: filesFormData,
        });
        const data = await response.json();
        uploadedPicturePath = data?.filePath ?? undefined;
      }
      const response = await updateUser({
        id: userId ?? "",
        ...validData,
        ...(uploadedPicturePath
          ? { profilePicturePath: uploadedPicturePath }
          : {}),
      });

      if (user.id === userId) {
        mutate(response.user, false);
      }

      Toastify.success({ label: "User updated!" });
    } catch (error) {
      console.log(error);
      Toastify.error({ label: "A mysterious error has occurred!" });
    }
  };

  return (
    <Flex className="rounded-md shadow-md py-6 px-5 flex-col bg-card gap-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <FormControl title="First name" isRequired formularPath="name">
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
        </div>
        <div className="col-span-2 md:col-span-1">
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
        </div>
        <div className="col-span-2 md:col-span-1">
          <FormControl title="Email address" isRequired formularPath="email">
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value, onBlur } }) => (
                <Input
                  placeholder="john.doe@example.com"
                  id="email"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </FormControl>
        </div>
        <div className="col-span-2 md:col-span-1">
          <FormControl title="Password" isRequired formularPath="password">
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                  autoComplete="new-password"
                  rightAdornment={
                    <IconButton
                      variant="rounded"
                      className="p-1"
                      onClick={handleShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? (
                        <Eye size={20} />
                      ) : (
                        <EyeClosed size={20} />
                      )}
                    </IconButton>
                  }
                  id="email"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </FormControl>
        </div>
        <Flex className="col-span-2 w-full justify-end">
          {!edit ? (
            <button
              onClick={handleSubmit}
              className="bg-primary hover:bg-primary/80 px-3 py-1 rounded-full shadow-sm text-primary-foreground capitalize font-bold"
            >
              Create user
            </button>
          ) : (
            <Collapse open={showSaveButton ?? false}>
              <button
                onClick={handleUpdateUser}
                className="bg-primary hover:bg-primary/80 px-3 py-1 rounded-full shadow-sm text-primary-foreground capitalize font-bold"
              >
                Save changes
              </button>
            </Collapse>
          )}
        </Flex>
      </div>
    </Flex>
  );
};

export default UserGeneralForm;

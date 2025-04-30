"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import { AdminCreate, AdminEdit } from "@/schemas/account";

import { AdminCreateForm } from "@/schemas/account";

import { FormProvider, useForm } from "react-hook-form";
import { Role } from "@prisma/client";
import { useAuth } from "@/context/AuthContext";
import React from "react";
import UserGeneralForm from "@/components/common/UserGeneralForm";
import UserBasicInfoForm from "@/components/common/UserBasicInfoForm";

type Props = {};

const AccountForm: React.FC<Props> = () => {
  const form = useForm<AdminCreateForm>({
    mode: "onChange",
    resolver: zodResolver(AdminEdit),
    defaultValues: {
      email: "",
      fullName: "",
      name: "",
      lastName: "",
      isAdmin: false,
      password: "",
      role: Role.RW,
      profilePicture: null,
      profilePicturePath: "",
    },
  });

  const { reset, watch } = form;
  const { user } = useAuth();

  const formValues = watch();
  const password = watch("password");
  const profilePicture = watch("profilePicture");

  const changedFields = React.useMemo(
    () =>
      Object.entries(formValues)
        .filter(([key]) => key !== "password" && key !== "profilePicture")
        //@ts-expect-error Type missmatch intetentional
        .filter(([key, value]) => user?.[key] !== value)
        .map(([key]) => key),
    [formValues, user]
  );

  const showSaveButton = Boolean(
    changedFields.length !== 0 || password || profilePicture
  );

  React.useEffect(() => {
    if (user) reset(user);
  }, [user, reset]);

  return (
    <FormProvider {...form}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-3">
          <UserBasicInfoForm />
        </div>
        <div className="col-span-12 lg:col-span-9">
          <UserGeneralForm
            edit
            userId={user?.id}
            showSaveButton={showSaveButton}
          />
        </div>
      </div>
    </FormProvider>
  );
};

export default AccountForm;

"use client";
import { AdminCreateForm, AdminEdit } from "@/schemas/account";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Role, User } from "@prisma/client";
import React from "react";
import UserGeneralForm from "@/components/common/UserGeneralForm";
import UserBasicInfoForm from "@/components/common/UserBasicInfoForm";

type Props = {
  user: User;
};

const EditUser: React.FC<Props> = ({ user }) => {
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
  const formValues = watch();
  const password = watch("password");
  const profilePicture = watch("profilePicture");

  const changedFields = React.useMemo(
    () =>
      Object.entries(formValues)
        .filter(([key]) => key !== "password" && key !== "profilePicture")
        .filter(
          ([key, value]) =>
            user?.[key as keyof Omit<AdminCreateForm, "profilePicture">] !==
            value
        )
        .map(([key]) => key),
    [formValues, user]
  );

  const showSaveButton = Boolean(
    changedFields.length !== 0 || password || profilePicture
  );

  React.useEffect(() => {
    if (user) reset(user as unknown as AdminCreateForm);
  }, [user, reset]);

  return (
    <FormProvider {...form}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-3">
          <UserBasicInfoForm edit />
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

export default EditUser;

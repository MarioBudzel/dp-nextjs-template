"use client";
import UserBasicInfoForm from "@/components/common/UserBasicInfoForm";
import UserGeneralForm from "@/components/common/UserGeneralForm";
import { useGetAllUser } from "@/hooks/useUsers";
import { AdminCreate, AdminCreateForm } from "@/schemas/account";
import { zodResolver } from "@hookform/resolvers/zod";
import { Role } from "@prisma/client";
import { FormProvider, useForm } from "react-hook-form";

type Props = {};

const CreateForm: React.FC<Props> = () => {
  const form = useForm<AdminCreateForm>({
    mode: "onChange",
    resolver: zodResolver(AdminCreate),
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

  return (
    <FormProvider {...form}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-3">
          <UserBasicInfoForm create />
        </div>
        <div className="col-span-12 lg:col-span-9">
          <UserGeneralForm />
        </div>
      </div>
    </FormProvider>
  );
};

export default CreateForm;

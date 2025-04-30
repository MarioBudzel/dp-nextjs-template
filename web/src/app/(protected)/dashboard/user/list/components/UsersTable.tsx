"use client";
import BaseTable from "@/components/common/BaseTable";
import Flex from "@/components/common/Flex";
import IconButton from "@/components/common/IconButton";
import UserProfilePicture from "@/components/ui/UserProfilePicture";
import { useAuth } from "@/context/AuthContext";
import { getBaseURL } from "@/lib/utils";
import { User } from "@/types";
import { Role } from "@prisma/client";
import { Trash2 } from "lucide-react";
import { createColumnHelper, TableOptions } from "@tanstack/react-table";
import { Edit2 } from "lucide-react";
import { useRouter } from "next/navigation";
import RemoveUserButton from "@/components/common/UserCard/RemoveUserButton";
import AdminButtonWrapper from "@/components/common/Wrappers/AdminButtonWrapper";

type Props = { users: User[] | undefined };

const columnHelper = createColumnHelper<User>();

const UsersTable: React.FC<Props> = ({ users }) => {
  const { user } = useAuth();
  const router = useRouter();

  const columns: TableOptions<User>["columns"] = [
    columnHelper.display({
      id: "user-info",
      cell: (info) => {
        const original = info.row.original;
        const { profilePicturePath, name, lastName, fullName } = original;

        return (
          <Flex className="items-center gap-5">
            <UserProfilePicture
              size="small"
              imageUrl={
                profilePicturePath
                  ? `${getBaseURL()}/${profilePicturePath}`
                  : undefined
              }
            />
            <p className="font-bold text-md">
              {fullName || `${name} ${lastName}`}
            </p>
          </Flex>
        );
      },
      header: () => <p className="font-bold text-[16px]">User</p>,
    }),
    columnHelper.accessor("email", {
      header: () => <p className="font-bold text-[16px]">Contact</p>,
    }),
    columnHelper.display({
      id: "permission",
      cell: (info) => {
        const {
          row: { original },
        } = info;

        return (
          <Flex className="gap-2 items-center">
            {original.isAdmin ? (
              <p className="py-2 px-8 bg-destructive/10 font-bold shadow-lg rounded-full text-sm">
                Admin
              </p>
            ) : null}
            <p className="py-2 px-8 bg-primary/10 text-primary shadow-lg rounded-full font-bold text-sm">
              {original.role === Role.RO ? "Read-Only" : "Read-Write"}
            </p>
          </Flex>
        );
      },
      header: () => <p className="font-bold text-[16px]">Permissions/Roles</p>,
    }),
    columnHelper.display({
      id: "user-actions",
      cell: (info) => {
        const {
          row: { original },
        } = info;
        const disaleButtons = original.id === user.id;

        return (
          <AdminButtonWrapper>
            <Flex
              className="items-center justify-end"
              style={{ opacity: disaleButtons ? 0 : 1 }}
            >
              <IconButton
                variant="rounded"
                onClick={(event) => {
                  event.stopPropagation();
                  router.push(`/dashboard/user/edit/${original.id}`);
                }}
                disabled={disaleButtons}
              >
                <Edit2 size={16} className="text-cyan-400" />
              </IconButton>
              <RemoveUserButton
                fullName={
                  original?.fullName || `${original.name} ${original.lastName}`
                }
                userId={original.id}
                disableButtons={disaleButtons}
              />
            </Flex>
          </AdminButtonWrapper>
        );
      },
    }),
  ];

  const data: User[] =
    users?.map((user) => ({
      id: user.id,
      email: user.email,
      fullName: user.fullName,
      name: user.name,
      lastName: user.lastName,
      isAdmin: user.isAdmin,
      role: user.role,
      profilePicturePath: user.profilePicturePath,
    })) ?? [];
  return <BaseTable variant="rounded" dense columns={columns} data={data} />;
};

export default UsersTable;

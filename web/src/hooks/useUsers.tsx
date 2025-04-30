import useSWR from "swr";

export const allUsersFetcher = async (url: string) => {
  const res = await fetch(url, { next: { tags: ["Users"] } });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export const useGetAllUser = () => {
  const { data, error, mutate } = useSWR("/api/user/getAll", allUsersFetcher);

  return {
    users: data ?? [],
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export const useGetSingleUser = (userId: string) => {
  const { data, error, mutate } = useSWR(
    `/api/user/${userId}`,
    allUsersFetcher
  );

  return {
    users: data ?? undefined,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

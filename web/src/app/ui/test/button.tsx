import { createUser } from "@/lib/user-actions";

export default function ClientButton() {
  return (
    <form action={createUser}>
      <input type="hidden" name="name" value={"Name"} />
      <input type="hidden" name="lastName" value={"Last Name"} />
      <input type="hidden" name="email" value={"email@email.com"} />
      <input type="hidden" name="password" value={"Password1@"} />
      <input type="hidden" name="role" value={"RW"} />
      <button className="" type="submit">
        Add user
      </button>
    </form>
  );
}

import SignIn from "@/app/ui/login/SignIn.component";
import Link from "next/link";
import { User } from "lucide-react";

const SignInPage = () => {
  return (
    <>
      <div className="flex flex-col gap-y-3 items-center justify-center">
        <User size={80} className="text-foreground" />
        <p className="text-foreground text-4xl font-bold">Welcome back!</p>
        <p className="text-foreground/50 text-md">
          First time here?{" "}
          <span>
            <Link
              href="/auth/sign-up"
              className="text-foreground font-bold hover:text-foreground/80 transition-colors duration-200"
            >
              Sign up for free
            </Link>
          </span>
        </p>
      </div>

      <SignIn />
    </>
  );
};

export default SignInPage;

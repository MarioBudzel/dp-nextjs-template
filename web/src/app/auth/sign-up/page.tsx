import SignIn from "@/app/ui/login/SignIn.component";
import Link from "next/link";
import { User } from "lucide-react";
import SignUp from "@/app/ui/register/SignUp.component";

const SignUpPage = () => {
  return (
    <>
      <div className="flex flex-col gap-y-3 items-center justify-center">
        <User size={80} className="text-foreground" />
        <p className="text-foreground text-4xl font-bold">Welcome!</p>
        <p className="text-foreground/50 text-md">
          Already have an account?{" "}
          <span>
            <Link
              href="/auth/sign-in"
              className="text-foreground font-bold hover:text-foreground/80 transition-colors duration-200"
            >
              Sign in
            </Link>
          </span>
        </p>
      </div>
      <SignUp />
    </>
  );
};

export default SignUpPage;

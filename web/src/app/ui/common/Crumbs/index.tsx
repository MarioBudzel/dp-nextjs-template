import { ArrowLeft, ChevronLeft } from "lucide-react";
import Link from "next/link";
import react from "react";

type Props = {
  isBackOnly?: boolean;
  isHome?: boolean;
};

const Crumb: React.FC<Props> = ({ isBackOnly, isHome }) => {
  return (
    <div className="w-full py-5 px-10">
      <Link
        href={"/"}
        className="capitalize w-fit text-foreground/50 font-bold flex items-center gap-1 hover:text-foreground transition-all duration-200"
      >
        <ChevronLeft size={16} />
        {isHome ? "Home" : "Go back"}
      </Link>
    </div>
  );
};

export default Crumb;

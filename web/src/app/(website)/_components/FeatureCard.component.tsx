import { Card, CardContent } from "@/components/ui/card";
import react from "react";

type Props = {
  icon: React.ReactNode;
  title: string;
  children?: React.ReactNode;
  text?: string;
};

const FeatureCart: React.FC<Props> = ({ icon, title, children, text }) => {
  return (
    <Card className="md:min-h-[250px] md:max-w-[250px] flex-shrink bg-background/75">
      <CardContent className="p-2">
        <div className="flex flex-col p-2 w-full gap-y-5 justify-center items-center text-sm md:text-base">
          <div className="w-full flex justify-center">{icon}</div>
          <p className="font-bold text-primary text-base md:text-xl capitalize text-center">
            {title}
          </p>
          {children ? (
            children
          ) : (
            <p className="text-muted-foreground text-center">{text}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCart;

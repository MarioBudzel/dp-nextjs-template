import react from "react";

type Props = {};

const DocsFooter: React.FC<Props> = () => {
  return (
    <div className="">
      <p className="text-xl text-primary font-bold">Source code</p>
      <p className="text-muted-foreground">
        Didn&apos;t find what you were looking for? Check out the source code.
      </p>
    </div>
  );
};

export default DocsFooter;

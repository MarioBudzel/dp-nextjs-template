import React from "react";

const HydrationWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isHydrated, setIsHydrated] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return <></>;

  return <>{children}</>;
};

export default HydrationWrapper;

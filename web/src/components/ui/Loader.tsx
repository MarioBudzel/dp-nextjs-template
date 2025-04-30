import { cn } from "@/lib/utils";

type Props = {
  size?: number;
};

const Loader: React.FC<Props> = ({ size = 50 }) => {
  return (
    <div
      style={{
        maxHeight: `${size}px`,
        maxWidth: `${size}px`,
      }}
    >
      <div
        className={cn("rounded-full relative")}
        style={{
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div
          className="bg-primary/30 animate-loader-bounce"
          style={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );
};

export default Loader;

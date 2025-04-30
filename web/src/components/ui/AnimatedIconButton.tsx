import { IconButtonProps } from "@/types";
import IconButton from "../common/IconButton";
import { cn } from "@/lib/utils";

type TAnimationSpeed = "slow" | "medium" | "fast";
type TAnimationType = "bounce" | "rotate";

const BounceAnimationMap: Record<TAnimationSpeed, string> = {
  slow: "animate-bounceSlow",
  medium: "animate-bounceMedium",
  fast: "animate-bounceFast",
};

const RotateAnimationMap: Record<TAnimationSpeed, string> = {
  slow: "animate-rotateSlow",
  medium: "animate-rotateMedium",
  fast: "animate-rotateFast",
};

const AnimationMap = (
  animationType: TAnimationType,
  animationSpeed: TAnimationSpeed
) => {
  const map = {
    bounce: BounceAnimationMap,
    rotate: RotateAnimationMap,
  };

  return map[animationType][animationSpeed];
};

const BounceAnimationSpeed: Record<TAnimationSpeed, string> = {
  slow: "duration-[2000]",
  medium: "duration-[1500]",
  fast: "duration-[1000]",
};

const RotateAnimationSpeed = {
  slow: "duration-[10000]",
  medium: "duration-[5000]",
  fast: "duration-[2000]",
};

const DurationMap = (
  animationType: TAnimationType,
  animationSpeed: TAnimationSpeed
) => {
  const map = {
    bounce: BounceAnimationSpeed,
    rotate: RotateAnimationSpeed,
  };

  return map[animationType][animationSpeed];
};

const AnimatedIconButton: React.FC<
  { speed: TAnimationSpeed; animationType: "bounce" | "rotate" } & Omit<
    IconButtonProps,
    "variant"
  >
> = ({ speed, animationType, children, className, ...rest }) => {
  const animation = AnimationMap(animationType, speed);
  const animationDuration = DurationMap(animationType, speed);
  return (
    <IconButton
      variant="rounded"
      className={cn(animation, animationDuration, className)}
      {...rest}
    >
      {children}
    </IconButton>
  );
};

export default AnimatedIconButton;

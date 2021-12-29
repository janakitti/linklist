import { Color, Size } from "../utils/theme";

export interface IButtonProps {
  color: Color;
  size: Size;
}

const Loader: React.FC<IButtonProps> = ({ color, size }) => {
  let sizeClasses;
  switch (size) {
    case Size.md:
      sizeClasses = "h-2.5 w-2.5 ";
  }
  let colorClasses;
  switch (color) {
    case Color.white:
      colorClasses = "bg-white";
  }
  return (
    <div className="flex">
      <div
        className={`${sizeClasses} ${colorClasses} rounded-full mr-1 animate-bounce`}
      />
      <div
        className={`${sizeClasses} ${colorClasses} rounded-full mr-1 animate-bounce200`}
      />
      <div
        className={`${sizeClasses} ${colorClasses} rounded-full animate-bounce400`}
      />
    </div>
  );
};

export default Loader;

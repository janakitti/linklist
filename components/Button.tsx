import { Color, Size } from "../utils/theme";
import Loader from "./Loader";

export interface IButtonProps {
  color: string;
  onClick: () => void;
  isLoading?: boolean;
}

const Button: React.FC<IButtonProps> = ({ color, isLoading, children }) => {
  let buttonClasses;
  switch (color) {
    case Color.primary:
      buttonClasses =
        "py-2 px-4 my-2 h-10 flex items-center justify-center bg-primary hover:bg-primary-dark rounded-full";
  }
  return (
    <>
      {isLoading ? (
        <div className={buttonClasses}>
          <Loader color={Color.white} size={Size.md} />
        </div>
      ) : (
        <button className={buttonClasses}>
          <p className="text-white">{children}</p>
        </button>
      )}
    </>
  );
};

export default Button;

import { Color } from "../utils/theme";

export interface IButtonProps {
  color: string;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ color, children }) => {
  let buttonClasses;
  switch (color) {
    case Color.primary:
      buttonClasses =
        "py-2 px-4 my-2 h-10 flex items-center justify-center bg-primary hover:bg-primary-dark rounded-full";
  }
  return (
    <button className={buttonClasses}>
      <p className="text-white">{children}</p>
    </button>
  );
};

export default Button;

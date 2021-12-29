import { Color } from "../utils/theme";

export interface IButtonProps {
  color: Color;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ color, children }) => (
  <button className="py-2 px-4 my-2 bg-gold hover:bg-gold-dark rounded-full">
    <p className="text-white">{children}</p>
  </button>
);

export default Button;

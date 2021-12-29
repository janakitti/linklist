export interface IInputProps {
  type: string;
  name: string;
  placeholder?: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<IInputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  required,
}) => (
  <input
    className="py-2 px-4 my-2 bg-white rounded-full"
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required={required}
  />
);

export default Input;

import className from "classnames";
import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  ...rest
}) => {
  const classes = twMerge(
    className(rest.className, "flex items-center p-3 py-1.5 border m-2", {
      "bg-blue-500 border-blue-600 text-white": primary,
      "bg-gray-900 border-gray-900 text-white": secondary,
      "bg-green-500 border-green-500 text-white": success,
      "bg-yellow-400 border-yellow-400 text-white": warning,
      "bg-red-500 border-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white text-black": outline,
    })
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;

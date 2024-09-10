import { Button as ShadcnButton } from "../components/ui/button";

const Button = ({ children, ...props }) => (
  <ShadcnButton
    {...props}
    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
  >
    {children}
  </ShadcnButton>
);

export default Button;

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div className="bg-orange-500 font-bold text-white w-1/2 mx-auto mt-10 p-4 rounded">
      {children}
    </div>
  );
};

export default Alert;

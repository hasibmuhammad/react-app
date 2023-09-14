import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="w-1/2 mx-auto bg-green-500 mt-3 p-4 rounded text-white font-extrabold flex justify-between items-center">
      {children}
      <FontAwesomeIcon
        className="text-right cursor-pointer"
        icon={faXmark}
        onClick={onClose}
      />
    </div>
  );
};

export default Alert;

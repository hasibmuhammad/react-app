import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  message: string;
  onClose: () => void;
}
const Message = ({ message, onClose }: Props) => {
  return (
    <div className="w-1/2 mx-auto bg-green-500 my-4 rounded font-extrabold text-white p-4 flex justify-between">
      {message}
      <FontAwesomeIcon
        icon={faXmark}
        className="cursor-pointer"
        onClick={onClose}
      />
    </div>
  );
};

export default Message;

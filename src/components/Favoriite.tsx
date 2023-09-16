import { faHeart, faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  onClick: () => void;
  favorite: boolean;
}

const Favorite = ({ onClick, favorite }: Props) => {
  return (
    <div className="w-1/2 mx-auto mt-3">
      {!favorite && (
        <FontAwesomeIcon
          icon={faShieldHeart}
          className="text-5xl cursor-pointer"
          onClick={onClick}
        />
      )}
      {favorite && (
        <FontAwesomeIcon
          className="mt-3 text-red-600 text-5xl"
          icon={faHeart}
        />
      )}
    </div>
  );
};

export default Favorite;

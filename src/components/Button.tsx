interface Props {
  text: string;
  onClick: () => void;
}
const Button = ({ text, onClick }: Props) => {
  return (
    <div className="w-1/2 mx-auto">
      <button
        className="px-4 py-2 rounded text-white bg-orange-500 font-bold"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;

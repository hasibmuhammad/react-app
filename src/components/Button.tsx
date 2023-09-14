interface Props {
  children: string;
  onClick: () => void;
}
const Button = ({ children, onClick }: Props) => {
  return (
    <div className="w-1/2 mx-auto mt-4">
      <button
        className="px-4 py-2 rounded text-white bg-orange-500"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

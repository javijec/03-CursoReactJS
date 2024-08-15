const More = ({ increment }) => {
  return (
    <button
      onClick={increment}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
      +
    </button>
  );
};

export default More;

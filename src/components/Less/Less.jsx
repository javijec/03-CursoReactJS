/* eslint-disable react/prop-types */
const Less = ({ decrement }) => {
  return (
    <button
      onClick={decrement}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
      -
    </button>
  );
};

export default Less;

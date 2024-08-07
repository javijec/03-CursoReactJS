const AddItem = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 m-1"
    >
      Agregar
    </button>
  );
};

export default AddItem;

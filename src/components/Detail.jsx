/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Detail = ({ id }) => {
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 m-1">
          Detalles
        </button>
      </Link>
      <p>ID: {id}</p>
    </div>
  );
};

export default Detail;

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[160px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};
AlbumItem.propTypes = {
  image: PropTypes.string.isRequired, // Adjust this based on the type of 'image'
  name: PropTypes.string.isRequired, // Adjust this based on the type of 'image'
  desc: PropTypes.string.isRequired, // Adjust this based on the type of 'image'
  id: PropTypes.number.isRequired, // Adjust this based on the type of 'image'
};
export default AlbumItem;

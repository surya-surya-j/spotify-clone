import PropTypes from "prop-types";
import { useContext } from "react";
import { PlayerContext } from "../context/playerContext";

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);
  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[160px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};  

SongItem.propTypes = {
  image: PropTypes.string.isRequired, // Adjust this based on the type of 'image'
  name: PropTypes.string.isRequired, // Adjust this based on the type of 'image'
  desc: PropTypes.string.isRequired, // Adjust this based on the type of 'image'
  id: PropTypes.number.isRequired, // Adjust this based on the type of 'image'
};

export default SongItem;

import AlbumItem from "./AlbumItem";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <div>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Feautured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((songs, index) => (
            <SongItem
              key={index}
              name={songs.name}
              image={songs.image}
              desc={songs.desc}
              id={songs.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;

import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`} className="block group">
      <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden rounded-t-xl">
          <img
            src={appwriteService.getFileView(featuredImage)}
            alt={title}
            className="h-full object-contain transition-transform duration-300 group-hover:scale-105 shadow-md rounded"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;

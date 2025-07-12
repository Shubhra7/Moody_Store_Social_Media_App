import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };


return post ? (
  <div className="py-8">
    <Container>
      <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-xl overflow-hidden">
            <img
              src={appwriteService.getFileView(post.featuredImage)}
              alt={post.title}
              className="w-full h-auto max-h-[500px] object-contain transition-transform duration-300 hover:scale-105"
            />

            {isAuthor && (
              <div className="absolute top-4 right-4 flex space-x-2">
                <Link to={`/edit-post/${post.$id}`}>
                  <Button
                    bgColor="bg-green-600 hover:bg-green-700"
                    className="px-3 py-1 text-sm rounded-full shadow"
                  >
                    Edit
                  </Button>
                </Link>
                <Button
                  bgColor="bg-red-600 hover:bg-red-700"
                  className="px-3 py-1 text-sm rounded-full shadow"
                  onClick={deletePost}
                >
                  Delete
                </Button>
              </div>
            )}
      </div>


        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="text-base leading-relaxed space-y-4">{parse(post.content)}</div>
        </div>
      </div>
    </Container>
  </div>
) : null;

}


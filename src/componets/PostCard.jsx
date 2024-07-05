import React from "react";
import { Link } from 'react-router-dom';
import appwriteService from '../appwrite/config';
import parse from "html-react-parser";

function PostCard({ $id, title, featuredImage, author, date, time, content }) {
    // Assuming appwriteService.getFilePreview(featuredImage) retrieves the image URL correctly

    return (
        <Link to={`/post/${$id}`} className="block w-full">
            <div className="bg-gray-600 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
                <img
                    src={appwriteService.getFilePreview(featuredImage)}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-xl text-white font-bold mb-2">{title}</h2>
                    <div className="text-white">
                        Posted By:  {author}
                    </div>
                   
                    <div className="flex items-center mt-2">
                    <h2 className="text-base text-white">Posted on: {date}, {time} </h2>
                    </div>
                    <div className="mt-4">
                        <Link
                            to={`/post/${$id}`}
                            className="text-green-500 hover:underline"
                        >
                            Read more
                        </Link>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;

import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineComment } from "react-icons/md";

import { Link } from 'react-router-dom';
import appwriteService from '../appwrite/config';
import { FaCommentDots } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

function PostCard({ $id, title, featuredImage, author, date, time, content, like,comment }) {
    return (
        <Link to={`/post/${$id}`} className="block w-full">
            <div className="bg-gray-600 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 relative">
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
                <div className="absolute bottom-4 right-4 flex items-center">
                    <FcLike className="text-2xl text-red-600" />
                    <span className="text-white ml-1">{like.length}</span>
                     <FaCommentDots  className="text-1xl text-white ml-2" />
                    <span className="text-white ml-1">{comment.length}</span>
                    
                </div>

                
            </div>
        </Link>
    );
}

export default PostCard;

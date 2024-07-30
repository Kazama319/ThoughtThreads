import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa6";
import Comment from "../componets/comment";
import parse from "html-react-parser";
import { FcLike } from "react-icons/fc";
import ConfirmationModal from "../componets/modal"; // Import the modal component
import Modal2 from "../componets/Modal2"; // Import the modal component
export default function Post() {
    const [like, setLike] = useState(false);
    const [post, setPost] = useState(null);
    const [comment, setComment] = useState("");
    const [new1Comment, set1Comment] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false); // State for delete confirmation modal
    const [showEditModal, setShowEditModal] = useState(false); // State for edit confirmation modal
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const { slug } = useParams();
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    if (!Array.isArray(post.like)) {
                        post.like = [];
                    }
                    setPost(post);
                    set1Comment(post.comment);
                    if (post.like.includes(userData.$id)) {
                        setLike(true);
                    }
                } else {
                    navigate("/");
                }
            });
        }
    }, [slug, navigate, userData.$id]);

    const deleteComment = async (commentId) => {
        try {
            await appwriteService.deletecommment(commentId);
            console.log("Comment deleted");
            set1Comment((prevComments) => prevComments.filter((id) => id !== commentId));
            setPost((prevPost) => ({
                ...prevPost,
                comment: prevPost.comment.filter((id) => id !== commentId),
            }));
        } catch (error) {
            console.log("Error deleting comment:", error);
        }
    };

    const likePost = () => {
        if (!like) {
            setLike(true);
            const updatedLikes = [...post.like, userData.$id];
            appwriteService.updatePost(post.$id, {
                ...post,
                like: updatedLikes,
            }).then(updatedPost => {
                setPost(updatedPost);
            });
        } else {
            const updatedLikes = post.like.filter((id) => id !== userData.$id);
            setLike(false);
            appwriteService.updatePost(post.$id, {
                ...post,
                like: updatedLikes,
            }).then(updatedPost => {
                setPost(updatedPost);
            });
        }
    };

    const confirmDeletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/My-post");
            }
        });
        setShowDeleteModal(false); // Hide the modal after deletion
    };

    const confirmEditPost = () => {
        // Handle the edit confirmation logic here
        setShowEditModal(false); // Hide the modal after confirmation
        navigate(`/edit-post/${post.$id}`); // Navigate to the edit page
    };

    const createComment = () => {
        if (comment) {
            try {
                appwriteService.createcomment({
                    content: comment,
                    userid: userData.$id,
                    username: userData.name,
                }).then((newComment) => {
                    if (newComment && newComment.$id) {
                        const updatedComments = [...post.comment, newComment.$id];
                        set1Comment(updatedComments);
                        appwriteService.updatePost(post.$id, {
                            ...post,
                            comment: updatedComments,
                        }).then((updatedPost) => {
                            setPost(updatedPost);
                            setComment(""); // Clear the comment input here
                        });
                    } else {
                        console.error('Error: newComment does not have a valid $id');
                    }
                });
            } catch (error) {
                console.log("Appwrite service :: createComment :: error", error);
            }
        }
    };

    return (
        <>
            {post ? (
                <div className="py-4 bg-rgb(40 120 108 / var(--tw-bg-opacity)); h-auto w-auto">
                    <div className="max-w-5xl mx-auto bg-gray-300 rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="w-full object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-3xl text-gray-800 font-bold mb-2">{post.title}</h2>
                            <p className="text-gray-600 mb-4">{post.date}, {post.time}</p>
                            <div className="mb-4">
                                <div className="flex items-center">
                                    {like ? (
                                        <FcLike
                                            className="cursor-pointer text-2xl"
                                            onClick={likePost}
                                        />
                                    ) : (
                                        <FaRegHeart
                                            className="cursor-pointer text-2xl"
                                            onClick={likePost}
                                        />
                                    )}
                                    <span className="text-gray-600 text-lg ml-2">{post.like.length} {post.like.length === 1 ? 'Like' : 'Likes'}</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-800 text-lg">{parse(post.content)}</p>
                            </div>
                            <div className="mt-4">
                                <textarea
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    className="w-full p-2 border rounded-lg"
                                    placeholder="Add a comment"
                                />
                                <button
                                    onClick={createComment}
                                    className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
                                >
                                    Comment
                                </button>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-gray-800 text-lg font-bold mb-2">Comments</h3>
                                {new1Comment && new1Comment.slice().reverse().map((commentId) => (
                                    <Comment key={commentId} commentId={commentId} deleteComment={deleteComment} />
                                ))}
                            </div>
                        </div>
                        {isAuthor && (
                            <div className="absolute right-6 top-28 flex space-x-3">
                                <button
                                    className="bg-green-800 text-white px-3 py-2 rounded hover:bg-green-600 transition duration-200"
                                    onClick={() => setShowEditModal(true)} // Show the edit modal
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-600 text-white px-3 py-2 rounded hover:bg-red-600 transition duration-200"
                                    onClick={() => setShowDeleteModal(true)} // Show the delete modal
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            ) : null}

            {/* Render the delete confirmation modal */}
            <ConfirmationModal
                show={showDeleteModal}
                onClose={() => setShowDeleteModal(false)} // Hide the modal
                onConfirm={confirmDeletePost} // Confirm deletion
                message="Are you sure you want to delete this post?" // Confirmation message
            />

            {/* Render the edit confirmation modal */}
            <Modal2
                show={showEditModal}
                onClose={() => setShowEditModal(false)} // Hide the modal
                onConfirm={confirmEditPost} // Confirm editing
                message="Are you sure you want to edit this post?" // Confirmation message
            />
        </>
    );
}

import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Modal} from "react-bootstrap";
import {Button} from "../componets/index.js"

const Comment = ({ commentId, deleteComment }) => {
    const userData = useSelector((state) => state.auth.userData);
    const [comment, setComment] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchComment = async () => {
            try {
                const fetchedComment = await appwriteService.getComment(commentId);
                setComment(fetchedComment);
                console.log("Comment", fetchedComment);
            } catch (error) {
                console.log("Error fetching comment:", error);
            }
        };

        fetchComment();
    }, [commentId]);

    const handleDelete = () => {
        setShowModal(false);
        deleteComment(commentId);
    };

    return (
        comment ? (
            <div className="bg-white shadow-sm p-4 my-2 rounded-lg flex items-center justify-between max-w-full">
                <div>
                    <p className="text-gray-700 font-bold">{comment.username}</p>
                    <p className="text-gray-600">{comment.content}</p>
                </div>
                {comment.userid === userData.$id && (
                    <button onClick={() => setShowModal(true)} className="text-red-500 hover:text-red-700">
                        <FaTrashAlt className="text-xl" />
                    </button>
                )}
                
                {/* Confirmation Modal */}
                <Modal  show={showModal} onHide={() => setShowModal(false)} className="black-modal">
                    <Modal.Header closeButton className="bg-gray-300">
                        <Modal.Title>Confirm Deletion</Modal.Title>
                    </Modal.Header >
                    <Modal.Body >
                        Are you sure you want to delete this comment?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="transition-transform duration-300 transform hover:scale-105 hover:bg-blue-800" onClick={() => setShowModal(false)}>
    Cancel
</Button>

                        <Button  className="bg-red-500 transition-transform duration-300 transform hover:scale-105 hover:bg-red-700"  onClick={handleDelete}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        ) : null
    );
};

export default Comment;

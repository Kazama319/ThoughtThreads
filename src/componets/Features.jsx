import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../componets"; // Replace with your actual components

const FeaturesPage = () => {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <main className="py-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-8 text-blue-400">Features</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gray-800 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-950">
                                <h2 className="text-2xl font-bold mb-4 text-blue-400">Reading and Gaining Insights</h2>
                                <p className="text-lg mb-4">
                                Read other blog posts to gain insights and expand your knowledge on various topics.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-950">
                                <h2 className="text-2xl font-bold mb-4 text-blue-400">User Authentication</h2>
                                <p className="text-lg mb-4">
                                    Secure user authentication system allows users to sign up, log in, and manage their profiles securely.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-950">
                                <h2 className="text-2xl font-bold mb-4 text-blue-400">Content Management</h2>
                                <p className="text-lg mb-4">
                                    Easily create, edit, and delete blog posts with a user-friendly content management interface.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6 shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-blue-950">
                                <h2 className="text-2xl font-bold mb-4 text-blue-400">Real-time Editor</h2>
                                <p className="text-lg mb-4">
                                Apply custom styles to your content using our real-time editor.
                                </p>
                            </div>
                        </div>
                        <div className="mt-12">
                            <Link to="/" className="block mx-auto w-max">
                                <Button
                                    bgColor="bg-blue-300"
                                    textColor="text-black"
                                    className="transition-transform duration-300 transform hover:scale-105 hover:bg-blue-800"
                                >
                                    Go Back to Home
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </main>
        </div>
    );
};

export default FeaturesPage;

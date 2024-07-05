import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../componets"; // Replace with your actual components

const FeaturesPage = () => {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <main className="py-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-8">Features</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                                <h2 className="text-2xl font-bold mb-4">Feature 1: Responsive Design</h2>
                                <p className="text-lg mb-4">
                                    The blog application is designed to be fully responsive, ensuring a seamless experience on all devices.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                                <h2 className="text-2xl font-bold mb-4">Feature 2: User Authentication</h2>
                                <p className="text-lg mb-4">
                                    Secure user authentication system allows users to sign up, log in, and manage their profiles securely.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                                <h2 className="text-2xl font-bold mb-4">Feature 3: Content Management</h2>
                                <p className="text-lg mb-4">
                                    Easily create, edit, and delete blog posts with a user-friendly content management interface.
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                                <h2 className="text-2xl font-bold mb-4">Feature 4: Social Sharing</h2>
                                <p className="text-lg mb-4">
                                    Share your blog posts on social media platforms with built-in social sharing capabilities.
                                </p>
                            </div>
                        </div>
                        <div className="mt-12">
                            <Link to="/" className="block mx-auto w-max">
                                <Button
                                    bgColor="bg-gray-600"
                                    textColor="text-white"
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

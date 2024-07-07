import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Logo } from "../componets"; // Replace with your actual components

function Home() {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            {/* Main content section */}
            <main className="py-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-6 animate-fade-in">
                            Welcome to Thought Threads
                        </h1>
                        <p className="text-lg mb-8">
                            Explore insightful articles and stories. Join our community
                            today!
                        </p>
                        <div className="flex justify-center space-x-4">
                            <Link to="/login">
                                <Button bgColor="bg-indigo-600" textColor="text-white" className="transition-transform duration-300 transform hover:scale-105 hover:bg-indigo-700">
                                    Login
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button bgColor="bg-green-600" textColor="text-white" className="transition-transform duration-300 transform hover:scale-105 hover:bg-green-700">
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </main>

            {/* Additional content or sections */}
            <section className="py-16 bg-gray-800">
                <Container>
                    <div className="text-center text-white">
                        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                        <p className="text-lg mb-8">
                            Discover why thousands of writers and readers love using
                            our platform.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <Link to="/features">
                                <Button bgColor="bg-blue-600" textColor="text-white" className="transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700">
                                    Features
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button bgColor="bg-red-500" textColor="text-white" className="transition-transform duration-300 transform hover:scale-105 hover:bg-red-600">
                                    About
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
            <div className="mt-8 flex justify-center">
    <Link to="/contact">
        <Button bgColor="bg-purple-600" textColor="text-white" className="transition-transform duration-300 transform hover:scale-105 hover:bg-purple-700">
            Give Us Feedback
        </Button>
    </Link>
</div>

            
        </div>
    );
}

export default Home;

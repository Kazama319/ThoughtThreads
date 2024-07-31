import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Logo } from "../componets"; // Replace with your actual components

function Home2() {
    const texts = [
        "Explore insightful articles and stories. Join our community today!",
        "Connect, share, and grow with us!",
        "Discover new perspectives, ignite your creativity"
    ];
    const [currentText, setCurrentText] = useState('');
    const [index, setIndex] = useState(0);
    const [count, setCount] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingEffect = () => {
            const text = texts[count];
            
            if (!isDeleting) {
                setCurrentText(text.slice(0, index + 1));
                setIndex(index + 1);

                if (index === text.length) {
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1500); // Pause at the end of the line
                }
            } else {
                setCurrentText(text.slice(0, index - 1));
                setIndex(index - 1);

                if (index === 0) {
                    setIsDeleting(false);
                    setCount((count + 1) % texts.length);
                }
            }
        };

        const typingTimeout = setTimeout(typingEffect, isDeleting ? 75 : 100);
        return () => clearTimeout(typingTimeout);
    }, [index, count, isDeleting, texts]);

    return (
        <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center">
            {/* Main content section */}
            <main className="py-20 flex-1 w-full">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-8 animate-fade-in tracking-wide">
                            Welcome to Thought Threads
                        </h1>
                        <p className="text-lg mb-10 text-pink-500 leading-relaxed">
                            <span>{currentText}</span>
                            <span className="border-r-2 border-white"></span>
                        </p>
                        <div className="flex justify-center space-x-6">
                            <Link to="/login">
                                <Button
                                    bgColor="bg-indigo-600"
                                    textColor="text-white"
                                    className="transition duration-300 transform hover:scale-105 hover:bg-indigo-700 shadow-lg rounded-lg px-6 py-3"
                                >
                                    Login
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button
                                    bgColor="bg-green-600"
                                    textColor="text-white"
                                    className="transition duration-300 transform hover:scale-105 hover:bg-green-700 shadow-lg rounded-lg px-6 py-3"
                                >
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </main>

            {/* Additional content or sections */}
            <section className="py-20 bg-gray-300 bg-opacity-5 text-white w-full">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
                        <p className="text-lg mb-10 leading-relaxed">
                            Discover why thousands of writers and readers love using our platform.
                        </p>
                        <div className="flex justify-center space-x-6">
                            <Link to="/features">
                                <Button
                                    bgColor="bg-blue-600"
                                    textColor="text-white"
                                    className="transition duration-300 transform hover:scale-105 hover:bg-blue-700 shadow-lg rounded-lg px-6 py-3"
                                >
                                    Features
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button
                                    bgColor="bg-red-500"
                                    textColor="text-white"
                                    className="transition duration-300 transform hover:scale-105 hover:bg-red-600 shadow-lg rounded-lg px-6 py-3"
                                >
                                    About
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Feedback Button */}
            <div className="py-10 flex justify-center w-full bg-gray-900">
                <Link to="/contact">
                    <Button
                        bgColor="bg-purple-600"
                        textColor="text-white"
                        className="transition duration-300 transform hover:scale-105 hover:bg-purple-700 shadow-lg rounded-lg px-6 py-3"
                    >
                        Give Us Feedback
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Home2;

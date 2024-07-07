import React from "react";
import { Container, Button } from "./index";
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <main className="py-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-8">About</h1>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-blue-400">About the Blog Application</h2>
                            <p className="text-lg mb-4 text-justify">
                                Our blog application is designed to empower users to share their thoughts, experiences, and expertise through well-crafted blog posts. It provides a user-friendly interface for managing content, ensuring seamless interaction and engagement with readers.
                            </p>
                            <p className="text-lg mb-4 text-justify">
                                Whether you're a seasoned writer, a hobbyist blogger, or someone looking to start sharing your ideas online, our application offers the tools you need to create, edit, and share compelling content.
                            </p>
                        </div>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-blue-400">About Me</h2>
                            <p className="text-lg mb-4 text-justify">
                                My name is Bhanu Pratap, and I'm currently pursuing Computer Science at Delhi Technological University (formerly Delhi College of Engineering). As a pre-final year student, I have a passion for technology and web development.
                            </p>
                            <p className="text-lg mb-4 text-justify">
                                This blog application is a culmination of my interest in creating meaningful and impactful software solutions. I believe in the power of blogging to share knowledge, connect with others, and contribute to the online community.
                            </p>
                        </div>
                        
                        <div className="mt-6 flex justify-center">
    <div className="max-w-3xl w-full">
        <h3 className="text-xl font-bold mb-2 text-blue-400">Get in Touch</h3>
        <ul className="flex justify-center space-x-4">
            <li>
                <a href="https://www.instagram.com/bhanu__91/" className="flex items-center text-indigo-400 hover:text-indigo-300">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
                        <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#fd5"></stop>
                            <stop offset=".328" stop-color="#ff543f"></stop>
                            <stop offset=".348" stop-color="#fc5245"></stop>
                            <stop offset=".504" stop-color="#e64771"></stop>
                            <stop offset=".643" stop-color="#d53e91"></stop>
                            <stop offset=".761" stop-color="#cc39a4"></stop>
                            <stop offset=".841" stop-color="#c837ab"></stop>
                        </radialGradient>
                        <path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                        <radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#4168c9"></stop>
                            <stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop>
                        </radialGradient>
                        <path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"></path>
                        <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path>
                        <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                        <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                    </svg>
                    Instagram
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/bhanu-pratap-594649147/" className="flex items-center text-indigo-400 hover:text-indigo-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" className="mr-2">
                        <path fill="#0078D4" d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM9.5 18H7V10h2.5v8zm-1.25-9.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM18 18h-2.5v-4.75c0-1.281-.656-2.25-1.938-2.25s-2.188.969-2.188 2.25V18H9V10h2.375v1.188c.625-.969 1.75-1.812 3.625-1.812 2.625 0 4.625 1.75 4.625 5.25V18z"/>
                    </svg>
                    LinkedIn
                </a>
            </li>
            <li>
                <a href="https://github.com/Kazama319" className="flex items-center text-indigo-400 hover:text-indigo-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" className="mr-2">
                        <path fill="#000000" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.491.5.091.682-.217.682-.482 0-.238-.009-.866-.014-1.7-2.782.603-3.37-1.338-3.37-1.338-.455-1.155-1.112-1.463-1.112-1.463-.908-.62.069-.606.069-.606 1.004.072 1.531 1.032 1.531 1.032.891 1.528 2.342 1.087 2.913.831.091-.644.35-1.085.636-1.334-2.22-.252-4.555-1.113-4.555-4.943 0-1.092.39-1.984 1.032-2.683-.104-.252-.448-1.268.099-2.644 0 0 .84-.268 2.75 1.025.8-.223 1.656-.334 2.506-.337.85.003 1.706.114 2.506.337 1.909-1.293 2.747-1.025 2.747-1.025.549 1.376.204 2.392.1 2.644.642.7 1.03 1.591 1.03 2.683 0 3.839-2.339 4.688-4.567 4.936.36.309.678.919.678 1.853 0 1.337-.012 2.414-.012 2.74 0 .267.18.578.688.48A10.007 10.007 0 0022 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                    GitHub
                </a>
            </li>
            {/* Add more links as needed */}
        </ul>
    </div>
    
</div>
<br/>
                        <Link to='/'>
                            <Button
                                bgColor="bg-gray-600"
                                textColor="text-white"
                                className="transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700"
                            >
                                Go Back to Home
                            </Button>
                        </Link>

                    </div>
                </Container>
            </main>
        </div>
    );
};

export default AboutPage;

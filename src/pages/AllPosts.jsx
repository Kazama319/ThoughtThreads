import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../componets'; // Ensure the path is correct
import appwriteService from '../appwrite/config';
import { useSelector } from 'react-redux';
import { Query } from 'appwrite';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('title');
    const userdata = useSelector((state) => state.auth.userData);

    useEffect(() => {
        appwriteService.getPosts([Query.equal("status", "active")]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    const filteredPosts = posts.filter(post => {
        if (searchType === 'title') {
            return post.title.toLowerCase().includes(searchQuery.toLowerCase());
        } else if (searchType === 'author') {
            return post.author.toLowerCase().includes(searchQuery.toLowerCase());
        } else if (searchType === 'date') {
            return post.date.includes(searchQuery);
        }
        return false;
    });

    return (
        <div className='w-full min-h-screen py-8 bg-gradient-to-br from-[#02AABD] to-[#00CDAC]'>
            <Container>
                <div className="flex items-center mb-4 bg-black rounded-full p-2 max-w-lg mx-auto shadow-lg hover:shadow-violet-700 transition-shadow duration-300 ease-in-out">
                    <svg className="h-5 w-5 text-white ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                   <input 
    type="text" 
    placeholder={`Search posts by ${searchType}...`} 
    value={searchQuery} 
    onChange={(e) => setSearchQuery(e.target.value)} 
    className="bg-black text-white placeholder-gray-400 outline-none flex-grow px-4 py-2 rounded-full shadow-lg"
/>

                   <select 
    value={searchType} 
    onChange={(e) => setSearchType(e.target.value)} 
    className="bg-black text-white outline-none p-2 rounded-full cursor-pointer shadow-lg hover:shadow-violet-500 transition-shadow duration-300 ease-in-out"
>
    <option value="title">Title</option>
    <option value="author">Author</option>
    <option value="date">Date</option>
</select>

                </div>
                <div className='flex flex-wrap -m-2'>
                    {filteredPosts && filteredPosts.map((post) => (
                        <div key={post.$id} className='p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                    
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;

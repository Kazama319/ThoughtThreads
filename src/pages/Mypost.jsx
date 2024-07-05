import React, { useState, useEffect } from 'react';
import { Container, PostCard } from '../componets';
import appwriteService from '../appwrite/config';
import { useSelector } from 'react-redux';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const userdata = useSelector((state) => state.auth.userData);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    return (
        <div className='w-full min-h-screen py-8 bg-gradient-to-br from-[#02AABD] to-[#00CDAC]'>
            <Container>
                <div className='flex flex-wrap -m-2'>
                    {posts.map((post) => {
                        // Conditionally render PostCard only if post.userId matches userData.$id
                        if (post.userId === userdata.$id) {
                            return (
                                <div key={post.$id} className='p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
                                    <PostCard {...post} />
                                </div>
                            );
                        } else {
                            return null; // Or handle a different scenario if needed
                        }
                    })}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;

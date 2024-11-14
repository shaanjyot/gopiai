// src/components/PostGrid.tsx
"use client";
import React, { useRef, useState } from 'react';
import './PostGrid.css';
import Image from 'next/image';
import PostCard from '@/components/posts/post-card';
// import { Post } from "@/lib/wordpress.d";

interface Post {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

interface PostGridProps {
  posts: Post[];
}

const PostCardItem: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="post-card">
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={400}         // Specify width
        height={300}        // Specify height
        layout="responsive" // Make the image responsive
        objectFit="cover"   // Crop the image to fit the container
        className="rounded-md"
      />
      <h3 className="post-title">{post.title}</h3>
      <p className="post-content">{post.content}</p>
    </div>
  );
};

const PostGrid: React.FC<PostGridProps> = ({ posts }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
    setIsScrollable(containerRef.current.scrollWidth > containerRef.current.clientWidth);
      const scrollAmount = direction === 'left' ? -300 : 300;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="post-grid-container">
      <button
        className="scroll-arrow left-arrow"
        onClick={() => handleScroll('left')}
        aria-label="Scroll left"
      >
        &lt;
      </button>

      <div
        className="post-grid"
        ref={containerRef}
        onScroll={() => {handleScroll('left');}}
      >
        {posts.map((post) => (
          <div key={post.id} className="post-card">
        <div className="post-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <Image src={post.imageUrl} alt={post.title} className="post-image" />
            <h3 className="post-title">{post.title}</h3>
            <p className="post-content">{post.content}</p> */}
<PostCardItem key={post.id} post={post} />
          </div>
          </div>
        ))}
      </div>

      <button
        className="scroll-arrow right-arrow"
        onClick={() => handleScroll('right')}
        aria-label="Scroll right"
      >
        &gt;
      </button>
    </div>
  );
};

export default PostGrid;

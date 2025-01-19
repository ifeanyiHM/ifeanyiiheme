"use client";
import { ReactNode, createContext, useEffect, useState } from "react";

import {
  BlogContextProps,
  BlogPostProps,
  defaultBlogProps,
} from "../Data/BlogsProps";

interface BlogProviderProps {
  children: ReactNode;
}

const BlogContext = createContext<BlogContextProps>(defaultBlogProps);

function BlogProvider({ children }: BlogProviderProps) {
  const [blogs, setBlogs] = useState<BlogPostProps[]>([]);
  const [displayShareIcon, setDisplayShareIcon] = useState(false);

  const fetchBlogs = async () => {
    try {
      const url = `/api/getAllBlogs`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Something went wrong with fetching blogs");

      const data = await res.json();
      console.log(data.data.data);
      setBlogs(data.data.data);
    } catch (err) {
      // setError((err as Error).message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider
      value={{ blogs, fetchBlogs, displayShareIcon, setDisplayShareIcon }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export { BlogProvider, BlogContext };

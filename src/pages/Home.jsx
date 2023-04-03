import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import useBlogCalls from "../hooks/useBlogCalls";
import PostCard from "../components/blog/PostCard";
import Grid from "@mui/material/Grid";
import { flex } from "../styles/globalStyles";
import { useEffect } from "react";

export default function Home() {
    const { blogs } = useSelector((state) => state.blog);
    const { getBlogsData } = useBlogCalls();

    useEffect(() => {
        getBlogsData();
    }, []); // eslint-disable-line

    return (
        <div>
            <Navbar />
            {/* TODO: BLOG POSTS */}
            <Grid container sx={flex}>
                {blogs?.map((blog) => {
                    return (
                        <Grid item key={blog.id}>
                            <PostCard blog={blog} />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

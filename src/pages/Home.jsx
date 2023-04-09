import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import BlogCard from "../components/blog/BlogCard";
import Grid from "@mui/material/Grid";
import { flex } from "../styles/globalStyles";
import { useEffect } from "react";

export default function Home() {
    const { blogs } = useSelector((state) => state.blog);
    const { getBlogsData } = useBlogCalls();

    useEffect(() => {
        getBlogsData("blogs");
    }, []); // eslint-disable-line

    return (
        <div>
            {/* <Navbar /> */}
            {/* TODO: BLOG POSTS */}
            <Grid container sx={flex} mb={8}>
                {blogs?.map((blog) => {
                    return (
                        <Grid item key={blog.id}>
                            <BlogCard blog={blog} />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

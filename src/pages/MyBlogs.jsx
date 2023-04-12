import { useEffect } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import BlogCard from "../components/blog/BlogCard";
import Grid from "@mui/material/Grid";
import { flex } from "../styles/globalStyles";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function MyBlogs() {
    const { getBlogsData } = useBlogCalls();
    const currentUser = useSelector((state) => state.auth.currentUser);

    useEffect(() => {
        getBlogsData("blogs", currentUser.id);
    }, []); //eslint-disable-line

    const blogs = useSelector((state) => state.blog.blogs);

    // console.log(blogs);
    return (
        <div>
            {blogs?.length > 0 ? (
                <Grid container sx={flex} mb={8}>
                    {blogs?.map((blog) => {
                        return (
                            <Grid item key={blog.id}>
                                <BlogCard blog={blog} />
                            </Grid>
                        );
                    })}
                </Grid>
            ) : (
                <Grid container sx={flex} mb={8}>
                    <Typography variant="body1" sx={{ fontSize: 20 }}>
                        Nothing to show. Create{" "}
                        <Link to="/newblog">a new blog ➚</Link>
                    </Typography>
                </Grid>
            )}
        </div>
    );
}

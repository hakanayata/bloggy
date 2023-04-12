import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import BlogCard from "../components/blog/BlogCard";
import Grid from "@mui/material/Grid";
import { flex } from "../styles/globalStyles";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function Home() {
    const blogs = useSelector((state) => state.blog.blogs);
    const { getBlogsData } = useBlogCalls();

    useEffect(() => {
        getBlogsData("blogs");
    }, []); // eslint-disable-line

    return (
        <div>
            {blogs?.length > 0 ? (
                <Grid container sx={flex} mb={8}>
                    {[...blogs]
                        ?.sort(
                            (b1, b2) =>
                                new Date(b2.publish_date) -
                                new Date(b1.publish_date)
                        )
                        ?.map((blog) => {
                            return (
                                <Grid item key={blog.id}>
                                    <BlogCard blog={blog} />
                                </Grid>
                            );
                        })}
                </Grid>
            ) : (
                <Grid container sx={flex} mb={8}>
                    <Typography>
                        Nothing to show. Create
                        <Link to="/newblog">a new blog ➚</Link>
                    </Typography>
                </Grid>
            )}
        </div>
    );
}

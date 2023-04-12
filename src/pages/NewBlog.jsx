import { Formik } from "formik";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NewBlogForm, { newBlogSchema } from "../components/blog/NewBlogForm";
import useBlogCalls from "../hooks/useBlogCalls";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
    const navigate = useNavigate();
    const { postBlogData } = useBlogCalls();
    return (
        <Container maxWidth="lg">
            <Grid
                container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    heigh: "100vh",
                    p: 2,
                    mb: 8,
                }}
            >
                <Typography
                    variant="h2"
                    component="h3"
                    align="center"
                    sx={{ marginBottom: "1rem" }}
                >
                    New Blog
                </Typography>
                <Formik
                    initialValues={{
                        title: "",
                        content: "",
                        image: "",
                        category: "",
                        status: "",
                    }}
                    validationSchema={newBlogSchema}
                    component={(props) => <NewBlogForm {...props} />}
                    onSubmit={(values, actions) => {
                        postBlogData("blogs", values);
                        // console.log(actions);
                        actions.resetForm();
                        actions.setSubmitting();
                        navigate("/");
                    }}
                ></Formik>
            </Grid>
        </Container>
    );
};

export default NewBlog;

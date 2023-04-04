import { Formik } from "formik";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NewBlogForm, { newBlogSchema } from "../components/blog/NewBlogForm";
import useBlogCalls from "../hooks/useBlogCalls";

// HDD: https://cdn.pixabay.com/photo/2023/03/27/07/59/hdd-7880077_1280.jpg

const NewBlog = () => {
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
                        status: "p",
                    }}
                    validationSchema={newBlogSchema}
                    component={(props) => <NewBlogForm {...props} />}
                    onSubmit={(values, actions) => {
                        postBlogData("blogs", values);
                        // console.log(actions);
                        actions.resetForm();
                        actions.setSubmitting();
                    }}
                ></Formik>
            </Grid>
        </Container>
    );
};

export default NewBlog;

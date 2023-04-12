import { Formik } from "formik";
import LoginForm, { loginSchema } from "../components/auth/LoginForm";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import useAuthCalls from "../hooks/useAuthCalls";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Login() {
    const { login } = useAuthCalls();

    const referrer = document.referrer;
    const thisURL = document.URL;
    // const loc = document.location;
    console.log(referrer, thisURL);

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
                    Login
                </Typography>
                <Formik
                    initialValues={{
                        username: "",
                        first_name: "",
                        last_name: "",
                        email: "",
                        image: "",
                        bio: "",
                        password: "",
                        password2: "",
                    }}
                    validationSchema={loginSchema}
                    component={(props) => <LoginForm {...props} />}
                    onSubmit={(values, actions) => {
                        login(values, referrer);
                        // console.log(actions);
                        actions.resetForm();
                        actions.setSubmitting(false);
                    }}
                ></Formik>
                <Box
                    sx={{
                        marginTop: 2,
                    }}
                >
                    <Typography variant="small">
                        Don't have an account?{" "}
                    </Typography>
                    <Link to="/register">Sign up now ➚</Link>
                </Box>
            </Grid>
        </Container>
    );
}

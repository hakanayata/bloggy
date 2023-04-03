import { Formik } from "formik";
import RegisterForm, { registerSchema } from "../components/auth/RegisterForm";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import useAuthCalls from "../hooks/useAuthCalls";

const Register = () => {
    const { register } = useAuthCalls();
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
                    Sign Up
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
                    validationSchema={registerSchema}
                    component={(props) => <RegisterForm {...props} />}
                    onSubmit={(values, actions) => {
                        register(values);
                        // console.log(actions);
                        actions.resetForm();
                        actions.setSubmitting();
                    }}
                ></Formik>
            </Grid>
        </Container>
    );
};

export default Register;

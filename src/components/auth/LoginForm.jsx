import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import { object, string } from "yup";

export const loginSchema = object({
    email: string().email().required(),
    password: string()
        .required()
        .min(8, "Password must contain at least 8 characters")
        .max(16, "Password cannot be longer than 16 characters")
        .matches(/\d+/, "Password must contain a number")
        .matches(/[a-z]/, "Password must contain at least one lowercase")
        .matches(/[A-Z]/, "Password must contain at least one uppercase")
        .matches(
            /[!,?{}<>%&#+-.]/,
            "Password must contain at least on special character"
        ),
});

const LoginForm = ({ values, handleBlur, handleChange, touched, errors }) => {
    return (
        <div>
            <Form>
                <Box
                    sx={{
                        width: "300px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                    }}
                >
                    <TextField
                        label="Email"
                        name="email"
                        id="email"
                        type="email"
                        variant="outlined"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                    />
                    <TextField
                        label="Password"
                        name="password"
                        id="password"
                        type="password"
                        variant="outlined"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                    />
                    <Button type="submit" variant="contained" size="large">
                        Sign In
                    </Button>
                </Box>
            </Form>
        </div>
    );
};

export default LoginForm;

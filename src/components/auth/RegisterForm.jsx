import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import { object, ref, string } from "yup";

export const registerSchema = object({
    username: string().max(16).required("Must provide a username!"),
    // first_name: string().max(124),
    // last_name: string().max(124),
    email: string().email().required("Must provide an email!"),
    // image: string(),
    // bio: string(),
    password: string()
        .required("Must provide a password!")
        .min(8, "Password must contain at least 8 characters")
        .max(16, "Password cannot be longer than 16 characters")
        .matches(/\d+/, "Password must contain a number")
        .matches(/[a-z]/, "Password must contain at least one lowercase")
        .matches(/[A-Z]/, "Password must contain at least one uppercase")
        .matches(
            /[!,?{}<>%&#+-.]/,
            "Password must contain at least on special character"
        ),
    password2: string().oneOf([ref("password"), null], "Passwords must match"),
});

const RegisterForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
}) => {
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
                        label="Username"
                        name="username"
                        id="username"
                        type="text"
                        variant="outlined"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.username && !!errors.username}
                        helperText={touched.username && errors.username}
                        autoFocus
                    />
                    {/* <TextField
                        label="First Name"
                        name="first_name"
                        id="firstName"
                        type="text"
                        variant="outlined"
                        value={values.first_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.first_name && !!errors.first_name}
                        helperText={touched.first_name && errors.first_name}
                    />
                    <TextField
                        label="Last Name"
                        name="last_name"
                        id="lastName"
                        type="text"
                        variant="outlined"
                        value={values.last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.last_name && !!errors.last_name}
                        helperText={touched.last_name && errors.last_name}
                    /> */}
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
                    {/* <TextField
                        label="Image URL"
                        name="image"
                        id="image"
                        type="url"
                        variant="outlined"
                        value={values.image}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.image && !!errors.image}
                        helperText={touched.image && errors.image}
                    />
                    <TextField
                        label="Bio"
                        name="bio"
                        id="bio"
                        type="text"
                        variant="outlined"
                        value={values.bio}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.bio && !!errors.bio}
                        helperText={touched.bio && errors.bio}
                    /> */}
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
                    <TextField
                        label="Password (again)"
                        name="password2"
                        id="password2"
                        type="password"
                        variant="outlined"
                        value={values.password2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password2 && !!errors.password2}
                        helperText={touched.password2 && errors.password2}
                    />
                    <Button type="submit" variant="contained" size="large">
                        Sign Up
                    </Button>
                </Box>
            </Form>
        </div>
    );
};

export default RegisterForm;

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Form } from "formik";
import { object, string, number } from "yup";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { TextareaAutosize } from "@mui/material";

export const newBlogSchema = object({
    title: string().required("Must provide a title!"),
    content: string()
        .max(1024)
        .min(10, "Content must be at least 10 characters!")
        .required("Must provide a content!"),
    image: string()
        .max(400, "Image URL cannot be longer than 400 characters!")
        .required("Must provide an image!"),
    category: number().required("Must provide a category!"),
    status: string().required("Must provide a status!"),
});

const NewBlogForm = ({ values, errors, touched, handleChange, handleBlur }) => {
    const { getBlogsData } = useBlogCalls();
    const categories = useSelector((state) => state.blog.categories);
    const status = [
        {
            id: 1,
            value: "d",
            type: "Draft",
        },
        {
            id: 2,
            value: "p",
            type: "Published",
        },
    ];

    useEffect(() => {
        getBlogsData("categories");
    }, []); // eslint-disable-line

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
                        label="Title"
                        name="title"
                        id="title"
                        type="text"
                        variant="outlined"
                        value={values.title}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.title && !!errors.title}
                        helperText={touched.title && errors.title}
                    />
                    <TextField
                        label="Image URL"
                        name="image"
                        id="image"
                        type="string"
                        variant="outlined"
                        value={values.image}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.image && !!errors.image}
                        helperText={touched.image && errors.image}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            Category
                        </InputLabel>
                        <Select
                            labelId="category"
                            id="category"
                            name="category"
                            value={values.category}
                            label="Category"
                            onChange={handleChange}
                        >
                            {categories?.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            Status
                        </InputLabel>
                        <Select
                            labelId="status"
                            id="status"
                            name="status"
                            value={values.status}
                            label="Status"
                            onChange={handleChange}
                        >
                            {status?.map((item) => (
                                <MenuItem key={item.id} value={item.value}>
                                    {item.type}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Content"
                        name="content"
                        id="content"
                        type="text"
                        variant="outlined"
                        multiline
                        InputProps={{
                            inputComponent: TextareaAutosize,
                            inputProps: {
                                style: {
                                    resize: "auto",
                                },
                            },
                        }}
                        value={values.content}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.content && !!errors.content}
                        helperText={touched.content && errors.content}
                    />
                    {/* <TextareaAutosize
                        aria-label="minimum height"
                        minRows={5}
                        placeholder="Enter content..."
                        style={{
                            width: "300px",
                            border: "1px solid #ccc",
                            borderRadius: "6px",
                            padding: "12px",
                            fontFamily: "Roboto, sans-serif",
                            fontSize: "16px",
                        }}
                        label="Content"
                        name="content"
                        id="content"
                        value={values.content}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    /> */}
                    <Button type="submit" variant="contained" size="large">
                        Post
                    </Button>
                </Box>
            </Form>
        </div>
    );
};

export default NewBlogForm;

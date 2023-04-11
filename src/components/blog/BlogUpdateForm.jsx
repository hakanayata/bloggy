import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Form } from "formik";
import { useSelector } from "react-redux";
import { TextareaAutosize } from "@mui/material";

export default function BlogUpdateForm({
    values,
    errors,
    handleBlur,
    handleChange,
    touched,
}) {
    const categories = useSelector((state) => state.blog.categories);
    const status = [
        {
            id: 1,
            value: "d",
            name: "Draft",
        },
        {
            id: 2,
            value: "p",
            name: "Published",
        },
    ];

    return (
        <Form>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: { xs: 330, sm: 580, md: 760 },
                }}
            >
                <TextField
                    label="Title"
                    name="title"
                    id="title"
                    type="text"
                    variant="outlined"
                    required
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
                    type="url"
                    variant="outlined"
                    required
                    value={values.image}
                    onChange={handleChange}
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
                                {item.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {/* 
                <TextareaAutosize
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
                /> */}
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
                    sx={{
                        maxHeight: 400,
                        overflow: "scroll",
                    }}
                    value={values.content}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.content && !!errors.content}
                    helperText={touched.content && errors.content}
                />

                <Button type="submit" variant="contained" color="secondary">
                    Update
                </Button>
            </Box>
        </Form>
    );
}

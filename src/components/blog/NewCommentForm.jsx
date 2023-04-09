import { Form } from "formik";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";

export default function NewCommentForm({
    values,
    handleChange,
    touched,
    errors,
    handleBlur,
}) {
    console.log(values);
    return (
        <Form>
            <TextField
                label="Comment"
                name="comment"
                id="comment"
                type="text"
                variant="outlined"
                color="secondary"
                multiline
                fullWidth
                InputProps={{
                    inputComponent: TextareaAutosize,
                    inputProps: {
                        style: {
                            resize: "auto",
                        },
                    },
                }}
                sx={
                    {
                        // maxHeight: 100,
                        // overflow breaks label layout
                        // overflow: "auto",
                    }
                }
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.comment && !!errors.comment}
                helperText={touched.comment && errors.comment}
            />
            <Button
                type="submit"
                variant="outlined"
                color="secondary"
                fullWidth
                sx={{ my: 1 }}
            >
                Send
            </Button>
        </Form>
    );
}

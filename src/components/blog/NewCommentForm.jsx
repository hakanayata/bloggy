import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useBlogCalls from "../../hooks/useBlogCalls";

export default function NewCommentForm() {
    const [comment, setComment] = useState("");
    const { postComment } = useBlogCalls();
    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        postComment(id, { post: id, content: comment });
    };

    return (
        <form onSubmit={handleSubmit}>
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
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                // sx={
                //     {
                //         // maxHeight: 100,
                //         // overflow breaks label layout
                //         // overflow: "auto",
                //     }
                // }
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
        </form>
    );
}

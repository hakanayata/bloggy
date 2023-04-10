import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";
import NewCommentForm from "./NewCommentForm";
import { blue } from "@mui/material/colors";

export default function CommentCard() {
    const details = useSelector((state) => state.blog.details);

    // console.log(details);
    return (
        <div>
            <Box component="div" sx={{ mt: 3 }}>
                <NewCommentForm />
            </Box>
            {details?.comments?.length > 0 && (
                <Box component="div">
                    {details?.comments?.map((comment) => {
                        return (
                            <Box
                                key={comment.id}
                                sx={{
                                    mt: 2,
                                    px: 3,
                                    py: 1,
                                    boxShadow: 1,
                                    borderRadius: "35px",
                                    backgroundColor: blue[50],
                                }}
                            >
                                <Typography>{comment.content}</Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Typography variant="body2" color="primary">
                                        {comment.user}
                                    </Typography>
                                    <Typography variant="body2" color="primary">
                                        {new Date(
                                            comment.time_stamp
                                        ).toLocaleDateString()}
                                    </Typography>
                                </Box>
                                <Divider />
                            </Box>
                        );
                    })}
                </Box>
            )}
        </div>
    );
}

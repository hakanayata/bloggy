import { useParams } from "react-router-dom";
import useBlogCalls from "../hooks/useBlogCalls";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Details() {
    const { id } = useParams();
    const { details } = useSelector((state) => state.blog);
    const { getBlogsDetails } = useBlogCalls();

    useEffect(() => {
        getBlogsDetails("blogs", id);
    }, []); // eslint-disable-line

    // console.log(details);

    return <div>{JSON.stringify(details, null, 2)}</div>;
}

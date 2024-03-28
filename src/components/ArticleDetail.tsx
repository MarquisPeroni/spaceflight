import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import Details from "./Details";

interface ArticleObject {
    summary: string
    id: number
    imageUrl: string
    title: string
}
const ArticleDetails = () => {
    const [articleDetails, setArticleDetails] = useState<null | ArticleObject>(
        null
    );
    const navigate = useNavigate();
    const location = useLocation();
    let userId = location.state.id;

    useEffect(() => {
        fetchArticleDetails();
    }, );
    const fetchArticleDetails = async () => {
        try {
        const response = await fetch(
            `https://api.spaceflightnewsapi.net/v4/articles/?format=api${userId}`
        );
        if (response.ok) {
            const data = await response.json();
            console.log("data:", data);
            setArticleDetails(data);
        } else {
            console.log("server error");
        }
        } catch (error) {
        console.log("error:", error);
        }
    };

    return (
        <div>
        {articleDetails && <Details details={articleDetails} />}
        <Button variant="primary" onClick={() => navigate("/")}>
            Go Back
        </Button>
        </div>
    );
};
export default ArticleDetails;

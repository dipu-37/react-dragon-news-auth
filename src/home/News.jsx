import { useParams } from "react-router-dom";

const News = () => {
    const {id}=useParams();
    return (
        <div>
            This is news 
            {id}
        </div>
    );
};

export default News;
import React from 'react'
import { useParams } from 'react-router-dom'
import useAPI from '../CustomHooks/useAPI';
import { NEWS_DETAILS_API } from '../Utils/constant';
import CommentContainer from '../Components/CommentContainer';
import CommentShimmer from '../Utils/Slices/CommentShimmer';
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';

const NewsDetails = () => {
  
  const { id } = useParams();
  const { responseData, isLoading, error } = useAPI(NEWS_DETAILS_API + id);

  return isLoading ? (
    <CommentShimmer />
  ) : (
    <div className="mx-auto min-h-screen w-11/12 max-w-4xl border bg-[#F1EFEF] px-5 py-5">
      <Link to="/">
        <BsArrowLeft style={{ marginBottom: "16", fontSize: "24" }} />
      </Link>
      <CommentContainer comment={responseData} />
    </div>
  );
}

export default NewsDetails
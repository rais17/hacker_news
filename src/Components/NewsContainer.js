import React from 'react'
import NewsCard from './NewsCard'
import { useSelector } from 'react-redux'
import useAPI from '../CustomHooks/useAPI'
import { API_URL } from '../Utils/constant'
import Shimmer from '../Utils/Shimmer'
import { Link } from "react-router-dom";

const NewsContainer = () => {

    const query = useSelector(store => store.news.query)
    const { responseData, isLoading, error } = useAPI(API_URL+query);

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap justify-center gap-4">
      {responseData.hits &&
        responseData.hits.map((newsItem) => {
          return (
            <Link className='w-[calc(50%-16px)]' to={`/details/${newsItem.objectID}`} key={newsItem.objectID}>
              <NewsCard {...newsItem} />
            </Link>
          );
        })}
    </div>
  );
}

export default NewsContainer
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import {
  AiFillLike,
  AiOutlineLike,
  AiFillDislike,
  AiOutlineDislike,
} from "react-icons/ai";
import { movieObject } from "../../hooks/useFetch/interface";
import { useParams } from "react-router-dom";

interface Props {
  data: movieObject;
}
const RatingAndLikes = ({ data }: Props) => {
  const initialCount = data.vote_count 
  const [countLikes, setCountLikes] = useState<number>(data.vote_count);
  const [like, setLike] = useState<boolean>(false);
  const [dislike, setDisLike] = useState<boolean>(false);
  const [movies, setMovies] = useState<any[]>([])
  const {id} = useParams();

  
  useEffect(() => {
    const dataLike = localStorage.getItem("likes")
    if(dataLike){
      setMovies([JSON.parse(dataLike)]) 
      
    }
    reSelectBtns()
  }, [])
  
 
  const handleLike = () => {
    setLike(!like);
    if (!like) {
      setCountLikes(countLikes + 1);
      setDisLike(false)
      localStorage.setItem("likes", JSON.stringify([...movies,{dataId:data.id, liked:true, noliked:dislike, count:countLikes + 1}]))
    } else {
      setCountLikes(initialCount);
      localStorage.setItem("likes", JSON.stringify([...movies,{dataId:data.id, liked:false, noliked:dislike, count:countLikes - 1}]))
    }

  };

  const handleDisLike = () => {
    setDisLike(!dislike)
    if(!dislike){
      setCountLikes(initialCount)
      setLike(false)
      localStorage.setItem("likes", JSON.stringify([...movies,{dataId:data.id, liked:false, noliked:true, count:initialCount}]))
    }else{
      localStorage.setItem("likes", JSON.stringify([...movies,{dataId:data.id, liked:false, noliked:false, count:initialCount}]))
    }
  }

  const reSelectBtns = () => {
    const dataLike:any = localStorage.getItem("likes")
    const storedBtns = JSON.parse(dataLike);
    if (storedBtns) {
      //localStorage.setItem("likes", JSON.stringify([...movies, storedBtns]))
      localStorage.setItem("likes", JSON.stringify(storedBtns))
      setMovies(storedBtns)
    }
  };

  const filterResults = () => {
    if(movies.length > 0){
      movies.filter(item => {
        if(item.dataId.toString() === id){
          console.log(item)
          setLike(item.liked)
          setDisLike(item.noliked)
          setCountLikes(item.count)
        }
      })
    }
  }
  useEffect(() => {
    filterResults()
  },[filterResults])
  
  return (
    <>
      <div className="container-rating">
        <div className="container-icon-star">
          <FaStar className="star" />
        </div>
        <p>{data.vote_average}</p>
      </div>

      <div className="container-rating-buttons">
        <div className="container-icon-likes" onClick={handleLike}>
          {like ? (
          
            <AiFillLike className="btn-likes" />
          ) : (
            <AiOutlineLike className="btn-likes" />
          )}
        </div>
        <span className="like-count">{countLikes}</span>
        <div className="container-icon-dislikes" onClick={handleDisLike}>
          {dislike ? (
            <AiFillDislike className="btn-likes" />
          ) : (
            <AiOutlineDislike className="btn-likes" />
          )}
        </div>
      </div>
    </>
  );
};

export default RatingAndLikes;
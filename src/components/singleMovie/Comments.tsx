import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { movieObject } from "../../hooks/useFetch/interface";

type textAreaChangeEvent = ChangeEvent<HTMLTextAreaElement>;
type SubmitEvents = FormEvent<HTMLFormElement>;

interface Props{
  data: movieObject
}

const Comments = ({data}: Props) => {
  const [comments, setComments] = useState<string>("");
  const [message, setMessage] = useState <string[]>([]);

  const handleChangeComments = (e: textAreaChangeEvent) =>
    setComments(e.target.value);

    useEffect(() => {
      let dataMessage = localStorage.getItem("movieComments")
      if(dataMessage){
        setMessage(JSON.parse(dataMessage))
      }
  }, [])
  
    useEffect(() => {
      localStorage.setItem("movieComments", JSON.stringify(message))
    }, [message])

  const findID = message.find(item => item.substring(0,6) === data.id.toString() && item)

  const handleSubmitComments = (e: SubmitEvents) => {
    e.preventDefault();
    setMessage([...message, data.id.toString()+comments]);
    setComments("");
  };

  return (
    <div className="container-comments">
      <div className="container-form">
        <h2>Comments</h2>
        <form onSubmit={handleSubmitComments} className="form-comments">
          <textarea
            placeholder="Leave us your comment"
            className="textarea"
            value={comments}
            onChange={handleChangeComments}
          ></textarea>
          <button type="submit" className="button-comments">Send</button>
        </form>
        {message.length > 0 ? message.map((item,index) => findID?.substring(0,6) === item.substring(0,6) && <p key={index}>{item.slice(6)}</p>) : <p>No comments</p> }
       
      </div>
    </div>
  );
};

export default Comments;

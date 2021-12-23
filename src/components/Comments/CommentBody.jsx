import React, { useContext, useEffect, useState } from "react";
import { FormControl, InputGroup, Button, Card } from "react-bootstrap";
import { timeSince } from "../../helpers/calcTimeLeft";
import { commentsContext } from "../../contexts/CommentContext";
import { useParams } from "react-router";
import { authContext } from "../../contexts/authContext";
import Likes from "../Likes/Likes";

const CommentBody = ({ item, doctor }) => {
    const params = useParams()
    const {user} = useContext(authContext)
  const {
    addComments,
    getCommentsForRoom,
    commentToEdit,
    getCommentToEdit,
    saveEditedComment,
    deleteComment,
    comments,
  } = useContext(commentsContext);
  const [comment, setComment] = useState("");
  function handleChange(e) {
    //   console.log(true)
    setComment(e.target.value);
  }
  function handleDelete(com) {
    deleteComment(com);
  }
  useEffect(() => {
    getCommentsForRoom(params.id);
  }, []);
  
  let commenting;
  const [bool, setBool] = useState(false);
  const [editComm, setEditComm] = useState("");
  function handleChangeEdit(e) {
    setEditComm(e.target.value);
  }
  function saveComment(item) {
    let ed = { ...item, text: editComm };

    saveEditedComment(ed, item.id);
    setBool(false);
  }

  commenting = (
    <>
      <InputGroup className="mb-3 createComment">
        <FormControl
          rows={2}
          as="textarea"
          placeholder="Оставить комментаррий"
          maxLength="140"
          onChange={handleChangeEdit}
          value={editComm}
        />
      </InputGroup>
      <Button onClick={() => saveComment(item)}>Сохранить</Button>
    </>
  );
  function handleEdit(item) {
    setBool(true);
    getCommentToEdit(item.id);
  }
  return (
    <Card className="mt-2" style={{width: '50%', textAlign: 'center', color: 'white', fontSize: '15px'}}>
      <Card.Header>
        <span style={{ fontWeight: "bold", color: "#979797", marginTop: '2px' }}>
          {item.owner}
        </span>{" "}
        <span>
          {" "}
          {item.createdAt.slice(0, 10)}, {timeSince(item.createdAtMs)} назад{" "}
        </span>
      </Card.Header>
      <Card.Body style={{color: '#e2dace', marginTop: '2px'}}>
        <Card.Title>{bool ? commenting : item.text}</Card.Title>
        {user.email === item.owner ? (
          <>
            <small
              onClick={() => handleDelete(item)}
              style={{ color: "red", cursor: "pointer", fontSize: '13px' }}
            >
              Удалить
            </small>
            <small
              onClick={() => {
                handleEdit(item);
                setEditComm(item.text);
              }}
              style={{
                marginLeft: "5px",
                color: "#7CFC00",
                cursor: "pointer",
                fontSize: '13px'
              }}
            >
              Изменить
            </small>
          </>
        ) : (
          <></>
        )}
      </Card.Body>
    </Card>
  );
};

export default CommentBody;
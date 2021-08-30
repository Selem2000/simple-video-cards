import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import "./modal.css";

function getModalStyle() {
  return {
    transform: `translate(${100}%, ${40}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function SimpleModal({ addNewMovie }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [movie, setMovie] = useState({
    name: "",
    date: "",
    type: "",
    image: "",
    rating: 0,
    description: "",
  });
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setMovie({ ...movie, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="enter year"
          onChange={(e) => setMovie({ ...movie, date: e.target.value })}
        />
        <select onChange={(e) => setMovie({ ...movie, type: e.target.value })}>
          <option value="action">action</option>
          <option value="romance">romance</option>
          <option value="comedy">comedy</option>
        </select>
        <input
          type="text"
          placeholder="Url"
          onChange={(e) => setMovie({ ...movie, image: e.target.value })}
        />
        <input
          type="number"
          placeholder="rating"
          onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="discription"
          onChange={(e) => setMovie({ ...movie, description: e.target.value })}
        ></textarea>
        <button
          onClick={(e) => {
            addNewMovie(movie);
            e.preventDefault();
            handleClose();
          }}
        >
          add movie
        </button>
      </form>
    </div>
  );

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        marginTop: "10%",
        alignItems: "center",
      }}
    >
      <button type="button" id="modal" onClick={handleOpen}>
        +
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default SimpleModal;

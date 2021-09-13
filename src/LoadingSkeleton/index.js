import React from "react";
import ContentLoader from "react-content-loader";
import "./LoadingSkeleton.css";

function LoadingSkeleton(props) {
  return (
    <li className="item">
      <span
        className={`${
          props.completed ? "fas fa-undo todo-undo" : "check fas fa-check"
        }`}
        onClick={props.onComplete}
      ></span>
      <p className="loading_description">
        <ContentLoader className="content_loader"
        speed={1}
        width={130}
        height={20}
        viewBox="0 0 130 20"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <circle cx="20" cy="10" r="10" />
        <circle cx="50" cy="10" r="10" />
        <circle cx="80" cy="10" r="10" />
      </ContentLoader>
      </p>
      <span
        className={"delete-todo fas fa-trash"}
        onClick={props.onDelete}
      ></span>
    </li>
  );
}

export { LoadingSkeleton };

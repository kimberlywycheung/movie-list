import React from 'react';

const View = (props) => {

  const handleWatch = () => {
    props.setWatchedView(!props.watchedView);
  };

  return (
      <div className="toggle">
        <button
          className="view"
          id="Watched"
          tag={props.watchedView ? "selected" : ""}
          onClick={handleWatch}>
          Watched
        </button>
        <button
          className="view"
          id="To Watch"
          tag={props.currentView ? "selected" : ""}
          onClick={handleWatch}>
          To Watch
        </button>
      </div>
  );
};

export default View;
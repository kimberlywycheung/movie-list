import React from 'react';

const View = (props) => {

  const handleWatch = () => {
    if (props.currentView !== "Watched") {
      props.setCurrentView("Watched");
    }
  };

  const handleToWatch = () => {
    if (props.currentView !== "To Watch") {
      props.setCurrentView("To Watch");
    }
  };

  return (
      <div id="toggle">
        <button
          className="view"
          id="Watched"
          tag={props.currentView === "Watched" ? "selected" : ""}
          onClick={handleWatch}>
          Watched
        </button>
        <button
          className="view"
          id="To Watch"
          tag={props.currentView === "To Watch" ? "selected" : ""}
          onClick={handleToWatch}>
          To Watch
        </button>
      </div>
  );
};

export default View;
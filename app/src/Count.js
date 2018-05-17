import React from "react";
import { connect } from "react-redux";

const Count = props => {
  const { theCounterIsAt } = props;
  return (
    <div>
      <h2>Count FTW</h2>
      <p>The counter is at {theCounterIsAt} yo</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    theCounterIsAt: state.counter
  };
};

export default connect(mapStateToProps)(Count);

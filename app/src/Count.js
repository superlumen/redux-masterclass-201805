import React from "react";
import { connect } from "react-redux";

import { inc } from "./actions";

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

const mapDispatchToProps = dispatch => {
  return {
    putTheNumberUp: () => dispatch(inc())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);

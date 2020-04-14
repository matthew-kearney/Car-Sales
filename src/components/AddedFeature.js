import React from "react";
import { removeFeature } from '../actions/featuresActions';
import { connect } from 'react-redux';
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        className="button"
        onClick={() =>
          props.removeFeature({ id: props.id, price: props.feature.price })
        }
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
  }
}

export default connect(
  mapStateToProps,
  { removeFeature }
)(AddedFeature);

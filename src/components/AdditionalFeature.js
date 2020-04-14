import React from 'react';
import { addFeature } from '../actions/featuresActions';
import { connect } from 'react-redux';
const AdditionalFeature = props => {
  const handleClick = e =>{
    // e.preventDefault();
    props.addFeature(e);

  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"
      onClick = {()=>handleClick(props.feature.id)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapStateToProps = state => {
  return {
  }
}

export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeature);

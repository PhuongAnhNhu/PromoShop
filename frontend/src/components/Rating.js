import React, { Component } from "react";
import PropTypes from 'prop-types'


export class Rating extends Component {
  render() {
    let value = this.props.value;
    let text = this.props.text;
    let color = this.props.color;
    return (
      <span className="rating">
        <span>
          <i style={{color}}
            className={
              value >= 1
                ? "fa fa-star"
                : value >= 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i style={{color}}
            className={
              value >= 2
                ? "fa fa-star"
                : value >= 1.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i style={{color}}
            className={
              value >= 3
                ? "fa fa-star"
                : value >= 2.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i style={{color}}
            className={
              value >= 4
                ? "fa fa-star"
                : value >= 3.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i style={{color}}
            className={
              value >= 5
                ? "fa fa-star"
                : value >= 4.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>{text && text}</span>
      </span>
    );
  }
}
Rating.defaultProps = {
    color: '#f8e825',
}
Rating.propType = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default Rating;

import React from "react";
import * as R from "ramda";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function HexButton({
  className,
  onClick,
  url,
  text,
  target,
  ariaControls,
  ariaHaspopup,
  hexRef,
  children,
  ...other
}) {
  if (R.isNil(url)) {
    return (
      <a className={`HexButton ${className}`} onClick={onClick} {...other}>
        {children}
        {text}
      </a>
    );
  }

  if (target) {
    return (
      <a
        href={url}
        target={target}
        rel="noopener noreferrer"
        className={`HexButton ${className}`}
        onClick={onClick}
        {...other}
      >
        {text}
      </a>
    );
  }
  return (
    <Link
      to={url}
      ref={hexRef}
      target={target}
      aria-controls={ariaControls}
      aria-haspopup={ariaHaspopup}
      className={`HexButton ${className}`}
      onClick={onClick}
      autoFocus
      {...other}
    >
      {children}
      {text}
    </Link>
  );
}
HexButton.propTypes = {
  hexRef: PropTypes.object,
  ariaControls: PropTypes.string,
  ariaHaspopup: PropTypes.string,
  className: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  url: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.element,
};
export default HexButton;

import React from "react";
import Loader from 'react-loader-spinner'
export default function Spinner({ classes, type, color, height, width, timeout, visible }) {
  return <Loader className={classes} type={type} color={color} height={height} width={width} timeout={timeout} visible={visible} />;
}

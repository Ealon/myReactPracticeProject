import React from 'react';
import PropTypes from 'prop-types';

const color = '#1976D2';
const duration = 0.9;
const size = 30;

/* eslint-disable arrow-parens */
export const Loader = (props) => (
  <svg width={props.size ? props.size : size} height={props.size ? props.size : size} viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" fill={props.color ? props.color : color} >
    <rect y="10" width="15" height="120" rx="6">
      <animate
        attributeName="height"
        begin={props.duration ? props.duration : duration / 2}
        dur={props.duration ? props.duration : duration}
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin={props.duration ? props.duration : duration / 2}
        dur={props.duration ? props.duration : duration}
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="30" y="10" width="15" height="120" rx="6">
      <animate
        attributeName="height"
        begin={props.duration ? props.duration : duration / 4}
        dur={props.duration ? props.duration : duration}
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite" />
      <animate
        attributeName="y"
        begin={props.duration ? props.duration : duration / 4}
        dur={props.duration ? props.duration : duration}
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="60" width="15" height="140" rx="6">
      <animate
        attributeName="height"
        begin="0s"
        dur={props.duration ? props.duration : duration}
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin="0s"
        dur={props.duration ? props.duration : duration}
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="90" y="10" width="15" height="120" rx="6">
      <animate
        attributeName="height"
        begin={props.duration ? props.duration : duration / 4}
        dur={props.duration ? props.duration : duration}
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin={props.duration ? props.duration : duration / 4}
        dur={props.duration ? props.duration : duration}
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
    <rect x="120" y="10" width="15" height="120" rx="6">
      <animate
        attributeName="height"
        begin={props.duration ? props.duration : duration / 2}
        dur={props.duration ? props.duration : duration}
        values="120;110;100;90;80;70;60;50;40;140;120"
        calcMode="linear"
        repeatCount="indefinite"
      />
      <animate
        attributeName="y"
        begin={props.duration ? props.duration : duration / 2}
        dur={props.duration ? props.duration : duration}
        values="10;15;20;25;30;35;40;45;50;0;10"
        calcMode="linear"
        repeatCount="indefinite"
      />
    </rect>
  </svg>
);
/* eslint-enable */

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  duration: PropTypes.number,
};

export default Loader;


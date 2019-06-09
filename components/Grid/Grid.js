import React from 'react';
import './Grid.scss';

export function Container(props) {
  return (
    <div className="container">
      {props.children}
    </div>
  );
}


export function Row({ direction = 'row', wrap = 'wrap', horizontal = 'flex-start', vertical = 'flex-start', alignContent = 'flex-start', padding = 0, ...props }) {
  return (
    <div className={props.className ? props.className + ' row' : 'row'}>
      { /*language=SCSS*/}
      <style jsx>
        {`
          .row {
            flex-wrap: ${wrap};
            flex-direction: ${direction};
            justify-content: ${horizontal};
            align-items: ${vertical};
            align-content: ${alignContent};
            padding: ${padding};
          }
        `}
      </style>
      {props.children}
    </div>
  );
}

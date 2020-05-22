import React from 'react';

const Certificate = (props) => (
  <div className="mx-auto mt-10 p-1">
    <div
      className="relative w-full bg-center bg-no-repeat"
      style={{
        height: 770,
        backgroundImage: `url(${require('./logos/certificate.png')})`,
      }}
    >
      <span
        className="absolute"
        style={{
          whiteSpace: 'nowrap',
          fontFamily: 'Roboto',
          fontSize: 60,
          fontWeight: 300,
          top: 189,
          left: '50%',
          transform: 'translate(-50%)',
        }}
      >
        {props.name}
      </span>
      <span
        className="absolute"
        style={{
          whiteSpace: 'nowrap',
          fontFamily: 'Roboto',
          fontSize: 36,
          fontWeight: 300,
          top: 305,
          left: '50%',
          transform: 'translate(-50%)',
        }}
      >
        {props.course}
      </span>
      <span
        className="absolute"
        style={{
          fontFamily: 'Roboto',
          fontSize: 18,
          fontWeight: 500,
          color: 'darkgrey',
          top: 632,
          left: '50%',
          transform: 'translate(-50%)',
        }}
      >
        {props.date}
      </span>
      <img
        className="absolute"
        style={{
          borderRadius: 90,
          top: 400,
          left: '50%',
          transform: 'translate(-50%)',
        }}
        src={props.logo}
        alt="Course logo"
      />
    </div>
  </div>
);

export default Certificate;

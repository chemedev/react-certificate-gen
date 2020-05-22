import React, { useState } from 'react';
import Form from './Form';
import Certificate from './Certificate';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const today = {
  month: new Date().getMonth(),
  day: new Date().getDate(),
  year: new Date().getFullYear(),
};

const App = () => {
  const [name, setName] = useState('Johnny Platzi');
  const [course, setCourse] = useState('Full-Stack Sr.');
  const [date, setDate] = useState(
    `${months[today.month]} ${today.day}, ${today.year}`
  );
  const [logo, setLogo] = useState(require('./logos/placeholder.png'));

  return (
    <>
      <h1 className="text-center my-10 text-3xl">Certificate Generator v1</h1>
      <Form
        name={name}
        course={course}
        date={date}
        logo={logo}
        setName={setName}
        setCourse={setCourse}
        setDate={setDate}
        setLogo={setLogo}
      />
      <Certificate name={name} course={course} date={date} logo={logo} />
    </>
  );
};

export default App;

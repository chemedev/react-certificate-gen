import React, { useState } from 'react';
import Form from './Form';
import Certificate from './Certificate';

const App = () => {
  const [name, setName] = useState('Johnny Platzi');
  const [course, setCourse] = useState('Full-Stack Sr.');
  const [date, setDate] = useState('Jan 6, 2020');
  const [logo, setLogo] = useState(require('./logos/placeholder.png'))

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
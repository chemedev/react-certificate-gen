import React from 'react';

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

const Form = (props) => {
  const today = {
    month: new Date().getMonth(),
    day: new Date().getDate(),
    year: new Date().getFullYear(),
  };

  const changeHandler = (event) => {
    if (event.target.name === 'name') props.setName(event.target.value);
    if (event.target.name === 'course') props.setCourse(event.target.value);
    if (event.target.name === 'date') props.setDate(event.target.value);
    if (event.target.name === 'select') {
      const choose = event.target.value;
      const condition = {
        Choose: () => {
          props.setLogo(require('../src/logos/placeholder.png'));
        },
        DWFS: () => {
          props.setLogo(require('../src/logos/dwfs.png'));
        },
        HTML: () => {
          props.setLogo(require('../src/logos/html.png'));
        },
        CSS: () => {
          props.setLogo(require('../src/logos/css.png'));
        },
        Javascript: () => {
          props.setLogo(require('../src/logos/javascript.png'));
        },
        Bootstrap: () => {
          props.setLogo(require('../src/logos/bootstrap.png'));
        },
        Angular: () => {
          props.setLogo(require('../src/logos/angular.png'));
        },
        React: () => {
          props.setLogo(require('../src/logos/react.png'));
        },
        'Vue.js': () => {
          props.setLogo(require('../src/logos/vue.js.png'));
        },
        Svelte: () => {
          props.setLogo(require('../src/logos/svelte.png'));
        },
      };
      condition[choose]();
    }
  };

  return (
    <form className="flex flex-col border-4 border-double border-black rounded-md p-3 w-3/6 m-auto">
      <div>
        <label className="px-3">Name:</label>
        <input
          name="name"
          onChange={changeHandler}
          className="italic"
          placeholder="Johnny Platzi"
          type="text"
          value={props.name}
        />
      </div>
      <div>
        <label className="px-3">Course:</label>
        <input
          name="course"
          onChange={changeHandler}
          className="italic"
          placeholder="Full-Stack Sr"
          type="text"
          value={props.course}
        />
      </div>
      <div>
        <label className="px-3">Date:</label>
        <input
          name="date"
          onChange={changeHandler}
          className="italic"
          placeholder={`${months[today.month]} ${today.day}, ${today.year}`}
          type="text"
          value={props.date}
        />
      </div>
      <div>
        <label className="px-3">Logo:</label>
        <select name="select" onChange={changeHandler}>
          <option value="Choose">Choose</option>
          <option value="DWFS">DWFS</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="Javascript">Javascript</option>
          <option value="Bootstrap">Bootstrap</option>
          <option value="Angular">Angular</option>
          <option value="React">React</option>
          <option value="Vue.js">Vue.js</option>
          <option value="Svelte">Svelte</option>
        </select>
      </div>
    </form>
  );
};

export default Form;

console.log('app.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};


const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    const option = e.target.elements.option.value;
    app.options.push(option)
    e.target.elements.option.value =''
    render();
  }
};

const removeAll = (e) => {
  e.preventDefault();
  app.options = [];
  render();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const randomOption = app.options[randomNum];
  console.log(randomOption);
};


const appRoot = document.getElementById('app')

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? `Here are your options:`: `No options`}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What shoud I do?</button>
      <button disabled={app.options.length === 0} onClick={removeAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) => <li key = {option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" placeholder="This is the placeholder" autoFocus/>
        <button>Add Option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
}

render();

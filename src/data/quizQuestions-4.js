
export const quizQuestions_4 = {
  questions: [
    {
      question: 'What is React state?',
      choices: ['A persistent storage mechanism', 'Data shared between components', 'A JavaScript object used to store component data', 'A function to manage component behavior'],
      correctAnswer: 'A JavaScript object used to store component data',
    },
    {
      question: 'How do you initialize state in a React class component?',
      choices: ['this.state = {};', 'state = {};', 'state.init();', 'this.setState({});'],
      correctAnswer: 'this.state = {};',
    },
    {
      question: 'Which method is used to update the state of a React component?',
      choices: ['this.updateState();', 'this.modifyState();', 'this.setState();', 'this.changeState();'],
      correctAnswer: 'this.setState();',
    },
    {
      question: 'When is the render method called in a React component?',
      choices: ['At the beginning of the component lifecycle', 'Whenever the component updates', 'When the component is unmounted', 'When the component is constructed'],
      correctAnswer: 'Whenever the component updates',
    },
    {
      question: 'What is the purpose of the componentDidMount lifecycle method?',
      choices: ['To update the component state', 'To fetch data from an API', 'To render the initial component UI', 'To handle component events'],
      correctAnswer: 'To fetch data from an API',
    },
    {
      question: 'How can you bind the value of "this" in a React component method?',
      choices: ['By using the bind method in the render function', 'By using arrow functions for event handlers', 'By setting this = self;', 'By directly modifying the prototype chain'],
      correctAnswer: 'By using arrow functions for event handlers',
    },
    {
      question: 'What is the purpose of the componentWillUnmount lifecycle method?',
      choices: ['To update the component state', 'To fetch data from an API', 'To render the initial component UI', 'To perform cleanup before the component is removed'],
      correctAnswer: 'To perform cleanup before the component is removed',
    },
    {
      question: 'How do you pass data from a child component to its parent component?',
      choices: ['Using the setState method', 'By declaring a global variable', 'Using props and callback functions', 'Through the ref attribute'],
      correctAnswer: 'Using props and callback functions',
    },
    {
      question: 'What is the purpose of the forceUpdate method in React?',
      choices: ['To forcefully re-render a component', 'To update the component state', 'To handle component events', 'To fetch data from an API'],
      correctAnswer: 'To forcefully re-render a component',
    },
    {
      question: 'In React, what is the difference between state and props?',
      choices: ['State is immutable, and props are mutable', 'Props are used for data passed into components, and state is used for managing internal component data', 'State is used for data passed into components, and props are used for managing internal component data', 'State and props are interchangeable terms'],
      correctAnswer: 'Props are used for data passed into components, and state is used for managing internal component data',
    },
  ],
}
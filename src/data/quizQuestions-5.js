
export const quizQuestions_5 = {
  questions: [
    {
      question: 'How are events handled in React?',
      choices: ['Using event listeners in HTML', 'By defining functions in React components', 'Through the use of the jQuery library', 'React components cannot handle events'],
      correctAnswer: 'By defining functions in React components',
    },
    {
      question: 'In React, which event is triggered when a form element value changes?',
      choices: ['onSubmit', 'onChange', 'onClick', 'onValueChange'],
      correctAnswer: 'onChange',
    },
    {
      question: 'How do you prevent the default behavior of an event in React?',
      choices: ['event.preventDefault()', 'event.stopPropagation()', 'event.stopDefault()', 'event.cancelDefault()'],
      correctAnswer: 'event.preventDefault()',
    },
    {
      question: 'What is the purpose of the SyntheticEvent in React?',
      choices: ['To provide a cross-browser consistent event object', 'To handle asynchronous events', 'To simulate events in unit tests', 'To handle native DOM events'],
      correctAnswer: 'To provide a cross-browser consistent event object',
    },
    {
      question: 'In React, how can you pass additional data to an event handler?',
      choices: ['By using the event argument', 'By setting a global variable', 'React does not support passing additional data', 'By using the data attribute on the HTML element'],
      correctAnswer: 'By using the event argument',
    },
    {
      question: 'What is event delegation in React?',
      choices: ['Assigning multiple event handlers to a single element', 'Passing events between parent and child components', 'Handling events at a higher level in the DOM hierarchy', 'Simulating events for testing purposes'],
      correctAnswer: 'Handling events at a higher level in the DOM hierarchy',
    },
    {
      question: 'Which method is used to explicitly bind the value of "this" in an event handler?',
      choices: ['bind(this)', 'event.bind(this)', 'this.bind(event)', 'handleEvent.bind(this)'],
      correctAnswer: 'bind(this)',
    },
    {
      question: 'What is the purpose of the stopPropagation method?',
      choices: ['To stop the event from reaching the DOM', 'To stop the event from propagating to parent components', 'To stop the default behavior of the event', 'To prevent the event from bubbling up the DOM tree'],
      correctAnswer: 'To prevent the event from bubbling up the DOM tree',
    },
    {
      question: 'Which event is commonly used for handling asynchronous operations in React?',
      choices: ['onClick', 'onSubmit', 'onAsync', 'onLoad'],
      correctAnswer: 'onClick',
    },
    {
      question: 'In React, how can you conditionally render elements based on an event?',
      choices: ['Using the event.type property', 'By modifying the event.target', 'By using the if statement in the event handler', 'React does not support conditional rendering based on events'],
      correctAnswer: 'By using the if statement in the event handler',
    },
  ],
}
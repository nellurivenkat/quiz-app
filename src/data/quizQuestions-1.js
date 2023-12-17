
export const quizQuestions_1 = {
  questions: [
    {
      question: 'What is the primary purpose of functional components in React?',
      choices: ['Handling state', 'Rendering UI', 'Lifecycle methods', 'Event handling'],
      correctAnswer: 'Rendering UI',
    },
    {
      question: 'In a functional component, how do you receive and access props?',
      choices: ['this.props', 'props', 'this.state', 'state'],
      correctAnswer: 'props',
    },
    {
      question: 'Which of the following statements about functional components is true?',
      choices: [
        'Functional components cannot have state',
        'Functional components use class syntax',
        'Functional components are stateless',
        'Functional components cannot receive props',
      ],
      correctAnswer: 'Functional components are stateless',
    },
    {
      question: 'What is the key difference between a regular JavaScript function and a React functional component?',
      choices: [
        'React components have a render method',
        'React components can use hooks',
        'There is no difference',
        'React components cannot have parameters',
      ],
      correctAnswer: 'React components can use hooks',
    },
    {
      question: 'How do you pass data from a parent component to a child component in React?',
      choices: [
        'Using state',
        'Using props',
        'Using refs',
        'Directly modifying child component properties',
      ],
      correctAnswer: 'Using props',
    },
    {
      question: 'Which lifecycle method is not available in functional components?',
      choices: ['componentDidMount', 'componentDidUpdate', 'componentWillUnmount', 'render'],
      correctAnswer: 'componentDidMount',
    },
    {
      question: 'In a functional component, where should you perform side effects such as data fetching?',
      choices: ['In the render method', 'In a separate function', 'In the constructor', 'In useEffect hook'],
      correctAnswer: 'In useEffect hook',
    },
    {
      question: 'What is the significance of the key attribute when rendering a list of elements in React?',
      choices: ['It improves performance', 'It is required for JSX syntax', 'It is just a convention', 'It is not necessary'],
      correctAnswer: 'It improves performance',
    },
    {
      question: 'Which syntax is used to render a variable value within JSX?',
      choices: ['{variable}', '{{variable}}', '${variable}', '<variable>'],
      correctAnswer: '{variable}',
    },
    {
      question: 'In React, what is the purpose of the useState hook?',
      choices: [
        'To define a state variable in a functional component',
        'To define a global state for the entire application',
        'To define a variable in the render method',
        'To define a state variable in a class component',
      ],
      correctAnswer: 'To define a state variable in a functional component',
    },
  ],
}
---
title: React
desc: A library for JavaScript.
images: []
size:
tools: []
tags: ['React']
---

# React Starter Pack
To build using React, the simple way for development is to include the react library, react dom, and babel to translate JSX as JS.
## Declarative
```
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/jsx">
    const root = ReactDOM.createRoot(domNode);
    root.render(<h1>Here goes the code</h1>);
</script>
```
## Imperative
To only add H1 element to the app id, it needs a lot of instruction, start from creating the element using document.createElement, preparing the text, and then insert it to the document.createTextNode, after that bundling it to the appendChild as H1 content, finally place it to the app id using app appendChild. Using the declarative is very simple, just type as a normal HTML structure, and React do the rest.
```
<script type="text/javascript">
  const app = document.getElementById('app');
  const header = document.createElement('h1');
  const text = 'Develop. Preview. Ship.';
  const headerContent = document.createTextNode(text);
  header.appendChild(headerContent);
  app.appendChild(header);
</script>
```
## Component
React component is a JavaScript function to return the value. Example:
```
function Welcome() {
    return (
        <h1>Welcome to React</h1>
        <h2>This is return value</h2>
    );
}
root.render(<Welcome />);
```
The rule is to name the function start using capital, and to called it using `<Component />`. Also it is possible to nest the component, so it is up to you to do something in react.
## Props
In react it is possible to pass an item, it is called as props. Props are read only information. Meanwhile state is an interactive information. Example:
### Props with ternary operation
With this ternary operation it is possible for us to use if statement in more simple way, also granted to pass directly the items to the props, so no need to call the props again.
```
function Welcome({message}) {
    return <h1>{message ? message: "No message"}</h1>;
}
```
### Props with dot notation
With this dot notation capability, it allow us to access props hash map, so it is up to your style.
```
function Welcome(props) {
    return <h1>{props.message}</h1>;
}
function Home() {
    return(
        <div>
             <Welcome message="Welcome to React" />
        </div>
    );
}
```
## Iterating to Hash Map or List
It's very common to access a lot of dynamic data, and wanted to show it along with the element. Imagine seeing youtube channel with a lot of card element, it is impossible without iterating it.
```
function Home() {
    interface Link {
    title: string
    link: string
    }

    const links: Link[] = [
    { title: 'Overview', link: '/about' },
    { title: 'Education', link: '/about/education' },
    { title: 'Experiences', link: '/about/experiences' }
    ]

    return(
    <div>
        <Welcome message="Welcome to React:" />
        <ul>
            {links.map((item) => (
                <li key={item.title}>
                <a href={item.link}>{item.title}</a>
                </li>
            ))}
        </ul>
    </div>
    )
}
```
The rule is to ensure use key inside the element, because react needs a unique to identify items.
## State and Event Handlers
To listen the event is using 'on' with camel case. Example 'onClick' then to respond the event using function example 'handleClick'.
```
function Home() {
    let queue = 0
    function handleClick(){
        queue += 1;
        console.log(queue);
    }
    return(
        <div>
             <Welcome message="Welcome to React" />
             <button onClick={handleClick}>Queue</button>
        </div>
    );
}
```
## Hooks
Function starting with 'use' called as Hooks, there are built in hooks, so if you wanted to create hooks as per react said it is possible. The first array is up to you, but the second array is for update the best practice and recommended is to use set => [freeDescriptiveName, setFreeDescriptiveName] Example:
```
function Home() {
    const[queue, setQueue] = React.useState(0);
    function handleClick(){
        setQueue(queue + 1);
        console.log(queue);
    }
    return(
        <div>
             <Welcome message="Welcome to React" />
             <button onClick={handleClick}>Queue {queue}</button>
        </div>
    );
}
```
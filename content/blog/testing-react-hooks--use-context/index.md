---
title: Testing React Hooks - Context
date: "2020-01-28T21:06:50.946Z"
description: How to efficient test hook in React? Context version
---

Hooks are introduced in React 16.8 and simplified our class-based React components allowing us to use state and other React features (like managing life cycle methods) in function component. In this article I assume you're quite familiar with React's hooks and you're able to write your own custom hook. Otherwise I can refer you to official React's documentation: [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html).

With Hooks it's easy to share reusable logic between function components. Another great advantage of Hooks is availability to write your own custom hooks. If your custom hook is not trivial and used in few places covering all of it use cases by tests in every component can be challenging. In this article I will cover examples of testing new Context API (introduces in React 16.3) combined with hooks.

Let's suppose we've got React application with User Component where we can change our user data like:
* user name
* preferred language

![Preview of User Component](./user_component.png)

<!-- TODO, write about two contexts -->

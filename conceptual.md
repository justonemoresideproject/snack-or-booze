### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
to create easily routable components

- What is a single page application?
an application that does not send the user to different pages but instead rerenders different components

- What are some differences between client side and server side routing?
client side routing does not include the history.push functionality thereby preventing the use of the forward and backward buttons in a browser. Server side on the otherhand uses the full request/response cycle thereby allowing the use of the forward and back buttons

- What are two ways of handling redirects with React Router? When would you use each?
The first would just be creating a route that matches with everything and would be useful for 404 pages. The second would be using the v5 redirect function to send a user to a different page

- What are two different ways to handle page-not-found user experiences using React Router? 
The first would be to create a route that matches everything followed by a 404 page

- How do you grab URL parameters from within a component using React Router?
useParams

- What is context in React? When would you use it?
Variables usable by components within the local scope of the component hierarchy

- Describe some differences between class-based components and function
  components in React.
  class based components extend the React.Component super class and must have constructors while function components can simply be exported

- What are some of the problems that hooks were designed to solve?
State and rerendering
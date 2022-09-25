import "./App.css";
// import { WelcomeFn } from "./components/WelcomeFn";
// import { WelcomeClass } from "./components/WelcomeClass";
// Named export
import { Toggle } from "./components/Toggle.js";

export function App() {
  return (
    <section>
      {/* <Toggle></Toggle> */}
      <Toggle />
      {/* <h1 className="head">Welcome to react class - Green</h1>
      <p>This is a paragraph</p> */}
      {/* <WelcomeFn />
      <WelcomeClass
        name="sameer"
        age="20"
        place="chennai"
        town="avadi"
        gender="male"
      />
      <WelcomeClass name="anjali" age="17" />
      <WelcomeClass name="amit" age="19" />
      <WelcomeClass name="ragav" age="20" place="andhra" gender="male" /> */}
    </section>
  );
}

// export function App2() {
//   return <h2>app 2</h2>;
// }

// export default App;

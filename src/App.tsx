import React from "react";
import Logo from './components/logo'

const App: React.FC = (props: any) => {
  return <section className="home-page">
    <Logo />
    <div>Hello React</div>
  </section>
}

export default App
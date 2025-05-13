import apple from "./assets/apple.png";
import orange from "./assets/orange.png";
import bananas from "./assets/bananas.png";
import papaya from "./assets/papaya.png";

import Header from "./components/Header";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Get your healthy slad in the best price!</h2>
        <section id="menu">
          <ul>
            <Tabs title="tt" img={apple}></Tabs>
            <Tabs title="ttt" img={orange}></Tabs>
            <Tabs title="xx" img={bananas}></Tabs>
            <Tabs title="dd" img={papaya}></Tabs>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

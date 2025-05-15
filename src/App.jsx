import apple from "./assets/apple.png";
import orange from "./assets/orange.png";
import bananas from "./assets/bananas.png";
import papaya from "./assets/papaya.png";

import { CORE_CONTENT_FRUIT } from "../src/data.js";

import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TabButton from "./components/TabButton.jsx";

function App() {
  function clickThebutton(selectedBtn) {
    console.log(selectedBtn);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Get your healthy slad in the best price!</h2>
        <section id="menu">
          <ul>
            <Tabs
              title={CORE_CONTENT_FRUIT[0].name}
              description={CORE_CONTENT_FRUIT[0].description}
              img={bananas}></Tabs>
            <Tabs
              title={CORE_CONTENT_FRUIT[1].name}
              description={CORE_CONTENT_FRUIT[1].description}
              img={apple}></Tabs>
            <Tabs
              title={CORE_CONTENT_FRUIT[2].name}
              description={CORE_CONTENT_FRUIT[2].description}
              img={orange}></Tabs>
            <Tabs
              title={CORE_CONTENT_FRUIT[3].name}
              description={CORE_CONTENT_FRUIT[3].description}
              img={papaya}></Tabs>
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton handleClick={() => clickThebutton("Youth Salad")}>
              Youth Salad
            </TabButton>
            <TabButton handleClick={() => clickThebutton("Mixed Flavours")}>
              Mixed Flavours
            </TabButton>
            <TabButton handleClick={() => clickThebutton("Fit Salad")}>
              Fit Salad
            </TabButton>
            <TabButton handleClick={() => clickThebutton("Special Salad")}>
              Special Salad
            </TabButton>
          </menu>
          DYNAMIC content
        </section>
      </main>
    </div>
  );
}

export default App;

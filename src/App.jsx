import apple from "./assets/apple.png";
import orange from "./assets/orange.png";
import bananas from "./assets/bananas.png";
import papaya from "./assets/papaya.png";
import { useState } from "react";

import { CORE_CONTENT_FRUIT } from "../src/data.js";
import { EXAMPLES } from "../src/data.js";

import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("youth_salad");

  function clickThebutton(selectedBtn) {
    // console.log(selectedBtn);
    setSelectedTopic(selectedBtn);
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
            <TabButton handleClick={() => clickThebutton("youth_salad")}>
              Youth Salad
            </TabButton>
            <TabButton handleClick={() => clickThebutton("mixed_flavours")}>
              Mixed Flavours
            </TabButton>
            <TabButton handleClick={() => clickThebutton("fit_salad")}>
              Fit Salad
            </TabButton>
            <TabButton handleClick={() => clickThebutton("special_salad")}>
              Special Salad
            </TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

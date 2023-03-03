import { useState } from "react";
import Main from "./components/Main";
import Button from "./components/Button";

import up from "./assets/desktop/icon-arrow-up.svg";
import down from "./assets/desktop/icon-arrow-down.svg";
import sun from "./assets/desktop/icon-sun.svg";
import TimeZone from "./components/TimeZone";

function App() {
  return (
    <div className="App">
      <Main />
      <Button text="more" arrow={down} />
      <TimeZone icon={sun} daytime="morning" city="wroclaw" country="pl" />
    </div>
  );
}

export default App;

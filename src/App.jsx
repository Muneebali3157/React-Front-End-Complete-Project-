import React from "react";
import Menu from "./assets/menu/Menu.jsx";
import Navbar from "./assets/Navbar/nav.jsx";
import Themeprovider from "./assets/theme/themeprovider.jsx"
import Theme from "./assets/theme/Theme.jsx";

export default function App() {
  return (
    <div>
      <section id="Home">

<Themeprovider>
<Theme />
</Themeprovider>
      </section>

      <section>

    <Navbar />
      </section>
      <section id="Menu" >

    <Menu />
      </section>
    </div>
  );
}

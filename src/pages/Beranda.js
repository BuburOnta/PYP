import Section1 from "../components/Home/Section-1";
import Section2 from "../components/Home/Section-2";
import Content from "../components/Home/Content";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";

import logo from './../img/tFlow-logo.svg';

function Home() {
  const topLeftOBg = require('./../img/top-left-o-bg.png');
  return (
    <div className="App">
      <Navbar />
      <div className="blur" id="blur">
        <img src={topLeftOBg} alt="top-o-bg" className="topLeftBg"/>
        <Content/>
        <Section1/>
        <Section2/>
        <Footer logo={logo} />
      </div>
    </div>
  );
}

export default Home;

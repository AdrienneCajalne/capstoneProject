

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from '../containers';
import { CTA, Brand, Navbar } from '../components/Navbar';

import './Home.css';

const App = () => (
<div className="App">
    <div className="gradient__bg">
        <Navbar />
        <Header />
    </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Footer />
    </div>
);

export default App;



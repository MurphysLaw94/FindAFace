import React, { Component } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const particlesInit = async (main) => {
  console.log(main);
  await loadFull(main);
};

const particlesLoaded = (container) => {
  console.log(container);
};

const particlesOptions = {
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
  },
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }
onInputChange = (event) => {
  console.log(event.target.value);
}

  render() {
    return(
      <div className="App">
        <Particles className='particles'
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} />
        {/*<FaceRecognition />*/}
      </div>
    );
  }
}

export default App;

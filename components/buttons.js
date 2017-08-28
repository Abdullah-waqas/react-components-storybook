import React, { PropTypes, Component } from "react";
import "../styles/buttons.css";

class Buttons extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          CSS3 Button <span>Hover</span> Effects
        </h1>

        <h2>Light Button</h2>
        <div>
          <a className="btn btn-pill-chunky-no-border signerup">Sign Up</a>
        </div>

        <div className="button-effect">
          <h2>Effect #1</h2>
          <a className="effect effect-1" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-1" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-1" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-1" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-1" href="#" title="Learn More">
            Learn More
          </a>
        </div>

        <div className="button-effect">
          <h2>Effect #2</h2>
          <a className="effect effect-2" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-2" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-2" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-2" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-2" href="#" title="Learn More">
            Learn More
          </a>
        </div>

        <div className="button-effect">
          <h2>Effect #3</h2>
          <a className="effect effect-3" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-3" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-3" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-3" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-3" href="#" title="Learn More">
            Learn More
          </a>
        </div>

        <div className="button-effect">
          <h2>Effect #4</h2>
          <a className="effect effect-4" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-4" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-4" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-4" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-4" href="#" title="Learn More">
            Learn More
          </a>
        </div>

        <div className="button-effect">
          <h2>Effect #5</h2>
          <a className="effect effect-5" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-5" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-5" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-5" href="#" title="Learn More">
            Learn More
          </a>
          <a className="effect effect-5" href="#" title="Learn More">
            Learn More
          </a>
        </div>
      </div>
    );
  }
}

Buttons.propTypes = {
  // addTodo: PropTypes.func.isRequired
};

export default Buttons;

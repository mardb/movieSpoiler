"use strict";

const e = React.createElement;

class Spoiler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revealed: false
    };
  }

  render() {
    const { revealed } = this.state;
    const { text } = this.props;

    return e(
      "p",
      {
        onClick: () => {
          this.setState({ revealed: !revealed });
        }
      },
      revealed ? text : "Show Spoiler"
    );
  }
}

// Find all DOM containers, and render buttons into them.
document.querySelectorAll(".spoiler-container").forEach(domContainer => {
  // Read the text from a data-* attribute.
  const text = domContainer.dataset.text;
  ReactDOM.render(e(Spoiler, { text }), domContainer);
});

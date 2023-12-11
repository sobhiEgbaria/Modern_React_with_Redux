import React, { Component } from "react";

class ImageCards extends Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const hight = this.imageRef.current.clientHeight;

    const span = Math.ceil(hight / 10);

    this.setState({ spans: span });
  };
  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
          ref={this.imageRef}
        />
      </div>
    );
  }
}

export default ImageCards;

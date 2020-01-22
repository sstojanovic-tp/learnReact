import React from "react";

class ImageCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      spans: 0
    };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

   setSpans = () => {
      this.setState({spans: this.imageRef.current.clientHeight});
      console.log(this.state.spans)
  };

  render() {
    const{description, urls} = this.props.image;
      return(
        <div >
          <img
            ref={this.imageRef}
            src={urls.regular}
            alt={description} />
        </div>
      )
    }
}

export default ImageCard
import { Component } from "react";
class ImageClassComponent extends Component {
  render() {
    const {image, alt} = this.props;
    return (
      <div>
        <img src={image} alt= {alt} style = {{width: "200px"}}/>
      </div>
    );
  }
}
export default ImageClassComponent;

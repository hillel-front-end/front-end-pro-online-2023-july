export default class Component {
  props = {};


  constructor(props) {
    this.props = { ...props };
  }

  render() {
    throw new Error('Render should present');
  }
}
import Component from "@/plugins/Component";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  onChangeHandler() {
    console.log(this.props.name, 'handler')

    // this.props.onChange();
  }

  getTemplate() {
    return `
       <label for="${this.props.id}" >
            ${this.props.label}
          <input 
            type="${this.props.type}" 
            id="${this.props.id}" 
            name="${this.props.name}" 
            class="${this.props.className}"
          />
          Icon 4
      </label>
    `;


  }


  render() {
    const tamplte = this.getTemplate();
    // --add Event on Input ----

    //----- node.addEventListener('change', this.onChangeHandler.bind(this));
    return tamplate;
  }
}
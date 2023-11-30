import './signin.scss';
import Component from "@/plugins/Component";
import {router} from "@/router";
import Input from "@/common/components/Input";

export default class SignIn extends Component {
  credentials = { login: '', password: '' };

  onChangeLogin() {
    console.log('---change login --')
  }

  onChangePassword() {
    console.log('---change password --')
  }

  getTemplate() {
    return `
        <div class="sign-in d-flex justify-content-center align-items-center">
            <div class="card col-6">
                <div class="card-body">
                  <h5 class="card-title text-center mb-3"> Sign In </h5>
                  <div class="mb-2">
                    ${new Input({ 
                        type: 'text', 
                        className: 'login form-control', 
                        placeholder: 'login',
                        name: 'login',
                        id: 'login',
                        label: 'Input Login'
                    }).render()}
                  </div>
                  <div class="mb-2">
                     ${new Input({
                          type: 'password',
                          className: 'password form-control',
                          placeholder: 'password',
                          name: 'password',
                          id: 'password',
                          label: 'Input Password',
                          // onChange: function(){}
                      }).render()}
                  </div>
                  <button type="button" class="btn btn-success">Sign in</button>
                </div>
            </div>
        </div>
    `
  }

  render() {
    const container = document.createElement('div')
    const template = this.getTemplate();

    console.log('--call render---');

    container.innerHTML = template;

    container.querySelector('#login').addEventListener('change', this.onChangeLogin.bind(this))
    // container.querySelector('#password').addEventListener('change', this.onChangePassword.bind(this))


    return container;
  }
}


//----solution -1
// render() {
  // const template = this.getTemplate();
  // router.subscribePageLoaded( () => {
  //   const login = document.querySelector('#login');
  //
  //   console.log(login, 'login');
  //
  //   login.addEventListener('change', this.onChangeLogin.bind(this));
  // })
  // /    return container.innerHTML;
// }


// ----solution - 2
// document.createElement vs innerHTML
// const login = document.querySelector('#login');
//
// console.log(login, 'login')
// --> Remember how to make template with document.createElement


// Login ---------
// const loginNode = document.createElement('input')
// loginNode.classList = 'form-control';


// const labelLoginNode = document.createElement('label')
// labelLoginNode.innerText = 'Login'
// labelLoginNode.append(loginNode)
//
// loginNode.addEventListener('change', this.onChangeLogin.bind(this));
//
// // End Login ---------
//
// // Password ---------
// const passwordNode = document.createElement('input')
// passwordNode.classList = 'form-control';
//
// const labelPasswordNode = document.createElement('label')
// labelPasswordNode.innerText = 'Password'
// labelPasswordNode.append(passwordNode)
//
// passwordNode.addEventListener('change', this.onChangePassword.bind(this));
//
// // End Password------------------
//
// const container = document.createElement('div');
// container.classList.add('sign-in')
//
// container.append(labelLoginNode)
// container.append(labelPasswordNode);
//
// /// innerHTML vs append
// setTimeout(() => {
//   document.querySelector('#app .router-view').append(container);
// }, 3000)

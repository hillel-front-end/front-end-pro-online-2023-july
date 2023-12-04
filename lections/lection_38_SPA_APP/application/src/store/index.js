import Store from "@/plugins/store";


const state = {
  userInfo: null,
  isAuth: false,
  notifyConfig: null // { message: '', type: [error, warning, success] }
};

export const mutation_types = {
  CHANGE_USER_DATA: 'CHANGE_USER_INFO',
  CHANGE_NOTIFY_CONFIG: 'CHANGE_NOTIFY_CONFIG'
}

const mutations = {
  [mutation_types.CHANGE_NOTIFY_CONFIG](state, payload) {
    if (payload.type && payload.message) {
      state.notifyConfig = {
        ...payload
      }
    }
  },
  [mutation_types.CHANGE_USER_DATA](state, payload) {
    const [firstName, lastName] = payload.fullName.split(' ')

    state.userInfo = {
      name: firstName,
      lastName: lastName
    };
  }
}

export const store = new Store({
  state,
  mutations
});



// store.subscribe(
//     'Javascript',
//   function (payload) {
//     console.log('Waiting Javascript', payload)
//   }
// );
//
// store.subscribe(
//     'Javascript',
//     function (payload) {
//       console.log('Waiting Javascript 2', payload)
//     }
// );

// store.subscribe(
//     'Harry Potter',
//     function (payload) {
//       console.log('---> Waiting Harry Potter', payload)
//     }
// );

// store.subscribe(
//     'Harry Potter',
//     function (payload) {
//       console.log('---> Waiting Harry Potter 2', payload)
//     }
// );


// setTimeout(() => {
//   console.log('---dispatch Javascript----');
//
//   store.dispatch(
//       'Javascript',
//       { type: 'error', message: 'Javascript'}
//   );
//

// }, 4000)

// setTimeout(() => {
//
//   console.log('---dispatch CHANGE_USER_DATA----');
//
//   store.dispatch(
//       mutation_types.CHANGE_USER_DATA,
//       { fullName: 'Alex Pupkin' }
//   )
// }, 6000)


// console.log(store.state, 'state');
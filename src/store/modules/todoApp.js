const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          console.log(localStorage.key(i));
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
};

const state = {
  headerText: "TODO it!",
  todoItems: storage.fetch()
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  }
};

const mutations = {
  addOneItem(state, todoItem, todoItems) {
    const obj = { completed: false, item: todoItem };
    /* ---------------2019-05-19----doing --------------------------*/
    // try1 : _.last는 id를 배열에 넣어야 한다. 굳이 ...
    // let lastTodoItem = _.last(storage.arr);

    //try2 : 타임스태프는 같은 초는 중복난다. 힝
    //let lastTodoItem = Date.now();

    //try3 : index
    const id = lastTodoItem;
    state.todoItems.index = id + "";

    const idxObj = { idx: state.todoItems.index };
    /* ---------------------------------------------------------*/

    localStorage.setItem(state.todoItems.index, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeOneItem(state, payload) {
    localStorage.removeItem(payload.todoItem);
    state.todoItems.splice(payload.index, 1);
  },
  toggleOneItem(state, payload) {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index]
      .completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(
      payload.todoItem.item,
      JSON.stringify(payload.todoItem)
    );
  },
  clearAllItems(state) {
    state.todoItems = [];
    localStorage.clear();
  }
};

export default {
  state,
  getters,
  mutations
};

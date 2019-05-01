const addOneItem = (state,todoItem) => 
{
    let obj = { complated: false, item:todoItem } 
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}
const removeOneItem = (state,payload) =>
{
    state.todoItems.splice(payload.index, 1);
    localStorage.removeItem(payload.todoItem);
    // console.log(todoItem);
}
const toggleOneItem = (state,payload) =>
{
    // todoItem.completed = !todoItem.completed;
    state.todoItems[payload.index].complated = !state.todoItems[payload.index].complated;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}
const clearAllItems = (state) =>
{
    localStorage.clear();
    state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems}
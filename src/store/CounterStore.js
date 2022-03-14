import { observable, configure, action } from "mobx";

configure({ enforceActions: true });

const counterStore = observable({
  count: 0,
  handleIncrement: action(() => {
    counterStore.count++;
  }),
  handleDecrement: action(() => {
    counterStore.count--;
  })
});

export { counterStore };

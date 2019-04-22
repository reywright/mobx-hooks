import { createContext } from "react";
import { types, onSnapshot, getEnv } from "mobx-state-tree";
import { incrementCount } from "./utils";

export const Count = types
  .model("Count", {
    value: types.number
  })
  .actions(self => ({
    increment() {
      const value = getEnv(self).incrementCount(self.value);
      self.value = value;
    }
  }));

export const Store = types.model({
  count: Count
});

const store = Store.create(
  {
    count: {
      value: 0
    }
  },
  {
    // Dependency injection
    // Note: do not pass "self" directly to these functions
    // Pass only the properties you need
    incrementCount
  }
);

// listen to new snapshots
onSnapshot(store, snapshot => {
  console.table(snapshot);
});

export default createContext(store);

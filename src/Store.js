import React from 'react';

const StoreObject = {
  contextToChildren1: 'I am the parent sending something via ContextAPI to children1',
  contextToChildren2: 'I am the parent sending something via ContextAPI to children2',
  contextToChildren3: 'I am the parent sending something via ContextAPI to children3',
  contextToChildren4: 'I am the parent sending something via ContextAPI to children4',
}
console.table(StoreObject)
export const Store = React.createContext({
  nice: StoreObject ,
  updateUserData: data => {StoreObject .userInfo = data; console.table(StoreObject)},
});


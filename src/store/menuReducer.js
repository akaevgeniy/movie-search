import { MENU_VISIBLE_CHANGE } from './types';

const intialState = {
  visible: false,
};

export const menuReducer = (state = intialState, action) => {
  switch (action.type) {
    case MENU_VISIBLE_CHANGE:
      return {
        visible: !action.data,
      };

    default:
      return state;
  }
};

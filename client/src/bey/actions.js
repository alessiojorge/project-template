import { update } from 'bey';

export const menuToggleHandler = beyState => {
  update(beyState, state => {
    const temp = !state.menuToggle;
    state.menuToggle = temp;
  });
};

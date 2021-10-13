import { SET_TEMP } from '../actionTypes';
const initialState = {
  mainTemp: [],
};

export default function Temp(state = initialState, action) {
  switch (action.type) {
    case SET_TEMP: {
      const { temp, city, gender, date } = action.payload;
      return [...state, temp, city, gender, date];
    }
    default:
      return state;
  }
}

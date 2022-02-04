const initialState = {
  supplies: 100,
  distance: 0,
  cash: 200,
  days: 0,
};

const wagonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "gather": {
      return {
        ...state,
        supplies: state.supplies + 15,
        days: state.days + 1,
      };
    }
    case "travel": {
      if (state.supplies - state.days * action.payload <= 0) return state;
      return {
        ...state,
        supplies: state.supplies - action.payload * 20,
        distance: state.distance + action.payload * 10,
        days: state.days + action.payload,
      };
    }
    case "tippedWagon": {
      return {
        ...state,
        supplies: state.supplies - 30,
        days: state.days + 1,
      };
    }
    case "sell": {
      if (state.supplies < 20) return state;
      return {
        ...state,
        supplies: state.supplies - 20,
        cash: state.cash + 5,
      };
    }
    case "buy": {
      if (state.cash < 15) return state;
      return {
        ...state,
        supplies: state.supplies + 25,
        cash: state.cash - 15,
      };
    }
    case "theft": {
      if (state.cash <= 0) return state;
      return {
        ...state,
        cash: state.cash / 2,
      };
    }
    default: {
      return state;
    }
  }
};

let wagon = wagonReducer(undefined, {});
wagon = wagonReducer(wagon, { type: "travel", payload: 1 });
wagon = wagonReducer(wagon, { type: "gather" });
wagon = wagonReducer(wagon, { type: "tippedWagon" });
wagon = wagonReducer(wagon, { type: "travel", payload: 3 });
wagon = wagonReducer(wagon, { type: "sell" });
wagon = wagonReducer(wagon, { type: "buy" });
wagon = wagonReducer(wagon, { type: "buy" });
wagon = wagonReducer(wagon, { type: "theft" });
console.log(wagon);

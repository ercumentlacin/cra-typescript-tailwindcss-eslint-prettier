const initialStage = 0;

type ACTIONTYPE =
  | { type: 'PLUS'; payload: number }
  | { type: 'MINUS' }
  | { type: 'RESET' };

function plusMinusReducer(state = initialStage, action: ACTIONTYPE) {
  switch (action.type) {
    case 'PLUS':
      return state + 1;
    case 'MINUS':
      return state - 1;
    case 'RESET':
      return initialStage;

    default:
      return state;
  }
}

export default plusMinusReducer;

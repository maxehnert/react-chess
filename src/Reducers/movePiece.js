let knightPosition = [1, 7];
const initialState = [];

export default function movePiece(state = initialState, toX, toY) {
  knightPosition = [toX, toY];
  return knightPosition;
}
// export default function movePiece(state = initialState, action) {
//   const targetIdX = action.toX;
//   const targetIDY = action.toY;
//
//   return state.map((piece) => {
//     return Object.assign({}, piece, {
//       ...action
//     });
//   });
// }

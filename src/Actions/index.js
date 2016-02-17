import uuid from 'node-uuid';

export const MOVE_PIECE = 'MOVE_PIECE';
export function movePieceLocation(piece) {
  return {
    type: MOVE_PIECE,
    ...piece
  };
};

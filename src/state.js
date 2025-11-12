export const defaultState = () => ({
  forca: 10,
  energia: 10,
  xp: 0,
  nivel: 1,
  moedas: 0,
  items: [] // {id:'kettlebell', bonus:{forca:+2}}
});

export function addXP(state, amount) {
  state.xp += amount;
  const needed = Math.floor(100 * Math.pow(1.2, state.nivel - 1));
  if (state.xp >= needed) {
    state.nivel++;
    state.forca += 2;
    state.xp -= needed;
  }
}

export function answerCorrect(state) {
  state.forca += 1;
  state.moedas += 2;
  addXP(state, 25);
}

export function answerWrong(state) {
  state.energia = Math.max(0, state.energia - 1);
}

export type ColorPageNo = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type ColorTestStep = -1 | 0 | 100 | 200 | 300 | 400 | 500 | 600 | 700;

export type SpeedPageNo = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export const colorPages = [0, 1, 2, 3, 4, 5, 6, 7];
export const speedPages = [0, 1, 2, 3, 4, 5, 6, 7];

export type ColorTestResultType = {
  color_step: ColorTestStep;
  user_input: string;
};

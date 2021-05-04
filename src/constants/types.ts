export type ColorPageNo = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type ColorTestStep = -1 | 0 | 100 | 200 | 300 | 400 | 500 | 600 | 700;

export type SpeedPageNo = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export const colorPages = [0, 1, 2, 3, 4, 5, 6, 7];
export const speedPages = [0, 1, 2, 3, 4, 5, 6, 7];

export type ColorTestResultType = {
  color_step: ColorTestStep;
  user_input: string;
};

// for retreiving data from DB
type User = {
  age: number;
  answers: {
    darkVsLight: string;
    readingTime: string;
    usingDarkmode: string;
  };
  gender: string;
  more_bad: string;
};

export type History = {
  color: ColorTestHistory;
  created_at: Date;
  speed: SpeedTestHistory;
  user: User;
};

export type ColorTestHistory = Record<ColorPageNo, ColorTestStep>;
export type SpeedTestHistory = Record<SpeedPageNo, string>;

export type UserInfo = {
  age: string;
  gender: string;
  answers: {
    darkVsLight: string;
    usingDarkmode: string;
    readingTime: string;
  };
  more_bad: string;
};

export type HistoryAndId = {
  id: string;
  data: History;
};

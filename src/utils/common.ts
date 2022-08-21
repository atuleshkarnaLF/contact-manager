import pinterpolate, { Params } from "pinterpolate";

export const interpolate = (str: string, params: Params) =>
  pinterpolate(str, params);

import { useEffect } from "react";

/**
 * Register an effect to run only once on component mount
 * @param {Function} effectFn
 * @returns
 */
// eslint-disable-next-line react-hooks/exhaustive-deps
const useMountEffect = (effectFn: () => void) => useEffect(effectFn, []);

export default useMountEffect;

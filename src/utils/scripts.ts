/**
 * Funcao para setar vlaor em satate imutavl
 */
export function produce<T>(cb: (state: T) => void) {
  return (state: T) => {
    const copy = { ...state };
    cb(copy);
    return copy;
  };
}

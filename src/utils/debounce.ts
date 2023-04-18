export const debounce = (func: (...args: any) => void, delay: number) => {
  let timer: number | null;

  return (...args: any) => {
    if (timer != null) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

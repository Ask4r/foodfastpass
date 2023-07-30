/**
* wraps callback that can be called at most once in a timeout
*/
export default function (callback: Function, timeout: number): Function {

  let available = true;

  return () => {

    if (available) {
      callback();

      available = false;

      setTimeout(() => {
        available = true;
      }, timeout);
    }

  };
}
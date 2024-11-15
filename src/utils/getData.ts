const BASE_URL = 'https://github.com/DenLysiak/solution-task-inforce/api/';

// returns a promise resolved after a given delay to imitate certain delay of data loading
function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export function getData<T>(url: string): Promise<T> {
  return wait(2000)
    .then(() => fetch(BASE_URL + url))
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.text}`);
      }

      return response.json();
    });
}
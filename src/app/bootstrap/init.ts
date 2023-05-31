export function initializeApp(): Promise<any> {
  return new Promise((resolve): any => {
    setTimeout(() => {
      resolve(null);
    }, 200);
  });
}

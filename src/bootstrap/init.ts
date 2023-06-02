export function initializeApp(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 300);
  });
}

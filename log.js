const LOG_PREFIX = "[🤤 dirty-scraper]";

export const log = (...args) => console.log(LOG_PREFIX, ...args);
export const time = (str = "") => {
  console.time(`${LOG_PREFIX} ${str}`);
  return () => console.timeEnd(`${LOG_PREFIX} ${str}`);
};

import { eventsList } from "./events-list.js";

// localStorage.setItem('events', '12')
// localStorage.clear();
export function createNewId() {
  const index = eventsList.length;
  return index;
}
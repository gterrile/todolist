
export function eventsList() {
  if (localStorage.listAllEvents) {
    return localStorage.listAllEvents;
  }
  else {
    let listAllEvents = [];
    localStorage.setItem('listAllEvents', JSON.stringify(listAllEvents));
    return localStorage.listAllEvents;
  }
}

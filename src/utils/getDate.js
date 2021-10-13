export function getDate(stateSetter) {
  const now = Date.now();
  const dateNow = new Date(now);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateFormat = String(new Intl.DateTimeFormat('pt-BR', dateOptions).format(dateNow));
  stateSetter(dateFormat);
}

export default function recommend(deg) {
  console.log(deg);
  let gender = '';
  if (deg > 32) {
    gender = 'Rock';
  }
  if (deg <= 32 && deg > 24) {
    gender = 'Pop';
  }
  if (deg <= 24 && deg > 16) {
    gender = 'Música Clássica';
  }
  if (deg <= 16) {
    gender = 'Lofi';
  }
  return gender;
}

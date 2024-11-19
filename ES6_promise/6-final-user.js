import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const results = [];

  results.push(await signUpUser(firstName, lastName));
  results.push(await uploadPhoto(filename).catch((reject) => reject));
  return results;
}

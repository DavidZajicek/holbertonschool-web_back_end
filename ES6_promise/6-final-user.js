import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const userReponse = await signUpUser(firstName, lastName);
  const photoReponse = await uploadPhoto(filename).catch((reject) => reject);

  return [userReponse, photoReponse];
}

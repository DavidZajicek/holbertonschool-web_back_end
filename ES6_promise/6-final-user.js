import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  return Promise.all([
    signUpUser(firstName, lastName).then((value) => ({
      status: 'fulfilled',
      value,
    })),
    uploadPhoto(filename).catch((e) => ({
      status: 'rejected',
      value: e.toString(),
    })),
  ]);
}

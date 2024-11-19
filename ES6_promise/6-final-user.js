import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return [
    new Promise((resolve) => {
      signUpUser(firstName, lastName);
    }),
    new Promise((resolve) => {
      uploadPhoto(filename);
    }).catch((reject) => reject),
  ];
}

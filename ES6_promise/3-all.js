import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const results = [];
  await uploadPhoto()
    .then((result) => results.push(result.body))
    .catch(() => console.log('Signup system offline'));
  await createUser()
    .then((result) => {
      results.push(result.firstName);
      results.push(result.lastName);
    })
    .catch(() => console.log('Signup system offline'));
  console.log(results.join(' '));
}

import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const results = [];
  await uploadPhoto().then((result) => results.push(result.body));
  await createUser().then((result) => {
    results.push(result.firstName);
    results.push(result.lastName);
  });
  console.log(results.join(' '));
}

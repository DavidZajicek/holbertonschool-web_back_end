import handleProfileSignup from './6-final-user';

async function runProfileSignup() {
  const response = await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');
  console.log(response);
}

runProfileSignup();

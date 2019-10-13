export const validation = {
  email,
  password
};

function email(email: string) {
  const emailRex = /\\S+@\\S+\\.\\S+/;
  return emailRex.test(email);
}

function password(password: string) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/g;
  return re.test(password);
}

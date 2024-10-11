export function getNameErrorMessage(length: number) {
  const message = !length
    ? 'Name can not be empty'
    : length < 3
    ? 'Name must be at least 3 characters long'
    : 'Name must have only letters';
  return message;
}

export function getEmailErrorMessage(length: number) {
  const message = !length
    ? 'Email can not be empty'
    : 'Invalid email. e.g., test@example.com';
  return message;
}

export function getMessageErrorMessage(length: number) {
  const message = !length
    ? 'Message can not be empty'
    : 'Message must be at least 4 characters long';
  return message;
}

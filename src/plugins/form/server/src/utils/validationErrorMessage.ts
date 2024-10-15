export const validationErrorMessage = (error: any) => {
  let message: String;
  if (error.name === 'ValidationError') {
    message = 'There is already an account associated with that email';
  } else {
    message = error.message;
  }
  return message;
};

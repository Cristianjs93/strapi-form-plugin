export const validationErrorMessage = (error: any) => {
  let message = 'There is already an account associated with that ';
  if (error.name === 'ValidationError') {
    error.details.errors.forEach((err) => {
      err.path.forEach((e) => {
        message += e;
      });
    });
  } else {
    message = error.message;
  }
  return message;
};

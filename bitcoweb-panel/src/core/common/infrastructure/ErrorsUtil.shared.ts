import type { HTTPErrorType, HandledErrorType } from '@core/common';

export const reformatErrors = (
  err?: HTTPErrorType
): HandledErrorType | undefined => {
  if (!err) return undefined;
  const error: HandledErrorType = {
    errors: [],
    status: 0,
  };
  if (err.response) {
    error.status = err.response.status;
    if (error.status === 422) {
      if (err.response.data.errors) {
        Object.entries(err.response.data.errors).forEach((item) => {
          item[1].forEach((message) => error.errors.push(message));
        });
      } else {
        error.errors.push(err.response.data.title);
      }
    }
  } else if (err.request) {
    error.status = err.request.status;
    error.errors.push(err.message);
  } else if (err.message === 'canceled') {
    error.errors.push(err.message);
  } else {
    console.error(err);
  }
  return error;
};

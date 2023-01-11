import type { HTTPErrorType } from '@/core/common';
import { Presenter } from '@/core/common';

export class ApplicationPresenter<T> extends Presenter<T> {
  notifySuccess(data: T) {
    this.notify(data);
  }

  notifyError(error: HTTPErrorType) {
    this.notify(undefined, error);
  }
}

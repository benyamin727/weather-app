import type { HTTPErrorType } from '@/core/common';

export interface IPresenter<T> {
  notifySuccess(data: T): void;

  notifyError(data: HTTPErrorType): void;
}

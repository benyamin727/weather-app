import type { HandledErrorType, HTTPErrorType } from '@/core/common';
import { reformatErrors } from '@core/common/infrastructure/ErrorsUtil.shared';

export type Subscriber<T, ErrorType> = (result?: T, error?: ErrorType) => void;
export type ErrorHandler<T> = (error?: T) => void;

export interface SubscriberData<T> {
  subscriber: Subscriber<T, HandledErrorType>;
  errorHandler: ErrorHandler<HandledErrorType>;
}

export class Presenter<T> {
  protected subscribers: Map<symbol, SubscriberData<T>>;

  constructor() {
    this.subscribers = new Map();
  }

  notify(data?: T, error?: HTTPErrorType): void {
    for (const [key, { subscriber, errorHandler }] of this.subscribers) {
      const reformattedError = reformatErrors(error);
      subscriber(data, reformattedError);
      errorHandler(reformattedError);
      this.unsubscribe(key);
    }
  }

  public subscribe(
    subscriber: Subscriber<T, HandledErrorType>,
    errorHandler: ErrorHandler<HandledErrorType>
  ): symbol {
    const key = Symbol();
    this.subscribers.set(key, { subscriber, errorHandler });
    return key;
  }

  private unsubscribe(key: symbol): void {
    this.subscribers.delete(key);
  }
}

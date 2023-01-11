import type { IPresenter } from '@/core/common';

export interface IQueryService<Request, Response> {
  execute(
    presenter: IPresenter<Response>,
    request?: Request,
    abortController?: AbortController
  ): void;
}

export interface ICommandService<Request, Response> {
  execute(
    presenter: IPresenter<Response>,
    request: Request,
    abortController?: AbortController
  ): void;
}

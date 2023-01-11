import type { HTTPErrorType, IQueryService, IPresenter } from '@core/common';
import type {
  IMaintenanceQueryRepository,
  MaintenanceGetProgressRequestModel,
  MaintenanceGetProgressResponseModel,
  MaintenanceGetNextRequestModel,
  MaintenanceGetNextResponseModel,
} from '@core//weather/api';

export class MaintenanceGetProgressService
  implements
    IQueryService<
      MaintenanceGetProgressRequestModel,
      MaintenanceGetProgressResponseModel
    >
{
  constructor(private repository: IMaintenanceQueryRepository) {}

  async execute(
    presenter: IPresenter<MaintenanceGetProgressResponseModel>,
    request: MaintenanceGetProgressRequestModel,
    abortController?: AbortController
  ) {
    try {
      const response = await this.repository.getProgress(
        request,
        abortController
      );
      presenter.notifySuccess(response as MaintenanceGetProgressResponseModel);
    } catch (error) {
      presenter.notifyError(error as HTTPErrorType);
    }
  }
}

export class MaintenanceGetNextService
  implements
    IQueryService<
      MaintenanceGetNextRequestModel,
      MaintenanceGetNextResponseModel
    >
{
  constructor(private repository: IMaintenanceQueryRepository) {}

  async execute(
    presenter: IPresenter<MaintenanceGetNextResponseModel>,
    request: MaintenanceGetNextRequestModel,
    abortController?: AbortController
  ) {
    try {
      const response = await this.repository.getNext(request, abortController);
      presenter.notifySuccess(response as MaintenanceGetNextResponseModel);
    } catch (error) {
      presenter.notifyError(error as HTTPErrorType);
    }
  }
}

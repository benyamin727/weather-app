import type { HTTPErrorType } from '@core/common';
import type {
  MaintenanceGetProgressRequestModel,
  MaintenanceGetProgressResponseModel,
  MaintenanceGetNextRequestModel,
  MaintenanceGetNextResponseModel,
} from '@core//weather/api';

export interface IMaintenanceQueryRepository {
  getProgress(
    data: MaintenanceGetProgressRequestModel,
    abortController?: AbortController
  ): Promise<MaintenanceGetProgressResponseModel | HTTPErrorType>;

  getNext(
    data: MaintenanceGetNextRequestModel,
    abortController?: AbortController
  ): Promise<MaintenanceGetNextResponseModel | HTTPErrorType>;
}

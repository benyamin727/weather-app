import type { Axios } from 'axios';
import type { HTTPErrorType } from '@core/common';
import { UserClient } from '@core/common';
import type {
  IMaintenanceQueryRepository,
  MaintenanceGetProgressRequestModel,
  MaintenanceGetProgressResponseModel,
  MaintenanceGetNextRequestModel,
  MaintenanceGetNextResponseModel,
} from '@core//weather/api';

export class MaintenanceQueryRepository implements IMaintenanceQueryRepository {
  private http: Axios;

  private baseUrl = '';

  constructor() {
    this.http = UserClient.getInstance();
  }

  getProgress(
    request: MaintenanceGetProgressRequestModel,
    abortController?: AbortController
  ): Promise<MaintenanceGetProgressResponseModel | HTTPErrorType> {
    return this.http.get(
      `${this.baseUrl}/aircraft-maintenance-progress/get-header-by-aircraft-id`,
      {
        params: { ...request },
        ...(abortController && { signal: abortController.signal }),
      }
    );
  }

  getNext(
    request: MaintenanceGetNextRequestModel,
    abortController?: AbortController
  ): Promise<MaintenanceGetNextResponseModel | HTTPErrorType> {
    return this.http.get(
      `${this.baseUrl}/aircraft-next-maintenance/get-by-aircraft-id`,
      {
        params: { ...request },
        ...(abortController && { signal: abortController.signal }),
      }
    );
  }
}

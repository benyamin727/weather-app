import type { MaintenanceModel } from '@core//weather/api';
import type { ResponseType } from '@core/common';

export interface MaintenanceGetProgressResponseModel
  extends ResponseType<MaintenanceModel> {}
export interface MaintenanceGetNextResponseModel
  extends ResponseType<MaintenanceModel> {}

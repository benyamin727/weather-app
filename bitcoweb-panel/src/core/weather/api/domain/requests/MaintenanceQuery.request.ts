import type { MaintenanceModel } from '@core//weather/api';

export interface MaintenanceGetProgressRequestModel
  extends Pick<MaintenanceModel, 'aircraftId'> {}
export interface MaintenanceGetNextRequestModel
  extends Pick<MaintenanceModel, 'aircraftId'> {}

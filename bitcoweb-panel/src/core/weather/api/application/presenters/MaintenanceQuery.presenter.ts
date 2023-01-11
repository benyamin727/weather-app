import { ApplicationPresenter } from '@core/common/application/applicationPresenter';
import type {
  MaintenanceGetProgressResponseModel,
  MaintenanceGetNextResponseModel,
} from '@core//weather/api';

export class MaintenanceGetProgressPresenter extends ApplicationPresenter<MaintenanceGetProgressResponseModel> {}
export class MaintenanceGetNextPresenter extends ApplicationPresenter<MaintenanceGetNextResponseModel> {}

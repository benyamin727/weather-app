import type {
  MaintenanceGetProgressRequestModel,
  MaintenanceGetNextRequestModel,
} from '@core//weather/api';

import {
  MaintenanceQueryRepository,
  MaintenanceGetProgressService,
  MaintenanceGetProgressPresenter,
  MaintenanceGetNextService,
  MaintenanceGetNextPresenter,
} from '@core//weather/api';

export class MaintenanceQueryController {
  getProgress(
    data: MaintenanceGetProgressRequestModel,
    abortController: AbortController
  ): MaintenanceGetProgressPresenter {
    const presenter = new MaintenanceGetProgressPresenter();

    new MaintenanceGetProgressService(new MaintenanceQueryRepository()).execute(
      presenter,
      data,
      abortController
    );
    return presenter;
  }

  getNext(
    data: MaintenanceGetNextRequestModel,
    abortController: AbortController
  ): MaintenanceGetNextPresenter {
    const presenter = new MaintenanceGetNextPresenter();

    new MaintenanceGetNextService(new MaintenanceQueryRepository()).execute(
      presenter,
      data,
      abortController
    );
    return presenter;
  }
}

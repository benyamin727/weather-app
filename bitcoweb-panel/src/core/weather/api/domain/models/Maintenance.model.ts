import type { AircraftId } from '@/core';

export type MaintenanceId = number;

export interface MaintenanceModel {
  id: MaintenanceId;
  aircraftId: AircraftId;
  aircraftMaintenanceProgressDetails:any
}

import type { AxiosError, AxiosResponse } from 'axios';

type ErrorResponseType = {
  errors?: {
    [key: string]: string[];
  };
  status: number;
  title: string;
  // status: number;
};

export type HTTPErrorType = AxiosError<ErrorResponseType>;

export interface HandledErrorType {
  errors: string[];
  status: number;
}

type GeneralResponseType<T> = {
  data: T;
  statusCode: number;
  message: string;
};

export type ResponseType<T> = AxiosResponse<GeneralResponseType<T>>;

export type PaginationType = {
  page: number;
  rowsPerPage: number;
  rowsNumber?: number;
  descending?: boolean;
  sortBy?: string;
};

export type PaginatedResponseType<T> = AxiosResponse<
  GeneralResponseType<T[]> & {
    pagination: Omit<PaginationType, 'filters'>;
  }
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type PaginatedRequestType<T> = PaginationType & {
  search?: string;
  filters: Record<string, unknown>;
};

import type { Axios } from 'axios';
import axios from 'axios';

export class UserClient {
  private static instance: Axios;
  private static unAuthorizedInstance: Axios;

  public static getInstance(): Axios {
    const token = localStorage.getItem('token');
    let tokenHasChanged = true;
    if (
      this.instance &&
      !!(
        this.instance.defaults.headers as unknown as Record<
          'Authorization',
          string
        >
      )['Authorization']
    )
      tokenHasChanged =
        (
          this.instance.defaults.headers as unknown as Record<
            'Authorization',
            string
          >
        )['Authorization'].replace('Bearer ', '') !== token;

    if (tokenHasChanged) {
      this.instance = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL,
        headers: {
          ...(token && { Authorization: 'Bearer ' + token }),
        },
      });
    }

    return this.instance;
  }

  public static getUnAuthorizedInstance(): Axios {
    this.unAuthorizedInstance = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return this.unAuthorizedInstance;
  }
}

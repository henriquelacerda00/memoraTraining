import { User } from './user.interface';

export interface AuthResponse {
  accessToken: string;
  tokenType: string;
  user: User;
}
export interface IUser {
  role:           'USER' | 'ADMIN';
  name:           string;
  email:          string;
  description:    string;
  subscribers:    string[];
  subscriptions:  string[];
  songs:          string[];
  favouriteSongs: any[];
  createdAt:      string;
  updatedAt:      string;
  publicProfile:  boolean;
  userId:         string;
}
export interface IUser {
  name:           string;
  email:          string;
  description:    string;
  subscribers:    any[];
  subscriptions:  any[];
  songs:          any[];
  favouriteSongs: any[];
  publicProfile:  boolean;
  role:           string;
  createdAt:      string;
  updatedAt:      string;
  userId:         string;
}
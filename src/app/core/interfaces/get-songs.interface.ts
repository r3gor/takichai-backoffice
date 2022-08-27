// Generated by https://quicktype.io

export interface IGetSongs {
  ok:         boolean;
  songs:      ISong[];
  totalsongs: number;
}

export interface ISong {
  name:         string;
  songUrl:      string;
  year:         number;
  genre:        string;
  description:  string;
  author:       string;
  popularity:   string;
  imageUrl?:    string;
  duration:     string;
  instrumental: boolean;
  mood:         string;
  createdAt:    string;
  updatedAt:    string;
  songId:       string;
}
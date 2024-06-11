import { User } from "../user/User";
import { Video } from "../video/Video";

export type Playlist = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
  videos?: Array<Video>;
};

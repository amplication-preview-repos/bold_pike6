import { Comment } from "../comment/Comment";
import { Playlist } from "../playlist/Playlist";
import { JsonValue } from "type-fest";
import { Video } from "../video/Video";

export type User = {
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  playlists?: Array<Playlist>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  videos?: Array<Video>;
};

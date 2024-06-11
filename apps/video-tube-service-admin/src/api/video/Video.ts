import { Comment } from "../comment/Comment";
import { Playlist } from "../playlist/Playlist";
import { User } from "../user/User";

export type Video = {
  comments?: Array<Comment>;
  createdAt: Date;
  description: string | null;
  dislikeCount: number | null;
  id: string;
  likeCount: number | null;
  playlist?: Playlist | null;
  thumbnailUrl: string | null;
  title: string | null;
  updatedAt: Date;
  url: string | null;
  user?: User | null;
  viewCount: number | null;
};

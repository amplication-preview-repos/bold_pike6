import { CommentUpdateManyWithoutVideosInput } from "./CommentUpdateManyWithoutVideosInput";
import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoUpdateInput = {
  comments?: CommentUpdateManyWithoutVideosInput;
  description?: string | null;
  dislikeCount?: number | null;
  likeCount?: number | null;
  playlist?: PlaylistWhereUniqueInput | null;
  thumbnailUrl?: string | null;
  title?: string | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
  viewCount?: number | null;
};

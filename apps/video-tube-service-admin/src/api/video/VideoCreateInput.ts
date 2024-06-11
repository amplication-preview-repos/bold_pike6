import { CommentCreateNestedManyWithoutVideosInput } from "./CommentCreateNestedManyWithoutVideosInput";
import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoCreateInput = {
  comments?: CommentCreateNestedManyWithoutVideosInput;
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

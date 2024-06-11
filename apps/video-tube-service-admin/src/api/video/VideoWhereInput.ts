import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlaylistWhereUniqueInput } from "../playlist/PlaylistWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoWhereInput = {
  comments?: CommentListRelationFilter;
  description?: StringNullableFilter;
  dislikeCount?: IntNullableFilter;
  id?: StringFilter;
  likeCount?: IntNullableFilter;
  playlist?: PlaylistWhereUniqueInput;
  thumbnailUrl?: StringNullableFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  viewCount?: IntNullableFilter;
};

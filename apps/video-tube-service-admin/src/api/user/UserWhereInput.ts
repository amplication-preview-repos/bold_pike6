import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlaylistListRelationFilter } from "../playlist/PlaylistListRelationFilter";
import { VideoListRelationFilter } from "../video/VideoListRelationFilter";

export type UserWhereInput = {
  comments?: CommentListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  playlists?: PlaylistListRelationFilter;
  username?: StringFilter;
  videos?: VideoListRelationFilter;
};

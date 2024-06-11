import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { PlaylistUpdateManyWithoutUsersInput } from "./PlaylistUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VideoUpdateManyWithoutUsersInput } from "./VideoUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  comments?: CommentUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  playlists?: PlaylistUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
  videos?: VideoUpdateManyWithoutUsersInput;
};

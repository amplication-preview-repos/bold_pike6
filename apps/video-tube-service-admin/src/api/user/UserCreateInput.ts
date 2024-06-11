import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { PlaylistCreateNestedManyWithoutUsersInput } from "./PlaylistCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { VideoCreateNestedManyWithoutUsersInput } from "./VideoCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  comments?: CommentCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  playlists?: PlaylistCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
  videos?: VideoCreateNestedManyWithoutUsersInput;
};

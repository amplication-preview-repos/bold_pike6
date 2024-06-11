import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VideoCreateNestedManyWithoutPlaylistsInput } from "./VideoCreateNestedManyWithoutPlaylistsInput";

export type PlaylistCreateInput = {
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
  videos?: VideoCreateNestedManyWithoutPlaylistsInput;
};

import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VideoUpdateManyWithoutPlaylistsInput } from "./VideoUpdateManyWithoutPlaylistsInput";

export type PlaylistUpdateInput = {
  description?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
  videos?: VideoUpdateManyWithoutPlaylistsInput;
};

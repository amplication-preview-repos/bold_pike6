import { SortOrder } from "../../util/SortOrder";

export type VideoOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  dislikeCount?: SortOrder;
  id?: SortOrder;
  likeCount?: SortOrder;
  playlistId?: SortOrder;
  thumbnailUrl?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  userId?: SortOrder;
  viewCount?: SortOrder;
};

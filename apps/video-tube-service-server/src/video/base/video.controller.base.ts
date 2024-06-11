/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { VideoService } from "../video.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VideoCreateInput } from "./VideoCreateInput";
import { Video } from "./Video";
import { VideoFindManyArgs } from "./VideoFindManyArgs";
import { VideoWhereUniqueInput } from "./VideoWhereUniqueInput";
import { VideoUpdateInput } from "./VideoUpdateInput";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class VideoControllerBase {
  constructor(
    protected readonly service: VideoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Video })
  @nestAccessControl.UseRoles({
    resource: "Video",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createVideo(@common.Body() data: VideoCreateInput): Promise<Video> {
    return await this.service.createVideo({
      data: {
        ...data,

        playlist: data.playlist
          ? {
              connect: data.playlist,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,
        dislikeCount: true,
        id: true,
        likeCount: true,

        playlist: {
          select: {
            id: true,
          },
        },

        thumbnailUrl: true,
        title: true,
        updatedAt: true,
        url: true,

        user: {
          select: {
            id: true,
          },
        },

        viewCount: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Video] })
  @ApiNestedQuery(VideoFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Video",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async videos(@common.Req() request: Request): Promise<Video[]> {
    const args = plainToClass(VideoFindManyArgs, request.query);
    return this.service.videos({
      ...args,
      select: {
        createdAt: true,
        description: true,
        dislikeCount: true,
        id: true,
        likeCount: true,

        playlist: {
          select: {
            id: true,
          },
        },

        thumbnailUrl: true,
        title: true,
        updatedAt: true,
        url: true,

        user: {
          select: {
            id: true,
          },
        },

        viewCount: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Video })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Video",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async video(
    @common.Param() params: VideoWhereUniqueInput
  ): Promise<Video | null> {
    const result = await this.service.video({
      where: params,
      select: {
        createdAt: true,
        description: true,
        dislikeCount: true,
        id: true,
        likeCount: true,

        playlist: {
          select: {
            id: true,
          },
        },

        thumbnailUrl: true,
        title: true,
        updatedAt: true,
        url: true,

        user: {
          select: {
            id: true,
          },
        },

        viewCount: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Video })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Video",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateVideo(
    @common.Param() params: VideoWhereUniqueInput,
    @common.Body() data: VideoUpdateInput
  ): Promise<Video | null> {
    try {
      return await this.service.updateVideo({
        where: params,
        data: {
          ...data,

          playlist: data.playlist
            ? {
                connect: data.playlist,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,
          dislikeCount: true,
          id: true,
          likeCount: true,

          playlist: {
            select: {
              id: true,
            },
          },

          thumbnailUrl: true,
          title: true,
          updatedAt: true,
          url: true,

          user: {
            select: {
              id: true,
            },
          },

          viewCount: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Video })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Video",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteVideo(
    @common.Param() params: VideoWhereUniqueInput
  ): Promise<Video | null> {
    try {
      return await this.service.deleteVideo({
        where: params,
        select: {
          createdAt: true,
          description: true,
          dislikeCount: true,
          id: true,
          likeCount: true,

          playlist: {
            select: {
              id: true,
            },
          },

          thumbnailUrl: true,
          title: true,
          updatedAt: true,
          url: true,

          user: {
            select: {
              id: true,
            },
          },

          viewCount: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/comments")
  @ApiNestedQuery(CommentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Comment",
    action: "read",
    possession: "any",
  })
  async findComments(
    @common.Req() request: Request,
    @common.Param() params: VideoWhereUniqueInput
  ): Promise<Comment[]> {
    const query = plainToClass(CommentFindManyArgs, request.query);
    const results = await this.service.findComments(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,
        id: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        video: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/comments")
  @nestAccessControl.UseRoles({
    resource: "Video",
    action: "update",
    possession: "any",
  })
  async connectComments(
    @common.Param() params: VideoWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        connect: body,
      },
    };
    await this.service.updateVideo({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/comments")
  @nestAccessControl.UseRoles({
    resource: "Video",
    action: "update",
    possession: "any",
  })
  async updateComments(
    @common.Param() params: VideoWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        set: body,
      },
    };
    await this.service.updateVideo({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/comments")
  @nestAccessControl.UseRoles({
    resource: "Video",
    action: "update",
    possession: "any",
  })
  async disconnectComments(
    @common.Param() params: VideoWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        disconnect: body,
      },
    };
    await this.service.updateVideo({
      where: params,
      data,
      select: { id: true },
    });
  }
}

import { RabbitMQModule } from "./rabbitmq/rabbitmq.module";
import { Module } from "@nestjs/common";
import { CommentModule } from "./comment/comment.module";
import { VideoModule } from "./video/video.module";
import { PlaylistModule } from "./playlist/playlist.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    RabbitMQModule,
    ACLModule,
    AuthModule,
    CommentModule,
    VideoModule,
    PlaylistModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
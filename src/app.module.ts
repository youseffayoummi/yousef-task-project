import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule, CommentsModule, PostsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

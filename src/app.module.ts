import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule }from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppartmentsModule } from './appartments/appartments.module';

const config = require("../config.js");

@Module({
  imports: [
    GraphQLModule.forRoot({driver: ApolloDriver, autoSchemaFile: true}),
    MongooseModule.forRoot(config.MONGO_DB),
    AppartmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

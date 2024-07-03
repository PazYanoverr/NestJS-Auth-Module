/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ApiKeyListRelationFilter } from "../../apiKey/base/ApiKeyListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CredentialListRelationFilter } from "../../credential/base/CredentialListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { WebhookListRelationFilter } from "../../webhook/base/WebhookListRelationFilter";

@InputType()
class AppModelWhereInput {
  @ApiProperty({
    required: false,
    type: () => ApiKeyListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ApiKeyListRelationFilter)
  @IsOptional()
  @Field(() => ApiKeyListRelationFilter, {
    nullable: true,
  })
  apiKey?: ApiKeyListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: () => CredentialListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CredentialListRelationFilter)
  @IsOptional()
  @Field(() => CredentialListRelationFilter, {
    nullable: true,
  })
  credentials?: CredentialListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  dirName?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  keys?: JsonFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: () => WebhookListRelationFilter,
  })
  @ValidateNested()
  @Type(() => WebhookListRelationFilter)
  @IsOptional()
  @Field(() => WebhookListRelationFilter, {
    nullable: true,
  })
  webhook?: WebhookListRelationFilter;
}

export { AppModelWhereInput as AppModelWhereInput };

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Team as PrismaTeam,
  EventType as PrismaEventType,
  Membership as PrismaMembership,
} from "@prisma/client";

export class TeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TeamCountArgs, "select">): Promise<number> {
    return this.prisma.team.count(args);
  }

  async teams(args: Prisma.TeamFindManyArgs): Promise<PrismaTeam[]> {
    return this.prisma.team.findMany(args);
  }
  async team(args: Prisma.TeamFindUniqueArgs): Promise<PrismaTeam | null> {
    return this.prisma.team.findUnique(args);
  }
  async createTeam(args: Prisma.TeamCreateArgs): Promise<PrismaTeam> {
    return this.prisma.team.create(args);
  }
  async updateTeam(args: Prisma.TeamUpdateArgs): Promise<PrismaTeam> {
    return this.prisma.team.update(args);
  }
  async deleteTeam(args: Prisma.TeamDeleteArgs): Promise<PrismaTeam> {
    return this.prisma.team.delete(args);
  }

  async findEventTypes(
    parentId: number,
    args: Prisma.EventTypeFindManyArgs
  ): Promise<PrismaEventType[]> {
    return this.prisma.team
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .eventTypes(args);
  }

  async findMembers(
    parentId: number,
    args: Prisma.MembershipFindManyArgs
  ): Promise<PrismaMembership[]> {
    return this.prisma.team
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .members(args);
  }
}

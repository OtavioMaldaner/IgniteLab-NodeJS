import { Injectable } from "@nestjs/common";
import { Notification } from "@app/entities/notification";
import { NotificationsRepository } from "@app/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
    constructor(private prismaService: PrismaService) {

    }
    async findById(notificationId: string): Promise<Notification | null> {
        throw new Error("Method not implemented.");
    }
    countManyByRecipientId(recipientId: string): Promise<number> {
        throw new Error("Method not implemented.");
    }
    async create(notification: Notification): Promise<void> {
        const notificationRegister = PrismaNotificationMapper.toPrisma(notification);
        await this.prismaService.notification.create({
            data: notificationRegister
        });
    }
    async save(notification: Notification): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
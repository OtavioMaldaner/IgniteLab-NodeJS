import { Notification } from "@app/entities/notification";
import { NotificationsRepository } from "@app/repositories/notifications-repository";

export class InMemoryNotificationsRepository implements NotificationsRepository {
    public notifications: Notification[] = [];
    async findById(notificationId: string): Promise<Notification | null> {
        const notification = this.notifications.find((item) => (item.id === notificationId));
        if (!notification) {
            return null;
        }
        return notification;
    }
    async countManyByRecipientId(recipientId: string): Promise<number> {
        return this.notifications.filter((notification) => notification.recipientId === recipientId).length;
    }
    async create(notification: Notification) {
        this.notifications.push(notification);
    }
    async save(notification: Notification): Promise<void> {
        const notificationsIndex = this.notifications.findIndex((item) => item.id === notification.id);
        if (notificationsIndex >= 0) {
            this.notifications[notificationsIndex] = notification;
        }
    }
}
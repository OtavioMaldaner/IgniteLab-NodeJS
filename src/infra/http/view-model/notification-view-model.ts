import { Notification } from "@app/entities/notification";

export class NotificationViewModel {
    static toFrontend(notification: Notification) {
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.category,
            recipientId: notification.recipientId
        }
    }
}
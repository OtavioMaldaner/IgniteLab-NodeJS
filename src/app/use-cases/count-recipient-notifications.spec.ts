import { Content } from "@app/entities/content";
import { Notification } from "@app/entities/notification";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CountRecipientNotifications } from "./count-recipient-notifications";


describe('Count recipient notifications', () => {
    it('should be able to count recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);

            await notificationsRepository.save(new Notification({
                category: 'social',
                content: new Content('Nova solicitação de amizade'),
                recipientId: 'recipient-1'
            }));

            await notificationsRepository.save(new Notification({
                category: 'social',
                content: new Content('Nova solicitação de amizade'),
                recipientId: 'recipient-1'
            }));

            await notificationsRepository.save(new Notification({
                category: 'social',
                content: new Content('Nova solicitação de amizade'),
                recipientId: 'recipient-2'
            }));

        const { count } = await countRecipientNotifications.execute({
            recipientId: 'recipient-1'
        });
        expect(count).toEqual(2);
    });
});
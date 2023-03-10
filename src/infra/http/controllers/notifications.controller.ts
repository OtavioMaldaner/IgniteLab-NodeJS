import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from '@app/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-model/notification-view-model';
// import { AppService } from './app.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {

  }
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category
    });

    return { 
      notification: NotificationViewModel.toFrontend(notification)
    };
  }
}

import { Component } from '@angular/core';
import { LocalNotifications, ScheduleOptions } from '@capacitor/local-notifications';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {

  async scheduleNotification() {
    let options: ScheduleOptions = {
      notifications: [
        {
          id: 111,
          title: "Notification Challenge",
          body: "Open to get a fun fact about Brazil",
          largeBody: "The name Brazil comes from a tree named Brazilwood",
          summaryText: "Notification works !"
        }
      ]
    };

    try {
      await LocalNotifications.schedule(options);
    }
    catch(ex) {
      alert(JSON.stringify(ex));
    }
  }

  /* async removeAllNotifications() {
    await LocalNotifications.removeAllDeliveredNotifications().then((res) => {
      alert(JSON.stringify(res));
    });
  } */
}

import { BehaviorSubject } from 'rxjs';
// import { API_URL, JWT_TOKEN } from '../config/config';
import axios from 'axios';

const subscriberDataHeaders = new BehaviorSubject([]);

const headerService = {
  send: function (data) {
    subscriberDataHeaders.next(data);
  },
};

function sendEmail(userName, userEmail) {
  return axios.post(`https://admin.vra.com.ua/email`, {
    to: userEmail,
    from: 'noreply.vra.com.ua@gmail.com',
    subject: `Зворотній зв'язок від vra.com.ua`,
    text: '',
    html: emailTemplate(userName),
    attachments: [
      {
        filename: 'presentation.pdf',
        path:
          'https://storage.googleapis.com/vra-cloud/Presentation_prototype2_1_4960b27998/Presentation_prototype2_1_4960b27998.pdf',
        cid: 'noreply.vra.com.ua@gmail.com',
      },
    ],
  });
}

export { headerService, subscriberDataHeaders, sendEmail };
let emailTemplate = (name) => {
  return `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body
        style="
          font-family: Roboto, sans-serif;
          font-style: normal;
          font-weight: normal;
          color: #5c5c5c;
          padding: 0;
          margin: 0;
        "
      >
        <div
          class="container"
          style="
            max-width: 600px;
            padding: 0 40px 50px;
            background-color: #dfdfdf;
            margin: 0 auto;
          "
        >
          <table
            style="
              border-collapse: collapse;
              border-top-left-radius: 10px;
              border-top-right-radius: 10px;
              overflow: hidden;
              margin-bottom: 16px;
              width: 100%;
            "
          >
            <tr style="background-color: #f7f7f7">
              <td>
                <a href="https://www.vra.com.ua">
                  <img style="width: 100%;" src="https://storage.googleapis.com/vra-cloud/Header_f503a09c7f/Header_f503a09c7f.png" alt="VRA" />
                </a>
              </td>
            </tr>
            <tr>
              <td style="background-color: #f7f7f7; padding: 32px">
                <p style="font-weight: bold; font-size: 28px; line-height: 23px">
                  Привіт ${name},
                </p>
                <p style="font-size: 16px; line-height: 19px">
                  Ми отримали ваше звернення та хочемо повідомити, що наш працівник
                  зовсім скоро з вами зв’яжеться!
                </p>
                <p style="font-size: 16px; line-height: 19px">
                  А поки ви очікуєте, пропонуємо вам переглянути нашу коротеньку PDF
                  презентацію, яка прикріплена у цьому листі. А також долучитись до
                  наших соц мереж.
                </p>
                <p style="font-size: 16px; line-height: 19px">
                  Дякуємо, що обрали якість та досвід. Дякуємо, що обрали VRA!
                </p>

                <a
                  style="color: #5c5c5c; text-decoration: none"
                  href="https://www.facebook.com/vra.com.ua"
                >
                  Facebook www.facebook.com/vra.com.ua</a
                >
                <br />
                <a
                  style="
                    color: #5c5c5c;
                    text-decoration: none;
                    margin-bottom: 32px;
                    display: inline-block;
                  "
                  href="https://www.instagram.com/vra.com.ua/"
                >
                  Instagram www.instagram.com/vra.com.ua</a
                >
                <a
                  style="display: block; color: #5c5c5c; text-decoration: none"
                  href="mailto:vra.com.ua@gmail.com"
                  >vra.com.ua@gmail.com</a
                >
                <a
                  style="display: block; color: #5c5c5c; text-decoration: none"
                  href="”tel:+380503155531″"
                  >+38 (050) 31-555-31</a
                >
                <a
                  style="display: block; color: #5c5c5c; text-decoration: none"
                  href="”tel:+380681104063″"
                  >+38 (068) 11-040-63
                </a>
                <a
                  style="display: block; color: #5c5c5c; text-decoration: none"
                  href="”tel:+380322970197″"
                  >+38 (032) 297-01-97</a
                >
              </td>
            </tr>
          </table>
          <table style="width: 100%">
            <tr>
              <td>
                <a
                  href="https://goo.gl/maps/TXebXtw7FnXNoXMcA"
                  style="margin-bottom: 4px; text-decoration: none; color: #5c5c5c"
                >
                  VRA, м. Львів , вул. Шота Руставелі, 8а кв.2</a
                >
                <br />
                <!-- <a
                  style="
                    font-size: 12px;
                    text-decoration: none;
                    color: #5c5c5c;
                    margin-right: 20px;
                  "
                  href="Unsubscribe"
                  >Unsubscribe</a
                ><a
                  style="font-size: 12px; text-decoration: none; color: #5c5c5c"
                  href="View in browser"
                  >View in browser</a
                > -->
              </td>
              <td style="width: 30px">
                <a href="https://www.facebook.com/vra.com.ua">
                  <img
                    style="display: inline-block; margin-right: 15px"
                    src="https://storage.googleapis.com/vra-cloud/facebook_50223e3940/facebook_50223e3940.png"
                    width="30px"
                    alt="facebook"
                  />
                </a>
              </td>
              <td style="width: 30px">
                <a href="https://www.instagram.com/vra.com.ua/">
                  <img src="https://storage.googleapis.com/vra-cloud/instagram_688e4032bd/instagram_688e4032bd.png" width="30px" alt="instagram" />
                </a>
              </td>
            </tr>
          </table>
        </div>
      </body>
    </html>
  `;
};

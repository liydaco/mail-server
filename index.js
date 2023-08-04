import { render } from "@react-email/render";
import postmark from "postmark";
import { Email } from "./email";

const client = new postmark.ServerClient("d73c6f61-ef11-xxxxxxxxxxx");

const emailHtml = render(Email({ url: "https://example.com" }));

const options = {
  From: "info@example.ai",
  To: "info@example.ai",
  Subject: "hello world",
  HtmlBody: emailHtml,
};

client.sendEmail(options);

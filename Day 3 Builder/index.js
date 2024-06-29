class EmailTemplate {
  constructor({ subject, body, recipients, attachments }) {
    this.subject = subject;
    this.body = body;
    this.recipients = recipients;
    this.attachments = attachments;
  }
}

class EmailBuilder {
  constructor() {
    this.subject = "";
    this.body = "";
    this.recipients = [];
    this.attachments = [];
  }

  setSubject(newSubject) {
    this.subject = newSubject;
    return this;
  }

  setBody(newBody) {
    this.body = newBody;
    return this;
  }

  setRecipients(newRecipients) {
    this.recipients = newRecipients;
    return this;
  }

  addAttachment(newAttachment) {
    this.attachments.push(newAttachment);
    return this;
  }

  build() {
    return new EmailTemplate({
      subject: this.subject,
      body: this.body,
      recipients: this.recipients,
      attachments: this.attachments,
    });
  }
}

const email = new EmailBuilder()
  .setSubject(
    "Welcome to our 100 Days Of 100 Design Pattern Backend Challenge!"
  )
  .setBody("thank you for joining us.")
  .setRecipients(["user@example.com"])
  .addAttachment("sahil.pdf")
  .build();

console.log(email);

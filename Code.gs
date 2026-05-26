// Author : Georg Pernice
// Date : 26.05.2026
// Purpose : Send automated Emails with attached PDF coming from template.

/*
For a Usage Section see the Readme at https://github.com/g14p/simple-gmail-automation/
*/ 

ATTACHMENT_TEMPLATE_ID = "1kt_M7NjuRyQvoStbkd5l0Ys0u5LVXm3CLzYGMRMnRm8" // obtain by right click on file > 'share' > 'link'
ATTACHMENT_NAME = "attached document" + Utilities.formatDate(new Date(), "GMT+2", "yyyyMMdd");
ATTACHMENT_PLACEHOLDERS = {
    "DATUM" : Utilities.formatDate(new Date(), "GMT+2", "dd.MM.yyyy")
  }
// Define this job in specific.
EMAIL_RECIPIENT = "youremailhere@gmail.com";
EMAIL_SUBJECT = "Just a Bot greeting";
EMAIL_MESSAGE = "Hallo Freund. Ich bin dein Bot.";


function substitutePlaceholders(id, placeholders){
  // in the new document replace all placeholders ..
  doc = DocumentApp.openById(id);
  body = doc.getBody();
  for (key in placeholders){
    body.replaceText(key, placeholders[key]);
  Logger.log(key + " was replaced with " + placeholders[key])
  }
  doc.saveAndClose();
  Logger.log(doc + " was edited, such that placeholders where replaced, saved and closed.")
}

function createFromTemplateDocument(template_id){
  // Create google document from template google document in GDrive
  template_doc = DriveApp.getFileById(template_id);
  new_id = template_doc.makeCopy(ATTACHMENT_NAME).getId();
  Logger.log(new_id + " was created. ");
  return new_id;
}

function sendEmail() {

  
  new_id = createFromTemplateDocument(ATTACHMENT_TEMPLATE_ID);

  substitutePlaceholders(new_id, ATTACHMENT_PLACEHOLDERS);

  

  // we attach it and send email...
  GmailApp.sendEmail(EMAIL_RECIPIENT, EMAIL_SUBJECT, EMAIL_MESSAGE,{attachments : [doc.getAs("application/pdf")]}); Logger.log("Just send automated Mail.");

}


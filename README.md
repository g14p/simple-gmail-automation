# simple-gmail-automation
# Purpose
This is a google app script to automatically send emails with attachments. 
The attachment is generated using placeholders and a template file.
# Usage
1. On gDrive create a new Document as an attachment template that will be sent along with the automated emails.
2. Open script.google.com
3. Create new Project
4. You need to paste this code into a new Apps Scripts project (into the Code.gs file)
5. Double Check all the (CAPITALIZED) constants and adapt values where necessary. Especialy
  * email recipient
  * email message
  * email subject
  * attachment template id --> replace this with the id of a document created by you.

6. If you use more Placeholders then DATUM you have to adapt this
7. In the end you have to set a monthly trigger that executes this script every month, on script.google.com

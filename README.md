# simple-gmail-automation

# Usage
On gDrive create a new Document as an attachment template that will be sent along with the automated emails.
Open script.google.com
Create new Project
You need to paste this code into a new Apps Scripts project (into the Code.gs file)
Double Check all the (CAPITALIZED) constants and adapt values where necessary. Especialy
* email recipient
* email message
* email subject
* attachment template id --> replace this with the id of a document created by you.
  If you use more Placeholders then DATUM you have to adapt this

In the end you have to set a monthly trigger that executes this script every month, on script.google.com

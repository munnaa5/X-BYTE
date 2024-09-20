const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUhMVmJSWmVJSXY4ZWdnNFJ4MDF0Nm1tZEp5cURIK0wwaFd2bnp1K1owaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2VXMUNSRGRLRnN5OVlSUG0yT2tYZ05LdkFPejBnUzRYZXU0YnpzRWlIST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwUEVvUnRXTFNvS013MjQ2LzNOckx5cjYyTzVJSk5scWFkWWZPL3BsbGxFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0LzRWQytZUDVMUGRhTk91d1dxWkhEUUFlWlhSaEFlZXFLNnJaWlhzR1NNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9HSlRGeHJMSEJudlUvZlpkdm1ybmpMNmJ1Q2tlZ3dld0J2bnR2WVZ6VVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im43anh2NW83OG5DYWNGZE9JUXJDV2x0cjJpcjZEaGVsenl2NVZNanR1MU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0FJbGNhQVM2WHIvVjBFbjdUS0IrSVFuL0Z6VUd3ZkRJRVpES3VIZzNuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHE5d2F1bkd2aWFvY1JFTmZ4TXB2TkllVi9CMGxxR1hrK3NaSDNqN0hTVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlUbDFvQXAydFBPNUZDckVhRnJUM3VQN3hUcmdadmQwUHlzZFVPNExjM2M5L1ZMSTl1ZmRzNk5WSDFOcGViM1Evdjh4WUk3dWV6dzhDUkFOdEllNWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY5LCJhZHZTZWNyZXRLZXkiOiJBMld0bTNZa20zOWpGQjU5NWhoQlZvcUNNejg4ekNaeTFFVmtrREVQdUw4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI5NzQyNzc2NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGQjQ2NzcyREU3M0IwNzVCMzNFRUZBOUE5RTQwM0U1OSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2ODYzMzc0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyOTc0Mjc3NjRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTg4OEI0ODgwODUwOEVCNzAyOTc3MkQ5NDFBNUM1MjMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjg2MzM3Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjk3NDI3NzY0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjgxQjMwNTY3NDEwRjgyQ0MxRkFBNUZFRjVFMEZFQTkwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY4NjMzODB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI5NzQyNzc2NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5Njk0OTBCOTIwNjlGMTVFRkY0REVDNzU3MkUyNkE0QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2ODYzMzgzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxU3oxTmVjaFRhMmtseHJERXNfYl9nIiwicGhvbmVJZCI6IjM5YzM1ZTVmLTI3ZTYtNDg4MC1hNzZkLWQ5OTUwOGI1MmYzYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlYnc2ZGxHZUw1b1crNU0vbndFWnNwOWRMTzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWS9yVmFlUU4zd1ZXOG9JRURnVEl1NGtDak1BPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVIVFdZOVpRIiwibWUiOnsiaWQiOiI5MjMyOTc0Mjc3NjQ6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNdW5lZWIgUmFuYSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHJqNXVNRUVQV3Z0N2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic1FsYlh1YnVhcEQyalBTSWRzN1V4SFpFRldyZ3AxMHFRZ2dxeDltclIxaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSTRIL0Y1MEduR0FXai9jWHJyQW1GeUFNdkg4MzArTDQwblRDenhCY0xabnpnQ1BHTlZiQ3lYTmdyZ3gvbGJDdFBSQUNXWXZYZ1ozQlVvQjlOeGwvQVE9PSIsImRldmljZVNpZ25hdHVyZSI6InR4YlQ5ZjNHSHFYWTVkVi8wWlMzeDJWaURQOGRpYWc0bjJhOE9lSnNzNndQbHJXVHpBRjVNS3F1bm4xRGkzMVhBMmh6eC9SMUFxSVE4aG9TREV6dGd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjk3NDI3NzY0OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkVKVzE3bTdtcVE5b3owaUhiTzFNUjJSQlZxNEtkZEtrSUlLc2ZacTBkWiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjg2MzM2NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPMGoifQ==' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '+923297427764' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by Hamza': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || true  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || true  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_DELETE_TIME : process.env.BOT_DELETE_TIME || '7',
SECONDS_MINUTES_DAYS : process.env.SECONDS_MINUTES_DAYS || "days",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
  
};

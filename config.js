//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348142909904";
global.sudo = process.env.SUDO || "2348142909904";
global.owner = process.env.OWNER_NUMBER || "2349128213901";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU5zRmYyTkQ3MXIxQnpsN3NMQVV0b3JKNXlFOGlKOHk4V0dsVnBkcGIyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1p1ZDYzbHZuVU9rVHR5WnF5MmpENWprQno4c1BYL0k2NVl0aEZjdWFUMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSjZNMVEzUGRyZ2FiaU9mVmZEYjZFWk9rbUxQQlpldFlnSmMxV1ljOWxFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQR2daU2JKRHFTSnZLQUZ2V0dqcnQrVlpPNG1jQWZsVUdvaCtmazRsQWhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtORzZCRzdPMmtBTEQ4VDhEZzRudndJT0VqcjlMZkwzS2pKVHBaRFNJMmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNjMzBxSWtZbzVSaFV4QkxvTFBpUkdJL0N0QTB4MmZpUmdnVDQ4Mm9xakE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEdsMXZEdXlEQ21uR2FoODZ2NVY4YzFleWNkdm9WN2FoQXJPNDRXT2ZFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHM3Q2U2VmdkOWdkYmROUUlYd0tVU0wzTFFCbmdjZmFLLzlYSDA5dTIyMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBnUG5yYkdTWCtYSWdMWnBaWFhjbHpVT2JXeFUwL25GL2h4ZFJHVmxLbHViYnhsYk5kS0oxb2hxQnJidUpocysvQm5iTWxnckNqSU15alhmZENCd2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMwLCJhZHZTZWNyZXRLZXkiOiI0cTA1WTZzZWxFK0ovWkJ4L293WHc0YVB4VEppTWh5OHh1ejdybFA1NDNrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhbTVUTEZMMVMtdWFCbE5Oa29qUF9nIiwicGhvbmVJZCI6IjhkMDZlZmNlLTNhODktNGUwYy1hZmMzLWY4MjI1MzY3YWZmNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2amg1aDAvU1RIVzNIWnlEcVdKU1VhQ1ArQTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0dnZDRPTW8zZVllM1EzaEpRV2pxTVRaRlJBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldQQkdNTVIyIiwibWUiOnsiaWQiOiIyMzQ5MTI4MjEzOTAxOjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUGlnIEJlbmlzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKaXRoS2dNRVBqV2k3c0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJpb1FTMjFMZWhGYk1SR1BOeklmRDM0VzRTbllRUTArL0M0OTlCR2Z0MVJ3PSIsImFjY291bnRTaWduYXR1cmUiOiJyUUpVYTNCNnVnanZmbFZYYWN1K3V0K1pJZUJCdGpmWHQwNExTamtiV3BPRDBWbzhQQmZnN3hmazMxblZlWGRNUWR6aWJFclJXL0kwV1NXQ1prNXFEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoickxXdW1zSUloYkJBM09IUDA0T0lVZ3RJNHlObGtNYk9vTlFNYi9DUFYyRnhWU0h2YmN5YzhBdlJ4V0cySHdsSzVvUTd2b00vU1RsaENGM01BbDFnanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTI4MjEzOTAxOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXFFRXR0UzNvUld6RVJqemN5SHc5K0Z1RXAyRUVOUHZ3dVBmUVJuN2RVYyJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDUzNjA2OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBV2IifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "pig benis",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

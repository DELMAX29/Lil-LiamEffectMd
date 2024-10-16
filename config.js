//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/LiamEffect55/Lil-LiamEffectMd";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VahZprsEawduA2d6251t";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1e4058f9ec61ed3b0e326.jpg";
global.devs = "256707089621";
global.sudo = process.env.SUDO || "263780934873";
global.owner = process.env.OWNER_NUMBER || "263787382852";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wa.me//256707089621";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUtERytLcEZnTTN3R0ErZDVUY29VVzVMR2JuOFJHbW50LzJtcGMwVjgwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzNqNzZiRnJaM1VOTTc4OVl4WEp6bXZTWGQ5d0tjQmdkMmRWWGV3ZnBpTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSmtaWlZnQ0ZhbC8wdjdsTDJFRk4wNStpb3g3TmZpcXI4R2FVRVBhWDI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjU25jMUY0TE9rMDNEdHdTa3E3Njd6eWk1UzZRWTlQK0Nac0hHOFczQjNBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZCWGI2NUwySWhFUm40WEljSjBEZGIzLzFsWU5kaW1Deld0Qk1XN3krM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJrRC9JWFBBODkwWmJPRWo1QjNIVS8yOE5USDFGeG9RSGVGbzdhR052akU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVURYei9pckdkdWxCdGxld1UyOXYyeTMxdWZqQWhkeTQzbTM3WmYzZzNGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkdHZ0FHc25pbzRnTjBUNXgvdEhuREE1RjFzNXd1WjR4SkE5UXRCN1gwND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFUcWIyWXV5SnFYNWQzaE9hVW92L3U4NTZzYnBTSElEUERMS1JLOGZER3FHZi83SXZzYUdlU2YwL3VWdW01aEE2elBHd2wvK1hUTlQxMWZpeGpIeUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiJhellIVVErUlBTYy9pWm9PU0REWmZSRVRGRXdzSTVVUjdyd3FyUklpRTBzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3Nm9iYzB5M1M0YUk3aUNrRWh0Y1BnIiwicGhvbmVJZCI6IjFhNjI1ODU1LTU2YWItNGY0Ny1hZWFhLTMyZDY4N2UxNjhiZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYSWNUWnVSaVBGUittQlpCaHZJM3pZM0tMazQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTWVSTlpJSVhkZVRWV2pFMmxac3ozTXVLV1JBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRXVldXSlA4IiwibWUiOnsiaWQiOiIyNjM3ODc3MTIxNDI6MjlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xHRncrTURFUEN4djdnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZuMTllcHVuM3Y1NFd0RXRLejl5YW1nQVpOa0hVRzllMEorWmVCU2E2a0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlRQNjkyNFBDdWpueFJYbWM3Zys4OUMzWmxLZUhxY0pxWHFVbFJWcnhDZ0EvazhLZ2tneTNKMUlGc2VBYXdMalUxamJwTTl4QUJEWWF0Q0hESEdjYkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrYm5KbTJuNVplZ1M1T3dVK0NRNzFlckJiVUFnN1gwcWtHeGlWbWxIYTdET3dHNlBWS0JnZWhuOGw5a282TGhPKzVCbWRvS2o0akdoTWk4MUx2L0REZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4NzcxMjE0MjoyOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiNTlmWHFicDk3K2VGclJMU3MvY21wb0FHVFpCMUJ2WHRDZm1YZ1VtdXBBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MDkxODM3fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-LIL-LIAMEFFECT-𝐌𝐃 ╠════ need support then ☞ https://wa.me//256707089621 ═════╣",
  author: process.env.PACK_AUTHER || "LIAMEFFECT",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Lil-LiamEffect 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "Liam",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "LIAMEFFECT").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

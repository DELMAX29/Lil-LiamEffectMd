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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUFaK0plcHhzQjA2TkE5QWJxeW1DendZaHdWaHZXUXVpdlJDWGlzUSttZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkZDdUtMdXgrRjI5UEZSZG5UN3Z1NllpajRHUEVOeHcvQytuUGJYRUxScz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTUZVNWxqdFNHLy9SaHdKUXNwOXJiVGE0TzJBbExGYVNJRkM5VExlUDBzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVczZLZWF5RnJPME1VMVcxekZid3hvN3VWaXlHeGlha05hUjNLNTZMWXo4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllLd3ZFcmpUTk1ycHAreld4T1doR0xKZDdIWFBhYzhsWWdWTlRkdWxXRXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im14cTl4NGJ5TGVGbXRvbDF1NmtFd0daZktqZEhmdHRKNGpBQTdGaHk1UTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUJvbFZ3eWZBYytseEo1TEczMzBXd0N1RzE3UkNpSnNQV1hrUVI3Vm1WUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3l6N3BQNzJDSzg1UzY0SW5nMFUrcC9sSTMwQUcyakdRb1JiYy90QUhoST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpUckFPdTZOMkZCNGNMclBjVUExZnVpVXI0MStLQ0RITnQzL1VaOURuRHdTQ2dzK0c3SE13Sm9KNHRpSWRjaVJtdFpKY3I5THBOMHV4VkxVb3lYT0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDAsImFkdlNlY3JldEtleSI6Ijd6YlVwdzdjSlgwNGZVK3JObm1NTFJMY09RRi9aZEJCaVcrMHEydXVsS3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVDUHVCQ1c5UXpLaG9WWDRYelh0UnciLCJwaG9uZUlkIjoiNjdhOTlkM2QtYTE5OS00NTgzLTllNDctMGI4YzY4MWFiMmNiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhYeGVaKyt4TnIrc0hJM2QyL0QzRFZ5YzhXZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RHY1aVpTZUFoa1YxN01SOWdNSGdqaTRsbXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSkdWRzlWVEwiLCJtZSI6eyJpZCI6IjI2Mzc4NzM4Mjg1Mjo1NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJLMjlwcm9tYXgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lmcDh2TUZFSldzdjdnR0dCMGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlkrYmhjK0ZkeGl0VHIrSW1VRFEzc0NCaE42WVIva1RpTFR1WDlOUFlhVDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlhZbHowNWp0Z1F0WGYzNEhnMm1PSHA5akdaTkI4TmVqME16dDk2Smx5NEJqTWM2M3NpelN3R0xqMXZpM29TWTBibitsQkhtQXFtdHViS1p1akVDVEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5S3F3bHZsUDM1ZWlXR1V1elczQXQyYnc5MHZ0S244UlhhSzlBancvSHk4MmZ4ckttWlpJcEwyZHhkM2JRMDBvbW14dE9WTkEva29TQ0thQUh1alZBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4NzM4Mjg1Mjo1NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXUG00WFBoWGNZclU2L2lKbEEwTjdBZ1lUZW1FZjVFNGkwN2wvVFQyR2s5In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MDkxMTA3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJrWCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘 k29promax-𝐌𝐃 ╠════ need support then ☞ https://wa.me//263787382852 ═════╣",
  author: process.env.PACK_AUTHER || "LIAMEFFECT",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "k29promax 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "k29promax",
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

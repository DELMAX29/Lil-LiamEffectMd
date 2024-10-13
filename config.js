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
global.owner = process.env.OWNER_NUMBER || "256707089621";
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
  "Adams-2024;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUJ5VTJRSnBocXlkbTJTWmNBekVuRWpYQWhVV2I4NVdYU2JlcEJoSmEyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTdLZlp3elV5ekxiSlBXcXVkdGR3azR5QkRqRVJGSmhqYUVMM21rUzdBcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxS3lpY04xR0pPNEZhdDdPS2JMK0xMdEZNNFYvOXFGYVVWUGE1UzM5VGtnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvTFZpcG9Za1FBczFUeWVhaytubndPcTNBSE1GL09hbG9sSVZqbGZVLzB3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNBS1dDM2FIQ01Nb01QMWhVVWhZQVlQclFwWWFVbjBBWnZzQzhiNm9pV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iko4SmI5aXQweVFMVWNBcy8yVlc2bnJ3a1lVNUsrSTdrRWJoY0ZqeXcweVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUNyZWE5NXdYRnlabUFpdGVZMERFTGFvVjJIMkpmNXI2TjhQdFRFY2hrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ08vNHBxNzRsaUw1alBMV1lTM1ZZb1hnUCt4RmRLSDl6Z1ZiQ3NweHZoRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjR0d0NMdUJzaS9tVzVreENsNXZ5ZFFGMW5qNmhhK1FFdGo0ZkphcUpuUTZkNEFSeUM0UXRCOHAvWjAva1A3NjFvZTBRNGJlZDBteUZRaytRS0pnMURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTUsImFkdlNlY3JldEtleSI6Ik9kMWc2QWxoWS9YVURzNkNkcUtnYldlRGlrRmswOXBHU2tvQ3hSTnJUcGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjNBMGFieTlNVEVpNWV1Z2ltTERndWciLCJwaG9uZUlkIjoiMDc2NmYwM2YtMGM5Yy00ODQwLWE2MGEtNDk4Yzc2YzE0NDRkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBaNnFSaTBTREUrUHYyYW9qekVuVVQ5dExsTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuQjlYSk5ETnNQWXpmS0VoeWcrTW1EOEIrd1U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS0ZKTTE3NEwiLCJtZSI6eyJpZCI6IjI2Mzc4NzM4Mjg1Mjo1MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJLMjlwcm9tYXgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lmcDh2TUZFSXVXc0xnR0dCa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlkrYmhjK0ZkeGl0VHIrSW1VRFEzc0NCaE42WVIva1RpTFR1WDlOUFlhVDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6InIxcnVOWm1hYWRCeUU1bWNRM3Q0MkxFbkUwV1h3bnQ2VkVHRmg0MVRxOUliNTJ0Qk01dUlpNDRhZmo5cy9LVXlFT3BjNWE4NlpQQ0RRWkVPRm4vaUJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjUFdpZERoY0hTY2Yzdmt2ZGp5NHprVXg4QVpleGxtdzIreUkyNnBlcy90bkFvT3YvT2w5OFRvcmErbTNuYStlL3Bxc1Q4anBGUWVLWVM1RDN3aGRCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4NzM4Mjg1Mjo1MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXUG00WFBoWGNZclU2L2lKbEEwTjdBZ1lUZW1FZjVFNGkwN2wvVFQyR2s5In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4ODQyNTIwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJrWCJ9"
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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

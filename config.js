//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2349123731026";
global.sudo = process.env.SUDO || "2347035052540";
global.owner = process.env.OWNER_NUMBER || "2347035052540";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMExiZnlRbEpzUWJ6Vi82Qy9JK0d1R1JOME9kYTRLYkIxdDZhRktJQXlYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3Q3NjV3bnhock43TXNNVkVTVkROVGtRZHJTL3JkblowdlNNK1BTUUkyMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSnhaNmk3Sy9Kd0xXMWVZc0QxTTM0QnBSdkxzTXNua2RpQnRlemlsVm5BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoRkRGVXQ0QTh4Uy9PeWx3YXBzZmpMcUlsWTFKK2N4SDZQdTAwQjRXd1hzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNOTDBjRTBIVFJ0WFpjMVVOVUI5NFo4cE5QUmxTWmpjMjV5ZUdGWGdrazQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9QR0xuWGFnL3VpS0lLTFRtNVlTQ21hU2YxdjRXU241NFkya1d3ODdzR0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1BCMkxYNkxFRWJpdFBCc3JmY3BINksxcGthOEdISktma3ErN0V1cEJuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3pqcjh5WFgzTEtrK2ZHeFc4aXlIYkUvS2JBaGVpV1h5ZTFpU2hRSEFqcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlBNG9JektZdlI4anQ1V3JqUmZKbExxK1laZXBwMURRUm8ySjhBZmxiMm0ybFJBMGR6SmpKTXU5RjVONGt6eWhCU3ozb1J0NWJuWEtYYXZOT1MvZkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODIsImFkdlNlY3JldEtleSI6IlFvNUZ1Skl5dDU1SGt4MDZyR0ZkQWxrVmVoQWZJWWdHNEpuUDY4UG1PRG89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik1iRlBwVUNuUUt5TFVjWk1fY0VSVXciLCJwaG9uZUlkIjoiNDlmNTIwNTktMTg1MC00ZWIwLWFkY2UtZmRkNGQ3ZWM0ZjE2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNJRU9OTURyZVNoMkV4bkpHdGVMV01nVVQyRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5UWt6QkpOVHhMY1JZOW5jUi8rTUR1SG5sSkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNU02MzdISkgiLCJtZSI6eyJpZCI6IjIzNDcwMzUwNTI1NDA6ODRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQW5vbl9UZWNoIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOdkUvRDRRcmNIQXVBWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDbnc1SUxMOE04dzJHcStNbzgzT3l0OVU2cGp2RFlYQjExczZzK3JaZWlFPSIsImFjY291bnRTaWduYXR1cmUiOiJUeFd5OG50VU1WeTdGVW43ZVdMQkZMV0wvMjNvNU56aGpNVTlDdXk3MzNQcWpwZFdpdDEwWEZzNHQ3VFAwbEpCaHdxaUpMWXE4WjUzZEoxWUdrTm1EZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibTVvQ2VRdWtMa2ZhUlFHOVdNOEN1MDJZUXdQZXN3RVpMT1psOFRvV2k5WGtTWkFFVUZFMnJrMmMrenZtdUVpclM5NURQRGlSQnQ1clhFMm9VajVUQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDM1MDUyNTQwOjg0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFwOE9TQ3kvRFBNTmhxdmpLUE56c3JmVk9xWTd3MkZ3ZGRiT3JQcTJYb2gifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjkxMTAyMDIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTkpBIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
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
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
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

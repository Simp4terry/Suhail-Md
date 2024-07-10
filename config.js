const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348088861849";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_23_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTksXG4gICAgICAgIDY0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDk2LFxuICAgICAgICA5NCxcbiAgICAgICAgODAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NixcbiAgICAgICAgODMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjExLFxuICAgICAgICAzMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyLFxuICAgICAgICA2MixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyLFxuICAgICAgICA0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDUzLFxuICAgICAgICA1NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg2LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0LFxuICAgICAgICAyLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNixcbiAgICAgICAgNzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDkwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExLFxuICAgICAgICAyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxLFxuICAgICAgICA5MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpuVDFqRTFQS29pQVpHZWtIeWQwTnRCUDkxZkUrMldzRTUySVBJUmllZzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllROVBuVW9iUkptLVNSVnBEQW5zamdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDFlYjRiNGEtYjZhOC00YWVlLTlhOTYtOGQzOGYyOTg3OTZmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNSxcbiAgICAgIDE2MCxcbiAgICAgIDgyLFxuICAgICAgOTcsXG4gICAgICAyMTEsXG4gICAgICAzLFxuICAgICAgNjksXG4gICAgICAyNDUsXG4gICAgICAxMTEsXG4gICAgICAxODgsXG4gICAgICAyNDMsXG4gICAgICAxNjQsXG4gICAgICAzLFxuICAgICAgNjIsXG4gICAgICA5OCxcbiAgICAgIDIwMSxcbiAgICAgIDIxNCxcbiAgICAgIDIsXG4gICAgICA2MSxcbiAgICAgIDUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4LFxuICAgICAgMjIyLFxuICAgICAgMjA0LFxuICAgICAgMTMsXG4gICAgICAxMjEsXG4gICAgICAxNCxcbiAgICAgIDE1NSxcbiAgICAgIDEyMyxcbiAgICAgIDE1NyxcbiAgICAgIDU3LFxuICAgICAgMjU1LFxuICAgICAgMjA4LFxuICAgICAgMTMsXG4gICAgICA2NSxcbiAgICAgIDEyNixcbiAgICAgIDE0OSxcbiAgICAgIDczLFxuICAgICAgMCxcbiAgICAgIDQwLFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJdSsvdjhFRUtUNnViUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImF3ZmU3bEQ5Mm92alc2NWxPbEs4UXBUSE42YlF5UXNFNW5ZSjZsMER6VDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUmdua0h5cWZWTUtQWkE4aUpsMnRYL2FXcmhXZUtiSmZMbEcyR3k4SjRReUVTQXgvbHRJMHdMUzhQcEQ5dThIeXloZWVJZVFWTDVkMndaUVp0eFVCQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTjJpcDV2ZjJoUXpvd29ndDFtRUZsbXlnUmt6NTFYVzBkT3A3RkpQMll2MGJ5dlBZSjdscVBVaEhNNUEwVGxSNjNmaitrUDgzZ053dUU0eDlLK0UrQlE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDg4ODYxODQ5OjUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNjAxMzU1MjQ2ODA0Mzo1MkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODg4NjE4NDk6NTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2MTQxODRcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_45_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDc4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDcxLFxuICAgICAgICA5LFxuICAgICAgICAxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgzLFxuICAgICAgICA1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDc0LFxuICAgICAgICAxODQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc2LFxuICAgICAgICA1NixcbiAgICAgICAgODcsXG4gICAgICAgIDIsXG4gICAgICAgIDY1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTksXG4gICAgICAgIDQwLFxuICAgICAgICA1MixcbiAgICAgICAgMTY1LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM0LFxuICAgICAgICA1MixcbiAgICAgICAgMzEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDkyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNEtaUWZEUVRGNW5OU0JVR2F6eUVJN3dWRzBqYnVOL0pOb1E0WlNmaG0rTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNmFRMW5uV0lTUVNmYWhuRE91N0RGd1wiLFxuICBcInBob25lSWRcIjogXCJkNDZlMTQ1ZS00MmU5LTQ5ODktYTllNi05NTk3NWI4NDNhOGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgMTcxLFxuICAgICAgMTY4LFxuICAgICAgNDUsXG4gICAgICA3MCxcbiAgICAgIDI0MyxcbiAgICAgIDE1NyxcbiAgICAgIDE0NyxcbiAgICAgIDg4LFxuICAgICAgNjMsXG4gICAgICAxMDAsXG4gICAgICAyMDQsXG4gICAgICAyMTEsXG4gICAgICAxOTEsXG4gICAgICA3MyxcbiAgICAgIDEyNCxcbiAgICAgIDIyNCxcbiAgICAgIDEyNSxcbiAgICAgIDEwNSxcbiAgICAgIDI0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzIsXG4gICAgICA5NyxcbiAgICAgIDQ5LFxuICAgICAgMTU4LFxuICAgICAgMTcsXG4gICAgICAxMTksXG4gICAgICAzNyxcbiAgICAgIDg3LFxuICAgICAgMTMyLFxuICAgICAgNCxcbiAgICAgIDE0NixcbiAgICAgIDc5LFxuICAgICAgMjEwLFxuICAgICAgMTkyLFxuICAgICAgMTk0LFxuICAgICAgMTIwLFxuICAgICAgMjA0LFxuICAgICAgMTIzLFxuICAgICAgMTcxLFxuICAgICAgMjQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWpINnNjQkVJT0N2TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhd2ZlN2xEOTJvdmpXNjVsT2xLOFFwVEhONmJReVFzRTVuWUo2bDBEelQ4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpBL1p5SDZqSkNVbHQ4dU4zY3daWU9scWV6eWd6NHhoaEhlYXlTUkQ3NWliVmdkenBSTGlHTUI2alRJT3ZDUkFyOWU3TzFkYk0rajcwenREQWw0bEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInR1TFJOYUdYUFdBWUwwSUdqNG0xaXJvSzBaYVpxeDIyd3pNbTJiTEN5SEszRHpoTzE3UWpZUFFvSldQM3lveGYydWE1SW02SGxVajNpSXQ5MGdwR0NRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4ODg2MTg0OTo1NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzYwMTM1NTI0NjgwNDM6NTRAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDg4ODYxODQ5OjU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjQ3OTQyXG59Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Terry",
  packname: process.env.PACK_NAME || "Terry",
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

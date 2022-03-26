const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + `N:;${namalu};;;`
                    + `FN:${namalu}\n`
                    + `ORG:Owner ${namalu};\n`
                    + `TEL;type=CELL;type=VOICE;waid=${global.owner}:+${global.owner}\n` // WhatsApp ID + phone number
                    + 'TEL;type=CELL;type=VOICE;waid=6288295701955:+6285877530537\n'
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: `${namalu}`, contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler

const bedrock = require('bedrock-protocol');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json'));

function load(){

    const client = bedrock.createClient({
        host: data["host"],   
        port: data["port"],         
        username: data["name"],
        offline: true,
        version: "1.17.10",
    })

    client.on('join', client => console.log('Player has joined!'));
    client.on('join', client => console.log('Player has spawned!'));

    //Chats

    client.on('text', (packet) => {
        if (packet.source_name != client.options.username) {

            console.log(packet);

            switch (packet.message) {

                case 'hola':
                    client.queue('text', {
                        type: 'chat', needs_translation: false, source_name: client.username, xuid: '', platform_chat_id: '',
                        message: `hola :3`
                      })
                break;
                case 'kevin':
                    client.queue('text', {
                        type: 'chat', needs_translation: false, source_name: client.username, xuid: '', platform_chat_id: '',
                        message: `es gay`
                      })
                break;
            }
      
        }
    })
};

exports.load = load;
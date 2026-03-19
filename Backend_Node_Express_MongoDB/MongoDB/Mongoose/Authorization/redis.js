
const {createClient} = require('redis')

const client = createClient({
    username: 'default',
    password: 'iXDLY41QssXiiBGQDIhopffs8VmY8T2J',
    socket: {
        host: 'redis-10847.crce286.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 10847
    }
});

module.exports = client;

// const redisClient = require('../redis')

// const rateLimiter = async(req, res, next)=>{
//     try{
//         const ip = req.ip;
//         console.log(ip);

//         //7 requests per hour

//         const requests = await redisClient.incr(ip);
//         console.log(requests)
//         const ttl = await redisClient.ttl(ip);
//         console.log("TTL:", ttl);

//         if(ttl === -1){
//             await redisClient.expire(ip, 100);
//         }

//         if(requests>10) throw new Error("Rate limit exceeded")
//         // if(requests == 1) await redisClient.expire(ip, 10);
        
//         next();
//     }
//     catch(err) {res.send("Error: "+err.message)}
// }

// module.exports = rateLimiter;

//SLIDING WINDOW RATE LIMITER IMPLEMENTATION
const redisClient = require('../redis');

const windowSize = 3600;
const maxRequest = 5;

const rateLimiter = async(req, res, next)=>{
    try{
        const key = `IP:${req.ip}`;
        const current_time = Date.now()/1000; //seconds
        //time that is 1 hr ago
        const window_time = current_time - windowSize

        //remove requests from 0-window_time
        await redisClient.zRemRangeByScore(key, 0, window_time)

        //how many requests exist
        const requests = await redisClient.zCard(key);

        if(requests>=maxRequest) throw new Error("Rate Limit Exceeded")
        
        //Add current request
        //score = time -> time based filtering
        //value - unique -> time+random number
        await redisClient.zAdd(key, [{score:current_time, value:`${current_time}:${Math.random()}`}])

        //add expiry - key auto delete after 1 hour
        await redisClient.expire(key, windowSize)
        next();
    }
    catch(err) {res.send("Error: "+ err.message)}
}

module.exports = rateLimiter;

const bcrypt = require('bcrypt')

const password = "Reet123$"

async function Hashing(){
    //hashcode + salt
    const hashed_pass = await bcrypt.hash(password, 10);
    const ans = await bcrypt.compare("123", hashed_pass);

    console.log(ans);

    //to generate salt
    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    
    const salt2 = hashed_pass.substring(0, 29)
    const hash2 = await bcrypt.hash(password, salt2);
    console.log(hashed_pass);
    console.log(hash2);
}

Hashing();
const fs = require("fs");

const path = "./CHANGELOG.md";

if (fs.existsSync(path))
    return true
    
return false

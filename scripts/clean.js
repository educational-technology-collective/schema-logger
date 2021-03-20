const _fs = require('fs').promises;
const _path = require('path');

async function find(path, regex) {

    let dirents = await _fs.readdir(path, { withFileTypes: true });

    let paths = [];

    for (dirent of dirents) {

        if (dirent.isDirectory()) {
            paths = paths.concat(await find(_path.join(path, dirent.name), regex));
        }
        else if (dirent.isFile()) {
            if (regex.test(dirent.name)) {

                paths.push(_path.join(path, dirent.name));
            }
        }
    }

    return paths;
}

(async () => {
    try {

        let path = __dirname + '/../dist';
        let regex = /(?:js|map|ts)$/;

        let paths = await find(path, regex);

        for (path of paths) {
            await _fs.unlink(path)
        }

        process.exitCode = 0

    } catch (e) {
        console.log(e);
        process.exitCode = 1
    }
})();

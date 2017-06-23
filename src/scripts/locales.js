// 言語ファイルまとめ
const fs = require('fs');
const yaml = require('js-yaml');

module.exports = {
    ja: yaml.safeLoad(fs.readFileSync('./locales/ja.yml', 'utf-8')),
};

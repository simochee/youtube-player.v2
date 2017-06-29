top.ipc = require('electron').ipcRenderer;
top.observer = riot.observable();
top.locales = require('./locales').ja;
top.statuses = require('./statuses');

/**
 * ベースのタグをマウント
 */
require('../tags/app');
riot.mount('app');

/**
 * ルーターを開始
 */
const router = require('./router');
router.start();

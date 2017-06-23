top.ipc = require('electron').ipcRenderer;
top.observer = riot.observable();
top.locales = require('./locales').ja;

/**
 * ベースのタグをマウント
 */
require('../tags/app');
riot.mount('app');

const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const updateNotifier = require('update-notifier');

module.exports = async () => {
  welcome(`{{name}}`, `by ${pkg.author.url}\n${pkg.description}`, {
    version: `v${pkg.version}`,
  })

  updateNotifier({
    pkg,
    shouldNotifyInNpmScript: true,
  }).notify({isGlobal: true})
}

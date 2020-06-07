import welcome from 'cli-welcome'
import pkg, {author, description, version as _version} from './../package.json'
import updateNotifier from 'update-notifier'

const init = async () => {
  welcome(`{{name}}`, `by ${author.url}\n${description}`, {
    version: `v${_version}`
  })

  updateNotifier({
    pkg,
    shouldNotifyInNpmScript: true
  }).notify({isGlobal: true})
}

export default init

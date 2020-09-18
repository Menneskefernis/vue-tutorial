import GithubInput from '../GitHubInput/index.vue'
import githubOutput from '../GitHubOutput/index.vue'

export default {
    name: 'App',
    components: {
        'github-input': GithubInput,
        'github-output': githubOutput,
    },
    data() {
        return {}
    },
}
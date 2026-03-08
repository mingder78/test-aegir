// eslint.config.js
import tseslint from 'typescript-eslint'

export default tseslint.config({
  languageOptions: {
    parserOptions: {
      projectService: {
        // List of out-of-project files to allow for typed linting
        allowDefaultProject: ['eslint.config.js', 'test/index.spec.d.ts']
      }
    }
  }
})

# romalex

1 Створюємо реакт застосунок командою в терміналі - npx create-react-app 2 Для
перевірки типів переданих props команда в терміналі - npm install --save-dev
prop-types тут є всі їх значення https://www.npmjs.com/package/prop-types
Prop-types - це опис типів

Props - статический и динамический JSX XML дефолтные пропсы

2 Установка зависимостей (3 пакета) командою в терміналі - npm instal --save-dev
prettier husky lint-staged

Далі в корні нашого проекту створбємо 3 файли 1 файл - .huskyrc і содержимое {
"hooks": { "pre-commit": "lint-staged" } } 2 файл - .lintstagedrc {
"src/**/\*.{json,css,scss,md}": ["prettier --write"],
"src/**/\*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"] } 3 файл -
.prettierrc.json { "printWidth": 80, "tabWidth": 2, "useTabs": false, "semi":
true, "singleQuote": true, "trailingComma": "all", "bracketSpacing": true,
"jsxBracketSameLine": false, "arrowParens": "avoid", "proseWrap": "always" }

3 Настраиваем VS Code заходим в настройки codeActionOnSave заходим в
setting.json и добавляем "editor.codeActionsOnSave": { "source.fixAll.eslint":
true },

4 Встановити розширення ESLint and Formatting Toggle

5 Налаштуванння modern-normalize link -
https://www.npmjs.com/package/modern-normalize - npm install modern-normalize
Підключаємо файл в папку src - index.js  
import 'modern-normalize/modern-normalize.css';

6 Добавляем SASS - npm install sass

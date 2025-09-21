import Auth from './Auth'
import Settings from './Settings'
import CategoryController from './CategoryController'
import NewsController from './NewsController'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
Settings: Object.assign(Settings, Settings),
CategoryController: Object.assign(CategoryController, CategoryController),
NewsController: Object.assign(NewsController, NewsController),
}

export default Controllers
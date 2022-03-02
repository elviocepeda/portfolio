import AppRouter from './routers/AppRouter'
import './stylesheets/App.scss'
import './stylesheets/HomepageMediaQueries.scss'
import './stylesheets/AboutMediaQueries.scss'
import './stylesheets/WorksMediaQueries.scss'
import './stylesheets/ContactMediaQueries.scss'

function App() {
  return (
    <div className='app-container'>
      <AppRouter />
    </div>
  );
}

export default App;
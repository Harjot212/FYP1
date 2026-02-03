import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Landing from './pages/Landing.jsx'
import ParentLogin from './pages/ParentLogin.jsx'
import ParentDashboard from './pages/ParentDashboard.jsx'
import KidHome from './pages/KidHome.jsx'
import FoodExplorer from './pages/FoodExplorer.jsx'
import Challenges from './pages/Challenges.jsx'
import Badges from './pages/Badges.jsx'
import Recipes from './pages/Recipes.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="parent-login" element={<ParentLogin />} />
          <Route path="parent-dashboard" element={<ParentDashboard />} />
          <Route path="kid-home" element={<KidHome />} />
          <Route path="food-explorer" element={<FoodExplorer />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="badges" element={<Badges />} />
          <Route path="recipes" element={<Recipes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

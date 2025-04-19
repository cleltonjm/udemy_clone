import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { DefaultLayout } from './layouts/DefaultLayout'
import { UdemyBusiness } from './pages/UdemyBusiness'
import { LearnMore } from './pages/LearnMore'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/learn-more" element={<LearnMore />} />
                <Route path="/udemy-business" element={<UdemyBusiness />} />
            </Route>
        </Routes>
    )
}
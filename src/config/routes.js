import Home from '../containers/App/Home'
import Exams from '../containers/Exams'
import EmptyPage from '../containers/App/EmptyPage'

const routes = [
    {title: '', path: '/', rendered:  Home, hidden: true },
    {title: 'Profiles', path: '/profile', rendered: EmptyPage  },
    {title: 'Account Settings', path: '/account-settings', rendered: EmptyPage  },
    {title: 'Online Exam', path: '/exams', rendered: Exams  },
    {title: 'Administration', path: '/admin', rendered: EmptyPage  },
]

export default routes;
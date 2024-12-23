import { Menu} from 'lucide-react'
import CountdownTimer  from '../components/CountdownTimer'
import NotificationForm  from '../components/NotificationForm'
import SocialLinks from '../components/sociallinks'
import logo from '../assets/images/logo.png'
import '../Style.css'

export default function Page() {
  return (
    <div className="container">
      <div className="background-wave background-wave-bottom" />
      <div className="background-wave background-wave-top" />

      <div className="content">
        <header className="header">
          <div className="logo">
            <div className="logo-icon" >
            <img src={logo} alt="" />
            </div>
            <span className="logo-text">VECTOR</span>
          </div>
          <button className="menu-button">
          <Menu/>
          </button>
        </header>

        <main className="main-content">
          <h1 className="title">
            Launching Soon
          </h1>
          
          <CountdownTimer />
          
          <p className="subtitle">
            We&apos;ll let you know when we are Launching
          </p>
          
          <NotificationForm />
        </main>

        <SocialLinks />
      </div>
    </div>
  )
}


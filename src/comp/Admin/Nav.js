import logo from '../../assets/img/logo3.png';
import { ReactComponent as Notification } from '../../assets/svg/common/notification.svg';
import { ReactComponent as TriArrow } from '../../assets/svg/arrows/traiangle.svg';

function Nav() {
  return (
    <nav className='df gap-8 px-6 py-2 bg-[#524491] text-white'>
      <img className='w-40 mr-auto' src={logo} alt="Dr.Reddy logo" />

      <Notification />

      <div className='df'>
        <div>
          <p>Raj kumar</p>
          <p className='text-sm'>Head of the department</p>
        </div>
        <TriArrow />
      </div>
    </nav>
  )
}

export default Nav
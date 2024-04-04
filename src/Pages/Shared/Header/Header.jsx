import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mt-10 mb-5' src={logo} alt="" />
            <p className='mb-3 text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-xl font-medium mb-6'>{moment().format("dddd, MMMM D, YYYY")}</p>

        </div>
    );
};

export default Header;
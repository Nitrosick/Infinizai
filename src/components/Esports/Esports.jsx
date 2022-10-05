import './Esports.css';
import fire from '../../images/fire.svg';

export const Esports = () => {
    return (
        <div className="esports">
            <img className='esports_icon' src={fire} alt="icon" width="32" height="32" />
            <h2 className="esports_text">Future of eSports</h2>
        </div>
    );
};

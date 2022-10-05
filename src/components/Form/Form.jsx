import { Button } from '../Button/Button';
import './Form.css';

export const Form = () => {
    return (
        <form action="#" className="form">
            <input
                type="text"
                className="input"
                placeholder="Your Email Address"
            />
            <Button text={'Subscribe Now'} type={'standard'}/>
        </form>
    );
};

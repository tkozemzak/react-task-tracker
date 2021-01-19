import Button from './Button';
import { useLocation } from 'react-router-dom'; 

const Header = ({ title, onAdd, showForm }) => {
    const location = useLocation();
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button color={showForm ? 'red' :'green'} 
            text={showForm ? 'Hide Form' :'Show Form'} onClick={onAdd}/>}
        </header>
    )
}

export default Header

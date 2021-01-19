import Button from './Button';

const Header = ({ title, onAdd, showForm }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showForm ? 'red' :'green'} 
            text={showForm ? 'Hide Form' :'Show Form'} onClick={onAdd}/>
        </header>
    )
}

export default Header

export const NavItem = ({ text, selected, onClick }) => {
    return (
        <li className={selected ? 'selected' : ''} onClick={onClick}>
            {text}
        </li>
    );
};
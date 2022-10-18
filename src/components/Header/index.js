import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles['container']}>
            <div className={styles['content']}></div>
        </header>
    );
}

export default Header;

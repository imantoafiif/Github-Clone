import Image from 'next/image'
import Link from 'next/link'
import style from './Navbar.module.css'

const Navbar = () => {

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert('123')
    }

    const menus = [
        { label: 'Pull Requests', url: '/' },
        { label: 'Issues', url: '/' },
        { label: 'Codespaces', url: '/' },
        { label: 'Marketplace', url: '/' },
        { label: 'Explore', url: '/' },
    ]

    return (
        <nav className={style.navbar_container}>
            <div className={style.menu_container}>
                <div className={style.start_menu_container}>
                    <div className={style.header_item}>
                        <Link href="/">
                            <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
                                <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className={style.header_item}>
                        <form
                            onSubmit={onSubmit}>
                            <label className={style.search_container}>
                                <input 
                                    placeholder='Search or jump to...'
                                    className={style.search}
                                    type="text">
                                </input>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" aria-hidden="true">
                                    <path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path><path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path>
                                </svg>
                            </label>
                        </form>
                    </div>
                    <div className={style.header_item}>
                        {
                            menus.map((item, key) => (
                                <Link 
                                    className={style.header_menus}
                                    key={key}
                                    href={item.url}>
                                    {item.label}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className={style.end_menu_container}>
                    <div className={style.header_item_end}>
                        <img 
                            className={style.user_avatar}
                            src="https://avatars.githubusercontent.com/u/35295280?s=40&v=4">
                        </img>
                        <div className={style.unread_indicator}></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
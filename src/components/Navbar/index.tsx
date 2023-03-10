import Image from 'next/image'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import { useState } from 'react'
import style from './Navbar.module.css'

const Navbar = () => {

    const route = useRouter()

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

    const signout = () => {
        localStorage.removeItem('auth.token')
        route.push('/')
    }

    const [dropdown, setDropdown] = useState<number>(0)

    return (
        <>
            <nav className={style.navbar_container}>
                <div className={style.menu_container}>
                    <div className={style.start_menu_container}>
                        <div className={style.header_item}>
                            <Link href="/">
                                <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
                                    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
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
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path><path fillRule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path>
                            </svg>
                        </div>
                        <a 
                            onClick={() => setDropdown(1)}
                            className={style.header_item_end}>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                <path fillRule="evenodd" d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 110 1.5H8.5v4.25a.75.75 0 11-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"></path>
                            </svg>
                            <i className='fa-solid fa-caret-down'></i>
                        </a>  
                        <a 
                            onClick={() => setDropdown(2)}
                            className={style.header_item_end}>
                            <img 
                                className={style.user_avatar}
                                src="https://avatars.githubusercontent.com/u/35295280?s=40&v=4">
                            </img>
                            <div className={style.unread_indicator}></div>
                            <i className='fa-solid fa-caret-down'></i>
                        </a>
                    </div>
                </div>
            </nav>
            {
                dropdown > 0 && (
                    <div
                        onClick={() => setDropdown(0)} 
                        className={style.dropdown_container}>
                        {
                            dropdown == 1 ? (
                                <div className={style.dropdown_menu_actions}>
                                    <i className='fa-solid fa-caret-up'></i>
                                    <div className={style.dropdown_menu}>
                                        <a className={style.dropdown_menu_item}>New repository</a>
                                        <a className={style.dropdown_menu_item}>Import repository</a>
                                        <a className={style.dropdown_menu_item}>New codespace</a>
                                        <a className={style.dropdown_menu_item}>New gist</a>
                                        <a className={style.dropdown_menu_item}>New organization</a>
                                        <a className={style.dropdown_menu_item}>New project</a>
                                    </div>  
                                </div>
                            ) : (
                                <div className={style.dropdown_profile_actions}>
                                    <i className='fa-solid fa-caret-up'></i>
                                    <div className={`${style.dropdown_menu} ${style.dropdown_menu_profile}`}>
                                        <a className={style.dropdown_menu_item_no_hover}>Signed in as <strong>imantoafiif</strong></a>
                                        <div className={style.divider}></div>
                                        <div className={style.user_status_container}>
                                            <div className={style.user_status}>
                                                <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"></path></svg>
                                                <span>Set status</span>  
                                            </div>
                                        </div>
                                        <div className={style.divider}></div>
                                        <a className={style.dropdown_menu_item}>Your profile</a>
                                        <a className={style.dropdown_menu_item}>Your repositories</a>
                                        <a className={style.dropdown_menu_item}>Your projects</a>
                                        <a className={style.dropdown_menu_item}>Your stars</a>
                                        <a className={style.dropdown_menu_item}>Your gists</a>
                                        <a className={style.dropdown_menu_item}>Your sponsors</a>
                                        <div className={style.divider}></div>
                                        <a className={style.dropdown_menu_item}>Upgrade</a>
                                        <a className={style.dropdown_menu_item}>Try Enterprise</a>
                                        <a className={style.dropdown_menu_item}>Feature preview</a>
                                        <a className={style.dropdown_menu_item}>Help</a>
                                        <a className={style.dropdown_menu_item}>Settings</a>
                                        <div className={style.divider}></div>
                                        <a 
                                            onClick={signout}
                                            className={style.dropdown_menu_item}>
                                            Sign out
                                        </a>
                                    </div>
                                    
                                     
                                </div>
                            )
                        }
                    </div>  
                )
            }
        </>
    )
}

export default Navbar
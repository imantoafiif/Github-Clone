import Navbar from '@/components/Navbar';
import Splash from '@/components/Splash';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import style from './content.module.css'

const index = () => {

  const route = useRouter()
  const [auth_token, setToken] = useState<string | string[] | null>(null)

  useEffect(() => {
    
    if(route.isReady) {

      const token = localStorage.getItem('auth.token')
      const { code } = route.query

      if(code) {
        // axios.post('https://github.com/login/oauth/access_token', null, {
        //   headers: {
        //     "Accept": "application/json",
        //     "Access-Control-Allow-Origin": "*",
        //   },
        //   params: {
        //     client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        //     client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        //     code,
        //   }
        // })
        // .then(r => {

        // })
        // .catch(e => {
        //   console.log(e.response)
        // })
        setToken(code)
        localStorage.setItem('auth.token', code as string)
        route.push('/')
        return
      }

      if(!token) {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`
        return
      }

      setToken(token)

    }

  }, [route])

  // useEffect(() => {
  //   axios.get(`https://api.github.com/users/imantoafiif/repos`, {
  //     headers: {
  //       "Accept": "application/vnd.github+json",
  //       "Authorization": "bearer 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",
  //       "X-GitHub-Api-Version": "2022-11-28",
  //     }
  //   })
  //   .catch(e => {
  //     console.log(e.response)
  //   })
  // }, [])

  return auth_token ? (
    <>
      <Navbar/>
      <div className={style.container}>
        <aside className={style.sidemenu}>
          <div className={style.dashboard_sidebar}>
            <div className={style.dashboard_detail_container}>
              <div className={style.dashboard_sidebar_head}>
                <h2 className={style.head_title}>Top Repositories</h2>
                <a className={style.btn_primary}>
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo">
                      <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                  </svg>                
                  New
                </a>
              </div>
              <div className={style.dashboard_sidebar_search}>
                <input 
                  className={style.search}
                  placeholder='Find a repository...'>
                </input>
              </div>
              <ul className={style.repo_list}>
                {
                  [0, 1, 2, 3, 4, 5].map(item => (
                    <li>
                      <div className={style.repo}>
                        <img src='https://avatars.githubusercontent.com/u/35295280?s=16&v=4'></img>
                        <Link href='/'>akdjask</Link>
                      </div>
                    </li>
                  ))
                }
              </ul>
              <div className={style.repo_bottom_container}>
                <a className={style.repo_more}>Show more</a>
              </div>
            </div>
            <div className={style.dashboard_recent_activity}>
                <h2 className={style.head_title}>Recent activity</h2>
                <div className={style.activity_container}>
                  <p className={style.note}>When you take actions across GitHub, we’ll provide links to that activity here.</p>
                </div>
            </div>
          </div>
        </aside>
        <div className={style.main_content_container}>
          <div className={style.landing}>
            <div>
              <ul className={style.dashboard_container}>
                <li>
                  <button className={style.feeds_tab_active}>
                    <span>Following</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>
                      For you
                      {/* <span className={style.beta_tag}>Beta</span> */}
                    </span>
                  </button>
                </li>
              </ul>
            </div>
            <div className={style.box}>
              <h2>Discover interesting projects and people to populate your personal news feed.</h2>
              <p>Your news feed helps you keep up with recent activity on repositories you <Link href="/">watch</Link> or <Link href="/">star</Link> and people you <Link href="/">follow</Link>.</p>
              <button className={style.explore}>Explore GitHub</button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : 
  <Splash/>

}

export default index
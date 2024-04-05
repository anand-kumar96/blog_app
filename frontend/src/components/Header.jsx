import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const menu = [
        {text:'Nature', path:'/createblog'},
        {text:'Travel', path:'/'},
        {text:'Technology', path:'/'},
        {text:'Politics', path:'/'},
    ]
  return (
    <div className="border-b">
    <div className="px-5 py-5 flex justify-between">
        <Link to={'/'}> <span className='font-extrabold text-2xl'>BLOGGER</span> </Link>
        <div className='flex'>
            <ul className='flex'>
                {menu.map((nav,i)=><li key={i}><NavLink to={`/?category=${nav.text}`} className='p-2 items-center justify-center flex'><span>{nav.text}</span></NavLink></li> )}
            </ul>
            <button className='bg-slate-500 text-white mx-2 px-2 py-1 rounded'>
            <Link to={'/createblog'}>+ New Post</Link>
            </button>
        </div>
    </div>
</div>
  )
}

export default Header
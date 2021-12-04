import React, { Suspense } from 'react'
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import logo from '../logo.svg'
import { routes } from './routes';


export const Navigation = () => {
    return (
        <Suspense fallback={<span>Cargando...</span>}>

            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="react logo"/>
                        <ul>
                            {
                                routes.map(({to,name})=>(
                                <li key={to}>
                                    <NavLink to ={to} className={({isActive})=>isActive?'nav-active':''}>{name}</NavLink>
                                </li>
                              ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(({to,path,Component})=>(
                                <Route key={to} path={path} element={<Component />} />
                            ))
                        }
                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>        
            </BrowserRouter>
        </Suspense>
    )
}

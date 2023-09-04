import {lazy} from 'react'

export const MainPageAsync = lazy(()=>{
    return new Promise((resolve)=> {
        setTimeout(()=>{
            // @ts-ignore
            resolve(import('./MainPage'))
        },1500)
    })
})
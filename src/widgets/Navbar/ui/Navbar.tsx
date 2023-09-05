import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss'
import {AppLink} from "shared/ui/AppLink";
import {AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
     className?:string
 }
 
 export const Navbar = ({className}:NavbarProps) => {
     return (
         <div className={classNames(cls.Navbar,{},[className])}>
             <div className={cls.links}>
                 <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to="/">Главная</AppLink>
                 <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
             </div>
         </div>
     );
 };
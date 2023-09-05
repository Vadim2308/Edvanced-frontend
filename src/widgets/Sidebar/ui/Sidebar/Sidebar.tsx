import {classNames} from "shared/lib/classNames";
import cls from './Sidebar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher";

interface SidebarProps {
    className?:string
}

export const Sidebar = ({className}:SidebarProps) => {
    const [collapsed,setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(p=> !p)
    }
    return (
        <div className={classNames(cls.Sidebar,{[cls.collapsed]:collapsed},[className])}>
            <button onClick={onToggle}>TOGGLE</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};
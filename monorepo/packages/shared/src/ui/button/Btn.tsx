import cls from './Btn.module.scss'

interface btnProps {
    text: string;
    yellow?: boolean;
}

export const Btn = ({text, yellow} : btnProps) => {
    return (
        <button className={yellow ? cls.yellow : ''}>
            {text}
        </button>
    )
}
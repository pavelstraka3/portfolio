import {ReactNode} from "react";

type Props = {
    children: ReactNode
}

export function Header3({children}: Props) {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {children}
        </h3>
    )
}

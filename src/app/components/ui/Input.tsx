import { cn } from '@/app/utils';
import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: Props) => {
    return (
        <input
            className={cn("p-2 rounded-sm  bg-opacity-50", className)}
            {...props}
        />
    );
};

export default Input;
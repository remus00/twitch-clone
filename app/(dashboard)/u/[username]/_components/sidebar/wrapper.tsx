'use client';

import { cn } from '@/lib/utils';
import { useCreatorSidebar } from '@/store/use-creator-sidebar';
import React from 'react';

interface WrapperProps {
    children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
    const { collapsed } = useCreatorSidebar((state) => state);

    return (
        <aside
            className={cn(
                'h-full fixed left-0 flex flex-col w-[70px] lg:w-60 bg-background border-r border-[#2d2e35] z-50',
                collapsed && 'lg:w-[70px]',
            )}
        >
            {children}
        </aside>
    );
};

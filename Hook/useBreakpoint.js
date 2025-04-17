import { useEffect, useState } from 'react';

export const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState('desktop');

    useEffect(() => {
        const mobileQuery = window.matchMedia('(max-width: 767px)');
        const tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');

        const getCurrent = () => {
            if (mobileQuery.matches) return 'mobile';
            if (tabletQuery.matches) return 'tablet';
            return 'desktop';
        };

        const update = () => setBreakpoint(getCurrent());

        // 🔥 Escuchar cambios en cada media query
        mobileQuery.addEventListener('change', update);
        tabletQuery.addEventListener('change', update);

        update(); // inicial

        return () => {
            mobileQuery.removeEventListener('change', update);
            tabletQuery.removeEventListener('change', update);
        };
    }, []);

    return breakpoint;
};


import { useEffect, useRef } from "react";


export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef();

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        const cb = (entries) => {
            if (entries[0].isIntersecting && canLoad) {
                callback();
            }
        };

        observer.current = new IntersectionObserver(cb);
        if (ref.current) {
            observer.current.observe(ref.current);
        }

        return () => observer.current?.disconnect();
    }, [isLoading, ref, canLoad, callback]);
};
import { useState, useEffect } from "react";

type WindowSize = {
    width: number;
    height: number;
}

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState<WindowSize>(getWindowSize())

    function getWindowSize():WindowSize {
        const { innerWidth: width, innerHeight: height } = window;
        return {width, height}
    }

    useEffect(() => {
        function handleResize() {
            console.log(getWindowSize().width)
            setWindowSize(getWindowSize())
        }

        window.addEventListener('resize', handleResize)
    }, [])

    return windowSize;
}
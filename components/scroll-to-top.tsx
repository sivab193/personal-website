"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)

        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    if (!isVisible) {
        return null
    }

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <Button
                onClick={scrollToTop}
                className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-3 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-110"
                aria-label="Scroll to top"
            >
                <ArrowUp className="h-6 w-6" />
            </Button>
        </div>
    )
}

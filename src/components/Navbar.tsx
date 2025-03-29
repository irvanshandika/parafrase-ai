"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/src/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="bg-background border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">ParaphraseAI</span>
        </Link>
        
        <div className="flex md:order-2 gap-3">
          <Link href="/paraphrase">
            <Button>Get Started</Button>
          </Link>
          
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none hover:bg-accent"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        
        <div 
          className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} 
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
            <li>
              <Link 
                href="/" 
                className={`block py-2 px-3 md:p-0 relative group ${
                  isActive('/') ? 'text-blue-600' : 'text-muted-foreground hover:text-blue-600'
                }`}
              >
                Home
                <span className={`absolute left-0 bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </li>
            <li>
              <Link 
                href="/paraphrase" 
                className={`block py-2 px-3 md:p-0 relative group ${
                  isActive('/paraphrase') ? 'text-blue-600' : 'text-muted-foreground hover:text-blue-600'
                }`}
              >
                Paraphrase
                <span className={`absolute left-0 bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  isActive('/paraphrase') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

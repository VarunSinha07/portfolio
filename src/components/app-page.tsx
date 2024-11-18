'use client'

import { useState, useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

// Components
import { Button } from "@/components/ui/button"

import { StarsBackground } from './ui/stars-background'
import { ShootingStars } from './ui/shooting-stars'
import { TextGenerateEffect } from './ui/text-generate-effect'

import IconCloud from './ui/icon-cloud'
import { HeroParallax } from './ui/hero-parallax'
import { Timeline } from './ui/timeline'
import { FloatingDock } from './ui/floating-dock'
import {IconMail, IconBrandLinkedin, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react';

const products = [
  {
    title: "GoFest",
    link: "https://go-fests.vercel.app/sign-in",
    thumbnail: "/goFest.jpeg",
  },
  {
    title: "EchoTales",
    link: "/https://echotales.vercel.app/",
    thumbnail: "/EchoTales.png",
  },
  {
    title: "PlanIt",
    link: "/https://github.com/VarunSinha07/ToDo-List",
    thumbnail: "/todo.png",
  },
  {
    title: "PurrFect Match",
    link: "https://varunsinha07.github.io/PurrFect-Match/",
    thumbnail: "/purrfect.png",
  },
  {
    title: "GoFest",
    link: "https://go-fests.vercel.app/sign-in",
    thumbnail: "/goFest.jpeg",
  },
  {
    title: "EchoTales",
    link: "https://echotales.vercel.app/",
    thumbnail: "/EchoTales.png",
  },
  {
    title: "PlanIt",
    link: "/https://github.com/VarunSinha07/ToDo-List",
    thumbnail: "/todo.png",
  },
  {
    title: "PurrFect Match",
    link: "https://varunsinha07.github.io/PurrFect-Match/",
    thumbnail: "/purrfect.png",
  },
  {
    title: "GoFest",
    link: "https://go-fests.vercel.app/sign-in",
    thumbnail: "/goFest.jpeg",
  },
];

const timelineData = [
  {
    title: "2024",
    content: (
      <div>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-14">
        Creating and developing websites
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-12">
          <Image
            src="/goFest.jpeg" 
            alt="GoFest"
            width={450} 
            height={800} 
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/EchoTales.png" 
            alt="EchoTales"
            width={450} 
            height={800} 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Early 2024",
    content: (
      <div>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-14">
        Embarked on my path in web development
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-12">
          <Image
            src="/todo.png"
            alt="todolist"
            width={450}
            height={800}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/purrfect.png"
            alt="purrfect"
            width={450}
            height={800}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-14">
        Acquired proficiency in programming languages such as
        </p>
        <div className="flex flex-wrap md:flex-nowrap gap-12">
          <Image
            src="/python.jpg"
            alt="python"
            width={100}
            height={100}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/c.png"
            alt="c"
            width={100}
            height={100}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/cplusplus.png"
            alt="cplusplus"
            width={100}
            height={100}
            className="rounded-lg shadow-lg"
          />
        </div>
        
      </div>
    ),
  },
];


const slugs = ["react", "typescript", "javascript", "nodejs", "css3", "html5", "git", "nextdotjs","python","c","Cplusplus","postgresql",
  "mongodb","nodejs","express","java","android","vscode","github","vercel","kotlin","java","npm","bun","supabase"];



  const dockItems = [
    {
      title: "GMail",
      icon: <IconMail className="h-6 w-6" />,
      href: "mailto:varunsinha2604@gmail.com",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-6 w-6" />,
      href: "https://www.linkedin.com/in/varunsinha20/",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-6 w-6" />,
      href: "https://github.com/VarunSinha07",
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-6 w-6" />,
      href: "https://www.instagram.com/varun._.sinha/",
    },
  ];

export function BlockPage() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      
      <main className="container mx-auto px-6 pt-20">
        <StarsBackground/>
        <ShootingStars/>
        <section id="home" className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Image
              src="/varun.jpg"
              alt="photo"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8"
            />

            <h1 className="text-4xl font-bold mb-4">Varun Sinha</h1>
            <TextGenerateEffect
            words='Full-Stack Developer </ >'
            />
            <TextGenerateEffect
            words='Building seamless experiences, from front to back!'
            />
          </motion.div>
        </section>

        

        <section id="projects" className="py-20">
        <HeroParallax products={products}/>
        </section>

        <section id="journey" className="py-20">
        <Timeline data={timelineData} />

        </section>
            
        <section id="skills" className="py-20">
          <h2 className="text-5xl font-bold mb-12 ml-16">Skills</h2>
          <div className="flex justify-center">
            <IconCloud iconSlugs={slugs}/>
          </div>
        </section>

      </main>
      <section id="contact" className="py-20">
      <FloatingDock 
        items={dockItems}
        desktopClassName="relative mx-auto w-full max-w-[250px] flex gap-4 items-center justify-center rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 py-3 mt-12"
        mobileClassName="fixed bottom-0 right-0 flex flex-col gap-4 items-center rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 py-3"
      />
    </section>
      <footer className="bg-muted py-6 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">© 2024 Varun Sinha :)</p>
        </div>
      </footer>

      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 rounded-full"
        onClick={toggleDarkMode}
      >
      {darkMode ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}
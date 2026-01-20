import { Mail, Linkedin, Github, Globe, Cpu, Code, Users, MessageCircle, FolderOpen, Mic } from 'lucide-react'

export interface ContactMethod {
  icon: any
  label: string
  value: string
  href: string
  external?: boolean
}

export interface LookingForItem {
  icon: any
  label: string
}

export const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dmeshram@umd.edu',
    href: 'mailto:dmeshram@umd.edu',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'dhairyashil-meshram',
    href: 'https://linkedin.com/in/dhairyashil-meshram',
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Dhairya-Senpai',
    href: 'https://github.com/Dhairya-Senpai',
    external: true,
  },
  {
    icon: Globe,
    label: 'Portfolio',
    value: 'Go to online portfolio website',
    href: '/',
  },
]

export const lookingFor: LookingForItem[] = [
  { icon: Cpu, label: 'Cybersecurity Projects' },
  { icon: Code, label: 'Full Stack Development' },
  { icon: Users, label: 'Early-stage Consultancy' },
  { icon: MessageCircle, label: 'Technical Mentoring' },
  { icon: FolderOpen, label: 'Open Source Collaborations' },
  { icon: Mic, label: 'Speaking Opportunities' },
]

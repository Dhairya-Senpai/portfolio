export interface TimelineItem {
  id: string
  type: 'experience' | 'education' | 'achievement'
  title: string
  organization: string
  location: string
  period: string
  description: string
  note?: string
  current?: boolean
}

export const timelineData: TimelineItem[] = [
  {
    id: '1',
    type: 'education',
    title: 'Master of Engineering in Cyber Security',
    organization: 'University of Maryland',
    location: 'United States',
    period: 'Aug 2025 - May 2027',
    description: 'GPA: 4.0/4.0. Coursework: Hacking of C programs and Unix Binaries, Security Tools for Information Security, Digital Forensics and Incident Response.',
    current: true,
  },
  {
    id: '2',
    type: 'experience',
    title: 'Quality Assurance Engineer — I',
    organization: 'Accelya',
    location: 'Pune, India',
    period: 'July 2024 - Aug 2025',
    description: 'Led end-to-end testing efforts for airline product, ensuring its reliability and adherence to industry standards. Collaborated with development and product teams to design comprehensive QA strategies, ensuring both functionality and security best practices were upheld throughout the software lifecycle. Implemented and optimized automated test suites, reducing manual effort by up to 30% and accelerating regression cycles.',
  },
  {
    id: '3',
    type: 'experience',
    title: 'Research Intern',
    organization: 'Annasaheb Magar College',
    location: 'Pune, India',
    period: 'Sept 2023 - June 2024',
    description: 'Built a Smart Healthcare Monitoring System using ML models, achieving 93% accuracy with secure AES-256 encryption. Optimized a college portal for 3,000+ users, reducing response time by 40% via query and cache improvements. Developed a Network Traffic Analyzer using Python and Wireshark, detecting 50+ suspicious network activities.',
  },
  {
    id: '4',
    type: 'experience',
    title: 'Web Developer Intern',
    organization: 'Sunrise Group',
    location: 'Jaipur, India (Remote)',
    period: 'Feb 2022 - May 2022',
    description: 'Engineered an e-commerce site on WordPress, optimizing functionality for enhanced user experience. Increased website traffic by 35% through effective SEO strategies, significantly boosting visibility and engagement. Developed a dedicated logistics website, streamlining operations and improving efficiency.',
  },
  {
    id: '5',
    type: 'education',
    title: 'Bachelor of Engineering in Computer',
    organization: 'Savitribai Phule Pune University',
    location: 'Pune, India',
    period: 'Completed',
    description: 'Coursework: Network Application, Operating Systems.',
  },
  {
    id: '6',
    type: 'achievement',
    title: 'Winner in Smart India Hackathon 2022',
    organization: 'Ministry of Rural Development',
    location: 'India',
    period: '2022',
    description: 'Led a team of six to solve a problem statement from the Ministry of Rural Development, securing first place among the top 8 teams. Demonstrated exceptional technical skills and innovative problem-solving abilities in a competitive environment.',
  },
  {
    id: '7',
    type: 'achievement',
    title: 'Participant at Zonal Level Competition Aavishkar 2022',
    organization: 'Aavishkar 2022',
    location: 'India',
    period: '2022',
    description: 'Presented the blockchain-based tender allocation website project with team members at an inter-college idea and innovation competition, demonstrating strong technical and problem-solving skills.',
  },
  {
    id: '8',
    type: 'achievement',
    title: 'Web Team Member at ACM PCCOER',
    organization: 'ACM PCCOER',
    location: 'Pune, India',
    period: '2021-2023',
    description: 'Collaborated on various projects and events, contributing actively to the ACM chapter at PCCOER. Worked on web development initiatives and supported chapter activities.',
  },
]

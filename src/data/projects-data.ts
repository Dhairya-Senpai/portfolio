export interface Project {
  id: string
  title: string
  year: string
  subtitle: string
  description: string
  techStack: string[]
  metrics: { label: string; value: string }[]
  status: string
  statusColor: string
  link?: string
  github?: string
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Tender Allocation Website',
    year: '2024',
    subtitle: 'Blockchain-based Transparent Tendering',
    description: 'Implemented smart contracts to ensure fairness and transparency in the tendering process, achieving over 98% accuracy and reducing processing time by 16.7%.',
    techStack: ['Blockchain', 'Solidity', 'Web3', 'Smart Contracts'],
    metrics: [
      { label: '98%', value: 'ACCURACY' },
      { label: '16.7%', value: 'FASTER PROCESSING' },
    ],
    status: 'COMPLETED',
    statusColor: 'text-green-400',
    github: '#',
  },
  {
    id: '2',
    title: 'Handwritten to Editable Text Converter',
    year: '2024',
    subtitle: 'ML-powered Form Digitization (Hackathon Winner)',
    description: 'Utilized CNN and VGG16 models to convert handwritten forms into editable text, attaining an 82% accuracy rate with efficient image processing pipeline.',
    techStack: ['Python', 'Machine Learning', 'CNN', 'VGG16', 'React.js'],
    metrics: [
      { label: '82%', value: 'ACCURACY RATE' },
      { label: 'Hackathon', value: 'WINNER' },
    ],
    status: 'HACKATHON WINNER',
    statusColor: 'text-yellow-400',
    github: '#',
  },
  {
    id: '3',
    title: 'Fashion Fiesta Website',
    year: '2023',
    subtitle: 'E-commerce Fashion Platform',
    description: 'Created an e-commerce fashion website, integrating API for inter-portal transactions and increasing traffic through strategic online resources and optimization.',
    techStack: ['PHP', 'MySQL', 'JavaScript', 'API Integration'],
    metrics: [
      { label: 'Full-stack', value: 'E-COMMERCE' },
      { label: 'API', value: 'INTEGRATION' },
    ],
    status: 'COMPLETED',
    statusColor: 'text-blue-400',
    github: '#',
  },
  {
    id: '4',
    title: 'Space Invaders Game',
    year: '2023',
    subtitle: 'Feature-rich Interactive Game',
    description: 'Independently developed a feature-rich Space Invaders game, incorporating object tracking, scoring system, dynamic difficulty levels, and ammunition updates.',
    techStack: ['Python', 'Pygame', 'Game Development'],
    metrics: [
      { label: 'Dynamic', value: 'DIFFICULTY LEVELS' },
      { label: 'Real-time', value: 'OBJECT TRACKING' },
    ],
    status: 'COMPLETED',
    statusColor: 'text-purple-400',
    github: '#',
  },
]

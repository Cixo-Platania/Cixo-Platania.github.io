import { existsSync } from 'node:fs';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an absolute site path with the deploy base (needed on GitHub Pages). */
export const url = (path: string) => `${base}${path}`;

// Drop the PDF at public/cv/Francesco_Platania_CV.pdf and the download
// buttons appear automatically on the next build.
const CV_FILE = 'cv/Francesco_Platania_CV.pdf';

export const site = {
  name: 'Francesco Platania',
  role: 'Game & Level Designer',
  description:
    'Portfolio of Francesco Platania, junior game and level designer working in Unity and Unreal Engine.',
  email: 'francesco.platania1998@gmail.com',
  linkedin: 'https://www.linkedin.com/in/francesco-platania-721036120/',
  github: 'https://github.com/Cixo-Platania',
  cv: existsSync(`public/${CV_FILE}`) ? url(`/${CV_FILE}`) : null,
};

export const about = [
  "Hi, I'm Francesco Platania, a junior game and level designer with professional experience and a background in Unity and Unreal Engine.",
  "I graduated from Digital Bros Game Academy, specialising in game and level design, and from Nautilus Academy in game development. I'm used to working with Agile methodology.",
];

export const experience = [
  {
    period: '2021 – now',
    place: 'VAF Gaming Studio',
    role: 'Game design · Game programming (Unity)',
    detail: 'VAF-Survivor, VAF-Arcade, VAF-Kart, VAF-Golf, Aivar Metaland',
  },
  {
    period: '2020 – 2021',
    place: 'Gameful',
    role: 'Game programming · Game design',
    detail: 'Mishi (Unity), Jeremia: Nightfall (UE4)',
  },
];

export const education = [
  { period: '2022 – 2024', title: 'Game Designer course', place: 'Digital Bros Game Academy' },
  { period: '2019 – 2021', title: 'Game Developer certification', place: 'Nautilus Academy' },
  { period: '2011 – 2016', title: 'High school diploma', place: 'IPSAT Rocco Chinnici' },
];

export const skills = [
  { group: 'Unity', items: ['C#', 'Shader Graph', 'Particle System'] },
  { group: 'Unreal Engine 4/5', items: ['Blueprint', 'Material Editor', 'Niagara'] },
  { group: 'Design & docs', items: ['Visual graph paper', 'Draw.io', 'Miro', 'Figma', 'G-Suite'] },
  { group: 'Production', items: ['Jira', 'Trello', 'ClickUp'] },
  { group: 'Art tools', items: ['Photoshop', 'Canva'] },
];

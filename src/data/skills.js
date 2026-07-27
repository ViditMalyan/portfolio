import {
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaAws, FaGitAlt, FaGithub, FaLinux, FaHtml5, FaCss3Alt,
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiCplusplus, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiFirebase,
  SiSpringboot,
} from 'react-icons/si';

const skills = [
  { name: 'Java', icon: FaJava, color: '#ED8B00', category: 'Language' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Language' },
  { name: 'React', icon: FaReact, color: '#61DAFB', category: 'Frontend' },
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F', category: 'Backend' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Language' },
  { name: 'Python', icon: FaPython, color: '#3776AB', category: 'Language' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C', category: 'Language' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', category: 'Frontend' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', category: 'Backend' },
  { name: 'Express', icon: SiExpress, color: '#ffffff', category: 'Backend' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Database' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', category: 'Tools' },
  { name: 'GitHub', icon: FaGithub, color: '#ffffff', category: 'Tools' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED', category: 'DevOps' },
  { name: 'AWS', icon: FaAws, color: '#FF9900', category: 'Cloud' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', category: 'Cloud' },
  { name: 'Linux', icon: FaLinux, color: '#FCC624', category: 'Tools' },
];

export default skills;

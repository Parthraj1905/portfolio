export type Skill = {
  name: string;
  level: "learning" | "comfortable" | "proficient";
};

export type SkillCategory = {
  category: string;
  icon: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: "code",
    skills: [
      { name: "Python", level: "proficient" },
      { name: "SQL", level: "proficient" },
      { name: "R", level: "learning" },
    ],
  },
  {
    category: "Data & ML",
    icon: "brain",
    skills: [
      { name: "Pandas", level: "proficient" },
      { name: "NumPy", level: "comfortable" },
      { name: "Scikit-learn", level: "comfortable" },
      { name: "PyTorch", level: "learning" },
      { name: "TensorFlow", level: "learning" },
    ],
  },
  {
    category: "Visualization",
    icon: "chart",
    skills: [
      { name: "Matplotlib", level: "comfortable" },
      { name: "Seaborn", level: "comfortable" },
      { name: "Plotly", level: "learning" },
    ],
  },
  {
    category: "Tools & Infra",
    icon: "tools",
    skills: [
      { name: "Tableau", level: "comfortable" },
      { name: "Git", level: "comfortable" },
      { name: "Azure", level: "learning" },
      { name: "Docker", level: "learning" },
    ],
  },
];

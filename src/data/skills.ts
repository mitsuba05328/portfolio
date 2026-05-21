export type Skill = {
  name: string;
  category: 'Frontend' | 'App' | 'Backend' | 'Design / Tool';
  level: '実装経験あり' | '学習中' | 'ハッカソンで使用' | '個人開発で使用';
};

export const skills: Skill[] = [
  { name: 'HTML', category: 'Frontend', level: '実装経験あり' },
  { name: 'CSS', category: 'Frontend', level: '実装経験あり' },
  { name: 'JavaScript', category: 'Frontend', level: '実装経験あり' },
  { name: 'TypeScript', category: 'Frontend', level: '学習中' },
  { name: 'React', category: 'Frontend', level: '個人開発で使用' },
  { name: 'React Native', category: 'App', level: 'ハッカソンで使用' },
  { name: 'Expo', category: 'App', level: 'ハッカソンで使用' },
  { name: 'Flutter', category: 'App', level: '学習中' },
  { name: 'Node.js', category: 'Backend', level: 'ハッカソンで使用' },
  { name: 'Express', category: 'Backend', level: 'ハッカソンで使用' },
  { name: 'PHP', category: 'Backend', level: '実装経験あり' },
  { name: 'MySQL', category: 'Backend', level: '実装経験あり' },
  { name: 'Figma', category: 'Design / Tool', level: '学習中' },
  { name: 'PowerPoint', category: 'Design / Tool', level: '実装経験あり' },
  { name: 'Git / GitHub', category: 'Design / Tool', level: '個人開発で使用' },
];

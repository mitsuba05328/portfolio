export type Skill = {
  name: string;
  category: 'Frontend / Mobile' | 'Backend' | 'Design / Tool';
  level: '実装経験あり' | '学習中' | 'ハッカソンで使用' | '個人開発で使用';
};

export const skills: Skill[] = [
  { name: 'HTML', category: 'Frontend / Mobile', level: '実装経験あり' },
  { name: 'CSS', category: 'Frontend / Mobile', level: '実装経験あり' },
  { name: 'JavaScript', category: 'Frontend / Mobile', level: '実装経験あり' },
  { name: 'TypeScript', category: 'Frontend / Mobile', level: '学習中' },
  { name: 'React', category: 'Frontend / Mobile', level: '個人開発で使用' },
  { name: 'React Native', category: 'Frontend / Mobile', level: 'ハッカソンで使用' },
  { name: 'Flutter', category: 'Frontend / Mobile', level: '学習中' },
  { name: 'Node.js', category: 'Backend', level: 'ハッカソンで使用' },
  { name: 'Express', category: 'Backend', level: 'ハッカソンで使用' },
  { name: 'PHP', category: 'Backend', level: '実装経験あり' },
  { name: 'MySQL', category: 'Backend', level: '実装経験あり' },
  { name: 'Figma', category: 'Design / Tool', level: '学習中' },
  { name: 'Expo', category: 'Design / Tool', level: 'ハッカソンで使用' },
  { name: 'PowerPoint', category: 'Design / Tool', level: '実装経験あり' },
  { name: 'Git / GitHub', category: 'Design / Tool', level: '個人開発で使用' },
];

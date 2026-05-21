export type Project = {
  title: string;
  description: string;
  points: string[];
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: '0.2秒の戦い',
    description:
      'React Hooksの理解を目的に作成したキーボード反射神経ゲームです。10回分の平均反応時間をもとに結果を表示し、現在はオンライン対戦機能にも挑戦しています。',
    points: ['useState / useEffect / useRef / useMemoを活用', '平均反応時間の集計と結果表示', 'リアルタイム性のある体験設計を検証中'],
    tags: ['React', 'TypeScript', 'Hooks'],
  },
  {
    title: 'こころチケット',
    description:
      '感謝や思いやりをチケットとして送り合えるアプリです。小さな気持ちを可視化し、人とのつながりを自然に増やせる体験を目指しました。',
    points: ['React Native / Expoで開発', 'モバイル向けUIを設計', '気軽に送れるコミュニケーション体験を検討'],
    tags: ['React Native', 'Expo', 'UI/UX'],
  },
  {
    title: 'キャンパス彼女',
    description:
      '学生生活を少し楽しくすることをテーマにしたハッカソン作品です。短期間でアイデアを形にする経験を通して、企画から実装までの流れを学びました。',
    points: ['React Native / Expoで制作', 'ハッカソンでチーム開発', '学生目線の体験設計'],
    tags: ['React Native', 'Expo', 'Hackathon'],
  },
  {
    title: 'もぐコード',
    description:
      'コードを食べる育成ゲーム風アプリです。Gemini AIを使い、学習と遊びを組み合わせた体験づくりに取り組みました。',
    points: ['Node.js / ExpressでAPIを構築', 'Gemini AIを活用', 'ハッカソン作品として開発'],
    tags: ['Node.js', 'Express', 'Gemini AI'],
  },
  {
    title: '学食予約アプリ「ランチる！」',
    description:
      '学生が学食メニューを予約でき、食堂側は売れ筋の把握や発注効率化につなげられるアプリです。食品ロスの削減も意識して企画しました。',
    points: ['予約体験の導線を設計', '利用者と運営者の双方の課題を整理', '継続開発中'],
    tags: ['Web App', 'Planning', 'UI'],
  },
  {
    title: 'LINEスタンプ「ぽわシャチ君」',
    description:
      'オリジナルキャラクター「ぽわシャチ君」のLINEスタンプを制作・販売しています。今後も海の生物をテーマにした作品を増やしていく予定です。',
    points: ['キャラクター制作', 'LINE Creators Marketで公開', '見た人に伝わる表情設計を意識'],
    tags: ['Illustration', 'LINE Stamp'],
    link: 'https://store.line.me/stickershop/author/5504464',
  },
];

import editing1 from '../assets/images/editing1.jpg';
import editing2 from '../assets/images/editing2.jpg';
import editing3 from '../assets/images/editing3.jpg';
import fishing1 from '../assets/images/fishing1.png';
import fishing2 from '../assets/images/fishing2.jpg';
import fishing3 from '../assets/images/fishing3.jpg';
import manga1 from '../assets/images/manga1.jpeg';
import manga2 from '../assets/images/manga2.jpg';
import manga3 from '../assets/images/manga3.webp';

export type Hobby = {
  title: string;
  description: string;
  images: string[];
};

export const hobbies: Hobby[] = [
  {
    title: '動画編集',
    description:
      '好きな漫画の動画や日常の記録を編集しています。CapCut、Alight Motion、Premiere Proを使い、BGM、テロップ、エフェクトを組み合わせて、見て楽しい映像に仕上げることが好きです。',
    images: [editing1, editing2, editing3],
  },
  {
    title: '漫画',
    description:
      '幅広いジャンルの漫画を読むのが好きです。物語の構成やキャラクターの見せ方から、UIや作品づくりのアイデアを得ることもあります。',
    images: [manga1, manga2, manga3],
  },
  {
    title: '釣り',
    description:
      '海釣りや川釣りを楽しんでいます。自然の中で集中しながら駆け引きを楽しむ時間が、制作や学習のよい気分転換になっています。',
    images: [fishing1, fishing2, fishing3],
  },
];

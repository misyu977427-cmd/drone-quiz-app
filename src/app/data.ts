// src/app/data.ts
export type Question = {
  readonly id: number;
  readonly text: string;
  readonly choices: readonly string[];
  readonly answerIndex: number;
  readonly reference: string;
  readonly explanation: string;
};

export const quizData: readonly Question[] = [
  { id: 1, text: "無人航空機の登録の有効期間は何年か？", choices: ["1年", "3年", "5年"], answerIndex: 1, reference: "教則 2.1.1(4)", explanation: "登録の有効期間は3年であり、期間満了後も飛行させる場合は更新が必要です。" },
  { id: 2, text: "登録記号の表示について、150kg未満の機体での表示高さは原則何mm以上か？", choices: ["3mm", "10mm", "25mm"], answerIndex: 2, reference: "教則 2.1.2(1)", explanation: "25kg以上150kg未満は25mm以上必要です。" },
  { id: 3, text: "アルコール等の影響下での無人航空機の操縦について、正しいものはどれか？", choices: ["少量なら認められる", "一切禁止されている", "身体への影響がなければよい"], answerIndex: 1, reference: "教則 2.2.1", explanation: "アルコールや薬物の影響下での飛行は一切禁止されています。" },
  { id: 4, text: "夜間飛行を行う際、原則として必要な措置はどれか？", choices: ["機体に灯火をつける", "補助者を配置しない", "高度149m以下で飛ばす"], answerIndex: 0, reference: "教則 2.2.2(1)", explanation: "機体の向きが確認できる灯火の装備が義務付けられています。" },
  { id: 5, text: "目視外飛行において、補助者を配置しない場合に必須となる機能は？", choices: ["自動帰還機能", "機体カメラによる飛行状況の監視", "GPSの搭載"], answerIndex: 1, reference: "教則 2.2.2(2)", explanation: "機体カメラ等による監視が不可欠です。" },
  { id: 6, text: "第三者又は第三者の物件との間に保持すべき距離は？", choices: ["10m以上", "30m以上", "50m以上"], answerIndex: 1, reference: "教則 2.2.2(3)", explanation: "人又は物件との間に30m以上の距離を保つ必要があります。" },
  { id: 7, text: "イベント会場などの多数の人が集まる催し場所での飛行は？", choices: ["原則禁止されている", "許可なく可能", "30m離れれば可能"], answerIndex: 0, reference: "教則 2.2.2(4)", explanation: "催し場所の上空は原則禁止（要許可）です。" },
  { id: 8, text: "爆発物などの危険物の輸送について、正しいものはどれか？", choices: ["梱包すれば可能", "原則禁止されている", "1kg以下なら可能"], answerIndex: 1, reference: "教則 2.2.2(5)", explanation: "危険物の輸送は航空法で禁止されています。" },
  { id: 9, text: "機体からの物件の投下について、正しいルールはどれか？", choices: ["水なら投下してよい", "原則禁止されている", "地上に人がいなければよい"], answerIndex: 1, reference: "教則 2.2.2(6)", explanation: "物件の投下は液体を含め原則禁止されています。" },
  { id: 10, text: "無人航空機が航空機と接近する場合の優先順位は？", choices: ["無人航空機が優先", "航空機が優先", "先に発見したほうが優先"], answerIndex: 1, reference: "教則 2.2.3", explanation: "無人航空機は有人航空機に進路を譲る義務があります。" },
  { id: 11, text: "飛行前点検を怠った場合の罰則は？", choices: ["罰金なし", "50万円以下の罰金", "100万円以下の罰金"], answerIndex: 1, reference: "教則 2.2.4", explanation: "飛行前確認を怠ると50万円以下の罰金が科されることがあります。" },
  { id: 12, text: "重大な事故が発生した場合、直ちに報告すべき相手は？", choices: ["警察署長", "国土交通大臣", "市町村長"], answerIndex: 1, reference: "教則 2.2.6", explanation: "事故時は直ちに国土交通大臣に報告する義務があります。" },
  { id: 13, text: "リチウムポリマーバッテリーの保管として、不適切なものはどれか？", choices: ["満充電状態で長期保管", "冷暗所で保管", "衝撃を与えないように保管"], answerIndex: 0, reference: "教則 4.1.2(3)", explanation: "満充電での保管は劣化や火災の原因になります。" },
  { id: 14, text: "GNSSの電波が遮断された際、機体に起こる現象は？", choices: ["その場で緊急着陸する", "位置保持ができず流される", "高度維持ができなくなる"], answerIndex: 1, reference: "教則 4.3.1", explanation: "水平方向の位置保持ができなくなり流されます。" },
  { id: 15, text: "地磁気センサー（コンパス）に影響を与える場所として避けるべきは？", choices: ["木造建築物の近く", "高圧送電線の近く", "公園の中央"], answerIndex: 1, reference: "教則 4.3.2", explanation: "強い磁気を発する送電線の近くは避けるべきです。" },
  { id: 16, text: "フェールセーフ機能の説明として正しいものはどれか？", choices: ["故障を未然に防ぐ機能", "異常時に安全に停止・帰還する機能", "墜落を100%防ぐ機能"], answerIndex: 1, reference: "教則 4.4.1", explanation: "異常時に安全を確保する仕組みを指します。" },
  { id: 17, text: "プロペラのピッチとは何を指すか？", choices: ["プロペラの長さ", "プロペラが1回転で進む理論上の距離", "プロペラの回転速度"], answerIndex: 1, reference: "教則 5.1.1", explanation: "1回転で空気中を進む理論上の距離のことです。" },
  { id: 18, text: "マルチコプターの機首を右に向ける（ヨー）ための操作は？", choices: ["全モーターを増速する", "対角線のプロペラ群の回転差を作る", "右側のモーターを減速する"], answerIndex: 1, reference: "教則 5.2.2", explanation: "反トルクのバランスを崩して旋回させます。" },
  { id: 19, text: "上昇気流が発生しやすい場所はどれか？", choices: ["アスファルトや砂地の上空", "水面の上空", "森林の上空"], answerIndex: 0, reference: "教則 6.1.2", explanation: "熱せられやすいアスファルト上空で発生します。" },
  { id: 20, text: "風速5m/sの環境下で飛行させる場合の判断として適切なのは？", choices: ["全く問題なく飛行できる", "慎重に操作し、状況により中止する", "法律で一律に禁止されている"], answerIndex: 1, reference: "教則 6.2.1", explanation: "状況により中止を含めた慎重な判断が必要です。" },
  { id: 21, text: "霧の中での飛行が推奨されない主な理由は？", choices: ["機体が濡れて重くなるから", "視界不良と機体内部への浸水リスク", "電波が霧に吸収されるから"], answerIndex: 1, reference: "教則 6.2.2", explanation: "視程低下と浸水による故障のリスクがあります。" },
  { id: 22, text: "「飛行日誌」の備え付けと記載について、正しいものはどれか？", choices: ["特定飛行を行う場合は義務である", "趣味の飛行なら記載不要である", "飛行後1ヶ月以内に記載すればよい"], answerIndex: 0, reference: "教則 2.2.5", explanation: "特定飛行を行う場合、飛行日誌の備え付けと、飛行・整備記録の記載が法的に義務付けられています。" },
  { id: 23, text: "地表又は水面から何m以上の高さの空域を飛行させる場合、原則として許可が必要か？", choices: ["100m", "150m", "200m"], answerIndex: 1, reference: "教則 2.1.3(1)", explanation: "航空機の安全に影響を及ぼす恐れがあるため、150m以上の空域を飛行させる場合は許可が必要です。" },
  { id: 24, text: "無人航空機と操縦装置間の電波通信について、安定した通信を確保する条件は？", choices: ["見通しが確保されていること", "雨天であること", "アンテナを地面に向けること"], answerIndex: 0, reference: "教則 4.2.1", explanation: "電波は障害物により遮断される特性があるため、原則として見通し範囲内での飛行が推奨されます。" },
  { id: 25, text: "操縦者の体調管理について、飛行を中止すべき状態はどれか？", choices: ["十分な睡眠をとった状態", "過度の疲労やストレスがある状態", "軽いストレッチをした状態"], answerIndex: 1, reference: "教則 3.1.2", explanation: "疲労やストレスは判断力や注意力、反応速度を低下させるため、安全な運航が困難と判断される場合は飛行を中止すべきです。" }
];
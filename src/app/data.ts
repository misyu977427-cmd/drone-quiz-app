// src/app/data.ts
export type Question = {
  readonly id: number;
  readonly text: string;
  readonly options: readonly string[];
  readonly correctAnswer: number;
  readonly reference: string;
  readonly explanation: string;
};

export const quizData: readonly Question[] = [
  // --- 第4版・新規・最重要項目 (20問) ---
  { id: 1, text: "教則第4版で新設された「レベル3.5飛行」の要件として、正しいものはどれか？", options: ["補助者の配置と看板の設置", "技能証明の保有と機上カメラでの安全確認", "機体認証の取得は不要"], correctAnswer: 1, reference: "3.1.2 (2) 4) c", explanation: "レベル3.5は機上カメラ等の活用により補助者や看板を不要とする制度です [cite: 1783, 1786]。" },
  { id: 2, text: "アルコール又は薬物の影響下で飛行させた場合の行政処分の点数は？", options: ["5点", "10点", "15点"], correctAnswer: 2, reference: "3.1.2 (3) 5)", explanation: "飲酒運転等は最も重い「効力の取消」に該当する15点となります [cite: 1875, 1879]。" },
  { id: 3, text: "特定飛行において、飛行前確認を怠った場合の行政処分の点数は？", options: ["1点", "10点", "14点"], correctAnswer: 2, reference: "3.1.2 (3) 5)", explanation: "飛行前確認や衝突予防措置の不履行は14点となります 。" },
  { id: 4, text: "「緊急用務空域」の確認義務があるのは誰か？", options: ["機体登録者", "操縦者", "補助者"], correctAnswer: 1, reference: "3.1.2 (2) 1) b", explanation: "操縦者は飛行開始前に緊急用務空域の該当有無を確認する義務があります [cite: 1709]。" },
  { id: 5, text: "無人航空機を登録せずに飛行させた場合の罰則として正しいものは？", options: ["10万円以下の罰金", "50万円以下の罰金", "1年以下の懲役又は50万円以下の罰金"], correctAnswer: 2, reference: "3.1.2 (3) 4)", explanation: "未登録機の飛行は1年以下の懲役又は50万円以下の罰金の対象です [cite: 1869]。" },
  { id: 6, text: "無人航空機の登録の有効期間は何年か？", options: ["1年", "3年", "5年"], correctAnswer: 1, reference: "3.1.2 (1) 2)", explanation: "登録の有効期間は3年です [cite: 1679, 1690]。" },
  { id: 7, text: "航空法における「無人航空機」の重量基準は？", options: ["100g以上", "200g以上", "1,000g以上"], correctAnswer: 0, reference: "3.1.1 (1)", explanation: "100グラム以上のものが無人航空機に分類されます [cite: 1574, 1578]。" },
  { id: 8, text: "カテゴリーⅢ飛行（レベル4）とはどのような飛行か？", options: ["無人地帯での目視外飛行", "有人地帯での目視外飛行", "DID地区での目視内飛行"], correctAnswer: 1, reference: "3.1.1 (3) c", explanation: "立入管理措置を講じない第三者上空での特定飛行を指します [cite: 1612, 1613]。" },
  { id: 9, text: "リチウムポリマーバッテリーを長期間使用しない時の保管目安（充電率）は？", options: ["100%", "60%", "0%"], correctAnswer: 1, reference: "4.6.1 (2)", explanation: "劣化を防ぐため充電60%程度で保管することが推奨されます [cite: 2287]。" },
  { id: 10, text: "風速何m/s以上で、原則として飛行を中止すべきか？", options: ["3m/s", "5m/s", "10m/s"], correctAnswer: 1, reference: "6.2.2 (1) 2) g", explanation: "一般的に風速5m/s以上は飛行中止の目安とされます [cite: 1738, 2673]。" },
  // --- 基礎・応用項目 (残り40問を補完) ---
  { id: 11, text: "DID（人口集中地区）での飛行は、どのカテゴリーに該当するか？", options: ["カテゴリーⅠ", "カテゴリーⅡ", "カテゴリーⅢ"], correctAnswer: 1, reference: "3.1.1 (3) b", explanation: "DID上空は特定飛行であり、原則カテゴリーⅡに分類されます [cite: 1611]。" },
  { id: 12, text: "機体登録記号を25kg未満の機体に表示する場合の文字の高さは？", options: ["3mm以上", "5mm以上", "25mm以上"], correctAnswer: 1, reference: "3.1.2 (1) 4)", explanation: "25kg未満は5mm以上、25kg以上は25mm以上です [cite: 1687, 1688]。" },
  { id: 13, text: "夜間飛行において、機体に装備すべき必須のものは？", options: ["GPS", "灯火（照明）", "パラシュート"], correctAnswer: 1, reference: "4.2.1 (2)", explanation: "姿勢及び方向が正確に視認できる灯火が必要です [cite: 2057, 2058]。" },
  { id: 14, text: "特定飛行を行う際、携帯が義務付けられていないのは？", options: ["技能証明書", "飛行日誌", "機体の購入領収書"], correctAnswer: 2, reference: "2.2.8", explanation: "許可・承認書、技能証明書、飛行日誌の携行が必要です [cite: 1536, 1853]。" },
  { id: 15, text: "事故が発生した際、報告が義務付けられている事態は？", options: ["人の死傷（重傷以上）", "物件の損壊（第三者物件）", "上記すべて"], correctAnswer: 2, reference: "3.1.2 (3) 1) f", explanation: "人の死傷、物件の損壊、航空機との衝突はすべて報告対象です [cite: 1832, 1833]。" },
  { id: 16, text: "レベル3.5飛行の実施に際し、加入が必要な保険は？", options: ["火災保険", "第三者賠償責任保険", "生命保険"], correctAnswer: 1, reference: "3.1.2 (2) 4) c", explanation: "不測の事態に備え十分な補償が可能な賠償保険が必要です [cite: 1796]。" },
  { id: 17, text: "「第三者」の定義として正しいものはどれか？", options: ["操縦者本人", "操縦者の家族", "飛行に直接的又は間接的に関与していない者"], correctAnswer: 2, reference: "3.1.2 (2) 4) a", explanation: "運航に関与していない人が第三者となります [cite: 1761]。" },
  { id: 18, text: "高度何メートル以上の空域での飛行が原則禁止されているか？", options: ["100m", "150m", "200m"], correctAnswer: 1, reference: "3.1.1 (2) a", explanation: "地表又は水面から150m以上の高さの空域は禁止空域です [cite: 1593]。" },
  { id: 19, text: "飛行機が翼で揚力を発生させる際、翼の上面と下面の気流の関係は？", options: ["上面が速い", "下面が速い", "同じ速度"], correctAnswer: 0, reference: "4.3.2", explanation: "上面の流速が速くなることで気圧が下がり、揚力が発生します [cite: 2083]。" },
  { id: 20, text: "GNSS衛星の信号を最低何個以上受信すると、位置測定が可能になるか？", options: ["2個", "3個", "4個"], correctAnswer: 2, reference: "4.5.3 (1)", explanation: "三次元の位置特定には最低4個以上の衛星が必要です [cite: 2273]。" },
  // ... (21-50問まで同様の形式でデータを構築)
  { id: 21, text: "リチウムポリマーバッテリーが膨らんでいる場合の対処は？", options: ["叩いて直す", "そのまま使う", "直ちに使用を中止し廃棄する"], correctAnswer: 2, reference: "4.6.1 (3)", explanation: "発火の危険があるため、膨らんだものは交換が必要です [cite: 2297, 2298]。" },
  { id: 22, text: "物件投下において、液体（農薬等）の散布は含まれるか？", options: ["含まれる", "含まれない", "飲料水なら含まれない"], correctAnswer: 0, reference: "3.1.2 (2) 2) f", explanation: "農薬等の散布も物件投下の一種に該当します [cite: 1746]。" },
  { id: 23, text: "目視外飛行において、補助者を配置しない場合に必須となる装備は？", options: ["機上カメラ（FPV）", "スピーカー", "望遠鏡"], correctAnswer: 0, reference: "4.2.2 (2)", explanation: "機体の外の様子を常に監視できるカメラ等の装置が必要です [cite: 2065, 2071]。" },
  { id: 24, text: "特定飛行を行う場合、飛行日誌をいつまでに記載すべきか？", options: ["1週間以内", "遅滞なく", "1ヶ月以内"], correctAnswer: 1, reference: "3.1.2 (3) 2) b", explanation: "特定飛行後は遅滞なく日常点検等の記録を行う必要があります [cite: 1853, 1854]。" },
  { id: 25, text: "特定飛行の許可・承認を受けるための申請は何日前までに行うべきか？", options: ["3日前", "10開庁日前", "30日前"], correctAnswer: 1, reference: "5.1.3 (1)", explanation: "原則として10開庁日前までに提出が必要です [cite: 2340]。" },
  { id: 26, text: "飛行中に他の有人航空機を確認した場合の正しい行動は？", options: ["そのまま飛行を続ける", "接近して撮影する", "速やかに降下させるなど回避措置をとる"], correctAnswer: 2, reference: "3.1.1 (3) 1)", explanation: "有人機の安全を最優先し、無人機側が回避します [cite: 1632, 1633]。" },
  { id: 27, text: "特定飛行において、他人に迷惑を及ぼすような急降下を行った場合の点数は？", options: ["1点", "10点", "14点"], correctAnswer: 2, reference: "3.1.2 (3) 5)", explanation: "迷惑を及ぼす方法での飛行は14点となります 。" },
  { id: 28, text: "「技能証明書」を不携帯で特定飛行を行った場合の行政処分の点数は？", options: ["1点", "5点", "10点"], correctAnswer: 0, reference: "3.1.2 (3) 5)", explanation: "技能証明書の不携帯は1点となります [cite: 1877]。" },
  { id: 29, text: "無人航空機が墜落し、第三者の物件を損壊させた場合の行政処分の点数は？", options: ["1点", "10点", "15点"], correctAnswer: 2, reference: "3.1.2 (3) 5)", explanation: "物件の損壊や危険防止措置を講じない場合は15点（取消）となります 。" },
  { id: 30, text: "技能証明（国家資格）を取得できる年齢の下限は？", options: ["15歳", "16歳", "18歳"], correctAnswer: 1, reference: "3.1.2 (5) 2)", explanation: "16歳以上であれば技能証明の申請が可能です [cite: 1907]。" },
  { id: 31, text: "空中でのマルチパス現象が原因で起こりうるトラブルは？", options: ["通信の安定性の低下", "機体重量の増加", "バッテリーの爆発"], correctAnswer: 0, reference: "4.5.1 (1) 2)", explanation: "電波が反射し複数の経路を通ることで通信エラーが起こります [cite: 2228]。" },
  { id: 32, text: "マルチローターの機首方向を変える操作（ヨーイング）を担当する操舵は？", options: ["エルロン", "エレベーター", "ラダー"], correctAnswer: 2, reference: "4.4.3 (3)", explanation: "ラダー操作により機首の左右旋回を行います [cite: 2176]。" },
  { id: 33, text: "離陸直後に揚力が増大する「地面効果」が顕著に起こる高度の目安は？", options: ["機体高度1m程度", "機体高度10m程度", "高度に関係なく起こる"], correctAnswer: 0, reference: "5.2.1 (1)", explanation: "対地高度1m程度までは地面効果の影響が大きくなります [cite: 2363]。" },
  { id: 34, text: "航空法上の「日中」とは、どの時刻を指すか？", options: ["午前9時から午後5時", "日の出から日の入りまで", "明るいうちすべて"], correctAnswer: 1, reference: "3.1.2 (2) 1) a", explanation: "国立天文台が発表する日の出から日の入りまでを指します [cite: 1717]。" },
  { id: 35, text: "送信機（プロポ）のモード2において、上昇・降下を操作するスティックは？", options: ["右側の上下", "左側の上下", "左側の左右"], correctAnswer: 1, reference: "4.4.3 (3)", explanation: "モード2では左側スティックの上下がスロットル（上昇・降下）です [cite: 2171]。" },
  { id: 36, text: "リチウムポリマーバッテリーの特徴として、誤っているものはどれか？", options: ["エネルギー密度が高い", "自己放電が多い", "電圧が高い"], correctAnswer: 1, reference: "4.4.4 (2)", explanation: "自己放電は「少ない」のが特徴です [cite: 2194]。" },
  { id: 37, text: "マルチローターにおいて、プロペラの回転数を制御している部品は？", options: ["ESC", "GNSS", "IMU"], correctAnswer: 0, reference: "4.4.2 (3)", explanation: "ESCがモーターの回転速度を電子的に制御します [cite: 2158, 2159]。" },
  { id: 38, text: "「機体認証」の有効期間（第二種）は何年か？", options: ["1年", "3年", "5年"], correctAnswer: 1, reference: "3.1.1 (4)", explanation: "第二種機体認証の有効期間は3年です [cite: 1619]。" },
  { id: 39, text: "海陸風において、日中（晴天時）に吹く風の向きは？", options: ["陸から海へ", "海から陸へ", "常に一定"], correctAnswer: 1, reference: "6.2.2 (1) 2) e", explanation: "日中は暖まりやすい陸に向かって海から風が吹きます [cite: 2679]。" },
  { id: 40, text: "冬の典型的な気圧配置「西高東低」で吹く季節風の向きは？", options: ["北西", "南東", "南西"], correctAnswer: 0, reference: "6.2.1 (3) 8)", explanation: "シベリア高気圧から日本海へ向かって北西の風が吹きます [cite: 2646]。" },
  { id: 41, text: "霧が発生し、視程（見通せる距離）が低下した場合の正しい判断は？", options: ["低空なら飛行してよい", "飛行を延期又は中止する", "ライトをつけて飛行する"], correctAnswer: 1, reference: "6.2.3 (1)", explanation: "霧や雨、雷鳴が聞こえる時は飛行を中止すべきです [cite: 2697]。" },
  { id: 42, text: "特定航空用機器に含まれ、小型無人機等飛行禁止法の対象となるのは？", options: ["ハンググライダー", "ドローン（100g未満）", "上記すべて"], correctAnswer: 2, reference: "3.2.1 (2)", explanation: "100g未満の機体やハンググライダー等も対象です [cite: 1941, 1943]。" },
  { id: 43, text: "技能証明書（免許）の再交付・更新の申請ができる期間は？", options: ["1年前から", "有効期間満了前6ヶ月から", "満了後3ヶ月以内"], correctAnswer: 1, reference: "3.1.2 (5) 3)", explanation: "有効期間満了の6ヶ月前から更新申請が可能です [cite: 1921]。" },
  { id: 44, text: "高圧送電線の付近で飛行させる際の主なリスクは？", options: ["磁気障害による制御不能", "機体が感電する", "特に影響はない"], correctAnswer: 0, reference: "4.5.2 (2)", explanation: "強い磁気や電磁波によりコンパス等に影響が出る恐れがあります [cite: 2266]。" },
  { id: 45, text: "「フレネルゾーン」の半径が考慮されるべき理由は？", options: ["通信品質を確保するため", "プロペラの効率を上げるため", "バッテリーを節約するため"], correctAnswer: 0, reference: "4.5.1 (1) 3)", explanation: "通信品質を確保するために必要な電波の通り道を確保するためです [cite: 2230, 2231]。" },
  { id: 46, text: "「特定飛行」に該当しない、カテゴリーⅠ飛行に含まれるものは？", options: ["DID地区での目視内飛行", "無人地帯での目視内自動飛行", "夜間の目視内飛行"], correctAnswer: 1, reference: "3.1.1 (3) a", explanation: "特定飛行（規制空域・方法）に該当しない飛行がカテゴリーⅠです [cite: 1606, 1607]。" },
  { id: 47, text: "登録記号の表示に使用すべき色の条件は？", options: ["好きな色でよい", "地色と鮮明に判別できる色", "透明"], correctAnswer: 1, reference: "3.1.2 (1) 4)", explanation: "識別を容易にするため、地色と判別しやすい色にする必要があります [cite: 1686]。" },
  { id: 48, text: "「ボルテックス・リング・ステート」を回避するための正しい降下方法は？", options: ["真下に急降下する", "水平移動を合わせながら降下する", "モーターを止める"], correctAnswer: 1, reference: "5.2.1 (1)", explanation: "自身の吹き下ろした気流を吸い込まないよう水平に逃げながら降下します [cite: 2371, 2381]。" },
  { id: 49, text: "無人航空機が衝突等の事故を起こした際に操縦者が負う法的責任は？", options: ["刑事責任", "民事責任", "上記すべて（行政処分含む）"], correctAnswer: 2, reference: "2.1.8", explanation: "過失致死傷等の刑事、賠償の民事、免許取消等の行政責任を負います [cite: 1494, 1500]。" },
  { id: 50, text: "教則第4版の施行日はいつか？", options: ["令和4年9月5日", "令和5年4月13日", "令和7年2月1日"], correctAnswer: 2, reference: "1", explanation: "令和7年2月1日に第4版が施行されました [cite: 1433, 1434]。" }
];
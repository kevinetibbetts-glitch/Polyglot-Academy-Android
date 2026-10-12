/* Polyglot Academy 5.7 — original alphabet, pronunciation and number foundations.
   Language-specific first steps. Existing sentence curriculum and saved progress unchanged. */
'use strict';
const FOUNDATION_UNITS={
ceb:[
 {id:'vowels',icon:'🔤',name:'The five vowel sounds',why:'Learn to read the letters before saying whole sentences. Cebuano is written in the Latin alphabet.',items:[
 ['A','a','Open A vowel (like a in father)','ako · I','Letters are easier with a real Cebuano word.','ako'],
 ['E','e','E vowel (often heard in loanwords)','eskwela · school','E is especially common in borrowed words.','eskwela'],
 ['I','i','I vowel (like ee in see)','ikaw · you','Keep the vowel short and clear.','ikaw'],
 ['O','o','O vowel (like o in go, without a big glide)','oras · time','Vowel quality can vary with speaker and dialect.','oras'],
 ['U','u','U vowel (like oo in food)','ulan · rain','Avoid making an English-style diphthong.','ulan'],
 ['NG','ng','NG consonant sound (as in singer)','ngalan · name','NG is one sound and can start a word.','ngalan'],
 ['K','k','K consonant sound','kamo · you (plural)','K is regularly pronounced as written.','kamo'],
 ['G','g','Hard G consonant (as in go)','gabii · night','Cebuano g is generally hard, not the j sound.','gabii'],
 ['Y','y','Y consonant glide (as in yes)','yuta · land','This is not the English letter-name pronunciation.','yuta'],
 ['W','w','W consonant glide','wala · none / not present','Hear it in the opening of wala.','wala']]},
 {id:'syllables',icon:'🎧',name:'Build syllables and stress',why:'Join individual sounds into short blocks. Cebuano stress matters and varies by word.',items:[
 ['ba','ba','B + A syllable','bata · child','Say the whole word; syllables are learning guides.','bata'],
 ['ka','ka','K + A syllable','kamo · you (plural)','Many Cebuano words are easy to divide into syllables.','kamo'],
 ['ma','ma','M + A syllable','maayo · good','Do not assume stress always falls on the first syllable.','maayo'],
 ['na','na','N + A syllable','naa · there is / have','Vowels in adjacent syllables may both be pronounced.','naa'],
 ['sa','sa','S + A syllable','salamat · thank you','Salamat is usually stressed on the middle syllable.','salamat'],
 ['ta','ta','T + A syllable','tawo · person','Words are often spoken smoothly across syllables.','tawo'],
 ['nga','nga','NG + A syllable','ngalan · name','Cebuano nga begins with the ng sound.','ngalan'],
 ['ang','ang','A + NG ending','ang · topic/marker','NG can also occur at the end of a syllable.','ang'],
 ['-ay','ay','AY vowel combination','balay · house','In balay, the final combination has a glide.','balay'],
 ['-aw','aw','AW vowel combination','adlaw · day / sun','Notice the ending glide in adlaw.','adlaw']]},
 {id:'numbers',icon:'🔢',name:'Count from one to ten',why:'Start with the native Cebuano numbers used for counting objects.',items:[
 ['usa','usa','One (1)','usa ka tawo · one person','A linker ka often joins a number to a noun.','usa'],
 ['duha','duha','Two (2)','duha ka tawo · two people','','duha'],
 ['tulo','tulo','Three (3)','tulo ka tawo · three people','','tulo'],
 ['upat','upat','Four (4)','upat ka tawo · four people','','upat'],
 ['lima','lima','Five (5)','lima ka tawo · five people','','lima'],
 ['unom','unom','Six (6)','unom ka tawo · six people','','unom'],
 ['pito','pito','Seven (7)','pito ka tawo · seven people','','pito'],
 ['walo','walo','Eight (8)','walo ka tawo · eight people','','walo'],
 ['siyam','siyam','Nine (9)','siyam ka tawo · nine people','','siyam'],
 ['napulo','napulo','Ten (10)','napulo ka tawo · ten people','Also written napu\'o in some materials.','napulo']]},
 {id:'teens',icon:'🧮',name:'Eleven, twenty and daily numbers',why:'Learn the traditional pattern, then recognize commonly spoken Spanish-derived numbers.',items:[
 ["napulo ug usa","napulo ug usa","Eleven (11), native form","onse · everyday Spanish-derived form","In natural speech, ug often contracts to -g.","napulo ug usa"],
 ["napulo ug duha","napulo ug duha","Twelve (12), native form","dose · commonly heard","Prices often use Spanish-derived counting.","napulo ug duha"],
 ["napulo ug tulo","napulo ug tulo","Thirteen (13), native form","trese · commonly heard","Native forms remain useful for understanding the structure.","napulo ug tulo"],
 ["napulo ug upat","napulo ug upat","Fourteen (14), native form","katorse · commonly heard","","napulo ug upat"],
 ["napulo ug lima","napulo ug lima","Fifteen (15), native form","kinse · commonly heard","","napulo ug lima"],
 ["napulo ug unom","napulo ug unom","Sixteen (16), native form","dise sais · Spanish-derived","","napulo ug unom"],
 ["napulo ug pito","napulo ug pito","Seventeen (17), native form","dise syete · Spanish-derived","","napulo ug pito"],
 ["napulo ug walo","napulo ug walo","Eighteen (18), native form","dise otso · Spanish-derived","","napulo ug walo"],
 ["napulo ug siyam","napulo ug siyam","Nineteen (19), native form","dise nuwebe · Spanish-derived","","napulo ug siyam"],
 ["kawhaan","kawhaan","Twenty (20), native form","baynte · very common in daily use","You'll often hear baynte, especially for prices.","kawhaan"],
 ["sero","sero","Zero (0), borrowed form","zero / sero","Wala means none, but sero is used for the numeral zero.","sero"]]},
 {id:'words',icon:'🧱',name:'Small words that build meaning',why:'Learn pronouns, markers and question words before putting them into sentences.',items:[
 ['ako','ako','I / me','ako · I / me','Pronouns often appear after the verb or predicate.','ako'],
 ['ikaw','ikaw','You (singular, focused form)','ikaw · you','Ka is another common form of you.','ikaw'],
 ['siya','siya','He / she (gender-neutral)','siya · he or she','Cebuano does not mark gender in this pronoun.','siya'],
 ['kita','kita','We, including the listener','kita · inclusive we','Distinct from kami, which excludes the listener.','kita'],
 ['kami','kami','We, excluding the listener','kami · exclusive we','','kami'],
 ['unsa','unsa','What?','Unsa ni? · What is this?','','unsa'],
 ['asa','asa','Where?','Asa ka? · Where are you?','','asa'],
 ['kinsa','kinsa','Who?','Kinsa siya? · Who is that person?','','kinsa'],
 ['ang','ang','Common noun/topic marker','ang bata · the child','A grammatical marker; not identical to English “the.”','ang'],
 ['sa','sa','Place/possessive/oblique marker','sa balay · at/to the house','The meaning changes with its grammatical use.','sa']]}],
ko:[
 {id:'vowels',icon:'🔤',name:'Hangul: basic vowels',why:'Korean uses Hangul. Learn the six basic vowel shapes first; the Roman letters are only reading guides.',items:[
 ['ㅏ','a','Vowel a','아 · a','A vertical stem with a short stroke on the right.','아'],
 ['ㅓ','eo','Vowel eo','어 · eo','There is no exact English vowel equivalent.','어'],
 ['ㅗ','o','Vowel o','오 · o','Short stroke points upward.','오'],
 ['ㅜ','u','Vowel u','우 · u','Short stroke points downward.','우'],
 ['ㅡ','eu','Vowel eu','으 · eu','Unrounded central vowel; do not say English “you.”','으'],
 ['ㅣ','i','Vowel i','이 · i','A straight upright line.','이'],
 ['ㅐ','ae','Vowel ae','애 · ae','In modern Korean often sounds close to ㅔ.','애'],
 ['ㅔ','e','Vowel e','에 · e','Often merges with ㅐ in modern pronunciation.','에'],
 ['ㅑ','ya','Vowel ya','야 · ya','Two short strokes signal y- here.','야'],
 ['ㅕ','yeo','Vowel yeo','여 · yeo','Contrast ㅕ with ㅓ.','여']]},
 {id:'consonants',icon:'🧩',name:'Hangul: first consonants',why:'Consonant sounds can change with syllable position. Start with clear examples.',items:[
 ['ㄱ','g/k','Consonant ㄱ (g/k)','가 · ga','Its sound depends on its position.','가'],
 ['ㄴ','n','Consonant ㄴ (n)','나 · na','','나'],
 ['ㄷ','d/t','Consonant ㄷ (d/t)','다 · da','','다'],
 ['ㄹ','r/l','Consonant ㄹ (r/l)','라 · ra','Often a flap between vowels, L-like at syllable end.','라'],
 ['ㅁ','m','Consonant ㅁ (m)','마 · ma','','마'],
 ['ㅂ','b/p','Consonant ㅂ (b/p)','바 · ba','','바'],
 ['ㅅ','s','Consonant ㅅ (s)','사 · sa','Before i-type vowels it can sound sh-like.','사'],
 ['ㅇ','silent / ng','Consonant ㅇ (silent at start)','아 · a','At the start it is silent; at the end it is ng.','아'],
 ['ㅈ','j','Consonant ㅈ (j)','자 · ja','','자'],
 ['ㅎ','h','Consonant ㅎ (h)','하 · ha','','하']]},
 {id:'blocks',icon:'🧱',name:'Read your first Hangul blocks',why:'Hangul letters form square syllable blocks, not simple left-to-right letter strings.',items:[
 ['가','ga','Syllable ga: ㄱ + ㅏ','가 · ga','Left + right vowel layout.','가'],
 ['나','na','Syllable na: ㄴ + ㅏ','나 · na','','나'],
 ['다','da','Syllable da: ㄷ + ㅏ','다 · da','','다'],
 ['마','ma','Syllable ma: ㅁ + ㅏ','마 · ma','','마'],
 ['고','go','Syllable go: ㄱ + ㅗ','고 · go','Horizontal vowels go beneath the consonant.','고'],
 ['구','gu','Syllable gu: ㄱ + ㅜ','구 · gu','','구'],
 ['한','han','Syllable han: ㅎ + ㅏ + ㄴ','한 · han','Final consonant sits beneath the other letters.','한'],
 ['국','guk','Syllable guk: ㄱ + ㅜ + ㄱ','국 · guk','The final consonant is called 받침 (batchim).','국'],
 ['사람','saram','Word meaning person','사람 · person','Two Hangul blocks form one word.','사람'],
 ['한국','hanguk','Word meaning Korea','한국 · Korea','Two blocks make Han-guk.','한국']]},
 {id:'sino',icon:'🔢',name:'Sino-Korean numbers',why:'Use these numbers for dates, money, minutes and phone numbers.',items:[
 ['영','yeong','Zero (0), general Sino-Korean','영 · zero','공 (gong) is also used, especially in phone numbers.','영'],
 ['일','il','One (1), Sino-Korean','일 · one','','일'],['이','i','Two (2), Sino-Korean','이 · two','','이'],
 ['삼','sam','Three (3), Sino-Korean','삼 · three','','삼'],['사','sa','Four (4), Sino-Korean','사 · four','','사'],
 ['오','o','Five (5), Sino-Korean','오 · five','','오'],['육','yuk','Six (6), Sino-Korean','육 · six','','육'],
 ['칠','chil','Seven (7), Sino-Korean','칠 · seven','','칠'],['팔','pal','Eight (8), Sino-Korean','팔 · eight','','팔'],
 ['구','gu','Nine (9), Sino-Korean','구 · nine','','구'],['십','sip','Ten (10), Sino-Korean','십 · ten','Eleven: 십일; twenty: 이십.','십']]},
 {id:'native',icon:'🧮',name:'Native Korean numbers',why:'Use these numbers for counting objects, people and hours. This system is different from Sino-Korean.',items:[
 ['하나','hana','One (1), native Korean','한 개 · one item','Before a counter: 하나 → 한.','하나'],
 ['둘','dul','Two (2), native Korean','두 개 · two items','Before a counter: 둘 → 두.','둘'],
 ['셋','set','Three (3), native Korean','세 개 · three items','Before a counter: 셋 → 세.','셋'],
 ['넷','net','Four (4), native Korean','네 개 · four items','Before a counter: 넷 → 네.','넷'],
 ['다섯','daseot','Five (5), native Korean','다섯 개 · five items','','다섯'],
 ['여섯','yeoseot','Six (6), native Korean','여섯 개 · six items','','여섯'],
 ['일곱','ilgop','Seven (7), native Korean','일곱 개 · seven items','','일곱'],
 ['여덟','yeodeol','Eight (8), native Korean','여덟 개 · eight items','Final spelling does not always match a letter-by-letter reading.','여덟'],
 ['아홉','ahop','Nine (9), native Korean','아홉 개 · nine items','','아홉'],
 ['열','yeol','Ten (10), native Korean','열 개 · ten items','','열'],
 ['스물','seumul','Twenty (20), native Korean','스무 개 · twenty items','Before a counter: 스물 → 스무.','스물']]},
 {id:'particles',icon:'🗣️',name:'Pronouns, particles and counters',why:'Korean often places the verb last. Small particles show what each word does.',items:[
 ['나','na','I / me (informal)','나 · I','저 (jeo) is a polite/humble I.','나'],
 ['저','jeo','I / me (polite or humble)','저 · I','Often better with people you do not know.','저'],
 ['우리','uri','We / our','우리 · we','','우리'],
 ['이것','igeot','This thing','이것 · this','Everyday spoken form: 이거.','이것'],
 ['은/는','eun/neun','Topic particle forms','저는 · as for me','The form depends on the preceding final sound.','저는'],
 ['이/가','i/ga','Subject particle forms','사람이 · the person (subject)','Often used to identify the subject.','사람이'],
 ['을/를','eul/reul','Object particle forms','물을 · water (object)','The form depends on final consonants.','물을'],
 ['에','e','Location / time / direction particle','학교에 · to/at school','Its meaning depends on context.','학교에'],
 ['개','gae','General counter for objects','한 개 · one item','The number comes before the counter.','한 개'],
 ['명','myeong','Counter for people','두 명 · two people','Native Korean numbers are usual with these counters.','두 명']]}],
zh:[
 {id:'finals',icon:'🔤',name:'Pinyin vowels and finals',why:'Pinyin spells Mandarin sounds with Latin letters. The letters do not always sound like English.',items:[
 ['a','a','Pinyin final a','妈 mā · mother','Open a vowel. Tones will be taught separately.','妈'],
 ['o','o','Pinyin final o','波 bō · wave','Not identical to the English letter name.','波'],
 ['e','e','Pinyin final e','饿 è · hungry','Vowel quality differs from English e.','饿'],
 ['i','i','Pinyin final i','一 yī · one','Sounds vary in syllables like zi, ci, si.','一'],
 ['u','u','Pinyin final u','五 wǔ · five','Rounded u vowel.','五'],
 ['ü','ü','Pinyin rounded-front ü','女 nǚ · woman','Round your lips while saying something like ee.','女'],
 ['ai','ai','Pinyin final ai','爱 ài · love','A vowel + glide, not separate letters.','爱'],
 ['ei','ei','Pinyin final ei','杯 bēi · cup','','杯'],
 ['ao','ao','Pinyin final ao','好 hǎo · good','','好'],
 ['ou','ou','Pinyin final ou','口 kǒu · mouth','','口'],
 ['an','an','Pinyin final an','三 sān · three','','三'],
 ['ang','ang','Pinyin final ang','忙 máng · busy','Ends with a velar ng sound.','忙'],
 ['eng','eng','Pinyin final eng','冷 lěng · cold','Contrast n and ng endings.','冷'],
 ['ong','ong','Pinyin final ong','中 zhōng · middle','Pronounced with a rounded vowel.','中']]},
 {id:'initials',icon:'🧩',name:'Pinyin initials',why:'Distinguish similar initials; aspiration and tongue placement matter more than English spelling.',items:[
 ['b','b','Unaspirated p-like initial (written b)','爸 bà · dad','Contrast b versus aspirated p.','爸'],
 ['p','p','Aspirated p-like initial (written p)','怕 pà · afraid','A burst of air distinguishes p from b.','怕'],
 ['m','m','Nasal m initial','妈 mā · mother','','妈'],
 ['f','f','F initial','发 fā · send/develop','','发'],
 ['d','d','Unaspirated t-like initial (written d)','大 dà · big','Contrast with aspirated t.','大'],
 ['t','t','Aspirated t-like initial','他 tā · he','A burst of air distinguishes it.','他'],
 ['n','n','Nasal n initial','你 nǐ · you','','你'],
 ['l','l','L initial','来 lái · come','','来'],
 ['g','g','Unaspirated k-like initial (written g)','哥 gē · older brother','Contrast g with aspirated k.','哥'],
 ['k','k','Aspirated k-like initial','看 kàn · look','','看'],
 ['h','h','H initial (a strong h/velar fricative)','好 hǎo · good','','好'],
 ['j','j','Pinyin j (not English j)','家 jiā · home','Tongue close to the hard palate.','家'],
 ['q','q','Pinyin q (aspirated, not English q)','去 qù · go','Contrast j and q.','去'],
 ['x','x','Pinyin x (not English x)','谢 xiè · thank','A light, front-of-mouth fricative.','谢']]},
 {id:'tones',icon:'🎵',name:'Four tones and the neutral tone',why:'Mandarin uses pitch contours to distinguish otherwise similar syllables.',items:[
 ['mā','mā','First tone: high and level','妈 mā · mother','Hold a steady high pitch.','妈'],
 ['má','má','Second tone: rising','麻 má · hemp','Pitch rises, not just louder.','麻'],
 ['mǎ','mǎ','Third tone: low/dipping','马 mǎ · horse','Often a low tone in connected speech; full dip in isolation.','马'],
 ['mà','mà','Fourth tone: falling','骂 mà · scold','Start high and drop.','骂'],
 ['ma','ma','Neutral tone: light and short','吗 ma · question particle','Neutral tone depends partly on the preceding tone.','吗'],
 ['nǐ','nǐ','Third tone on nǐ','你 nǐ · you','Third tones change when spoken together.','你'],
 ['hǎo','hǎo','Third tone on hǎo','好 hǎo · good','In nǐ hǎo, nǐ often rises due to tone sandhi.','好'],
 ['shì','shì','Fourth tone on shì','是 shì · to be','','是']]},
 {id:'numbers',icon:'🔢',name:'Numbers from zero to ten',why:'Read a Chinese character and its tone-marked Pinyin together.',items:[
 ['零','líng','Zero (0)','零 líng','Often appears in phone numbers.','零'],
 ['一','yī','One (1)','一 yī','The tone can change in connected speech.','一'],
 ['二','èr','Two (2)','二 èr','两 (liǎng) is used in many counting contexts.','二'],
 ['三','sān','Three (3)','三 sān','','三'],
 ['四','sì','Four (4)','四 sì','','四'],
 ['五','wǔ','Five (5)','五 wǔ','','五'],
 ['六','liù','Six (6)','六 liù','','六'],
 ['七','qī','Seven (7)','七 qī','','七'],
 ['八','bā','Eight (8)','八 bā','','八'],
 ['九','jiǔ','Nine (9)','九 jiǔ','','九'],
 ['十','shí','Ten (10)','十 shí','','十']]},
 {id:'teens',icon:'🧮',name:'Combine numbers to twenty',why:'Mandarin eleven is ten-one. Twenty is two-ten. Learn the regular pattern.',items:[
 ['十一','shí yī','Eleven (11)','十 + 一 · ten and one','','十一'],
 ['十二','shí èr','Twelve (12)','十 + 二','','十二'],
 ['十三','shí sān','Thirteen (13)','十 + 三','','十三'],
 ['十四','shí sì','Fourteen (14)','十 + 四','','十四'],
 ['十五','shí wǔ','Fifteen (15)','十 + 五','','十五'],
 ['十六','shí liù','Sixteen (16)','十 + 六','','十六'],
 ['十七','shí qī','Seventeen (17)','十 + 七','','十七'],
 ['十八','shí bā','Eighteen (18)','十 + 八','','十八'],
 ['十九','shí jiǔ','Nineteen (19)','十 + 九','','十九'],
 ['二十','èr shí','Twenty (20)','二 + 十 · two tens','','二十']]},
 {id:'words',icon:'🧱',name:'Pronouns, measure words and grammar',why:'Chinese sentences use a subject–verb–object pattern, but classifiers and particles need their own practice.',items:[
 ['我','wǒ','I / me','我 · I','','我'],
 ['你','nǐ','You (singular)','你 · you','','你'],
 ['他','tā','He / him','他 · he','','他'],
 ['她','tā','She / her','她 · she','He and she sound the same in Mandarin.','她'],
 ['我们','wǒmen','We / us','我们 · we','','我们'],
 ['这个','zhège','This one / this (with a classifier)','这个 · this one','个 is a very common measure word.','这个'],
 ['个','gè','Common measure word','一个 · one (item/person)','Classifiers appear when counting most nouns.','一个'],
 ['不','bù','Not / no','不是 · is not','The tone of 不 changes before many fourth tones.','不是'],
 ['吗','ma','Yes/no question particle','好吗? · Is it okay?','Light, neutral tone.','好吗'],
 ['是','shì','To be / yes (in some contexts)','我是 · I am','Not used for every English “is.”','是']]}],
ja:[
 {id:'vowels',icon:'🔤',name:'Hiragana: the five vowels',why:'Japanese begins with syllabic kana. Each kana represents a mora (timing unit).',items:[
 ['あ','a','Hiragana a','あさ asa · morning','Keep vowel sounds pure.','あさ'],
 ['い','i','Hiragana i','いえ ie · house','','いえ'],
 ['う','u','Hiragana u','うみ umi · sea','Often has less lip rounding than English oo.','うみ'],
 ['え','e','Hiragana e','えき eki · station','','えき'],
 ['お','o','Hiragana o','おと oto · sound','','おと'],
 ['ん','n','Hiragana nasal n mora','ほん hon · book','The nasal has its own timing beat.','ほん'],
 ['や','ya','Hiragana ya','やま yama · mountain','','やま'],
 ['ゆ','yu','Hiragana yu','ゆき yuki · snow','','ゆき'],
 ['よ','yo','Hiragana yo','よる yoru · night','','よる']]},
 {id:'rows',icon:'🧩',name:'Hiragana: key consonant rows',why:'Read the five basic vowels with consonants. Some syllables are irregular in Roman letters.',items:[
 ['か','ka','Hiragana ka','かさ kasa · umbrella','','かさ'],
 ['き','ki','Hiragana ki','き ki · tree','','き'],
 ['く','ku','Hiragana ku','くち kuchi · mouth','','くち'],
 ['け','ke','Hiragana ke','けさ kesa · this morning','','けさ'],
 ['こ','ko','Hiragana ko','こえ koe · voice','','こえ'],
 ['さ','sa','Hiragana sa','さかな sakana · fish','','さかな'],
 ['し','shi','Hiragana shi (not si)','しお shio · salt','','しお'],
 ['す','su','Hiragana su','すし sushi · sushi','','すし'],
 ['せ','se','Hiragana se','せかい sekai · world','','せかい'],
 ['そ','so','Hiragana so','そら sora · sky','','そら'],
 ['た','ta','Hiragana ta','たこ tako · octopus','','たこ'],
 ['ち','chi','Hiragana chi (not ti)','ちず chizu · map','','ちず'],
 ['つ','tsu','Hiragana tsu (not tu)','つき tsuki · moon','','つき'],
 ['て','te','Hiragana te','て te · hand','','て'],
 ['と','to','Hiragana to','とり tori · bird','','とり']]},
 {id:'katakana',icon:'📝',name:'Katakana: the other kana alphabet',why:'Katakana is used for many foreign words, names and sound effects. It matches Hiragana sound values.',items:[
 ['ア','a','Katakana a','アイス aisu · ice cream','Compare with Hiragana あ.','アイス'],
 ['イ','i','Katakana i','インク inku · ink','Compare with Hiragana い.','インク'],
 ['ウ','u','Katakana u','ウール ūru · wool','Compare with Hiragana う.','ウール'],
 ['エ','e','Katakana e','エア ea · air','Compare with Hiragana え.','エア'],
 ['オ','o','Katakana o','オレンジ orenji · orange','Compare with Hiragana お.','オレンジ'],
 ['カ','ka','Katakana ka','カメラ kamera · camera','','カメラ'],
 ['キ','ki','Katakana ki','キス kisu · kiss','','キス'],
 ['ク','ku','Katakana ku','クラス kurasu · class','','クラス'],
 ['ケ','ke','Katakana ke','ケーキ kēki · cake','ー marks a long vowel in Katakana.','ケーキ'],
 ['コ','ko','Katakana ko','コーヒー kōhī · coffee','','コーヒー']]},
 {id:'timing',icon:'🎵',name:'Long sounds and small kana',why:'A short and long sound can change the word. Japanese rhythm counts morae, not English-style syllables.',items:[
 ['おばさん','obasan','Aunt (short vowel)','おばさん · aunt','Contrast with おばあさん (grandmother).','おばさん'],
 ['おばあさん','obāsan','Grandmother (long a)','おばあさん · grandmother','Extra あ adds a timing beat.','おばあさん'],
 ['きて','kite','Come (imperative, from 来る)','きて · come','Contrast with きって (stamp).','きて'],
 ['きって','kitte','Postal stamp (small っ)','きって · stamp','Small っ doubles the following consonant timing.','きって'],
 ['がっこう','gakkō','School (small っ + long o)','がっこう · school','Notice the pause and vowel length.','がっこう'],
 ['ちょ','cho','Chi + small yo combination','ちょ · cho','Small ょ combines with the preceding kana.','ちょ'],
 ['しゃ','sha','Shi + small ya combination','しゃ · sha','Small ゃ is not the full-size や.','しゃ'],
 ['しゅ','shu','Shi + small yu combination','しゅ · shu','','しゅ'],
 ['コーヒー','kōhī','Coffee (long-vowel mark)','コーヒー · coffee','ー extends the preceding vowel.','コーヒー']]},
 {id:'numbers',icon:'🔢',name:'Count from zero to twenty',why:'Practice the common Japanese number readings and learn how tens combine.',items:[
 ['ゼロ','zero','Zero (0)','ゼロ · zero','零 (rei) is another reading used in some contexts.','ゼロ'],
 ['いち','ichi','One (1)','一 · いち','','いち'],
 ['に','ni','Two (2)','二 · に','','に'],
 ['さん','san','Three (3)','三 · さん','','さん'],
 ['よん','yon','Four (4)','四 · よん','し (shi) is another reading.','よん'],
 ['ご','go','Five (5)','五 · ご','','ご'],
 ['ろく','roku','Six (6)','六 · ろく','','ろく'],
 ['なな','nana','Seven (7)','七 · なな','しち (shichi) is another reading.','なな'],
 ['はち','hachi','Eight (8)','八 · はち','','はち'],
 ['きゅう','kyū','Nine (9)','九 · きゅう','く (ku) is another reading.','きゅう'],
 ['じゅう','jū','Ten (10)','十 · じゅう','','じゅう'],
 ['じゅういち','jūichi','Eleven (11)','十一 · じゅういち','Ten + one.','じゅういち'],
 ['にじゅう','nijū','Twenty (20)','二十 · にじゅう','Two tens.','にじゅう']]},
 {id:'words',icon:'🧱',name:'Basic words and particles',why:'Japanese generally places the verb last. Particles mark sentence roles.',items:[
 ['わたし','watashi','I / me','私 · I','Neutral/common beginner word for I.','わたし'],
 ['あなた','anata','You (context-sensitive)','あなた · you','Names/titles are often preferable to direct “you.”','あなた'],
 ['これ','kore','This (near speaker)','これ · this','','これ'],
 ['それ','sore','That (near listener)','それ · that','','それ'],
 ['あれ','are','That over there','あれ · that over there','','あれ'],
 ['は','wa (particle)','Topic particle, written は','わたしは · as for me','When used as a topic particle, は is pronounced wa.','わたしは'],
 ['が','ga','Subject/focus particle','ねこが · cat (subject)','Can introduce or emphasize the subject.','ねこが'],
 ['を','o (particle)','Object particle, written を','みずを · water (object)','Usually pronounced o, not wo, in modern Japanese.','みずを'],
 ['に','ni','Time/destination particle','がっこうに · to school','','がっこうに'],
 ['で','de','Action-location/tool particle','がっこうで · at school (action)','Distinguish に for destination from で for action location.','がっこうで']] }]
};

const foundationCounts=lang=>(FOUNDATION_UNITS[lang]||[]).reduce((n,u)=>n+u.items.length,0);
let foundationUnit=0,foundationIndex=0,foundationPhase='study',foundationAnswered=false,foundationLastCorrect=false;
function foundationData(lang=language){const d=lang===language?getData():(appData[lang]||(appData[lang]=loadData(lang)));if(!d.foundations||typeof d.foundations!=='object')d.foundations={};return d.foundations;}
function foundationCardId(u,i){return FOUNDATION_UNITS[language][u].id+'::'+i}
function foundationKnown(u,i){return (foundationData()[foundationCardId(u,i)]||{}).correct>0}
function foundationUnitProgress(u){const a=FOUNDATION_UNITS[language][u].items;return a.filter((_,i)=>foundationKnown(u,i)).length}
function foundationTotalKnown(){return FOUNDATION_UNITS[language].reduce((n,u,i)=>n+foundationUnitProgress(i),0)}
function foundationNext(){for(let u=0;u<FOUNDATION_UNITS[language].length;u++){if(foundationUnitProgress(u)<FOUNDATION_UNITS[language][u].items.length)return u}return -1}
function foundationReady(){return foundationNext()<0}
function foundationSound(text){const msg=$('foundationAudioStatus');if(msg)msg.textContent='Checking for audio…';if(window.Android?.playPhrase){Android.playPhrase(language,text)}else if(msg){msg.textContent='Audio playback needs the installed Android app.'}}
function foundationUseRecordingButtons(){for(const [id,fn] of [['foundationRecStart',beginRecording],['foundationRecStop',stopRecording],['foundationRecPlay',playSelf],['foundationRecClear',clearRecording]]){if($(id))$(id).onclick=fn}}
function foundationSyncRecording(){if($('foundationRecStart')){$('foundationRecStart').disabled=!!nativeRecording;$('foundationRecStart').textContent=nativeRecording?'🎙 Recording…':nativeRecorded?'🎙 Record Again':'🎙 Record Myself'}if($('foundationRecStop'))$('foundationRecStop').disabled=!nativeRecording;if($('foundationRecPlay'))$('foundationRecPlay').disabled=!nativeRecorded||nativeRecording}
function foundationQuizOptions(u,i){const rows=FOUNDATION_UNITS[language][u].items,correct=rows[i][0];let others=[...new Set(rows.map(x=>x[0]).filter(x=>x!==correct))];others.sort((a,b)=>hash(a+u+'::'+i)-hash(b+u+'::'+i));return [correct,...others.slice(0,3)].sort((a,b)=>hash(a+'quiz'+i)-hash(b+'quiz'+i))}
function foundationCurrent(){return FOUNDATION_UNITS[language][foundationUnit].items[foundationIndex]}
function renderFoundationChapters(){const units=FOUNDATION_UNITS[language],known=foundationTotalKnown(),total=foundationCounts(language),next=foundationNext();
 $('foundationHeading').textContent=names[language]+': the building blocks';
 $('foundationIntro').textContent=language==='ceb'?'Start with vowels, syllables and counting. Only then move on to Cebuano conversation.':language==='ko'?'Read Hangul, build syllable blocks and learn BOTH number systems before sentences.':language==='zh'?'Learn Pinyin spelling, sound contrasts and Mandarin tones before sentences.':'Learn Hiragana, Katakana and Japanese sound timing before sentences.';
 $('foundationStats').textContent=known+' / '+total+' foundation cards mastered';
 $('foundationBar').style.width=(100*known/Math.max(1,total))+'%';
 $('foundationChapters').innerHTML=units.map((c,i)=>{const done=foundationUnitProgress(i);return `<button type="button" class="funit ${done===c.items.length?'mastered':''}" data-funit="${i}"><span class="funit-ico">${safe(c.icon)}</span><span class="funit-info"><strong>${i+1}. ${safe(c.name)}</strong><small>${safe(c.why)}</small><span class="funit-meter"><span style="width:${100*done/c.items.length}%"></span></span></span><span class="funit-count">${done}/${c.items.length}${i===next?' ⭐':''}</span></button>`}).join('');
 document.querySelectorAll('[data-funit]').forEach(b=>b.onclick=()=>startFoundationUnit(Number(b.dataset.funit)));
 $('foundationGoSentences').onclick=()=>setView('home');
}
function startFoundationUnit(u){if(!FOUNDATION_UNITS[language]?.[u])return;clearRecording();stopAudio();foundationUnit=u;foundationIndex=0;foundationPhase='study';foundationAnswered=false;setView('foundationlesson');renderFoundationCard()}
function foundationExit(){clearRecording();stopAudio();setView('foundations')}
function foundationNextCard(){clearRecording();stopAudio();foundationIndex++;foundationPhase='study';foundationAnswered=false;const len=FOUNDATION_UNITS[language][foundationUnit].items.length;if(foundationIndex>=len){setView('foundations');return}renderFoundationCard()}
function foundationCheckAnswer(answer){if(foundationPhase!=='quiz'||foundationAnswered)return;const card=foundationCurrent(),yes=answer===card[0];foundationAnswered=true;foundationLastCorrect=yes;
 const id=foundationCardId(foundationUnit,foundationIndex),d=foundationData(),r=d[id]||{seen:0,correct:0,wrong:0};r.seen++;if(yes)r.correct++;else r.wrong++;d[id]=r;saveData();foundationPhase='result';renderFoundationCard();
}
function renderFoundationCard(){const chapter=FOUNDATION_UNITS[language][foundationUnit],card=foundationCurrent();if(!card)return;const [target,reading,meaning,example,note,spoken]=card;
 $('foundationUnitLabel').textContent=chapter.name;
 $('foundationPosition').textContent='Card '+(foundationIndex+1)+' of '+chapter.items.length;
 $('foundationLessonBar').style.width=(100*foundationIndex/chapter.items.length)+'%';
 $('foundationCardHeading').textContent=foundationPhase==='study'?'Learn the building block':foundationPhase==='quiz'?'Check your understanding':foundationLastCorrect?'Excellent — remembered!':'Keep going — now you know';
 $('foundationCard').classList.toggle('fquiz',foundationPhase!=='study');
 $('foundationCharacter').textContent=foundationPhase==='quiz'?'?':target;
 $('foundationReading').textContent=foundationPhase==='study'?reading:'';
 $('foundationMeaning').textContent=foundationPhase==='study'?meaning:foundationPhase==='quiz'?meaning:('Correct: '+target+' · '+reading);
 $('foundationExample').textContent=foundationPhase==='study'?example:'';
 $('foundationNote').textContent=foundationPhase==='study'?note:foundationPhase==='result'?(foundationLastCorrect?'Mastered — you can replay this unit any time.':'The correct answer is '+target+'. Revisit this card whenever you want.'):'Choose the matching sound, symbol or word below.';
 const opts=$('foundationQuizOptions');opts.innerHTML='';
 if(foundationPhase==='quiz'){
  opts.innerHTML=foundationQuizOptions(foundationUnit,foundationIndex).map((s,i)=>`<button type="button" class="fchoice" data-fanswer="${i}">${safe(s)}</button>`).join('');
  const answerList=foundationQuizOptions(foundationUnit,foundationIndex);
  opts.querySelectorAll('[data-fanswer]').forEach(btn=>btn.onclick=()=>foundationCheckAnswer(answerList[Number(btn.dataset.fanswer)]));
 }else if(foundationPhase==='result'){
  opts.innerHTML=`<div class="foundation-feedback ${foundationLastCorrect?'right':'wrong'}">${foundationLastCorrect?'✓ Correct!':'Not yet — '+safe(target)+' is the answer.'}</div>`;
 }
 const btn=$('foundationAdvance');btn.textContent=foundationPhase==='study'?'Quiz me →':foundationPhase==='quiz'?'Show the answer →':'Next card →';
 btn.onclick=()=>{
  if(foundationPhase==='study'){clearRecording();foundationPhase='quiz';renderFoundationCard()}
  else if(foundationPhase==='quiz'){foundationCheckAnswer('')}
  else foundationNextCard();
 };
 $('foundationListen').onclick=()=>foundationSound(spoken||target);
 $('foundationAudioStatus').textContent=language==='ceb'?'Cebuano requires an available human recording. Missing audio is not a pronunciation model.':'Listen uses a matching recording or an Android installed speech voice; individual sound accuracy is not certified.';
 $('foundationRecordStatus').textContent='Say the item aloud; Stop, then Hear Myself.';
 foundationUseRecordingButtons();foundationSyncRecording();
}
function foundationInstallUI(){
 if($('view-foundations'))return;
 const css=document.createElement('style');css.textContent=`
 .foundation-callout{background:linear-gradient(130deg,#eff8ff,#f8f1ff);border:2px solid #cbdcf8;border-radius:18px;padding:19px;margin:15px 0;display:grid;gap:9px}
 .foundation-callout h3{margin:0;font-size:20px}.foundation-callout p{margin:0;font-size:14px;color:#506379}.foundation-callout .btn{justify-self:start}
 .foundation-courses{display:grid;gap:12px;margin-top:19px}.funit{display:flex;align-items:center;gap:12px;width:100%;text-align:left;background:#fff;border:2px solid #e0e7f2;border-radius:17px;padding:15px;color:#233856}.funit:hover{border-color:#9b7be4;background:#faf7ff}
 .funit.mastered{border-color:#9ad4b3;background:#f4fff8}.funit-ico{font-size:30px;width:40px;text-align:center}.funit-info{display:grid;gap:5px;flex:1;min-width:0}.funit-info strong{font-size:16px}.funit-info small{font-size:12px;color:#627084;line-height:1.4}.funit-meter{height:7px;border-radius:9px;background:#e7edf6;overflow:hidden;margin-top:4px}.funit-meter span{display:block;background:linear-gradient(90deg,#38beaa,#7267e3);height:100%}.funit-count{font-size:13px;font-weight:700;white-space:nowrap}
 .foundation-card{padding:27px 14px;text-align:center;border:2px solid #e2d5ff;border-radius:22px;background:linear-gradient(140deg,#f9f5ff,#f2f9ff);margin:15px 0}.foundation-char{font-size:clamp(45px,10vw,88px);line-height:1.25;font-weight:750;word-break:break-word;color:#4933a0}.foundation-read{font-size:23px;color:#137c92;font-weight:750}.foundation-meaning{font-size:18px;font-weight:740;color:#283c56;margin-top:12px}.foundation-example{color:#566b83;font-size:15px;margin-top:8px}.foundation-note{color:#596b7b;font-size:13px;line-height:1.5;margin:8px 0}.foundation-choices{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.fchoice{padding:18px 11px;border:2px solid #d7deef;border-radius:12px;background:white;font-size:21px;font-weight:720;color:#2e3e59;word-break:break-word;min-height:65px}.fchoice:active{background:#ebf6ff}.foundation-feedback{padding:16px;border-radius:12px;text-align:center;font-weight:800}.foundation-feedback.right{background:#dcf8e5;color:#1a6b46}.foundation-feedback.wrong{background:#fff2dc;color:#835319}.foundation-audio{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0}.foundation-audio .btn{flex:1;min-width:110px}.foundation-back{margin-bottom:8px}.foundation-card.fquiz .foundation-char{font-size:55px;color:#786cc0}
 @media(max-width:480px){.foundation-choices{grid-template-columns:repeat(2,minmax(0,1fr))}.funit{padding:11px}.foundation-char{font-size:44px}.foundation-audio .btn{font-size:13px;padding:9px 7px}}
 `;document.head.appendChild(css);
 const nav=document.querySelector('.menu');nav.insertAdjacentHTML('afterbegin','<button class="nav" data-view="foundations">🔤 Foundations</button>');
 const layout=document.querySelector('.main');layout.querySelector('footer.credit').insertAdjacentHTML('beforebegin',`<section class="section" id="view-foundations"><div class="panel"><button class="btn foundation-back" id="foundationGoSentences">← Sentence learning path</button><div class="eyebrow">Step 1 · Before conversations</div><h2 id="foundationHeading">Learn the building blocks</h2><p class="quiet" id="foundationIntro"></p><div class="progress"><div class="fill" id="foundationBar"></div></div><p class="small quiet" id="foundationStats"></p><div class="foundation-courses" id="foundationChapters"></div><p class="small quiet">Every unit is open. Your earlier sentence progress remains untouched.</p></div></section>
 <section class="section" id="view-foundationlesson"><div class="panel"><button class="btn foundation-back" id="foundationExit">← Building blocks</button><span class="badge" id="foundationUnitLabel"></span><div class="row between" style="margin:12px 0"><span class="small quiet" id="foundationPosition"></span><span class="pill">No hearts · No paywall</span></div><div class="progress"><div class="fill" id="foundationLessonBar"></div></div><h3 id="foundationCardHeading" style="margin-top:21px"></h3><div class="foundation-card" id="foundationCard"><div id="foundationCharacter" class="foundation-char"></div><div id="foundationReading" class="foundation-read"></div><div id="foundationMeaning" class="foundation-meaning"></div><div id="foundationExample" class="foundation-example"></div></div><p class="foundation-note" id="foundationNote"></p><div id="foundationQuizOptions" class="foundation-choices"></div><div class="foundation-audio"><button type="button" class="btn secondary" id="foundationListen">▶ Listen</button><button type="button" class="btn primary" id="foundationRecStart">🎙 Record Myself</button><button type="button" class="btn" id="foundationRecStop">■ Stop</button><button type="button" class="btn" id="foundationRecPlay">▶ Hear Myself</button><button type="button" class="btn" id="foundationRecClear">✕ Clear</button></div><p id="foundationAudioStatus" class="small quiet" aria-live="polite"></p><p id="foundationRecordStatus" class="small quiet" aria-live="polite"></p><button class="btn primary wide" id="foundationAdvance">Next →</button><p class="small quiet" style="margin-top:12px">Audio is for practice. An unreviewed recording or synthetic voice is not proof of native pronunciation.</p></div></section>`);
 const hero=$('view-home').querySelector('.hero');hero.insertAdjacentHTML('afterend',`<div class="foundation-callout"><span class="eyebrow">Start here — Stage 1</span><h3>🔤 Sounds and numbers before sentences</h3><p id="foundationHomeSummary">Learn the alphabet or script, vowels, basic sounds, and counting first.</p><button class="btn primary" id="foundationHomeGo">Start with the building blocks →</button></div>`);
 document.querySelectorAll('[data-view="foundations"]').forEach(b=>b.onclick=()=>setView('foundations'));
 $('foundationHomeGo').onclick=()=>setView('foundations');
 $('foundationExit').onclick=foundationExit;
}
foundationInstallUI();
const _originalFoundationRenderHome=renderHome;
renderHome=function(){_originalFoundationRenderHome();
 const done=foundationTotalKnown(),count=foundationCounts(language),next=foundationNext();
 $('foundationHomeSummary').textContent=done+'/'+count+' building blocks mastered. '+(next<0?'Well done. You can now focus on sentence lessons.':'Recommended: '+FOUNDATION_UNITS[language][next].name+'.');
 $('foundationHomeGo').textContent=next<0?'Review my foundations →':'Learn the foundations first →';
 if(next>=0){$('startNext').textContent='Begin foundations →';$('startNext').onclick=()=>startFoundationUnit(next);$('heroDesc').textContent='First learn the sounds, scripts and numbers. Then the sentences will make more sense.'}
};
const _originalFoundationSetView=setView;
setView=function(v){_originalFoundationSetView(v);if(v==='foundations')renderFoundationChapters();if(v==='foundationlesson')renderFoundationCard()};
const _originalFoundationChangeLanguage=changeLanguage;
changeLanguage=function(l){_originalFoundationChangeLanguage(l);if(view==='foundations'){renderFoundationChapters()}else if(view==='foundationlesson'){setView('foundations')}renderHome()};
const _originalFoundationAudio=window.onAudioMessage;
window.onAudioMessage=function(text){if(typeof _originalFoundationAudio==='function')_originalFoundationAudio(text);if($('foundationAudioStatus'))$('foundationAudioStatus').textContent=text};
const _originalFoundationRecording=window.onRecordingMessage;
window.onRecordingMessage=function(text){if(typeof _originalFoundationRecording==='function')_originalFoundationRecording(text);if($('foundationRecordStatus'))$('foundationRecordStatus').textContent=text};
const _originalFoundationRecordingChanged=window.onRecordingChanged;
window.onRecordingChanged=function(on){if(typeof _originalFoundationRecordingChanged==='function')_originalFoundationRecordingChanged(on);foundationSyncRecording()};
const _originalFoundationRecordingSaved=window.onRecordingSaved;
window.onRecordingSaved=function(ok){if(typeof _originalFoundationRecordingSaved==='function')_originalFoundationRecordingSaved(ok);foundationSyncRecording()};
const _originalFoundationRecordClear=clearRecording;
clearRecording=function(){_originalFoundationRecordClear();foundationSyncRecording()};
renderHome();

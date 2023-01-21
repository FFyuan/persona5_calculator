interface TranslationMap {
    [index: string]: string;
}

const translationMap: TranslationMap = {
    // arcana
    'Fool': '愚者',
    "Magician": '魔术师',
    "Priestess": '女教皇',
    "Empress": '女帝',
    "Emperor": '皇帝',
    "Hierophant": '教皇',
    "Lovers": '恋爱',
    "Chariot": '战车',
    "Justice": '正义',
    "Hermit": '隐者',
    "Fortune": '命运',
    "Strength": '力量',
    "Hanged": '吊死者',
    "Death": '死神',
    "Temperance": '节制',
    "Devil": '恶魔',
    "Tower": '塔',
    "Star": '星星',
    "Moon": '月亮',
    "Sun": '太阳',
    "Judgement": '审判',
    "Faith": '信念',
    "Councillor": '顾问官',
    "World": '世界',
    // Persona
    //Judgement
    'Anubis':                          '阿努比斯',
    'Trumpeter':                       '吹号者',
    'Yamata-no-Orochi':                '八岐大蛇',
    'Abaddon':                         '阿巴顿',
    'Messiah':                         '弥赛亚',
    'Shiva':                           '希瓦',
    'Michael':                         '米迦勒',
    'Messiah Picaro':                  '弥赛亚・贼神',
    'Satan':                           '撒旦',
    //Chariot
    'Agathion':                        '阿珈希翁',
    'Slime':                           '软泥怪',
    'Shiki-Ouji':                      '式王子',
    'Kin-Ki':                          '金鬼',
    'Ara Mitama':                      '荒魂',
    'White Rider':                     '白骑士',
    'Athena':                          '雅典娜',
    'Athena Picaro':                   '雅典娜・贼神',
    'Cerberus':                        '刻耳柏洛斯',
    'Thor':                            '托尔',
    'Chi You':                         '蚩尤',
    //Death
    'Mandrake':                        '曼陀罗',
    'Mokoi':                           '恶灵',
    'Matador':                         '斗牛士',
    'Nue':                             '鵺',
    'Pisaca':                          '毕舍遮',
    'Hell Biker':                      '地狱天使',
    'Hope Diamond':                    '希望钻石',
    'Pale Rider':                      '苍白骑士',
    'Chernobog':                       '切尔诺伯格',
    'Thanatos':                        '塔纳托斯',
    'Thanatos Picaro':                 '塔纳托斯・贼神',
    'Mot':                             '莫特',
    'Alice':                           '爱丽丝',
    //Empress
    'Queen\'s Necklace':               '女王的首饰',
    'Yaksini':                         '母夜叉',
    'Lamia':                           '拉弥亚',
    'Hariti':                          '诃梨帝母',
    'Dakini':                          '荼枳尼',
    'Titania':                         '蒂坦妮亚',
    'Kali':                            '迦梨',
    'Alilat':                          '阿勒特',
    'Mother Harlot':                   '巴比伦大淫妇',
    //Lovers
    'Pixie':                           '皮克西',
    'Saki Mitama':                     '幸魂',
    'Ame-no-Uzume':                    '天钿女命',
    'Leanan Sidhe':                    '菈南希',
    'Kushinada':                       '奇稻田姬',
    'Narcissus':                       '纳西瑟斯',
    'Parvati':                         '帕尔瓦蒂',
    'Raphael':                         '拉斐尔',
    'Ishtar':                          '伊丝塔',
    //Councillor
    'Kushi Mitama':                    '奇魂',
    'Nigi Mitama':                     '和魂',
    'Decarabia':                       '单卡拉比',
    'Ananta':                          '阿难陀',
    'Yatagarasu':                      '八咫乌',
    'Seiryu':                          '青龙',
    'Dionysus':                        '狄俄尼索斯',
    'Vohu Manah':                      '沃夫・玛那',
    //Devil
    'Incubus':                         '男梦魔',
    'Flauros':                         '佛劳洛斯',
    'Andras':                          '安德拉斯',
    'Lilim':                           '莉莉姆',
    'Pazuzu':                          '帕祖祖',
    'Baphomet':                        '巴风特',
    'Nebiros':                         '奈比洛斯',
    'Belial':                          '贝利亚',
    'Beelzebub':                       '别西卜',
    //Justice
    'Angel':                           '天使',
    'Archangel':                       '大天使',
    'Principality':                    '权天使',
    'Power':                           '能天使',
    'Melchizedek':                     '默基瑟德',
    'Dominion':                        '主天使',
    'Throne':                          '座天使',
    'Uriel':                           '乌列',
    'Metatron':                        '梅塔隆',
    //Hierophant
    'Berith':                          '比列',
    'Orobas':                          '欧若博斯',
    'Anzu':                            '安兹',
    'Daisoujou':                       '大僧正',
    'Mishaguji':                       '洩矢大人',
    'Bishamonten':                     '毘沙门天',
    'Kohryu':                          '黄龙',
    //Priestess
    'Silky':                           '希路奇',
    'Apsaras':                         '飞天',
    'Koh-i-Noor':                      '柯・伊・诺尔',
    'Isis':                            '伊西丝',
    'Kikuri-Hime':                     '菊理媛',
    'Sarasvati':                       '妙音天女',
    'Skadi':                           '丝卡蒂',
    'Scathach':                        '斯卡哈',
    'Cybele':                          '西布莉',
    //Hermit
    'Bicorn':                          '双角兽',
    'Koropokkuru':                     '克鲁波克鲁',
    'Ippon-Datara':                    '一本踏鞴',
    'Sudama':                          '山灵',
    'Naga':                            '娜迦',
    'Kurama Tengu':                    '鞍马天狗',
    'Arahabaki':                       '荒霸吐',
    'Kumbhanda':                       '鸠槃荼',
    'Koumokuten':                      '广目天',
    'Loa':                             '罗亚',
    'Fafnir':                          '法夫那',
    'Ongyo-Ki':                        '隐形鬼',
    //Temperance
    'Genbu':                           '玄武',
    'Koppa Tengu':                     '木叶天狗',
    'Makami':                          '真神',
    'Jikokuten':                       '持国天',
    'Mithra':                          '密特拉',
    'Byakko':                          '白虎',
    'Raja Naga':                       '蛇龙王',
    'Gabriel':                         '加百列',
    'Ardha':                           '阿尔达',
    //Fool
    'Arsene':                          '亚森',
    'Obariyon':                        '背负怪',
    'Orpheus F':                       '俄耳甫斯(f)',
    'Orpheus F Picaro':                '俄耳甫斯・贼神(f)',
    'High Pixie':                      '高等皮克西',
    'Izanagi':                         '伊邪那岐',
    'Izanagi Picaro':                  '伊邪那岐・贼神',
    'Orpheus':                         '俄耳甫斯',
    'Orpheus Picaro':                  '俄耳甫斯・贼神',
    'Legion':                          '恶灵军团',
    'Ose':                             '欧赛',
    'Bugs':                            '水晶骷髅',
    'Crystal Skull':                   '巴古斯',
    'Black Frost':                     '邪恶霜精',
    'Raoul':                           '劳尔',
    'Vishnu':                          '毗湿奴',
    'Satanael':                        '撒旦耶尔',
    //Sun
    'Suzaku':                          '朱雀',
    'Thunderbird':                     '雷鸟',
    'Mithras':                         '米特拉斯',
    'Yurlungur':                       '虹蛇',
    'Horus':                           '荷鲁斯',
    'Ganesha':                         '象头神',
    'Quetzalcoatl':                    '羽蛇神',
    'Asura':                           '阿修罗王',
    //Faith
    'Phoenix':                         '凤凰',
    'Tam Lin':                         '塔姆林',
    'Unicorn':                         '独角兽',
    'Okuninushi':                      '大国主',
    'Orichalcum':                      '奥里哈刚',
    'Atavaka':                         '大元帅明王',
    'Cu Chulainn':                     '库夫林',
    'Siegfried':                       '齐格飞',
    'Maria':                           '玛丽亚',
    //Fortune
    'Stone of Scone':                  '命运之石',
    'Clotho':                          '克罗索',
    'Ariadne':                         '阿里亚德涅',
    'Lachesis':                        '拉刻西斯',
    'Atropos':                         '阿特罗波斯',
    'Ariadne Picaro':                  '阿里亚德涅・贼神',
    'Fortuna':                         '福图纳',
    'Norn':                            '诺伦',
    'Asterius':                        '亚斯泰利欧斯',
    'Asterius Picaro':                 '亚斯泰利欧斯・贼神',
    'Lakshmi':                         '吉祥天',
    //Hanged
    'Hua Po':                          '花魄',
    'Inugami':                         '犬神',
    'Orthrus':                         '欧特鲁斯',
    'Take-Minakata':                   '建御名方',
    'Emperor\'s Amulet':               '大帝的护符',
    'Hecatoncheires':                  '百臂巨人',
    'Jatayu':                          '佳塔由',
    'Moloch':                          '摩洛克',
    'Macabre':                         '马喀布尔',
    'Attis':                           '阿提斯',
    //Emperor
    'Regent':                          '摄政王',
    'Eligor':                          '埃里格',
    'Setanta':                         '瑟坦特',
    'Thoth':                           '图特',
    'Barong':                          '巴隆',
    'King Frost':                      '霜精国王',
    'Oberon':                          '奥伯隆',
    'Baal':                            '巴尔',
    'Odin':                            '奥丁',
    //Tower
    'Belphegor':                       '贝尔菲戈',
    'Red Rider':                       '红骑士',
    'Magatsu-Izanagi':                 '祸津伊邪那岐',
    'Magatsu-Izanagi Picaro':          '祸津伊邪那岐・贼神',
    'Seth':                            '塞特',
    'Black Rider':                     '黑骑士',
    'Mara':                            '摩罗',
    'Yoshitsune':                      '义经',
    'Mada':                            '摩陀',
    //Moon
    'Succubus':                        '女梦魔',
    'Onmoraki':                        '阴摩罗鬼',
    'Kaguya':                          '辉夜',
    'Black Ooze':                      '黑软泥怪',
    'Sui-Ki':                          '水鬼',
    'Kaguya Picaro':                   '辉夜・贼神',
    'Mothman':                         '天蛾人',
    'Girimehkala':                     '基力梅卡拉',
    'Tsukiyomi':                       '月读',
    'Tsukiyomi Picaro':                '月读・贼神',
    'Lilith':                          '莉莉丝',
    'Byakhee':                         '拜亚基',
    'Sandalphon':                      '圣达芬',
    //Magician
    'Jack-o\'-Lantern':                '杰克灯笼',
    'Cait Sith':                       '猫妖精',
    'Jack Frost':                      '杰克霜精',
    'Nekomata':                        '猫怪',
    'Sandman':                         '睡魔',
    'Choronzon':                       '克伦佐',
    'Queen Mab':                       '梅芙女王',
    'Rangda':                          '兰达',
    'Forneus':                         '佛纽斯',
    'Surt':                            '苏尔特',
    'Futsunushi':                      '经津主神',
    //Strength
    'Kelpie':                          '凯尔皮',
    'Shiisaa':                         '狮爷',
    'Oni':                             '鬼',
    'Rakshasa':                        '拉克夏',
    'Orlov':                           '欧鲁罗芙',
    'Zouchouten':                      '增长天',
    'Valkyrie':                        '瓦尔基里',
    'Hanuman':                         '哈努曼',
    'Chimera':                         '基美拉',
    'Zaou-Gongen':                     '藏王权现',
    //Star
    'Kodama':                          '木灵',
    'Fuu-Ki':                          '风鬼',
    'Neko Shogun':                     '猫将军',
    'Kaiwan':                          '迦温',
    'Garuda':                          '迦楼罗',
    'Vasuki':                          '婆苏吉',
    'Sraosha':                         '斯拉欧加',
    'Hastur':                          '哈斯塔',
    'Lucifer':                         '路西法',
    //World
    'Izanagi-no-Okami':                '伊邪那岐大神',
    'Izanagi-no-Okami Picaro':         '伊邪那岐大神・贼神',
};


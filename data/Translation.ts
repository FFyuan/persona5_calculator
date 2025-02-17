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

    // Skills
    // passive
'Absorb Bless':                    '祝福吸收',
'Absorb Curse':                    '咒怨吸收',
'Absorb Elec':                     '电击吸收',
'Absorb Fire':                     '火焰吸收',
'Absorb Ice':                      '冰冻吸收',
'Absorb Nuke':                     '核热吸收',
'Absorb Phys':                     '物理吸收',
'Absorb Psy':                      '念动吸收',
'Absorb Wind':                     '疾风吸收',
'Active Support':                  '',
'Adverse Resolve':                 '',
'Ailment Boost':                   '',
'Ali Dance':                       '',
'All-out Attack Boost':            '',
'Almighty Amp':                    '',
'Almighty Boost':                  '',
'Ambient Aid':                     '',
'Analysis':                        '',
'Angelic Grace':                   '',
'Apt Pupil':                       '',
'Arms Master':                     '',
'Attack Master':                   '',
'Auto-Maraku':                     '自动玛哈拉库卡',
'Auto-Masuku':                     '自动玛哈斯库卡',
'Auto-Mataru':                     '自动玛哈塔尔卡',
'Bless Amp':                       '高级祝福强化',
'Bless Boost':                     '祝福强化',
'Brainwash Boost':                 '洗脑机率UP',
'Burn Boost':                      '燃烧机率UP',
'Climate Decorum':                 '雨歌',
'Confuse Boost':                   '混乱机率UP',
'Counter':                         '反击',
'Counterstrike':                   '重反击',
'Curse Amp':                       '高级咒怨强化',
'Curse Boost':                     '咒怨强化',
'Defense Master':                  '防御诀窍',
'Despair Boost':                   '绝望机率UP',
'Divine Grace':                    '诸神庇佑',
'Dizzy Boost':                     '晕眩机率UP',
'Dodge Bless':                     '祝福识破',
'Dodge Curse':                     '咒怨识破',
'Dodge Elec':                      '电击识破',
'Dodge Fire':                      '火焰识破',
'Dodge Ice':                       '冰冻识破',
'Dodge Nuke':                      '核热识破',
'Dodge Phys':                      '物理识破',
'Dodge Psy':                       '念动识破',
'Dodge Wind':                      '疾风识破',
'Elec Amp':                        '高级电击强化',
'Elec Boost':                      '电击强化',
'Emergency Shift':                 '',
'Endure':                          '强忍',
'Enduring Soul':                   '不屈斗志',
'Evade Bless':                     '极・祝福识破',
'Evade Curse':                     '极・咒怨识破',
'Evade Elec':                      '极・电击识破',
'Evade Fire':                      '极・火焰识破',
'Evade Ice':                       '极・冰冻识破',
'Evade Nuke':                      '极・核热识破',
'Evade Phys':                      '极・物理识破',
'Evade Psy':                       '极・念动识破',
'Evade Wind':                      '极・疾风识破',
'EXP Boost':                       '',
'Fast Heal':                       '急速恢复',
'Fear Boost':                      '恐惧机率UP',
'Final Guard':                     '',
'Fire Amp':                        '高级火焰强化',
'Fire Boost':                      '火焰强化',
'Firm Stance':                     '不动如山',
'Forget Boost':                    '精神耐性遗忘机率UP',
'Fortified Moxy':                  '',
'Fortify Spirit':                  '',
'Freeze Boost':                    '冻结机率UP',
'Great Aim':                       '',
'Growth 1':                        '初级成长',
'Growth 2':                        '中级成长',
'Growth 3':                        '高级成长',
'Gun Amp':                         '高级枪击强化',
'Gun Boost':                       '枪击强化',
'Hama Boost':                      '哈玛成功率UP',
'Heat Up':                         '亢奋',
'High Counter':                    '高压电流',
'Holy Embrace':                    '',
'Holy Whisper':                    '',
'Ice Amp':                         '高级冰冻强化',
'Ice Boost':                       '冰冻强化',
'Insta-Heal':                      '瞬间恢复',
'Invigorate 1':                    '小气功',
'Invigorate 2':                    '中气功',
'Invigorate 3':                    '大气功',
'Kuzunoha\'s Order':               '',
'Last Stand':                      '背水一战',
'Life Aid':                        '',
'Life Boost':                      '',
'Magic Ability':                   '魔导才能',
'Mementos Scan':                   '',
'Money Boost':                     '',
'Moral Support':                   '',
'Mudo Boost':                      '',
'Nuke Amp':                        '高级核热强化',
'Nuke Boost':                      '核热强化',
'Null Bless':                      '祝福无效',
'Null Brainwash':                  '洗脑无效',
'Null Burn':                       '混乱无效',
'Null Confuse':                    '咒怨无效',
'Null Curse':                      '',
'Null Despair':                    '',
'Null Dizzy':                      '晕眩无效',
'Null Elec':                       '电击无效',
'Null Fear':                       '',
'Null Fire':                       '火焰无效',
'Null Forget':                     '遗忘无效',
'Null Freeze':                     '冰冻无效',
'Null Hunger':                     '',
'Null Ice':                        '',
'Null Mortal':                     '',
'Null Nuke':                       '核热无效',
'Null Phys':                       '物理无效',
'Null Psy':                        '念动无效',
'Null Rage':                       '狂怒无效',
'Null Shock':                      '',
'Null Sleep':                      '睡眠无效',
'Null Wind':                       '疾风无效',
'Position Hack':                   '',
'Psy Amp':                         '',
'Psy Boost':                       '',
'Rage Boost':                      '',
'Regenerate 1':                    '',
'Regenerate 2':                    '',
'Regenerate 3':                    '',
'Repel Bless':                     '',
'Repel Curse':                     '',
'Repel Elec':                      '',
'Repel Fire':                      '',
'Repel Ice':                       '',
'Repel Nuke':                      '',
'Repel Phys':                      '',
'Repel Psy':                       '',
'Repel Wind':                      '',
'Resist Bless':                    '',
'Resist Brainwash':                '',
'Resist Burn':                     '',
'Resist Confuse':                  '',
'Resist Curse':                    '',
'Resist Despair':                  '',
'Resist Dizzy':                    '',
'Resist Elec':                     '',
'Resist Fear':                     '',
'Resist Fire':                     '',
'Resist Forget':                   '',
'Resist Freeze':                   '',
'Resist Hunger':                   '',
'Resist Ice':                      '',
'Resist Nuke':                     '',
'Resist Phys':                     '',
'Resist Psy':                      '',
'Resist Rage':                     '',
'Resist Shock':                    '',
'Resist Sleep':                    '',
'Resist Wind':                     '',
'Samurai\'s Ruling':               '',
'Sharp Student':                   '',
'Shock Boost':                     '',
'Sleep Boost':                     '',
'Soul Chain':                      '',
'Soul Touch':                      '',
'Speed Master':                    '',
'Spell Master':                    '',
'Stealth':                         '',
'Subrecover HP':                   '',
'Subrecover HP EX':                '',
'Subrecover SP':                   '',
'Subrecover SP EX':                '',
'Support Plus 1':                  '',
'Support Plus 2':                  '',
'Support Plus 3':                  '',
'Support Rate Up':                 '',
'Survival Trick':                  '',
'Touch n\' Go':                    '',
'Treasure Reboot':                 '',
'Treasure Skimmer':                '',
'Trigger Happy':                   '',
'Tyrant\'s Mind':                  '',
'Ultimate Support':                '',
'Unshaken Will':                   '',
'Victory Cry':                     '',
'Wind Amp':                        '',
'Wind Boost':                      '',
// ailment
'Famine\'s Scream':                '',
'Reverse Rub':                     '',
'Dazzler':                         '',
'Dormina':                         '',
'Evil Touch':                      '',
'Makajam':                         '',
'Marin Karin':                     '',
'Ominous Words':                   '',
'Pulinpa':                         '',
'Taunt':                           '',
'Phantom Show':                    '',
'Abysmal Surge':                   '',
'Brain Jack':                      '',
'Evil Smile':                      '',
'Lullaby':                         '',
'Makajamaon':                      '',
'Nocturnal Flash':                 '',
'Tentarafoo':                      '',
'Wage War':                        '',
// almighty
'Life Leech':                      '吸血',
'Self-Destruct':                   '',
'Spirit Leech':                    '吸魔',
'Summon':                          '',
'Life Drain':                      '',
'Spirit Drain':                    '',
'Stagnant Air':                    '污秽空气',
'Foul Breath':                     '污秽吐息',
'Megido':                          '米吉多',
'Megidola':                        '米吉多拉',
'Ghastly Wail':                    '亡者喟叹',
'Door of Hades':                   '冥府之门',
'Megidolaon':                      '米吉多拉翁',
'Myriad Truths':                   '数万真言',
'Black Viper':                     '漆黑之蛇',
'Abyssal Eye':                     '深渊之眼',
'Morning Star':                    '拂晓明星',
'Rebellion Blade':                 '反抗之刃',
// curse
'Eiha':                            '耶哈',
'Mudo':                            '姆多',
'Eiga':                            '耶加',
'Maeiha':                          '玛哈耶哈',
'Eigaon':                          '姆多翁',
'Mudoon':                          '耶加翁',
'Mamudo':                          '玛哈姆多',
'Maeiga':                          '玛哈耶加',
'Maeigaon':                        '玛哈耶加翁',
'Mamudoon':                        '玛哈姆多翁',
'Abyssal Wings':                   '祸津曼荼罗',
'Magatsu Mandala':                 '炼狱之翼',
'Demonic Decree':                  '恶魔审判',
'Die For Me!':                     '可以为我而死吗？',
// fire
'Agi':                             '亚基',
'Agilao':                          '亚基拉欧',
'Maragi':                          '玛哈拉基',
'Agidyne':                         '亚基达因',
'Maragion':                        '玛哈拉基翁',
'Maragidyne':                      '玛哈亚吉达因',
'Titanomachia':                    'ティタノマキア',
'Inferno':                         '炼狱',
'Blazing Hell':                    '大炎上',
// phys
'Stomach Blow':                    '突撃',
'Lucky Punch':                     '幸运拳',
'Lunge':                           '斩击',
'Cleave':                          '梦乡针',
'Miracle Punch':                   '奇迹拳',
'Terror Claw':                     '骇鸦',
'Brain Shake':                     '头脑震撼',
'Giant Slice':                     '大切断',
'Headbutt':                        '头槌',
'Hysterical Slap':                 '歇斯底里掌掴',
'Cornered Fang':                   '窮鼠之牙',
'Double Fangs':                    '二連牙',
'Power Slash':                     '威力斩击',
'Skull Cracker':                   '栽倒痛击',
'Sledgehammer':                    '烈击巨锤',
'Negative Pile':                   '负面意识堆积',
'Assault Dive':                    '俯冲突击',
'Rampage':                         '横冲直撞',
'Vajra Blast':                     '金剛発破',
'Kill Rush':                       '杀戮突袭',
'Rising Slash':                    '加倍斩击',
'Memory Blow':                     '忘殺突袭',
'Dormin Rush':                     '永眠突袭',
'Gattling Blows':                  '加特林重击',
'Megaton Raid':                    '百万吨袭击',
'Miracle Rush':                    '奇迹突袭',
'Oni Kagura':                      '鬼神楽',
'Swift Strike':                    '電光石火',
'Tempest Slash':                   '五月雨斩',
'Deadly Fury':                     '死亡遊戯',
'Vicious Strike':                  '烈风波',
'Flash Bomb':                      '闪光炸弹',
'Mind Slice':                      '心念切断',
'Akasha Arts':                     '虚无艺术',
'Beast Weaver':                    '弦艺猛兽',
'Cross Slash':                     '十文字斩',
'Death Scythe':                    '死神大镰斩',
'Heat Wave':                       '灼热波浪',
'Myriad Slashes':                  '刹那五月雨斩',
'Bad Beat':                        '绝望敲打',
'Sword Dance':                     '剑舞',
'Bloodbath':                       '血祭',
'Brain Buster':                    '碎脑击',
'Deathbound':                      '死亡界限',
'Vorpal Blade':                    '空间杀法',
'Agneyastra':                      '火神之击',
'Brave Blade':                     '勇气之击',
'Ayamur':                          '巴力神矛',
'Gigantomachia':                   '巨人之战',
'God\'s Hand':                     '神之手',
'Hassou Tobi':                     '八艘飞跃',
'Laevateinn':                      '胜利之剑',
'Masquerade':                      '化妆舞会',
// trait
'Ailment Hunter':                  '',
'Allure of Wisdom':                '',
'Atomic Bloodline':                '',
'Atomic Hellscape':                '',
'Ave Maria':                       '',
'Bargain Bolts':                   '',
'Blessed Bloodline':               '',
'Bloodstained Eyes':               '',
'Bolstering Force':                '',
'Chi You\'s Blessing':             '',
'Circle of Sadness':               '',
'Cocytus':                         '',
'Cold-Blooded':                    '',
'Cool Customer':                   '',
'Country Maker':                   '',
'Crisis Control':                  '',
'Cursed Bloodline':                '',
'Deathly Illness':                 '',
'Demon\'s Bite':                   '',
'Draining Mouth':                  '',
'Drunken Passion':                 '',
'Eccentric Temper':                '',
'Electric Bloodline':              '',
'Explosive Scheme':                '',
'Foul Odor':                       '',
'Foul Stench':                     '',
'Frenzied Bull':                   '',
'Frigid Bloodline':                '',
'Gaia Blessing':                   '',
'Gaia Pact':                       '',
'Ghost Nest':                      '',
'Gloomy Child':                    '',
'Gluttonmouth':                    '',
'God Maker':                       '',
'Grace of Mother':                 '',
'Grace of the Olive':              '',
'Hallowed Spirit':                 '',
'Hazy Presence':                   '',
'Heated Bloodline':                '',
'Hollow Jester':                   '',
'Icy Glare':                       '',
'Immunity':                        '',
'Infinite Scheme':                 '',
'Ingenious Spirit':                '',
'Intense Focus':                   '',
'Internal Hypnosis':               '',
'Inviolable Beauty':               '',
'Iron Heart':                      '',
'Just Die':                        '',
'Linked Bloodline':                '',
'Majestic Presence':               '',
'Martyr\'s Gift':                  '',
'Mastery of Magic':                '',
'Mighty Gaze':                     '',
'Mother\'s Lament':                '',
'Mouth of Savoring':               '',
'Naranari':                        '',
'Omen':                            '',
'Pagan Allure':                    '',
'Pinch Anchor':                    '',
'Pinnacle of Magic':               '',
'Positive Thoughts':               '',
'Potent Hypnosis':                 '',
'Proud Presence':                  '',
'Psychic Bloodline':               '',
'Raging Temper':                   '',
'Rare Antibody':                   '',
'Relentless':                      '',
'Relief Bloodline':                '',
'Retaliating Body':                '',
'Savior Bloodline':                '',
'Scoundrel Eyes':                  '',
'Skillful Combo':                  '',
'Skillful Technique':              '',
'Static Electricity':              '',
'Striking Weight':                 '',
'Tactical Spirit':                 '',
'Tag Team':                        '',
'Thermal Conduct':                 '',
'Ultimate Vessel':                 '',
'Undying Fury':                    '',
'Universal Law':                   '',
'Unparalleled Eyes':               '',
'Vahana\'s Wings':                 '',
'Veil of Midnight':                '',
'Veil of Sunrise':                 '',
'Vitality of the Tree':            '',
'Wealth of Lotus':                 '',
'Will of the Sword':               '',
'Wind Bloodline':                  '',
// healing
'Dia':                             '迪亚',
'Baisudi':                         '拜斯堤',
'Energy Drop':                     '能量水滴',
'Patra':                           '帕特拉',
'Amrita Drop':                     '甘露水滴',
'Diarama':                         '迪亚拉玛',
'Media':                           '梅迪亚',
'Energy Shower':                   '能量浴',
'Mabaisudi':                       '玛哈拜斯堤',
'Me Patra':                        '梅帕特拉',
'Recarm':                          '利卡姆',
'Champion\'s Cup':                 '王者之杯',
'Amrita Shower':                   '甘露之雨',
'Mediarama':                       '梅迪拉玛',
'Diarahan':                        '迪亚拉翰',
'Samarecarm':                      '萨玛利卡姆',
'Cadenza':                         '华彩乐段',
'Neo Cadenza':                     '新华彩乐段',
'Holy Benevolence':                '',
'Mediarahan':                      '梅迪亚拉翰',
'Oratorio':                        '圣谭曲',
'Salvation':                       '救世主之愈',
// nuclear
'Frei':                            '芙雷',
'Freila':                          '芙雷拉',
'Mafrei':                          '玛哈芙雷',
'Freidyne':                        '芙雷达因',
'Mafreila':                        '玛哈芙雷拉',
'Mafreidyne':                      '玛哈芙雷达因',
'Atomic Flare':                    '原子火焰',
'Cosmic Flare':                    '宇宙火焰',
// support
'Attract':                         '喧哗',
'Conceal':                         '潜伏',
'Rebellion':                       '反叛',
'Revolution':                      '革命',
'Elec Break':                      '消除电击防御',
'Fire Break':                      '消除火焰防御',
'Ice Break':                       '消除冰冻防御',
'Nuke Break':                      '消除核热防御',
'Psy Break':                       '消除念动防御',
'Wind Break':                      '消除疾风防御',
'Rakukaja':                        '拉库卡加',
'Rakunda':                         '拉坤达',
'Sukukaja':                        '斯库卡加',
'Sukunda':                         '斯坤达',
'Tarukaja':                        '塔尔卡加',
'Tarunda':                         '塔伦达',
'Makara Break':                    '玛卡拉破坏',
'Tetra Break':                     '提特拉破坏',
'Dekaja':                          '迪卡加',
'Dekunda':                         '迪坤达',
'Wings of Wisdom':                 '才智的羽翼',
'Charge':                          '蓄力',
'Concentrate':                     '专心致志',
'President\'s Insight':            '社长的诀窍',
'Tyrant\'s Will':                  '幕后黑手的威令',
'Brave Step':                      '勇气步伐',
'Elec Wall':                       '防电之壁',
'Fire Wall':                       '防炎之壁',
'Ice Wall':                        '防冰之壁',
'Nuke Wall':                       '',
'Psy Wall':                        '防念之壁',
'Wind Wall':                       '防岚之壁',
'Gambler\'s Foresight':            '赌徒的预测',
'Guiding Tendril':                 '',
'Vault Guardian':                  '金库看守者',
'Bleeding Dry Brush':              '剥削的假画',
'Makarakarn':                      '玛卡拉康',
'Marakukaja':                      '玛哈拉库卡加',
'Marakunda':                       '玛哈拉坤达',
'Masukukaja':                      '玛哈斯库卡加',
'Masukunda':                       '玛哈斯坤达',
'Matarukaja':                      '玛哈塔尔卡加',
'Matarunda':                       '玛哈塔伦达',
'Tetraja':                         '提特拉加',
'Tetrakarn':                       '提特拉康',
'Debilitate':                      '女巫诅咒',
'Heat Riser':                      '灼热奋起',
'Thermopylae':                     '炽热之门',
'Fighting Spirit':                 '斗魂贯注',
'High Energy':                     '血脉贲张',
'Checkmate':                       '棋高一着',
'Hyakka Ryouran':                  '百花缭乱',
'Life Wall':                       '生命障壁',
// ice
'Bufu':                            '布芙',
'Bufula':                          '布芙拉',
'Mabufu':                          '玛哈布芙',
'Bufudyne':                        '布芙达因',
'Mabufula':                        '玛哈布芙拉',
'Mabufudyne':                      '玛哈布芙达因',
'Diamond Dust':                    '钻石星辰',
'Ice Age':                         '大氷河期',
// bless
'Kouha':                           '克哈',
'Hama':                            '哈玛',
'Kouga':                           '克加',
'Makouha':                         '玛哈克哈',
'Hamaon':                          '哈玛翁',
'Kougaon':                         '克加翁',
'Mahama':                          '玛翰玛',
'Makouga':                         '玛哈克加',
'Makougaon':                       '玛哈克加翁',
'Shining Arrows':                  '輝矢',
'Mahamaon':                        '玛翰玛翁',
'Divine Judgement':                '神之审判',
'Samsara':                         '回转讲道',
// gun
'Dream Needle':                    '织梦针',
'Snap':                            '指弾',
'Double Shot':                     '双重射击',
'Triple Down':                     '三连倒',
'One-shot Kill':                   '一枪毙命',
'Riot Gun':                        '至高魔弹',
// wind
'Garu':                            '加尔',
'Garula':                          '加尔拉',
'Magaru':                          '玛哈加尔',
'Garudyne':                        '加尔达因',
'Magarula':                        '玛哈加尔拉',
'Magarudyne':                      '玛哈加尔达因',
'Panta Rhei':                      '万物流转',
'Vacuum Wave':                     '真空波',
// psy
'Psi':                             '赛',
'Psio':                            '赛欧',
'Mapsi':                           '玛哈赛',
'Psiodyne':                        '赛达因',
'Mapsio':                          '玛哈赛欧',
'Mapsiodyne':                      '玛哈赛达因',
'Psycho Force':                    '念动力',
'Psycho Blast':                    '念动波',
// electric
'Zio':                             '吉欧',
'Zionga':                          '吉欧加',
'Mazio':                           '玛哈吉欧',
'Ziodyne':                         '吉欧达因',
'Mazionga':                        '玛哈吉欧加',
'Maziodyne':                       '玛哈吉欧达因',
'Thunder Reign':                   '真理之雷',
'Wild Thunder':                    '崇高圣战',
};


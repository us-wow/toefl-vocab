// TOEFL 학술 단어 사전 — 틀린 단어 해설에 사용
// 35개 지문에서 추출한 학술 어휘 (명사, 동사, 형용사, 부사 중 4글자 이상)

export interface WordInfo {
  meaning: string; // 한국어 뜻
  pronunciation: string; // 발음 기호 (IPA)
  example: string; // 짧은 예문
}

// 단어는 소문자로 저장, 검색 시 toLowerCase()로 매칭
export const wordDictionary: Record<string, WordInfo> = {
  absorb: {
    meaning: "흡수하다",
    pronunciation: "/əbˈzɔːrb/",
    example: "Sponges absorb water quickly.",
  },
  accelerate: {
    meaning: "가속하다",
    pronunciation: "/əkˈseləˌreɪt/",
    example: "The car began to accelerate.",
  },
  accelerating: {
    meaning: "가속하는",
    pronunciation: "/əkˈseləˌreɪtɪŋ/",
    example: "Accelerating growth caused concern.",
  },
  access: {
    meaning: "접근, 이용",
    pronunciation: "/ˈækses/",
    example: "Students need access to books.",
  },
  accumulated: {
    meaning: "축적된",
    pronunciation: "/əˈkjuːmjəˌleɪtɪd/",
    example: "Accumulated stress causes illness.",
  },
  accumulation: {
    meaning: "축적",
    pronunciation: "/əˌkjuːmjəˈleɪʃən/",
    example: "Carbon accumulation harms the climate.",
  },
  accurate: {
    meaning: "정확한",
    pronunciation: "/ˈækjərɪt/",
    example: "The data must be accurate.",
  },
  acquisition: {
    meaning: "습득",
    pronunciation: "/ˌækwɪˈzɪʃən/",
    example: "Language acquisition begins at birth.",
  },
  active: {
    meaning: "활성의",
    pronunciation: "/ˈæktɪv/",
    example: "The enzyme has an active site.",
  },
  adapted: {
    meaning: "적응한",
    pronunciation: "/əˈdæptɪd/",
    example: "Animals adapted to cold climates.",
  },
  adequate: {
    meaning: "충분한",
    pronunciation: "/ˈædɪkwɪt/",
    example: "Adequate sleep improves memory.",
  },
  adopted: {
    meaning: "채택한",
    pronunciation: "/əˈdɑːptɪd/",
    example: "They adopted a new policy.",
  },
  advanced: {
    meaning: "발전한",
    pronunciation: "/ədˈvænst/",
    example: "Technology has advanced rapidly.",
  },
  advancement: {
    meaning: "발전, 진보",
    pronunciation: "/ədˈvænsmənt/",
    example: "Career advancement requires effort.",
  },
  advantage: {
    meaning: "이점",
    pronunciation: "/ədˈvæntɪdʒ/",
    example: "Speed is a major advantage.",
  },
  advocate: {
    meaning: "옹호하다",
    pronunciation: "/ˈædvəˌkeɪt/",
    example: "Scientists advocate for research funding.",
  },
  affecting: {
    meaning: "영향을 미치는",
    pronunciation: "/əˈfɛktɪŋ/",
    example: "Pollution is affecting marine life.",
  },
  agriculture: {
    meaning: "농업",
    pronunciation: "/ˈæɡrɪˌkʌltʃər/",
    example: "Agriculture feeds the world population.",
  },
  agricultural: {
    meaning: "농업의",
    pronunciation: "/ˌæɡrɪˈkʌltʃərəl/",
    example: "Agricultural land is decreasing globally.",
  },
  algorithms: {
    meaning: "알고리즘",
    pronunciation: "/ˈælɡəˌrɪðəmz/",
    example: "Algorithms sort data efficiently.",
  },
  altered: {
    meaning: "변화시킨",
    pronunciation: "/ˈɔːltərd/",
    example: "Climate change altered ecosystems.",
  },
  alternatives: {
    meaning: "대안들",
    pronunciation: "/ɔːlˈtɜːrnətɪvz/",
    example: "We need energy alternatives now.",
  },
  analysts: {
    meaning: "분석가들",
    pronunciation: "/ˈænəlɪsts/",
    example: "Financial analysts predict market trends.",
  },
  analysis: {
    meaning: "분석",
    pronunciation: "/əˈnælɪsɪs/",
    example: "Data analysis reveals hidden patterns.",
  },
  ancient: {
    meaning: "고대의",
    pronunciation: "/ˈeɪnʃənt/",
    example: "Ancient ruins attract many tourists.",
  },
  antibiotics: {
    meaning: "항생제",
    pronunciation: "/ˌæntɪbaɪˈɑːtɪks/",
    example: "Antibiotics treat bacterial infections.",
  },
  approximately: {
    meaning: "대략",
    pronunciation: "/əˈprɑːksɪmɪtli/",
    example: "Approximately half the class passed.",
  },
  aquatic: {
    meaning: "수생의",
    pronunciation: "/əˈkwætɪk/",
    example: "Aquatic animals live in water.",
  },
  archaeological: {
    meaning: "고고학적",
    pronunciation: "/ˌɑːrkiəˈlɑːdʒɪkəl/",
    example: "Archaeological sites reveal ancient history.",
  },
  architecture: {
    meaning: "구조, 건축",
    pronunciation: "/ˈɑːrkɪˌtɛktʃər/",
    example: "Computer architecture keeps evolving.",
  },
  arid: {
    meaning: "건조한",
    pronunciation: "/ˈærɪd/",
    example: "Deserts are extremely arid regions.",
  },
  artificial: {
    meaning: "인공의",
    pronunciation: "/ˌɑːrtɪˈfɪʃəl/",
    example: "Artificial intelligence is transforming work.",
  },
  atmosphere: {
    meaning: "대기",
    pronunciation: "/ˈætməsˌfɪr/",
    example: "The atmosphere protects the Earth.",
  },
  atmospheric: {
    meaning: "대기의",
    pronunciation: "/ˌætməsˈfɛrɪk/",
    example: "Atmospheric pressure drops at altitude.",
  },
  available: {
    meaning: "이용 가능한",
    pronunciation: "/əˈveɪləbəl/",
    example: "Resources are not always available.",
  },
  average: {
    meaning: "평균의",
    pronunciation: "/ˈævərɪdʒ/",
    example: "Average temperatures are rising globally.",
  },
  babbling: {
    meaning: "옹알이",
    pronunciation: "/ˈbæblɪŋ/",
    example: "Infants begin with babbling sounds.",
  },
  bacteria: {
    meaning: "박테리아",
    pronunciation: "/bækˈtɪriə/",
    example: "Bacteria can cause serious infections.",
  },
  bacterial: {
    meaning: "세균의",
    pronunciation: "/bækˈtɪriəl/",
    example: "Bacterial infections require antibiotics.",
  },
  balance: {
    meaning: "균형",
    pronunciation: "/ˈbæləns/",
    example: "Ecosystems need a careful balance.",
  },
  barriers: {
    meaning: "장벽",
    pronunciation: "/ˈbæriərz/",
    example: "Trade barriers limit free commerce.",
  },
  beneath: {
    meaning: "아래에",
    pronunciation: "/bɪˈniːθ/",
    example: "Water lies beneath the surface.",
  },
  bilateral: {
    meaning: "양자의",
    pronunciation: "/baɪˈlætərəl/",
    example: "They signed a bilateral agreement.",
  },
  binds: {
    meaning: "결합하다",
    pronunciation: "/baɪndz/",
    example: "The enzyme binds to substrate.",
  },
  biodiversity: {
    meaning: "생물 다양성",
    pronunciation: "/ˌbaɪoʊdaɪˈvɜːrsɪti/",
    example: "Biodiversity is vital for ecosystems.",
  },
  biological: {
    meaning: "생물학적",
    pronunciation: "/ˌbaɪəˈlɑːdʒɪkəl/",
    example: "Biological research advances medicine.",
  },
  biologists: {
    meaning: "생물학자들",
    pronunciation: "/baɪˈɑːlədʒɪsts/",
    example: "Biologists study living organisms.",
  },
  biosphere: {
    meaning: "생물권",
    pronunciation: "/ˈbaɪoʊˌsfɪr/",
    example: "The biosphere supports all life.",
  },
  boundary: {
    meaning: "경계",
    pronunciation: "/ˈbaʊndəri/",
    example: "The river forms a natural boundary.",
  },
  boundaries: {
    meaning: "경계들",
    pronunciation: "/ˈbaʊndəriz/",
    example: "Tectonic plates meet at boundaries.",
  },
  branches: {
    meaning: "가지들",
    pronunciation: "/ˈbræntʃɪz/",
    example: "Birds rest on high branches.",
  },
  calculated: {
    meaning: "계산된",
    pronunciation: "/ˈkælkjəˌleɪtɪd/",
    example: "Results were carefully calculated.",
  },
  calculations: {
    meaning: "계산",
    pronunciation: "/ˌkælkjəˈleɪʃənz/",
    example: "Complex calculations require computers.",
  },
  candidate: {
    meaning: "후보",
    pronunciation: "/ˈkændɪˌdeɪt/",
    example: "Mars is a candidate for exploration.",
  },
  canopies: {
    meaning: "수관층 (숲 위층)",
    pronunciation: "/ˈkænəpiz/",
    example: "Rainforest canopies block sunlight.",
  },
  capabilities: {
    meaning: "능력들",
    pronunciation: "/ˌkeɪpəˈbɪlɪtiz/",
    example: "AI has remarkable capabilities.",
  },
  carbon: {
    meaning: "탄소",
    pronunciation: "/ˈkɑːrbən/",
    example: "Carbon is essential for life.",
  },
  carved: {
    meaning: "깎아 만든",
    pronunciation: "/kɑːrvd/",
    example: "Glaciers carved deep valleys.",
  },
  catalyst: {
    meaning: "촉매",
    pronunciation: "/ˈkætəlɪst/",
    example: "A catalyst speeds up reactions.",
  },
  catalysts: {
    meaning: "촉매들",
    pronunciation: "/ˈkætəlɪsts/",
    example: "Enzymes are biological catalysts.",
  },
  categories: {
    meaning: "범주들",
    pronunciation: "/ˈkætɪˌɡɔːriz/",
    example: "Data falls into three categories.",
  },
  caused: {
    meaning: "초래한",
    pronunciation: "/kɔːzd/",
    example: "Pollution caused environmental damage.",
  },
  centers: {
    meaning: "중심지들",
    pronunciation: "/ˈsentərz/",
    example: "Urban centers attract workers.",
  },
  certain: {
    meaning: "특정한",
    pronunciation: "/ˈsɜːrtən/",
    example: "Certain species are endangered.",
  },
  challenged: {
    meaning: "도전한",
    pronunciation: "/ˈtʃælɪndʒd/",
    example: "New data challenged old theories.",
  },
  challenges: {
    meaning: "도전, 과제",
    pronunciation: "/ˈtʃælɪndʒɪz/",
    example: "Climate change poses serious challenges.",
  },
  channeled: {
    meaning: "유도한",
    pronunciation: "/ˈtʃænəld/",
    example: "Water was channeled into fields.",
  },
  channels: {
    meaning: "수로, 통로",
    pronunciation: "/ˈtʃænəlz/",
    example: "Channels direct water to crops.",
  },
  chemical: {
    meaning: "화학적",
    pronunciation: "/ˈkɛmɪkəl/",
    example: "Chemical reactions release energy.",
  },
  chloroplasts: {
    meaning: "엽록체",
    pronunciation: "/ˈklɔːrəˌplæsts/",
    example: "Chloroplasts capture sunlight for plants.",
  },
  circulate: {
    meaning: "순환하다",
    pronunciation: "/ˈsɜːrkjəˌleɪt/",
    example: "Blood cells circulate through veins.",
  },
  civilizations: {
    meaning: "문명들",
    pronunciation: "/ˌsɪvɪlɪˈzeɪʃənz/",
    example: "Ancient civilizations built great monuments.",
  },
  classical: {
    meaning: "고전적",
    pronunciation: "/ˈklæsɪkəl/",
    example: "Classical music inspires many people.",
  },
  climate: {
    meaning: "기후",
    pronunciation: "/ˈklaɪmɪt/",
    example: "Climate affects all living things.",
  },
  coastal: {
    meaning: "해안의",
    pronunciation: "/ˈkoʊstəl/",
    example: "Coastal cities face flooding risks.",
  },
  cognitive: {
    meaning: "인지적",
    pronunciation: "/ˈkɑːɡnɪtɪv/",
    example: "Cognitive skills develop with practice.",
  },
  collapsed: {
    meaning: "붕괴된",
    pronunciation: "/kəˈlæpst/",
    example: "The collapsed star became dense.",
  },
  collected: {
    meaning: "수집된",
    pronunciation: "/kəˈlɛktɪd/",
    example: "Data was collected from samples.",
  },
  combined: {
    meaning: "결합된",
    pronunciation: "/kəmˈbaɪnd/",
    example: "Combined efforts yield better results.",
  },
  communication: {
    meaning: "소통, 통신",
    pronunciation: "/kəˌmjuːnɪˈkeɪʃən/",
    example: "Communication technology keeps advancing.",
  },
  communities: {
    meaning: "공동체들",
    pronunciation: "/kəˈmjuːnɪtiz/",
    example: "Online communities share knowledge freely.",
  },
  community: {
    meaning: "공동체",
    pronunciation: "/kəˈmjuːnɪti/",
    example: "The community supports local farmers.",
  },
  competitive: {
    meaning: "경쟁력 있는",
    pronunciation: "/kəmˈpɛtɪtɪv/",
    example: "Solar energy is now competitive.",
  },
  complex: {
    meaning: "복잡한",
    pronunciation: "/ˈkɑːmplɛks/",
    example: "Ecosystems are complex structures.",
  },
  compositions: {
    meaning: "구성, 조성",
    pronunciation: "/ˌkɑːmpəˈzɪʃənz/",
    example: "Mineral compositions vary by region.",
  },
  compounds: {
    meaning: "화합물",
    pronunciation: "/ˈkɑːmpaʊndz/",
    example: "Organic compounds contain carbon atoms.",
  },
  compressed: {
    meaning: "압축된",
    pronunciation: "/kəmˈprɛst/",
    example: "Compressed gas stores more energy.",
  },
  concentrated: {
    meaning: "밀집한",
    pronunciation: "/ˈkɑːnsənˌtreɪtɪd/",
    example: "Workers concentrated in urban areas.",
  },
  concern: {
    meaning: "우려",
    pronunciation: "/kənˈsɜːrn/",
    example: "Pollution is a global concern.",
  },
  conditions: {
    meaning: "조건",
    pronunciation: "/kənˈdɪʃənz/",
    example: "Weather conditions change rapidly.",
  },
  confirmed: {
    meaning: "확인된",
    pronunciation: "/kənˈfɜːrmd/",
    example: "Scientists confirmed the hypothesis.",
  },
  conformity: {
    meaning: "동조, 순응",
    pronunciation: "/kənˈfɔːrmɪti/",
    example: "Social conformity influences behavior strongly.",
  },
  confronted: {
    meaning: "직면한",
    pronunciation: "/kənˈfrʌntɪd/",
    example: "She confronted the difficult truth.",
  },
  connected: {
    meaning: "연결된",
    pronunciation: "/kəˈnɛktɪd/",
    example: "All devices are now connected.",
  },
  conservation: {
    meaning: "보존",
    pronunciation: "/ˌkɑːnsərˈveɪʃən/",
    example: "Conservation protects endangered species.",
  },
  consistent: {
    meaning: "일관된",
    pronunciation: "/kənˈsɪstənt/",
    example: "Results must be consistent and reliable.",
  },
  consolidation: {
    meaning: "강화, 통합",
    pronunciation: "/kənˌsɑːlɪˈdeɪʃən/",
    example: "Memory consolidation happens during sleep.",
  },
  constructed: {
    meaning: "건설한",
    pronunciation: "/kənˈstrʌktɪd/",
    example: "Engineers constructed a massive dam.",
  },
  consumption: {
    meaning: "소비",
    pronunciation: "/kənˈsʌmpʃən/",
    example: "Energy consumption continues to rise.",
  },
  continental: {
    meaning: "대륙의",
    pronunciation: "/ˌkɑːntɪˈnɛntəl/",
    example: "Continental drift moves landmasses slowly.",
  },
  continents: {
    meaning: "대륙들",
    pronunciation: "/ˈkɑːntɪnənts/",
    example: "There are seven continents on Earth.",
  },
  contributed: {
    meaning: "기여한",
    pronunciation: "/kənˈtrɪbjuːtɪd/",
    example: "Research contributed to new treatments.",
  },
  conventional: {
    meaning: "기존의, 전통적",
    pronunciation: "/kənˈvɛnʃənəl/",
    example: "Conventional methods are being replaced.",
  },
  convert: {
    meaning: "변환하다",
    pronunciation: "/kənˈvɜːrt/",
    example: "Plants convert sunlight into energy.",
  },
  cooling: {
    meaning: "냉각",
    pronunciation: "/ˈkuːlɪŋ/",
    example: "Volcanic ash causes global cooling.",
  },
  coral: {
    meaning: "산호",
    pronunciation: "/ˈkɔːrəl/",
    example: "Coral reefs support marine life.",
  },
  core: {
    meaning: "핵심, 핵",
    pronunciation: "/kɔːr/",
    example: "Earth's core generates magnetic fields.",
  },
  corporations: {
    meaning: "기업들",
    pronunciation: "/ˌkɔːrpəˈreɪʃənz/",
    example: "Large corporations dominate global trade.",
  },
  correlations: {
    meaning: "상관관계",
    pronunciation: "/ˌkɔːrəˈleɪʃənz/",
    example: "Correlations do not prove causation.",
  },
  cosmic: {
    meaning: "우주의",
    pronunciation: "/ˈkɑːzmɪk/",
    example: "Cosmic rays reach Earth daily.",
  },
  critical: {
    meaning: "중요한",
    pronunciation: "/ˈkrɪtɪkəl/",
    example: "Clean water is critical for health.",
  },
  cultivated: {
    meaning: "재배된",
    pronunciation: "/ˈkʌltɪˌveɪtɪd/",
    example: "Cultivated crops replaced wild plants.",
  },
  cultural: {
    meaning: "문화적",
    pronunciation: "/ˈkʌltʃərəl/",
    example: "Cultural exchange enriches societies.",
  },
  currents: {
    meaning: "해류, 흐름",
    pronunciation: "/ˈkɜːrənts/",
    example: "Ocean currents distribute heat globally.",
  },
  datasets: {
    meaning: "데이터셋",
    pronunciation: "/ˈdeɪtəˌsɛts/",
    example: "Large datasets reveal hidden patterns.",
  },
  debate: {
    meaning: "논쟁하다",
    pronunciation: "/dɪˈbeɪt/",
    example: "Economists debate trade policy effects.",
  },
  decades: {
    meaning: "수십 년",
    pronunciation: "/ˈdɛkeɪdz/",
    example: "Progress occurred over several decades.",
  },
  decreased: {
    meaning: "감소한",
    pronunciation: "/dɪˈkriːst/",
    example: "Costs have decreased significantly.",
  },
  defense: {
    meaning: "방어",
    pronunciation: "/dɪˈfɛns/",
    example: "The immune system provides defense.",
  },
  demographic: {
    meaning: "인구통계학적",
    pronunciation: "/ˌdɛməˈɡræfɪk/",
    example: "Demographic shifts affect labor markets.",
  },
  demonstrate: {
    meaning: "입증하다",
    pronunciation: "/ˈdɛmənˌstreɪt/",
    example: "Experiments demonstrate the theory works.",
  },
  demonstrated: {
    meaning: "입증된",
    pronunciation: "/ˈdɛmənˌstreɪtɪd/",
    example: "Results demonstrated clear improvement.",
  },
  dense: {
    meaning: "밀집한",
    pronunciation: "/dɛns/",
    example: "Dense forests cover the mountains.",
  },
  depend: {
    meaning: "의존하다",
    pronunciation: "/dɪˈpɛnd/",
    example: "Many species depend on reefs.",
  },
  deposited: {
    meaning: "퇴적된",
    pronunciation: "/dɪˈpɑːzɪtɪd/",
    example: "Sediment was deposited over centuries.",
  },
  deposits: {
    meaning: "퇴적물, 매장물",
    pronunciation: "/dɪˈpɑːzɪts/",
    example: "Water deposits exist beneath Mars.",
  },
  desert: {
    meaning: "사막",
    pronunciation: "/ˈdɛzərt/",
    example: "The desert receives very little rain.",
  },
  detect: {
    meaning: "감지하다",
    pronunciation: "/dɪˈtɛkt/",
    example: "Sensors detect ground vibrations accurately.",
  },
  detected: {
    meaning: "감지된",
    pronunciation: "/dɪˈtɛktɪd/",
    example: "Plastic was detected in ocean samples.",
  },
  determined: {
    meaning: "결정한",
    pronunciation: "/dɪˈtɜːrmɪnd/",
    example: "Scientists determined the exact cause.",
  },
  developed: {
    meaning: "발전시킨",
    pronunciation: "/dɪˈvɛləpt/",
    example: "Humans developed agriculture independently.",
  },
  developing: {
    meaning: "개발 도상의",
    pronunciation: "/dɪˈvɛləpɪŋ/",
    example: "Developing nations grow rapidly.",
  },
  development: {
    meaning: "발전, 개발",
    pronunciation: "/dɪˈvɛləpmənt/",
    example: "Economic development requires investment.",
  },
  developmental: {
    meaning: "발달의",
    pronunciation: "/dɪˌvɛləpˈmɛntəl/",
    example: "Developmental stages follow fixed patterns.",
  },
  devices: {
    meaning: "장치들",
    pronunciation: "/dɪˈvaɪsɪz/",
    example: "Electronic devices keep getting smaller.",
  },
  diagnosis: {
    meaning: "진단",
    pronunciation: "/ˌdaɪəɡˈnoʊsɪs/",
    example: "Early diagnosis improves treatment outcomes.",
  },
  digital: {
    meaning: "디지털의",
    pronunciation: "/ˈdɪdʒɪtəl/",
    example: "Digital tools transform daily life.",
  },
  dioxide: {
    meaning: "이산화물",
    pronunciation: "/daɪˈɑːksaɪd/",
    example: "Carbon dioxide traps heat effectively.",
  },
  discovered: {
    meaning: "발견한",
    pronunciation: "/dɪˈskʌvərd/",
    example: "Scientists discovered a new species.",
  },
  distinct: {
    meaning: "뚜렷한",
    pronunciation: "/dɪˈstɪŋkt/",
    example: "Each region has distinct features.",
  },
  distinctive: {
    meaning: "독특한",
    pronunciation: "/dɪˈstɪŋktɪv/",
    example: "The fossil has distinctive markings.",
  },
  distinguish: {
    meaning: "구별하다",
    pronunciation: "/dɪˈstɪŋɡwɪʃ/",
    example: "Cells distinguish friend from foe.",
  },
  distributing: {
    meaning: "분배하는",
    pronunciation: "/dɪˈstrɪbjuːtɪŋ/",
    example: "Currents help in distributing heat.",
  },
  districts: {
    meaning: "지구, 구역",
    pronunciation: "/ˈdɪstrɪkts/",
    example: "Residential districts surround the factory.",
  },
  diversity: {
    meaning: "다양성",
    pronunciation: "/daɪˈvɜːrsɪti/",
    example: "Biodiversity maintains ecosystem health.",
  },
  documented: {
    meaning: "기록된",
    pronunciation: "/ˈdɑːkjəˌmɛntɪd/",
    example: "Researchers documented plastic pollution levels.",
  },
  doubled: {
    meaning: "두 배가 된",
    pronunciation: "/ˈdʌbəld/",
    example: "Transistor count doubled every two years.",
  },
  dramatically: {
    meaning: "극적으로",
    pronunciation: "/drəˈmætɪkli/",
    example: "Costs dropped dramatically last year.",
  },
  earthquakes: {
    meaning: "지진",
    pronunciation: "/ˈɜːrθˌkweɪks/",
    example: "Earthquakes cause widespread destruction.",
  },
  economic: {
    meaning: "경제적",
    pronunciation: "/ˌɛkəˈnɑːmɪk/",
    example: "Economic growth benefits all citizens.",
  },
  economists: {
    meaning: "경제학자들",
    pronunciation: "/ɪˈkɑːnəmɪsts/",
    example: "Economists study market behavior patterns.",
  },
  ecosystems: {
    meaning: "생태계",
    pronunciation: "/ˈiːkoʊˌsɪstəmz/",
    example: "Healthy ecosystems support diverse life.",
  },
  educational: {
    meaning: "교육적",
    pronunciation: "/ˌɛdʒʊˈkeɪʃənəl/",
    example: "Educational institutions promote learning.",
  },
  effectively: {
    meaning: "효과적으로",
    pronunciation: "/ɪˈfɛktɪvli/",
    example: "Antibiotics effectively kill bacteria.",
  },
  efficiency: {
    meaning: "효율",
    pronunciation: "/ɪˈfɪʃənsi/",
    example: "Solar panel efficiency has improved.",
  },
  elaborate: {
    meaning: "정교한",
    pronunciation: "/ɪˈlæbərɪt/",
    example: "Engineers built elaborate irrigation systems.",
  },
  electricity: {
    meaning: "전기",
    pronunciation: "/ɪˌlɛkˈtrɪsɪti/",
    example: "Solar panels generate clean electricity.",
  },
  electromagnetic: {
    meaning: "전자기의",
    pronunciation: "/ɪˌlɛktroʊmæɡˈnɛtɪk/",
    example: "Electromagnetic waves carry energy.",
  },
  electronic: {
    meaning: "전자의",
    pronunciation: "/ɪˌlɛkˈtrɑːnɪk/",
    example: "Electronic devices run on circuits.",
  },
  eliminate: {
    meaning: "제거하다",
    pronunciation: "/ɪˈlɪmɪˌneɪt/",
    example: "Antibiotics eliminate harmful bacteria.",
  },
  emerged: {
    meaning: "나타난",
    pronunciation: "/ɪˈmɜːrdʒd/",
    example: "A new threat has emerged.",
  },
  employment: {
    meaning: "고용",
    pronunciation: "/ɪmˈplɔɪmənt/",
    example: "Employment opportunities attract migrants.",
  },
  enabled: {
    meaning: "가능하게 한",
    pronunciation: "/ɪˈneɪbəld/",
    example: "Technology enabled rapid communication.",
  },
  endangered: {
    meaning: "멸종 위기의",
    pronunciation: "/ɪnˈdeɪndʒərd/",
    example: "Endangered species need protection now.",
  },
  energy: {
    meaning: "에너지",
    pronunciation: "/ˈɛnərdʒi/",
    example: "Solar energy powers many homes.",
  },
  engineers: {
    meaning: "공학자들",
    pronunciation: "/ˌɛndʒɪˈnɪrz/",
    example: "Engineers design bridges and buildings.",
  },
  enormous: {
    meaning: "거대한",
    pronunciation: "/ɪˈnɔːrməs/",
    example: "Volcanoes release enormous gas volumes.",
  },
  entanglement: {
    meaning: "얽힘 (양자)",
    pronunciation: "/ɪnˈtæŋɡəlmənt/",
    example: "Quantum entanglement connects distant particles.",
  },
  environment: {
    meaning: "환경",
    pronunciation: "/ɪnˈvaɪrənmənt/",
    example: "Protect the environment for future generations.",
  },
  environmental: {
    meaning: "환경의",
    pronunciation: "/ɪnˌvaɪrənˈmɛntəl/",
    example: "Environmental pollution harms marine life.",
  },
  enzymes: {
    meaning: "효소",
    pronunciation: "/ˈɛnzaɪmz/",
    example: "Enzymes speed up chemical reactions.",
  },
  equitable: {
    meaning: "공평한",
    pronunciation: "/ˈɛkwɪtəbəl/",
    example: "Trade should promote equitable growth.",
  },
  erosional: {
    meaning: "침식의",
    pronunciation: "/ɪˈroʊʒənəl/",
    example: "Erosional forces shape river valleys.",
  },
  eruptions: {
    meaning: "분출, 폭발",
    pronunciation: "/ɪˈrʌpʃənz/",
    example: "Volcanic eruptions release toxic gases.",
  },
  escape: {
    meaning: "탈출하다",
    pronunciation: "/ɪˈskeɪp/",
    example: "Light cannot escape a black hole.",
  },
  essential: {
    meaning: "필수적인",
    pronunciation: "/ɪˈsɛnʃəl/",
    example: "Water is essential for survival.",
  },
  established: {
    meaning: "확립된",
    pronunciation: "/ɪˈstæblɪʃt/",
    example: "Established theories were challenged.",
  },
  estimate: {
    meaning: "추정하다",
    pronunciation: "/ˈɛstɪˌmeɪt/",
    example: "Scientists estimate the population size.",
  },
  evidence: {
    meaning: "증거",
    pronunciation: "/ˈɛvɪdəns/",
    example: "Archaeological evidence supports the theory.",
  },
  exchange: {
    meaning: "교환",
    pronunciation: "/ɪksˈtʃeɪndʒ/",
    example: "Cultural exchange benefits both nations.",
  },
  exceeds: {
    meaning: "초과하다",
    pronunciation: "/ɪkˈsiːdz/",
    example: "Demand now exceeds the supply.",
  },
  exhibit: {
    meaning: "나타내다",
    pronunciation: "/ɪɡˈzɪbɪt/",
    example: "Black holes exhibit extreme gravity.",
  },
  existing: {
    meaning: "기존의",
    pronunciation: "/ɪɡˈzɪstɪŋ/",
    example: "Existing methods need improvement.",
  },
  expanding: {
    meaning: "팽창하는",
    pronunciation: "/ɪkˈspændɪŋ/",
    example: "The expanding universe keeps growing.",
  },
  experimental: {
    meaning: "실험적",
    pronunciation: "/ɪkˌspɛrɪˈmɛntəl/",
    example: "Experimental data confirmed the theory.",
  },
  experiments: {
    meaning: "실험들",
    pronunciation: "/ɪkˈspɛrɪmənts/",
    example: "Experiments test scientific hypotheses.",
  },
  exploit: {
    meaning: "활용하다",
    pronunciation: "/ɪkˈsplɔɪt/",
    example: "Quantum computers exploit superposition.",
  },
  exploration: {
    meaning: "탐사",
    pronunciation: "/ˌɛkspləˈreɪʃən/",
    example: "Space exploration inspires new technology.",
  },
  exponentially: {
    meaning: "기하급수적으로",
    pronunciation: "/ˌɛkspəˈnɛnʃəli/",
    example: "Computing power grew exponentially.",
  },
  expressed: {
    meaning: "표현된",
    pronunciation: "/ɪkˈsprɛst/",
    example: "Opinions expressed by group members varied.",
  },
  extensive: {
    meaning: "광범위한",
    pronunciation: "/ɪkˈstɛnsɪv/",
    example: "Extensive research was conducted.",
  },
  extraordinary: {
    meaning: "놀라운",
    pronunciation: "/ɪkˈstrɔːrdɪˌnɛri/",
    example: "Coral reefs show extraordinary diversity.",
  },
  extreme: {
    meaning: "극단적",
    pronunciation: "/ɪkˈstriːm/",
    example: "Black holes are extreme objects.",
  },
  facilitate: {
    meaning: "촉진하다",
    pronunciation: "/fəˈsɪlɪˌteɪt/",
    example: "Enzymes facilitate chemical reactions.",
  },
  facilitating: {
    meaning: "촉진하는",
    pronunciation: "/fəˈsɪlɪˌteɪtɪŋ/",
    example: "Trade routes were facilitating cultural exchange.",
  },
  facilities: {
    meaning: "시설들",
    pronunciation: "/fəˈsɪlɪtiz/",
    example: "Manufacturing facilities employ thousands.",
  },
  farming: {
    meaning: "농업",
    pronunciation: "/ˈfɑːrmɪŋ/",
    example: "Farming tools have evolved greatly.",
  },
  features: {
    meaning: "특징들",
    pronunciation: "/ˈfiːtʃərz/",
    example: "Geological features reveal Earth's history.",
  },
  fertile: {
    meaning: "비옥한",
    pronunciation: "/ˈfɜːrtəl/",
    example: "Fertile soil supports crop growth.",
  },
  fields: {
    meaning: "분야, 들판",
    pronunciation: "/fiːldz/",
    example: "Magnetic fields guide bird migration.",
  },
  financial: {
    meaning: "금융의",
    pronunciation: "/faɪˈnænʃəl/",
    example: "Financial markets fluctuate daily.",
  },
  floodwaters: {
    meaning: "홍수물",
    pronunciation: "/ˈflʌdˌwɔːtərz/",
    example: "Floodwaters were channeled into fields.",
  },
  flourished: {
    meaning: "번성한",
    pronunciation: "/ˈflɜːrɪʃt/",
    example: "Egyptian civilization flourished for millennia.",
  },
  forecasting: {
    meaning: "예측",
    pronunciation: "/ˈfɔːrˌkæstɪŋ/",
    example: "Weather forecasting saves many lives.",
  },
  foreign: {
    meaning: "외래의",
    pronunciation: "/ˈfɔːrɪn/",
    example: "Immune cells detect foreign substances.",
  },
  forestry: {
    meaning: "임업",
    pronunciation: "/ˈfɔːrɪstri/",
    example: "Sustainable forestry protects ecosystems.",
  },
  formation: {
    meaning: "형성",
    pronunciation: "/fɔːrˈmeɪʃən/",
    example: "Cloud formation requires moisture.",
  },
  formations: {
    meaning: "형성물, 지층",
    pronunciation: "/fɔːrˈmeɪʃənz/",
    example: "Ice formations are melting rapidly.",
  },
  fossil: {
    meaning: "화석",
    pronunciation: "/ˈfɑːsəl/",
    example: "Fossil fuels cause pollution.",
  },
  fragments: {
    meaning: "조각들",
    pronunciation: "/ˈfræɡmənts/",
    example: "Plastic fragments pollute the ocean.",
  },
  frozen: {
    meaning: "얼어붙은",
    pronunciation: "/ˈfroʊzən/",
    example: "Frozen water exists beneath Mars.",
  },
  fulfilled: {
    meaning: "충족된",
    pronunciation: "/fʊlˈfɪld/",
    example: "The goal was finally fulfilled.",
  },
  functions: {
    meaning: "기능들",
    pronunciation: "/ˈfʌŋkʃənz/",
    example: "Social functions vary across cultures.",
  },
  fundamental: {
    meaning: "근본적인",
    pronunciation: "/ˌfʌndəˈmɛntəl/",
    example: "Photosynthesis is fundamental to life.",
  },
  fundamentally: {
    meaning: "근본적으로",
    pronunciation: "/ˌfʌndəˈmɛntəli/",
    example: "Quantum computing fundamentally differs.",
  },
  galaxies: {
    meaning: "은하들",
    pronunciation: "/ˈɡæləksiz/",
    example: "Distant galaxies are moving apart.",
  },
  gathered: {
    meaning: "모은, 수집한",
    pronunciation: "/ˈɡæðərd/",
    example: "Information was gathered during the day.",
  },
  generated: {
    meaning: "생성된",
    pronunciation: "/ˈdʒɛnəˌreɪtɪd/",
    example: "Magnetic fields are generated by Earth.",
  },
  generation: {
    meaning: "발전, 세대",
    pronunciation: "/ˌdʒɛnəˈreɪʃən/",
    example: "Electricity generation uses solar panels.",
  },
  generations: {
    meaning: "세대들",
    pronunciation: "/ˌdʒɛnəˈreɪʃənz/",
    example: "Younger generations prefer digital tools.",
  },
  genetic: {
    meaning: "유전적",
    pronunciation: "/dʒəˈnɛtɪk/",
    example: "Genetic factors influence bird migration.",
  },
  genuinely: {
    meaning: "진정으로",
    pronunciation: "/ˈdʒɛnjuɪnli/",
    example: "Trade does not genuinely help all.",
  },
  geological: {
    meaning: "지질학적",
    pronunciation: "/ˌdʒiːəˈlɑːdʒɪkəl/",
    example: "Geological processes shape the landscape.",
  },
  glaciers: {
    meaning: "빙하",
    pronunciation: "/ˈɡleɪʃərz/",
    example: "Glaciers carved deep mountain valleys.",
  },
  global: {
    meaning: "세계적인",
    pronunciation: "/ˈɡloʊbəl/",
    example: "Global temperatures are rising steadily.",
  },
  governed: {
    meaning: "지배되는",
    pronunciation: "/ˈɡʌvərnd/",
    example: "Migration is governed by instinct.",
  },
  gradually: {
    meaning: "점진적으로",
    pronunciation: "/ˈɡrædʒuəli/",
    example: "Continents gradually shift their positions.",
  },
  gravitational: {
    meaning: "중력의",
    pronunciation: "/ˌɡrævɪˈteɪʃənəl/",
    example: "Gravitational forces hold planets in orbit.",
  },
  growth: {
    meaning: "성장",
    pronunciation: "/ɡroʊθ/",
    example: "Economic growth creates new jobs.",
  },
  habitat: {
    meaning: "서식지",
    pronunciation: "/ˈhæbɪˌtæt/",
    example: "Deforestation destroys animal habitat.",
  },
  harmful: {
    meaning: "해로운",
    pronunciation: "/ˈhɑːrmfəl/",
    example: "Bacteria can be harmful to health.",
  },
  horizon: {
    meaning: "지평선, 경계",
    pronunciation: "/həˈraɪzən/",
    example: "The event horizon traps all light.",
  },
  human: {
    meaning: "인간의",
    pronunciation: "/ˈhjuːmən/",
    example: "Human activity affects the climate.",
  },
  humidity: {
    meaning: "습도",
    pronunciation: "/hjuːˈmɪdɪti/",
    example: "Humidity varies with altitude greatly.",
  },
  hypotheses: {
    meaning: "가설들",
    pronunciation: "/haɪˈpɑːθəˌsiːz/",
    example: "Scientists test multiple hypotheses.",
  },
  identified: {
    meaning: "확인된",
    pronunciation: "/aɪˈdɛntɪˌfaɪd/",
    example: "Researchers identified key risk factors.",
  },
  identify: {
    meaning: "식별하다",
    pronunciation: "/aɪˈdɛntɪˌfaɪ/",
    example: "Cells identify foreign substances quickly.",
  },
  identity: {
    meaning: "정체성",
    pronunciation: "/aɪˈdɛntɪti/",
    example: "Online spaces shape youth identity.",
  },
  immune: {
    meaning: "면역의",
    pronunciation: "/ɪˈmjuːn/",
    example: "The immune system fights disease.",
  },
  improved: {
    meaning: "개선된",
    pronunciation: "/ɪmˈpruːvd/",
    example: "Solar efficiency has greatly improved.",
  },
  increases: {
    meaning: "증가",
    pronunciation: "/ˈɪnkriːsɪz/",
    example: "Sea level increases cause flooding.",
  },
  increasingly: {
    meaning: "점점 더",
    pronunciation: "/ɪnˈkriːsɪŋli/",
    example: "Solar power is increasingly affordable.",
  },
  independently: {
    meaning: "독립적으로",
    pronunciation: "/ˌɪndɪˈpɛndəntli/",
    example: "Agriculture developed independently worldwide.",
  },
  indicate: {
    meaning: "나타내다",
    pronunciation: "/ˈɪndɪˌkeɪt/",
    example: "Results indicate significant improvement.",
  },
  individual: {
    meaning: "개인의",
    pronunciation: "/ˌɪndɪˈvɪdʒuəl/",
    example: "Individual choices affect the environment.",
  },
  industrialized: {
    meaning: "산업화된",
    pronunciation: "/ɪnˈdʌstriəˌlaɪzd/",
    example: "Industrialized nations produce more waste.",
  },
  infections: {
    meaning: "감염",
    pronunciation: "/ɪnˈfɛkʃənz/",
    example: "Bacterial infections can be dangerous.",
  },
  influences: {
    meaning: "영향들",
    pronunciation: "/ˈɪnfluənsɪz/",
    example: "Social conformity influences our decisions.",
  },
  information: {
    meaning: "정보",
    pronunciation: "/ˌɪnfərˈmeɪʃən/",
    example: "The brain processes information daily.",
  },
  injecting: {
    meaning: "주입하는",
    pronunciation: "/ɪnˈdʒɛktɪŋ/",
    example: "Eruptions inject particles into air.",
  },
  innovations: {
    meaning: "혁신",
    pronunciation: "/ˌɪnəˈveɪʃənz/",
    example: "Technological innovations change society.",
  },
  inspired: {
    meaning: "영감을 준",
    pronunciation: "/ɪnˈspaɪərd/",
    example: "Classical works inspired new thinking.",
  },
  institutions: {
    meaning: "기관들",
    pronunciation: "/ˌɪnstɪˈtuːʃənz/",
    example: "Educational institutions provide knowledge.",
  },
  instruments: {
    meaning: "도구, 기기",
    pronunciation: "/ˈɪnstrəmənts/",
    example: "Sensitive instruments detect earthquakes.",
  },
  integrated: {
    meaning: "집적된, 통합된",
    pronunciation: "/ˈɪntɪˌɡreɪtɪd/",
    example: "Integrated circuits power modern devices.",
  },
  intellectual: {
    meaning: "지적인",
    pronunciation: "/ˌɪntəˈlɛktʃuəl/",
    example: "Intellectual traditions shaped the Renaissance.",
  },
  intelligence: {
    meaning: "지능",
    pronunciation: "/ɪnˈtɛlɪdʒəns/",
    example: "Artificial intelligence transforms industries.",
  },
  interaction: {
    meaning: "상호작용",
    pronunciation: "/ˌɪntərˈækʃən/",
    example: "Social interaction occurs online now.",
  },
  international: {
    meaning: "국제적",
    pronunciation: "/ˌɪntərˈnæʃənəl/",
    example: "International trade connects global markets.",
  },
  interpretations: {
    meaning: "해석들",
    pronunciation: "/ɪnˌtɜːrprɪˈteɪʃənz/",
    example: "Religious interpretations were challenged.",
  },
  invading: {
    meaning: "침입하는",
    pronunciation: "/ɪnˈveɪdɪŋ/",
    example: "White blood cells fight invading germs.",
  },
  invention: {
    meaning: "발명",
    pronunciation: "/ɪnˈvɛnʃən/",
    example: "The printing press was a key invention.",
  },
  irrigation: {
    meaning: "관개",
    pronunciation: "/ˌɪrɪˈɡeɪʃən/",
    example: "Irrigation systems water farmland efficiently.",
  },
  judgments: {
    meaning: "판단",
    pronunciation: "/ˈdʒʌdʒmənts/",
    example: "Participants abandoned their own judgments.",
  },
  knowledge: {
    meaning: "지식",
    pronunciation: "/ˈnɑːlɪdʒ/",
    example: "Knowledge spreads through education.",
  },
  landscape: {
    meaning: "지형, 풍경",
    pronunciation: "/ˈlændskeɪp/",
    example: "Glaciers shaped the modern landscape.",
  },
  landmasses: {
    meaning: "대륙 (땅덩어리)",
    pronunciation: "/ˈlændˌmæsɪz/",
    example: "Continental landmasses drift over time.",
  },
  language: {
    meaning: "언어",
    pronunciation: "/ˈlæŋɡwɪdʒ/",
    example: "Language shapes how we think.",
  },
  layers: {
    meaning: "층",
    pronunciation: "/ˈleɪərz/",
    example: "The immune system has multiple layers.",
  },
  learning: {
    meaning: "학습",
    pronunciation: "/ˈlɜːrnɪŋ/",
    example: "Machine learning finds hidden patterns.",
  },
  libraries: {
    meaning: "도서관들",
    pronunciation: "/ˈlaɪˌbrɛriz/",
    example: "Monastic libraries held rare manuscripts.",
  },
  lifetime: {
    meaning: "생애",
    pronunciation: "/ˈlaɪfˌtaɪm/",
    example: "The brain changes throughout a lifetime.",
  },
  linguists: {
    meaning: "언어학자들",
    pronunciation: "/ˈlɪŋɡwɪsts/",
    example: "Linguists study language development patterns.",
  },
  liquid: {
    meaning: "액체의",
    pronunciation: "/ˈlɪkwɪd/",
    example: "Liquid water once flowed on Mars.",
  },
  luxury: {
    meaning: "사치품",
    pronunciation: "/ˈlʌkʃəri/",
    example: "Merchants traded luxury goods globally.",
  },
  machines: {
    meaning: "기계들",
    pronunciation: "/məˈʃiːnz/",
    example: "Quantum machines solve complex problems.",
  },
  magnetic: {
    meaning: "자기의",
    pronunciation: "/mæɡˈnɛtɪk/",
    example: "Birds sense magnetic fields for navigation.",
  },
  major: {
    meaning: "주요한",
    pronunciation: "/ˈmeɪdʒər/",
    example: "Pollution is a major global issue.",
  },
  management: {
    meaning: "관리",
    pronunciation: "/ˈmænɪdʒmənt/",
    example: "Soil management improves crop yields.",
  },
  manuscripts: {
    meaning: "원고, 필사본",
    pronunciation: "/ˈmænjəˌskrɪpts/",
    example: "Ancient manuscripts preserved valuable knowledge.",
  },
  manufacturing: {
    meaning: "제조",
    pronunciation: "/ˌmænjəˈfæktʃərɪŋ/",
    example: "Manufacturing costs have decreased sharply.",
  },
  marine: {
    meaning: "해양의",
    pronunciation: "/məˈriːn/",
    example: "Marine ecosystems face pollution threats.",
  },
  massive: {
    meaning: "거대한",
    pronunciation: "/ˈmæsɪv/",
    example: "Massive plates move beneath Earth.",
  },
  material: {
    meaning: "물질, 자료",
    pronunciation: "/məˈtɪriəl/",
    example: "Learned material is consolidated during sleep.",
  },
  materials: {
    meaning: "물질들",
    pronunciation: "/məˈtɪriəlz/",
    example: "Synthetic materials persist in oceans.",
  },
  matter: {
    meaning: "물질",
    pronunciation: "/ˈmætər/",
    example: "All matter originated from one point.",
  },
  measurable: {
    meaning: "측정 가능한",
    pronunciation: "/ˈmɛʒərəbəl/",
    example: "Sea level rise is now measurable.",
  },
  measure: {
    meaning: "측정하다",
    pronunciation: "/ˈmɛʒər/",
    example: "Seismographs measure ground vibrations.",
  },
  mechanical: {
    meaning: "역학적",
    pronunciation: "/mɪˈkænɪkəl/",
    example: "Quantum mechanical effects enable computing.",
  },
  medical: {
    meaning: "의학의",
    pronunciation: "/ˈmɛdɪkəl/",
    example: "Medical practice has been transformed.",
  },
  melting: {
    meaning: "녹는, 용해",
    pronunciation: "/ˈmɛltɪŋ/",
    example: "Ice melting raises sea levels.",
  },
  members: {
    meaning: "구성원들",
    pronunciation: "/ˈmɛmbərz/",
    example: "Group members influence individual decisions.",
  },
  memory: {
    meaning: "기억",
    pronunciation: "/ˈmɛməri/",
    example: "Memory improves with adequate sleep.",
  },
  merchants: {
    meaning: "상인들",
    pronunciation: "/ˈmɜːrtʃənts/",
    example: "Merchants traveled the Silk Road.",
  },
  metropolitan: {
    meaning: "대도시의",
    pronunciation: "/ˌmɛtrəˈpɑːlɪtən/",
    example: "Metropolitan centers attract rural migrants.",
  },
  microclimates: {
    meaning: "미기후",
    pronunciation: "/ˈmaɪkroʊˌklaɪmɪts/",
    example: "Canopies create distinct microclimates.",
  },
  microscopic: {
    meaning: "현미경적",
    pronunciation: "/ˌmaɪkrəˈskɑːpɪk/",
    example: "Microscopic plastic pollutes all oceans.",
  },
  microorganisms: {
    meaning: "미생물",
    pronunciation: "/ˌmaɪkroʊˈɔːrɡəˌnɪzəmz/",
    example: "Microorganisms produce natural antibiotics.",
  },
  migration: {
    meaning: "이주, 이동",
    pronunciation: "/maɪˈɡreɪʃən/",
    example: "Bird migration follows seasonal patterns.",
  },
  migrated: {
    meaning: "이주한",
    pronunciation: "/ˈmaɪɡreɪtɪd/",
    example: "Rural populations migrated to cities.",
  },
  mineral: {
    meaning: "광물의",
    pronunciation: "/ˈmɪnərəl/",
    example: "Mineral deposits indicate past water.",
  },
  miniaturization: {
    meaning: "소형화",
    pronunciation: "/ˌmɪniətʃərɪˈzeɪʃən/",
    example: "Miniaturization made computers portable.",
  },
  missions: {
    meaning: "임무들",
    pronunciation: "/ˈmɪʃənz/",
    example: "Robotic missions explored Mars successfully.",
  },
  mobility: {
    meaning: "이동성",
    pronunciation: "/moʊˈbɪlɪti/",
    example: "Economic mobility attracts young workers.",
  },
  moderates: {
    meaning: "완화하다",
    pronunciation: "/ˈmɑːdəˌreɪts/",
    example: "The Gulf Stream moderates winter cold.",
  },
  modern: {
    meaning: "현대의",
    pronunciation: "/ˈmɑːdərn/",
    example: "Modern technology transforms daily life.",
  },
  molecular: {
    meaning: "분자의",
    pronunciation: "/məˈlɛkjələr/",
    example: "Molecular patterns help identify pathogens.",
  },
  molecules: {
    meaning: "분자들",
    pronunciation: "/ˈmɑːlɪˌkjuːlz/",
    example: "Enzymes bind to substrate molecules.",
  },
  monastic: {
    meaning: "수도원의",
    pronunciation: "/məˈnæstɪk/",
    example: "Monastic libraries preserved ancient texts.",
  },
  mortality: {
    meaning: "사망률",
    pronunciation: "/mɔːrˈtælɪti/",
    example: "Infections caused widespread mortality.",
  },
  movement: {
    meaning: "움직임",
    pronunciation: "/ˈmuːvmənt/",
    example: "Plate movement causes earthquakes.",
  },
  multiple: {
    meaning: "다수의",
    pronunciation: "/ˈmʌltɪpəl/",
    example: "The body uses multiple defense layers.",
  },
  narrowing: {
    meaning: "좁아지는",
    pronunciation: "/ˈnæroʊɪŋ/",
    example: "Infants start narrowing vocal sounds.",
  },
  nations: {
    meaning: "국가들",
    pronunciation: "/ˈneɪʃənz/",
    example: "Developing nations urbanize rapidly.",
  },
  naturally: {
    meaning: "자연적으로",
    pronunciation: "/ˈnætʃərəli/",
    example: "Some compounds occur naturally.",
  },
  navigate: {
    meaning: "항해하다",
    pronunciation: "/ˈnævɪˌɡeɪt/",
    example: "Birds navigate using the stars.",
  },
  network: {
    meaning: "네트워크",
    pronunciation: "/ˈnɛtˌwɜːrk/",
    example: "Trade routes formed a vast network.",
  },
  neural: {
    meaning: "신경의",
    pronunciation: "/ˈnʊrəl/",
    example: "Neural pathways change with learning.",
  },
  neuroscience: {
    meaning: "신경과학",
    pronunciation: "/ˈnʊroʊˌsaɪəns/",
    example: "Neuroscience studies the brain's functions.",
  },
  numerous: {
    meaning: "수많은",
    pronunciation: "/ˈnuːmərəs/",
    example: "Solar is competitive in numerous markets.",
  },
  observed: {
    meaning: "관찰한",
    pronunciation: "/əbˈzɜːrvd/",
    example: "Scientists observed tectonic plate movement.",
  },
  occurring: {
    meaning: "발생하는",
    pronunciation: "/əˈkɜːrɪŋ/",
    example: "Naturally occurring compounds fight infection.",
  },
  occupying: {
    meaning: "차지하는",
    pronunciation: "/ˈɑːkjəˌpaɪɪŋ/",
    example: "Reefs occupy small ocean areas.",
  },
  online: {
    meaning: "온라인의",
    pronunciation: "/ˈɑːnˌlaɪn/",
    example: "Online platforms connect people globally.",
  },
  opinions: {
    meaning: "의견들",
    pronunciation: "/əˈpɪnjənz/",
    example: "Group opinions influence individual choices.",
  },
  opportunities: {
    meaning: "기회들",
    pronunciation: "/ˌɑːpərˈtuːnɪtiz/",
    example: "Employment opportunities attract migrants.",
  },
  organic: {
    meaning: "유기적",
    pronunciation: "/ɔːrˈɡænɪk/",
    example: "Organic compounds contain carbon atoms.",
  },
  organisms: {
    meaning: "유기체, 생물",
    pronunciation: "/ˈɔːrɡəˌnɪzəmz/",
    example: "All organisms need energy to live.",
  },
  organizes: {
    meaning: "조직하다",
    pronunciation: "/ˈɔːrɡəˌnaɪzɪz/",
    example: "The brain organizes information during sleep.",
  },
  originated: {
    meaning: "기원한",
    pronunciation: "/əˈrɪdʒɪˌneɪtɪd/",
    example: "All matter originated from one point.",
  },
  origins: {
    meaning: "기원",
    pronunciation: "/ˈɔːrɪdʒɪnz/",
    example: "Cosmic origins fascinate astronomers.",
  },
  otherwise: {
    meaning: "그렇지 않으면",
    pronunciation: "/ˈʌðərˌwaɪz/",
    example: "Otherwise the region would be colder.",
  },
  overlook: {
    meaning: "간과하다",
    pronunciation: "/ˌoʊvərˈlʊk/",
    example: "Analysts might overlook subtle patterns.",
  },
  paleontology: {
    meaning: "고생물학",
    pronunciation: "/ˌpeɪliɑːnˈtɑːlədʒi/",
    example: "Paleontology studies ancient life forms.",
  },
  panels: {
    meaning: "패널, 판",
    pronunciation: "/ˈpænəlz/",
    example: "Solar panels capture sunlight efficiently.",
  },
  participants: {
    meaning: "참가자들",
    pronunciation: "/pɑːrˈtɪsɪpənts/",
    example: "Participants changed answers under pressure.",
  },
  particulate: {
    meaning: "미립자의",
    pronunciation: "/pɑːrˈtɪkjəlɪt/",
    example: "Particulate matter pollutes the atmosphere.",
  },
  particles: {
    meaning: "입자들",
    pronunciation: "/ˈpɑːrtɪkəlz/",
    example: "Sulfur particles reflect solar radiation.",
  },
  pathogens: {
    meaning: "병원체",
    pronunciation: "/ˈpæθədʒənz/",
    example: "The body defends against pathogens.",
  },
  pathways: {
    meaning: "경로",
    pronunciation: "/ˈpæθˌweɪz/",
    example: "Neural pathways reorganize through learning.",
  },
  patterns: {
    meaning: "패턴, 양상",
    pronunciation: "/ˈpætərnz/",
    example: "Migration patterns follow the seasons.",
  },
  penetrates: {
    meaning: "관통하다",
    pronunciation: "/ˈpɛnɪˌtreɪts/",
    example: "Sunlight penetrates the canopy above.",
  },
  perform: {
    meaning: "수행하다",
    pronunciation: "/pərˈfɔːrm/",
    example: "Quantum computers perform calculations faster.",
  },
  persistent: {
    meaning: "지속적인",
    pronunciation: "/pərˈsɪstənt/",
    example: "Plastic is a persistent pollutant.",
  },
  phenomena: {
    meaning: "현상들",
    pronunciation: "/fɪˈnɑːmɪnə/",
    example: "Quantum phenomena defy common intuition.",
  },
  philosophical: {
    meaning: "철학적",
    pronunciation: "/ˌfɪləˈsɑːfɪkəl/",
    example: "Philosophical works inspired the Renaissance.",
  },
  phonetic: {
    meaning: "음성학적",
    pronunciation: "/fəˈnɛtɪk/",
    example: "Infants learn phonetic patterns early.",
  },
  photosynthesis: {
    meaning: "광합성",
    pronunciation: "/ˌfoʊtoʊˈsɪnθəsɪs/",
    example: "Photosynthesis converts sunlight into energy.",
  },
  photovoltaic: {
    meaning: "태양광 발전의",
    pronunciation: "/ˌfoʊtoʊvɑːlˈteɪɪk/",
    example: "Photovoltaic systems generate clean power.",
  },
  physical: {
    meaning: "물리적",
    pronunciation: "/ˈfɪzɪkəl/",
    example: "Physical gatherings are declining in use.",
  },
  planetary: {
    meaning: "행성의",
    pronunciation: "/ˈplænɪˌtɛri/",
    example: "The planetary surface contains frozen water.",
  },
  plasticity: {
    meaning: "가소성",
    pronunciation: "/plæˈstɪsɪti/",
    example: "Brain plasticity enables lifelong learning.",
  },
  platforms: {
    meaning: "플랫폼",
    pronunciation: "/ˈplætˌfɔːrmz/",
    example: "Online platforms replace physical spaces.",
  },
  polar: {
    meaning: "극지의",
    pronunciation: "/ˈpoʊlər/",
    example: "Polar ice is melting rapidly.",
  },
  pollution: {
    meaning: "오염",
    pronunciation: "/pəˈluːʃən/",
    example: "Plastic pollution threatens marine life.",
  },
  populations: {
    meaning: "인구, 개체군",
    pronunciation: "/ˌpɑːpjəˈleɪʃənz/",
    example: "Rural populations migrated to cities.",
  },
  positions: {
    meaning: "위치들",
    pronunciation: "/pəˈzɪʃənz/",
    example: "Continents shift their positions slowly.",
  },
  potential: {
    meaning: "잠재적",
    pronunciation: "/pəˈtɛnʃəl/",
    example: "Mars has potential for human settlement.",
  },
  powerful: {
    meaning: "강력한",
    pronunciation: "/ˈpaʊərfəl/",
    example: "Black holes have powerful gravity.",
  },
  practice: {
    meaning: "관행, 실천",
    pronunciation: "/ˈpræktɪs/",
    example: "Medical practice changed with antibiotics.",
  },
  practices: {
    meaning: "관행들",
    pronunciation: "/ˈpræktɪsɪz/",
    example: "Sustainable practices protect the environment.",
  },
  predicted: {
    meaning: "예측된",
    pronunciation: "/prɪˈdɪktɪd/",
    example: "Relativity predicted black holes exist.",
  },
  predictions: {
    meaning: "예측",
    pronunciation: "/prɪˈdɪkʃənz/",
    example: "AI enables more accurate predictions.",
  },
  presence: {
    meaning: "존재",
    pronunciation: "/ˈprɛzəns/",
    example: "Water presence was confirmed on Mars.",
  },
  preservation: {
    meaning: "보존",
    pronunciation: "/ˌprɛzərˈveɪʃən/",
    example: "Habitat preservation protects biodiversity.",
  },
  previously: {
    meaning: "이전에",
    pronunciation: "/ˈpriːviəsli/",
    example: "Texts were previously hand-copied only.",
  },
  primarily: {
    meaning: "주로",
    pronunciation: "/praɪˈmɛrəli/",
    example: "Consolidation happens primarily during sleep.",
  },
  primary: {
    meaning: "주요한, 1차의",
    pronunciation: "/ˈpraɪˌmɛri/",
    example: "Seismic primary waves arrive first.",
  },
  printing: {
    meaning: "인쇄",
    pronunciation: "/ˈprɪntɪŋ/",
    example: "The printing press spread knowledge.",
  },
  process: {
    meaning: "과정",
    pronunciation: "/ˈprɑːsɛs/",
    example: "Photosynthesis is a vital process.",
  },
  processes: {
    meaning: "과정들",
    pronunciation: "/ˈprɑːsɛsɪz/",
    example: "Geological processes shape the Earth.",
  },
  processing: {
    meaning: "처리",
    pronunciation: "/ˈprɑːsɛsɪŋ/",
    example: "Data processing requires fast computers.",
  },
  produced: {
    meaning: "생산된",
    pronunciation: "/prəˈduːst/",
    example: "Compounds produced by microorganisms help.",
  },
  producing: {
    meaning: "생산하는",
    pronunciation: "/prəˈduːsɪŋ/",
    example: "Infants begin producing babbling sounds.",
  },
  production: {
    meaning: "생산",
    pronunciation: "/prəˈdʌkʃən/",
    example: "Factory production replaced craft workshops.",
  },
  products: {
    meaning: "산물, 제품",
    pronunciation: "/ˈprɑːdʌkts/",
    example: "Chemical products form after reactions.",
  },
  professional: {
    meaning: "전문적",
    pronunciation: "/prəˈfɛʃənəl/",
    example: "Professional advancement requires education.",
  },
  profound: {
    meaning: "심오한",
    pronunciation: "/prəˈfaʊnd/",
    example: "The Renaissance marked a profound shift.",
  },
  programming: {
    meaning: "프로그래밍",
    pronunciation: "/ˈproʊɡræmɪŋ/",
    example: "Genetic programming guides bird migration.",
  },
  promote: {
    meaning: "촉진하다",
    pronunciation: "/prəˈmoʊt/",
    example: "Trade agreements promote economic growth.",
  },
  quantities: {
    meaning: "양",
    pronunciation: "/ˈkwɑːntɪtiz/",
    example: "Volcanoes release enormous gas quantities.",
  },
  quantum: {
    meaning: "양자의",
    pronunciation: "/ˈkwɑːntəm/",
    example: "Quantum computing uses new principles.",
  },
  radiation: {
    meaning: "방사선, 복사",
    pronunciation: "/ˌreɪdiˈeɪʃən/",
    example: "Solar radiation heats the Earth.",
  },
  rapidly: {
    meaning: "빠르게",
    pronunciation: "/ˈræpɪdli/",
    example: "Technology advanced rapidly last decade.",
  },
  reactions: {
    meaning: "반응들",
    pronunciation: "/riˈækʃənz/",
    example: "Enzymes speed up chemical reactions.",
  },
  recall: {
    meaning: "회상, 기억해내기",
    pronunciation: "/rɪˈkɔːl/",
    example: "Sleep helps with memory recall.",
  },
  recognition: {
    meaning: "인식",
    pronunciation: "/ˌrɛkəɡˈnɪʃən/",
    example: "Pattern recognition is AI's strength.",
  },
  recognizing: {
    meaning: "인식하는",
    pronunciation: "/ˈrɛkəɡˌnaɪzɪŋ/",
    example: "Cells work by recognizing molecular patterns.",
  },
  rediscovered: {
    meaning: "재발견한",
    pronunciation: "/ˌriːdɪˈskʌvərd/",
    example: "Scholars rediscovered classical Greek works.",
  },
  reduced: {
    meaning: "감소된",
    pronunciation: "/rɪˈduːst/",
    example: "Reduced tariffs increase trade volume.",
  },
  reducing: {
    meaning: "줄이는",
    pronunciation: "/rɪˈduːsɪŋ/",
    example: "Technology is reducing manufacturing costs.",
  },
  reef: {
    meaning: "산호초",
    pronunciation: "/riːf/",
    example: "The coral reef supports marine life.",
  },
  reflect: {
    meaning: "반사하다",
    pronunciation: "/rɪˈflɛkt/",
    example: "Particles reflect solar radiation upward.",
  },
  regarding: {
    meaning: "~에 관하여",
    pronunciation: "/rɪˈɡɑːrdɪŋ/",
    example: "Debates continue regarding trade policy.",
  },
  regions: {
    meaning: "지역들",
    pronunciation: "/ˈriːdʒənz/",
    example: "Tropical regions face deforestation threats.",
  },
  regulating: {
    meaning: "조절하는",
    pronunciation: "/ˈrɛɡjəˌleɪtɪŋ/",
    example: "Ocean currents help in regulating climate.",
  },
  relativity: {
    meaning: "상대성 이론",
    pronunciation: "/ˌrɛləˈtɪvɪti/",
    example: "General relativity predicts black holes.",
  },
  release: {
    meaning: "방출하다",
    pronunciation: "/rɪˈliːs/",
    example: "Volcanoes release gases into the air.",
  },
  religious: {
    meaning: "종교적",
    pronunciation: "/rɪˈlɪdʒəs/",
    example: "Religious ideas spread along trade routes.",
  },
  remarkably: {
    meaning: "놀랍게도",
    pronunciation: "/rɪˈmɑːrkəbli/",
    example: "Language development is remarkably consistent.",
  },
  remarkable: {
    meaning: "놀라운",
    pronunciation: "/rɪˈmɑːrkəbəl/",
    example: "The brain shows remarkable plasticity.",
  },
  remnants: {
    meaning: "잔존물",
    pronunciation: "/ˈrɛmnənts/",
    example: "Grain remnants reveal ancient farming.",
  },
  renewable: {
    meaning: "재생 가능한",
    pronunciation: "/rɪˈnuːəbəl/",
    example: "Renewable energy reduces carbon emissions.",
  },
  reorganize: {
    meaning: "재조직하다",
    pronunciation: "/riːˈɔːrɡəˌnaɪz/",
    example: "Neural pathways can reorganize themselves.",
  },
  replaced: {
    meaning: "대체한",
    pronunciation: "/rɪˈpleɪst/",
    example: "Factories replaced traditional workshops.",
  },
  replacing: {
    meaning: "대체하는",
    pronunciation: "/rɪˈpleɪsɪŋ/",
    example: "Online spaces are replacing physical ones.",
  },
  repertoire: {
    meaning: "레퍼토리",
    pronunciation: "/ˈrɛpərˌtwɑːr/",
    example: "Infants narrow their vocal repertoire.",
  },
  reproduction: {
    meaning: "번식",
    pronunciation: "/ˌriːprəˈdʌkʃən/",
    example: "Reefs are essential for fish reproduction.",
  },
  reproductions: {
    meaning: "복제물",
    pronunciation: "/ˌriːprəˈdʌkʃənz/",
    example: "Hand-copied reproductions were expensive.",
  },
  require: {
    meaning: "필요로 하다",
    pronunciation: "/rɪˈkwaɪər/",
    example: "Complex tasks require deep analysis.",
  },
  research: {
    meaning: "연구",
    pronunciation: "/rɪˈsɜːrtʃ/",
    example: "Neuroscience research reveals new insights.",
  },
  researchers: {
    meaning: "연구자들",
    pronunciation: "/rɪˈsɜːrtʃərz/",
    example: "Researchers documented pollution patterns.",
  },
  residential: {
    meaning: "주거의",
    pronunciation: "/ˌrɛzɪˈdɛnʃəl/",
    example: "Residential districts grew around factories.",
  },
  resources: {
    meaning: "자원",
    pronunciation: "/ˈriːsɔːrsɪz/",
    example: "Natural resources are limited.",
  },
  response: {
    meaning: "반응",
    pronunciation: "/rɪˈspɑːns/",
    example: "Learning triggers a neural response.",
  },
  revealed: {
    meaning: "밝혀진",
    pronunciation: "/rɪˈviːld/",
    example: "Research revealed brain plasticity exists.",
  },
  revolution: {
    meaning: "혁명",
    pronunciation: "/ˌrɛvəˈluːʃən/",
    example: "The Industrial Revolution changed society.",
  },
  revolutionized: {
    meaning: "혁명을 일으킨",
    pronunciation: "/ˌrɛvəˈluːʃəˌnaɪzd/",
    example: "Plate tectonics revolutionized geology.",
  },
  robotic: {
    meaning: "로봇의",
    pronunciation: "/roʊˈbɑːtɪk/",
    example: "Robotic missions explored the planet.",
  },
  rupture: {
    meaning: "파열",
    pronunciation: "/ˈrʌptʃər/",
    example: "Waves spread from the rupture point.",
  },
  samples: {
    meaning: "표본들",
    pronunciation: "/ˈsæmpəlz/",
    example: "Water samples revealed plastic pollution.",
  },
  scholars: {
    meaning: "학자들",
    pronunciation: "/ˈskɑːlərz/",
    example: "Scholars rediscovered ancient Greek texts.",
  },
  scientific: {
    meaning: "과학적",
    pronunciation: "/ˌsaɪənˈtɪfɪk/",
    example: "Scientific methods ensure accuracy.",
  },
  scientists: {
    meaning: "과학자들",
    pronunciation: "/ˈsaɪəntɪsts/",
    example: "Scientists study climate change effects.",
  },
  seasonal: {
    meaning: "계절의",
    pronunciation: "/ˈsiːzənəl/",
    example: "Seasonal floods enriched the soil.",
  },
  secondary: {
    meaning: "2차의",
    pronunciation: "/ˈsɛkənˌdɛri/",
    example: "Secondary waves follow primary ones.",
  },
  sediment: {
    meaning: "퇴적물",
    pronunciation: "/ˈsɛdɪmənt/",
    example: "Glaciers deposited sediment across continents.",
  },
  seismographs: {
    meaning: "지진계",
    pronunciation: "/ˈsaɪzməˌɡræfs/",
    example: "Seismographs measure earthquake vibrations.",
  },
  seismologists: {
    meaning: "지진학자",
    pronunciation: "/saɪzˈmɑːlədʒɪsts/",
    example: "Seismologists study earthquake patterns.",
  },
  semiconductor: {
    meaning: "반도체",
    pronunciation: "/ˌsɛmikənˈdʌktər/",
    example: "Semiconductor chips power all electronics.",
  },
  sensitive: {
    meaning: "민감한",
    pronunciation: "/ˈsɛnsɪtɪv/",
    example: "Sensitive instruments detect tiny vibrations.",
  },
  sensitivity: {
    meaning: "민감성",
    pronunciation: "/ˌsɛnsɪˈtɪvɪti/",
    example: "Birds show sensitivity to magnetic fields.",
  },
  settlement: {
    meaning: "정착지",
    pronunciation: "/ˈsɛtəlmənt/",
    example: "Mars could support human settlement.",
  },
  significantly: {
    meaning: "상당히",
    pronunciation: "/sɪɡˈnɪfɪkəntli/",
    example: "Results improved significantly with rest.",
  },
  significant: {
    meaning: "중요한",
    pronunciation: "/sɪɡˈnɪfɪkənt/",
    example: "Climate change is a significant threat.",
  },
  simultaneously: {
    meaning: "동시에",
    pronunciation: "/ˌsaɪməlˈteɪniəsli/",
    example: "Trade routes simultaneously spread ideas.",
  },
  singular: {
    meaning: "단일의",
    pronunciation: "/ˈsɪŋɡjələr/",
    example: "Matter originated from a singular point.",
  },
  society: {
    meaning: "사회",
    pronunciation: "/səˈsaɪəti/",
    example: "Technology transforms modern society daily.",
  },
  societies: {
    meaning: "사회들",
    pronunciation: "/səˈsaɪətiz/",
    example: "European societies adopted new ideas.",
  },
  social: {
    meaning: "사회적",
    pronunciation: "/ˈsoʊʃəl/",
    example: "Social conformity affects decision making.",
  },
  sophisticated: {
    meaning: "정교한",
    pronunciation: "/səˈfɪstɪˌkeɪtɪd/",
    example: "Ancient farmers had sophisticated knowledge.",
  },
  sources: {
    meaning: "원천, 출처",
    pronunciation: "/ˈsɔːrsɪz/",
    example: "Renewable energy sources are expanding.",
  },
  spacetime: {
    meaning: "시공간",
    pronunciation: "/ˈspeɪsˌtaɪm/",
    example: "Black holes warp spacetime dramatically.",
  },
  species: {
    meaning: "종",
    pronunciation: "/ˈspiːʃiːz/",
    example: "Many species face extinction threats.",
  },
  specialized: {
    meaning: "특화된",
    pronunciation: "/ˈspɛʃəˌlaɪzd/",
    example: "Chloroplasts are specialized cell structures.",
  },
  specific: {
    meaning: "특정한",
    pronunciation: "/spɪˈsɪfɪk/",
    example: "Each enzyme targets specific substrates.",
  },
  spices: {
    meaning: "향신료",
    pronunciation: "/ˈspaɪsɪz/",
    example: "Merchants traded silk and spices.",
  },
  stages: {
    meaning: "단계들",
    pronunciation: "/ˈsteɪdʒɪz/",
    example: "Memory consolidation has specific stages.",
  },
  stellar: {
    meaning: "항성의",
    pronunciation: "/ˈstɛlər/",
    example: "A collapsed stellar core forms densely.",
  },
  stimulation: {
    meaning: "자극",
    pronunciation: "/ˌstɪmjəˈleɪʃən/",
    example: "Environmental stimulation changes neural pathways.",
  },
  stratosphere: {
    meaning: "성층권",
    pronunciation: "/ˈstrætəˌsfɪr/",
    example: "Sulfur enters the stratosphere after eruptions.",
  },
  stress: {
    meaning: "압력, 스트레스",
    pronunciation: "/strɛs/",
    example: "Accumulated stress causes fault ruptures.",
  },
  structures: {
    meaning: "구조들",
    pronunciation: "/ˈstrʌktʃərz/",
    example: "Economic structures changed during industrialization.",
  },
  studies: {
    meaning: "연구들",
    pronunciation: "/ˈstʌdiz/",
    example: "Studies show sleep improves memory.",
  },
  substances: {
    meaning: "물질들",
    pronunciation: "/ˈsʌbstənsɪz/",
    example: "Immune cells detect foreign substances.",
  },
  substrate: {
    meaning: "기질",
    pronunciation: "/ˈsʌbˌstreɪt/",
    example: "Enzymes bind to specific substrates.",
  },
  substantially: {
    meaning: "상당히",
    pronunciation: "/səbˈstænʃəli/",
    example: "Costs decreased substantially over time.",
  },
  subtle: {
    meaning: "미묘한",
    pronunciation: "/ˈsʌtəl/",
    example: "AI detects subtle data correlations.",
  },
  suggests: {
    meaning: "시사하다",
    pronunciation: "/səɡˈdʒɛsts/",
    example: "Evidence suggests early agriculture existed.",
  },
  sulfur: {
    meaning: "황",
    pronunciation: "/ˈsʌlfər/",
    example: "Sulfur dioxide blocks incoming sunlight.",
  },
  sunlight: {
    meaning: "햇빛",
    pronunciation: "/ˈsʌnˌlaɪt/",
    example: "Plants absorb sunlight for energy.",
  },
  superposition: {
    meaning: "중첩 (양자)",
    pronunciation: "/ˌsuːpərpəˈzɪʃən/",
    example: "Superposition allows multiple states simultaneously.",
  },
  support: {
    meaning: "지원하다",
    pronunciation: "/səˈpɔːrt/",
    example: "Coral reefs support marine species.",
  },
  surface: {
    meaning: "표면",
    pronunciation: "/ˈsɜːrfɪs/",
    example: "Water exists beneath the surface.",
  },
  surrounding: {
    meaning: "주변의",
    pronunciation: "/səˈraʊndɪŋ/",
    example: "Surrounding rock breaks under stress.",
  },
  sustainable: {
    meaning: "지속 가능한",
    pronunciation: "/səˈsteɪnəbəl/",
    example: "Sustainable practices protect the environment.",
  },
  synthetic: {
    meaning: "합성의",
    pronunciation: "/sɪnˈθɛtɪk/",
    example: "Synthetic materials persist in oceans.",
  },
  systems: {
    meaning: "체계, 시스템",
    pronunciation: "/ˈsɪstəmz/",
    example: "Irrigation systems support agriculture.",
  },
  tariff: {
    meaning: "관세",
    pronunciation: "/ˈtærɪf/",
    example: "Reduced tariff barriers boost trade.",
  },
  techniques: {
    meaning: "기법들",
    pronunciation: "/tɛkˈniːks/",
    example: "Farming techniques evolved over centuries.",
  },
  technologies: {
    meaning: "기술들",
    pronunciation: "/tɛkˈnɑːlədʒiz/",
    example: "Renewable energy technologies keep improving.",
  },
  technological: {
    meaning: "기술적",
    pronunciation: "/ˌtɛknəˈlɑːdʒɪkəl/",
    example: "Technological innovations transform industries.",
  },
  technology: {
    meaning: "기술",
    pronunciation: "/tɛkˈnɑːlədʒi/",
    example: "Semiconductor technology enabled miniaturization.",
  },
  tectonics: {
    meaning: "판 구조론",
    pronunciation: "/tɛkˈtɑːnɪks/",
    example: "Plate tectonics explains continental drift.",
  },
  temperature: {
    meaning: "온도",
    pronunciation: "/ˈtɛmpərətʃər/",
    example: "Global temperature is rising steadily.",
  },
  temperatures: {
    meaning: "온도들",
    pronunciation: "/ˈtɛmpərətʃərz/",
    example: "Rising temperatures melt polar ice.",
  },
  temporary: {
    meaning: "일시적",
    pronunciation: "/ˈtɛmpəˌrɛri/",
    example: "Eruptions caused temporary global cooling.",
  },
  thermal: {
    meaning: "열의",
    pronunciation: "/ˈθɜːrməl/",
    example: "Ocean currents distribute thermal energy.",
  },
  tissues: {
    meaning: "조직",
    pronunciation: "/ˈtɪʃuːz/",
    example: "Healthy tissues are protected by immunity.",
  },
  tools: {
    meaning: "도구들",
    pronunciation: "/tuːlz/",
    example: "Ancient farming tools were discovered.",
  },
  traditional: {
    meaning: "전통적인",
    pronunciation: "/trəˈdɪʃənəl/",
    example: "Traditional crafts were replaced by factories.",
  },
  trading: {
    meaning: "교역",
    pronunciation: "/ˈtreɪdɪŋ/",
    example: "Trading routes connected distant civilizations.",
  },
  transformation: {
    meaning: "변환, 변혁",
    pronunciation: "/ˌtrænsfɔːrˈmeɪʃən/",
    example: "The Renaissance was a cultural transformation.",
  },
  transformed: {
    meaning: "변혁시킨",
    pronunciation: "/trænsˈfɔːrmd/",
    example: "Antibiotics transformed medical practice.",
  },
  transistors: {
    meaning: "트랜지스터",
    pronunciation: "/trænˈzɪstərz/",
    example: "Transistor counts doubled every two years.",
  },
  transported: {
    meaning: "운송한",
    pronunciation: "/trænˈspɔːrtɪd/",
    example: "Merchants transported silk along trade routes.",
  },
  transports: {
    meaning: "운반하다",
    pronunciation: "/trænˈspɔːrts/",
    example: "The Gulf Stream transports warm water.",
  },
  tropical: {
    meaning: "열대의",
    pronunciation: "/ˈtrɑːpɪkəl/",
    example: "Tropical forests contain rich biodiversity.",
  },
  unanimous: {
    meaning: "만장일치의",
    pronunciation: "/juːˈnænɪməs/",
    example: "Unanimous opinions swayed the participant.",
  },
  understanding: {
    meaning: "이해",
    pronunciation: "/ˌʌndərˈstændɪŋ/",
    example: "Tectonics changed our understanding of Earth.",
  },
  unique: {
    meaning: "독특한",
    pronunciation: "/juːˈniːk/",
    example: "Each microclimate supports unique organisms.",
  },
  uniquely: {
    meaning: "독특하게",
    pronunciation: "/juːˈniːkli/",
    example: "Each enzyme is uniquely shaped.",
  },
  universal: {
    meaning: "보편적",
    pronunciation: "/ˌjuːnɪˈvɜːrsəl/",
    example: "Babbling sounds are universal among infants.",
  },
  universe: {
    meaning: "우주",
    pronunciation: "/ˈjuːnɪˌvɜːrs/",
    example: "The universe keeps expanding outward.",
  },
  unprecedented: {
    meaning: "전례 없는",
    pronunciation: "/ʌnˈprɛsɪˌdɛntɪd/",
    example: "Scholars gained unprecedented access to texts.",
  },
  urban: {
    meaning: "도시의",
    pronunciation: "/ˈɜːrbən/",
    example: "Urban centers attract rural migrants.",
  },
  urbanization: {
    meaning: "도시화",
    pronunciation: "/ˌɜːrbənɪˈzeɪʃən/",
    example: "Urbanization changes demographic patterns.",
  },
  valleys: {
    meaning: "계곡들",
    pronunciation: "/ˈvæliz/",
    example: "Glaciers carved deep mountain valleys.",
  },
  vegetation: {
    meaning: "식생",
    pronunciation: "/ˌvɛdʒɪˈteɪʃən/",
    example: "Dense vegetation covers the forest floor.",
  },
  velocities: {
    meaning: "속도들",
    pronunciation: "/vəˈlɑːsɪtiz/",
    example: "Galaxies move at accelerating velocities.",
  },
  vertical: {
    meaning: "수직의",
    pronunciation: "/ˈvɜːrtɪkəl/",
    example: "Organisms live at different vertical levels.",
  },
  vibrations: {
    meaning: "진동",
    pronunciation: "/vaɪˈbreɪʃənz/",
    example: "Seismographs detect ground vibrations.",
  },
  visible: {
    meaning: "보이는",
    pronunciation: "/ˈvɪzɪbəl/",
    example: "Geological features remain visible today.",
  },
  vocal: {
    meaning: "음성의",
    pronunciation: "/ˈvoʊkəl/",
    example: "Infants narrow their vocal repertoire.",
  },
  volcanic: {
    meaning: "화산의",
    pronunciation: "/vɑːlˈkænɪk/",
    example: "Volcanic eruptions release harmful gases.",
  },
  widespread: {
    meaning: "광범위한",
    pronunciation: "/ˈwaɪdˌsprɛd/",
    example: "Infections caused widespread mortality.",
  },
  workers: {
    meaning: "노동자들",
    pronunciation: "/ˈwɜːrkərz/",
    example: "Factory workers moved to urban areas.",
  },
};

// 단어 검색 함수 — 구두점 제거 후 소문자로 매칭
export function lookupWord(word: string): WordInfo | undefined {
  const cleaned = word.toLowerCase().replace(/[^a-z]/g, "");
  return wordDictionary[cleaned];
}

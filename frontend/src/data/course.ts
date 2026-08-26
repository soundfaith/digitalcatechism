export type CccPart = 'Creed' | 'Sacraments' | 'Morality' | 'Prayer'

export type Topic = {
  day: number
  part: CccPart
  title: string
  introduction: string
  summary: string[]
  application: string[]
  reflection: string
  audioUrl?: string
}

export const sevenDayCourse: Topic[] = [
  {
    day: 1,
    part: 'Creed',
    title: 'God makes himself known',
    introduction: 'Faith begins with a God who lovingly steps toward us. Creation, Scripture, and the life of the Church all become places where we can receive that invitation.',
    summary: [
      'God is not distant or indifferent to the world he made.',
      'He gives himself to be known because he desires a living relationship with every person.',
      'Revelation reaches its fullness in Jesus Christ, who shows us the Father.',
      'Sacred Scripture records God’s word in human words and is read within the living Tradition of the Church.',
      'Faith is our free response: we trust God and welcome what he reveals.',
      'This trust is not blind optimism but a relationship grounded in God’s faithfulness.',
    ],
    application: ['Make a quiet space today to thank God for one sign of his goodness.', 'Read a short Gospel passage slowly, asking what God may be revealing.'],
    reflection: 'Where do I notice God inviting me to trust him more deeply?',
  },
  {
    day: 2,
    part: 'Creed',
    title: 'Jesus Christ, God with us',
    introduction: 'In Jesus, the eternal Son enters our human story. He is fully God and fully human, the face of divine mercy and the way to the Father.',
    summary: ['Jesus is not merely a teacher among teachers; he is the Word through whom all things were made.', 'He became human in the womb of Mary without ceasing to be God.', 'His ordinary life reveals the holiness possible in human life.', 'Through his preaching and healing, he announces the nearness of God’s kingdom.', 'On the cross, Jesus freely gives himself for the life of the world.', 'His resurrection defeats sin and death and opens a new future for humanity.'],
    application: ['Speak to Jesus honestly about one hope or hurt you carry.', 'Let one act of patient love today become your small response to his love.'],
    reflection: 'What part of Jesus’ life do I most need to encounter today?',
  },
  {
    day: 3,
    part: 'Creed',
    title: 'The Holy Spirit gives life',
    introduction: 'The Holy Spirit is God’s presence active within us and within the Church. The Spirit awakens faith, forms holiness, and keeps the risen Christ close.',
    summary: ['The Holy Spirit is the third Person of the Trinity, not an impersonal force.', 'The Spirit prepared God’s people for Christ and rested upon him in his earthly mission.', 'At Pentecost, the Spirit gathered the disciples into a courageous community.', 'The Spirit continues to speak through Scripture, prayer, the sacraments, and the gifts of believers.', 'Grace is the Spirit’s life shared with us, healing and strengthening us from within.', 'The Spirit makes us capable of love that reaches beyond our natural limits.'],
    application: ['Begin the day with a simple prayer: “Come, Holy Spirit.”', 'Notice one quiet prompting toward goodness and follow it.'],
    reflection: 'Where might the Holy Spirit be bringing new life in me?',
  },
  {
    day: 4,
    part: 'Creed',
    title: 'The Church as a pilgrim people',
    introduction: 'The Church is a people gathered by Christ and sent into the world. She is both a home for sinners seeking mercy and a sign of God’s hope.',
    summary: ['Christ remains present through the Church, his Body on earth.', 'The Church is one, holy, catholic, and apostolic because her life comes from Christ.', 'Every baptized person has a place and a vocation within this people.', 'The Church teaches, worships, serves, and announces the Gospel across cultures and generations.', 'Her holiness is real even while her members continually need conversion.', 'Belonging to the Church means receiving communion and becoming responsible for one another.'],
    application: ['Pray for one person in your parish or faith community.', 'Offer a practical act of service without waiting to be noticed.'],
    reflection: 'How is Christ asking me to help build up his people?',
  },
  {
    day: 5,
    part: 'Sacraments',
    title: 'Grace through the sacraments',
    introduction: 'The sacraments are Christ’s gifts of grace, given through visible signs. In them, God meets us in the real circumstances of human life.',
    summary: ['The seven sacraments accompany the journey from new birth in Baptism to healing and final anointing.', 'They are actions of Christ, celebrated by the Church for the good of her people.', 'The sacraments do not depend on our mood or perfection to make God faithful.', 'They gather us into worship and send us back into daily life transformed for service.', 'The Eucharist is the heart of the Church’s life and the memorial of Christ’s self-giving.', 'Through sacramental grace, ordinary people are equipped to live extraordinary love.'],
    application: ['Prepare for your next sacrament with a few minutes of unhurried attention.', 'Let gratitude for the Eucharist shape one generous choice.'],
    reflection: 'How have the sacraments helped me recognize God’s nearness?',
  },
  {
    day: 6,
    part: 'Morality',
    title: 'Freedom made for love',
    introduction: 'Christian morality is not a list of cold restrictions. It is the path of learning to use our freedom as Jesus did: for truth, communion, and love.',
    summary: ['Every human person possesses dignity because each is created and loved by God.', 'True freedom is the ability to choose the good, not simply the power to choose anything.', 'Conscience helps us listen for the moral truth we are responsible to follow.', 'The Beatitudes show the shape of a life turned toward God’s kingdom.', 'Virtue forms our habits so that goodness becomes more steady and joyful.', 'Mercy remains available whenever sin turns us away; conversion is always possible.'],
    application: ['Before one important choice, pause and ask what love requires.', 'Receive your own need for mercy and extend that mercy to someone else.'],
    reflection: 'What habit would help my freedom become more available to love?',
  },
  {
    day: 7,
    part: 'Prayer',
    title: 'Learning to pray',
    introduction: 'Prayer is the relationship of a child with the Father, through the Son, in the Holy Spirit. It is less about finding perfect words and more about becoming present to God.',
    summary: ['Prayer is God’s gift before it is our achievement.', 'We can pray with adoration, petition, intercession, thanksgiving, and praise.', 'Jesus teaches us to pray by giving us the Our Father.', 'The Psalms give voice to the full range of human feeling before God.', 'Silence and meditation make room to receive rather than control.', 'Prayer slowly joins our heart to God’s will and sends us into compassionate action.'],
    application: ['Pray the Our Father slowly, leaving a breath between each line.', 'End the day by naming three gifts and one person you entrust to God.'],
    reflection: 'What kind of prayer is God inviting me to practice in this season?',
  },
]

export const fourteenDayCourse: Topic[] = [
  {
    day: 1,
    part: 'Creed',
    title: 'Awakening the Desire for God',
    introduction:
      'Every human heart carries a longing for meaning and a love that lasts. This desire is not a flaw but a sign that we are made for relationship with God. Our questions, hopes, and restlessness become the doorway through which God gently calls us closer. Beginning this journey means paying attention to the quiet places where our hearts reach beyond the surface of life.',
    summary: [
      'Our longing for meaning points toward a relationship with God.',
      'Human desire becomes a way God invites us into deeper life.',
      'Faith gives our search a home without shutting down honest questions.',
      'God initiates the relationship; we learn to respond with trust.',
      'The Church helps us recognize and interpret this longing.',
      'Spiritual hunger often appears in moments of transition or vulnerability.',
      'God meets us in the desires we sometimes struggle to name.',
    ],
    application: [
      'Name one desire that seems to reach beyond what the world can offer.',
      'Pay attention to a moment today when your heart felt drawn toward something deeper.',
      'Notice where longing becomes an invitation rather than frustration.',
    ],
    reflection:
      'What longing in me might be quietly pointing toward God?',
  },
  {
    day: 2,
    part: 'Creed',
    title: 'How God Reveals Himself',
    introduction:
      'God does not remain hidden or distant. He steps toward us through creation, through the story of his people, and most fully through Jesus. Revelation is not a set of ideas but God sharing his heart with us. Learning to see this self-gift requires patience, humility, and a willingness to let God speak in ways we may not expect.',
    summary: [
      'God reveals himself because he desires relationship with us.',
      'Creation reflects God’s generosity and creativity.',
      'Jesus is the fullness of God’s self-disclosure.',
      'Scripture becomes a place of encounter when read with openness.',
      'Tradition helps us understand how God has spoken across generations.',
      'Faith is our free response to God’s initiative.',
      'God often reveals himself through people and experiences in daily life.',
    ],
    application: [
      'Thank God for one sign of his goodness today.',
      'Read a short Gospel passage slowly and notice what stands out.',
      'Recall a moment when someone’s kindness revealed something deeper to you.',
    ],
    reflection:
      'Where do I notice God inviting me to trust him more deeply?',
  },
  {
    day: 3,
    part: 'Creed',
    title: 'Love at the Center: The Trinity',
    introduction:
      'At the heart of reality is relationship. God is one, yet Father, Son, and Holy Spirit—an eternal communion of love. This mystery is not meant to confuse us but to show us that love is the deepest truth of existence. When we remember this, we begin to see ourselves and others with new dignity.',
    summary: [
      'The Trinity reveals God as an eternal communion of love.',
      'The Father creates and sustains life.',
      'The Son shows us the Father’s heart through his life and self-giving.',
      'The Spirit draws us into God’s life and strengthens us from within.',
      'Relationship is at the core of who God is.',
      'We are invited to share in this divine communion.',
      'Seeing God as communion changes how we understand human relationships.',
    ],
    application: [
      'Begin the day with the Sign of the Cross, remembering God’s closeness.',
      'Let one relationship today become more patient and generous.',
      'Notice how love—received or given—opens your heart.',
    ],
    reflection:
      'How would my life change if I remembered that God is communion?',
  },
  {
    day: 4,
    part: 'Creed',
    title: 'Meeting Christ in His Humanity',
    introduction:
      'Jesus enters our human story not as a distant figure but as one who shares our joys, struggles, and limitations. His humanity reveals what divine love looks like in everyday life. By watching how he lives, listens, and loves, we learn what it means to be fully human ourselves.',
    summary: [
      'Jesus is fully God and fully human.',
      'His ordinary life reveals holiness in daily moments.',
      'His compassion shows the Father’s heart.',
      'His teaching invites us into a new way of living.',
      'His death and resurrection open a new future for humanity.',
      'Jesus’ humanity becomes a bridge between God and us.',
      'Encountering Christ helps us understand our own dignity.',
    ],
    application: [
      'Speak honestly to Jesus about one hope or hurt you carry.',
      'Let one act of patient love become your response to his example.',
      'Recall a moment when someone’s humility or kindness revealed Christ’s presence.',
    ],
    reflection:
      'What part of Jesus’ life do I most need to encounter today?',
  },
  {
    day: 5,
    part: 'Creed',
    title: 'Walking with the Risen Lord',
    introduction:
      'Jesus does not save us from a distance. He enters suffering, bears sin, and rises from death so that no part of human life is beyond redemption. The resurrection is not only a past event—it is a living reality that reshapes how we face fear, loss, and hope.',
    summary: [
      'The cross reveals the depth of Christ’s love.',
      'Jesus freely accepts death for our salvation.',
      'The resurrection is a real victory over sin and death.',
      'The risen Christ remains present to his people.',
      'Hope becomes possible even in difficult circumstances.',
      'Suffering can be transformed when united with Christ.',
      'The resurrection invites us to see life through a lens of courage and trust.',
    ],
    application: [
      'Bring one wound or fear into honest conversation with God.',
      'Look for one small sign of hope today.',
      'Recall a moment when new life emerged from a difficult situation.',
    ],
    reflection:
      'Where do I need Christ’s risen life to reach me?',
  },
  {
    day: 6,
    part: 'Creed',
    title: 'The Spirit Who Renews Us',
    introduction:
      'The Holy Spirit is God’s presence active within us. The Spirit strengthens, guides, and awakens faith in ways that are often quiet but deeply transformative. When we learn to listen, we begin to notice gentle movements toward goodness, courage, and compassion.',
    summary: [
      'The Holy Spirit is God’s life shared with us.',
      'The Spirit prepares our hearts to receive Christ.',
      'The Spirit forms courage, wisdom, and holiness within us.',
      'The Spirit speaks through Scripture, prayer, and community.',
      'Grace is the Spirit’s work healing us from within.',
      'The Spirit helps us love beyond our natural limits.',
      'Listening to the Spirit brings clarity and peace.',
    ],
    application: [
      'Begin the day with a simple prayer: “Come, Holy Spirit.”',
      'Notice one quiet prompting toward goodness and follow it.',
      'Recall a moment when you felt strengthened or guided unexpectedly.',
    ],
    reflection:
      'Where might the Holy Spirit be bringing new life in me?',
  },
  {
    day: 7,
    part: 'Creed',
    title: 'The Church We Journey With',
    introduction:
      'The Church is a people gathered by Christ and sent into the world. She is both a home for sinners seeking mercy and a sign of God’s hope. Belonging to the Church means walking together, receiving support, and becoming responsible for one another.',
    summary: [
      'Christ remains present through the Church.',
      'The Church is one, holy, catholic, and apostolic.',
      'Every baptized person has a place and a vocation.',
      'The Church teaches, worships, serves, and announces the Gospel.',
      'Holiness is real even while members need ongoing conversion.',
      'Belonging means receiving communion and offering support.',
      'The Church carries the mission of Christ across generations.',
    ],
    application: [
      'Pray for one person in your parish or faith community.',
      'Offer a practical act of service without waiting to be noticed.',
      'Recall a moment when the Church supported or encouraged you.',
    ],
    reflection:
      'How is Christ asking me to help build up his people?',
  },
  {
    day: 8,
    part: 'Sacraments',
    title: 'Grace That Meets Us',
    introduction:
      'The sacraments are moments where God meets us through visible signs. They anchor us in God’s faithfulness and remind us that grace is not abstract—it touches real human experiences. Through the sacraments, ordinary people are strengthened to live extraordinary love.',
    summary: [
      'The sacraments accompany us from new birth to healing.',
      'They are actions of Christ celebrated by the Church.',
      'They do not depend on our perfection to be effective.',
      'They gather us for worship and send us into daily life.',
      'Sacramental grace transforms ordinary moments.',
      'The sacraments make God’s presence tangible.',
      'They shape us into people capable of deeper love.',
    ],
    application: [
      'Prepare for your next sacrament with unhurried attention.',
      'Let gratitude for God’s gifts shape one generous choice.',
      'Recall a moment when a sacrament strengthened or comforted you.',
    ],
    reflection:
      'Where have I recognized God’s nearness through the sacraments?',
  },
  {
    day: 9,
    part: 'Sacraments',
    title: 'Becoming a New Creation',
    introduction:
      'In Baptism we are welcomed into Christ’s life, and in Confirmation we are strengthened to live that identity with courage. These sacraments remind us that our deepest identity is not earned—it is received. They root us in a mission larger than ourselves.',
    summary: [
      'Baptism makes us children of God.',
      'We share in Christ’s mission through our baptismal identity.',
      'Confirmation deepens and strengthens baptismal grace.',
      'The Spirit equips us for witness and service.',
      'Christian identity is received before it is achieved.',
      'These sacraments anchor us in God’s love.',
      'They remind us that we belong to a larger story.',
    ],
    application: [
      'Recall the date or place of your Baptism if you can.',
      'Choose one truth of faith to embody through kindness.',
      'Think of someone whose faith inspires you to live more boldly.',
    ],
    reflection:
      'What would it mean to live today as someone claimed by Christ?',
  },
  {
    day: 10,
    part: 'Sacraments',
    title: 'The Gift of Christ’s Presence',
    introduction:
      'The Eucharist is the heart of the Church’s life. In this sacred meal, Christ gives himself to us and gathers us into his self-offering. The Eucharist forms us into a people of gratitude, unity, and mission.',
    summary: [
      'The Eucharist makes present Christ’s self-giving love.',
      'Christ is truly present under the signs of bread and wine.',
      'Communion unites us as one body.',
      'Thanksgiving is the posture of Eucharistic life.',
      'The Mass sends us to become Christ’s presence for others.',
      'The Eucharist strengthens us for daily challenges.',
      'It teaches us to receive and give love generously.',
    ],
    application: [
      'Spend a few quiet minutes remembering a meaningful Eucharistic celebration.',
      'Give thanks before one meal today.',
      'Recall a moment when receiving the Eucharist strengthened your love for others.',
    ],
    reflection:
      'How might the Eucharist shape the way I receive and give love?',
  },
  {
    day: 11,
    part: 'Sacraments',
    title: 'Mercy That Restores Us',
    introduction:
      'Christ does not abandon us when we fall. Through Reconciliation and the Anointing of the Sick, he meets our woundedness with forgiveness, strength, and peace. These sacraments remind us that healing is part of the Christian journey.',
    summary: [
      'Sin harms our relationship with God and others.',
      'Confession brings truth into the light of mercy.',
      'Absolution restores us to friendship with God.',
      'The Anointing of the Sick brings strength and peace.',
      'God’s mercy is stronger than our shame.',
      'Healing often begins with honesty and vulnerability.',
      'Mercy restores hope and renews trust.',
    ],
    application: [
      'Ask forgiveness from God or someone you have hurt.',
      'Offer gentle presence to someone who is suffering.',
      'Recall a moment when mercy—received or given—changed your day.',
    ],
    reflection:
      'Where am I resisting the mercy God wants to give me?',
  },
  {
    day: 12,
    part: 'Morality',
    title: 'Freedom That Learns to Love',
    introduction:
      'Christian morality is not a list of restrictions. It is the art of learning to use our freedom as Jesus did—for truth, communion, and love. True freedom grows when we choose what is good, even when it is difficult.',
    summary: [
      'Every person possesses dignity because each is loved by God.',
      'True freedom is the ability to choose the good.',
      'Conscience helps us listen for moral truth.',
      'The Beatitudes show the shape of life in God’s kingdom.',
      'Virtue forms habits that make goodness steady and joyful.',
      'Mercy remains available whenever we fall.',
      'Freedom grows through small, consistent choices for love.',
    ],
    application: [
      'Before one important choice, pause and ask what love requires.',
      'Receive your need for mercy and extend it to someone else.',
      'Recall a moment when choosing the good brought unexpected peace.',
    ],
    reflection:
      'What habit would help my freedom become more available to love?',
  },
  {
    day: 13,
    part: 'Morality',
    title: 'Love That Builds the World',
    introduction:
      'Faith becomes visible in the way we treat people, especially those who are overlooked. Christian life is personal, but it is never private. Love of neighbor is the concrete expression of love of God.',
    summary: [
      'The command to love God includes love of neighbor.',
      'Every person deserves justice, mercy, and protection.',
      'The common good allows communities to flourish.',
      'The works of mercy make compassion concrete.',
      'Small acts of service can change the shape of a day.',
      'Love of neighbor reveals the authenticity of our faith.',
      'Compassion expands our vision and softens our hearts.',
    ],
    application: [
      'Notice who is being overlooked around you.',
      'Meet one practical need with quiet generosity.',
      'Recall a moment when someone’s compassion changed your day.',
    ],
    reflection:
      'Whose dignity is God asking me to see more clearly?',
  },
  {
    day: 14,
    part: 'Prayer',
    title: 'Growing in Prayer',
    introduction:
      'Prayer is the slow, steady work of becoming present to God. It is not about mastering techniques but about learning to trust that God is already near. Over time, prayer becomes less about saying many words and more about letting our hearts rest in the One who loves us. This gentle relationship grows as we show up with honesty, even when we feel distracted or unsure.',
    summary: [
      'Prayer begins with the simple awareness that God is near.',
      'It grows through small, consistent moments of turning our hearts toward God.',
      'Different forms of prayer help us express the full range of our relationship with God.',
      'The Our Father teaches us to desire what God desires.',
      'The Psalms show that prayer can hold joy, sorrow, anger, and hope.',
      'Silence helps us listen rather than rush.',
      'Prayer slowly becomes a way of seeing the world with compassion.',
    ],
    application: [
      'Pray the Our Father slowly, pausing between each line.',
      'End the day by naming three gifts you received.',
      'Recall a moment when quiet reflection helped you respond with patience.',
    ],
    reflection:
      'What kind of prayer is God inviting me to practice in this season?',
  },
]

export const thirtyDayCourse: Topic[] = [
  {
    day: 1,
    part: 'Creed',
    title: 'Made for Communion with God',
    introduction: 'The Christian journey begins not with an obligation but with a gift: we exist because God called us into being and desires us as friends. Beneath our changing achievements, failures, and roles is a person made to receive and return love. The Catechism invites us to let this original gift become the horizon for everything that follows.',
    summary: [
      'Human dignity begins in God’s free act of creation, not in usefulness or accomplishment.',
      'The desire for lasting happiness is a sign that finite goods cannot completely fulfill us.',
      'God’s invitation respects human freedom; love cannot be coerced.',
      'Grace does not erase our humanity but brings it toward its intended fullness.',
      'A life of faith is an answer to a relationship already offered.',
      'Our deepest identity is received before it is expressed through our choices.',
      'The Church accompanies people at every stage of learning to receive this gift.',
    ],
    application: ['Begin the day by thanking God simply for your existence.', 'Notice one moment when you seek approval, and gently remember that you are already loved.', 'Treat one person today as someone whose dignity is a gift, not a conclusion.'],
    reflection: 'What changes when I understand my life first as a gift received from God?',
  },
  {
    day: 2,
    part: 'Creed',
    title: 'The God Who Calls by Name',
    introduction: 'God is not an impersonal force behind the universe. Scripture reveals a God who speaks, calls, remembers, and enters the particular stories of his people. Faith grows as we learn to recognize that divine address within the broad story of salvation and within the concrete details of our own lives.',
    summary: [
      'God’s self-disclosure is personal: he gives not only information but himself.',
      'Biblical calling often begins before a person feels ready or worthy.',
      'The names and stories of Scripture protect us from reducing faith to abstraction.',
      'God’s fidelity unfolds over time, including seasons that feel hidden or unfinished.',
      'Listening is a spiritual act that requires patience and humility.',
      'A vocation is a response to love, not a strategy for self-invention.',
      'God’s call always opens toward service and communion with others.',
    ],
    application: ['Read one biblical call story and pay attention to the person’s hesitation.', 'Write your name in a quiet prayer and ask how God sees you.', 'Answer one ordinary responsibility today as a place where God may be calling you.'],
    reflection: 'Where might God be addressing me personally rather than generally?',
  },
  {
    day: 3,
    part: 'Creed',
    title: 'Creation as Gift and Calling',
    introduction: 'To say that God created the world is to say that reality is sustained by generosity. The world is neither divine nor disposable; it is a good creation entrusted to human care. We discover our place in it when wonder becomes responsibility and gratitude becomes a way of living.',
    summary: [
      'Creation depends continuously on God rather than existing as a closed system.',
      'Material life is good and can become a place of encounter with its Creator.',
      'Human beings bear a unique responsibility for the world without owning it absolutely.',
      'Stewardship joins reverence for nature with concern for vulnerable people.',
      'Work shares in God’s creative care when it serves genuine human flourishing.',
      'Rest protects creation from being measured only by productivity.',
      'Gratitude resists both careless consumption and despair about the world.',
    ],
    application: ['Receive one ordinary part of creation with deliberate attention.', 'Repair, reuse, or refrain from one unnecessary act of consumption.', 'Offer your work today as care for people who will benefit from it.'],
    reflection: 'What responsibility has God entrusted to me within his creation?',
  },
  {
    day: 4,
    part: 'Creed',
    title: 'The Wound of Sin',
    introduction: 'Christian realism takes seriously the goodness for which we were made and the fracture that runs through human choices. Sin is more than breaking a rule: it is a turning away from trust, a refusal of relationship that harms both the heart and the community. Naming this wound honestly is the beginning of healing rather than a sentence of shame.',
    summary: [
      'Original sin describes a wounded condition received into human history, not a personal blame for another’s act.',
      'Sin narrows our vision until self-protection appears more urgent than love.',
      'Personal choices can create patterns that make wrongdoing easier for others.',
      'Temptation often distorts a good desire rather than inventing an entirely new one.',
      'Shame hides the wound, while contrition brings it into the presence of mercy.',
      'No human effort alone can restore the communion sin has broken.',
      'The promise of redemption allows truth and hope to remain together.',
    ],
    application: ['Name one recurring pattern without excusing or condemning yourself.', 'Repair one small consequence of a past careless choice.', 'Ask for the grace to see temptation earlier today.'],
    reflection: 'What truth about my brokenness am I ready to bring into God’s light?',
  },
  {
    day: 5,
    part: 'Creed',
    title: 'Covenant: God Makes a People',
    introduction: 'God’s answer to human wandering is not abandonment but covenant. Across Scripture, he forms a people through promises, deliverance, commandments, and patient renewal. The covenant reveals that salvation is personal without being solitary: God gathers people into a shared history and a shared responsibility.',
    summary: [
      'A covenant is a relationship of faithful commitment, not merely an exchange of benefits.',
      'God’s promises remain active even when his people respond imperfectly.',
      'Abraham’s call opens a path of blessing meant to reach every nation.',
      'The Exodus shows freedom as movement toward worship and belonging, not mere escape.',
      'The law teaches a liberated people how to live without returning to oppression.',
      'Prophets defend covenant love by confronting idolatry and injustice together.',
      'The Church inherits a people-shaped faith rather than a private spirituality.',
    ],
    application: ['Keep one promise today even when it is inconvenient.', 'Pray for the people whose faith made your own journey possible.', 'Notice how one personal choice affects your wider community.'],
    reflection: 'Where is God teaching me that faithfulness is larger than private belief?',
  },
  {
    day: 6,
    part: 'Creed',
    title: 'The Mystery of the Trinity',
    introduction: 'The Trinity is not a puzzle to solve but the revelation that divine life is eternally self-giving love. The Father, Son, and Spirit are not three competing centers but one God whose unity is communion. This mystery gives Christian prayer its shape and offers a vision of relationship marked by gift rather than possession.',
    summary: [
      'God is one in being and three in Persons.',
      'The divine Persons are distinguished by their relations of origin and love.',
      'The Father is the source without being greater than the Son or Spirit.',
      'The Son receives and returns himself to the Father in eternal communion.',
      'The Spirit makes divine love present and active in creation and the Church.',
      'Every work of God outside himself is the work of the one Trinity.',
      'Human community becomes more truthful when unity does not require sameness.',
    ],
    application: ['Make the Sign of the Cross slowly, attending to each Person named.', 'Practice receiving another person’s perspective without needing to dominate it.', 'Give thanks for a relationship in which mutuality has made you more fully yourself.'],
    reflection: 'What kind of love becomes imaginable when God’s own life is communion?',
  },
  {
    day: 7,
    part: 'Creed',
    title: 'Jesus, the Word Made Flesh',
    introduction: 'In Jesus Christ, God’s eternal Word takes a human life without treating humanity as a disguise. The invisible God becomes approachable through a face, a voice, a body, and a history. The Incarnation means that God can be encountered in the texture of human life, and that our humanity is worthy of being taken up into divine communion.',
    summary: [
      'Jesus Christ is one Person with a complete divine nature and a complete human nature.',
      'The Incarnation preserves both God’s transcendence and the goodness of human embodiment.',
      'Jesus’ human knowledge, emotions, labor, and relationships are real.',
      'Mary’s consent shows grace inviting a free human response.',
      'Christ reveals God by acting humanly: seeing, touching, listening, and serving.',
      'The Incarnation gives a new dignity to ordinary places and responsibilities.',
      'Christian discipleship follows a person before it follows a program.',
    ],
    application: ['Bring one bodily reality, such as tiredness or hunger, into prayer without hiding it.', 'Listen to someone today with the attentiveness you would offer Christ.', 'Let one ordinary task be done with reverence rather than haste.'],
    reflection: 'Where do I need to let God meet me in the concrete reality of my humanity?',
  },
  {
    day: 8,
    part: 'Creed',
    title: 'The Hidden Years of Nazareth',
    introduction: 'Most of Jesus’ earthly life was quiet: family life, work, worship, learning, and faithful presence. These hidden years challenge our tendency to measure holiness by visibility or achievement. Nazareth teaches that God’s redeeming work can mature in patient, unremarkable faithfulness long before anyone applauds it.',
    summary: [
      'Jesus sanctified ordinary human development by truly growing in wisdom and stature.',
      'Family life is a place where patience, obedience, and mutual care become holy.',
      'Manual and ordinary work can participate in human dignity and service.',
      'Hiddenness is not the same as insignificance.',
      'The rhythms of Jewish prayer and worship shaped Jesus’ human life.',
      'Maturity often appears as consistency rather than intensity.',
      'God’s timing resists the demand to display results before they are ready.',
    ],
    application: ['Do one hidden task carefully and let it remain unseen.', 'Give thanks for a person whose quiet faithfulness sustains others.', 'Build a brief moment of prayer into an existing daily routine.'],
    reflection: 'What ordinary part of my life might God be patiently making holy?',
  },
  {
    day: 9,
    part: 'Creed',
    title: 'The Kingdom in Jesus’ Words',
    introduction: 'Jesus announces that God’s kingdom is drawing near, not as a political slogan but as God’s healing rule entering human history. His parables and teachings uncover a reality that grows quietly, welcomes the overlooked, and asks for a whole-hearted response. To hear Jesus is to be invited into a different account of what matters.',
    summary: [
      'The kingdom is God’s active reign rather than a territory we can possess.',
      'Jesus’ parables invite conversion by making familiar life newly strange.',
      'The Beatitudes name blessedness where the world often sees only weakness.',
      'Kingdom growth can be hidden, gradual, and disproportionate to its beginnings.',
      'Jesus joins forgiveness of sin to restoration of human relationships.',
      'The kingdom is already present but awaits complete fulfillment.',
      'Discipleship requires allowing Jesus to revise our imagination of success.',
    ],
    application: ['Read one parable and identify the expectation it unsettles in you.', 'Honor someone today whom public measures of success overlook.', 'Choose one kingdom value to guide a decision.'],
    reflection: 'Which of Jesus’ pictures of the kingdom most challenges my assumptions?',
  },
  {
    day: 10,
    part: 'Creed',
    title: 'Mercy at the Table',
    introduction: 'Jesus’ table fellowship makes the mercy of God visible. He eats with people who are excluded, compromised, or searching, without treating sin as harmless or people as disposable. At his table, truth and welcome belong together; conversion becomes possible because a person is encountered before being evaluated.',
    summary: [
      'Jesus’ welcome restores social belonging to people pushed to the margins.',
      'Mercy sees the whole person without denying the damage of sin.',
      'Meals become signs of the future banquet God desires for humanity.',
      'Hospitality is more than politeness; it makes room for another’s dignity.',
      'Jesus receives both the grateful and the resentful, exposing hidden self-righteousness.',
      'Conversion grows in an environment where people are not reduced to their past.',
      'The Church’s table should reflect Christ’s reconciling welcome.',
    ],
    application: ['Make room in a conversation for someone who is usually unheard.', 'Share food or time without turning generosity into a performance.', 'Ask where you have confused moral clarity with emotional distance.'],
    reflection: 'Whom do I find difficult to welcome as someone Christ is also seeking?',
  },
  {
    day: 11,
    part: 'Creed',
    title: 'The Signs of Healing',
    introduction: 'Jesus’ miracles are not spectacles designed to remove every difficulty from life. They are signs of the kingdom: glimpses of creation being restored and of human beings returned to community. They reveal compassion, authority, and a promise that God’s final healing will include the whole person.',
    summary: [
      'A miracle points beyond itself to Jesus’ identity and mission.',
      'Jesus heals bodies while also restoring people to worship and community.',
      'His compassion is not abstract pity but attentive presence before suffering.',
      'Faith is not a technique that controls God or guarantees a preferred outcome.',
      'Some healings require perseverance, intercession, and trust amid delay.',
      'Christ’s authority confronts spiritual and social forces that diminish life.',
      'The Church continues Christ’s healing mission through prayer, care, and justice.',
    ],
    application: ['Bring one person’s suffering to God by name.', 'Offer practical help that restores someone’s participation, not only their comfort.', 'Receive your own need for care without pretending to be self-sufficient.'],
    reflection: 'Where is Christ inviting me to participate in healing rather than only ask for relief?',
  },
  {
    day: 12,
    part: 'Creed',
    title: 'The Mystery of the Cross',
    introduction: 'The cross reveals a love willing to remain faithful when love is rejected. Jesus does not glorify suffering for its own sake, nor does he answer violence with greater violence. He enters the consequences of sin and transforms them from within through obedience, forgiveness, and self-offering.',
    summary: [
      'Jesus’ death is a free act of love, not an accident outside God’s care.',
      'The cross exposes the seriousness of sin and the greater seriousness of mercy.',
      'Christ’s obedience heals the human refusal to trust the Father.',
      'Forgiveness on the cross breaks the cycle by which injury creates new injury.',
      'The cross does not make every form of suffering good or require people to remain in abuse.',
      'Christian self-denial is ordered toward love, freedom, and the good of others.',
      'The cross becomes hopeful only because it opens toward resurrection.',
    ],
    application: ['Stand honestly before one painful reality without rushing to explain it away.', 'Refuse one impulse to retaliate or pass harm onward.', 'Seek wise help for a burden that should not be carried alone.'],
    reflection: 'What kind of faithful love is the cross asking me to learn?',
  },
  {
    day: 13,
    part: 'Creed',
    title: 'Resurrection and New Creation',
    introduction: 'The resurrection is God’s decisive affirmation of Jesus and the beginning of a new creation. It is not simply the continuation of a soul after death; it is the victory of God’s life over death in the person of Jesus. Christian hope therefore reaches beyond optimism: it trusts that God can bring a transformed future from what appears finished.',
    summary: [
      'Jesus’ resurrection is a bodily event that cannot be reduced to memory or symbolism.',
      'The risen Christ is continuous with the crucified Jesus and yet gloriously transformed.',
      'The empty tomb and witness of the disciples belong together in the apostolic proclamation.',
      'Resurrection faith includes judgment, justice, and the restoration of creation.',
      'Christian hope can face grief without pretending that death is insignificant.',
      'The first fruits of resurrection appear wherever grace creates new life now.',
      'The Church’s mission is shaped by the future God has already begun.',
    ],
    application: ['Name one place where you need hope that is stronger than positive thinking.', 'Encourage someone who is beginning again after loss or failure.', 'Let one future hope guide a choice you make today.'],
    reflection: 'What would I risk if I truly believed that God’s future is stronger than death?',
  },
  {
    day: 14,
    part: 'Creed',
    title: 'The Spirit at Pentecost',
    introduction: 'At Pentecost, the risen Christ’s promise becomes a living community. The Spirit does not make the disciples escape their languages, histories, or differences; the Spirit makes understanding and communion possible within them. The Church begins as a people sent outward with courage, not as a group protecting a private experience.',
    summary: [
      'The Spirit fulfills Jesus’ promise to remain with his disciples.',
      'Pentecost reverses the isolation and pride symbolized by Babel.',
      'Spiritual gifts are given for the building up of the whole body.',
      'Courage does not mean the absence of fear but fidelity in its presence.',
      'Mission begins with receiving before it becomes speaking or doing.',
      'The Spirit creates unity without erasing cultural particularity.',
      'The Church’s vitality depends on continual conversion and renewal.',
    ],
    application: ['Pray for courage to speak one truthful, loving word.', 'Use one ability you have for another person’s good without seeking credit.', 'Listen for a perspective different from your own as a possible gift.'],
    reflection: 'Where is the Spirit sending me beyond the limits of my comfort?',
  },
  {
    day: 15,
    part: 'Creed',
    title: 'The Church as Communion',
    introduction: 'The Church is not merely an institution that preserves information about Jesus. She is a communion created by the Spirit, where people receive Christ and learn to become his body for the world. Her holiness is both a gift already present and a task continually threatened by the failures of her members.',
    summary: [
      'The Church is simultaneously visible in structures and mysterious in divine life.',
      'Baptism gives every Christian a real belonging and responsibility.',
      'The Church is one through shared faith, sacramental life, and charity.',
      'Catholicity means fullness and welcome across peoples, places, and generations.',
      'Apostolicity roots the Church in the witness and teaching of the apostles.',
      'The holiness of the Church comes from Christ while her members need conversion.',
      'Communion requires patient work of truth, forgiveness, and mutual care.',
    ],
    application: ['Pray for a local community of faith, including its hidden struggles.', 'Take one step toward belonging rather than remaining only an observer.', 'Speak about the Church in a way that includes both gratitude and honest responsibility.'],
    reflection: 'What kind of belonging is Christ asking me to receive and help build?',
  },
  {
    day: 16,
    part: 'Creed',
    title: 'Scripture, Tradition, and Teaching',
    introduction: 'God’s revelation is entrusted to the Church as a living reality. Scripture is not detached from the community that received, preserved, prayed, and interpreted it; Tradition is not a substitute for Scripture but its living transmission. Together they guide the Church toward a faithful reading of the apostolic faith.',
    summary: [
      'Sacred Scripture is inspired by God and expressed through genuine human authors.',
      'Inspiration does not remove genre, history, culture, or the need for careful interpretation.',
      'Tradition carries the apostolic life through worship, teaching, and practice.',
      'The Magisterium serves the word of God rather than standing above it.',
      'The Church reads each passage within the unity of the whole biblical story.',
      'Prayerful interpretation joins historical study with the faith of the Church.',
      'A mature reader welcomes both difficult questions and the limits of private certainty.',
    ],
    application: ['Read a short passage in context rather than as an isolated quotation.', 'Ask what the text reveals about God before asking how it confirms your opinion.', 'Receive one teaching of the Church as an invitation to deeper understanding.'],
    reflection: 'What would it mean for me to let the Church teach me how to listen to Scripture?',
  },
  {
    day: 17,
    part: 'Sacraments',
    title: 'Sacramental Imagination',
    introduction: 'The sacraments teach us that God’s grace is not allergic to matter. Water, oil, bread, wine, words, touch, and human promises can become signs through which Christ acts. A sacramental imagination learns to expect divine faithfulness in embodied, communal practices rather than searching only for private spiritual intensity.',
    summary: [
      'A sacrament is an effective sign instituted by Christ and entrusted to the Church.',
      'Visible signs speak to the whole person, whose body and spirit belong together.',
      'The sacraments work by Christ’s faithfulness, not by the emotional strength of the recipient.',
      'Celebration always has a communal and ecclesial dimension.',
      'Sacramental grace transforms a person for mission beyond the liturgy.',
      'The liturgical year teaches the Gospel through time, symbol, and repetition.',
      'Reverence for signs protects the reality they communicate from becoming disposable.',
    ],
    application: ['Prepare for a liturgy by arriving inwardly as well as physically.', 'Notice one physical sign in worship and consider what it communicates.', 'Treat your body and another person’s body with renewed reverence.'],
    reflection: 'Where have I been looking for God apart from the embodied life he has given the Church?',
  },
  {
    day: 18,
    part: 'Sacraments',
    title: 'Baptism: A New Belonging',
    introduction: 'Baptism is the doorway into Christian life, where a person passes through water into Christ’s death and resurrection. It is not merely a ceremony marking a family identity; it is a new birth that joins a person to God and to a people. Its grace remains the foundation beneath every later return and renewal.',
    summary: [
      'Baptism forgives sin and gives a share in divine life.',
      'The baptized become adopted children of the Father in the Son.',
      'The baptismal character marks a person permanently for Christ’s worship and mission.',
      'Baptism incorporates believers into the Church rather than creating isolated disciples.',
      'Infant Baptism witnesses that grace precedes our ability to understand or achieve.',
      'The baptismal vocation includes priestly, prophetic, and royal responsibility.',
      'Daily Christian growth is a repeated living-out of baptismal identity.',
    ],
    application: ['Find the date or place of your Baptism and give thanks for it.', 'Make one decision today from the identity of a beloved child rather than a fearful competitor.', 'Pray for those preparing for Baptism.'],
    reflection: 'What part of my life still needs to be claimed by the grace of Baptism?',
  },
  {
    day: 19,
    part: 'Sacraments',
    title: 'Confirmation: Strength for Witness',
    introduction: 'Confirmation completes and strengthens baptismal grace for a life of public witness. The Spirit does not make Christians impressive; the Spirit makes them available, discerning, and courageous for the mission of Christ. This sacrament calls faith out of passivity and into responsible participation in the Church and the world.',
    summary: [
      'Confirmation roots the Christian more deeply in divine sonship and belonging.',
      'The sacrament unites the baptized more firmly to Christ and his Church.',
      'The gifts of the Spirit equip believers for discernment and service.',
      'The seal of the Spirit signifies a lasting dedication to witness.',
      'Christian maturity means moving from being cared for toward caring for others.',
      'Witness includes both words and the credible shape of a person’s life.',
      'Courage is sustained by community, prayer, and truth rather than personality alone.',
    ],
    application: ['Ask the Spirit for one gift you need in a current responsibility.', 'Take a modest but visible step toward practicing your faith with integrity.', 'Encourage a younger believer in one concrete way.'],
    reflection: 'Where does Christ need my faith to become more active and responsible?',
  },
  {
    day: 20,
    part: 'Sacraments',
    title: 'The Eucharist: Receiving and Becoming',
    introduction: 'In the Eucharist, Christ gives himself as food and gathers the Church into his sacrifice of praise. Communion is not a spiritual object added to our lives; it reshapes the people who receive it. We learn to become what we receive: a body given for the life of the world.',
    summary: [
      'The Eucharist makes sacramentally present the one sacrifice of Christ.',
      'Christ is truly, really, and substantially present under the Eucharistic signs.',
      'The liturgy joins the worship of the Church on earth with heavenly praise.',
      'The word and table belong together in one act of worship.',
      'Communion deepens union with Christ while calling us toward communion with others.',
      'Eucharistic adoration extends wonder before the presence celebrated in the Mass.',
      'The dismissal sends worshippers into concrete works of mercy and justice.',
    ],
    application: ['Offer one part of your week as preparation for Eucharistic thanksgiving.', 'Let someone else’s need interrupt your schedule as an act of self-giving.', 'Give thanks after a meal for the gift of being nourished.'],
    reflection: 'What would it look like for my life to become more Eucharistic: received, blessed, broken, and given?',
  },
  {
    day: 21,
    part: 'Sacraments',
    title: 'Reconciliation: Truth and Return',
    introduction: 'The sacrament of Reconciliation is a place where sin is neither minimized nor allowed to define a person forever. In confession, truth becomes speakable, responsibility becomes concrete, and the Father’s welcome becomes sacramentally audible. Returning to God is not humiliation; it is the restoration of freedom and relationship.',
    summary: [
      'Contrition is sorrow for sin joined to a renewed turning toward God.',
      'Confession names serious choices honestly rather than hiding behind generalities.',
      'The priest represents both Christ and the reconciling ministry of the Church.',
      'Absolution is God’s effective forgiveness, not merely reassurance.',
      'Penance begins the repair of habits and relationships damaged by sin.',
      'Regular confession forms humility and realistic hope.',
      'Reconciliation with God cannot be separated from a willingness to repair harm to others.',
    ],
    application: ['Make an honest examination of one area of your life.', 'Apologize without defending yourself where you have caused harm.', 'Set aside time for the sacrament if you are able.'],
    reflection: 'What am I protecting by refusing to let mercy meet the truth about me?',
  },
  {
    day: 22,
    part: 'Sacraments',
    title: 'Anointing and the Presence of Suffering',
    introduction: 'The Anointing of the Sick reveals that illness does not remove a person from the Church’s communion. Christ comes near with strength, peace, forgiveness, and sometimes healing, while leaving the mystery of bodily suffering intact. The sacrament teaches a community how to remain present when answers are incomplete.',
    summary: [
      'The sacrament is for serious illness, frailty, and the vulnerability of age, not only the final moments of life.',
      'Anointing unites the sick person more closely to Christ’s suffering.',
      'It can bring forgiveness, courage, peace, and preparation for the final passage.',
      'The Church prays for healing without treating healing as a reward or guarantee.',
      'Suffering never cancels a person’s dignity or vocation.',
      'Care for the sick is a work of the whole Christian community.',
      'Compassionate presence can be a form of genuine theological knowledge.',
    ],
    application: ['Contact or pray for someone who is ill, grieving, or isolated.', 'Allow another person to help you with one limitation instead of hiding it.', 'Bring a suffering you cannot solve into quiet prayer.'],
    reflection: 'How can I remain faithful and loving when I cannot make suffering disappear?',
  },
  {
    day: 23,
    part: 'Sacraments',
    title: 'Marriage: A Covenant of Communion',
    introduction: 'Christian marriage makes a covenant of faithful, fruitful love visible in the world. It is not sustained by romance alone but by a daily consent to seek the good of another through truth, sacrifice, tenderness, and repair. The sacrament reveals how ordinary family life can become a school of self-giving love.',
    summary: [
      'Marriage is a covenant rather than a temporary contract between autonomous individuals.',
      'The spouses’ mutual consent is the human act through which the covenant is established.',
      'Unity and openness to life belong together in the vocation’s full meaning.',
      'Faithful love reflects Christ’s commitment to his people.',
      'Married holiness includes the patient work of communication and forgiveness.',
      'Families become places where faith is first embodied and learned.',
      'The wider Church should support marriages with friendship, truth, and practical care.',
    ],
    application: ['Pray for one marriage or family under strain.', 'Practice listening in a relationship without preparing your defense.', 'Give thanks for a form of faithful love that has shaped you.'],
    reflection: 'Where is faithful love asking me to choose covenant over convenience?',
  },
  {
    day: 24,
    part: 'Sacraments',
    title: 'Holy Orders and Servant Leadership',
    introduction: 'Through Holy Orders, Christ continues to shepherd, teach, and sanctify his people through ordained ministers. Authority in the Church is meant to be sacramental service, modeled on the Lord who kneels to wash feet. This vocation also clarifies that every baptized person shares in Christ’s mission, though not in the same manner.',
    summary: [
      'Ordination configures a minister to Christ as head and shepherd of the Church.',
      'The bishop, priest, and deacon serve distinct forms of apostolic ministry.',
      'Ordained authority exists for the nourishment and unity of the people of God.',
      'The Eucharist and forgiveness are entrusted to ordained ministry in a particular way.',
      'The common priesthood of the baptized is real and active in daily life.',
      'Healthy authority protects the vulnerable and refuses self-enrichment.',
      'The whole Church is responsible for praying for and forming future ministers.',
    ],
    application: ['Pray for one ordained minister and one lay leader.', 'Use whatever authority you have to make another person safer and more capable.', 'Notice where service has been confused with status.'],
    reflection: 'How is Christ reshaping my understanding of authority as service?',
  },
  {
    day: 25,
    part: 'Morality',
    title: 'The Dignity of the Human Person',
    introduction: 'Christian moral life begins with a vision of the person, not a list of isolated decisions. Each human being is created in God’s image, called to truth and communion, and never reducible to a body, a role, a failure, or a political category. Moral guidance protects this dignity and teaches freedom how to flourish.',
    summary: [
      'The image of God grounds equal dignity across every difference.',
      'A person is an embodied unity of body and soul, not a mind using a disposable body.',
      'Freedom becomes mature through truth, virtue, and responsible choice.',
      'Moral acts involve the object chosen, the intention, and the circumstances.',
      'Good intentions cannot turn an intrinsically harmful act into a good one.',
      'Formation of conscience is a lifelong responsibility.',
      'The dignity of the person includes both rights and duties toward others.',
    ],
    application: ['Refuse language that reduces someone to a label or mistake.', 'Examine the intention behind one important choice.', 'Ask what truth would make one area of your freedom more humane.'],
    reflection: 'Whose dignity, including my own, do I need to see more truthfully?',
  },
  {
    day: 26,
    part: 'Morality',
    title: 'Conscience and Discernment',
    introduction: 'Conscience is not simply a private feeling that approves whatever we already want. It is the inner judgment by which a person recognizes the moral quality of a concrete act and commits to the good. A formed conscience listens to truth, seeks counsel, examines motives, and accepts the cost of faithful action.',
    summary: [
      'Conscience bears witness to a moral law that human beings do not invent at will.',
      'A person must follow a certain conscience, while also taking responsibility for forming it.',
      'Ignorance can be culpable when someone avoids learning what love and justice require.',
      'Prayer, Scripture, sound teaching, experience, and wise counsel shape discernment.',
      'Discernment distinguishes God’s invitation from anxiety, impulse, or social pressure.',
      'Peace does not always mean comfort; fidelity can involve costly clarity.',
      'A mature decision considers the effects on both self and neighbor.',
    ],
    application: ['Set aside ten minutes to examine one decision without distraction.', 'Seek counsel from someone known for wisdom rather than agreement.', 'Take the next honest step even if the entire path is not clear.'],
    reflection: 'What truth do I already know but keep postponing in my decisions?',
  },
  {
    day: 27,
    part: 'Morality',
    title: 'Virtue and the Shape of Character',
    introduction: 'A good life is not built from occasional heroic moments alone. Virtue is the stable habit of choosing the good, so that freedom becomes more ready for love. Through practice, grace, correction, and perseverance, character is gradually formed into something reliable for God and for other people.',
    summary: [
      'Virtue disposes a person toward good action and strengthens freedom.',
      'The cardinal virtues order practical wisdom, justice, courage, and temperance.',
      'Prudence applies moral truth to the complexity of concrete situations.',
      'Justice gives God and neighbor what is their due.',
      'Fortitude enables faithful action through fear, pain, and pressure.',
      'Temperance creates interior freedom by ordering desire rather than despising it.',
      'The theological virtues orient the whole person toward God as faith, hope, and charity.',
    ],
    application: ['Choose one virtue and practice it in a small, specific situation.', 'Pause before satisfying one impulse and ask what freedom would choose.', 'Thank God for a person whose character has made goodness credible to you.'],
    reflection: 'Which virtue would make me more dependable in love right now?',
  },
  {
    day: 28,
    part: 'Morality',
    title: 'Justice, Mercy, and the Common Good',
    introduction: 'Love of neighbor reaches beyond private kindness into the structures and habits that shape communal life. Catholic moral vision holds justice and mercy together: justice names what people are owed, while mercy refuses to abandon anyone to their worst circumstance. The common good asks what arrangements allow every person to participate and flourish.',
    summary: [
      'The common good includes respect for persons, social well-being, and peace.',
      'Solidarity recognizes that our lives are bound together across distance and difference.',
      'Subsidiarity protects the responsibility of families and local communities while supporting them when needed.',
      'The preferential care for the poor tests whether social life reflects God’s priorities.',
      'Works of mercy address immediate suffering while justice addresses its causes.',
      'Forgiveness does not remove the need for accountability or protection.',
      'Civic participation can be an expression of love of neighbor.',
    ],
    application: ['Learn one fact about a local need before forming an opinion about it.', 'Give time, money, or skill in a way that preserves another person’s agency.', 'Replace one quick judgment with a concrete act of solidarity.'],
    reflection: 'Where is God asking me to love my neighbor through more than private goodwill?',
  },
  {
    day: 29,
    part: 'Prayer',
    title: 'Prayer as Relationship',
    introduction: 'Prayer is the living relationship of the child with the Father through the Son in the Holy Spirit. It includes words, silence, attention, struggle, and the gradual surrender of our need to control outcomes. Prayer does not make us escape from life; it teaches us to inhabit life before God with greater truth and compassion.',
    summary: [
      'God’s desire for communion precedes every human attempt to pray.',
      'Adoration receives God as God rather than using prayer to manage him.',
      'Petition expresses dependence without dictating the form an answer must take.',
      'Intercession widens the heart by carrying another person before God.',
      'Thanksgiving trains attention toward grace without denying pain.',
      'Meditation engages memory, imagination, reason, and desire with revealed truth.',
      'Contemplation rests in God’s presence beyond the need to produce an experience.',
    ],
    application: ['Keep a short period of silent prayer even if it feels unproductive.', 'Pray for someone you find difficult to understand.', 'End the day by naming both one grace and one unresolved burden.'],
    reflection: 'What would make my prayer more honest and more available to relationship?',
  },
  {
    day: 30,
    part: 'Prayer',
    title: 'Hope for the Journey Home',
    introduction: 'The Christian life is a pilgrimage toward the fullness of communion with God. We live between promise and fulfillment, carrying wounds, responsibilities, joys, and the hope of resurrection. The Catechism’s overview ends not with mastery but with an invitation to continue: to receive grace, practice love, and trust that God is bringing creation home.',
    summary: [
      'Christian hope rests on God’s promise rather than on predictable circumstances.',
      'The communion of saints joins the living, the faithful departed, and the blessed in Christ.',
      'The Church’s final destiny is communion with God, not escape from embodied creation.',
      'Judgment reveals the truth of our lives and the seriousness of love.',
      'Purgatory expresses hope that God completes the healing of those who die in friendship with him.',
      'Heaven is the fulfillment of desire in direct communion with the Trinity.',
      'Prayer becomes a way of walking today toward the future God has promised.',
    ],
    application: ['Write one sentence about the kind of person you hope grace is making you.', 'Entrust a deceased loved one or a fear about death to God’s mercy.', 'Choose one practice from this month to carry into the next season.'],
    reflection: 'What promise of God do I want to let guide the next step of my pilgrimage?',
  },
]


const cccLibraryBatch1: Topic[] = [
  {
    day: 1,
    part: 'Creed',
    title: 'The Human Person Open to God',
    introduction: 'The Catechism begins with the human search for God because every person carries a capacity for truth, goodness, and communion that no created thing can finally satisfy. This opening movement is not an argument against human questions; it is an invitation to recognize them as places where grace may already be at work.',
    summary: [
      'The desire for God is written into the human heart.',
      'Religions express humanity’s search, even when human sin distorts it.',
      'God’s initiative makes friendship with him possible.',
      'Faith fulfills rather than humiliates reason.',
      'The search for God becomes a way of life, not only a conclusion.'
    ],
    application: [
      'Name the question beneath one recurring restlessness.',
      'Give a few quiet minutes to desire without immediately distracting yourself.'
    ],
    reflection: 'What does my deepest desire seem to be asking of me?'
  },
  {
    day: 2,
    part: 'Creed',
    title: 'Revelation: God Gives Himself',
    introduction: 'God reveals himself because he freely desires relationship with his creatures. Revelation is not merely a deposit of religious facts but the gradual sharing of God’s own life through words, deeds, promises, and finally the person of Jesus Christ.',
    summary: [
      'God’s revelation is a gift of love and not a human discovery.',
      'It unfolds through a history of relationship with a people.',
      'Christ is the fullness and center of revelation.',
      'Revelation calls for trust, obedience, and a response of the whole person.',
      'The Church receives and transmits this gift across generations.'
    ],
    application: [
      'Read a short passage from the Gospels as a personal address.',
      'Thank God for one person through whom faith reached you.'
    ],
    reflection: 'Where might I be receiving God’s self-gift without recognizing it?'
  },
  {
    day: 3,
    part: 'Creed',
    title: 'Faith and the Search for Understanding',
    introduction: 'Faith is the free assent of the whole person to God who reveals himself. It does not ask us to stop thinking; it joins trust and understanding so that reason can approach a mystery larger than its own limits without surrendering honesty.',
    summary: [
      'Faith is possible because God is trustworthy.',
      'Human freedom gives faith its personal and relational character.',
      'Faith seeks understanding through study, prayer, and practice.',
      'Reason and faith have distinct gifts and need not be enemies.',
      'Doubt can become an occasion for truthful seeking when carried patiently.'
    ],
    application: [
      'Bring one intellectual difficulty to prayer without pretending it is solved.',
      'Learn from a trustworthy source before repeating a claim about faith.'
    ],
    reflection: 'Where do I need faith to become a more thoughtful trust?'
  },
  {
    day: 4,
    part: 'Creed',
    title: 'The One God: Father, Son, and Spirit',
    introduction: 'The Church confesses one God in three Persons: Father, Son, and Holy Spirit. This mystery guards two truths at once: God is one, and God is eternally living communion. Christian prayer begins inside this life of shared gift.',
    summary: [
      'The divine unity is not a solitary monad but perfect communion.',
      'The Persons are distinct without being divided.',
      'The Father is source, the Son is eternally begotten, and the Spirit proceeds in love.',
      'God’s works reveal the one undivided action of the Trinity.',
      'Human relationships find their healing pattern in this communion.'
    ],
    application: [
      'Pray the Sign of the Cross with deliberate attention.',
      'Choose communion over control in one relationship today.'
    ],
    reflection: 'How does the Trinity expand my understanding of love?'
  },
  {
    day: 5,
    part: 'Creed',
    title: 'Creation, Providence, and Freedom',
    introduction: 'The world exists because God freely wills its goodness and continually sustains it. Providence does not turn people into puppets or make suffering simple; it holds creaturely freedom, natural processes, and divine care within a hope larger than any single moment.',
    summary: [
      'Creation depends on God at every moment.',
      'God grants creatures real causes and meaningful freedom.',
      'Providence works through ordinary events as well as signs of grace.',
      'The existence of evil does not make God the author of evil.',
      'Trust grows by cooperating with goodness rather than demanding control.'
    ],
    application: [
      'Care for one part of creation without seeking recognition.',
      'Release one attempt to control another person’s response.'
    ],
    reflection: 'Where am I being invited to cooperate with providence rather than manage everything?'
  },
  {
    day: 6,
    part: 'Creed',
    title: 'Angels, Humanity, and the Fall',
    introduction: 'The Catechism places human beings within a wider creation that includes spiritual creatures and the mystery of freedom’s refusal. The fall explains why goodness and fracture coexist so persistently in us, while the promise of mercy prevents this realism from becoming despair.',
    summary: [
      'Angels are personal spiritual creatures who serve God’s purposes.',
      'Human beings are a unity of body and soul made for communion.',
      'The first sin is a refusal to trust the goodness of God.',
      'Original sin wounds nature without destroying its dignity.',
      'Christ’s redemption is greater than the wound it heals.'
    ],
    application: [
      'Acknowledge one pattern you cannot overcome by willpower alone.',
      'Ask for help before temptation becomes a settled choice.'
    ],
    reflection: 'What would honest hope look like in the face of my own woundedness?'
  },
  {
    day: 7,
    part: 'Creed',
    title: 'The Covenant History of Salvation',
    introduction: 'God educates humanity through covenant: promises made concrete in families, deliverance, law, worship, kingship, exile, and prophetic hope. This long history teaches that salvation is not an escape from time but God’s faithful work within it.',
    summary: [
      'Abraham receives a blessing meant for all nations.',
      'The Exodus makes freedom a journey into worship and responsibility.',
      'The law forms a people who can protect life and neighbor.',
      'The prophets defend fidelity to God and justice for the poor.',
      'The new covenant gathers every people into Christ.'
    ],
    application: [
      'Review one season of your life for signs of patient divine fidelity.',
      'Keep one promise that serves another person’s good.'
    ],
    reflection: 'Where can I see God forming a people rather than only helping individuals?'
  },
  {
    day: 8,
    part: 'Creed',
    title: 'Jesus Christ, True God and True Man',
    introduction: 'The Son of God becomes fully human without ceasing to be divine. In the Incarnation, God does not merely visit humanity; he takes human nature into the person of the Word, making Christ the living meeting place between God and the world.',
    summary: [
      'Christ is one divine Person with divine and human natures.',
      'His humanity is complete, embodied, intelligent, emotional, and free.',
      'Mary receives the mystery through faith and obedience.',
      'Jesus reveals the Father in human gestures and words.',
      'Human nature is shown to be capable of communion with God.'
    ],
    application: [
      'Bring a bodily need into prayer instead of treating it as an interruption.',
      'Honor the dignity of another person’s embodied life.'
    ],
    reflection: 'What part of my humanity do I struggle to believe God can inhabit?'
  },
  {
    day: 9,
    part: 'Creed',
    title: 'Christ’s Mission and Kingdom',
    introduction: 'Jesus announces and embodies the kingdom of God. His teaching, healings, friendships, prayer, and conflicts all reveal a reign that restores communion and calls people to conversion. He does not simply offer advice; he gathers disciples around himself.',
    summary: [
      'The kingdom is God’s saving presence arriving in history.',
      'Jesus’ parables reshape assumptions about power and belonging.',
      'His miracles signify restoration rather than spectacle.',
      'Discipleship includes a new family, a new ethic, and a new hope.',
      'The kingdom is present now and awaits its final fulfillment.'
    ],
    application: [
      'Let one teaching of Jesus revise a practical decision.',
      'Include someone overlooked in a conversation or shared activity.'
    ],
    reflection: 'Which expectation about success does Jesus’ kingdom ask me to surrender?'
  },
  {
    day: 10,
    part: 'Creed',
    title: 'The Paschal Mystery',
    introduction: 'Christ saves through the whole passage of his suffering, death, descent among the dead, resurrection, and glorification. The Paschal Mystery is not only the center of doctrine; it becomes the pattern by which Christian life learns to surrender, receive, and begin again.',
    summary: [
      'Jesus freely offers himself in obedience to the Father.',
      'The cross reveals both sin’s violence and mercy’s strength.',
      'The resurrection is bodily and opens the new creation.',
      'Christ’s victory reaches the dead and breaks death’s final claim.',
      'Baptized life participates in this passage from death to life.'
    ],
    application: [
      'Bring one loss to Christ without forcing a quick explanation.',
      'Choose a small act of renewed life where discouragement has settled.'
    ],
    reflection: 'Where is Christ inviting me to pass through death toward a more truthful life?'
  },
  {
    day: 11,
    part: 'Creed',
    title: 'The Holy Spirit and the Church',
    introduction: 'The Spirit makes the risen Christ present, forms the Church, gives gifts, and opens hearts to holiness. The Church is therefore more than an association of like‑minded people: she is a living body whose unity is received from the Spirit and tested through love.',
    summary: [
      'The Spirit is Lord and giver of life.',
      'Pentecost sends the Church into every culture.',
      'Charisms are ordered toward service and communion.',
      'The Spirit works through Scripture, sacraments, ministry, and conscience.',
      'The Church remains in need of continual purification and renewal.'
    ],
    application: [
      'Use one ability for the good of the community today.',
      'Pray for renewal where the Church feels tired or divided.'
    ],
    reflection: 'What gift might the Spirit be asking me to offer rather than protect?'
  },
  {
    day: 12,
    part: 'Creed',
    title: 'Mary, the Saints, and the Last Things',
    introduction: 'The Creed’s horizon widens toward Mary, the communion of saints, forgiveness, resurrection, judgment, and eternal life. These are not detached endings but the destiny toward which every act of faith is moving: the complete restoration of communion with God.',
    summary: [
      'Mary is redeemed in a unique way and becomes a model of receptive faith.',
      'The saints show grace made concrete in diverse lives.',
      'The Church prays in communion across death.',
      'Judgment reveals the truth of love and responsibility.',
      'Resurrection and eternal life fulfill the person rather than erasing embodiment.'
    ],
    application: [
      'Ask a saint to pray with you in one concrete struggle.',
      'Make one choice today in light of the person you hope to become eternally.'
    ],
    reflection: 'What future promised by God most changes the way I live today?'
  },
  {
    day: 13,
    part: 'Creed',
    title: 'The Mystery of the Church',
    introduction: 'The Church is not merely an institution or a gathering of like‑minded people. She is the Body of Christ, born from the Father’s plan, revealed in the Son, and animated by the Spirit. Her holiness is real because her life comes from God, even while her members continually need conversion.',
    summary: [
      'The Church is both visible and spiritual.',
      'She is one, holy, catholic, and apostolic.',
      'Christ remains present through her teaching, worship, and mission.',
      'Every baptized person has a vocation within the Church’s life.',
      'Holiness grows through communion, conversion, and service.'
    ],
    application: [
      'Pray for someone in your parish or community.',
      'Offer one act of service that strengthens communion.'
    ],
    reflection: 'How is Christ inviting me to help build up his people?'
  },
  {
    day: 14,
    part: 'Creed',
    title: 'The Marks of the Church',
    introduction: 'The Church’s four marks—one, holy, catholic, and apostolic—are not slogans but signs of her identity and mission. They reveal what Christ has given her and what she is called to manifest in every age.',
    summary: [
      'The Church is one because her source is the Trinity.',
      'She is holy because Christ is her life.',
      'She is catholic because she is sent to all peoples.',
      'She is apostolic because she is built on the apostles and their teaching.',
      'These marks call believers to unity, conversion, mission, and fidelity.'
    ],
    application: [
      'Seek reconciliation in one strained relationship.',
      'Learn one teaching of the apostles more deeply.'
    ],
    reflection: 'Which mark of the Church is Christ asking me to embody today?'
  },
  {
    day: 15,
    part: 'Creed',
    title: 'The Communion of Saints',
    introduction: 'The communion of saints is the living bond that unites believers on earth, souls being purified, and the saints in glory. It is a communion of life, prayer, and charity rooted in Christ’s victory over death.',
    summary: [
      'The Church’s unity extends across death.',
      'Saints intercede for the living.',
      'Believers support one another through prayer and sacrifice.',
      'Holiness is shared, not isolated.',
      'Communion strengthens the whole body of Christ.'
    ],
    application: [
      'Ask a saint to accompany you in one struggle.',
      'Offer a prayer or sacrifice for someone in need.'
    ],
    reflection: 'How can I live more consciously within the communion of saints?'
  },
  {
    day: 16,
    part: 'Creed',
    title: 'The Forgiveness of Sins',
    introduction: 'The Church proclaims forgiveness because Christ has conquered sin. This forgiveness is not vague comfort but a concrete restoration of communion offered through faith, conversion, and the sacraments.',
    summary: [
      'Sin harms communion with God and neighbor.',
      'Christ’s mercy is stronger than human failure.',
      'Forgiveness requires truthfulness and conversion.',
      'The Church offers reconciliation through sacramental grace.',
      'Mercy restores hope and renews freedom.'
    ],
    application: [
      'Name one place where you need mercy.',
      'Extend forgiveness to someone in a small, concrete way.'
    ],
    reflection: 'Where am I resisting the mercy God wants to give me?'
  },
  {
    day: 17,
    part: 'Creed',
    title: 'The Resurrection of the Body',
    introduction: 'Christian hope includes the resurrection of the body, not escape from it. God’s final promise is the restoration of the whole person—body and soul—in a new creation where communion is complete.',
    summary: [
      'Resurrection is bodily, not merely spiritual.',
      'Christ’s risen body is the pattern of our future.',
      'Death does not erase the goodness of embodiment.',
      'Hope includes the healing of every wound.',
      'Eternal life fulfills the person without erasing identity.'
    ],
    application: [
      'Honor your body with one act of care or reverence.',
      'Offer hope to someone facing illness or loss.'
    ],
    reflection: 'What changes when I remember that my body is destined for resurrection?'
  },
  {
    day: 18,
    part: 'Creed',
    title: 'The Last Judgment',
    introduction: 'The Last Judgment reveals the truth of each life in the light of God’s love. It is not meant to terrify but to awaken responsibility, hope, and the desire for communion that shapes every choice.',
    summary: [
      'God judges with truth and mercy.',
      'Every act has meaning in the light of eternity.',
      'Judgment reveals the reality of love and freedom.',
      'Christ is the judge who gave his life for the world.',
      'Hope prepares the heart for honest accountability.'
    ],
    application: [
      'Make one choice today in light of eternity.',
      'Repair one small harm without waiting for praise.'
    ],
    reflection: 'What truth about my life do I need to face with hope rather than fear?'
  },
  {
    day: 19,
    part: 'Creed',
    title: 'Heaven, Hell, and Purgatory',
    introduction: 'The final destiny of the human person is communion with God. Heaven fulfills this communion, hell is its tragic refusal, and purgatory is the merciful purification that prepares the heart for perfect love.',
    summary: [
      'Heaven is the fulfillment of every true desire.',
      'Hell is the consequence of freely rejecting love.',
      'Purgatory purifies imperfect love.',
      'God desires all to be saved.',
      'Hope trusts in mercy while taking responsibility for freedom.'
    ],
    application: [
      'Pray for the faithful departed.',
      'Choose one act that strengthens love rather than indifference.'
    ],
    reflection: 'How does my destiny in God reshape the way I live today?'
  },
  {
    day: 20,
    part: 'Creed',
    title: 'The Mystery of God’s Will',
    introduction: 'God’s will is not a hidden puzzle but the unfolding of his love in our lives. It is discovered through prayer, Scripture, counsel, and the quiet movements of grace that shape our desires toward communion.',
    summary: [
      'God’s will seeks our good, not our diminishment.',
      'Discernment requires patience and trust.',
      'Freedom cooperates with grace.',
      'God speaks through Scripture, circumstances, and conscience.',
      'Love is the heart of every divine command.'
    ],
    application: [
      'Ask God to shape one desire toward truth.',
      'Seek counsel from someone wise and faithful.'
    ],
    reflection: 'Where might God be inviting me to trust his love more deeply?'
  }
];

const cccLibraryBatch2: Topic[] = [
  {
    day: 21,
    part: 'Creed',
    title: 'The Incarnation: God Made Flesh',
    introduction: 'The Incarnation is the moment when the eternal Word takes on human nature. God does not merely speak to humanity; he enters our condition, revealing divine love through a real human life.',
    summary: [
      'The Word became flesh without ceasing to be divine.',
      'Jesus shares fully in human experience except sin.',
      'The Incarnation reveals God’s solidarity with humanity.',
      'Christ’s humanity becomes the instrument of our salvation.',
      'The mystery invites adoration, trust, and imitation.'
    ],
    application: [
      'Bring one human limitation to prayer instead of hiding it.',
      'Honor the humanity of someone you find difficult to understand.'
    ],
    reflection: 'What changes when I remember that God has lived a human life?'
  },
  {
    day: 22,
    part: 'Creed',
    title: 'The Hidden Life of Jesus',
    introduction: 'Before preaching and miracles, Jesus lived decades of quiet, ordinary life. These years reveal that holiness is not confined to dramatic moments but grows through fidelity in daily tasks and relationships.',
    summary: [
      'Jesus sanctifies ordinary human life.',
      'Work, family, and community become places of grace.',
      'Obedience and humility mark his hidden years.',
      'Holiness grows in silence and patience.',
      'The hidden life prepares the heart for mission.'
    ],
    application: [
      'Offer one ordinary task to God with deliberate love.',
      'Practice patience in a small moment of frustration.'
    ],
    reflection: 'Where might God be forming me quietly rather than visibly?'
  },
  {
    day: 23,
    part: 'Creed',
    title: 'The Public Ministry of Jesus',
    introduction: 'Jesus proclaims the kingdom through teaching, healing, and compassionate presence. His ministry reveals God’s nearness and calls people to conversion, trust, and a new way of living.',
    summary: [
      'Jesus teaches with authority rooted in truth.',
      'His miracles reveal restoration, not spectacle.',
      'He forms disciples through friendship and challenge.',
      'The kingdom welcomes the poor, sinners, and outsiders.',
      'Conversion is the doorway into new life.'
    ],
    application: [
      'Let one teaching of Jesus shape a practical decision.',
      'Offer compassion to someone who feels excluded.'
    ],
    reflection: 'Which part of Jesus’ ministry speaks most directly to my life now?'
  },
  {
    day: 24,
    part: 'Creed',
    title: 'The Parables of Jesus',
    introduction: 'Jesus uses parables to reveal the kingdom in images drawn from daily life. These stories unsettle assumptions, awaken desire, and invite listeners into a deeper conversion of heart.',
    summary: [
      'Parables reveal truth gradually and personally.',
      'They challenge worldly ideas of success and power.',
      'They show God’s patience, generosity, and justice.',
      'They invite listeners to choose the kingdom.',
      'Understanding grows through prayer and humility.'
    ],
    application: [
      'Read one parable slowly and notice what surprises you.',
      'Let a parable revise one assumption about others.'
    ],
    reflection: 'Which parable is inviting me to see differently?'
  },
  {
    day: 25,
    part: 'Creed',
    title: 'The Miracles of Jesus',
    introduction: 'Jesus’ miracles are signs of the kingdom breaking into human suffering. They reveal compassion, restore dignity, and point toward the deeper healing of sin and death.',
    summary: [
      'Miracles express God’s mercy and power.',
      'They restore people to community and hope.',
      'They reveal Jesus’ identity as the Son of God.',
      'They call for faith and conversion.',
      'They anticipate the new creation.'
    ],
    application: [
      'Ask Christ to heal one wound honestly.',
      'Offer encouragement to someone facing discouragement.'
    ],
    reflection: 'Where do I need Christ’s healing presence today?'
  },
  {
    day: 26,
    part: 'Creed',
    title: 'The Transfiguration',
    introduction: 'On the mountain, Jesus reveals his divine glory to Peter, James, and John. This moment strengthens their faith and prepares them for the scandal of the cross.',
    summary: [
      'The Transfiguration reveals Christ’s divine identity.',
      'It connects Jesus to the law and the prophets.',
      'It prepares disciples for suffering and hope.',
      'It shows the destiny of humanity in glory.',
      'It invites contemplation of Christ’s face.'
    ],
    application: [
      'Spend a moment in silent adoration of Christ.',
      'Seek God’s light in a place of confusion.'
    ],
    reflection: 'Where do I need Christ’s light to strengthen my hope?'
  },
  {
    day: 27,
    part: 'Creed',
    title: 'The Passion of Christ',
    introduction: 'Jesus freely embraces suffering and death out of love for the Father and for humanity. The Passion reveals both the gravity of sin and the depth of divine mercy.',
    summary: [
      'Christ suffers freely and lovingly.',
      'The cross reveals sin’s violence.',
      'The cross reveals mercy’s strength.',
      'Jesus intercedes for sinners even in suffering.',
      'The Passion becomes the pattern of Christian love.'
    ],
    application: [
      'Bring one fear or sorrow to Christ without hiding.',
      'Choose a small act of sacrificial love today.'
    ],
    reflection: 'What part of Christ’s Passion speaks most deeply to my heart?'
  },
  {
    day: 28,
    part: 'Creed',
    title: 'The Death of Christ',
    introduction: 'Jesus’ death is not defeat but the moment of his self‑offering for the salvation of the world. Through the cross, he reconciles humanity to God and opens the way to new life.',
    summary: [
      'Christ dies in obedience and love.',
      'His death reconciles humanity to God.',
      'The cross reveals the seriousness of sin.',
      'The cross reveals the generosity of mercy.',
      'Salvation is a gift, not an achievement.'
    ],
    application: [
      'Contemplate the cross for a few quiet minutes.',
      'Repair one small harm caused by impatience or pride.'
    ],
    reflection: 'How does Christ’s death reshape my understanding of love?'
  },
  {
    day: 29,
    part: 'Creed',
    title: 'The Descent to the Dead',
    introduction: 'Christ descends among the dead to proclaim victory and open the gates of life. This mystery reveals that no human place is beyond the reach of divine mercy.',
    summary: [
      'Christ truly enters the realm of the dead.',
      'He announces victory over death.',
      'He opens the way to salvation for the righteous.',
      'His solidarity reaches even the forgotten.',
      'Hope extends beyond earthly limits.'
    ],
    application: [
      'Pray for someone who feels forgotten or abandoned.',
      'Offer hope to someone facing despair.'
    ],
    reflection: 'Where do I need Christ’s presence in a place that feels lifeless?'
  },
  {
    day: 30,
    part: 'Creed',
    title: 'The Resurrection of Christ',
    introduction: 'The resurrection is the central truth of Christian faith. Jesus rises bodily, conquering death and inaugurating the new creation. This victory transforms fear into hope and despair into courage.',
    summary: [
      'The resurrection is a real, historical, and bodily event.',
      'It confirms Jesus’ identity as the Son of God.',
      'It reveals victory over sin and death.',
      'It opens the way to new life for believers.',
      'It becomes the foundation of Christian hope.'
    ],
    application: [
      'Look for one sign of new life in your day.',
      'Encourage someone who feels stuck in discouragement.'
    ],
    reflection: 'Where do I need the risen Christ to bring new life?'
  },
  {
    day: 31,
    part: 'Creed',
    title: 'The Appearances of the Risen Christ',
    introduction: 'Jesus appears to disciples in diverse ways, strengthening their faith and sending them into mission. These encounters reveal that the risen Lord is both familiar and transformed.',
    summary: [
      'Christ appears to individuals and groups.',
      'He strengthens faith and dispels fear.',
      'He reveals continuity with his earthly life.',
      'He prepares disciples for mission.',
      'He teaches that resurrection is relational.'
    ],
    application: [
      'Recall a moment when hope surprised you.',
      'Speak a word of peace to someone anxious.'
    ],
    reflection: 'How might Christ be appearing in my life through quiet signs?'
  },
  {
    day: 32,
    part: 'Creed',
    title: 'The Ascension of Christ',
    introduction: 'Christ ascends to the Father, not to leave humanity behind but to bring human nature into the heart of God. The Ascension reveals our destiny and prepares the Church for the Spirit’s coming.',
    summary: [
      'Christ enters heavenly glory.',
      'He intercedes for humanity.',
      'He prepares a place for believers.',
      'He sends the Church into mission.',
      'The Ascension reveals human dignity.'
    ],
    application: [
      'Offer one prayer of trust for your future.',
      'Support someone beginning a new chapter in life.'
    ],
    reflection: 'What part of my life needs the hope of Christ’s Ascension?'
  },
  {
    day: 33,
    part: 'Creed',
    title: 'Pentecost and the Gift of the Spirit',
    introduction: 'At Pentecost, the Holy Spirit descends upon the disciples, transforming fear into courage and forming the Church. The Spirit empowers believers for witness, communion, and holiness.',
    summary: [
      'Pentecost fulfills Christ’s promise.',
      'The Spirit gives courage and clarity.',
      'The Church becomes missionary.',
      'Charisms serve communion and mission.',
      'The Spirit renews hearts and communities.'
    ],
    application: [
      'Pray “Come, Holy Spirit” with sincerity.',
      'Follow one quiet prompting toward goodness.'
    ],
    reflection: 'Where might the Spirit be inviting me into deeper courage?'
  },
  {
    day: 34,
    part: 'Creed',
    title: 'The Holy Spirit in the Life of the Church',
    introduction: 'The Spirit animates every dimension of the Church’s life—Scripture, sacraments, prayer, mission, and holiness. Without the Spirit, the Church would be a mere institution; with the Spirit, she becomes the living Body of Christ.',
    summary: [
      'The Spirit inspires Scripture.',
      'The Spirit sanctifies the sacraments.',
      'The Spirit guides conscience and discernment.',
      'The Spirit forms unity amid diversity.',
      'The Spirit renews the Church across ages.'
    ],
    application: [
      'Use one gift for the good of your community.',
      'Pray for renewal where the Church feels weary.'
    ],
    reflection: 'What gift might the Spirit be asking me to offer more freely?'
  },
  {
    day: 35,
    part: 'Creed',
    title: 'The Church as the Body of Christ',
    introduction: 'The Church is not simply an organization but a living body united to Christ. Through baptism, believers become members of this body, sharing in Christ’s life and mission.',
    summary: [
      'Christ is the head of the Church.',
      'Believers form one body with diverse gifts.',
      'Unity grows through charity and truth.',
      'The body suffers when one member suffers.',
      'The Church continues Christ’s mission.'
    ],
    application: [
      'Support someone who feels overlooked.',
      'Use one ability to strengthen unity.'
    ],
    reflection: 'How can I live more consciously as a member of Christ’s body?'
  },
  {
    day: 36,
    part: 'Creed',
    title: 'The Church as Temple of the Spirit',
    introduction: 'The Church is the dwelling place of the Holy Spirit. Through grace, believers become living temples where God’s presence can be encountered and shared.',
    summary: [
      'The Spirit dwells in the Church and in believers.',
      'Holiness is the fruit of the Spirit’s presence.',
      'The Spirit unites believers in charity.',
      'The Spirit empowers mission and witness.',
      'The Spirit transforms hearts from within.'
    ],
    application: [
      'Invite the Spirit into one difficult situation.',
      'Practice one act of charity inspired by grace.'
    ],
    reflection: 'Where do I need the Spirit to make me a living temple?'
  },
  {
    day: 37,
    part: 'Creed',
    title: 'The People of God',
    introduction: 'The Church is the People of God, called from every nation to live in covenant with the Lord. This identity reveals that salvation is communal, missionary, and rooted in divine initiative.',
    summary: [
      'The People of God share one dignity and mission.',
      'They are called to holiness and service.',
      'They participate in Christ’s priestly, prophetic, and kingly offices.',
      'They journey together toward the kingdom.',
      'Their unity is a sign of God’s plan for humanity.'
    ],
    application: [
      'Pray for someone in your community.',
      'Offer one act of service that strengthens communion.'
    ],
    reflection: 'How is God inviting me to live more consciously as part of his people?'
  },
  {
    day: 38,
    part: 'Creed',
    title: 'The Hierarchical Structure of the Church',
    introduction: 'Christ establishes a visible structure in the Church to serve unity, truth, and charity. Authority in the Church is not domination but service modeled on Christ’s own self‑giving.',
    summary: [
      'Christ entrusts authority to the apostles and their successors.',
      'The pope serves the unity of the Church.',
      'Bishops shepherd local churches.',
      'Priests and deacons serve through ministry.',
      'Authority exists for communion and mission.'
    ],
    application: [
      'Pray for your bishop or pastor.',
      'Practice leadership through service rather than control.'
    ],
    reflection: 'How can I support the Church’s mission through humble service?'
  },
  {
    day: 39,
    part: 'Creed',
    title: 'The Laity and Their Mission',
    introduction: 'Lay people share in Christ’s mission through their daily lives—family, work, culture, and society. Their vocation is to bring the Gospel into places where clergy cannot reach.',
    summary: [
      'The laity participate in Christ’s offices.',
      'Their mission unfolds in ordinary life.',
      'They transform society through charity and truth.',
      'Holiness grows through daily fidelity.',
      'Their witness is essential to the Church’s mission.'
    ],
    application: [
      'Live one moment of your day with intentional charity.',
      'Bring faith into one ordinary decision.'
    ],
    reflection: 'Where is God calling me to witness in my daily life?'
  },
  {
    day: 40,
    part: 'Creed',
    title: 'The Consecrated Life',
    introduction: 'Consecrated life is a sign of the kingdom, revealing total dedication to Christ through poverty, chastity, and obedience. It reminds the Church of her ultimate destiny in God.',
    summary: [
      'Consecrated life is rooted in baptismal grace.',
      'It manifests radical availability to God.',
      'It serves the Church through prayer and mission.',
      'It witnesses to the coming kingdom.',
      'It calls all believers to deeper conversion.'
    ],
    application: [
      'Pray for someone living a consecrated vocation.',
      'Practice one act of simplicity or detachment.'
    ],
    reflection: 'What part of my life needs greater freedom for God’s call?'
  }
];

const cccLibraryBatch3: Topic[] = [
  {
    day: 41,
    part: 'Creed',
    title: 'The Church’s Mission',
    introduction: 'The Church exists to evangelize—to proclaim Christ, form disciples, and serve the world in charity and truth. Her mission flows from the Father’s love, the Son’s saving work, and the Spirit’s power.',
    summary: [
      'Mission is rooted in the Trinity.',
      'Evangelization announces Christ in word and witness.',
      'The Church serves both spiritual and material needs.',
      'Holiness strengthens credibility in mission.',
      'Every believer shares responsibility for the Gospel.'
    ],
    application: [
      'Speak one word of encouragement rooted in faith.',
      'Serve someone quietly without expecting recognition.'
    ],
    reflection: 'Where is Christ inviting me to participate in his mission?'
  },
  {
    day: 42,
    part: 'Creed',
    title: 'Sacred Scripture',
    introduction: 'Scripture is the inspired Word of God, entrusted to the Church. Through human authors, God speaks truth for the sake of salvation, inviting believers into a living dialogue.',
    summary: [
      'Scripture is inspired by the Holy Spirit.',
      'It teaches truth for the sake of salvation.',
      'It must be interpreted within Tradition.',
      'Christ is the center of all Scripture.',
      'Prayerful reading opens the heart to grace.'
    ],
    application: [
      'Read one passage slowly and notice a single word that stands out.',
      'Approach Scripture as a conversation rather than an assignment.'
    ],
    reflection: 'How might God be speaking to me through Scripture today?'
  },
  {
    day: 43,
    part: 'Creed',
    title: 'Sacred Tradition',
    introduction: 'Tradition is the living transmission of the Gospel, entrusted by Christ to the apostles and handed on through the Church’s teaching, worship, and life. It is not a museum but a living memory.',
    summary: [
      'Tradition transmits the Gospel across generations.',
      'It includes teaching, worship, and lived faith.',
      'It is guided by the Holy Spirit.',
      'Scripture and Tradition form one sacred deposit.',
      'Tradition grows without contradicting its origins.'
    ],
    application: [
      'Learn one teaching of the Church more deeply.',
      'Practice a devotion that has shaped generations of believers.'
    ],
    reflection: 'What part of Tradition helps me understand Christ more clearly?'
  },
  {
    day: 44,
    part: 'Creed',
    title: 'The Magisterium',
    introduction: 'The Magisterium is the Church’s teaching office, entrusted with preserving, explaining, and applying the Gospel. Its authority serves truth, unity, and the salvation of souls.',
    summary: [
      'The Magisterium serves the Word of God.',
      'It teaches with Christ’s delegated authority.',
      'It protects the Church from error.',
      'It interprets Scripture and Tradition authentically.',
      'Its purpose is communion and salvation.'
    ],
    application: [
      'Read a short teaching from the Catechism.',
      'Pray for those who guide the Church’s teaching.'
    ],
    reflection: 'How does the Church’s teaching help me trust Christ more deeply?'
  },
  {
    day: 45,
    part: 'Creed',
    title: 'The Unity of Scripture',
    introduction: 'Though written over centuries, Scripture forms a unified story of salvation. The Old and New Testaments illuminate each other, revealing Christ as their center.',
    summary: [
      'The Old Testament prepares for Christ.',
      'The New Testament fulfills the Old.',
      'Typology reveals deep connections across Scripture.',
      'The whole Bible tells one story of salvation.',
      'Christ is the key to understanding Scripture’s unity.'
    ],
    application: [
      'Notice one connection between an Old and New Testament passage.',
      'Read Scripture with an eye toward Christ’s presence.'
    ],
    reflection: 'Where do I see God weaving unity through the story of salvation?'
  },
  {
    day: 46,
    part: 'Creed',
    title: 'The Canon of Scripture',
    introduction: 'The canon is the definitive list of inspired books recognized by the Church. It reflects the discernment of the early Christian community guided by the Holy Spirit.',
    summary: [
      'The canon includes 46 Old Testament and 27 New Testament books.',
      'The Church discerned the canon through prayer and Tradition.',
      'The canon is complete and authoritative.',
      'Apocryphal writings may be helpful but are not inspired.',
      'The canon safeguards the truth of the Gospel.'
    ],
    application: [
      'Explore the structure of the Bible and its books.',
      'Read one biblical book you have never encountered before.'
    ],
    reflection: 'How does knowing the canon deepen my trust in Scripture?'
  },
  {
    day: 47,
    part: 'Creed',
    title: 'The Attributes of God',
    introduction: 'God reveals himself as infinite, eternal, all‑powerful, all‑knowing, and perfectly good. These attributes are not abstract concepts but expressions of the living God who loves and sustains creation.',
    summary: [
      'God is eternal and unchanging.',
      'God is all‑powerful and all‑knowing.',
      'God is perfectly good and faithful.',
      'God is present to creation without being limited by it.',
      'God’s attributes reveal his personal love.'
    ],
    application: [
      'Contemplate one attribute of God in silence.',
      'Trust God with one fear or uncertainty.'
    ],
    reflection: 'Which attribute of God strengthens my hope today?'
  },
  {
    day: 48,
    part: 'Creed',
    title: 'The Names of God',
    introduction: 'God reveals his name to express his identity and invite relationship. The divine name is holy, personal, and a sign of God’s desire to be known.',
    summary: [
      'God reveals his name to Moses as “I AM.”',
      'The divine name expresses existence and faithfulness.',
      'God’s name is holy and must be honored.',
      'Jesus reveals God as Father.',
      'Calling on God’s name is an act of trust.'
    ],
    application: [
      'Speak God’s name with reverence in prayer.',
      'Reflect on how God has been faithful in your life.'
    ],
    reflection: 'What does God’s name reveal about his closeness to me?'
  },
  {
    day: 49,
    part: 'Creed',
    title: 'Divine Providence',
    introduction: 'Providence is God’s loving care guiding creation toward its purpose. It does not eliminate human freedom but works through it, inviting trust even in uncertainty.',
    summary: [
      'God sustains and guides creation.',
      'Providence works through ordinary events.',
      'Human freedom cooperates with God’s plan.',
      'Suffering does not negate God’s care.',
      'Trust grows through surrender and hope.'
    ],
    application: [
      'Release one attempt to control an outcome.',
      'Notice a small sign of God’s care today.'
    ],
    reflection: 'Where is God inviting me to trust his providence?'
  },
  {
    day: 50,
    part: 'Creed',
    title: 'The Problem of Evil',
    introduction: 'Evil is a mystery that challenges faith, yet the Catechism teaches that God permits evil only to bring about a greater good. Christ’s cross reveals that suffering can be transformed by love.',
    summary: [
      'Evil arises from misuse of freedom.',
      'God never wills evil but permits it for greater good.',
      'Christ confronts evil through love.',
      'Suffering can become redemptive.',
      'Hope grows through trust in God’s plan.'
    ],
    application: [
      'Bring one painful situation to God honestly.',
      'Offer compassion to someone suffering.'
    ],
    reflection: 'Where do I need Christ’s light in the face of evil or suffering?'
  },
  {
    day: 51,
    part: 'Creed',
    title: 'Human Freedom',
    introduction: 'Freedom is the capacity to choose the good. It is not mere autonomy but the ability to act in truth and love. God’s grace strengthens freedom rather than replacing it.',
    summary: [
      'Freedom is ordered toward the good.',
      'Sin wounds and narrows freedom.',
      'Grace heals and elevates freedom.',
      'Freedom grows through virtue.',
      'True freedom is found in love.'
    ],
    application: [
      'Pause before one decision and ask what love requires.',
      'Practice one act of responsible freedom.'
    ],
    reflection: 'How is God inviting my freedom to grow in love?'
  },
  {
    day: 52,
    part: 'Creed',
    title: 'Human Dignity',
    introduction: 'Every person possesses inherent dignity because each is created in God’s image. This dignity is not earned and cannot be lost, even through sin or weakness.',
    summary: [
      'Human dignity comes from God, not achievement.',
      'Every person is worthy of respect.',
      'Sin cannot erase dignity.',
      'Dignity calls for justice and compassion.',
      'Christ reveals the full truth of human dignity.'
    ],
    application: [
      'Treat someone with deliberate respect today.',
      'Reject one habit of self‑criticism or comparison.'
    ],
    reflection: 'How can I honor the dignity God has given me and others?'
  },
  {
    day: 53,
    part: 'Creed',
    title: 'The Human Soul',
    introduction: 'The soul is the spiritual principle of the human person. It is created directly by God, immortal, and the source of intellect, freedom, and love.',
    summary: [
      'The soul is created immediately by God.',
      'It is immortal and destined for communion.',
      'Body and soul form one human nature.',
      'The soul is the seat of intellect and will.',
      'Grace heals and elevates the soul.'
    ],
    application: [
      'Reflect on one longing that points beyond material life.',
      'Care for your body as part of your spiritual vocation.'
    ],
    reflection: 'What desire in my soul is drawing me toward God?'
  },
  {
    day: 54,
    part: 'Creed',
    title: 'The Human Body',
    introduction: 'The body is not a prison for the soul but a gift through which the person expresses love, receives communion, and participates in God’s creation.',
    summary: [
      'The body shares in human dignity.',
      'It expresses the person’s identity.',
      'It is destined for resurrection.',
      'It participates in vocation and communion.',
      'It must be treated with reverence.'
    ],
    application: [
      'Honor your body with one act of care.',
      'Treat another’s body with reverence and respect.'
    ],
    reflection: 'How can I live more gratefully in my embodied life?'
  },
  {
    day: 55,
    part: 'Creed',
    title: 'Original Sin',
    introduction: 'Original sin describes the wounded condition inherited by all humanity. It is not personal guilt but a state that inclines us toward disorder, healed only through Christ’s grace.',
    summary: [
      'Original sin is a wounded condition, not personal fault.',
      'It inclines the heart toward selfishness.',
      'It disrupts harmony with God, neighbor, and creation.',
      'Christ’s grace heals and restores.',
      'Hope grows through honest realism.'
    ],
    application: [
      'Name one recurring pattern honestly.',
      'Ask for grace in a place where you feel stuck.'
    ],
    reflection: 'Where do I need Christ’s healing in my wounded nature?'
  },
  {
    day: 56,
    part: 'Creed',
    title: 'Personal Sin',
    introduction: 'Personal sin arises when individuals freely choose what contradicts love. It harms communion, wounds the heart, and creates patterns that affect others.',
    summary: [
      'Sin is a free choice against love.',
      'It harms relationships and community.',
      'It forms habits that shape character.',
      'Grace invites conversion and repair.',
      'Mercy restores hope and freedom.'
    ],
    application: [
      'Repair one small harm caused by impatience or pride.',
      'Practice honesty in naming a temptation.'
    ],
    reflection: 'What truth about my choices is God inviting me to face?'
  },
  {
    day: 57,
    part: 'Creed',
    title: 'Social Sin and Structures of Sin',
    introduction: 'Sin can become embedded in social systems, harming the vulnerable and distorting justice. The Gospel calls believers to transform these structures through truth, courage, and charity.',
    summary: [
      'Sin affects communities and institutions.',
      'Structures can perpetuate injustice.',
      'Believers must work for justice and reform.',
      'Charity and truth heal social wounds.',
      'Conversion includes social responsibility.'
    ],
    application: [
      'Learn about one local injustice affecting vulnerable people.',
      'Take one small step toward justice or advocacy.'
    ],
    reflection: 'Where is God calling me to respond to social brokenness?'
  },
  {
    day: 58,
    part: 'Creed',
    title: 'Grace',
    introduction: 'Grace is God’s free gift of divine life. It heals wounded nature, elevates freedom, and enables believers to participate in God’s own love.',
    summary: [
      'Grace is free and unearned.',
      'It heals and elevates human nature.',
      'Sanctifying grace makes us children of God.',
      'Actual grace strengthens us in concrete moments.',
      'Grace invites cooperation, not passivity.'
    ],
    application: [
      'Ask God for grace in one specific challenge.',
      'Respond generously to a quiet prompting toward goodness.'
    ],
    reflection: 'Where do I need grace to strengthen my freedom?'
  },
  {
    day: 59,
    part: 'Creed',
    title: 'Justification',
    introduction: 'Justification is God’s merciful act of forgiving sin and making the sinner righteous through grace. It is both a gift and a transformation of the heart.',
    summary: [
      'Justification forgives sin and renews the heart.',
      'It is entirely God’s gift.',
      'It includes sanctification and interior renewal.',
      'Faith and baptism initiate justification.',
      'Good works express the life of grace.'
    ],
    application: [
      'Thank God for one moment of mercy in your life.',
      'Practice one act that expresses renewed life.'
    ],
    reflection: 'How is God inviting me to live as someone justified by grace?'
  },
  {
    day: 60,
    part: 'Creed',
    title: 'Merit and Reward',
    introduction: 'Through grace, believers can merit spiritual goods—not by earning salvation, but by cooperating with God’s love. Merit expresses the dignity of freedom transformed by grace.',
    summary: [
      'Merit is possible only through grace.',
      'Good works express cooperation with God.',
      'God promises reward to faithful love.',
      'Merit strengthens hope and perseverance.',
      'Salvation remains entirely God’s gift.'
    ],
    application: [
      'Choose one act of love without seeking recognition.',
      'Persevere in a good habit even when it feels small.'
    ],
    reflection: 'Where is God inviting me to cooperate more freely with grace?'
  }
];

const cccLibraryBatch4: Topic[] = [
  {
    day: 61,
    part: 'Creed',
    title: 'The Church and the Sacraments',
    introduction: 'Christ entrusted the sacraments to the Church as effective signs of grace. They are not human inventions but divine gifts that communicate the life of Christ through visible means.',
    summary: [
      'Sacraments are instituted by Christ.',
      'They communicate grace through signs.',
      'They belong to the Church’s mission.',
      'They require faith and proper disposition.',
      'They form believers into Christ’s body.'
    ],
    application: [
      'Recall one sacrament that shaped your life.',
      'Approach a sacrament with renewed attentiveness.'
    ],
    reflection: 'How do the sacraments reveal Christ’s presence in my life?'
  },
  {
    day: 62,
    part: 'Creed',
    title: 'The Sacramental Economy',
    introduction: 'The sacramental economy is the way Christ’s saving work is communicated through the Church’s liturgy. It unites worship, grace, and daily life into one movement of divine love.',
    summary: [
      'Christ acts through the sacraments.',
      'The Spirit makes the sacraments effective.',
      'Liturgy expresses the Church’s faith.',
      'Grace flows from Christ’s Paschal Mystery.',
      'Sacraments strengthen communion and mission.'
    ],
    application: [
      'Prepare intentionally for one liturgical celebration.',
      'Let grace shape one practical decision today.'
    ],
    reflection: 'Where do I need to receive Christ’s saving work more consciously?'
  },
  {
    day: 63,
    part: 'Creed',
    title: 'The Liturgical Year',
    introduction: 'The liturgical year unfolds the mysteries of Christ across time. Through seasons and feasts, believers enter the rhythm of Christ’s life, death, resurrection, and glory.',
    summary: [
      'The liturgical year centers on Christ.',
      'Advent and Lent prepare the heart.',
      'Christmas and Easter celebrate salvation.',
      'Ordinary Time forms daily discipleship.',
      'Feasts and memorials honor saints and mysteries.'
    ],
    application: [
      'Live one liturgical season with intentional focus.',
      'Let a feast day inspire a concrete act of charity.'
    ],
    reflection: 'How can I let the liturgical year shape my spiritual rhythm?'
  },
  {
    day: 64,
    part: 'Creed',
    title: 'The Liturgy of the Hours',
    introduction: 'The Liturgy of the Hours sanctifies the day through prayer. It joins the Church’s voice to Christ’s eternal praise, inviting believers to offer time itself to God.',
    summary: [
      'The Hours sanctify the rhythm of the day.',
      'They unite personal prayer with the Church’s prayer.',
      'Psalms form the heart of the Hours.',
      'Clergy and religious are obliged to pray them.',
      'Lay people are encouraged to participate.'
    ],
    application: [
      'Pray one psalm slowly today.',
      'Offer a moment of your day intentionally to God.'
    ],
    reflection: 'Where can I let prayer interrupt my routine with grace?'
  },
  {
    day: 65,
    part: 'Creed',
    title: 'Sacred Signs and Symbols',
    introduction: 'God uses material signs—water, oil, bread, wine, touch, and words—to communicate grace. These symbols reveal that creation itself can become a vessel of divine life.',
    summary: [
      'Sacred signs express invisible grace.',
      'Symbols speak to the whole person.',
      'Creation participates in salvation.',
      'Signs prepare the heart for mystery.',
      'Sacraments use signs instituted by Christ.'
    ],
    application: [
      'Notice one sacred sign during worship.',
      'Let a symbol deepen your awareness of God’s presence.'
    ],
    reflection: 'Which sacred sign speaks most deeply to my heart?'
  },
  {
    day: 66,
    part: 'Creed',
    title: 'Christ’s Priesthood',
    introduction: 'Christ is the true priest who offers himself to the Father for the salvation of the world. All priesthood in the Church participates in his unique and eternal offering.',
    summary: [
      'Christ is the one mediator.',
      'His priesthood is eternal and perfect.',
      'Ministers share in his priesthood sacramentally.',
      'The faithful share in his priesthood through baptism.',
      'All Christian life becomes an offering.'
    ],
    application: [
      'Offer one part of your day consciously to God.',
      'Support someone who serves in ministry.'
    ],
    reflection: 'How can I live more consciously as part of Christ’s priestly people?'
  },
  {
    day: 67,
    part: 'Creed',
    title: 'The Church’s Worship',
    introduction: 'Worship is the heart of the Church’s life. It is not entertainment or self‑expression but participation in Christ’s offering to the Father through the Spirit.',
    summary: [
      'Worship centers on God, not preference.',
      'Christ is the true celebrant.',
      'The Spirit forms unity in worship.',
      'Symbols and gestures express faith.',
      'Worship sends believers into mission.'
    ],
    application: [
      'Arrive inwardly before worship begins.',
      'Let one gesture teach your heart what faith means.'
    ],
    reflection: 'How can I receive worship as Christ’s action before my own?'
  },
  {
    day: 68,
    part: 'Creed',
    title: 'The Church’s Holiness',
    introduction: 'The Church is holy because Christ is her life. Her holiness is real yet imperfect, calling every member to continual conversion and renewal.',
    summary: [
      'Holiness comes from Christ.',
      'The Church is holy despite human sin.',
      'Saints reveal holiness in diverse ways.',
      'Holiness grows through sacraments and charity.',
      'Every believer is called to holiness.'
    ],
    application: [
      'Practice one act of charity inspired by grace.',
      'Ask God to renew one area of your life.'
    ],
    reflection: 'Where is Christ inviting me into deeper holiness?'
  },
  {
    day: 69,
    part: 'Creed',
    title: 'The Church’s Catholicity',
    introduction: 'The Church is catholic because she is sent to all peoples and possesses the fullness of the means of salvation. Her universality reflects God’s desire to gather all humanity.',
    summary: [
      'Catholicity expresses universality.',
      'The Church welcomes every culture.',
      'She possesses the fullness of truth and grace.',
      'Unity does not erase diversity.',
      'Mission flows from catholicity.'
    ],
    application: [
      'Pray for the global Church.',
      'Learn about a Catholic community in another culture.'
    ],
    reflection: 'How does the Church’s universality expand my vision of faith?'
  },
  {
    day: 70,
    part: 'Creed',
    title: 'The Church’s Apostolicity',
    introduction: 'The Church is apostolic because she is founded on the apostles, continues their teaching, and is guided by their successors. Apostolicity ensures fidelity to Christ across ages.',
    summary: [
      'The Church is built on the apostles.',
      'She preserves apostolic teaching.',
      'Bishops succeed the apostles.',
      'Apostolicity safeguards unity and truth.',
      'Believers share in apostolic mission.'
    ],
    application: [
      'Learn one apostolic teaching more deeply.',
      'Practice fidelity in one small commitment.'
    ],
    reflection: 'Where is Christ inviting me to live more faithfully in his apostolic Church?'
  },
  {
    day: 71,
    part: 'Creed',
    title: 'The Church and Ecumenism',
    introduction: 'Ecumenism seeks unity among Christians through prayer, dialogue, and conversion. It reflects Christ’s desire that all his disciples be one.',
    summary: [
      'Ecumenism seeks unity in truth and charity.',
      'Christians share baptism and Scripture.',
      'Dialogue requires humility and honesty.',
      'Unity is a gift of the Spirit.',
      'Division contradicts the Gospel’s witness.'
    ],
    application: [
      'Pray for unity among Christians.',
      'Speak respectfully about other Christian communities.'
    ],
    reflection: 'How can I contribute to Christ’s desire for unity?'
  },
  {
    day: 72,
    part: 'Creed',
    title: 'The Church and Interreligious Dialogue',
    introduction: 'The Church respects and engages other religions, recognizing seeds of truth while proclaiming Christ as the fullness of revelation. Dialogue fosters peace and mutual understanding.',
    summary: [
      'Other religions contain elements of truth and goodness.',
      'Dialogue requires respect and clarity.',
      'Christ is the fullness of revelation.',
      'The Church seeks peace and cooperation.',
      'Truth and charity guide dialogue.'
    ],
    application: [
      'Learn something true or good from another tradition.',
      'Practice respectful curiosity in conversation.'
    ],
    reflection: 'Where is God inviting me to build bridges of understanding?'
  },
  {
    day: 73,
    part: 'Creed',
    title: 'The Church and the World',
    introduction: 'The Church engages the world not as an outsider but as a servant of truth, justice, and peace. Her mission includes transforming culture through the Gospel.',
    summary: [
      'The Church serves the world through truth.',
      'She defends human dignity and justice.',
      'She engages culture with discernment.',
      'She promotes peace and solidarity.',
      'Her mission is both spiritual and social.'
    ],
    application: [
      'Support one effort that promotes justice or peace.',
      'Bring faith into one public decision.'
    ],
    reflection: 'How can I witness to Christ in the world around me?'
  },
  {
    day: 74,
    part: 'Creed',
    title: 'The Church and the Kingdom of God',
    introduction: 'The Church is the seed and beginning of the kingdom. She is not identical to the kingdom but serves its growth until Christ returns in glory.',
    summary: [
      'The kingdom is God’s reign of truth and love.',
      'The Church is its seed and beginning.',
      'The kingdom grows through conversion and charity.',
      'The Church awaits its fulfillment in Christ.',
      'Hope strengthens perseverance in mission.'
    ],
    application: [
      'Practice one act that reflects the kingdom’s values.',
      'Encourage someone who feels discouraged in faith.'
    ],
    reflection: 'Where is Christ inviting me to help build his kingdom?'
  },
  {
    day: 75,
    part: 'Creed',
    title: 'The Four Last Things',
    introduction: 'Death, judgment, heaven, and hell reveal the ultimate horizon of human life. These truths awaken responsibility, hope, and the desire for communion with God.',
    summary: [
      'Death is a passage, not an end.',
      'Judgment reveals truth and love.',
      'Heaven fulfills every true desire.',
      'Hell is the tragic refusal of love.',
      'Hope prepares the heart for eternity.'
    ],
    application: [
      'Make one choice today in light of eternity.',
      'Offer a prayer for someone who has died.'
    ],
    reflection: 'How does remembering my destiny change the way I live now?'
  },
  {
    day: 76,
    part: 'Creed',
    title: 'The Hope of Eternal Life',
    introduction: 'Christian hope looks toward eternal life as the fulfillment of every longing. It strengthens perseverance, heals fear, and anchors the heart in God’s promise.',
    summary: [
      'Eternal life fulfills the person.',
      'Hope strengthens perseverance.',
      'Christ prepares a place for believers.',
      'Fear is healed through trust.',
      'Hope shapes daily choices.'
    ],
    application: [
      'Encourage someone who feels hopeless.',
      'Practice one act rooted in eternal perspective.'
    ],
    reflection: 'Where do I need the hope of eternal life to strengthen me?'
  },
  {
    day: 77,
    part: 'Creed',
    title: 'Moral Evil',
    introduction: 'Moral evil arises when a free creature turns away from the good. Naming this matters because victims deserve truth and wrongdoers need conversion, yet Christian hope insists that failure is not the final name of a person or a people.',
    summary: [
      'Moral evil involves a disordered choice of the will.',
      'Sin damages communion with God, neighbor, and self.',
      'Structures can carry and multiply the effects of individual choices.',
      'Accountability and mercy belong together.',
      'Grace can transform a repentant life into a source of repair.'
    ],
    application: [
      'Name one harm plainly rather than minimizing it.',
      'Take a concrete step toward accountability, repair, or protection.'
    ],
    reflection: 'Where is truth asking me to become an agent of repair?'
  },
  {
    day: 78,
    part: 'Creed',
    title: 'The Victory of Christ',
    introduction: 'Christ’s victory over sin and death is the foundation of Christian hope. His triumph is not merely symbolic but a real transformation of the human condition.',
    summary: [
      'Christ conquers sin through love.',
      'His resurrection breaks death’s power.',
      'Victory is shared through baptism.',
      'Hope flows from Christ’s triumph.',
      'Believers participate in his victory daily.'
    ],
    application: [
      'Choose one act that reflects Christ’s victory.',
      'Reject a lie that diminishes hope.'
    ],
    reflection: 'Where do I need to trust Christ’s victory more deeply?'
  },
  {
    day: 79,
    part: 'Creed',
    title: 'The New Creation',
    introduction: 'God promises a new heaven and a new earth where justice and peace will flourish. This hope strengthens perseverance and inspires believers to live as citizens of the coming kingdom.',
    summary: [
      'The new creation fulfills God’s plan.',
      'It heals every wound of sin.',
      'It restores harmony between God and creation.',
      'Hope inspires present responsibility.',
      'Christ is the firstborn of the new creation.'
    ],
    application: [
      'Practice one act that reflects the new creation’s values.',
      'Encourage someone longing for renewal.'
    ],
    reflection: 'How can I live today as a citizen of the new creation?'
  },
  {
    day: 80,
    part: 'Creed',
    title: 'The Fulfillment of All Things in Christ',
    introduction: 'All creation finds its fulfillment in Christ, who will gather all things into unity. This final mystery reveals the purpose of history and the destiny of humanity.',
    summary: [
      'Christ is the center of history.',
      'All things will be united in him.',
      'God’s plan is one of communion and peace.',
      'Hope looks toward Christ’s final coming.',
      'Love prepares the heart for fulfillment.'
    ],
    application: [
      'Offer one act of love rooted in hope.',
      'Pray for Christ’s peace in a place of conflict.'
    ],
    reflection: 'Where is Christ inviting me to trust the final fulfillment of his plan?'
  }
];

const cccLibraryBatch5: Topic[] = [
  {
    day: 81,
    part: 'Sacraments',
    title: 'The Nature of Liturgy',
    introduction: 'Liturgy is the public worship of the Church, the place where Christ’s Paschal Mystery becomes present and effective. It is God’s work for his people, and the people’s participation in God’s work.',
    summary: [
      'Liturgy is Christ’s action through the Church.',
      'It makes salvation present sacramentally.',
      'It unites heaven and earth in worship.',
      'It forms believers into one body.',
      'Participation is both interior and exterior.'
    ],
    application: [
      'Arrive inwardly before worship begins.',
      'Let one liturgical gesture teach your heart what faith means.'
    ],
    reflection: 'How can I receive liturgy as God’s work before my own?'
  },
  {
    day: 82,
    part: 'Sacraments',
    title: 'The Paschal Mystery in the Liturgy',
    introduction: 'Every liturgical celebration draws the Church into Christ’s death and resurrection. The Paschal Mystery is not repeated but made present so believers can participate in its saving power.',
    summary: [
      'The Paschal Mystery is the center of liturgy.',
      'Christ’s offering is made present, not repeated.',
      'The Spirit unites believers to Christ’s sacrifice.',
      'Liturgy transforms suffering into hope.',
      'Participation leads to mission.'
    ],
    application: [
      'Offer one sorrow to Christ during worship.',
      'Choose a small act of renewed life after Mass.'
    ],
    reflection: 'Where is Christ inviting me to enter his Paschal Mystery more deeply?'
  },
  {
    day: 83,
    part: 'Sacraments',
    title: 'Liturgical Participation',
    introduction: 'Full, conscious, and active participation means engaging the heart, mind, and body in worship. It is not mere activity but attentive receptivity to Christ’s action.',
    summary: [
      'Participation is interior before exterior.',
      'Silence is part of active participation.',
      'Gestures express faith and unity.',
      'Singing and responses serve communion.',
      'Participation continues through daily life.'
    ],
    application: [
      'Practice one moment of intentional silence during worship.',
      'Let a liturgical response be prayed rather than recited.'
    ],
    reflection: 'What helps my heart participate more deeply in worship?'
  },
  {
    day: 84,
    part: 'Sacraments',
    title: 'Liturgical Diversity and Unity',
    introduction: 'The Church’s liturgy includes diverse rites and expressions, all united in the same faith. Diversity enriches the Church while unity safeguards the integrity of worship.',
    summary: [
      'The Church includes multiple liturgical rites.',
      'Unity is preserved through shared faith and sacraments.',
      'Diversity expresses cultural richness.',
      'Rites must remain faithful to Tradition.',
      'The Spirit forms unity amid diversity.'
    ],
    application: [
      'Learn about one Catholic rite beyond your own.',
      'Practice gratitude for the Church’s diversity.'
    ],
    reflection: 'How does liturgical diversity expand my vision of the Church?'
  },
  {
    day: 85,
    part: 'Sacraments',
    title: 'Sacraments as Signs of Grace',
    introduction: 'Sacraments use visible signs to communicate invisible grace. Through material elements, Christ touches the senses and forms the heart for divine life.',
    summary: [
      'Sacraments use signs instituted by Christ.',
      'Signs communicate grace effectively.',
      'Material elements reveal spiritual realities.',
      'Sacraments strengthen faith and communion.',
      'Grace transforms daily life.'
    ],
    application: [
      'Notice one sacramental sign more attentively.',
      'Let a symbol deepen your awareness of God’s presence.'
    ],
    reflection: 'Which sacramental sign speaks most deeply to me?'
  },
  {
    day: 86,
    part: 'Sacraments',
    title: 'Sacraments and Faith',
    introduction: 'Faith is necessary for fruitful reception of the sacraments. While sacraments work ex opere operato, their grace bears fruit when welcomed with trust and conversion.',
    summary: [
      'Sacraments are effective because of Christ.',
      'Faith opens the heart to grace.',
      'Disposition affects fruitfulness.',
      'Sacraments strengthen faith.',
      'Grace invites cooperation.'
    ],
    application: [
      'Approach one sacrament with renewed trust.',
      'Ask God to deepen your disposition toward grace.'
    ],
    reflection: 'Where do I need faith to welcome sacramental grace more fully?'
  },
  {
    day: 87,
    part: 'Sacraments',
    title: 'Sacraments of Initiation',
    introduction: 'Baptism, Confirmation, and the Eucharist form one unified movement into Christian life. They give birth, strengthen identity, and nourish communion.',
    summary: [
      'Initiation begins with Baptism.',
      'Confirmation strengthens baptismal grace.',
      'The Eucharist nourishes communion.',
      'Initiation forms discipleship.',
      'Grace unfolds through lifelong growth.'
    ],
    application: [
      'Recall one moment from your initiation.',
      'Pray for someone preparing for a sacrament.'
    ],
    reflection: 'Which part of my initiation needs renewal today?'
  },
  {
    day: 88,
    part: 'Sacraments',
    title: 'Baptism: New Birth in Christ',
    introduction: 'Baptism unites the person to Christ’s death and resurrection, forgives sin, and incorporates the believer into the Church. It is the foundation of Christian life.',
    summary: [
      'Baptism gives new birth.',
      'It forgives all sin.',
      'It confers a permanent character.',
      'It incorporates into the Church.',
      'It begins lifelong conversion.'
    ],
    application: [
      'Find the date of your Baptism.',
      'Make one choice today as a member of Christ’s body.'
    ],
    reflection: 'What part of my identity still needs to live from my Baptism?'
  },
  {
    day: 89,
    part: 'Sacraments',
    title: 'The Baptismal Character',
    introduction: 'Baptism leaves an indelible spiritual mark that configures the person to Christ. This character is a promise and a mission that cannot be erased.',
    summary: [
      'The baptismal character is permanent.',
      'It configures the person to Christ.',
      'It enables participation in worship.',
      'It calls the person to mission.',
      'It remains even in failure.'
    ],
    application: [
      'Live one moment consciously from your baptismal identity.',
      'Support someone beginning their Christian journey.'
    ],
    reflection: 'How can I honor the permanent gift of my Baptism?'
  },
  {
    day: 90,
    part: 'Sacraments',
    title: 'Confirmation: Strength for Mission',
    introduction: 'Confirmation deepens baptismal grace and gives the Spirit’s gifts for mature witness. It strengthens courage, discernment, and fidelity.',
    summary: [
      'Confirmation roots believers in divine sonship.',
      'The Spirit’s gifts strengthen witness.',
      'It confers a permanent character.',
      'It calls believers to defend the faith.',
      'It unites the person more closely to the Church.'
    ],
    application: [
      'Ask for the gift you most need today.',
      'Speak one gracious truth you usually keep hidden.'
    ],
    reflection: 'Where is the Spirit inviting me into active witness?'
  },
  {
    day: 91,
    part: 'Sacraments',
    title: 'The Gifts of the Holy Spirit',
    introduction: 'The Spirit gives seven gifts—wisdom, understanding, counsel, fortitude, knowledge, piety, and fear of the Lord—to strengthen believers for holiness and mission.',
    summary: [
      'Wisdom sees with God’s perspective.',
      'Understanding penetrates truth.',
      'Counsel guides decisions.',
      'Fortitude strengthens courage.',
      'Fear of the Lord deepens reverence.'
    ],
    application: [
      'Ask for one gift in a current challenge.',
      'Practice a small act of courage or reverence.'
    ],
    reflection: 'Which gift of the Spirit do I need most right now?'
  },
  {
    day: 92,
    part: 'Sacraments',
    title: 'The Eucharist: Source and Summit',
    introduction: 'The Eucharist is the source and summit of Christian life. It makes present Christ’s sacrifice and nourishes believers with his Body and Blood.',
    summary: [
      'The Eucharist is Christ’s true presence.',
      'It makes the sacrifice of the cross present.',
      'It nourishes communion and mission.',
      'It unites heaven and earth.',
      'It strengthens charity.'
    ],
    application: [
      'Spend a moment in gratitude after receiving Communion.',
      'Repair one small breach of charity.'
    ],
    reflection: 'How can I let the Eucharist shape my daily life?'
  },
  {
    day: 93,
    part: 'Sacraments',
    title: 'The Real Presence',
    introduction: 'Christ is truly present—body, blood, soul, and divinity—in the Eucharist. This presence is given for communion, adoration, and transformation.',
    summary: [
      'Christ is wholly present under each species.',
      'The substance changes while appearances remain.',
      'Adoration flows from reverence.',
      'Communion requires unity and reconciliation.',
      'The presence strengthens love.'
    ],
    application: [
      'Spend time in quiet adoration.',
      'Seek reconciliation where needed before Communion.'
    ],
    reflection: 'How does Christ’s presence invite me into deeper love?'
  },
  {
    day: 94,
    part: 'Sacraments',
    title: 'The Eucharistic Sacrifice',
    introduction: 'In the Mass, the Church is united to Christ’s offering to the Father. The Eucharist is not a repetition but a sacramental making‑present of the one sacrifice of Calvary.',
    summary: [
      'Christ is priest, altar, and victim.',
      'The Church offers herself with Christ.',
      'The sacrifice is made present sacramentally.',
      'Thanksgiving is central to Eucharistic life.',
      'Participation continues through charity.'
    ],
    application: [
      'Offer one part of your life consciously to Christ.',
      'Practice gratitude before a meal.'
    ],
    reflection: 'What am I being invited to place within Christ’s offering?'
  },
  {
    day: 95,
    part: 'Sacraments',
    title: 'Communion and Unity',
    introduction: 'Receiving the Eucharist draws believers into deeper unity with Christ and with one another. Communion requires reconciliation, charity, and openness to the whole body of Christ.',
    summary: [
      'Communion unites believers to Christ.',
      'It strengthens unity within the Church.',
      'It requires charity and reconciliation.',
      'It heals divisions and wounds.',
      'It sends believers into mission.'
    ],
    application: [
      'Repair one small breach of communion.',
      'Receive others with the reverence you show Christ.'
    ],
    reflection: 'How might receiving Christ change the way I receive others?'
  },
  {
    day: 96,
    part: 'Sacraments',
    title: 'The Sacrament of Penance',
    introduction: 'Penance restores communion through confession, absolution, and conversion. It is a concrete path back from sin into renewed freedom.',
    summary: [
      'Confession makes responsibility specific.',
      'Contrition expresses sorrow and conversion.',
      'Absolution communicates Christ’s forgiveness.',
      'Penance repairs the harm caused by sin.',
      'Mercy restores hope and freedom.'
    ],
    application: [
      'Examine one pattern honestly and gently.',
      'Make a repair without seeking praise.'
    ],
    reflection: 'Where is Christ inviting me to let mercy become specific?'
  },
  {
    day: 97,
    part: 'Sacraments',
    title: 'Contrition and Conversion',
    introduction: 'Contrition is sorrow for sin joined to the desire for change. True conversion involves turning toward God with honesty, humility, and hope.',
    summary: [
      'Contrition includes sorrow and resolve.',
      'Conversion is a lifelong process.',
      'Grace strengthens the desire for change.',
      'Honesty opens the heart to mercy.',
      'Conversion restores communion.'
    ],
    application: [
      'Name one place where you need conversion.',
      'Ask God for the grace to begin again.'
    ],
    reflection: 'What part of my life needs honest conversion today?'
  },
  {
    day: 98,
    part: 'Sacraments',
    title: 'Anointing of the Sick',
    introduction: 'Anointing unites the sick person to Christ’s suffering and strengthens them with grace. It offers healing, peace, and forgiveness, preparing the heart for trust.',
    summary: [
      'Anointing strengthens the sick.',
      'It unites suffering to Christ.',
      'It offers forgiveness and peace.',
      'It prepares for healing or eternal life.',
      'It supports the whole community.'
    ],
    application: [
      'Pray for someone who is ill.',
      'Offer comfort to someone facing fear or pain.'
    ],
    reflection: 'Where do I need Christ’s healing presence today?'
  },
  {
    day: 99,
    part: 'Sacraments',
    title: 'Marriage: Covenant of Love',
    introduction: 'Marriage is a covenant between spouses that reflects Christ’s love for the Church. It is faithful, fruitful, and ordered toward communion and family life.',
    summary: [
      'Marriage is a sacrament of covenant love.',
      'It reflects Christ’s love for the Church.',
      'It requires fidelity and mutual self‑gift.',
      'It is ordered toward family and communion.',
      'Grace strengthens the marital bond.'
    ],
    application: [
      'Support a married couple with prayer or encouragement.',
      'Practice one act of faithful love.'
    ],
    reflection: 'How can I reflect covenant love in my relationships?'
  },
  {
    day: 100,
    part: 'Sacraments',
    title: 'Holy Orders: Service in Christ',
    introduction: 'Holy Orders configures bishops, priests, and deacons to Christ for service. It strengthens the Church through teaching, worship, and pastoral care.',
    summary: [
      'Holy Orders has three degrees.',
      'It configures ministers to Christ.',
      'It serves the Church’s unity and mission.',
      'It strengthens worship and teaching.',
      'It calls for holiness and charity.'
    ],
    application: [
      'Pray for a priest, bishop, or deacon by name.',
      'Practice one act of service inspired by Christ.'
    ],
    reflection: 'Where is God inviting me to serve more generously?'
  }
];

const cccLibraryBatch6: Topic[] = [
  {
    day: 101,
    part: 'Sacraments',
    title: 'The Minister of Each Sacrament',
    introduction: 'Christ is the true minister of every sacrament, but he acts through human ministers in the Church. Each sacrament has a proper minister entrusted with safeguarding its integrity and fruitfulness.',
    summary: [
      'Christ is the principal minister of all sacraments.',
      'Ordained ministers serve most sacraments.',
      'Baptism may be administered by anyone in necessity.',
      'Ministers must intend what the Church intends.',
      'The minister’s holiness strengthens credibility but does not limit grace.'
    ],
    application: [
      'Pray for someone who ministers in your parish.',
      'Support a minister with encouragement or gratitude.'
    ],
    reflection: 'How can I honor Christ acting through his ministers?'
  },
  {
    day: 102,
    part: 'Sacraments',
    title: 'Sacramental Validity and Fruitfulness',
    introduction: 'For a sacrament to be valid, it must use proper matter, form, and intention. Its fruitfulness depends on the disposition of the recipient and the openness of the heart to grace.',
    summary: [
      'Matter, form, and intention ensure validity.',
      'Grace is always offered in valid sacraments.',
      'Fruitfulness depends on disposition.',
      'Faith and conversion open the heart.',
      'Grace strengthens freedom and charity.'
    ],
    application: [
      'Approach a sacrament with intentional preparation.',
      'Ask God to deepen your disposition toward grace.'
    ],
    reflection: 'Where do I need greater openness to sacramental grace?'
  },
  {
    day: 103,
    part: 'Sacraments',
    title: 'Sacramentals',
    introduction: 'Sacramentals are sacred signs instituted by the Church to prepare the heart for grace. They include blessings, holy water, medals, and other expressions of faith.',
    summary: [
      'Sacramentals prepare for the sacraments.',
      'They sanctify daily life.',
      'They express faith through simple signs.',
      'They invite prayer and reverence.',
      'They strengthen trust in God’s presence.'
    ],
    application: [
      'Use a sacramental with renewed intention.',
      'Bless yourself with holy water consciously.'
    ],
    reflection: 'Which sacramental helps me remember God’s nearness?'
  },
  {
    day: 104,
    part: 'Sacraments',
    title: 'Christian Funerals',
    introduction: 'Christian funerals entrust the deceased to God’s mercy and offer hope to the living. They express faith in the resurrection and the communion of saints.',
    summary: [
      'Funerals commend the soul to God.',
      'They express hope in resurrection.',
      'They support the grieving community.',
      'They unite prayer with the Paschal Mystery.',
      'They affirm the dignity of the human body.'
    ],
    application: [
      'Pray for someone who has died.',
      'Offer comfort to someone grieving.'
    ],
    reflection: 'How does Christian hope shape my understanding of death?'
  },
  {
    day: 105,
    part: 'Sacraments',
    title: 'The Domestic Church',
    introduction: 'The family is the first place where faith is lived, taught, and celebrated. It is a “domestic church” where love, prayer, and daily sacrifice form disciples.',
    summary: [
      'Families are schools of love and faith.',
      'Parents are primary educators of children.',
      'Home life shapes virtue and prayer.',
      'Grace strengthens family bonds.',
      'The domestic church participates in mission.'
    ],
    application: [
      'Practice one act of love within your home.',
      'Pray briefly with someone in your family.'
    ],
    reflection: 'How can my home reflect Christ’s love more clearly?'
  },
  {
    day: 106,
    part: 'Sacraments',
    title: 'The Sacraments and Mission',
    introduction: 'Sacraments strengthen believers for mission. Grace is never private; it sends the person outward to witness, serve, and build communion.',
    summary: [
      'Sacraments empower mission.',
      'Grace strengthens charity and courage.',
      'Mission flows from communion.',
      'Sacraments heal and send.',
      'Witness expresses sacramental life.'
    ],
    application: [
      'Let one sacramental grace shape a concrete action.',
      'Serve someone quietly after receiving grace.'
    ],
    reflection: 'Where is grace sending me today?'
  },
  {
    day: 107,
    part: 'Sacraments',
    title: 'The Sacraments and Holiness',
    introduction: 'Holiness grows through sacramental life. Grace heals wounds, strengthens virtue, and forms the heart for communion with God.',
    summary: [
      'Sacraments deepen holiness.',
      'Grace heals and elevates nature.',
      'Holiness grows through daily fidelity.',
      'Sacraments strengthen virtue.',
      'Holiness serves mission.'
    ],
    application: [
      'Practice one act of virtue inspired by grace.',
      'Ask God to heal one interior wound.'
    ],
    reflection: 'Where is Christ inviting me into deeper holiness through grace?'
  },
  {
    day: 108,
    part: 'Sacraments',
    title: 'The Sacraments and Community',
    introduction: 'Sacraments build and strengthen the Church’s unity. They draw believers into communion with Christ and with one another.',
    summary: [
      'Sacraments form community.',
      'They strengthen unity and charity.',
      'They heal divisions and wounds.',
      'They send believers into service.',
      'They reveal the Church as one body.'
    ],
    application: [
      'Repair one small breach of communion.',
      'Support someone in your community with kindness.'
    ],
    reflection: 'How can I strengthen communion through sacramental life?'
  },
  {
    day: 109,
    part: 'Sacraments',
    title: 'The Sacraments and Evangelization',
    introduction: 'Sacraments empower believers to share the Gospel. Grace strengthens courage, clarity, and compassion in witness.',
    summary: [
      'Sacraments strengthen witness.',
      'Grace inspires evangelization.',
      'Mission flows from communion.',
      'Witness requires charity and truth.',
      'Evangelization expresses sacramental life.'
    ],
    application: [
      'Share one small word of faith with someone.',
      'Support someone who is beginning to explore faith.'
    ],
    reflection: 'Where is Christ inviting me to witness more courageously?'
  },
  {
    day: 110,
    part: 'Sacraments',
    title: 'The Sacraments and Daily Life',
    introduction: 'Sacraments are not isolated events but sources of grace that shape daily decisions, relationships, and responsibilities.',
    summary: [
      'Sacraments strengthen daily fidelity.',
      'Grace shapes ordinary choices.',
      'Sacraments heal and renew.',
      'They inspire charity and patience.',
      'They form discipleship in daily life.'
    ],
    application: [
      'Let one sacramental grace shape a daily habit.',
      'Practice patience inspired by grace.'
    ],
    reflection: 'How can I let sacramental grace shape my daily life?'
  },
  {
    day: 111,
    part: 'Sacraments',
    title: 'The Sacraments and the Holy Spirit',
    introduction: 'The Holy Spirit is the soul of sacramental life. He makes the sacraments effective, strengthens faith, and forms believers for mission.',
    summary: [
      'The Spirit makes sacraments effective.',
      'He strengthens faith and charity.',
      'He heals wounds and renews hope.',
      'He forms unity and mission.',
      'He dwells in the Church and believers.'
    ],
    application: [
      'Pray “Come, Holy Spirit” before receiving grace.',
      'Follow one quiet prompting toward goodness.'
    ],
    reflection: 'Where is the Spirit inviting me to cooperate more freely?'
  },
  {
    day: 112,
    part: 'Sacraments',
    title: 'The Sacraments and the Church’s Unity',
    introduction: 'Sacraments strengthen unity by drawing believers into one faith, one worship, and one mission. They heal divisions and form communion.',
    summary: [
      'Sacraments unite believers in Christ.',
      'They strengthen ecclesial unity.',
      'They heal wounds of division.',
      'They form one body with diverse gifts.',
      'Unity strengthens mission.'
    ],
    application: [
      'Practice one act that strengthens unity.',
      'Seek reconciliation where needed.'
    ],
    reflection: 'How can I help strengthen unity in the Church?'
  },
  {
    day: 113,
    part: 'Sacraments',
    title: 'The Sacraments and the Poor',
    introduction: 'Sacramental life calls believers to serve the poor with compassion and justice. Grace strengthens solidarity and awakens responsibility.',
    summary: [
      'Grace inspires care for the poor.',
      'Sacraments strengthen solidarity.',
      'Service expresses communion.',
      'Justice flows from sacramental life.',
      'Christ is present in the vulnerable.'
    ],
    application: [
      'Support someone facing hardship.',
      'Practice one act of solidarity today.'
    ],
    reflection: 'Where is Christ inviting me to serve the poor more concretely?'
  },
  {
    day: 114,
    part: 'Sacraments',
    title: 'The Sacraments and Healing',
    introduction: 'Sacraments heal wounds of sin, fear, and division. They strengthen hope and restore the heart for communion.',
    summary: [
      'Grace heals interior wounds.',
      'Sacraments restore communion.',
      'Healing strengthens hope.',
      'Christ meets the person in vulnerability.',
      'Healing prepares for mission.'
    ],
    application: [
      'Ask Christ to heal one interior wound.',
      'Offer compassion to someone hurting.'
    ],
    reflection: 'Where do I need Christ’s healing presence today?'
  },
  {
    day: 115,
    part: 'Sacraments',
    title: 'The Sacraments and Vocation',
    introduction: 'Sacraments strengthen each vocation—marriage, priesthood, consecrated life, and lay discipleship. Grace equips believers for their unique calling.',
    summary: [
      'Grace strengthens vocation.',
      'Sacraments equip for mission.',
      'Vocation expresses baptismal identity.',
      'Each vocation serves communion.',
      'Grace sustains fidelity.'
    ],
    application: [
      'Live one moment consciously from your vocation.',
      'Support someone discerning their calling.'
    ],
    reflection: 'Where is Christ inviting me to deepen my vocation?'
  },
  {
    day: 116,
    part: 'Sacraments',
    title: 'The Sacraments and Spiritual Warfare',
    introduction: 'Sacraments strengthen believers against temptation, fear, and spiritual attack. Grace equips the heart with courage, clarity, and perseverance.',
    summary: [
      'Grace strengthens against temptation.',
      'Sacraments heal fear and confusion.',
      'Christ protects through sacramental life.',
      'Spiritual warfare requires prayer and vigilance.',
      'Hope strengthens perseverance.'
    ],
    application: [
      'Ask Christ for strength in one temptation.',
      'Practice vigilance in a vulnerable moment.'
    ],
    reflection: 'Where do I need Christ’s strength in spiritual struggle?'
  },
  {
    day: 117,
    part: 'Sacraments',
    title: 'The Sacraments and Forgiveness',
    introduction: 'Sacraments communicate forgiveness and restore communion. Grace heals wounds of guilt, shame, and division.',
    summary: [
      'Grace forgives and restores.',
      'Sacraments heal guilt and shame.',
      'Forgiveness strengthens communion.',
      'Mercy renews hope.',
      'Forgiveness prepares for mission.'
    ],
    application: [
      'Extend forgiveness in one small way.',
      'Ask God for mercy in a specific place.'
    ],
    reflection: 'Where is Christ inviting me to receive or offer forgiveness?'
  },
  {
    day: 118,
    part: 'Sacraments',
    title: 'The Sacraments and Thanksgiving',
    introduction: 'Sacraments cultivate gratitude by revealing God’s generosity. Thanksgiving strengthens joy, humility, and communion.',
    summary: [
      'Grace awakens gratitude.',
      'Thanksgiving strengthens joy.',
      'Gratitude heals envy and resentment.',
      'Sacraments reveal God’s generosity.',
      'Thanksgiving prepares the heart for mission.'
    ],
    application: [
      'Practice one act of gratitude today.',
      'Thank God for one quiet grace.'
    ],
    reflection: 'Where is God inviting me into deeper gratitude?'
  },
  {
    day: 119,
    part: 'Sacraments',
    title: 'The Sacraments and Hope',
    introduction: 'Sacraments strengthen hope by revealing God’s faithfulness. Grace anchors the heart in Christ’s promises and prepares believers for perseverance.',
    summary: [
      'Grace strengthens hope.',
      'Hope anchors the heart in Christ.',
      'Sacraments reveal God’s fidelity.',
      'Hope heals fear and discouragement.',
      'Hope prepares for mission.'
    ],
    application: [
      'Encourage someone who feels discouraged.',
      'Practice one act rooted in hope.'
    ],
    reflection: 'Where do I need Christ’s hope to strengthen me?'
  },
  {
    day: 120,
    part: 'Sacraments',
    title: 'The Sacraments and Charity',
    introduction: 'Charity is the fruit of sacramental life. Grace strengthens love for God and neighbor, forming the heart for communion and service.',
    summary: [
      'Grace strengthens charity.',
      'Charity expresses sacramental life.',
      'Love heals division and fear.',
      'Charity strengthens mission.',
      'Love fulfills the law.'
    ],
    application: [
      'Practice one act of charity today.',
      'Support someone with quiet kindness.'
    ],
    reflection: 'Where is Christ inviting me to grow in charity?'
  }
];

const cccLibraryBatch7: Topic[] = [
  {
    day: 121,
    part: 'Morality',
    title: 'The Human Vocation to Beatitude',
    introduction: 'Moral life begins with desire: the longing for happiness written into every human heart. Beatitude is not mere pleasure or success but the fulfillment found in communion with God.',
    summary: [
      'Every person seeks happiness.',
      'Beatitude is found in God alone.',
      'Desire reveals the heart’s orientation.',
      'Christ teaches the path to true happiness.',
      'Beatitude shapes moral choices.'
    ],
    application: [
      'Name one desire that points toward God.',
      'Choose one action that reflects the Beatitudes.'
    ],
    reflection: 'Where is God inviting me to seek happiness in him rather than substitutes?'
  },
  {
    day: 122,
    part: 'Morality',
    title: 'Freedom and Responsibility',
    introduction: 'Freedom is the ability to choose the good. It is not mere autonomy but the capacity to act in truth and love. Responsibility flows from freedom and shapes moral life.',
    summary: [
      'Freedom is ordered toward the good.',
      'Truth strengthens freedom.',
      'Responsibility expresses dignity.',
      'Sin wounds freedom.',
      'Grace heals and elevates freedom.'
    ],
    application: [
      'Pause before one decision and ask what love requires.',
      'Practice one act of responsible freedom.'
    ],
    reflection: 'How is God inviting my freedom to grow in truth and love?'
  },
  {
    day: 123,
    part: 'Morality',
    title: 'The Human Act',
    introduction: 'Moral acts arise from the object chosen, the intention, and the circumstances. These elements reveal the truth of a choice and its impact on the person and community.',
    summary: [
      'The moral object is central.',
      'Intention shapes interior meaning.',
      'Circumstances affect responsibility.',
      'Good intentions cannot justify evil acts.',
      'Choices shape character.'
    ],
    application: [
      'Examine one decision by object, intention, and circumstance.',
      'Practice honesty about your motives.'
    ],
    reflection: 'What part of my decision-making needs greater truthfulness?'
  },
  {
    day: 124,
    part: 'Morality',
    title: 'Passions and Emotions',
    introduction: 'Passions are movements of the heart that can support or hinder moral life. They are not morally good or evil in themselves but become so when integrated into freedom.',
    summary: [
      'Passions are morally neutral.',
      'They become good when ordered toward love.',
      'They become harmful when disordered.',
      'Virtue integrates passions.',
      'Grace heals emotional wounds.'
    ],
    application: [
      'Name one emotion honestly without judgment.',
      'Let a passion be guided by charity.'
    ],
    reflection: 'Which passion needs integration rather than suppression?'
  },
  {
    day: 125,
    part: 'Morality',
    title: 'Conscience',
    introduction: 'Conscience is the inner voice where the person recognizes moral truth. It must be formed, not merely followed, and requires humility, prayer, and learning.',
    summary: [
      'Conscience judges moral acts.',
      'It must be formed in truth.',
      'Ignorance can distort conscience.',
      'Grace strengthens moral clarity.',
      'Conscience requires humility and prayer.'
    ],
    application: [
      'Examine your conscience gently today.',
      'Seek truth in one area of confusion.'
    ],
    reflection: 'Where is my conscience asking for deeper formation?'
  },
  {
    day: 126,
    part: 'Morality',
    title: 'The Formation of Conscience',
    introduction: 'Conscience is formed through Scripture, Church teaching, prayer, counsel, and honest self-examination. Formation is lifelong and requires openness to truth.',
    summary: [
      'Formation requires Scripture and Tradition.',
      'Prayer strengthens moral clarity.',
      'Counsel helps avoid blind spots.',
      'Virtue shapes conscience.',
      'Formation requires humility.'
    ],
    application: [
      'Seek counsel from someone wise and faithful.',
      'Learn one moral teaching more deeply.'
    ],
    reflection: 'How can I form my conscience more intentionally?'
  },
  {
    day: 127,
    part: 'Morality',
    title: 'Virtue',
    introduction: 'Virtues are stable dispositions that strengthen freedom and orient the heart toward the good. They grow through practice, grace, and perseverance.',
    summary: [
      'Virtue strengthens freedom.',
      'It forms stable habits of good.',
      'Grace elevates natural virtue.',
      'Virtue requires practice and perseverance.',
      'Virtue shapes character and mission.'
    ],
    application: [
      'Practice one small act of virtue today.',
      'Persevere in a good habit even when difficult.'
    ],
    reflection: 'Which virtue is God inviting me to grow in now?'
  },
  {
    day: 128,
    part: 'Morality',
    title: 'The Cardinal Virtues',
    introduction: 'Prudence, justice, fortitude, and temperance are the cardinal virtues that guide moral life. They strengthen judgment, courage, balance, and responsibility.',
    summary: [
      'Prudence guides practical judgment.',
      'Justice gives each their due.',
      'Fortitude strengthens courage.',
      'Temperance moderates desire.',
      'Cardinal virtues shape moral maturity.'
    ],
    application: [
      'Practice prudence in one decision.',
      'Choose justice in one relationship.'
    ],
    reflection: 'Which cardinal virtue do I need most today?'
  },
  {
    day: 129,
    part: 'Morality',
    title: 'The Theological Virtues',
    introduction: 'Faith, hope, and charity are infused by God and orient the heart toward divine life. They shape every dimension of Christian existence.',
    summary: [
      'Faith trusts God’s truth.',
      'Hope anchors the heart in God’s promise.',
      'Charity loves God and neighbor.',
      'Theological virtues are infused by grace.',
      'They shape moral and spiritual life.'
    ],
    application: [
      'Practice one act of faith, hope, or charity.',
      'Ask God to strengthen a virtue you struggle with.'
    ],
    reflection: 'Which theological virtue is God inviting me to deepen?'
  },
  {
    day: 130,
    part: 'Morality',
    title: 'Sin and Its Consequences',
    introduction: 'Sin is a failure in love that wounds communion with God, neighbor, and self. It narrows freedom, distorts desire, and forms harmful patterns.',
    summary: [
      'Sin harms communion.',
      'It wounds freedom and desire.',
      'It forms destructive habits.',
      'Grace heals and restores.',
      'Conversion renews hope.'
    ],
    application: [
      'Name one pattern honestly.',
      'Ask God for grace to begin again.'
    ],
    reflection: 'Where is Christ inviting me to face sin with hope rather than fear?'
  },
  {
    day: 131,
    part: 'Morality',
    title: 'Mortal and Venial Sin',
    introduction: 'Mortal sin destroys charity in the heart; venial sin wounds it. Understanding this distinction helps believers respond with truth, humility, and hope.',
    summary: [
      'Mortal sin requires grave matter, full knowledge, and deliberate consent.',
      'Venial sin wounds but does not destroy charity.',
      'Both require conversion.',
      'Grace restores communion.',
      'Hope strengthens perseverance.'
    ],
    application: [
      'Examine one choice honestly.',
      'Seek reconciliation where needed.'
    ],
    reflection: 'Where do I need Christ’s mercy to restore charity in my heart?'
  },
  {
    day: 132,
    part: 'Morality',
    title: 'Structures of Sin',
    introduction: 'Sin can become embedded in social systems, harming the vulnerable and distorting justice. Believers are called to transform these structures through truth and charity.',
    summary: [
      'Sin affects communities and institutions.',
      'Structures can perpetuate injustice.',
      'Believers must work for justice.',
      'Charity and truth heal social wounds.',
      'Conversion includes social responsibility.'
    ],
    application: [
      'Learn about one local injustice.',
      'Take one step toward justice or advocacy.'
    ],
    reflection: 'Where is God calling me to respond to social brokenness?'
  },
  {
    day: 133,
    part: 'Morality',
    title: 'Grace and Merit',
    introduction: 'Grace is God’s free gift; merit expresses cooperation with grace. Believers merit spiritual goods because God allows their freedom to participate in his generosity.',
    summary: [
      'Grace is free and unearned.',
      'Merit expresses cooperation with grace.',
      'Good works strengthen virtue.',
      'God promises reward to faithful love.',
      'Salvation remains God’s gift.'
    ],
    application: [
      'Practice one act of love without seeking recognition.',
      'Thank God for one grace received.'
    ],
    reflection: 'Where is God inviting me to cooperate more freely with grace?'
  },
  {
    day: 134,
    part: 'Morality',
    title: 'The Moral Law',
    introduction: 'The moral law expresses God’s wisdom and guides the person toward happiness. It is not a burden but a path to freedom, truth, and communion.',
    summary: [
      'Moral law expresses God’s wisdom.',
      'It guides freedom toward the good.',
      'It protects dignity and justice.',
      'It is fulfilled in Christ and charity.',
      'Law strengthens freedom, not restricts it.'
    ],
    application: [
      'Let one moral teaching shape a decision.',
      'Practice obedience in one small matter.'
    ],
    reflection: 'How can I receive moral law as a path to freedom?'
  },
  {
    day: 135,
    part: 'Morality',
    title: 'Natural Law',
    introduction: 'Natural law is the moral truth inscribed in human nature. It can be known through reason and guides individuals and societies toward justice and the common good.',
    summary: [
      'Natural law is universal and accessible.',
      'It expresses human dignity.',
      'Reason discovers natural law.',
      'It guides personal and social morality.',
      'It is fulfilled in Christ.'
    ],
    application: [
      'Reflect on one moral truth you know by reason.',
      'Practice justice in one relationship.'
    ],
    reflection: 'Where do I see natural law shaping my moral intuition?'
  },
  {
    day: 136,
    part: 'Morality',
    title: 'The Old Law',
    introduction: 'The Old Law, especially the Ten Commandments, reveals moral truth and prepares the heart for Christ. It teaches justice, fidelity, and responsibility.',
    summary: [
      'The Old Law reveals moral truth.',
      'It prepares for the Gospel.',
      'It teaches justice and fidelity.',
      'It reveals sin but cannot fully heal it.',
      'It is fulfilled in Christ.'
    ],
    application: [
      'Reflect on one commandment more deeply.',
      'Practice fidelity in one commitment.'
    ],
    reflection: 'How does the Old Law prepare my heart for Christ’s teaching?'
  },
  {
    day: 137,
    part: 'Morality',
    title: 'The New Law of Christ',
    introduction: 'The New Law is the grace of the Holy Spirit given through Christ. It fulfills the Old Law and teaches the way of love, interior transformation, and holiness.',
    summary: [
      'The New Law fulfills the Old.',
      'It is the grace of the Spirit.',
      'It teaches interior transformation.',
      'It strengthens charity and freedom.',
      'It forms discipleship.'
    ],
    application: [
      'Practice one act of interior conversion.',
      'Ask the Spirit to guide a decision.'
    ],
    reflection: 'Where is Christ inviting me to live the New Law more deeply?'
  },
  {
    day: 138,
    part: 'Morality',
    title: 'The Beatitudes',
    introduction: 'The Beatitudes reveal the heart of Christ’s teaching. They overturn worldly assumptions and show the path to true happiness and holiness.',
    summary: [
      'Beatitudes reveal Christ’s heart.',
      'They teach humility, mercy, and purity.',
      'They strengthen hope amid suffering.',
      'They reveal the path to holiness.',
      'They prepare for eternal life.'
    ],
    application: [
      'Choose one Beatitude to practice today.',
      'Offer mercy in a difficult moment.'
    ],
    reflection: 'Which Beatitude is Christ inviting me to embody now?'
  },
  {
    day: 139,
    part: 'Morality',
    title: 'The Ten Commandments',
    introduction: 'The Ten Commandments express fundamental moral truth. They teach love of God and neighbor and form the foundation of Christian moral life.',
    summary: [
      'Commandments express universal moral truth.',
      'They teach love of God and neighbor.',
      'They protect dignity and justice.',
      'They guide freedom toward the good.',
      'They are fulfilled in charity.'
    ],
    application: [
      'Reflect on one commandment honestly.',
      'Practice fidelity in one relationship.'
    ],
    reflection: 'Which commandment is inviting deeper conversion today?'
  },
  {
    day: 140,
    part: 'Morality',
    title: 'The First Commandment: Worship and Trust',
    introduction: 'The First Commandment calls believers to worship God alone, reject idols, and trust his love. It is the foundation of all moral life.',
    summary: [
      'Worship belongs to God alone.',
      'Idols distort freedom and desire.',
      'Trust strengthens communion.',
      'Faith expresses the First Commandment.',
      'Hope and charity fulfill it.'
    ],
    application: [
      'Identify one subtle “idol” in your life.',
      'Practice trust in a place of anxiety.'
    ],
    reflection: 'Where is God inviting me to trust him more deeply?'
  }
];

const cccLibraryBatch8: Topic[] = [
  {
    day: 141,
    part: 'Morality',
    title: 'The Second Commandment: Reverence for God’s Name',
    introduction: 'The Second Commandment calls believers to honor God’s name with reverence. Words shape the heart, and reverence protects the truth of relationship with God.',
    summary: [
      'God’s name is holy.',
      'Blasphemy contradicts reverence.',
      'Promises made in God’s name require fidelity.',
      'Speech reveals interior truth.',
      'Reverence strengthens worship.'
    ],
    application: [
      'Speak God’s name with intentional reverence.',
      'Practice truthful and gentle speech.'
    ],
    reflection: 'Where is God inviting me to speak with greater reverence?'
  },
  {
    day: 142,
    part: 'Morality',
    title: 'The Third Commandment: Sabbath Rest',
    introduction: 'The Third Commandment invites believers to rest in God. Sabbath is not inactivity but communion, worship, and renewal.',
    summary: [
      'Sabbath honors God’s creation and covenant.',
      'Rest strengthens freedom.',
      'Worship is central to Sabbath.',
      'Sabbath heals exhaustion and fragmentation.',
      'It prepares the heart for mission.'
    ],
    application: [
      'Protect one moment of rest for prayer.',
      'Let Sunday shape your priorities.'
    ],
    reflection: 'Where do I need God’s rest to restore my heart?'
  },
  {
    day: 143,
    part: 'Morality',
    title: 'The Fourth Commandment: Honor and Authority',
    introduction: 'The Fourth Commandment teaches respect for parents and legitimate authority. It protects family life and strengthens social harmony.',
    summary: [
      'Honor expresses gratitude and respect.',
      'Parents have duties toward children.',
      'Authority must serve the common good.',
      'Obedience is not blind but discerning.',
      'Family is the foundation of society.'
    ],
    application: [
      'Practice one act of gratitude toward a family member.',
      'Support someone who carries responsibility.'
    ],
    reflection: 'Where is God inviting me to strengthen relationships of honor?'
  },
  {
    day: 144,
    part: 'Morality',
    title: 'The Fifth Commandment: The Dignity of Life',
    introduction: 'Human life is sacred from conception to natural death. The Fifth Commandment calls believers to protect life, reject violence, and cultivate peace.',
    summary: [
      'Life is sacred and inviolable.',
      'Violence contradicts human dignity.',
      'Care for the vulnerable is essential.',
      'Peace requires justice and mercy.',
      'Hope strengthens respect for life.'
    ],
    application: [
      'Support someone facing vulnerability.',
      'Practice one act of peace today.'
    ],
    reflection: 'Where is God inviting me to protect life more intentionally?'
  },
  {
    day: 145,
    part: 'Morality',
    title: 'Anger, Hatred, and Forgiveness',
    introduction: 'Anger and hatred wound the heart and community. Forgiveness heals and restores communion, reflecting Christ’s mercy.',
    summary: [
      'Anger can distort judgment.',
      'Hatred contradicts charity.',
      'Forgiveness restores communion.',
      'Mercy strengthens freedom.',
      'Healing requires truth and patience.'
    ],
    application: [
      'Release one small resentment.',
      'Practice forgiveness in a concrete way.'
    ],
    reflection: 'Where is Christ inviting me to forgive more deeply?'
  },
  {
    day: 146,
    part: 'Morality',
    title: 'The Sixth Commandment: Human Sexuality',
    introduction: 'Human sexuality expresses the person’s capacity for love and communion. The Sixth Commandment protects the dignity of sexuality and calls for chastity.',
    summary: [
      'Sexuality expresses love and communion.',
      'Chastity integrates desire and freedom.',
      'Marriage reflects covenant love.',
      'Purity strengthens dignity.',
      'Grace heals disordered desire.'
    ],
    application: [
      'Practice one act of purity or self-control.',
      'Honor someone’s dignity in thought and action.'
    ],
    reflection: 'Where is God inviting me to integrate desire with love?'
  },
  {
    day: 147,
    part: 'Morality',
    title: 'Chastity',
    introduction: 'Chastity is the successful integration of sexuality within the person. It strengthens freedom, protects dignity, and prepares the heart for authentic love.',
    summary: [
      'Chastity integrates desire and freedom.',
      'It strengthens self-gift.',
      'It protects dignity and relationships.',
      'Grace heals wounds of desire.',
      'Chastity is for every state of life.'
    ],
    application: [
      'Practice one act of self-control.',
      'Reject a habit that distorts dignity.'
    ],
    reflection: 'Where is Christ inviting me to grow in chastity?'
  },
  {
    day: 148,
    part: 'Morality',
    title: 'The Seventh Commandment: Stewardship and Justice',
    introduction: 'The Seventh Commandment protects property, justice, and stewardship. It calls believers to respect goods, work honestly, and care for creation.',
    summary: [
      'Stealing violates justice.',
      'Work expresses dignity.',
      'Creation requires stewardship.',
      'Economic justice protects the vulnerable.',
      'Charity strengthens solidarity.'
    ],
    application: [
      'Practice honesty in one small matter.',
      'Care for a part of creation intentionally.'
    ],
    reflection: 'Where is God inviting me to practice justice and stewardship?'
  },
  {
    day: 149,
    part: 'Morality',
    title: 'The Eighth Commandment: Truth and Witness',
    introduction: 'Truth is essential for communion. The Eighth Commandment calls believers to honesty, integrity, and responsible speech.',
    summary: [
      'Truth strengthens communion.',
      'Lying harms trust and justice.',
      'Gossip wounds dignity.',
      'Witness requires courage.',
      'Charity guides speech.'
    ],
    application: [
      'Practice honesty in one conversation.',
      'Reject gossip or harmful speech.'
    ],
    reflection: 'Where is Christ inviting me to speak truth with charity?'
  },
  {
    day: 150,
    part: 'Morality',
    title: 'The Ninth Commandment: Purity of Heart',
    introduction: 'Purity of heart integrates desire, imagination, and intention. It protects dignity and strengthens freedom for authentic love.',
    summary: [
      'Purity protects the heart.',
      'Desire must be integrated with charity.',
      'Imagination shapes moral life.',
      'Grace heals interior disorder.',
      'Purity strengthens communion.'
    ],
    application: [
      'Guard your imagination in one moment.',
      'Practice reverence toward others.'
    ],
    reflection: 'Where is God inviting me to purify my heart?'
  },
  {
    day: 151,
    part: 'Morality',
    title: 'The Tenth Commandment: Freedom from Envy',
    introduction: 'The Tenth Commandment calls believers to freedom from envy, greed, and possessiveness. It strengthens gratitude and trust in God’s providence.',
    summary: [
      'Envy wounds charity.',
      'Greed distorts desire.',
      'Gratitude heals comparison.',
      'Trust strengthens freedom.',
      'Simplicity protects joy.'
    ],
    application: [
      'Practice gratitude for one blessing.',
      'Reject a moment of comparison.'
    ],
    reflection: 'Where is Christ inviting me to trust his generosity?'
  },
  {
    day: 152,
    part: 'Morality',
    title: 'The Dignity of Work',
    introduction: 'Work expresses human dignity and participates in God’s creative action. It is not merely economic but relational, spiritual, and communal.',
    summary: [
      'Work expresses human dignity.',
      'It participates in creation.',
      'It serves family and society.',
      'Justice protects workers.',
      'Rest strengthens freedom.'
    ],
    application: [
      'Offer your work to God today.',
      'Support someone facing workplace difficulty.'
    ],
    reflection: 'How can I let my work express dignity and service?'
  },
  {
    day: 153,
    part: 'Morality',
    title: 'Economic Justice',
    introduction: 'Economic life must serve the human person. Justice requires fair wages, ethical practices, and protection of the vulnerable.',
    summary: [
      'Economy must serve the person.',
      'Workers deserve just wages.',
      'Systems must protect the vulnerable.',
      'Charity strengthens justice.',
      'Greed distorts economic life.'
    ],
    application: [
      'Support one effort that promotes economic justice.',
      'Practice generosity in a small way.'
    ],
    reflection: 'Where is God inviting me to strengthen justice in economic life?'
  },
  {
    day: 154,
    part: 'Morality',
    title: 'Solidarity',
    introduction: 'Solidarity is the commitment to the good of all, especially the vulnerable. It expresses the truth that humanity is one family.',
    summary: [
      'Solidarity expresses human unity.',
      'It protects the vulnerable.',
      'It strengthens justice and peace.',
      'It requires sacrifice and compassion.',
      'It reflects Christ’s love.'
    ],
    application: [
      'Support someone facing hardship.',
      'Practice one act of solidarity today.'
    ],
    reflection: 'Where is Christ inviting me to stand with the vulnerable?'
  },
  {
    day: 155,
    part: 'Morality',
    title: 'Subsidiarity',
    introduction: 'Subsidiarity teaches that decisions should be made at the most local level possible. It protects dignity, responsibility, and community.',
    summary: [
      'Subsidiarity protects local responsibility.',
      'It strengthens freedom and initiative.',
      'It prevents harmful centralization.',
      'It supports the common good.',
      'It works with solidarity.'
    ],
    application: [
      'Support a local effort that strengthens community.',
      'Practice responsibility in one small matter.'
    ],
    reflection: 'Where is God inviting me to strengthen local responsibility?'
  },
  {
    day: 156,
    part: 'Morality',
    title: 'The Common Good',
    introduction: 'The common good includes conditions that allow individuals and communities to flourish. It requires justice, peace, and respect for dignity.',
    summary: [
      'Common good protects dignity.',
      'It includes justice and peace.',
      'It requires participation and responsibility.',
      'It strengthens social harmony.',
      'It reflects God’s plan for humanity.'
    ],
    application: [
      'Support one effort that strengthens community life.',
      'Practice responsibility in a shared space.'
    ],
    reflection: 'Where is Christ inviting me to serve the common good?'
  },
  {
    day: 157,
    part: 'Morality',
    title: 'Truth and Social Communication',
    introduction: 'Truth in communication protects dignity and strengthens community. Media and speech must serve truth, justice, and charity.',
    summary: [
      'Truth protects dignity.',
      'Media must serve justice.',
      'Gossip and slander wound community.',
      'Speech must reflect charity.',
      'Communication shapes culture.'
    ],
    application: [
      'Reject gossip or harmful speech.',
      'Practice honesty in one conversation.'
    ],
    reflection: 'Where is God inviting me to speak truth with charity?'
  },
  {
    day: 158,
    part: 'Morality',
    title: 'Environmental Stewardship',
    introduction: 'Creation is a gift entrusted to humanity. Stewardship requires care, responsibility, and gratitude for the world God has made.',
    summary: [
      'Creation is a gift from God.',
      'Stewardship protects future generations.',
      'Care for creation expresses justice.',
      'Gratitude strengthens responsibility.',
      'Environmental harm wounds the poor.'
    ],
    application: [
      'Care for one part of creation intentionally.',
      'Practice gratitude for natural beauty.'
    ],
    reflection: 'Where is Christ inviting me to care for creation?'
  },
  {
    day: 159,
    part: 'Morality',
    title: 'Peace and Justice',
    introduction: 'Peace is the fruit of justice and charity. It requires truth, forgiveness, and commitment to the dignity of every person.',
    summary: [
      'Peace requires justice.',
      'Charity strengthens peace.',
      'Forgiveness heals division.',
      'Truth protects dignity.',
      'Hope strengthens perseverance.'
    ],
    application: [
      'Practice one act of peace today.',
      'Repair one small breach of charity.'
    ],
    reflection: 'Where is Christ inviting me to be a peacemaker?'
  },
  {
    day: 160,
    part: 'Morality',
    title: 'Social Friendship',
    introduction: 'Social friendship builds bridges across differences. It strengthens community, heals division, and reflects the communion God desires for humanity.',
    summary: [
      'Friendship strengthens social harmony.',
      'It heals division and mistrust.',
      'It requires listening and patience.',
      'It reflects Christ’s love for all.',
      'It prepares the heart for communion.'
    ],
    application: [
      'Reach out to someone you usually overlook.',
      'Practice listening without defensiveness.'
    ],
    reflection: 'Where is God inviting me to build social friendship?'
  }
];

const cccLibraryBatch9: Topic[] = [
  {
    day: 161,
    part: 'Morality',
    title: 'Justice and Charity',
    introduction: 'Justice gives each person their due; charity goes beyond justice and offers love freely. Together they form the heart of Christian social life.',
    summary: [
      'Justice protects dignity and rights.',
      'Charity perfects justice.',
      'Both are necessary for social harmony.',
      'Charity heals wounds justice cannot reach.',
      'Grace strengthens both virtues.'
    ],
    application: [
      'Practice one act of justice today.',
      'Offer one act of charity beyond what is required.'
    ],
    reflection: 'Where is Christ inviting me to unite justice with charity?'
  },
  {
    day: 162,
    part: 'Morality',
    title: 'Respect for Persons',
    introduction: 'Every person bears God’s image and deserves respect. Moral life requires protecting dignity through truth, compassion, and responsibility.',
    summary: [
      'Dignity is inherent and universal.',
      'Respect protects the vulnerable.',
      'Speech must honor dignity.',
      'Actions must reflect compassion.',
      'Christ reveals the full truth of human worth.'
    ],
    application: [
      'Treat someone with deliberate respect.',
      'Reject one habit of harsh judgment.'
    ],
    reflection: 'Where is God inviting me to honor someone’s dignity more deeply?'
  },
  {
    day: 163,
    part: 'Morality',
    title: 'Respect for the Body',
    introduction: 'The body is a gift meant for communion, service, and resurrection. Respect for the body protects dignity and strengthens freedom.',
    summary: [
      'The body shares in human dignity.',
      'It expresses the person’s identity.',
      'It is destined for resurrection.',
      'Purity protects bodily dignity.',
      'Care for the body honors God’s creation.'
    ],
    application: [
      'Practice one act of bodily care.',
      'Treat another’s body with reverence.'
    ],
    reflection: 'How can I honor the dignity of my body today?'
  },
  {
    day: 164,
    part: 'Morality',
    title: 'Respect for Truth',
    introduction: 'Truth is essential for communion. Respect for truth requires honesty, integrity, and courage in speech and action.',
    summary: [
      'Truth protects dignity.',
      'Lying harms trust.',
      'Integrity strengthens relationships.',
      'Courage is needed for witness.',
      'Charity guides truthful speech.'
    ],
    application: [
      'Practice honesty in one conversation.',
      'Reject gossip or exaggeration.'
    ],
    reflection: 'Where is Christ inviting me to speak truth with charity?'
  },
  {
    day: 165,
    part: 'Morality',
    title: 'Respect for Property',
    introduction: 'Respect for property protects justice and stewardship. Goods are meant for the common good, not selfish accumulation.',
    summary: [
      'Property must serve human dignity.',
      'Stealing violates justice.',
      'Greed distorts desire.',
      'Stewardship protects creation.',
      'Generosity strengthens communion.'
    ],
    application: [
      'Practice honesty in one small matter.',
      'Share something with someone in need.'
    ],
    reflection: 'Where is God inviting me to practice stewardship?'
  },
  {
    day: 166,
    part: 'Morality',
    title: 'Respect for Creation',
    introduction: 'Creation is entrusted to humanity for care, not exploitation. Stewardship expresses gratitude, justice, and responsibility.',
    summary: [
      'Creation is a gift from God.',
      'Stewardship protects future generations.',
      'Environmental harm wounds the poor.',
      'Gratitude strengthens responsibility.',
      'Care for creation expresses justice.'
    ],
    application: [
      'Care for one part of creation intentionally.',
      'Practice gratitude for natural beauty.'
    ],
    reflection: 'Where is Christ inviting me to care for creation?'
  },
  {
    day: 167,
    part: 'Morality',
    title: 'Respect for the Poor',
    introduction: 'The poor hold a privileged place in God’s heart. Respect for the poor requires solidarity, justice, and concrete acts of compassion.',
    summary: [
      'The poor reveal Christ’s presence.',
      'Solidarity protects dignity.',
      'Justice requires care for the vulnerable.',
      'Charity strengthens community.',
      'Service expresses discipleship.'
    ],
    application: [
      'Support someone facing hardship.',
      'Practice one act of solidarity today.'
    ],
    reflection: 'Where is God inviting me to stand with the poor?'
  },
  {
    day: 168,
    part: 'Morality',
    title: 'Respect for Work',
    introduction: 'Work expresses human dignity and participates in God’s creative action. Respect for work protects workers, families, and society.',
    summary: [
      'Work expresses human dignity.',
      'It serves family and society.',
      'Justice protects workers.',
      'Rest strengthens freedom.',
      'Work participates in creation.'
    ],
    application: [
      'Offer your work to God today.',
      'Support someone facing workplace difficulty.'
    ],
    reflection: 'How can I let my work express dignity and service?'
  },
  {
    day: 169,
    part: 'Morality',
    title: 'Respect for Family Life',
    introduction: 'Family is the foundation of society. Respect for family life protects relationships, strengthens virtue, and supports children’s growth.',
    summary: [
      'Family is a school of love.',
      'Parents have duties toward children.',
      'Children owe respect and gratitude.',
      'Family life shapes virtue.',
      'Grace strengthens family bonds.'
    ],
    application: [
      'Practice one act of love within your home.',
      'Support a family facing difficulty.'
    ],
    reflection: 'Where is Christ inviting me to strengthen family life?'
  },
  {
    day: 170,
    part: 'Morality',
    title: 'Respect for Marriage',
    introduction: 'Marriage is a covenant of love that reflects Christ’s union with the Church. Respect for marriage protects fidelity, communion, and family life.',
    summary: [
      'Marriage is a covenant of self-gift.',
      'It reflects Christ’s love for the Church.',
      'Fidelity strengthens communion.',
      'Grace heals wounds in marriage.',
      'Marriage serves family and society.'
    ],
    application: [
      'Support a married couple with prayer.',
      'Practice one act of faithful love.'
    ],
    reflection: 'How can I reflect covenant love in my relationships?'
  },
  {
    day: 171,
    part: 'Morality',
    title: 'Respect for Human Sexuality',
    introduction: 'Human sexuality expresses the capacity for love and communion. Respect for sexuality protects dignity, freedom, and authentic self-gift.',
    summary: [
      'Sexuality expresses love and communion.',
      'Chastity integrates desire and freedom.',
      'Purity protects dignity.',
      'Grace heals disordered desire.',
      'Sexuality is ordered toward self-gift.'
    ],
    application: [
      'Practice one act of purity or self-control.',
      'Honor someone’s dignity in thought and action.'
    ],
    reflection: 'Where is Christ inviting me to integrate desire with love?'
  },
  {
    day: 172,
    part: 'Morality',
    title: 'Respect for Truth in Media',
    introduction: 'Media shapes culture and must serve truth, justice, and dignity. Responsible communication protects community and strengthens trust.',
    summary: [
      'Media must serve truth.',
      'Gossip and slander wound community.',
      'Speech must reflect charity.',
      'Truth protects dignity.',
      'Communication shapes culture.'
    ],
    application: [
      'Reject gossip or harmful speech.',
      'Practice honesty in one conversation.'
    ],
    reflection: 'Where is God inviting me to speak truth with charity?'
  },
  {
    day: 173,
    part: 'Morality',
    title: 'Respect for Nations and Peoples',
    introduction: 'Nations and peoples deserve respect, justice, and peace. Solidarity across cultures reflects the unity of the human family.',
    summary: [
      'Humanity is one family.',
      'Nations deserve justice and peace.',
      'Solidarity protects the vulnerable.',
      'Dialogue strengthens harmony.',
      'Charity heals division.'
    ],
    application: [
      'Learn about a culture different from your own.',
      'Practice respect in a cross-cultural interaction.'
    ],
    reflection: 'Where is Christ inviting me to build bridges across differences?'
  },
  {
    day: 174,
    part: 'Morality',
    title: 'Respect for Religious Freedom',
    introduction: 'Religious freedom protects the dignity of conscience and the right to seek truth. It strengthens peace and social harmony.',
    summary: [
      'Conscience deserves protection.',
      'Religious freedom is a human right.',
      'Coercion violates dignity.',
      'Dialogue strengthens peace.',
      'Truth invites, never forces.'
    ],
    application: [
      'Respect someone’s sincere beliefs.',
      'Practice humility in a disagreement.'
    ],
    reflection: 'Where is God inviting me to protect freedom of conscience?'
  },
  {
    day: 175,
    part: 'Morality',
    title: 'Respect for Peace',
    introduction: 'Peace is the fruit of justice and charity. It requires truth, forgiveness, and commitment to the dignity of every person.',
    summary: [
      'Peace requires justice.',
      'Charity strengthens peace.',
      'Forgiveness heals division.',
      'Truth protects dignity.',
      'Hope strengthens perseverance.'
    ],
    application: [
      'Practice one act of peace today.',
      'Repair one small breach of charity.'
    ],
    reflection: 'Where is Christ inviting me to be a peacemaker?'
  },
  {
    day: 176,
    part: 'Morality',
    title: 'Respect for Human Rights',
    introduction: 'Human rights flow from human dignity. Protecting these rights strengthens justice, peace, and the common good.',
    summary: [
      'Human rights arise from dignity.',
      'They protect freedom and justice.',
      'They require responsibility and solidarity.',
      'Violations wound the human family.',
      'Christ strengthens defense of the vulnerable.'
    ],
    application: [
      'Support someone whose rights are threatened.',
      'Practice responsibility in one small matter.'
    ],
    reflection: 'Where is God inviting me to defend human dignity?'
  },
  {
    day: 177,
    part: 'Morality',
    title: 'Respect for Cultural Diversity',
    introduction: 'Cultural diversity enriches humanity and reflects God’s creativity. Respect for cultures strengthens unity and mutual understanding.',
    summary: [
      'Cultures express human creativity.',
      'Diversity strengthens unity.',
      'Respect protects dignity.',
      'Dialogue heals misunderstanding.',
      'Charity builds harmony.'
    ],
    application: [
      'Learn something true or good from another culture.',
      'Practice respectful curiosity.'
    ],
    reflection: 'Where is Christ inviting me to appreciate cultural diversity?'
  },
  {
    day: 178,
    part: 'Morality',
    title: 'Respect for the Elderly',
    introduction: 'The elderly deserve honor, care, and companionship. Their wisdom strengthens families and communities.',
    summary: [
      'Elderly persons deserve respect.',
      'They carry wisdom and memory.',
      'Care expresses gratitude.',
      'Loneliness wounds dignity.',
      'Charity strengthens community.'
    ],
    application: [
      'Reach out to an elderly person today.',
      'Practice patience and listening.'
    ],
    reflection: 'Where is God inviting me to honor the elderly?'
  },
  {
    day: 179,
    part: 'Morality',
    title: 'Respect for Children',
    introduction: 'Children deserve protection, education, and love. Their vulnerability calls for responsibility, patience, and compassion.',
    summary: [
      'Children deserve protection and care.',
      'Parents are primary educators.',
      'Society must support families.',
      'Love strengthens growth.',
      'Grace heals wounds of neglect.'
    ],
    application: [
      'Support a child or family in a small way.',
      'Practice gentleness in one interaction.'
    ],
    reflection: 'Where is Christ inviting me to protect the vulnerable?'
  },
  {
    day: 180,
    part: 'Morality',
    title: 'Respect for the Dignity of Work and Workers',
    introduction: 'Work expresses human dignity and must be protected from exploitation. Respect for workers strengthens justice, peace, and community.',
    summary: [
      'Work expresses human dignity.',
      'Workers deserve fair treatment.',
      'Justice protects labor.',
      'Rest strengthens freedom.',
      'Charity heals workplace wounds.'
    ],
    application: [
      'Support someone facing workplace injustice.',
      'Offer your work to God with intention.'
    ],
    reflection: 'Where is God inviting me to strengthen justice in work?'
  }
];

const cccLibraryBatch10: Topic[] = [
  {
    day: 181,
    part: 'Prayer',
    title: 'The Universal Call to Prayer',
    introduction: 'Prayer is the living relationship between God and the human person. Every person is called to prayer because every heart carries a desire for communion with God.',
    summary: [
      'Prayer is God’s gift and our response.',
      'Every person is capable of prayer.',
      'Desire for God awakens prayer.',
      'Prayer expresses faith, hope, and charity.',
      'The Spirit teaches the heart to pray.'
    ],
    application: [
      'Spend one quiet minute acknowledging God’s presence.',
      'Name one desire you want to bring to prayer.'
    ],
    reflection: 'Where is God inviting me into deeper relationship through prayer?'
  },
  {
    day: 182,
    part: 'Prayer',
    title: 'What Is Prayer?',
    introduction: 'Prayer is raising the heart and mind to God. It is not merely speaking but listening, receiving, and dwelling in God’s presence.',
    summary: [
      'Prayer is relationship, not technique.',
      'It includes listening and silence.',
      'It expresses trust and surrender.',
      'It grows through practice and grace.',
      'Christ teaches us how to pray.'
    ],
    application: [
      'Practice one moment of silent listening.',
      'Speak honestly to God about one concern.'
    ],
    reflection: 'How can I let prayer become more relational than functional?'
  },
  {
    day: 183,
    part: 'Prayer',
    title: 'Revelation and Prayer',
    introduction: 'Prayer unfolds within God’s revelation. God speaks first, and prayer is the human response to his initiative.',
    summary: [
      'God reveals himself through Scripture and Christ.',
      'Prayer responds to God’s initiative.',
      'Revelation teaches us how to pray.',
      'The Spirit opens the heart to God’s Word.',
      'Prayer deepens understanding of revelation.'
    ],
    application: [
      'Pray with one verse of Scripture.',
      'Ask God to speak through his Word.'
    ],
    reflection: 'Where is God speaking to me through revelation?'
  },
  {
    day: 184,
    part: 'Prayer',
    title: 'Prayer in the Old Testament',
    introduction: 'The Old Testament reveals prayer as covenant dialogue—Abraham’s trust, Moses’ intercession, David’s praise, and the prophets’ cry for justice.',
    summary: [
      'Abraham prays with trust.',
      'Moses intercedes for the people.',
      'David prays with praise and repentance.',
      'Prophets pray for justice and fidelity.',
      'The Psalms express every human emotion.'
    ],
    application: [
      'Pray one psalm slowly.',
      'Practice honesty in prayer like the prophets.'
    ],
    reflection: 'Which Old Testament prayer speaks to my heart today?'
  },
  {
    day: 185,
    part: 'Prayer',
    title: 'Prayer of the Psalms',
    introduction: 'The Psalms are the Church’s prayer book. They express joy, sorrow, trust, fear, hope, and praise, teaching believers to bring every emotion to God.',
    summary: [
      'Psalms express the full range of human experience.',
      'They teach honesty in prayer.',
      'They unite personal and communal prayer.',
      'Christ prayed the Psalms.',
      'They shape the Church’s liturgy.'
    ],
    application: [
      'Pray a psalm that matches your current emotion.',
      'Let the psalms teach you honesty with God.'
    ],
    reflection: 'What emotion do I need to bring to God through the Psalms?'
  },
  {
    day: 186,
    part: 'Prayer',
    title: 'Prayer in the Life of Jesus',
    introduction: 'Jesus prays constantly—in solitude, in community, before major decisions, and in suffering. His prayer reveals his relationship with the Father.',
    summary: [
      'Jesus prays in silence and solitude.',
      'He prays before major decisions.',
      'He prays for his disciples.',
      'He prays in suffering and joy.',
      'His prayer reveals divine sonship.'
    ],
    application: [
      'Imitate Christ by praying before one decision.',
      'Bring one sorrow to God as Jesus did.'
    ],
    reflection: 'How can I let Jesus’ prayer shape my own?'
  },
  {
    day: 187,
    part: 'Prayer',
    title: 'Christ the Model of Prayer',
    introduction: 'Jesus teaches prayer through example and instruction. His humility, trust, and perseverance reveal the heart of Christian prayer.',
    summary: [
      'Christ prays with trust and surrender.',
      'He teaches persistence in prayer.',
      'He reveals God as Father.',
      'He prays for unity and mission.',
      'He intercedes for the world.'
    ],
    application: [
      'Pray with the words “Father, into your hands.”',
      'Practice perseverance in one prayer intention.'
    ],
    reflection: 'Where is Christ inviting me to trust like he trusted?'
  },
  {
    day: 188,
    part: 'Prayer',
    title: 'The Prayer of the Church',
    introduction: 'The Church prays as the Body of Christ. Her liturgy, sacraments, and daily prayer unite believers across time and place.',
    summary: [
      'The Church prays with Christ’s voice.',
      'Liturgy is the heart of ecclesial prayer.',
      'The Hours sanctify the day.',
      'Communal prayer strengthens unity.',
      'The Spirit animates the Church’s prayer.'
    ],
    application: [
      'Join one communal prayer this week.',
      'Pray a psalm or liturgical prayer intentionally.'
    ],
    reflection: 'How can I enter more deeply into the Church’s prayer?'
  },
  {
    day: 189,
    part: 'Prayer',
    title: 'The Holy Spirit and Prayer',
    introduction: 'The Holy Spirit teaches the heart to pray. He inspires desire, strengthens perseverance, and intercedes within us.',
    summary: [
      'The Spirit awakens desire for God.',
      'He teaches us how to pray.',
      'He strengthens perseverance.',
      'He intercedes within the heart.',
      'He forms unity in prayer.'
    ],
    application: [
      'Pray “Come, Holy Spirit” sincerely.',
      'Follow one quiet prompting toward prayer.'
    ],
    reflection: 'Where is the Spirit inviting me into deeper prayer?'
  },
  {
    day: 190,
    part: 'Prayer',
    title: 'Forms of Prayer: Blessing and Adoration',
    introduction: 'Blessing acknowledges God’s gifts; adoration recognizes God’s greatness. These forms of prayer open the heart to humility and gratitude.',
    summary: [
      'Blessing expresses gratitude.',
      'Adoration expresses reverence.',
      'Both forms center the heart on God.',
      'They strengthen humility and trust.',
      'They prepare the heart for deeper prayer.'
    ],
    application: [
      'Bless God for one gift today.',
      'Spend a moment in silent adoration.'
    ],
    reflection: 'Where is God inviting me to adore him more deeply?'
  },
  {
    day: 191,
    part: 'Prayer',
    title: 'Forms of Prayer: Petition',
    introduction: 'Petition expresses dependence on God. It is not selfishness but honest recognition of need and trust in divine care.',
    summary: [
      'Petition acknowledges need.',
      'It expresses trust in God’s care.',
      'It includes asking for forgiveness.',
      'It strengthens humility.',
      'It prepares the heart for surrender.'
    ],
    application: [
      'Ask God for help in one specific need.',
      'Practice humility in a moment of weakness.'
    ],
    reflection: 'What need do I need to bring honestly to God?'
  },
  {
    day: 192,
    part: 'Prayer',
    title: 'Forms of Prayer: Intercession',
    introduction: 'Intercession expresses solidarity and charity. It mirrors Christ’s own prayer for the world and strengthens communion.',
    summary: [
      'Intercession reflects Christ’s prayer.',
      'It expresses charity and solidarity.',
      'It strengthens unity.',
      'It heals division.',
      'It prepares the heart for service.'
    ],
    application: [
      'Pray for someone who is suffering.',
      'Intercede for someone you find difficult.'
    ],
    reflection: 'Who is God inviting me to intercede for today?'
  },
  {
    day: 193,
    part: 'Prayer',
    title: 'Forms of Prayer: Thanksgiving',
    introduction: 'Thanksgiving recognizes God’s generosity and strengthens joy. Gratitude heals resentment and opens the heart to hope.',
    summary: [
      'Thanksgiving expresses gratitude.',
      'It strengthens joy and humility.',
      'It heals envy and resentment.',
      'It reveals God’s generosity.',
      'It prepares the heart for mission.'
    ],
    application: [
      'Thank God for one quiet grace.',
      'Practice gratitude toward someone.'
    ],
    reflection: 'Where is God inviting me into deeper gratitude?'
  },
  {
    day: 194,
    part: 'Prayer',
    title: 'Forms of Prayer: Praise',
    introduction: 'Praise celebrates God for who he is. It goes beyond gratitude for gifts and delights in God’s goodness and beauty.',
    summary: [
      'Praise celebrates God’s goodness.',
      'It expresses joy and wonder.',
      'It strengthens hope.',
      'It unites the heart to God.',
      'It prepares for eternal life.'
    ],
    application: [
      'Speak one word of praise to God.',
      'Notice something beautiful and praise God for it.'
    ],
    reflection: 'Where is God inviting me to praise him today?'
  },
  {
    day: 195,
    part: 'Prayer',
    title: 'Expressions of Prayer: Vocal Prayer',
    introduction: 'Vocal prayer uses words to express the heart. It is simple, accessible, and foundational for deeper forms of prayer.',
    summary: [
      'Vocal prayer expresses faith through words.',
      'It is accessible to all.',
      'It strengthens communal prayer.',
      'It forms the heart for deeper prayer.',
      'It requires attention and sincerity.'
    ],
    application: [
      'Pray one vocal prayer slowly and attentively.',
      'Speak honestly to God in your own words.'
    ],
    reflection: 'How can I make my vocal prayer more sincere?'
  },
  {
    day: 196,
    part: 'Prayer',
    title: 'Expressions of Prayer: Meditation',
    introduction: 'Meditation engages the mind and heart with Scripture, images, or truths of faith. It deepens understanding and strengthens desire for God.',
    summary: [
      'Meditation engages thought and imagination.',
      'It deepens understanding of faith.',
      'It strengthens desire for God.',
      'It prepares for contemplation.',
      'It requires focus and patience.'
    ],
    application: [
      'Meditate on one verse of Scripture.',
      'Reflect on a truth of faith for a few minutes.'
    ],
    reflection: 'Where is God inviting me to meditate more deeply?'
  },
  {
    day: 197,
    part: 'Prayer',
    title: 'Expressions of Prayer: Contemplation',
    introduction: 'Contemplation is silent, loving awareness of God’s presence. It is pure gift, drawing the heart into deep communion with God.',
    summary: [
      'Contemplation is silent and receptive.',
      'It is a gift of the Spirit.',
      'It deepens intimacy with God.',
      'It strengthens charity and peace.',
      'It prepares the heart for mission.'
    ],
    application: [
      'Sit in silence for one minute before God.',
      'Let go of distractions gently.'
    ],
    reflection: 'Where is God inviting me into deeper silence?'
  },
  {
    day: 198,
    part: 'Prayer',
    title: 'The Battle of Prayer',
    introduction: 'Prayer involves struggle—distraction, dryness, fatigue, and resistance. The battle of prayer is part of spiritual growth and requires perseverance.',
    summary: [
      'Prayer includes struggle and perseverance.',
      'Distraction is normal and manageable.',
      'Dryness can purify desire.',
      'Fatigue invites humility.',
      'The Spirit strengthens perseverance.'
    ],
    application: [
      'Persevere in prayer despite distraction.',
      'Name one struggle honestly to God.'
    ],
    reflection: 'Where is Christ inviting me to persevere in prayer?'
  },
  {
    day: 199,
    part: 'Prayer',
    title: 'The Our Father: The Prayer of Jesus',
    introduction: 'The Our Father is the summary of the Gospel. Jesus teaches this prayer to reveal the heart of the Father and the path of discipleship.',
    summary: [
      'The Our Father reveals God as Father.',
      'It teaches trust and surrender.',
      'It expresses forgiveness and mercy.',
      'It strengthens hope and courage.',
      'It forms the heart for mission.'
    ],
    application: [
      'Pray the Our Father slowly and attentively.',
      'Reflect on one petition that challenges you.'
    ],
    reflection: 'Which petition of the Our Father speaks most deeply to me now?'
  },
  {
    day: 200,
    part: 'Prayer',
    title: 'The Hallowed Life: Living the Our Father',
    introduction: 'The Our Father is not only prayed but lived. Each petition calls believers to embody God’s holiness, forgiveness, trust, and mission.',
    summary: [
      '“Hallowed be thy name” calls for holiness.',
      '“Thy kingdom come” calls for mission.',
      '“Thy will be done” calls for surrender.',
      '“Forgive us” calls for mercy.',
      '“Deliver us” calls for trust.'
    ],
    application: [
      'Choose one petition to live intentionally today.',
      'Practice forgiveness or surrender in a concrete way.'
    ],
    reflection: 'How is God inviting me to live the Our Father more fully?'
  }
];

const cccLibraryBatch11: Topic[] = [
  {
    day: 201,
    part: 'Prayer',
    title: 'Our Father: Hallowed Be Thy Name',
    introduction: 'To hallow God’s name is to let his holiness shape our lives. This petition asks for God’s glory to be revealed in us and through us.',
    summary: [
      'God’s name reveals his identity.',
      'Holiness is God’s gift and our call.',
      'Hallowing God’s name means living in truth.',
      'Holiness strengthens witness.',
      'This petition shapes daily choices.'
    ],
    application: [
      'Choose one action that reflects God’s holiness.',
      'Reject a habit that distorts your witness.'
    ],
    reflection: 'Where is God inviting me to honor his name more deeply?'
  },
  {
    day: 202,
    part: 'Prayer',
    title: 'Our Father: Thy Kingdom Come',
    introduction: 'The kingdom is God’s reign of truth, justice, and love. This petition asks for the kingdom to grow in our hearts and in the world.',
    summary: [
      'The kingdom is God’s reign.',
      'It grows through conversion.',
      'It heals injustice and division.',
      'It strengthens hope.',
      'Mission expresses this petition.'
    ],
    application: [
      'Practice one act that reflects the kingdom’s values.',
      'Encourage someone who feels discouraged.'
    ],
    reflection: 'Where is Christ inviting me to help build his kingdom?'
  },
  {
    day: 203,
    part: 'Prayer',
    title: 'Our Father: Thy Will Be Done',
    introduction: 'God’s will is our peace. This petition asks for trust, surrender, and courage to follow God’s plan even when difficult.',
    summary: [
      'God’s will expresses perfect love.',
      'Surrender strengthens freedom.',
      'Trust heals fear.',
      'Obedience expresses faith.',
      'Christ models perfect surrender.'
    ],
    application: [
      'Surrender one worry to God.',
      'Practice obedience in a small matter.'
    ],
    reflection: 'Where is God inviting me to trust his will?'
  },
  {
    day: 204,
    part: 'Prayer',
    title: 'Our Father: Give Us This Day Our Daily Bread',
    introduction: 'Daily bread includes material needs, spiritual nourishment, and the Eucharist. This petition expresses trust in God’s providence.',
    summary: [
      'Daily bread includes all essential needs.',
      'Providence strengthens trust.',
      'The Eucharist is our true bread.',
      'Gratitude heals anxiety.',
      'Sharing expresses this petition.'
    ],
    application: [
      'Thank God for one daily provision.',
      'Share something with someone in need.'
    ],
    reflection: 'Where is God inviting me to trust his daily care?'
  },
  {
    day: 205,
    part: 'Prayer',
    title: 'Our Father: Forgive Us Our Trespasses',
    introduction: 'Forgiveness restores communion and heals wounds. This petition asks for mercy and strengthens the desire to forgive others.',
    summary: [
      'Forgiveness heals guilt and shame.',
      'Mercy restores communion.',
      'Confession strengthens honesty.',
      'Forgiving others expresses gratitude.',
      'Christ models perfect mercy.'
    ],
    application: [
      'Seek forgiveness in one area.',
      'Offer mercy to someone who hurt you.'
    ],
    reflection: 'Where is Christ inviting me to receive or offer forgiveness?'
  },
  {
    day: 206,
    part: 'Prayer',
    title: 'Our Father: Lead Us Not Into Temptation',
    introduction: 'This petition asks for strength against temptation and clarity in moments of confusion. God does not tempt; he strengthens.',
    summary: [
      'Temptation tests freedom.',
      'God strengthens, not tempts.',
      'Grace protects the heart.',
      'Vigilance prevents harm.',
      'Hope strengthens perseverance.'
    ],
    application: [
      'Ask Christ for strength in one temptation.',
      'Practice vigilance in a vulnerable moment.'
    ],
    reflection: 'Where do I need Christ’s strength in spiritual struggle?'
  },
  {
    day: 207,
    part: 'Prayer',
    title: 'Our Father: Deliver Us From Evil',
    introduction: 'This petition asks for protection from sin, fear, and the enemy. It expresses trust in God’s victory through Christ.',
    summary: [
      'Evil wounds freedom and communion.',
      'Christ conquers evil through love.',
      'Grace protects and strengthens.',
      'Hope heals fear.',
      'Deliverance prepares for mission.'
    ],
    application: [
      'Ask God to deliver you from one fear.',
      'Practice courage in a small moment.'
    ],
    reflection: 'Where is God inviting me to trust his protection?'
  },
  {
    day: 208,
    part: 'Prayer',
    title: 'The Amen of Faith',
    introduction: 'Amen expresses trust, surrender, and commitment. It seals prayer with confidence in God’s fidelity.',
    summary: [
      'Amen means “so be it.”',
      'It expresses trust in God’s promise.',
      'It strengthens surrender.',
      'It unites prayer with faith.',
      'It prepares the heart for action.'
    ],
    application: [
      'Say “Amen” with intentional trust.',
      'Let your Amen shape one decision.'
    ],
    reflection: 'Where is God inviting me to say Amen with my life?'
  },
  {
    day: 209,
    part: 'Prayer',
    title: 'The Heart of Prayer',
    introduction: 'Prayer begins in the heart. Authentic prayer requires honesty, humility, and openness to God’s presence.',
    summary: [
      'The heart is the place of encounter.',
      'Honesty strengthens prayer.',
      'Humility opens the heart.',
      'Silence reveals truth.',
      'Love shapes prayer.'
    ],
    application: [
      'Speak honestly to God about one fear.',
      'Practice humility in prayer.'
    ],
    reflection: 'Where is God inviting me to pray from the heart?'
  },
  {
    day: 210,
    part: 'Prayer',
    title: 'The Desire for God',
    introduction: 'Desire is the engine of prayer. God awakens desire so the heart can seek him with freedom and love.',
    summary: [
      'Desire reveals the heart’s orientation.',
      'God awakens desire for communion.',
      'Desire strengthens perseverance.',
      'Disordered desires need healing.',
      'Desire prepares for contemplation.'
    ],
    application: [
      'Name one desire honestly.',
      'Ask God to purify your deepest longing.'
    ],
    reflection: 'What desire is God awakening in me?'
  },
  {
    day: 211,
    part: 'Prayer',
    title: 'The Life of Grace',
    introduction: 'Grace strengthens prayer by healing wounds, elevating desire, and forming the heart for communion with God.',
    summary: [
      'Grace is God’s free gift.',
      'It heals wounded nature.',
      'It strengthens desire for God.',
      'It forms virtue and holiness.',
      'Grace prepares for mission.'
    ],
    application: [
      'Ask God for grace in one challenge.',
      'Respond generously to a quiet prompting.'
    ],
    reflection: 'Where do I need grace to strengthen my prayer?'
  },
  {
    day: 212,
    part: 'Prayer',
    title: 'The Interior Life',
    introduction: 'The interior life is the hidden place where God speaks. It grows through silence, reflection, and fidelity.',
    summary: [
      'Interior life requires silence.',
      'Reflection strengthens clarity.',
      'Grace heals interior wounds.',
      'Interior life shapes exterior action.',
      'Christ dwells in the heart.'
    ],
    application: [
      'Spend one minute in interior silence.',
      'Reflect on a truth of faith.'
    ],
    reflection: 'Where is God inviting me into deeper interior life?'
  },
  {
    day: 213,
    part: 'Prayer',
    title: 'Spiritual Discernment',
    introduction: 'Discernment seeks God’s will through prayer, counsel, and interior clarity. It requires humility, patience, and trust.',
    summary: [
      'Discernment seeks God’s will.',
      'It requires prayer and silence.',
      'Counsel strengthens clarity.',
      'Desire must be purified.',
      'Discernment prepares for action.'
    ],
    application: [
      'Ask God for clarity in one decision.',
      'Seek counsel from someone wise.'
    ],
    reflection: 'Where is God inviting me to discern more carefully?'
  },
  {
    day: 214,
    part: 'Prayer',
    title: 'Spiritual Warfare',
    introduction: 'Spiritual warfare is the struggle against temptation, fear, and the enemy. Prayer strengthens courage, clarity, and perseverance.',
    summary: [
      'Spiritual warfare is real but not frightening.',
      'Christ is victorious.',
      'Grace strengthens courage.',
      'Prayer protects the heart.',
      'Hope heals fear.'
    ],
    application: [
      'Ask Christ for strength in one struggle.',
      'Practice vigilance in a vulnerable moment.'
    ],
    reflection: 'Where do I need Christ’s protection today?'
  },
  {
    day: 215,
    part: 'Prayer',
    title: 'The Prayer of the Saints',
    introduction: 'The saints teach prayer through example and intercession. Their lives reveal the fruit of grace and perseverance.',
    summary: [
      'Saints model prayer and holiness.',
      'They intercede for the Church.',
      'Their struggles strengthen hope.',
      'Their joy reveals God’s fidelity.',
      'Their example inspires perseverance.'
    ],
    application: [
      'Ask a saint for intercession.',
      'Learn one prayer from a saint.'
    ],
    reflection: 'Which saint is God inviting me to learn from?'
  },
  {
    day: 216,
    part: 'Prayer',
    title: 'Mary and Prayer',
    introduction: 'Mary is the perfect model of prayer—humble, trusting, persevering. Her intercession strengthens hope and guides discipleship.',
    summary: [
      'Mary prays with humility and trust.',
      'She intercedes for the Church.',
      'Her fiat reveals perfect surrender.',
      'She teaches perseverance in prayer.',
      'She strengthens hope.'
    ],
    application: [
      'Pray one Hail Mary slowly.',
      'Practice surrender like Mary’s fiat.'
    ],
    reflection: 'Where is Mary inviting me to trust more deeply?'
  },
  {
    day: 217,
    part: 'Prayer',
    title: 'The Rosary',
    introduction: 'The Rosary is a contemplative prayer that meditates on Christ’s mysteries through Mary’s eyes. It strengthens peace, hope, and perseverance.',
    summary: [
      'The Rosary is biblical and contemplative.',
      'It meditates on Christ’s mysteries.',
      'It strengthens peace and hope.',
      'It unites vocal and meditative prayer.',
      'It prepares the heart for mission.'
    ],
    application: [
      'Pray one decade intentionally.',
      'Meditate on one mystery of Christ’s life.'
    ],
    reflection: 'Which mystery of Christ is inviting my attention today?'
  },
  {
    day: 218,
    part: 'Prayer',
    title: 'Eucharistic Prayer',
    introduction: 'Eucharistic prayer is adoration, thanksgiving, and communion with Christ. It strengthens love and heals division.',
    summary: [
      'Eucharistic prayer centers on Christ’s presence.',
      'It expresses adoration and gratitude.',
      'It heals wounds of division.',
      'It strengthens charity.',
      'It prepares for mission.'
    ],
    application: [
      'Spend time in quiet adoration.',
      'Practice gratitude after Communion.'
    ],
    reflection: 'Where is Christ inviting me into deeper Eucharistic prayer?'
  },
  {
    day: 219,
    part: 'Prayer',
    title: 'Contemplative Silence',
    introduction: 'Silence is the language of God. Contemplative silence opens the heart to presence, healing, and transformation.',
    summary: [
      'Silence reveals God’s presence.',
      'It heals distraction and anxiety.',
      'It strengthens interior clarity.',
      'It prepares for contemplation.',
      'It deepens intimacy with God.'
    ],
    application: [
      'Sit in silence for one minute.',
      'Let distractions pass without judgment.'
    ],
    reflection: 'Where is God inviting me into deeper silence?'
  },
  {
    day: 220,
    part: 'Prayer',
    title: 'Perseverance in Prayer',
    introduction: 'Perseverance strengthens trust and forms the heart for communion. Prayer grows through fidelity, even in dryness or struggle.',
    summary: [
      'Perseverance strengthens faith.',
      'Dryness can purify desire.',
      'Fidelity shapes character.',
      'Hope sustains prayer.',
      'Christ strengthens perseverance.'
    ],
    application: [
      'Continue praying even if distracted.',
      'Name one struggle honestly to God.'
    ],
    reflection: 'Where is Christ inviting me to persevere in prayer?'
  }
];

const cccLibraryBatch12: Topic[] = [
  {
    day: 221,
    part: 'Prayer',
    title: 'Trust in Prayer',
    introduction: 'Trust is the foundation of prayer. It allows the heart to rest in God’s goodness even when answers are delayed or unclear.',
    summary: [
      'Trust strengthens perseverance.',
      'God hears every prayer.',
      'Uncertainty invites deeper surrender.',
      'Trust heals fear and anxiety.',
      'Christ models perfect trust.'
    ],
    application: [
      'Entrust one unresolved concern to God.',
      'Practice calm trust in a moment of uncertainty.'
    ],
    reflection: 'Where is God inviting me to trust him more deeply?'
  },
  {
    day: 222,
    part: 'Prayer',
    title: 'Dryness in Prayer',
    introduction: 'Dryness is a normal part of spiritual growth. It purifies desire and teaches the heart to seek God for his own sake.',
    summary: [
      'Dryness is not abandonment.',
      'It purifies motives and desire.',
      'It strengthens perseverance.',
      'It invites deeper trust.',
      'The Spirit sustains prayer in dryness.'
    ],
    application: [
      'Continue praying even if you feel nothing.',
      'Name dryness honestly to God.'
    ],
    reflection: 'Where is dryness inviting me into deeper trust?'
  },
  {
    day: 223,
    part: 'Prayer',
    title: 'Distraction in Prayer',
    introduction: 'Distraction is part of human weakness. It can reveal what the heart needs healing from and invites gentle redirection.',
    summary: [
      'Distraction is normal.',
      'Gentle redirection strengthens focus.',
      'Distraction reveals interior concerns.',
      'Humility protects prayer.',
      'Grace heals scattered attention.'
    ],
    application: [
      'Redirect your attention gently once.',
      'Bring a recurring distraction to God.'
    ],
    reflection: 'What distraction is God inviting me to bring into prayer?'
  },
  {
    day: 224,
    part: 'Prayer',
    title: 'Perseverance in Silence',
    introduction: 'Silence requires patience and fidelity. It forms the heart for contemplation and strengthens interior clarity.',
    summary: [
      'Silence reveals God’s presence.',
      'It heals noise and anxiety.',
      'It strengthens interior clarity.',
      'It prepares for contemplation.',
      'Perseverance deepens intimacy.'
    ],
    application: [
      'Sit in silence for one minute.',
      'Let distractions pass without judgment.'
    ],
    reflection: 'Where is God inviting me into deeper silence?'
  },
  {
    day: 225,
    part: 'Prayer',
    title: 'Listening to God',
    introduction: 'Prayer includes listening. God speaks through Scripture, silence, conscience, and the movements of the heart.',
    summary: [
      'Listening is essential to prayer.',
      'God speaks through Scripture.',
      'Interior movements reveal guidance.',
      'Silence strengthens discernment.',
      'Listening prepares for obedience.'
    ],
    application: [
      'Listen quietly for one minute.',
      'Notice one interior movement honestly.'
    ],
    reflection: 'Where is God speaking quietly in my life?'
  },
  {
    day: 226,
    part: 'Prayer',
    title: 'Prayer and Scripture',
    introduction: 'Scripture is the primary school of prayer. It reveals God’s voice and shapes the heart for communion.',
    summary: [
      'Scripture teaches prayer.',
      'It reveals God’s character.',
      'It strengthens trust and hope.',
      'Meditation deepens understanding.',
      'Scripture prepares for contemplation.'
    ],
    application: [
      'Pray with one verse of Scripture.',
      'Let Scripture shape one decision.'
    ],
    reflection: 'Which Scripture passage is inviting my attention today?'
  },
  {
    day: 227,
    part: 'Prayer',
    title: 'Prayer and the Sacraments',
    introduction: 'Sacraments strengthen prayer by communicating grace. Prayer prepares the heart to receive sacramental life fruitfully.',
    summary: [
      'Sacraments deepen prayer.',
      'Grace strengthens desire for God.',
      'Prayer prepares for sacramental reception.',
      'Sacraments heal interior wounds.',
      'Prayer continues sacramental grace.'
    ],
    application: [
      'Pray briefly before receiving a sacrament.',
      'Let sacramental grace shape one action.'
    ],
    reflection: 'Where is sacramental grace inviting me into deeper prayer?'
  },
  {
    day: 228,
    part: 'Prayer',
    title: 'Prayer and Virtue',
    introduction: 'Prayer strengthens virtue by forming the heart in truth, humility, and charity. Virtue, in turn, deepens prayer.',
    summary: [
      'Prayer strengthens virtue.',
      'Virtue shapes desire for God.',
      'Humility protects prayer.',
      'Charity deepens communion.',
      'Virtue prepares for contemplation.'
    ],
    application: [
      'Practice one act of virtue today.',
      'Ask God to strengthen a virtue you struggle with.'
    ],
    reflection: 'Which virtue is God inviting me to grow in through prayer?'
  },
  {
    day: 229,
    part: 'Prayer',
    title: 'Prayer and Community',
    introduction: 'Communal prayer strengthens unity and reveals the Church as the Body of Christ. It complements personal prayer.',
    summary: [
      'Communal prayer strengthens unity.',
      'It expresses the Church’s voice.',
      'It heals isolation.',
      'It prepares for mission.',
      'It complements personal prayer.'
    ],
    application: [
      'Join one communal prayer this week.',
      'Support someone in prayer.'
    ],
    reflection: 'Where is God inviting me to pray with others?'
  },
  {
    day: 230,
    part: 'Prayer',
    title: 'Liturgical Prayer',
    introduction: 'Liturgical prayer is the Church’s official worship. It unites believers to Christ’s offering and strengthens communion.',
    summary: [
      'Liturgy is Christ’s prayer.',
      'It expresses the Church’s faith.',
      'It strengthens unity.',
      'It heals division.',
      'It prepares for mission.'
    ],
    application: [
      'Participate attentively in one liturgy.',
      'Let a liturgical gesture teach your heart.'
    ],
    reflection: 'How can I enter more deeply into liturgical prayer?'
  },
  {
    day: 231,
    part: 'Prayer',
    title: 'The Liturgy of the Hours',
    introduction: 'The Liturgy of the Hours sanctifies the day through psalms, readings, and prayer. It unites personal prayer with the Church’s voice.',
    summary: [
      'The Hours sanctify time.',
      'Psalms shape prayer.',
      'Scripture strengthens clarity.',
      'Communal rhythm deepens fidelity.',
      'The Hours unite the Church’s prayer.'
    ],
    application: [
      'Pray one psalm today.',
      'Offer a moment of your day intentionally to God.'
    ],
    reflection: 'Where can I let prayer interrupt my routine with grace?'
  },
  {
    day: 232,
    part: 'Prayer',
    title: 'Prayer and Mission',
    introduction: 'Prayer strengthens mission by forming the heart in charity, courage, and discernment. Mission flows from communion with God.',
    summary: [
      'Mission flows from prayer.',
      'Prayer strengthens courage.',
      'Discernment guides action.',
      'Charity shapes witness.',
      'Grace prepares for service.'
    ],
    application: [
      'Pray before one act of service.',
      'Let prayer shape one decision.'
    ],
    reflection: 'Where is God sending me through prayer?'
  },
  {
    day: 233,
    part: 'Prayer',
    title: 'Prayer and Suffering',
    introduction: 'Prayer in suffering unites the heart to Christ’s Passion. It strengthens hope, heals fear, and reveals God’s closeness.',
    summary: [
      'Suffering invites deeper prayer.',
      'Christ is present in pain.',
      'Hope strengthens perseverance.',
      'Prayer heals fear.',
      'Suffering can become intercession.'
    ],
    application: [
      'Bring one sorrow to God honestly.',
      'Offer your suffering for someone in need.'
    ],
    reflection: 'Where is Christ meeting me in suffering?'
  },
  {
    day: 234,
    part: 'Prayer',
    title: 'Prayer and Joy',
    introduction: 'Joy strengthens prayer by revealing God’s goodness. Prayer in joy expresses gratitude, praise, and delight in God’s presence.',
    summary: [
      'Joy reveals God’s goodness.',
      'Gratitude strengthens joy.',
      'Praise expresses delight.',
      'Joy heals discouragement.',
      'Joy prepares for mission.'
    ],
    application: [
      'Thank God for one joy today.',
      'Share joy with someone else.'
    ],
    reflection: 'Where is God inviting me to rejoice?'
  },
  {
    day: 235,
    part: 'Prayer',
    title: 'Prayer and Hope',
    introduction: 'Hope anchors prayer in God’s promises. It strengthens perseverance and heals fear.',
    summary: [
      'Hope anchors the heart.',
      'It strengthens perseverance.',
      'It heals fear and discouragement.',
      'It reveals God’s fidelity.',
      'Hope prepares for mission.'
    ],
    application: [
      'Encourage someone who feels discouraged.',
      'Practice one act rooted in hope.'
    ],
    reflection: 'Where do I need Christ’s hope to strengthen me?'
  },
  {
    day: 236,
    part: 'Prayer',
    title: 'Prayer and Love',
    introduction: 'Love is the heart of prayer. It strengthens communion, heals division, and prepares the heart for contemplation.',
    summary: [
      'Love shapes prayer.',
      'Charity heals division.',
      'Love strengthens communion.',
      'Grace deepens charity.',
      'Love prepares for contemplation.'
    ],
    application: [
      'Practice one act of charity today.',
      'Pray for someone you find difficult.'
    ],
    reflection: 'Where is Christ inviting me to grow in love?'
  },
  {
    day: 237,
    part: 'Prayer',
    title: 'Prayer and Forgiveness',
    introduction: 'Forgiveness strengthens prayer by healing wounds and restoring communion. Prayer prepares the heart to forgive.',
    summary: [
      'Forgiveness heals wounds.',
      'Prayer strengthens mercy.',
      'Forgiveness restores communion.',
      'Grace heals resentment.',
      'Mercy prepares for mission.'
    ],
    application: [
      'Offer forgiveness in one small way.',
      'Ask God for mercy in a specific place.'
    ],
    reflection: 'Where is God inviting me to forgive?'
  },
  {
    day: 238,
    part: 'Prayer',
    title: 'Prayer and Humility',
    introduction: 'Humility opens the heart to God’s presence. It strengthens honesty, trust, and surrender.',
    summary: [
      'Humility protects prayer.',
      'It strengthens honesty.',
      'It heals pride and fear.',
      'It prepares for surrender.',
      'Christ models perfect humility.'
    ],
    application: [
      'Practice humility in one interaction.',
      'Admit one weakness honestly to God.'
    ],
    reflection: 'Where is Christ inviting me to grow in humility?'
  },
  {
    day: 239,
    part: 'Prayer',
    title: 'Prayer and Gratitude',
    introduction: 'Gratitude strengthens prayer by revealing God’s generosity. It heals resentment and opens the heart to joy.',
    summary: [
      'Gratitude reveals God’s gifts.',
      'It strengthens joy.',
      'It heals envy and comparison.',
      'It prepares for praise.',
      'Gratitude deepens communion.'
    ],
    application: [
      'Thank God for one quiet grace.',
      'Practice gratitude toward someone.'
    ],
    reflection: 'Where is God inviting me into deeper gratitude?'
  },
  {
    day: 240,
    part: 'Prayer',
    title: 'Prayer and Peace',
    introduction: 'Peace is the fruit of prayer. It heals anxiety, strengthens trust, and prepares the heart for charity.',
    summary: [
      'Peace flows from communion with God.',
      'Prayer heals anxiety.',
      'Peace strengthens trust.',
      'It prepares for charity.',
      'Christ is our peace.'
    ],
    application: [
      'Ask God for peace in one concern.',
      'Practice calm presence with someone.'
    ],
    reflection: 'Where is Christ inviting me into deeper peace?'
  }
];

const cccLibraryBatch13: Topic[] = [
  {
    day: 241,
    part: 'Prayer',
    title: 'Maturity in Prayer',
    introduction: 'Spiritual maturity is not measured by feelings but by fidelity, humility, and love. Mature prayer remains steady through joy, dryness, and trial.',
    summary: [
      'Maturity grows through fidelity.',
      'Feelings do not define prayer.',
      'Humility protects growth.',
      'Love strengthens perseverance.',
      'Grace forms spiritual stability.'
    ],
    application: [
      'Pray even if you feel distracted.',
      'Practice humility in one decision.'
    ],
    reflection: 'Where is God inviting me into deeper spiritual maturity?'
  },
  {
    day: 242,
    part: 'Prayer',
    title: 'The Fruits of Prayer',
    introduction: 'Prayer bears fruit in charity, peace, patience, and courage. These fruits reveal the Spirit’s work in the heart.',
    summary: [
      'Prayer strengthens charity.',
      'It deepens peace.',
      'It heals impatience.',
      'It strengthens courage.',
      'Fruits reveal interior transformation.'
    ],
    application: [
      'Practice one act of charity.',
      'Respond with patience in a difficult moment.'
    ],
    reflection: 'Which fruit of prayer is God growing in me now?'
  },
  {
    day: 243,
    part: 'Prayer',
    title: 'The Habit of Prayer',
    introduction: 'Prayer becomes a habit through repetition, desire, and grace. Habitual prayer forms the heart for continual communion with God.',
    summary: [
      'Habit strengthens consistency.',
      'Repetition forms desire.',
      'Grace sustains fidelity.',
      'Habit protects against discouragement.',
      'Prayer becomes a way of life.'
    ],
    application: [
      'Set one small daily prayer habit.',
      'Return to prayer even if you miss a day.'
    ],
    reflection: 'What habit of prayer is God inviting me to form?'
  },
  {
    day: 244,
    part: 'Prayer',
    title: 'Prayer and Daily Life',
    introduction: 'Prayer shapes daily life by guiding decisions, healing relationships, and strengthening hope. It integrates faith with ordinary moments.',
    summary: [
      'Prayer guides daily choices.',
      'It strengthens patience and charity.',
      'It heals fear and anxiety.',
      'It integrates faith with work and relationships.',
      'Daily life becomes a place of encounter.'
    ],
    application: [
      'Pray briefly before one decision.',
      'Offer your work to God today.'
    ],
    reflection: 'Where is God inviting me to integrate prayer into daily life?'
  },
  {
    day: 245,
    part: 'Prayer',
    title: 'Prayer and Relationships',
    introduction: 'Prayer strengthens relationships by healing wounds, deepening compassion, and guiding communication.',
    summary: [
      'Prayer heals relational wounds.',
      'It strengthens compassion.',
      'It guides communication.',
      'It protects unity.',
      'It prepares the heart for forgiveness.'
    ],
    application: [
      'Pray for someone you find difficult.',
      'Practice compassion in one interaction.'
    ],
    reflection: 'Which relationship needs prayer today?'
  },
  {
    day: 246,
    part: 'Prayer',
    title: 'Prayer and Work',
    introduction: 'Work becomes prayer when offered to God. Prayer strengthens diligence, patience, and integrity.',
    summary: [
      'Work can become prayer.',
      'Prayer strengthens diligence.',
      'It heals frustration.',
      'It guides ethical decisions.',
      'It prepares for service.'
    ],
    application: [
      'Offer your work to God.',
      'Practice integrity in one task.'
    ],
    reflection: 'How can I let prayer shape my work?'
  },
  {
    day: 247,
    part: 'Prayer',
    title: 'Prayer and Rest',
    introduction: 'Rest is part of prayer. Silence, leisure, and Sabbath strengthen communion with God and heal exhaustion.',
    summary: [
      'Rest heals the heart.',
      'Silence strengthens clarity.',
      'Sabbath deepens communion.',
      'Leisure reveals God’s goodness.',
      'Rest prepares for mission.'
    ],
    application: [
      'Protect one moment of rest.',
      'Practice silence during a break.'
    ],
    reflection: 'Where is God inviting me to rest with him?'
  },
  {
    day: 248,
    part: 'Prayer',
    title: 'Prayer and Community Life',
    introduction: 'Prayer strengthens community by forming hearts in charity, patience, and forgiveness. It heals division and builds unity.',
    summary: [
      'Prayer strengthens unity.',
      'It heals division.',
      'It deepens patience.',
      'It prepares for service.',
      'Community becomes a place of grace.'
    ],
    application: [
      'Pray for your community.',
      'Practice patience in one interaction.'
    ],
    reflection: 'Where is God inviting me to strengthen community through prayer?'
  },
  {
    day: 249,
    part: 'Prayer',
    title: 'Prayer and Discernment of Spirits',
    introduction: 'Discernment of spirits identifies movements toward God and movements away from him. Prayer strengthens clarity and protects freedom.',
    summary: [
      'Spirits influence interior movements.',
      'Prayer reveals truth.',
      'Discernment strengthens freedom.',
      'Counsel protects clarity.',
      'Grace guides decisions.'
    ],
    application: [
      'Notice one interior movement honestly.',
      'Ask God for clarity in a decision.'
    ],
    reflection: 'What interior movement is God inviting me to examine?'
  },
  {
    day: 250,
    part: 'Prayer',
    title: 'Prayer and the Will of God',
    introduction: 'Prayer aligns the heart with God’s will. It strengthens surrender, trust, and courage.',
    summary: [
      'God’s will expresses perfect love.',
      'Prayer strengthens surrender.',
      'Trust heals fear.',
      'Courage expresses obedience.',
      'Christ models perfect fidelity.'
    ],
    application: [
      'Surrender one worry to God.',
      'Practice obedience in a small matter.'
    ],
    reflection: 'Where is God inviting me to align with his will?'
  },
  {
    day: 251,
    part: 'Prayer',
    title: 'Prayer and the Heart’s Desires',
    introduction: 'Prayer purifies desire and reveals what the heart truly seeks. God shapes desire toward communion and holiness.',
    summary: [
      'Desire reveals the heart’s orientation.',
      'Prayer purifies motives.',
      'Grace heals disordered desire.',
      'Holy desire strengthens perseverance.',
      'Desire prepares for contemplation.'
    ],
    application: [
      'Name one desire honestly.',
      'Ask God to purify your deepest longing.'
    ],
    reflection: 'Which desire is God shaping in me now?'
  },
  {
    day: 252,
    part: 'Prayer',
    title: 'Prayer and the Presence of God',
    introduction: 'God is always present. Prayer awakens awareness of his nearness and strengthens intimacy.',
    summary: [
      'God is present in every moment.',
      'Prayer awakens awareness.',
      'Presence strengthens peace.',
      'Intimacy deepens trust.',
      'Grace reveals God’s closeness.'
    ],
    application: [
      'Acknowledge God’s presence once today.',
      'Practice calm awareness in a quiet moment.'
    ],
    reflection: 'Where is God present in my day right now?'
  },
  {
    day: 253,
    part: 'Prayer',
    title: 'Prayer and the Holy Spirit’s Gifts',
    introduction: 'The Spirit’s gifts strengthen prayer by guiding thought, desire, and action. They prepare the heart for holiness.',
    summary: [
      'The Spirit teaches prayer.',
      'Wisdom strengthens clarity.',
      'Understanding deepens insight.',
      'Counsel guides decisions.',
      'Fear of the Lord deepens reverence.'
    ],
    application: [
      'Ask for one gift of the Spirit.',
      'Practice reverence in one moment.'
    ],
    reflection: 'Which gift of the Spirit do I need in prayer today?'
  },
  {
    day: 254,
    part: 'Prayer',
    title: 'Prayer and the Gifts of Contemplation',
    introduction: 'Contemplation is pure gift. It deepens intimacy with God and strengthens charity, peace, and surrender.',
    summary: [
      'Contemplation is God’s initiative.',
      'It deepens intimacy.',
      'It strengthens charity.',
      'It heals fear.',
      'It prepares for union with God.'
    ],
    application: [
      'Sit in silence for one minute.',
      'Let go of distractions gently.'
    ],
    reflection: 'Where is God inviting me into deeper contemplation?'
  },
  {
    day: 255,
    part: 'Prayer',
    title: 'Prayer and Spiritual Friendship',
    introduction: 'Spiritual friendship strengthens prayer by offering encouragement, accountability, and shared discernment.',
    summary: [
      'Friendship strengthens faith.',
      'It supports discernment.',
      'It heals isolation.',
      'It encourages perseverance.',
      'It reflects Christ’s love.'
    ],
    application: [
      'Reach out to a spiritual friend.',
      'Offer encouragement to someone seeking God.'
    ],
    reflection: 'Who is God inviting me to walk with spiritually?'
  },
  {
    day: 256,
    part: 'Prayer',
    title: 'Prayer and the Saints’ Intercession',
    introduction: 'The saints intercede for the Church. Their prayers strengthen hope, courage, and perseverance.',
    summary: [
      'Saints intercede for believers.',
      'Their example strengthens hope.',
      'Their prayers support the weak.',
      'They reveal God’s fidelity.',
      'They inspire perseverance.'
    ],
    application: [
      'Ask a saint for intercession.',
      'Learn one prayer from a saint.'
    ],
    reflection: 'Which saint is God inviting me to learn from?'
  },
  {
    day: 257,
    part: 'Prayer',
    title: 'Prayer and the Communion of Saints',
    introduction: 'Prayer unites believers with the whole Church—past, present, and future. The communion of saints strengthens hope and charity.',
    summary: [
      'The Church prays as one body.',
      'Saints support believers.',
      'Communion strengthens unity.',
      'Prayer transcends time and place.',
      'Hope flows from communion.'
    ],
    application: [
      'Pray for someone who has died.',
      'Ask the saints for help in one struggle.'
    ],
    reflection: 'Where is God inviting me to experience communion more deeply?'
  },
  {
    day: 258,
    part: 'Prayer',
    title: 'Prayer and Eternal Life',
    introduction: 'Prayer prepares the heart for eternal life. It strengthens hope, deepens love, and awakens desire for communion with God.',
    summary: [
      'Prayer prepares for eternity.',
      'Hope strengthens perseverance.',
      'Love deepens communion.',
      'Desire awakens longing for God.',
      'Grace prepares the heart for heaven.'
    ],
    application: [
      'Make one choice in light of eternity.',
      'Practice hope in a difficult moment.'
    ],
    reflection: 'Where is God inviting me to live with eternal perspective?'
  },
  {
    day: 259,
    part: 'Prayer',
    title: 'Prayer and Final Perseverance',
    introduction: 'Final perseverance is God’s gift. Prayer strengthens fidelity and prepares the heart to remain faithful until the end.',
    summary: [
      'Perseverance is a grace.',
      'Prayer strengthens fidelity.',
      'Hope heals discouragement.',
      'Charity protects the heart.',
      'Christ sustains perseverance.'
    ],
    application: [
      'Ask God for perseverance.',
      'Practice fidelity in one small matter.'
    ],
    reflection: 'Where is Christ inviting me to persevere faithfully?'
  },
  {
    day: 260,
    part: 'Prayer',
    title: 'Union with God',
    introduction: 'Union with God is the goal of prayer. It is not absorption but communion—two freedoms joined in love.',
    summary: [
      'Union is communion, not loss of self.',
      'It strengthens charity and peace.',
      'It heals fear and division.',
      'It fulfills the heart’s deepest desire.',
      'It prepares for eternal life.'
    ],
    application: [
      'Sit in silence with God for one minute.',
      'Practice charity as an expression of union.'
    ],
    reflection: 'Where is God inviting me into deeper union with him?'
  }
];

const cccLibraryBatch14: Topic[] = [
  {
    day: 261,
    part: 'Prayer',
    title: 'Mystical Prayer',
    introduction: 'Mystical prayer is a profound gift of God’s presence. It is not achieved by technique but received through grace, humility, and surrender.',
    summary: [
      'Mystical prayer is God’s initiative.',
      'It deepens intimacy with God.',
      'It transcends words and concepts.',
      'It strengthens charity and peace.',
      'It prepares the heart for union.'
    ],
    application: [
      'Sit quietly before God without agenda.',
      'Let prayer be simple and receptive.'
    ],
    reflection: 'Where is God inviting me into deeper receptivity?'
  },
  {
    day: 262,
    part: 'Prayer',
    title: 'The Dark Night of the Soul',
    introduction: 'The dark night is a period of purification where God removes attachments and deepens trust. It is not punishment but preparation for union.',
    summary: [
      'The dark night purifies desire.',
      'It heals subtle attachments.',
      'It strengthens trust and surrender.',
      'It prepares for deeper union.',
      'God remains present even when unfelt.'
    ],
    application: [
      'Trust God in one place of confusion.',
      'Let go of a subtle attachment.'
    ],
    reflection: 'Where is God purifying my desire for him?'
  },
  {
    day: 263,
    part: 'Prayer',
    title: 'The Prayer of Quiet',
    introduction: 'The prayer of quiet is a gentle stillness where the soul rests in God. It is marked by peace, simplicity, and interior calm.',
    summary: [
      'Quiet prayer is peaceful and simple.',
      'It is a gift of the Spirit.',
      'It strengthens interior clarity.',
      'It heals anxiety and distraction.',
      'It prepares for contemplation.'
    ],
    application: [
      'Rest silently before God for one minute.',
      'Let go of one interior tension.'
    ],
    reflection: 'Where is God inviting me into quiet rest?'
  },
  {
    day: 264,
    part: 'Prayer',
    title: 'The Prayer of Union',
    introduction: 'Union is a deep communion where the soul and God share one movement of love. It is not absorption but relational intimacy.',
    summary: [
      'Union is relational communion.',
      'It strengthens charity.',
      'It heals fear and division.',
      'It deepens interior freedom.',
      'It prepares for eternal life.'
    ],
    application: [
      'Practice charity as an expression of union.',
      'Sit with God in silent love.'
    ],
    reflection: 'Where is God drawing me toward deeper communion?'
  },
  {
    day: 265,
    part: 'Prayer',
    title: 'The Transforming Union',
    introduction: 'Transforming union is the mature stage of prayer where love permeates the whole person. It is marked by peace, humility, and self-gift.',
    summary: [
      'Transforming union heals the whole person.',
      'It strengthens humility and charity.',
      'It integrates desire and freedom.',
      'It prepares for perfect communion.',
      'It reflects Christ’s life in the soul.'
    ],
    application: [
      'Practice one act of self-gift.',
      'Ask God to transform one interior habit.'
    ],
    reflection: 'Where is God inviting deeper transformation?'
  },
  {
    day: 266,
    part: 'Prayer',
    title: 'Purification of the Heart',
    introduction: 'Purification removes obstacles to love. It heals wounds, clarifies motives, and strengthens freedom for communion.',
    summary: [
      'Purification heals interior wounds.',
      'It clarifies motives.',
      'It strengthens freedom.',
      'It prepares for deeper prayer.',
      'Grace guides purification.'
    ],
    application: [
      'Name one motive honestly.',
      'Ask God to purify one desire.'
    ],
    reflection: 'Where is God purifying my heart?'
  },
  {
    day: 267,
    part: 'Prayer',
    title: 'The Contemplative Tradition',
    introduction: 'The Church’s contemplative tradition includes saints, monastics, and mystics who reveal the depth of prayer across centuries.',
    summary: [
      'Contemplative tradition enriches the Church.',
      'It reveals the depth of prayer.',
      'It strengthens silence and stillness.',
      'It teaches surrender and trust.',
      'It inspires perseverance.'
    ],
    application: [
      'Read one line from a contemplative saint.',
      'Practice stillness for one minute.'
    ],
    reflection: 'Which contemplative voice is God inviting me to learn from?'
  },
  {
    day: 268,
    part: 'Prayer',
    title: 'Lectio Divina',
    introduction: 'Lectio Divina is a prayerful reading of Scripture that moves from reading to meditation, prayer, and contemplation.',
    summary: [
      'Lectio begins with slow reading.',
      'Meditation deepens understanding.',
      'Prayer expresses desire.',
      'Contemplation rests in God’s presence.',
      'Lectio forms the heart for communion.'
    ],
    application: [
      'Practice Lectio with one verse.',
      'Rest silently after reading Scripture.'
    ],
    reflection: 'Which Scripture passage is inviting deeper listening?'
  },
  {
    day: 269,
    part: 'Prayer',
    title: 'The Jesus Prayer',
    introduction: 'The Jesus Prayer—“Lord Jesus Christ, Son of God, have mercy on me”—unites breath, heart, and desire in continual prayer.',
    summary: [
      'The Jesus Prayer is simple and profound.',
      'It expresses humility and trust.',
      'It strengthens continual prayer.',
      'It heals distraction.',
      'It prepares for contemplation.'
    ],
    application: [
      'Pray the Jesus Prayer slowly.',
      'Let the prayer accompany your breath.'
    ],
    reflection: 'Where is God inviting me to pray with simplicity?'
  },
  {
    day: 270,
    part: 'Prayer',
    title: 'The Prayer of the Heart',
    introduction: 'The prayer of the heart is continual awareness of God’s presence. It unites desire, attention, and love.',
    summary: [
      'Prayer of the heart is continual.',
      'It strengthens awareness of God.',
      'It heals fragmentation.',
      'It deepens intimacy.',
      'It prepares for union.'
    ],
    application: [
      'Acknowledge God’s presence once today.',
      'Practice gentle awareness in a quiet moment.'
    ],
    reflection: 'Where is God awakening my heart to his presence?'
  },
  {
    day: 271,
    part: 'Prayer',
    title: 'The Prayer of Simplicity',
    introduction: 'Simplicity removes unnecessary complexity from prayer. It focuses the heart on God alone.',
    summary: [
      'Simplicity strengthens clarity.',
      'It heals distraction.',
      'It deepens trust.',
      'It prepares for contemplation.',
      'It reveals God’s nearness.'
    ],
    application: [
      'Pray one simple sentence to God.',
      'Let go of one unnecessary complexity.'
    ],
    reflection: 'Where is God inviting me into simplicity?'
  },
  {
    day: 272,
    part: 'Prayer',
    title: 'The Prayer of Surrender',
    introduction: 'Surrender is the heart’s “yes” to God. It strengthens trust, heals fear, and opens the soul to grace.',
    summary: [
      'Surrender expresses trust.',
      'It heals fear and anxiety.',
      'It strengthens freedom.',
      'It prepares for union.',
      'Christ models perfect surrender.'
    ],
    application: [
      'Surrender one worry to God.',
      'Practice trust in a difficult moment.'
    ],
    reflection: 'Where is God inviting me to surrender?'
  },
  {
    day: 273,
    part: 'Prayer',
    title: 'The Prayer of Offering',
    introduction: 'Offering places one’s life, work, and relationships before God. It transforms ordinary moments into communion.',
    summary: [
      'Offering sanctifies daily life.',
      'It strengthens gratitude.',
      'It deepens trust.',
      'It prepares for mission.',
      'It reflects Christ’s self-gift.'
    ],
    application: [
      'Offer your day to God.',
      'Offer one relationship to God’s care.'
    ],
    reflection: 'What part of my life is God inviting me to offer?'
  },
  {
    day: 274,
    part: 'Prayer',
    title: 'The Prayer of Presence',
    introduction: 'Presence is attentive awareness of God in the moment. It strengthens peace, clarity, and intimacy.',
    summary: [
      'Presence reveals God’s nearness.',
      'It heals distraction.',
      'It strengthens peace.',
      'It deepens intimacy.',
      'It prepares for contemplation.'
    ],
    application: [
      'Pause once today to acknowledge God.',
      'Practice calm awareness in a quiet moment.'
    ],
    reflection: 'Where is God present in my day right now?'
  },
  {
    day: 275,
    part: 'Prayer',
    title: 'The Prayer of Longing',
    introduction: 'Longing expresses the heart’s desire for God. It strengthens hope and prepares for deeper communion.',
    summary: [
      'Longing reveals desire for God.',
      'It strengthens hope.',
      'It heals discouragement.',
      'It prepares for union.',
      'Grace shapes holy longing.'
    ],
    application: [
      'Name one longing honestly.',
      'Ask God to deepen holy desire.'
    ],
    reflection: 'What longing is God awakening in me?'
  },
  {
    day: 276,
    part: 'Prayer',
    title: 'The Prayer of Joyful Praise',
    introduction: 'Joyful praise celebrates God’s goodness. It strengthens hope, heals discouragement, and prepares the heart for mission.',
    summary: [
      'Praise celebrates God’s goodness.',
      'Joy strengthens hope.',
      'Praise heals discouragement.',
      'It deepens gratitude.',
      'It prepares for mission.'
    ],
    application: [
      'Speak one word of praise to God.',
      'Thank God for one joy today.'
    ],
    reflection: 'Where is God inviting me to rejoice?'
  },
  {
    day: 277,
    part: 'Prayer',
    title: 'The Prayer of Peaceful Trust',
    introduction: 'Peaceful trust rests in God’s care. It heals anxiety and strengthens interior freedom.',
    summary: [
      'Trust strengthens peace.',
      'Peace heals anxiety.',
      'It deepens surrender.',
      'It prepares for contemplation.',
      'Christ is our peace.'
    ],
    application: [
      'Entrust one fear to God.',
      'Practice calm trust in a moment of stress.'
    ],
    reflection: 'Where is God inviting me into peaceful trust?'
  },
  {
    day: 278,
    part: 'Prayer',
    title: 'The Prayer of Hopeful Waiting',
    introduction: 'Waiting is part of prayer. Hopeful waiting strengthens perseverance and reveals trust in God’s timing.',
    summary: [
      'Waiting strengthens hope.',
      'It heals impatience.',
      'It deepens trust.',
      'It prepares for grace.',
      'God acts in his perfect time.'
    ],
    application: [
      'Wait patiently in one situation.',
      'Entrust timing to God.'
    ],
    reflection: 'Where is God inviting me to wait with hope?'
  },
  {
    day: 279,
    part: 'Prayer',
    title: 'The Prayer of Holy Desire',
    introduction: 'Holy desire is longing shaped by grace. It strengthens perseverance and prepares the heart for union.',
    summary: [
      'Holy desire is grace-shaped longing.',
      'It strengthens perseverance.',
      'It heals distraction.',
      'It deepens intimacy.',
      'It prepares for union.'
    ],
    application: [
      'Ask God to deepen holy desire.',
      'Practice fidelity in one longing.'
    ],
    reflection: 'Which desire is God sanctifying in me?'
  },
  {
    day: 280,
    part: 'Prayer',
    title: 'The Prayer of Final Surrender',
    introduction: 'Final surrender entrusts everything to God. It is the culmination of prayer and prepares the soul for eternal communion.',
    summary: [
      'Final surrender expresses total trust.',
      'It heals fear of the future.',
      'It strengthens peace.',
      'It prepares for eternal life.',
      'Christ models perfect surrender.'
    ],
    application: [
      'Entrust your future to God.',
      'Practice surrender in one decision.'
    ],
    reflection: 'Where is God inviting me into deeper surrender?'
  }
];

const cccLibraryBatch15: Topic[] = [
  {
    day: 281,
    part: 'Prayer',
    title: 'Prayer and Evangelization',
    introduction: 'Evangelization flows from prayer. Communion with God strengthens courage, clarity, and charity in sharing the Gospel.',
    summary: [
      'Prayer inspires witness.',
      'It strengthens courage.',
      'It purifies motives.',
      'It guides discernment.',
      'Evangelization expresses love.'
    ],
    application: [
      'Pray before one conversation of faith.',
      'Share one small truth with charity.'
    ],
    reflection: 'Where is God inviting me to witness through prayer?'
  },
  {
    day: 282,
    part: 'Prayer',
    title: 'Prayer and Apostolic Mission',
    introduction: 'Mission is sustained by prayer. Without prayer, apostolic work becomes self‑reliance rather than cooperation with grace.',
    summary: [
      'Mission flows from communion.',
      'Prayer strengthens perseverance.',
      'It heals discouragement.',
      'It guides action.',
      'Grace sustains mission.'
    ],
    application: [
      'Offer your mission to God.',
      'Ask for grace in one responsibility.'
    ],
    reflection: 'Where is God sending me through prayer?'
  },
  {
    day: 283,
    part: 'Prayer',
    title: 'Prayer and Spiritual Leadership',
    introduction: 'Spiritual leadership begins in prayer. Leaders guide others by listening to God, practicing humility, and living charity.',
    summary: [
      'Leadership requires prayer.',
      'Humility protects authority.',
      'Listening guides decisions.',
      'Charity strengthens influence.',
      'Grace forms true leadership.'
    ],
    application: [
      'Pray before one leadership decision.',
      'Practice humility in one interaction.'
    ],
    reflection: 'Where is God inviting me to lead through prayer?'
  },
  {
    day: 284,
    part: 'Prayer',
    title: 'Prayer and Spiritual Authority',
    introduction: 'True authority is service rooted in prayer. It reflects Christ’s humility and strengthens unity.',
    summary: [
      'Authority is service.',
      'Prayer protects humility.',
      'Authority must reflect Christ.',
      'It strengthens unity.',
      'Grace guides responsibility.'
    ],
    application: [
      'Serve someone quietly.',
      'Pray for someone in authority.'
    ],
    reflection: 'Where is God inviting me to serve with humility?'
  },
  {
    day: 285,
    part: 'Prayer',
    title: 'Prayer and Spiritual Fatherhood',
    introduction: 'Spiritual fatherhood reflects God’s care. It strengthens guidance, protection, and encouragement.',
    summary: [
      'Fatherhood expresses care.',
      'Prayer strengthens guidance.',
      'It heals fear.',
      'It protects the vulnerable.',
      'Grace forms spiritual fatherhood.'
    ],
    application: [
      'Encourage someone who needs support.',
      'Pray for someone you guide.'
    ],
    reflection: 'Where is God inviting me to offer spiritual care?'
  },
  {
    day: 286,
    part: 'Prayer',
    title: 'Prayer and Spiritual Motherhood',
    introduction: 'Spiritual motherhood nurtures life, hope, and compassion. It reflects Mary’s care for the Church.',
    summary: [
      'Motherhood nurtures life.',
      'Prayer strengthens compassion.',
      'It heals wounds.',
      'It encourages growth.',
      'Mary models spiritual motherhood.'
    ],
    application: [
      'Offer gentle support to someone.',
      'Pray for someone who is hurting.'
    ],
    reflection: 'Where is God inviting me to nurture spiritual life?'
  },
  {
    day: 287,
    part: 'Prayer',
    title: 'Prayer and Spiritual Friendship',
    introduction: 'Spiritual friendship strengthens perseverance, clarity, and joy. It is rooted in shared pursuit of God.',
    summary: [
      'Friendship strengthens faith.',
      'It supports discernment.',
      'It heals isolation.',
      'It encourages perseverance.',
      'It reflects Christ’s love.'
    ],
    application: [
      'Reach out to a spiritual friend.',
      'Offer encouragement to someone seeking God.'
    ],
    reflection: 'Who is God inviting me to walk with spiritually?'
  },
  {
    day: 288,
    part: 'Prayer',
    title: 'Prayer and Spiritual Accompaniment',
    introduction: 'Accompaniment guides others toward God through listening, discernment, and compassion. It requires prayerful humility.',
    summary: [
      'Accompaniment requires listening.',
      'Prayer guides counsel.',
      'Compassion heals wounds.',
      'Discernment protects freedom.',
      'Grace strengthens accompaniment.'
    ],
    application: [
      'Listen deeply to someone today.',
      'Pray for someone you accompany.'
    ],
    reflection: 'Where is God inviting me to accompany someone?'
  },
  {
    day: 289,
    part: 'Prayer',
    title: 'Prayer and Spiritual Disciplines',
    introduction: 'Disciplines such as fasting, silence, and simplicity strengthen prayer by purifying desire and focusing the heart.',
    summary: [
      'Discipline strengthens freedom.',
      'Fasting purifies desire.',
      'Silence heals distraction.',
      'Simplicity deepens clarity.',
      'Grace guides discipline.'
    ],
    application: [
      'Practice one small discipline today.',
      'Let discipline shape one desire.'
    ],
    reflection: 'Which discipline is God inviting me to practice?'
  },
  {
    day: 290,
    part: 'Prayer',
    title: 'Prayer and the Cross',
    introduction: 'The Cross is the center of Christian prayer. It reveals love, heals sin, and strengthens hope.',
    summary: [
      'The Cross reveals God’s love.',
      'It heals sin and fear.',
      'It strengthens hope.',
      'It deepens surrender.',
      'Prayer unites the heart to Christ’s sacrifice.'
    ],
    application: [
      'Bring one suffering to the Cross.',
      'Practice surrender in a difficult moment.'
    ],
    reflection: 'Where is Christ inviting me to unite my heart to his Cross?'
  },
  {
    day: 291,
    part: 'Prayer',
    title: 'Prayer and Resurrection Hope',
    introduction: 'Resurrection hope strengthens prayer by revealing God’s victory over sin and death. It anchors the heart in joy.',
    summary: [
      'Resurrection reveals victory.',
      'Hope strengthens perseverance.',
      'Joy heals discouragement.',
      'It prepares for mission.',
      'Prayer awakens resurrection hope.'
    ],
    application: [
      'Practice hope in one challenge.',
      'Encourage someone who feels discouraged.'
    ],
    reflection: 'Where is God inviting me to live resurrection hope?'
  },
  {
    day: 292,
    part: 'Prayer',
    title: 'Prayer and the Holy Spirit’s Fire',
    introduction: 'The Spirit’s fire purifies, strengthens, and sends. Prayer opens the heart to his transforming power.',
    summary: [
      'The Spirit purifies desire.',
      'He strengthens courage.',
      'He sends believers into mission.',
      'He heals fear.',
      'Prayer opens the heart to fire.'
    ],
    application: [
      'Ask the Spirit for courage.',
      'Follow one prompting toward goodness.'
    ],
    reflection: 'Where is the Spirit igniting new fire in me?'
  },
  {
    day: 293,
    part: 'Prayer',
    title: 'Prayer and the Church’s Mission',
    introduction: 'The Church’s mission is sustained by prayer. Communion with God strengthens evangelization, service, and unity.',
    summary: [
      'Mission flows from prayer.',
      'Prayer strengthens unity.',
      'It heals division.',
      'It guides discernment.',
      'Grace sustains the Church’s mission.'
    ],
    application: [
      'Pray for the Church’s mission.',
      'Serve someone quietly today.'
    ],
    reflection: 'Where is God inviting me to support the Church’s mission?'
  },
  {
    day: 294,
    part: 'Prayer',
    title: 'Prayer and the Final Judgment',
    introduction: 'Prayer prepares the heart for the final judgment by strengthening charity, humility, and trust in God’s mercy.',
    summary: [
      'Judgment reveals truth.',
      'Prayer strengthens charity.',
      'Humility heals pride.',
      'Trust prepares for mercy.',
      'Hope anchors the heart.'
    ],
    application: [
      'Practice humility in one moment.',
      'Ask God for mercy in a specific place.'
    ],
    reflection: 'Where is God inviting me to live with eternal perspective?'
  },
  {
    day: 295,
    part: 'Prayer',
    title: 'Prayer and the New Creation',
    introduction: 'Prayer awakens longing for the new creation where God will be all in all. It strengthens hope and prepares the heart for eternity.',
    summary: [
      'New creation fulfills God’s plan.',
      'Hope strengthens perseverance.',
      'Desire awakens longing for God.',
      'Prayer prepares for eternity.',
      'Grace strengthens trust.'
    ],
    application: [
      'Reflect on eternity for one minute.',
      'Practice hope in a difficult moment.'
    ],
    reflection: 'Where is God awakening longing for the new creation?'
  },
  {
    day: 296,
    part: 'Prayer',
    title: 'Prayer and Eternal Communion',
    introduction: 'Eternal communion is the fulfillment of prayer. It is perfect union with God, the saints, and all redeemed creation.',
    summary: [
      'Communion fulfills desire.',
      'It heals all wounds.',
      'It strengthens joy.',
      'It reveals God’s glory.',
      'Prayer prepares for communion.'
    ],
    application: [
      'Offer one act of charity as preparation for heaven.',
      'Thank God for the hope of eternal life.'
    ],
    reflection: 'Where is God inviting me to anticipate eternal communion?'
  },
  {
    day: 297,
    part: 'Prayer',
    title: 'Prayer and the Beatific Vision',
    introduction: 'The Beatific Vision is seeing God face to face. Prayer prepares the heart for this perfect and eternal communion.',
    summary: [
      'Beatific Vision fulfills all longing.',
      'It reveals God’s beauty.',
      'It strengthens joy.',
      'It heals all fear.',
      'Prayer prepares for perfect sight.'
    ],
    application: [
      'Meditate briefly on God’s goodness.',
      'Practice purity of intention.'
    ],
    reflection: 'Where is God inviting me to desire the Beatific Vision?'
  },
  {
    day: 298,
    part: 'Prayer',
    title: 'Prayer and Final Glory',
    introduction: 'Final glory is the consummation of salvation. Prayer strengthens hope and prepares the heart for eternal joy.',
    summary: [
      'Glory reveals God’s victory.',
      'Hope strengthens perseverance.',
      'Joy heals sorrow.',
      'Love prepares for glory.',
      'Prayer awakens longing for heaven.'
    ],
    application: [
      'Practice hope in one sorrow.',
      'Offer gratitude for God’s promises.'
    ],
    reflection: 'Where is God inviting me to hope in final glory?'
  },
  {
    day: 299,
    part: 'Prayer',
    title: 'Prayer and the Heavenly Liturgy',
    introduction: 'The heavenly liturgy is eternal worship of God. Earthly prayer prepares the heart to join the saints in everlasting praise.',
    summary: [
      'Heavenly liturgy is eternal praise.',
      'Earthly liturgy prepares for heaven.',
      'Praise strengthens joy.',
      'Communion heals division.',
      'Prayer awakens longing for worship.'
    ],
    application: [
      'Praise God intentionally today.',
      'Participate attentively in one liturgy.'
    ],
    reflection: 'Where is God inviting me to anticipate heavenly worship?'
  },
  {
    day: 300,
    part: 'Prayer',
    title: 'Prayer and the Fulfillment of All Things',
    introduction: 'Prayer leads to the fulfillment of all things in Christ. It prepares the heart for the moment when God will be all in all.',
    summary: [
      'Fulfillment is union with God.',
      'Christ gathers all creation.',
      'Love heals every wound.',
      'Hope strengthens perseverance.',
      'Prayer prepares for consummation.'
    ],
    application: [
      'Offer your life to God in trust.',
      'Practice charity as preparation for eternity.'
    ],
    reflection: 'Where is God inviting me to live toward fulfillment?'
  }
];


export const completeCccLibrary: Topic[] =
  (
    [
      ...cccLibraryBatch1,
      ...cccLibraryBatch2,
      ...cccLibraryBatch3,
      ...cccLibraryBatch4,
      ...cccLibraryBatch5,
      ...cccLibraryBatch6,
      ...cccLibraryBatch7,
      ...cccLibraryBatch8,
      ...cccLibraryBatch9,
      ...cccLibraryBatch10,
      ...cccLibraryBatch11,
      ...cccLibraryBatch12,
      ...cccLibraryBatch13,
      ...cccLibraryBatch14,
      ...cccLibraryBatch15
    ] as Topic[]
  )
    // doctrinal order: Creed → Sacraments → Morality → Prayer
    .sort((a, b) => {
      const order: Record<CccPart, number> = {
        Creed: 1,
        Sacraments: 2,
        Morality: 3,
        Prayer: 4
      };
      return order[a.part] - order[b.part];
    })
    // assign final day numbers
    .map((topic, index) => ({
      ...topic,
      day: index + 1
    }));

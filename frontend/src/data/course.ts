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

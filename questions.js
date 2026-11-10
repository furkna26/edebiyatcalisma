const questions = [
  // --- GÖRSEL 1 (Sorular 1 - 6) ---
  {
    id: 1,
    type: "multiple_choice",
    question_de: "1- Welche Zeitperiode wird als die heidnische Zeitperiode genannt?",
    question_tr: "1- Hangi dönem 'putperest (pagan) dönem' olarak adlandırılır?",
    options: [
      { de: "Germanische Zeitperiode", tr: "Cermen Dönemi" },
      { de: "Frühes Mittelalter", tr: "Erken Orta Çağ" },
      { de: "Hohes Mittelalter", tr: "Yüksek Orta Çağ" },
      { de: "Spätes Mittelalter", tr: "Geç Orta Çağ" }
    ],
    correctAnswer: 0,
    explanation_de: "Antwort laut Tafel: (Germanische Zeitperiode).",
    explanation_tr: "Tahtadaki cevap: (Germanische Zeitperiode - Cermen Dönemi)."
  },
  {
    id: 2,
    type: "multiple_choice",
    question_de: "2- Welche literarische Formen gab es in der germanischen Z.P?",
    question_tr: "2- Cermen döneminde (Z.P) hangi edebi biçimler vardı?",
    options: [
      { de: "höfische Versepen", tr: "Saray manzum destanları" },
      { de: "mündliche lit. Formen", tr: "Sözlü edebi biçimler (mündliche lit. Formen)" },
      { de: "schriftliche Romane", tr: "Yazılı romanlar" },
      { de: "geistliche Dramen", tr: "Dini dramalar" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: (mündliche lit. Formen).",
    explanation_tr: "Tahtadaki cevap: (mündliche lit. Formen - Sözlü edebi biçimler)."
  },
  {
    id: 3,
    type: "multiple_choice",
    question_de: "3- Was für eine Form waren die Rätsel?",
    question_tr: "3- Bilmeceler (Rätsel) nasıl bir biçimdi?",
    options: [
      { de: "schriftliche Formen", tr: "Yazılı biçimler" },
      { de: "höfische Formen", tr: "Saray biçimleri" },
      { de: "mündliche Formen", tr: "Sözlü biçimler (mündliche Formen)" },
      { de: "dramatische Formen", tr: "Dramatik biçimler" }
    ],
    correctAnswer: 2,
    explanation_de: "Antwort laut Tafel: (mündliche Formen).",
    explanation_tr: "Tahtadaki cevap: (mündliche Formen - Sözlü biçimler)."
  },
  {
    id: 4,
    type: "multiple_choice",
    question_de: "4- Wie heißt das erste bekannte Beispiel für die Zaubersprüche?",
    question_tr: "4- Büyü sözlerinin (Zaubersprüche) bilinen ilk örneğinin adı nedir?",
    options: [
      { de: "Nibelungenlied", tr: "Nibelungen Destanı" },
      { de: "Hildebrandslied", tr: "Hildebrand Destanı" },
      { de: "Parzival", tr: "Parzival" },
      { de: "Merseburger Zaubersprüche", tr: "Merseburg Büyü Sözleri (Merseburger Zaubersprüche)" }
    ],
    correctAnswer: 3,
    explanation_de: "Antwort laut Tafel: (Merseburger Zaubersprüche).",
    explanation_tr: "Tahtadaki cevap: (Merseburger Zaubersprüche - Merseburg Büyü Sözleri)."
  },
  {
    id: 5,
    type: "multiple_choice",
    question_de: "5- Welche literarische Form diente der gefangenenbefreiung?",
    question_tr: "5- Hangi edebi biçim esirlerin kurtarılmasına (gefangenenbefreiung) hizmet etmiştir?",
    options: [
      { de: "der erste Spruch der M.B Zaubersprüche", tr: "Merseburg Büyü Sözleri'nin birinci büyüsü" },
      { de: "der zweite Spruch der M.B Zaubersprüche", tr: "Merseburg Büyü Sözleri'nin ikinci büyüsü" },
      { de: "Hildebrandslied", tr: "Hildebrand Destanı" },
      { de: "Volksbücher", tr: "Halk kitapları" }
    ],
    correctAnswer: 0,
    explanation_de: "Antwort laut Tafel: (der erste Spruch der M.B Zaubersprüche).",
    explanation_tr: "Tahtadaki cevap: (der erste Spruch der M.B Zaubersprüche)."
  },
  {
    id: 6,
    type: "multiple_choice",
    question_de: "6- In welchem Lied gibt es einen Kampf zwischen Vater und Sohn?",
    question_tr: "6- Hangi şarkıda/destanda baba ile oğul arasında bir mücadele vardır?",
    options: [
      { de: "Nibelungenlied", tr: "Nibelungen Destanı" },
      { de: "Hildebrandslied", tr: "Hildebrand Destanı (Hildebrandslied)" },
      { de: "Parzival", tr: "Parzival" },
      { de: "Merseburger Zaubersprüche", tr: "Merseburg Büyü Sözleri" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: (Hildebrandslied).",
    explanation_tr: "Tahtadaki cevap: (Hildebrandslied)."
  },

  // --- GÖRSEL 2 (Sorular 7 - 12) ---
  {
    id: 7,
    type: "multiple_choice",
    question_de: "7- Was steht im Frühenmittelalter im Vordergrund?",
    question_tr: "7- Erken Orta Çağ'da (Frühenmittelalter) ön planda olan nedir?",
    options: [
      { de: "Die Ritter und die Minne", tr: "Şövalyeler ve saray aşkı" },
      { de: "Die Wissenschaft und die Vernunft", tr: "Bilim ve akıl" },
      { de: "Die Bibel und die Geistlichen", tr: "İncil ve din adamları (Die Bibel und die Geistlichen)" },
      { de: "Die Sprachgesellschaften", tr: "Dil cemiyetleri" }
    ],
    correctAnswer: 2,
    explanation_de: "Antwort laut Tafel: (Die Bibel und die Geistlichen).",
    explanation_tr: "Tahtadaki cevap: (Die Bibel und die Geistlichen - İncil ve din adamları)."
  },
  {
    id: 8,
    type: "multiple_choice",
    question_de: "8- In welchem Zeitalter waren die Ritter wichtig?",
    question_tr: "8- Şövalyeler (Ritter) hangi çağda önemliydi?",
    options: [
      { de: "Germanische Zeitperiode", tr: "Cermen Dönemi" },
      { de: "Frühenmittelalter", tr: "Erken Orta Çağ" },
      { de: "Spätes Mittelalter", tr: "Geç Orta Çağ" },
      { de: "Hohesmittelalter", tr: "Yüksek Orta Çağ (Hohesmittelalter)" }
    ],
    correctAnswer: 3,
    explanation_de: "Antwort laut Tafel: (Hohesmittelalter).",
    explanation_tr: "Tahtadaki cevap: (Hohesmittelalter - Yüksek Orta Çağ)."
  },
  {
    id: 9,
    type: "multiple_choice",
    question_de: "9- Wie ist die Dichtung des Frühenmittelalters?",
    question_tr: "9- Erken Orta Çağ'ın edebiyatı/şiiri nasıldır?",
    options: [
      { de: "geistlich", tr: "dini / ruhani (geistlich)" },
      { de: "höfisch", tr: "saraylı (höfisch)" },
      { de: "weltlich", tr: "dünyevi (weltlich)" },
      { de: "heidnisch", tr: "putperest (heidnisch)" }
    ],
    correctAnswer: 0,
    explanation_de: "Antwort laut Tafel: (geistlich).",
    explanation_tr: "Tahtadaki cevap: (geistlich - dini / ruhani)."
  },
  {
    id: 10,
    type: "multiple_choice",
    question_de: "10- Wer hat die Germanen christianisiert?",
    question_tr: "10- Cermenleri kim Hristiyanlaştırmıştır?",
    options: [
      { de: "Marthin Luther", tr: "Martin Luther" },
      { de: "Karl der Grosse", tr: "Büyük Karl (Karl der Grosse)" },
      { de: "W. von Eschenbach", tr: "W. von Eschenbach" },
      { de: "Marthin Opitz", tr: "Martin Opitz" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: (Karl der Grosse).",
    explanation_tr: "Tahtadaki cevap: (Karl der Grosse - Büyük Karl)."
  },
  {
    id: 11,
    type: "multiple_choice",
    question_de: "11- In welchem Zeitalter spricht man von den Tugenden?",
    question_tr: "11- Hangi çağda erdemlerden (Tugenden) bahsedilir?",
    options: [
      { de: "Frühes Mittelalter", tr: "Erken Orta Çağ" },
      { de: "Spätes Mittelalter", tr: "Geç Orta Çağ" },
      { de: "Hohes Mittelalter", tr: "Yüksek Orta Çağ (Hohes Mittelalter)" },
      { de: "Aufklärung", tr: "Aydınlanma Çağı" }
    ],
    correctAnswer: 2,
    explanation_de: "Antwort laut Tafel: (Hohes Mittelalter).",
    explanation_tr: "Tahtadaki cevap: (Hohes Mittelalter - Yüksek Orta Çağ)."
  },
  {
    id: 12,
    type: "multiple_choice",
    question_de: "12- In welchem Zeitalter sehen wir das Nibelungenlied?",
    question_tr: "12- Nibelungen Destanı'nı (Nibelungenlied) hangi çağda görürüz?",
    options: [
      { de: "Germanische Zeitperiode", tr: "Cermen Dönemi" },
      { de: "Frühes Mittelalter", tr: "Erken Orta Çağ" },
      { de: "Barock", tr: "Barok Dönemi" },
      { de: "Hohes Mittelalter", tr: "Yüksek Orta Çağ (Hohes Mittelalter)" }
    ],
    correctAnswer: 3,
    explanation_de: "Antwort laut Tafel: (Hohes Mittelalter).",
    explanation_tr: "Tahtadaki cevap: (Hohes Mittelalter - Yüksek Orta Çağ)."
  },

  // --- GÖRSEL 3 (Sorular 13 - 19) ---
  {
    id: 13,
    type: "multiple_choice",
    question_de: "13- Wer hat das Epos Parzival geschrieben?",
    question_tr: "13- Parzival destanını kim yazmıştır?",
    options: [
      { de: "W. von Eschenbach", tr: "W. von Eschenbach (Wolfram von Eschenbach)" },
      { de: "Hartmann von Aue", tr: "Hartmann von Aue" },
      { de: "N. von Reuenthal", tr: "N. von Reuenthal" },
      { de: "Grimmelshausen", tr: "Grimmelshausen" }
    ],
    correctAnswer: 0,
    explanation_de: "Antwort laut Tafel: (W. von Eschenbach).",
    explanation_tr: "Tahtadaki cevap: (W. von Eschenbach)."
  },
  {
    id: 14,
    type: "multiple_choice",
    question_de: "14- Wer hat die Hofgesellschaft belustigt?",
    question_tr: "14- Saray sosyetesini (Hofgesellschaft) kim eğlendirmiştir?",
    options: [
      { de: "W. von Eschenbach", tr: "W. von Eschenbach" },
      { de: "N. von Reuenthal", tr: "N. von Reuenthal (Neidhart von Reuenthal)" },
      { de: "Johannes Reuchlin", tr: "Johannes Reuchlin" },
      { de: "Boccacio", tr: "Boccacio" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: (N. von Reuenthal).",
    explanation_tr: "Tahtadaki cevap: (N. von Reuenthal)."
  },
  {
    id: 15,
    type: "multiple_choice",
    question_de: "15- Welches Wort ist ein Beispiel für die Tugend?",
    question_tr: "15- Hangi kelime erdeme (Tugend) bir örnektir?",
    options: [
      { de: "Vernunft", tr: "Akıl (Vernunft)" },
      { de: "Toleranz", tr: "Hoşgörü (Toleranz)" },
      { de: "minne", tr: "minne (Saray aşkı)" },
      { de: "Perle", tr: "İnci (Perle)" }
    ],
    correctAnswer: 2,
    explanation_de: "Antwort laut Tafel: (minne).",
    explanation_tr: "Tahtadaki cevap: (minne)."
  },
  {
    id: 16,
    type: "multiple_choice",
    question_de: "16- Wie ist die Dichtung des Spätes Mittelalter?",
    question_tr: "16- Geç Orta Çağ'ın (Spätes Mittelalter) edebiyatı nasıldır?",
    options: [
      { de: "geistlich", tr: "dini (geistlich)" },
      { de: "höfisch", tr: "saraylı (höfisch)" },
      { de: "heidnisch", tr: "putperest (heidnisch)" },
      { de: "weltlich", tr: "dünyevi (weltlich)" }
    ],
    correctAnswer: 3,
    explanation_de: "Antwort laut Tafel: (weltlich).",
    explanation_tr: "Tahtadaki cevap: (weltlich - dünyevi)."
  },
  {
    id: 17,
    type: "multiple_choice",
    question_de: "17- Welche literarische Form war der Wegbereiter des deutschen Romans?",
    question_tr: "17- Hangi edebi biçim Alman romanının öncüsü (Wegbereiter) olmuştur?",
    options: [
      { de: "Volksbücher", tr: "Halk kitapları (Volksbücher)" },
      { de: "Zaubersprüche", tr: "Büyü sözleri" },
      { de: "Rätsel", tr: "Bilmeceler" },
      { de: "Heldenlieder", tr: "Kahramanlık şarkıları" }
    ],
    correctAnswer: 0,
    explanation_de: "Antwort laut Tafel: (Volksbücher).",
    explanation_tr: "Tahtadaki cevap: (Volksbücher - Halk kitapları)."
  },
  {
    id: 18,
    type: "multiple_choice",
    question_de: "18- Wer verursachte die Entstehung der kürzeren Erzählungen?",
    question_tr: "18- Kısa anlatıların (kürzere Erzählungen) ortaya çıkmasına kim sebep olmuştur?",
    options: [
      { de: "Shakespeare", tr: "Shakespeare" },
      { de: "Boccacio", tr: "Boccacio (Giovanni Boccaccio)" },
      { de: "Lessing", tr: "Lessing" },
      { de: "Gottsched", tr: "Gottsched" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: (Boccacio).",
    explanation_tr: "Tahtadaki cevap: (Boccacio)."
  },
  {
    id: 19,
    type: "multiple_choice",
    question_de: "19- In welcher Zeitperiode sieht man die Renaissance, die Reformation und der Humanismus?",
    question_tr: "19- Rönesans, Reform ve Hümanizm'i hangi dönemde görürüz?",
    options: [
      { de: "Frühes Mittelalter", tr: "Erken Orta Çağ" },
      { de: "Hohes Mittelalter", tr: "Yüksek Orta Çağ" },
      { de: "Spätes Mittelalter", tr: "Geç Orta Çağ (Spätes Mittelalter)" },
      { de: "Aufklärung", tr: "Aydınlanma Çağı" }
    ],
    correctAnswer: 2,
    explanation_de: "Antwort laut Tafel: (Spätes Mittelalter).",
    explanation_tr: "Tahtadaki cevap: (Spätes Mittelalter - Geç Orta Çağ)."
  },

  // --- GÖRSEL 4 (Sorular 20 - 25) ---
  {
    id: 20,
    type: "multiple_choice",
    question_de: "20- Was haben die Gelehrten aus Konstaniopel nach Italien gebracht?",
    question_tr: "20- İstanbul'dan (Konstaniopel) İtalya'ya giden bilginler ne götürmüşlerdir?",
    options: [
      { de: "Volksbücher", tr: "Halk kitapları" },
      { de: "Merseburger Zaubersprüche", tr: "Merseburg Büyü Sözleri" },
      { de: "Ablassgeldern", tr: "Endüljans paraları" },
      { de: "Manuskripte der Antiken Schriftsteller", tr: "Antik yazarların el yazmaları (Manuskripte der Antiken Schriftsteller)" }
    ],
    correctAnswer: 3,
    explanation_de: "Antwort laut Tafel: (Manuskripte der Antiken Schriftsteller).",
    explanation_tr: "Tahtadaki cevap: (Manuskripte der Antiken Schriftsteller)."
  },
  {
    id: 21,
    type: "multiple_choice",
    question_de: "21- In welcher Z.P herrschte der Ruf Ad Fontes?",
    question_tr: "21- 'Ad Fontes' (Kaynaklara dön) çağrısı hangi dönemde (Z.P) hâkimdi?",
    options: [
      { de: "der Humanismus", tr: "Hümanizm (der Humanismus)" },
      { de: "die Reformation", tr: "Reform Dönemi" },
      { de: "Barock", tr: "Barok Dönemi" },
      { de: "Aufklärung", tr: "Aydınlanma Çağı" }
    ],
    correctAnswer: 0,
    explanation_de: "Antwort laut Tafel: (der Humanismus).",
    explanation_tr: "Tahtadaki cevap: (der Humanismus)."
  },
  {
    id: 22,
    type: "multiple_choice",
    question_de: "22- Was wollte man im Humanismus von der Vormundschaf der Kirche befreien?",
    question_tr: "22- Hümanizmde kilisenin vesayetinden (Vormundschaft) neyi kurtarmak istiyorlardı?",
    options: [
      { de: "Die Ritter", tr: "Şövalyeleri" },
      { de: "Wissenschaft", tr: "Bilimi (Wissenschaft)" },
      { de: "Ablassgeldern", tr: "Endüljans paralarını" },
      { de: "Volksbücher", tr: "Halk kitaplarını" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: (Wissenschaft).",
    explanation_tr: "Tahtadaki cevap: (Wissenschaft - Bilim)."
  },
  {
    id: 23,
    type: "multiple_choice",
    question_de: "23- Wer hat gesagt, dass das Sprachverständnis Weltverständnis ist?",
    question_tr: "23- Dil anlayışının dünya anlayışı olduğunu kim söylemiştir?",
    options: [
      { de: "Marthin Luther", tr: "Martin Luther" },
      { de: "Marthin Opitz", tr: "Martin Opitz" },
      { de: "Johannes Reuchlin", tr: "Johannes Reuchlin" },
      { de: "Immanuel Kant", tr: "Immanuel Kant" }
    ],
    correctAnswer: 2,
    explanation_de: "Antwort laut Tafel: (Johannes Reuchlin).",
    explanation_tr: "Tahtadaki cevap: (Johannes Reuchlin)."
  },
  {
    id: 24,
    type: "multiple_choice",
    question_de: "24- Was war die Sprache der deutschen Gelehrten in der Reformation?",
    question_tr: "24- Reform döneminde Alman bilginlerin dili neydi?",
    options: [
      { de: "Das Portugiesische", tr: "Portekizce" },
      { de: "Das Französische", tr: "Fransızca" },
      { de: "Das Griechische", tr: "Yunanca" },
      { de: "Das Latein", tr: "Latince (Das Latein)" }
    ],
    correctAnswer: 3,
    explanation_de: "Antwort laut Tafel: (Das Latein).",
    explanation_tr: "Tahtadaki cevap: (Das Latein - Latince)."
  },
  {
    id: 25,
    type: "multiple_choice",
    question_de: "25- Wer hat die Bibel ins Deutsche übersetzt?",
    question_tr: "25- İncil'i Almancaya kim çevirmiştir?",
    options: [
      { de: "Marthin Luther", tr: "Martin Luther (Marthin Luther)" },
      { de: "Karl der Grosse", tr: "Büyük Karl" },
      { de: "Johannes Reuchlin", tr: "Johannes Reuchlin" },
      { de: "Gottsched", tr: "Gottsched" }
    ],
    correctAnswer: 0,
    explanation_de: "Antwort laut Tafel: (Marthin Luther).",
    explanation_tr: "Tahtadaki cevap: (Marthin Luther)."
  },

  // --- GÖRSEL 5 (Sorular 26 - 31) ---
  {
    id: 26,
    type: "multiple_choice",
    question_de: "26- In welcher Z.P wird das Wort \"Frühneuhochdeutsch\" erwähnt?",
    question_tr: "26- \"Frühneuhochdeutsch\" kelimesi hangi dönemde (Z.P) anılır?",
    options: [
      { de: "der Humanismus", tr: "Hümanizm" },
      { de: "die Reformation", tr: "Reform Dönemi (die Reformation)" },
      { de: "Barock", tr: "Barok Dönemi" },
      { de: "Aufklärung", tr: "Aydınlanma Çağı" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: (die Reformation).",
    explanation_tr: "Tahtadaki cevap: (die Reformation - Reform Dönemi)."
  },
  {
    id: 27,
    type: "multiple_choice",
    question_de: "27- Was brauchte der sündige Mensch nach Marthin Luther nicht?",
    question_tr: "27- Martin Luther'e göre günahkâr insanın neye ihtiyacı yoktu?",
    options: [
      { de: "Die Bibel", tr: "İncil'e" },
      { de: "Den Glauben", tr: "İnanca" },
      { de: "die Mittelschaft der Kirche", tr: "Kilisenin aracılığına (die Mittelschaft der Kirche)" },
      { de: "Wissenschaft", tr: "Bilime" }
    ],
    correctAnswer: 2,
    explanation_de: "Antwort laut Tafel: (die Mittelschaft der Kirche).",
    explanation_tr: "Tahtadaki cevap: (die Mittelschaft der Kirche - Kilisenin aracılığı)."
  },
  {
    id: 28,
    type: "multiple_choice",
    question_de: "28- Gegen welche Gelder war Marthin Luther?",
    question_tr: "28- Martin Luther hangi paralara karşıydı?",
    options: [
      { de: "Steuergeldern", tr: "Vergi paralarına" },
      { de: "Handelsgeldern", tr: "Ticaret paralarına" },
      { de: "Kriegsgeldern", tr: "Savaş paralarına" },
      { de: "Ablassgeldern", tr: "Endüljans / günah affı paralarına (Ablassgeldern)" }
    ],
    correctAnswer: 3,
    explanation_de: "Antwort laut Tafel: (Ablassgeldern).",
    explanation_tr: "Tahtadaki cevap: (Ablassgeldern - Endüljans paraları)."
  },
  {
    id: 29,
    type: "multiple_choice",
    question_de: "29- Wer hat seine fünfundneunzig Thesen an das Tor des Wittenberger Schlosses gehängt?",
    question_tr: "29- 95 Tez'ini Wittenberg Şatosu kapısına kim asmıştır?",
    options: [
      { de: "Marthin Luther", tr: "Martin Luther (Marthin Luther)" },
      { de: "Johannes Reuchlin", tr: "Johannes Reuchlin" },
      { de: "Marthin Opitz", tr: "Martin Opitz" },
      { de: "Lessing", tr: "Lessing" }
    ],
    correctAnswer: 0,
    explanation_de: "Antwort laut Tafel: (Marthin Luther).",
    explanation_tr: "Tahtadaki cevap: (Marthin Luther)."
  },
  {
    id: 30,
    type: "multiple_choice",
    question_de: "30- Woher kommt das Wort \"Barock\"?",
    question_tr: "30- \"Barock\" kelimesi nereden gelmektedir?",
    options: [
      { de: "Aus dem Lateinischen", tr: "Latinceden" },
      { de: "Aus dem Portugiesischen", tr: "Portekizceden (Aus dem Portugiesischen)" },
      { de: "Aus dem Italienischen", tr: "İtalyancadan" },
      { de: "Aus dem Französischen", tr: "Fransızcadan" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: (Aus dem Portugiesischen).",
    explanation_tr: "Tahtadaki cevap: (Aus dem Portugiesischen - Portekizceden)."
  },
  {
    id: 31,
    type: "multiple_choice",
    question_de: "31- Was führte zum 30. Jährigen Krieg?",
    question_tr: "31- 30 Yıl Savaşları'na ne yol açmıştır?",
    options: [
      { de: "Die Gründung der Sprachgesellschaften", tr: "Dil cemiyetlerinin kurulması" },
      { de: "Die Erfindung des Buchdrucks", tr: "Matbaanın icadı" },
      { de: "Fanatische Zuspitzung zwischen den Konfessionen", tr: "Mezhepler arasındaki fanatik gerilim / çatışma" },
      { de: "Die Philosophie der Rationalisten", tr: "Rasyonalistlerin felsefesi" }
    ],
    correctAnswer: 2,
    explanation_de: "Antwort laut Tafel: (Fanatische Zuspitzung zwischen den Konfessionen).",
    explanation_tr: "Tahtadaki cevap: (Fanatische Zuspitzung zwischen den Konfessionen)."
  },

  // --- GÖRSEL 6 (Sorular 32 - 37) ---
  {
    id: 32,
    type: "multiple_choice",
    question_de: "32- Zwischen welchen Begriefen wurden die Gemüter in der Barockzeit zerrissen?",
    question_tr: "32- Barok döneminde zihinler/ruhlar hangi kavramlar arasında ikiye bölünmüştür?",
    options: [
      { de: "Vernunft <-> Gefühl", tr: "Akıl <-> Duygu" },
      { de: "Kirche <-> Wissenschaft", tr: "Kilise <-> Bilim" },
      { de: "Vater <-> Sohn", tr: "Baba <-> Oğul" },
      { de: "Ewigkeit <-> Vergänglichkeit", tr: "Ebediyet <-> Fanilik (Ewigkeit <-> Vergänglichkeit)" }
    ],
    correctAnswer: 3,
    explanation_de: "Antwort laut Tafel: (Ewigkeit <-> Vergänglichkeit).",
    explanation_tr: "Tahtadaki cevap: (Ewigkeit <-> Vergänglichkeit)."
  },
  {
    id: 33,
    type: "multiple_choice",
    question_de: "33- Wer ist der Theoretiker der Barockzeit?",
    question_tr: "33- Barok döneminin kuramcısı (Theoretiker) kimdir?",
    options: [
      { de: "Marthin Opitz", tr: "Martin Opitz (Marthin Opitz)" },
      { de: "Gottsched", tr: "Gottsched" },
      { de: "Andreas Gryphus", tr: "Andreas Gryphius" },
      { de: "Grimmelshausen", tr: "Grimmelshausen" }
    ],
    correctAnswer: 0,
    explanation_de: "Antwort laut Tafel: (Marthin Opitz).",
    explanation_tr: "Tahtadaki cevap: (Marthin Opitz)."
  },
  {
    id: 34,
    type: "multiple_choice",
    question_de: "34- In welcher Form des Theaterspiels überlebt der Held?",
    question_tr: "34- Tiyatro oyununun hangi biçiminde kahraman hayatta kalır?",
    options: [
      { de: "der Tragödie", tr: "Tragedyada" },
      { de: "der Komödie", tr: "Komedyada (der Komödie)" },
      { de: "dem Heldenlied", tr: "Kahramanlık şarkısında" },
      { de: "dem Epos", tr: "Destanda" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: (der Komödie).",
    explanation_tr: "Tahtadaki cevap: (der Komödie - Komedya)."
  },
  {
    id: 35,
    type: "multiple_choice",
    question_de: "35- In welcher Z.P wurden die Sprachgesellschaften gegrundet?",
    question_tr: "35- Dil cemiyetleri (Sprachgesellschaften) hangi dönemde (Z.P) kurulmuştur?",
    options: [
      { de: "die Reformation", tr: "Reform Dönemi" },
      { de: "der Humanismus", tr: "Hümanizm" },
      { de: "Barock", tr: "Barok (Barock)" },
      { de: "Aufklärung", tr: "Aydınlanma Çağı" }
    ],
    correctAnswer: 2,
    explanation_de: "Antwort laut Tafel: (Barock).",
    explanation_tr: "Tahtadaki cevap: (Barock)."
  },
  {
    id: 36,
    type: "multiple_choice",
    question_de: "36- Wovon wollte man die deutsche Sprache reinhalten?",
    question_tr: "36- Alman dilini neyden arındırmak (temiz tutmak) istiyorlardı?",
    options: [
      { de: "von der Wissenschaft", tr: "Bilimden" },
      { de: "von den Zaubersprüchen", tr: "Büyü sözlerinden" },
      { de: "von der Vernunft", tr: "Akıldan" },
      { de: "von fremden einflussen", tr: "Yabancı etkilerden (von fremden einflussen)" }
    ],
    correctAnswer: 3,
    explanation_de: "Antwort laut Tafel: (von fremden einflussen).",
    explanation_tr: "Tahtadaki cevap: (von fremden einflussen - Yabancı etkilerden)."
  },
  {
    id: 37,
    type: "multiple_choice",
    question_de: "37- Wer ist das erste dramatische Genie in der Barockzeit?",
    question_tr: "37- Barok dönemindeki ilk dramatik deha kimdir?",
    options: [
      { de: "Andreas Gryphus", tr: "Andreas Gryphius (Andreas Gryphus)" },
      { de: "Marthin Opitz", tr: "Martin Opitz" },
      { de: "Grimmelshausen", tr: "Grimmelshausen" },
      { de: "Lessing", tr: "Lessing" }
    ],
    correctAnswer: 0,
    explanation_de: "Antwort laut Tafel: (Andreas Gryphus).",
    explanation_tr: "Tahtadaki cevap: (Andreas Gryphus)."
  },

  // --- GÖRSEL 7 (Sorular 38 - 44) ---
  {
    id: 38,
    type: "multiple_choice",
    question_de: "38- Was sind die drei Einheiten?",
    question_tr: "38- Üç birlik (die drei Einheiten) nedir?",
    options: [
      { de: "Renaissance, Reformation und Humanismus", tr: "Rönesans, Reform ve Hümanizm" },
      { de: "Ort, Zeit und Handlung", tr: "Yer, Zaman ve Olay/Eylem (Ort, Zeit und Handlung)" },
      { de: "Empfindsamkeit, Pietismus und Vernunft", tr: "Duyarlılık, Pietizm ve Akıl" },
      { de: "Bibel, Kirche und Geistliche", tr: "İncil, Kilise ve Din Adamları" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: (Ort, Zeit und Handlung).",
    explanation_tr: "Tahtadaki cevap: (Ort, Zeit und Handlung)."
  },
  {
    id: 39,
    type: "multiple_choice",
    question_de: "39- Woraus entwickelte sich der Prosaroman?",
    question_tr: "39- Düzyazı roman (Prosaroman) neyden gelişmiştir?",
    options: [
      { de: "aus den Zaubersprüchen", tr: "Büyü sözlerinden" },
      { de: "aus den Rätseln", tr: "Bilmecelerden" },
      { de: "aus den höfischen Versepen", tr: "Saray manzum destanlarından (aus den höfischen Versepen)" },
      { de: "aus der Komödie", tr: "Komedyadan" }
    ],
    correctAnswer: 2,
    explanation_de: "Antwort laut Tafel: (aus den höfischen Versepen).",
    explanation_tr: "Tahtadaki cevap: (aus den höfischen Versepen)."
  },
  {
    id: 40,
    type: "multiple_choice",
    question_de: "40- Wer ist der Vertreter des Schelmenromans?",
    question_tr: "40- Pikaresk romanın (Schelmenroman) temsilcisi kimdir?",
    options: [
      { de: "W. von Eschenbach", tr: "W. von Eschenbach" },
      { de: "Boccacio", tr: "Boccacio" },
      { de: "Andreas Gryphus", tr: "Andreas Gryphius" },
      { de: "Grimmelshausen", tr: "Grimmelshausen" }
    ],
    correctAnswer: 3,
    explanation_de: "Antwort laut Tafel: (Grimmelshausen).",
    explanation_tr: "Tahtadaki cevap: (Grimmelshausen)."
  },
  {
    id: 41,
    type: "multiple_choice",
    question_de: "41- Was hat er geschrieben?",
    question_tr: "41- O (Grimmelshausen) ne yazmıştır?",
    options: [
      { de: "der erste Bildungsroman", tr: "İlk gelişim/oluşum romanı (der erste Bildungsroman)" },
      { de: "Nathan der Weise", tr: "Nathan der Weise" },
      { de: "Parzival", tr: "Parzival" },
      { de: "Hildebrandslied", tr: "Hildebrandslied" }
    ],
    correctAnswer: 0,
    explanation_de: "Antwort laut Tafel (Pfeil von Grimmelshausen auf 'er'): (der erste Bildungsroman).",
    explanation_tr: "Tahtadaki cevap (Grimmelshausen'den 'er' kelimesine ok işaretiyle): (der erste Bildungsroman)."
  },
  {
    id: 42,
    type: "multiple_choice",
    question_de: "42- In welcher Z.P verminderte die Philosophie der Rationalisten den Einfluss dogmatischer Theorie?",
    question_tr: "42- Rasyonalistlerin felsefesi dogmatik teorinin etkisini hangi dönemde (Z.P) azaltmıştır?",
    options: [
      { de: "Barock", tr: "Barok Dönemi" },
      { de: "Aufklärung", tr: "Aydınlanma Çağı (Aufklärung)" },
      { de: "Spätes Mittelalter", tr: "Geç Orta Çağ" },
      { de: "Hohes Mittelalter", tr: "Yüksek Orta Çağ" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: (Aufklärung).",
    explanation_tr: "Tahtadaki cevap: (Aufklärung - Aydınlanma Çağı)."
  },
  {
    id: 43,
    type: "multiple_choice",
    question_de: "43- Was ist ein Kenntzeichen der Aufklärung?",
    question_tr: "43- Aydınlanma Çağı'nın bir özelliği/belirtisi (Kenntzeichen) nedir?",
    options: [
      { de: "minne", tr: "minne" },
      { de: "Ablassgeldern", tr: "Ablassgeldern" },
      { de: "die Toleranz", tr: "Hoşgörü (die Toleranz)" },
      { de: "Vergänglichkeit", tr: "Vergänglichkeit" }
    ],
    correctAnswer: 2,
    explanation_de: "Antwort laut Tafel: (die Toleranz).",
    explanation_tr: "Tahtadaki cevap: (die Toleranz - Hoşgörü)."
  },
  {
    id: 44,
    type: "multiple_choice",
    question_de: "44- Wo hat man das Glück in der Aufklärung gefunden?",
    question_tr: "44- Aydınlanma Çağı'nda mutluluk nerede bulunmuştur?",
    options: [
      { de: "im Jenseits", tr: "Öteki dünyada" },
      { de: "in der Kirche", tr: "Kilisede" },
      { de: "im Kloster", tr: "Manastırda" },
      { de: "in Diesseits", tr: "Bu dünyada / Yeryüzünde (in Diesseits)" }
    ],
    correctAnswer: 3,
    explanation_de: "Antwort laut Tafel: (in Diesseits).",
    explanation_tr: "Tahtadaki cevap: (in Diesseits - Bu dünyada)."
  },

  // --- GÖRSEL 8 (Sorular 45 - 50) ---
  {
    id: 45,
    type: "multiple_choice",
    question_de: "45- Wer ist der wichtigste Philosoph der Aufklärung?",
    question_tr: "45- Aydınlanma Çağı'nın en önemli filozofu kimdir?",
    options: [
      { de: "Immanuel Kant", tr: "Immanuel Kant" },
      { de: "Johannes Reuchlin", tr: "Johannes Reuchlin" },
      { de: "Marthin Luther", tr: "Martin Luther" },
      { de: "Marthin Opitz", tr: "Martin Opitz" }
    ],
    correctAnswer: 0,
    explanation_de: "Antwort laut Tafel: (Immanuel Kant).",
    explanation_tr: "Tahtadaki cevap: (Immanuel Kant)."
  },
  {
    id: 46,
    type: "multiple_choice",
    question_de: "46- Was ist das Symbol der Aufklärung?",
    question_tr: "46- Aydınlanma Çağı'nın sembolü nedir?",
    options: [
      { de: "Perle", tr: "İnci (Perle)" },
      { de: "die Sonne", tr: "Güneş (die Sonne)" },
      { de: "der Mond", tr: "Ay" },
      { de: "das Kreuz", tr: "Haç" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: (die Sonne).",
    explanation_tr: "Tahtadaki cevap: (die Sonne - Güneş)."
  },
  {
    id: 47,
    type: "multiple_choice",
    question_de: "47- In welcher Z.P spricht man von der Selbstverschuldeten unmündigkeit?",
    question_tr: "47- Hangi dönemde (Z.P) 'kendi suçu olan erginleşmemişlik'ten (Selbstverschuldete Unmündigkeit) bahsedilir?",
    options: [
      { de: "Barock", tr: "Barok Dönemi" },
      { de: "die Reformation", tr: "Reform Dönemi" },
      { de: "Aufklärung", tr: "Aydınlanma Çağı (Aufklärung)" },
      { de: "der Humanismus", tr: "Hümanizm" }
    ],
    correctAnswer: 2,
    explanation_de: "Antwort laut Tafel: (Aufklärung).",
    explanation_tr: "Tahtadaki cevap: (Aufklärung - Aydınlanma Çağı)."
  },
  {
    id: 48,
    type: "multiple_choice",
    question_de: "48- Was ist der Wahlspruch der Aufklärung?",
    question_tr: "48- Aydınlanma Çağı'nın parolası (Wahlspruch) nedir?",
    options: [
      { de: "Ad Fontes", tr: "Ad Fontes" },
      { de: "minne", tr: "minne" },
      { de: "Memento mori", tr: "Memento mori" },
      { de: "Sapere Aude", tr: "Sapere Aude (Aklını kullanma cesaretini göster!)" }
    ],
    correctAnswer: 3,
    explanation_de: "Antwort laut Tafel: (Sapere Aude).",
    explanation_tr: "Tahtadaki cevap: (Sapere Aude)."
  },
  {
    id: 49,
    type: "multiple_choice",
    question_de: "49- Wer ist der Theoretiker der Aufklärung?",
    question_tr: "49- Aydınlanma Çağı'nın kuramcısı (Theoretiker) kimdir?",
    options: [
      { de: "Gottsched", tr: "Gottsched" },
      { de: "Marthin Opitz", tr: "Martin Opitz" },
      { de: "Winckelmann", tr: "Winckelmann" },
      { de: "Grimmelshausen", tr: "Grimmelshausen" }
    ],
    correctAnswer: 0,
    explanation_de: "Antwort laut Tafel: (Gottsched).",
    explanation_tr: "Tahtadaki cevap: (Gottsched)."
  },
  {
    id: 50,
    type: "multiple_choice",
    question_de: "50- Gegen wen waren Bodmer und Breitinger?",
    question_tr: "50- Bodmer ve Breitinger kime karşıydılar?",
    options: [
      { de: "Lessing", tr: "Lessing" },
      { de: "Gottsched", tr: "Gottsched" },
      { de: "Shakespeare", tr: "Shakespeare" },
      { de: "Immanuel Kant", tr: "Immanuel Kant" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: (Gottsched).",
    explanation_tr: "Tahtadaki cevap: (Gottsched)."
  },

  // --- GÖRSEL 9 (Sorular 51 - 56) ---
  {
    id: 51,
    type: "multiple_choice",
    question_de: "51- Wer entspricht dem deutschen Geschmack nach Lessing?",
    question_tr: "51- Lessing'e göre Alman zevkine kim uymaktadır?",
    options: [
      { de: "Gottsched", tr: "Gottsched" },
      { de: "Boccacio", tr: "Boccacio" },
      { de: "Shakespeare", tr: "Shakespeare" },
      { de: "Winckelmann", tr: "Winckelmann" }
    ],
    correctAnswer: 2,
    explanation_de: "Antwort laut Tafel: (Shakespeare).",
    explanation_tr: "Tahtadaki cevap: (Shakespeare)."
  },
  {
    id: 52,
    type: "multiple_choice",
    question_de: "52- Wer hat das Werk \"Nathan der Weise\" geschrieben?",
    question_tr: "52- \"Nathan der Weise\" adlı eseri kim yazmıştır?",
    options: [
      { de: "Gottsched", tr: "Gottsched" },
      { de: "Immanuel Kant", tr: "Immanuel Kant" },
      { de: "Andreas Gryphus", tr: "Andreas Gryphius" },
      { de: "Lessing", tr: "Lessing" }
    ],
    correctAnswer: 3,
    explanation_de: "Antwort laut Tafel: (Lessing).",
    explanation_tr: "Tahtadaki cevap: (Lessing)."
  },
  {
    id: 53,
    type: "multiple_choice",
    question_de: "53- Welches Werk von Lessing wurde im dritten Reich verboten?",
    question_tr: "53- Lessing'in hangi eseri Üçüncü Reich (Nazi) döneminde yasaklanmıştır?",
    options: [
      { de: "Nathan der Weise", tr: "Nathan der Weise" },
      { de: "Parzival", tr: "Parzival" },
      { de: "Nibelungenlied", tr: "Nibelungenlied" },
      { de: "Hildebrandslied", tr: "Hildebrandslied" }
    ],
    correctAnswer: 0,
    explanation_de: "Antwort laut Tafel: (Nathan der Weise).",
    explanation_tr: "Tahtadaki cevap: (Nathan der Weise)."
  },
  {
    id: 54,
    type: "multiple_choice",
    question_de: "54- Wessen Gedanken haben die Griechenbegeisterung der deutschen Klassik geprägt?",
    question_tr: "54- Kimin düşünceleri Alman Klasisizmi'nin Yunan hayranlığını şekillendirmiştir?",
    options: [
      { de: "Gottsched", tr: "Gottsched" },
      { de: "Winckelmann", tr: "Winckelmann" },
      { de: "Marthin Opitz", tr: "Martin Opitz" },
      { de: "Johannes Reuchlin", tr: "Johannes Reuchlin" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: (Winckelmann).",
    explanation_tr: "Tahtadaki cevap: (Winckelmann)."
  },
  {
    id: 55,
    type: "multiple_choice",
    question_de: "55- Welche kleine Bewegungen gibt es in der Aufklärung, die gefühlsbetont sind?",
    question_tr: "55- Aydınlanma Çağı'nda duygu ağırlıklı (gefühlsbetont) olan küçük akımlar hangileridir?",
    options: [
      { de: "die Renaissance und der Humanismus", tr: "Rönesans ve Hümanizm" },
      { de: "Ewigkeit und Vergänglichkeit", tr: "Ebediyet ve Fanilik" },
      { de: "die Empfindsamkeit und der Pietismus", tr: "Duyarlılık ve Pietizm (die Empfindsamkeit und der Pietismus)" },
      { de: "Rationalismus und Aufklärung", tr: "Rasyonalizm ve Aydınlanma" }
    ],
    correctAnswer: 2,
    explanation_de: "Antwort laut Tafel: (die Empfindsamkeit und der Pietismus).",
    explanation_tr: "Tahtadaki cevap: (die Empfindsamkeit und der Pietismus)."
  },
  {
    id: 56,
    type: "multiple_choice",
    question_de: "56- In welcher Z.P spricht man vom Vernunft?",
    question_tr: "56- Hangi dönemde (Z.P) akıldan (Vernunft) bahsedilir?",
    options: [
      { de: "Germanische Zeitperiode", tr: "Cermen Dönemi" },
      { de: "Frühes Mittelalter", tr: "Erken Orta Çağ" },
      { de: "Barock", tr: "Barok Dönemi" },
      { de: "Aufklärung", tr: "Aydınlanma Çağı (Aufklärung)" }
    ],
    correctAnswer: 3,
    explanation_de: "Antwort laut Tafel: (Aufklärung).",
    explanation_tr: "Tahtadaki cevap: (Aufklärung - Aydınlanma Çağı)."
  },

  // --- GÖRSEL 10 (Doğru / Yanlış Soruları 1 - 10 -> ID 57 - 66) ---
  {
    id: 57,
    type: "true_false",
    question_de: "1- Wolfram von Eschenbach war ein Reformator.",
    question_tr: "1- Wolfram von Eschenbach bir reformcuydu.",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: Falsch (F). Wolfram von Eschenbach hat das Epos Parzival im Hohen Mittelalter geschrieben.",
    explanation_tr: "Tahtadaki cevap: Falsch (Yanlış). Wolfram von Eschenbach bir reformcu değil, Parzival destanının yazarıdır."
  },
  {
    id: 58,
    type: "true_false",
    question_de: "2- Ritterliche Tugende gibt es im Frühen Mittelalter.",
    question_tr: "2- Şövalyelik erdemleri (Ritterliche Tugende) Erken Orta Çağ'da vardır.",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: Falsch (F). Von den Tugenden spricht man im Hohen Mittelalter.",
    explanation_tr: "Tahtadaki cevap: Falsch (Yanlış). Şövalye erdemlerinden Yüksek Orta Çağ'da (Hohes Mittelalter) bahsedilir."
  },
  {
    id: 59,
    type: "true_false",
    question_de: "3- Merseburger Zaubersprüche wurden in der germanischen Z.P gefunden?",
    question_tr: "3- Merseburg Büyü Sözleri Cermen döneminde (germanische Z.P) bulunmuştur / o döneme aittir.",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 0,
    explanation_de: "Antwort laut Tafel: Richtig (R).",
    explanation_tr: "Tahtadaki cevap: Richtig (Doğru)."
  },
  {
    id: 60,
    type: "true_false",
    question_de: "4- Parzival wurde von Hartmann von Aue geschrieben.",
    question_tr: "4- Parzival, Hartmann von Aue tarafından yazılmıştır.",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: Falsch (F). Parzival wurde von W. von Eschenbach geschrieben.",
    explanation_tr: "Tahtadaki cevap: Falsch (Yanlış). Parzival destanını W. von Eschenbach yazmıştır."
  },
  {
    id: 61,
    type: "true_false",
    question_de: "5- Die Dichtung des Frühen Mittelalter war höfisch.",
    question_tr: "5- Erken Orta Çağ'ın edebiyatı saraylı (höfisch) idi.",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: Falsch (F). Die Dichtung des Frühenmittelalters war geistlich.",
    explanation_tr: "Tahtadaki cevap: Falsch (Yanlış). Erken Orta Çağ edebiyatı dini (geistlich) nitelikteydi."
  },
  {
    id: 62,
    type: "true_false",
    question_de: "6- Das Wort \"Barock\" bedeutet \"Perle\".",
    question_tr: "6- \"Barock\" kelimesi \"İnci\" (Perle) anlamına gelir.",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 0,
    explanation_de: "Antwort laut Tafel: Richtig (R).",
    explanation_tr: "Tahtadaki cevap: Richtig (Doğru)."
  },
  {
    id: 63,
    type: "true_false",
    question_de: "7- Der 30. Jährige Krieg war im hohen Mittelalter.",
    question_tr: "7- 30 Yıl Savaşları Yüksek Orta Çağ'da olmuştur.",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: Falsch (F). Der 30. Jährige Krieg war in der Barockzeit.",
    explanation_tr: "Tahtadaki cevap: Falsch (Yanlış). 30 Yıl Savaşları Yüksek Orta Çağ'da değil, Barok dönemindedir."
  },
  {
    id: 64,
    type: "true_false",
    question_de: "8- Volksbücher entstanden in der germanischen Z.P.",
    question_tr: "8- Halk kitapları (Volksbücher) Cermen döneminde ortaya çıkmıştır.",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: Falsch (F). Volksbücher entstanden im Späten Mittelalter.",
    explanation_tr: "Tahtadaki cevap: Falsch (Yanlış). Halk kitapları (Volksbücher) Geç Orta Çağ'da ortaya çıkmıştır."
  },
  {
    id: 65,
    type: "true_false",
    question_de: "9- Marthin Opitz ist ein Theoretiker.",
    question_tr: "9- Marthin Opitz bir kuramcıdır (Theoretiker).",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 0,
    explanation_de: "Antwort laut Tafel: Richtig (R). Marthin Opitz ist der Theoretiker der Barockzeit.",
    explanation_tr: "Tahtadaki cevap: Richtig (Doğru). Marthin Opitz Barok döneminin kuramcısıdır."
  },
  {
    id: 66,
    type: "true_false",
    question_de: "10- Lessing ist ein Reformator.",
    question_tr: "10- Lessing bir reformcudur (Reformator).",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 1,
    explanation_de: "Antwort laut Tafel: Falsch (F). Lessing ist ein Vertreter der Aufklärung (Reformator war Marthin Luther).",
    explanation_tr: "Tahtadaki cevap: Falsch (Yanlış). Lessing Aydınlanma Çağı yazarıdır, reformcu olan Marthin Luther'dir."
  }
];

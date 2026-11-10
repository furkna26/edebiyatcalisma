const questions = [
  // --- GÖRSEL 1 (Sorular 1 - 6) ---
  {
    id: 1,
    type: "multiple_choice",
    question_de: "1. Welche Zeitperiode wird als die heidnische Zeitperiode genannt?",
    question_tr: "1. Hangi dönem 'putperest (pagan) dönem' olarak adlandırılır?",
    options: [
      { de: "Germanische Zeitperiode", tr: "Cermen Dönemi" },
      { de: "Frühes Mittelalter", tr: "Erken Orta Çağ" },
      { de: "Hohes Mittelalter", tr: "Yüksek Orta Çağ" },
      { de: "Spätes Mittelalter", tr: "Geç Orta Çağ" }
    ],
    correctAnswer: 0,
    explanation_de: "Die Germanische Zeitperiode (vor der Christianisierung) wird als die heidnische Zeitperiode bezeichnet.",
    explanation_tr: "Hristiyanlaşma öncesi Cermen Dönemi (Germanische Zeitperiode), putperest/pagan dönem olarak adlandırılmaktadır."
  },
  {
    id: 2,
    type: "multiple_choice",
    question_de: "2. Welche literarischen Formen gab es in der germanischen Zeitperiode?",
    question_tr: "2. Cermen döneminde hangi edebi biçimler vardı?",
    options: [
      { de: "Höfische Versepen", tr: "Saray manzum destanları" },
      { de: "Mündliche literarische Formen", tr: "Sözlü edebi biçimler" },
      { de: "Gedruckte Prosaromane", tr: "Basılı düzyazı romanlar" },
      { de: "Bürgerliche Trauerspiele", tr: "Burjuva trajedileri" }
    ],
    correctAnswer: 1,
    explanation_de: "In der germanischen Zeitperiode wurden Dichtungen nicht aufgeschrieben, sondern existierten als mündliche literarische Formen.",
    explanation_tr: "Cermen döneminde edebi ürünler yazıya geçirilmemiş, sözlü edebi biçimler (mündliche lit. Formen) olarak varlığını sürdürmüştür."
  },
  {
    id: 3,
    type: "multiple_choice",
    question_de: "3. Was für eine Form waren die Rätsel?",
    question_tr: "3. Bilmeceler (Rätsel) nasıl bir edebi biçimdi?",
    options: [
      { de: "Schriftliche Chroniken", tr: "Yazılı kronikler" },
      { de: "Geistliche Kirchenlieder", tr: "Dini kilise ilahileri" },
      { de: "Mündliche Formen", tr: "Sözlü biçimler" },
      { de: "Dramatische Komödien", tr: "Dramatik komediler" }
    ],
    correctAnswer: 2,
    explanation_de: "Die Rätsel gehörten wie Zaubersprüche und Heldenlieder zu den mündlichen Formen der germanischen Dichtung.",
    explanation_tr: "Bilmeceler (Rätsel), büyü sözleri ve kahramanlık şarkıları gibi Cermen edebiyatının sözlü biçimlerinden (mündliche Formen) biriydi."
  },
  {
    id: 4,
    type: "multiple_choice",
    question_de: "4. Wie heißt das erste bekannte Beispiel für die Zaubersprüche?",
    question_tr: "4. Büyü sözlerinin (Zaubersprüche) bilinen ilk örneğinin adı nedir?",
    options: [
      { de: "Nibelungenlied", tr: "Nibelungen Destanı" },
      { de: "Wessobrunner Gebet", tr: "Wessobrunn Duası" },
      { de: "Muspilli", tr: "Muspilli" },
      { de: "Merseburger Zaubersprüche", tr: "Merseburg Büyü Sözleri" }
    ],
    correctAnswer: 3,
    explanation_de: "Die Merseburger Zaubersprüche sind das bekannteste und älteste überlieferte Beispiel für heidnisch-germanische Zaubersprüche.",
    explanation_tr: "Merseburger Zaubersprüche (Merseburg Büyü Sözleri), pagan Cermen büyü sözlerinin bilinen ilk ve en ünlü örneğidir."
  },
  {
    id: 5,
    type: "multiple_choice",
    question_de: "5. Welche literarische Form diente der Gefangenenbefreiung?",
    question_tr: "5. Hangi edebi biçim (metin) esirlerin kurtarılmasına hizmet etmiştir?",
    options: [
      { de: "Der erste Spruch der Merseburger Zaubersprüche", tr: "Merseburg Büyü Sözleri'nin birinci büyüsü" },
      { de: "Der zweite Spruch der Merseburger Zaubersprüche", tr: "Merseburg Büyü Sözleri'nin ikinci büyüsü" },
      { de: "Das Hildebrandslied", tr: "Hildebrand Destanı" },
      { de: "Das Annolied", tr: "Anno Şarkısı" }
    ],
    correctAnswer: 0,
    explanation_de: "Der erste Merseburger Zauberspruch (Lösespruch) diente der Befreiung von Kriegsgefangenen aus ihren Fesseln.",
    explanation_tr: "Merseburg Büyü Sözleri'nin ilk büyüsü (der erste Spruch der M.B. Zaubersprüche), savaş esirlerinin zincirlerinden kurtulması için okunurdu."
  },
  {
    id: 6,
    type: "multiple_choice",
    question_de: "6. In welchem Lied gibt es einen Kampf zwischen Vater und Sohn?",
    question_tr: "6. Hangi destanda/şarkıda baba ile oğul arasında bir savaş (düello) vardır?",
    options: [
      { de: "Ludwigslied", tr: "Ludwig Şarkısı" },
      { de: "Hildebrandslied", tr: "Hildebrand Destanı (Şarkısı)" },
      { de: "Rolandslied", tr: "Roland Destanı" },
      { de: "Alexanderlied", tr: "İskender Destanı" }
    ],
    correctAnswer: 1,
    explanation_de: "Im Hildebrandslied stehen sich der Vater Hildebrand und sein Sohn Hadubrand auf dem Schlachtfeld gegenüber.",
    explanation_tr: "Hildebrandslied'de baba Hildebrand ile oğlu Hadubrand savaş alanında karşı karşıya gelerek çarpışır."
  },

  // --- GÖRSEL 2 (Sorular 7 - 12) ---
  {
    id: 7,
    type: "multiple_choice",
    question_de: "7. Was steht im Frühen Mittelalter im Vordergrund?",
    question_tr: "7. Erken Orta Çağ'da (Frühes Mittelalter) ön planda olan nedir?",
    options: [
      { de: "Die Vernunft und die Naturwissenschaften", tr: "Akıl ve doğa bilimleri" },
      { de: "Ritterliche Turniere und Minnesang", tr: "Şövalye turnuvaları ve saray aşk şiiri" },
      { de: "Die Bibel und die Geistlichen", tr: "İncil (Kutsal Kitap) ve din adamları (ruhban sınıfı)" },
      { de: "Das Bürgertum und die Handwerker", tr: "Burjuvazi ve zanaatkârlar" }
    ],
    correctAnswer: 2,
    explanation_de: "Im Frühen Mittelalter standen die Christianisierung, die Bibel und die Geistlichen (Mönche/Kleriker) völlig im Vordergrund.",
    explanation_tr: "Erken Orta Çağ'da İncil ve din adamları (Die Bibel und die Geistlichen) edebiyat ve kültür hayatının merkezindeydi."
  },
  {
    id: 8,
    type: "multiple_choice",
    question_de: "8. In welchem Zeitalter waren die Ritter wichtig?",
    question_tr: "8. Şövalyeler (Ritter) hangi çağda/dönemde önemliydi?",
    options: [
      { de: "Germanische Zeitperiode", tr: "Cermen Dönemi" },
      { de: "Frühes Mittelalter", tr: "Erken Orta Çağ" },
      { de: "Aufklärung", tr: "Aydınlanma Çağı" },
      { de: "Hohes Mittelalter", tr: "Yüksek Orta Çağ" }
    ],
    correctAnswer: 3,
    explanation_de: "Im Hohen Mittelalter (ca. 1170–1250) bildeten die Ritter und die höfische Kultur das Zentrum der Literatur.",
    explanation_tr: "Yüksek Orta Çağ'da (Hohes Mittelalter) şövalyeler ve saray kültürü toplumsal ve edebi yaşamın en önemli unsurlarıydı."
  },
  {
    id: 9,
    type: "multiple_choice",
    question_de: "9. Wie ist die Dichtung des Frühen Mittelalters?",
    question_tr: "9. Erken Orta Çağ'ın edebiyatı (şiiri/yazını) ne türdedir?",
    options: [
      { de: "geistlich", tr: "dini / ruhani (geistlich)" },
      { de: "höfisch", tr: "saraylı / şövalye tarzı (höfisch)" },
      { de: "weltlich", tr: "dünyevi / seküler (weltlich)" },
      { de: "rationalistisch", tr: "akılcı (rationalistisch)" }
    ],
    correctAnswer: 0,
    explanation_de: "Die Dichtung des Frühen Mittelalters war geistlich geprägt und diente der Verbreitung des christlichen Glaubens.",
    explanation_tr: "Erken Orta Çağ edebiyatı dini niteliktedir (geistlich) ve manastırlarda din adamları tarafından üretilmiştir."
  },
  {
    id: 10,
    type: "multiple_choice",
    question_de: "10. Wer hat die Germanen christianisiert?",
    question_tr: "10. Cermenleri kim Hristiyanlaştırmıştır?",
    options: [
      { de: "Martin Luther", tr: "Martin Luther" },
      { de: "Karl der Große", tr: "Büyük Karl (Şarlman)" },
      { de: "Friedrich Barbarossa", tr: "Friedrich Barbarossa" },
      { de: "Otto der Große", tr: "Büyük Otto" }
    ],
    correctAnswer: 1,
    explanation_de: "Karl der Große hat die germanischen Stämme (insbesondere die Sachsen) im Frühen Mittelalter christianisiert.",
    explanation_tr: "Cermen boylarını Hristiyanlaştıran ve kültürel birliği sağlayan hükümdar Büyük Karl'dır (Karl der Große)."
  },
  {
    id: 11,
    type: "multiple_choice",
    question_de: "11. In welchem Zeitalter spricht man von den Tugenden?",
    question_tr: "11. Hangi çağda (şövalye) erdemlerinden (Tugenden) bahsedilir?",
    options: [
      { de: "Spätes Mittelalter", tr: "Geç Orta Çağ" },
      { de: "Frühes Mittelalter", tr: "Erken Orta Çağ" },
      { de: "Hohes Mittelalter", tr: "Yüksek Orta Çağ" },
      { de: "Barockzeit", tr: "Barok Dönemi" }
    ],
    correctAnswer: 2,
    explanation_de: "Im Hohen Mittelalter stand das ritterliche Tugendsystem (z. B. mâze, staete, triuwe, minne) im Mittelpunkt.",
    explanation_tr: "Şövalyelik erdemlerinden (Tugenden) Yüksek Orta Çağ'da (Hohes Mittelalter) bahsedilmektedir."
  },
  {
    id: 12,
    type: "multiple_choice",
    question_de: "12. In welchem Zeitalter sehen wir das Nibelungenlied?",
    question_tr: "12. Nibelungen Destanı'nı (Nibelungenlied) hangi çağda görürüz?",
    options: [
      { de: "Germanische Zeitperiode", tr: "Cermen Dönemi" },
      { de: "Frühes Mittelalter", tr: "Erken Orta Çağ" },
      { de: "Reformation", tr: "Reform Dönemi" },
      { de: "Hohes Mittelalter", tr: "Yüksek Orta Çağ" }
    ],
    correctAnswer: 3,
    explanation_de: "Das mittelhochdeutsche Heldenepos Nibelungenlied entstand um 1200 im Hohen Mittelalter.",
    explanation_tr: "Orta Yüksek Almanca dönemi eseri olan Nibelungenlied, Yüksek Orta Çağ'da (Hohes Mittelalter) kaleme alınmıştır."
  },

  // --- GÖRSEL 3 (Sorular 13 - 19) ---
  {
    id: 13,
    type: "multiple_choice",
    question_de: "13. Wer hat das Epos 'Parzival' geschrieben?",
    question_tr: "13. 'Parzival' destanını kim yazmıştır?",
    options: [
      { de: "Wolfram von Eschenbach", tr: "Wolfram von Eschenbach" },
      { de: "Hartmann von Aue", tr: "Hartmann von Aue" },
      { de: "Gottfried von Straßburg", tr: "Gottfried von Straßburg" },
      { de: "Walther von der Vogelweide", tr: "Walther von der Vogelweide" }
    ],
    correctAnswer: 0,
    explanation_de: "Der höfische Versroman bzw. das Epos 'Parzival' wurde von Wolfram von Eschenbach verfasst.",
    explanation_tr: "'Parzival' adlı ünlü şövalye destanı Wolfram von Eschenbach tarafından yazılmıştır."
  },
  {
    id: 14,
    type: "multiple_choice",
    question_de: "14. Wer hat die Hofgesellschaft belustigt?",
    question_tr: "14. Saray sosyetesini (topluluğunu) kim eğlendirmiştir?",
    options: [
      { de: "Johannes Reuchlin", tr: "Johannes Reuchlin" },
      { de: "Neidhart von Reuenthal", tr: "Neidhart von Reuenthal" },
      { de: "Andreas Gryphius", tr: "Andreas Gryphius" },
      { de: "Martin Opitz", tr: "Martin Opitz" }
    ],
    correctAnswer: 1,
    explanation_de: "Neidhart von Reuenthal (N. von Reuenthal) belustigte die Hofgesellschaft mit seiner dörflichen Dichtung.",
    explanation_tr: "Neidhart von Reuenthal (N. von Reuenthal), köylüleri konu alan alaycı şiirleriyle saray topluluğunu eğlendirmiştir."
  },
  {
    id: 15,
    type: "multiple_choice",
    question_de: "15. Welches Wort ist ein Beispiel für die Tugend?",
    question_tr: "15. Hangi kelime (Orta Çağ şövalye) erdemine bir örnektir?",
    options: [
      { de: "Ablass", tr: "Endüljans (Günah affı belgesi)" },
      { de: "Vanitas", tr: "Fanilik / Geçicilik" },
      { de: "minne", tr: "minne (Saray aşkı / Yüce sevgi)" },
      { de: "Vernunft", tr: "Akıl / Sağduyu" }
    ],
    correctAnswer: 2,
    explanation_de: "'Minne' (die edle, höfische Liebe und Verehrung) ist ein zentrales Beispiel für die ritterlichen Tugenden.",
    explanation_tr: "'minne' (soylu saray aşkı), Yüksek Orta Çağ şövalye erdemlerinin (Tugend) en bilinen örneklerinden biridir."
  },
  {
    id: 16,
    type: "multiple_choice",
    question_de: "16. Wie ist die Dichtung des Späten Mittelalters?",
    question_tr: "16. Geç Orta Çağ'ın (Spätes Mittelalter) edebiyatı nasıldır?",
    options: [
      { de: "geistlich", tr: "dini / ruhani" },
      { de: "höfisch-ritterlich", tr: "saraylı ve şövalye odaklı" },
      { de: "heidnisch", tr: "putperest / pagan" },
      { de: "weltlich", tr: "dünyevi (weltlich)" }
    ],
    correctAnswer: 3,
    explanation_de: "Im Späten Mittelalter verlor die Kirche ihr Bildungsmonopol; die Dichtung wurde zunehmend weltlich und bürgerlich.",
    explanation_tr: "Geç Orta Çağ'da edebiyat dini ve saraylı kimliğinden sıyrılarak dünyevi (weltlich) bir nitelik kazanmıştır."
  },
  {
    id: 17,
    type: "multiple_choice",
    question_de: "17. Welche literarische Form war der Wegbereiter des deutschen Romans?",
    question_tr: "17. Hangi edebi biçim Alman romanının öncüsü (yol açıcısı) olmuştur?",
    options: [
      { de: "Volksbücher", tr: "Halk kitapları (Volksbücher)" },
      { de: "Zaubersprüche", tr: "Büyü sözleri" },
      { de: "Kirchenlieder", tr: "Kilise ilahileri" },
      { de: "Minnesang", tr: "Saray aşk şarkıları" }
    ],
    correctAnswer: 0,
    explanation_de: "Die im Späten Mittelalter und der frühen Neuzeit entstandenen Volksbücher waren die Wegbereiter des deutschen Prosaromans.",
    explanation_tr: "Halk kitapları (Volksbücher), manzum destanlardan düzyazıya geçişi sağlayarak Alman romanının öncüsü olmuştur."
  },
  {
    id: 18,
    type: "multiple_choice",
    question_de: "18. Wer verursachte die Entstehung der kürzeren Erzählungen?",
    question_tr: "18. Daha kısa anlatıların (hikâyelerin/novellaların) ortaya çıkmasına kim sebep olmuştur?",
    options: [
      { de: "William Shakespeare", tr: "William Shakespeare" },
      { de: "Giovanni Boccaccio", tr: "Giovanni Boccaccio" },
      { de: "Immanuel Kant", tr: "Immanuel Kant" },
      { de: "Wolfram von Eschenbach", tr: "Wolfram von Eschenbach" }
    ],
    correctAnswer: 1,
    explanation_de: "Der italienische Dichter Boccaccio (mit seinem 'Decamerone') gab den Anstoß für die Entstehung kürzerer Erzählungen.",
    explanation_tr: "İtalyan yazar Boccaccio ('Decameron' adlı eseriyle), kısa anlatı türünün doğmasına ve yayılmasına öncülük etmiştir."
  },
  {
    id: 19,
    type: "multiple_choice",
    question_de: "19. In welcher Zeitperiode sieht man die Renaissance, die Reformation und den Humanismus?",
    question_tr: "19. Rönesans, Reform ve Hümanizm akımlarını hangi dönemde görürüz?",
    options: [
      { de: "Frühes Mittelalter", tr: "Erken Orta Çağ" },
      { de: "Hohes Mittelalter", tr: "Yüksek Orta Çağ" },
      { de: "Spätes Mittelalter", tr: "Geç Orta Çağ (Spätes Mittelalter)" },
      { de: "Aufklärung", tr: "Aydınlanma Çağı" }
    ],
    correctAnswer: 2,
    explanation_de: "Im Übergang vom Späten Mittelalter zur Neuzeit treten Renaissance, Humanismus und Reformation auf.",
    explanation_tr: "Rönesans, Reform ve Hümanizm hareketleri Geç Orta Çağ (Spätes Mittelalter) döneminde görülmektedir."
  },

  // --- GÖRSEL 4 (Sorular 20 - 25) ---
  {
    id: 20,
    type: "multiple_choice",
    question_de: "20. Was haben die Gelehrten aus Konstantinopel nach Italien gebracht?",
    question_tr: "20. İstanbul'dan (Konstantinopolis) İtalya'ya giden bilginler yanlarında ne götürmüşlerdir?",
    options: [
      { de: "Germanische Runenschriften", tr: "Cermen runik yazılarını" },
      { de: "Mittelalterliche Ritterrüstungen", tr: "Orta Çağ şövalye zırhlarını" },
      { de: "Luthers deutsche Bibelübersetzung", tr: "Luther'in Almanca İncil çevirisini" },
      { de: "Manuskripte der antiken Schriftsteller", tr: "Antik Çağ yazarlarının el yazmalarını" }
    ],
    correctAnswer: 3,
    explanation_de: "Nach der Eroberung Konstantinopels (1453) brachten griechische Gelehrte die Manuskripte der antiken Schriftsteller nach Italien.",
    explanation_tr: "Konstantinopolis'ten İtalya'ya giden bilginler, Antik Çağ yazarlarının el yazmalarını (Manuskripte der Antiken Schriftsteller) götürerek Rönesans ve Hümanizm'i tetiklemiştir."
  },
  {
    id: 21,
    type: "multiple_choice",
    question_de: "21. In welcher Zeitperiode herrschte der Ruf 'Ad Fontes'?",
    question_tr: "21. 'Ad Fontes' (Kaynaklara dön!) çağrısı hangi dönemde hâkimdi?",
    options: [
      { de: "Der Humanismus", tr: "Hümanizm (der Humanismus)" },
      { de: "Die Germanische Zeitperiode", tr: "Cermen Dönemi" },
      { de: "Das Hohe Mittelalter", tr: "Yüksek Orta Çağ" },
      { de: "Der Barock", tr: "Barok Dönemi" }
    ],
    correctAnswer: 0,
    explanation_de: "Im Humanismus galt der Leitspruch 'Ad Fontes' (Zurück zu den Quellen der klassischen Antike).",
    explanation_tr: "Klasik antik kaynaklara dönüşü ifade eden 'Ad Fontes' sloganı Hümanizm (der Humanismus) döneminde hâkim olmuştur."
  },
  {
    id: 22,
    type: "multiple_choice",
    question_de: "22. Was wollte man im Humanismus von der Vormundschaft der Kirche befreien?",
    question_tr: "22. Hümanizmde kilisenin vesayetinden (baskısından) neyi kurtarmak istiyorlardı?",
    options: [
      { de: "Das Rittertum", tr: "Şövalyelik kurumunu" },
      { de: "Die Wissenschaft", tr: "Bilimi (Wissenschaft)" },
      { de: "Den Ablasshandel", tr: "Endüljans ticaretini" },
      { de: "Die Zaubersprüche", tr: "Büyü sözlerini" }
    ],
    correctAnswer: 1,
    explanation_de: "Die Humanisten strebten danach, die Wissenschaft und das Denken von der Vormundschaft der Kirche zu befreien.",
    explanation_tr: "Hümanistler, bilimi (Wissenschaft) kilisenin vesayetinden ve skolastik baskısından özgürleştirmeyi amaçlamışlardır."
  },
  {
    id: 23,
    type: "multiple_choice",
    question_de: "23. Wer hat gesagt, dass das Sprachverständnis Weltverständnis ist?",
    question_tr: "23. Dil anlayışının (bilgisinin) dünya anlayışı olduğunu kim söylemiştir?",
    options: [
      { de: "Martin Opitz", tr: "Martin Opitz" },
      { de: "Gotthold Ephraim Lessing", tr: "Gotthold Ephraim Lessing" },
      { de: "Johannes Reuchlin", tr: "Johannes Reuchlin" },
      { de: "Hans Jakob Christoffel von Grimmelshausen", tr: "H. J. C. von Grimmelshausen" }
    ],
    correctAnswer: 2,
    explanation_de: "Der bedeutende deutsche Humanist Johannes Reuchlin prägte den Gedanken, dass Sprachverständnis gleich Weltverständnis ist.",
    explanation_tr: "Alman hümanist Johannes Reuchlin, dili anlamanın dünyayı anlamak olduğunu (Sprachverständnis ist Weltverständnis) vurgulamıştır."
  },
  {
    id: 24,
    type: "multiple_choice",
    question_de: "24. Was war die Sprache der deutschen Gelehrten in der Reformation?",
    question_tr: "24. Reform döneminde Alman bilginlerin (akademisyenlerin) dili neydi?",
    options: [
      { de: "Das Altgriechische", tr: "Eski Yunanca" },
      { de: "Das Portugiesische", tr: "Portekizce" },
      { de: "Das Französische", tr: "Fransızca" },
      { de: "Das Latein", tr: "Latince (Das Latein)" }
    ],
    correctAnswer: 3,
    explanation_de: "Die Sprache der deutschen Gelehrten war in der Zeit des Humanismus und der Reformation das Latein.",
    explanation_tr: "Reform döneminde Alman bilginlerin bilim ve yazı dili Latince (Das Latein) idi."
  },
  {
    id: 25,
    type: "multiple_choice",
    question_de: "25. Wer hat die Bibel ins Deutsche übersetzt?",
    question_tr: "25. İncil'i Almancaya kim çevirmiştir?",
    options: [
      { de: "Martin Luther", tr: "Martin Luther" },
      { de: "Karl der Große", tr: "Büyük Karl" },
      { de: "Johannes Gutenberg", tr: "Johannes Gutenberg" },
      { de: "Johann Christoph Gottsched", tr: "Johann Christoph Gottsched" }
    ],
    correctAnswer: 0,
    explanation_de: "Martin Luther übersetzte das Neue Testament (1522) und später die gesamte Bibel ins Deutsche.",
    explanation_tr: "İncil'i Almancaya çevirerek ortak Alman yazı dilinin temellerini atan kişi Martin Luther'dir."
  },

  // --- GÖRSEL 5 (Sorular 26 - 31) ---
  {
    id: 26,
    type: "multiple_choice",
    question_de: "26. In welcher Zeitperiode wird das Wort 'Frühneuhochdeutsch' erwähnt?",
    question_tr: "26. 'Frühneuhochdeutsch' (Erken Yeni Yüksek Almanca) kavramı hangi dönemde anılmaktadır?",
    options: [
      { de: "Germanische Zeitperiode", tr: "Cermen Dönemi" },
      { de: "Die Reformation", tr: "Reform Dönemi (die Reformation)" },
      { de: "Hohes Mittelalter", tr: "Yüksek Orta Çağ" },
      { de: "Aufklärung", tr: "Aydınlanma Çağı" }
    ],
    correctAnswer: 1,
    explanation_de: "Durch Luthers Bibelübersetzung in der Reformation setzte sich das Frühneuhochdeutsch als gemeinsame Sprachform durch.",
    explanation_tr: "'Frühneuhochdeutsch' (Erken Yeni Yüksek Almanca), Luther'in İncil çevirisiyle birlikte Reform döneminde (die Reformation) öne çıkmıştır."
  },
  {
    id: 27,
    type: "multiple_choice",
    question_de: "27. Was brauchte der sündige Mensch nach Martin Luther nicht?",
    question_tr: "27. Martin Luther'e göre günahkâr insanın neye ihtiyacı yoktu?",
    options: [
      { de: "Den Glauben an Gott", tr: "Tanrı'ya olan inanca" },
      { de: "Die Heilige Schrift (Bibel)", tr: "Kutsal Kitap'a (İncil)" },
      { de: "Die Mittelschaft der Kirche", tr: "Kilisenin aracılığına (die Mittelschaft der Kirche)" },
      { de: "Die deutsche Sprache", tr: "Alman diline" }
    ],
    correctAnswer: 2,
    explanation_de: "Nach Martin Luther steht der Gläubige direkt vor Gott und braucht die Mittelschaft der Kirche (Papst und Priester) nicht.",
    explanation_tr: "Martin Luther'e göre günahkâr insan Tanrı ile doğrudan bağ kurabilir; kilisenin aracılığına (die Mittelschaft der Kirche) ihtiyacı yoktur."
  },
  {
    id: 28,
    type: "multiple_choice",
    question_de: "28. Gegen welche Gelder war Martin Luther?",
    question_tr: "28. Martin Luther hangi paralara (uygulamaya) karşıydı?",
    options: [
      { de: "Steuergeldern des Kaisers", tr: "İmparatorun vergi paralarına" },
      { de: "Handelsgeldern der Kaufleute", tr: "Tüccarların ticaret paralarına" },
      { de: "Theatergeldern des Adels", tr: "Soylu sınıfın tiyatro harcamalarına" },
      { de: "Ablassgeldern", tr: "Endüljans / Günah affı paralarına (Ablassgeldern)" }
    ],
    correctAnswer: 3,
    explanation_de: "Martin Luther kämpfte entschieden gegen den kirchlichen Verkauf von Ablassbriefen (Ablassgeldern) zur Sündenvergebung.",
    explanation_tr: "Martin Luther, kilisenin para karşılığında günahları affetmek için topladığı endüljans paralarına (Ablassgeldern) şiddetle karşı çıkmıştır."
  },
  {
    id: 29,
    type: "multiple_choice",
    question_de: "29. Wer hat seine fünfundneunzig Thesen an das Tor des Wittenberger Schlosses gehängt?",
    question_tr: "29. 95 Tez'ini Wittenberg Şatosu (Kilisesi) kapısına kim asmıştır?",
    options: [
      { de: "Martin Luther", tr: "Martin Luther" },
      { de: "Johannes Reuchlin", tr: "Johannes Reuchlin" },
      { de: "Erasmus von Rotterdam", tr: "Erasmus von Rotterdam" },
      { de: "Ulrich von Hutten", tr: "Ulrich von Hutten" }
    ],
    correctAnswer: 0,
    explanation_de: "Martin Luther schlug am 31. Oktober 1517 seine 95 Thesen an die Tür der Schlosskirche zu Wittenberg an.",
    explanation_tr: "95 Tez'ini Wittenberg Şato Kilisesi'nin kapısına asarak Reform hareketini başlatan kişi Martin Luther'dir."
  },
  {
    id: 30,
    type: "multiple_choice",
    question_de: "30. Woher kommt das Wort 'Barock'?",
    question_tr: "30. 'Barok' (Barock) kelimesi nereden (hangi dilden) gelmektedir?",
    options: [
      { de: "Aus dem Altenglischen", tr: "Eski İngilizceden" },
      { de: "Aus dem Portugiesischen", tr: "Portekizceden (Aus dem Portugiesischen)" },
      { de: "Aus dem Russischen", tr: "Rusçadan" },
      { de: "Aus dem Arabischen", tr: "Arapçadan" }
    ],
    correctAnswer: 1,
    explanation_de: "Das Wort 'Barock' stammt aus dem Portugiesischen ('barroco') und bezeichnete ursprünglich eine unregelmäßig geformte Perle.",
    explanation_tr: "'Barock' kelimesi Portekizceden (Aus dem Portugiesischen - 'barroco') gelmektedir ve düzensiz şekilli inci anlamını taşır."
  },
  {
    id: 31,
    type: "multiple_choice",
    question_de: "31. Was führte zum Dreißigjährigen Krieg?",
    question_tr: "31. Otuz Yıl Savaşları'na (30. Jähriger Krieg) ne yol açmıştır?",
    options: [
      { de: "Die Entdeckung Amerikas", tr: "Amerika'nın keşfi" },
      { de: "Die Gründung der Sprachgesellschaften", tr: "Dil cemiyetlerinin kurulması" },
      { de: "Fanatische Zuspitzung zwischen den Konfessionen", tr: "Mezhepler arasındaki fanatik gerilim / çatışma" },
      { de: "Der Streit zwischen Gottsched und Bodmer", tr: "Gottsched ile Bodmer arasındaki edebi tartışma" }
    ],
    correctAnswer: 2,
    explanation_de: "Die fanatische Zuspitzung zwischen den christlichen Konfessionen (Katholiken und Protestanten) führte zum Dreißigjährigen Krieg (1618–1648).",
    explanation_tr: "Mezhepler arasındaki fanatik kutuplaşma ve gerilim (Fanatische Zuspitzung zwischen den Konfessionen) Otuz Yıl Savaşları'na neden olmuştur."
  },

  // --- GÖRSEL 6 (Sorular 32 - 37) ---
  {
    id: 32,
    type: "multiple_choice",
    question_de: "32. Zwischen welchen Begriffen wurden die Gemüter in der Barockzeit zerrissen?",
    question_tr: "32. Barok döneminde insanların ruhları/zihinleri hangi kavramlar arasında ikiye bölünmüştür?",
    options: [
      { de: "Adel <-> Bürgertum", tr: "Soyluluk <-> Burjuvazi" },
      { de: "Klassik <-> Romantik", tr: "Klasisizm <-> Romantizm" },
      { de: "Mündlichkeit <-> Schriftlichkeit", tr: "Sözlülük <-> Yazılılık" },
      { de: "Ewigkeit <-> Vergänglichkeit", tr: "Ebediyet (Sonsuzluk) <-> Fanilik (Geçicilik)" }
    ],
    correctAnswer: 3,
    explanation_de: "Das Lebensgefühl des Barock war geprägt von der antithetischen Zerrissenheit zwischen Ewigkeit (Jenseits) und Vergänglichkeit (Vanitas/Diesseits).",
    explanation_tr: "Barok döneminde zihinler Ebediyet ve Fanilik (Ewigkeit <-> Vergänglichkeit) kavramları arasındaki derin çelişkiyle sarsılmıştır."
  },
  {
    id: 33,
    type: "multiple_choice",
    question_de: "33. Wer ist der Theoretiker der Barockzeit?",
    question_tr: "33. Barok döneminin edebiyat kuramcısı (teorisyeni) kimdir?",
    options: [
      { de: "Martin Opitz", tr: "Martin Opitz" },
      { de: "Johann Christoph Gottsched", tr: "Johann Christoph Gottsched" },
      { de: "Wolfram von Eschenbach", tr: "Wolfram von Eschenbach" },
      { de: "Immanuel Kant", tr: "Immanuel Kant" }
    ],
    correctAnswer: 0,
    explanation_de: "Martin Opitz gilt mit seinem 'Buch von der Deutschen Poeterey' (1624) als der wichtigste Literaturtheoretiker der Barockzeit.",
    explanation_tr: "Martin Opitz, 'Buch von der Deutschen Poeterey' adlı eseriyle Barok döneminin en önemli kuramcısıdır."
  },
  {
    id: 34,
    type: "multiple_choice",
    question_de: "34. In welcher Form des Theaterspiels überlebt der Held?",
    question_tr: "34. Tiyatro oyununun hangi türünde kahraman hayatta kalır?",
    options: [
      { de: "In der Tragödie (Trauerspiel)", tr: "Tragedyada (Trajedide)" },
      { de: "In der Komödie", tr: "Komedyada (der Komödie)" },
      { de: "Im Märtyrerdrama", tr: "Şehitlik dramında" },
      { de: "Im Heldenepos", tr: "Kahramanlık destanında" }
    ],
    correctAnswer: 1,
    explanation_de: "Während der Held in der Tragödie scheitert oder stirbt, überlebt er in der Komödie (Lustspiel) und es gibt ein glückliches Ende.",
    explanation_tr: "Tragedyada kahraman yıkıma uğrarken, komedyada (der Komödie) kahraman hayatta kalır ve oyun mutlu sonla biter."
  },
  {
    id: 35,
    type: "multiple_choice",
    question_de: "35. In welcher Zeitperiode wurden die Sprachgesellschaften gegründet?",
    question_tr: "35. Dil cemiyetleri (Sprachgesellschaften) hangi dönemde kurulmuştur?",
    options: [
      { de: "Frühes Mittelalter", tr: "Erken Orta Çağ" },
      { de: "Humanismus", tr: "Hümanizm" },
      { de: "Barock", tr: "Barok (Barock)" },
      { de: "Aufklärung", tr: "Aydınlanma Çağı" }
    ],
    correctAnswer: 2,
    explanation_de: "Im Barock (17. Jahrhundert) wurden zahlreiche deutsche Sprachgesellschaften (wie die Fruchtbringende Gesellschaft) gegründet.",
    explanation_tr: "Alman dilini korumak ve geliştirmek amacıyla kurulan dil cemiyetleri Barok (Barock) döneminde ortaya çıkmıştır."
  },
  {
    id: 36,
    type: "multiple_choice",
    question_de: "36. Wovon wollte man die deutsche Sprache reinhalten?",
    question_tr: "36. Alman dilini neden (neyden) arındırmak ve temiz tutmak istiyorlardı?",
    options: [
      { de: "Von mittelalterlichen Reimen", tr: "Orta Çağ kafiyelerinden" },
      { de: "Von religiösen Begriffen", tr: "Dini kavramlardan" },
      { de: "Von wissenschaftlichen Texten", tr: "Bilimsel metinlerden" },
      { de: "Von fremden Einflüssen", tr: "Yabancı etkilerden (von fremden Einflüssen)" }
    ],
    correctAnswer: 3,
    explanation_de: "Die Sprachgesellschaften des Barock wollten die deutsche Sprache von fremden Einflüssen (Fremdwörtern, besonders aus dem Französischen und Lateinischen) reinhalten.",
    explanation_tr: "Barok dönemi dil cemiyetleri, Almancayı yabancı etkilerden ve yabancı kelimelerden (von fremden Einflüssen) temiz tutmayı amaçlamıştır."
  },
  {
    id: 37,
    type: "multiple_choice",
    question_de: "37. Wer ist das erste dramatische Genie in der Barockzeit?",
    question_tr: "37. Barok dönemindeki ilk dramatik deha (tiyatro dehası) kimdir?",
    options: [
      { de: "Andreas Gryphius", tr: "Andreas Gryphius" },
      { de: "Martin Luther", tr: "Martin Luther" },
      { de: "Neidhart von Reuenthal", tr: "Neidhart von Reuenthal" },
      { de: "Johann Joachim Winckelmann", tr: "Johann Joachim Winckelmann" }
    ],
    correctAnswer: 0,
    explanation_de: "Andreas Gryphius gilt mit seinen bedeutenden Trauerspielen und Komödien als das erste große dramatische Genie der deutschen Barockzeit.",
    explanation_tr: "Andreas Gryphius, yazdığı trajedi ve komedilerle Barok döneminin ilk büyük dramatik dehası kabul edilir."
  },

  // --- GÖRSEL 7 (Sorular 38 - 44) ---
  {
    id: 38,
    type: "multiple_choice",
    question_de: "38. Was sind die drei Einheiten (im Drama)?",
    question_tr: "38. (Tiyatroda/Dramada) Üç Birlik Kuralı nedir?",
    options: [
      { de: "Glaube, Liebe und Hoffnung", tr: "İnanç, Sevgi ve Umut" },
      { de: "Ort, Zeit und Handlung", tr: "Yer (Mekân), Zaman ve Olay (Eylem) Birliği" },
      { de: "Anfang, Mitte und Ende", tr: "Başlangıç, Orta ve Son" },
      { de: "Autor, Werk und Leser", tr: "Yazar, Eser ve Okuyucu" }
    ],
    correctAnswer: 1,
    explanation_de: "Die aristotelischen drei Einheiten des klassischen Dramas sind die Einheit von Ort, Zeit und Handlung.",
    explanation_tr: "Tiyatrodaki üç birlik kuralı; Yer, Zaman ve Olay/Eylem birliğidir (Ort, Zeit und Handlung)."
  },
  {
    id: 39,
    type: "multiple_choice",
    question_de: "39. Woraus entwickelte sich der Prosaroman?",
    question_tr: "39. Düzyazı roman (Prosaroman) neyden gelişerek ortaya çıkmıştır?",
    options: [
      { de: "Aus den Merseburger Zaubersprüchen", tr: "Merseburg Büyü Sözleri'nden" },
      { de: "Aus den geistlichen Kirchenliedern", tr: "Dini kilise ilahilerinden" },
      { de: "Aus den höfischen Versepen", tr: "Saray manzum destanlarından (aus den höfischen Versepen)" },
      { de: "Aus den antiken Tragödien", tr: "Antik trajedilerden" }
    ],
    correctAnswer: 2,
    explanation_de: "Der deutsche Prosaroman entwickelte sich durch die Auflösung und Prosaauflösung aus den mittelalterlichen höfischen Versepen.",
    explanation_tr: "Düzyazı roman (Prosaroman), Orta Çağ'daki saray manzum destanlarının (aus den höfischen Versepen) düzyazıya aktarılmasıyla gelişmiştir."
  },
  {
    id: 40,
    type: "multiple_choice",
    question_de: "40. Wer ist der Vertreter des Schelmenromans?",
    question_tr: "40. Pikaresk romanın / Çapkın-Dolandırıcı romanının (Schelmenroman) temsilcisi kimdir?",
    options: [
      { de: "Gotthold Ephraim Lessing", tr: "Gotthold Ephraim Lessing" },
      { de: "Wolfram von Eschenbach", tr: "Wolfram von Eschenbach" },
      { de: "Martin Opitz", tr: "Martin Opitz" },
      { de: "Hans Jakob Christoffel von Grimmelshausen", tr: "Grimmelshausen" }
    ],
    correctAnswer: 3,
    explanation_de: "H. J. C. von Grimmelshausen ist mit seinem Werk 'Der abenteuerliche Simplicissimus' der bedeutendste Vertreter des deutschen Schelmenromans.",
    explanation_tr: "Grimmelshausen ('Simplicissimus' eseriyle), Alman edebiyatında pikaresk romanın (Schelmenroman) en önemli temsilcisidir."
  },
  {
    id: 41,
    type: "multiple_choice",
    question_de: "41. Was hat er (Grimmelshausen) geschrieben?",
    question_tr: "41. O (Grimmelshausen) ne yazmıştır (edebiyat tarihindeki önemi nedir)?",
    options: [
      { de: "Den ersten Bildungsroman (der erste Bildungsroman)", tr: "İlk gelişim/oluşum romanını (der erste Bildungsroman)" },
      { de: "Die erste deutsche Bibelübersetzung", tr: "İlk Almanca İncil çevirisini" },
      { de: "Das erste bürgerliche Trauerspiel", tr: "İlk burjuva trajedisini" },
      { de: "Die ersten Merseburger Zaubersprüche", tr: "İlk Merseburg büyü sözlerini" }
    ],
    correctAnswer: 0,
    explanation_de: "Grimmelshausens 'Simplicissimus' schildert die Entwicklung eines jungen Menschen und gilt zugleich als der erste Bildungsroman.",
    explanation_tr: "Grimmelshausen, bireyin içsel ve dışsal gelişimini konu alan ilk oluşum/gelişim romanını (der erste Bildungsroman) yazmıştır."
  },
  {
    id: 42,
    type: "multiple_choice",
    question_de: "42. In welcher Zeitperiode verminderte die Philosophie der Rationalisten den Einfluss dogmatischer Theorie?",
    question_tr: "42. Rasyonalistlerin (akılcıların) felsefesi dogmatik teorinin etkisini hangi dönemde azaltmıştır?",
    options: [
      { de: "Frühes Mittelalter", tr: "Erken Orta Çağ" },
      { de: "Aufklärung", tr: "Aydınlanma Çağı (Aufklärung)" },
      { de: "Germanische Zeitperiode", tr: "Cermen Dönemi" },
      { de: "Hohes Mittelalter", tr: "Yüksek Orta Çağ" }
    ],
    correctAnswer: 1,
    explanation_de: "In der Aufklärung (18. Jahrhundert) drängte der Rationalismus den Einfluss kirchlich-dogmatischer Theorien zurück.",
    explanation_tr: "Aydınlanma Çağı'nda (Aufklärung), rasyonalist felsefe kilise dogmalarının ve kör inancın etkisini kırmıştır."
  },
  {
    id: 43,
    type: "multiple_choice",
    question_de: "43. Was ist ein Kennzeichen der Aufklärung?",
    question_tr: "43. Aydınlanma Çağı'nın (Aufklärung) temel bir özelliği/belirtisi nedir?",
    options: [
      { de: "Der Ablasshandel", tr: "Endüljans ticareti" },
      { de: "Der religiöse Fanatismus", tr: "Dini fanatizm" },
      { de: "Die Toleranz", tr: "Hoşgörü (die Toleranz)" },
      { de: "Das Lehenswesen", tr: "Feodal derebeylik sistemi" }
    ],
    correctAnswer: 2,
    explanation_de: "Die Toleranz (insbesondere die religiöse und weltanschauliche Duldung) ist eines der wichtigsten Kennzeichen der Aufklärung.",
    explanation_tr: "Hoşgörü (die Toleranz), Aydınlanma Çağı'nın en temel ve ayırt edici özelliklerinden biridir."
  },
  {
    id: 44,
    type: "multiple_choice",
    question_de: "44. Wo hat man das Glück in der Aufklärung gefunden?",
    question_tr: "44. Aydınlanma Çağı'nda mutluluk nerede aranmış ve bulunmuştur?",
    options: [
      { de: "Im Jenseits (nach dem Tod)", tr: "Öteki dünyada (ölümden sonra)" },
      { de: "In der Weltflucht und Askese", tr: "Dünyadan el etek çekmede ve çilecilikte" },
      { de: "Auf dem Schlachtfeld", tr: "Savaş meydanında" },
      { de: "Im Diesseits (in Diesseits)", tr: "Bu dünyada / Yeryüzünde (in Diesseits)" }
    ],
    correctAnswer: 3,
    explanation_de: "Anders als im Mittelalter und Barock suchte und fand der Mensch der Aufklärung sein Glück im Diesseits (im irdischen Leben).",
    explanation_tr: "Aydınlanma Çağı insanı, mutluluğu öteki dünyada değil, bu dünyada (in Diesseits) akıl ve erdemle yaşamakta bulmuştur."
  },

  // --- GÖRSEL 8 (Sorular 45 - 50) ---
  {
    id: 45,
    type: "multiple_choice",
    question_de: "45. Wer ist der wichtigste Philosoph der Aufklärung?",
    question_tr: "45. Aydınlanma Çağı'nın en önemli filozofu kimdir?",
    options: [
      { de: "Immanuel Kant", tr: "Immanuel Kant" },
      { de: "Wolfram von Eschenbach", tr: "Wolfram von Eschenbach" },
      { de: "Karl der Große", tr: "Büyük Karl" },
      { de: "Andreas Gryphius", tr: "Andreas Gryphius" }
    ],
    correctAnswer: 0,
    explanation_de: "Immanuel Kant (1724–1804) ist der bedeutendste Philosoph der deutschen und europäischen Aufklärung.",
    explanation_tr: "Immanuel Kant, Alman Aydınlanma felsefesinin (Aufklärung) en büyük ve en etkili filozofudur."
  },
  {
    id: 46,
    type: "multiple_choice",
    question_de: "46. Was ist das Symbol der Aufklärung?",
    question_tr: "46. Aydınlanma Çağı'nın sembolü nedir?",
    options: [
      { de: "Die unregelmäßige Perle", tr: "Düzensiz şekilli inci" },
      { de: "Die Sonne", tr: "Güneş (die Sonne)" },
      { de: "Das Schwert und das Schild", tr: "Kılıç ve kalkan" },
      { de: "Die blaue Blume", tr: "Mavi çiçek" }
    ],
    correctAnswer: 1,
    explanation_de: "Die Sonne (bzw. das Licht der Vernunft, das die Dunkelheit der Unwissenheit vertreibt) ist das zentrale Symbol der Aufklärung.",
    explanation_tr: "Cehaletin karanlığını aydınlatan aklın ışığını temsil eden Güneş (die Sonne), Aydınlanma Çağı'nın sembolüdür."
  },
  {
    id: 47,
    type: "multiple_choice",
    question_de: "47. In welcher Zeitperiode spricht man von der 'selbstverschuldeten Unmündigkeit'?",
    question_tr: "47. İnsanın 'kendi suçu olan erginleşmemişlik / rüştünü kazanamama' (selbstverschuldete Unmündigkeit) durumundan hangi dönemde bahsedilir?",
    options: [
      { de: "Germanische Zeitperiode", tr: "Cermen Dönemi" },
      { de: "Hohes Mittelalter", tr: "Yüksek Orta Çağ" },
      { de: "Aufklärung", tr: "Aydınlanma Çağı (Aufklärung)" },
      { de: "Barock", tr: "Barok Dönemi" }
    ],
    correctAnswer: 2,
    explanation_de: "Kant definierte in der Aufklärung: 'Aufklärung ist der Ausgang des Menschen aus seiner selbstverschuldeten Unmündigkeit.'",
    explanation_tr: "Immanuel Kant'ın ünlü tanımıyla 'kendi suçu olan erginleşmemişlikten çıkış' kavramı Aydınlanma Çağı'na (Aufklärung) aittir."
  },
  {
    id: 48,
    type: "multiple_choice",
    question_de: "48. Was ist der Wahlspruch der Aufklärung?",
    question_tr: "48. Aydınlanma Çağı'nın parolası (sloganı/mottosu) nedir?",
    options: [
      { de: "Memento mori", tr: "Memento mori (Ölümü hatırla!)" },
      { de: "Ad Fontes", tr: "Ad Fontes (Kaynaklara dön!)" },
      { de: "Ora et labora", tr: "Ora et labora (Dua et ve çalış!)" },
      { de: "Sapere Aude", tr: "Sapere Aude (Aklını kullanma cesaretini göster!)" }
    ],
    correctAnswer: 3,
    explanation_de: "'Sapere Aude!' (Habe Mut, dich deines eigenen Verstandes zu bedienen!) ist nach Kant der Wahlspruch der Aufklärung.",
    explanation_tr: "'Sapere Aude' (Bilmeye cesaret et / Kendi aklını kullanma cesaretini göster!), Aydınlanma Çağı'nın temel parolasıdır."
  },
  {
    id: 49,
    type: "multiple_choice",
    question_de: "49. Wer ist der Theoretiker der Aufklärung?",
    question_tr: "49. Aydınlanma Çağı'nın edebiyat kuramcısı (teorisyeni) kimdir?",
    options: [
      { de: "Johann Christoph Gottsched", tr: "Gottsched" },
      { de: "Martin Opitz", tr: "Martin Opitz" },
      { de: "Hartmann von Aue", tr: "Hartmann von Aue" },
      { de: "Neidhart von Reuenthal", tr: "Neidhart von Reuenthal" }
    ],
    correctAnswer: 0,
    explanation_de: "Johann Christoph Gottsched war mit seinem Werk 'Versuch einer Critischen Dichtkunst' der führende Literaturtheoretiker der frühen Aufklärung.",
    explanation_tr: "Gottsched, akılcı kurallara dayanan poetikasıyla Aydınlanma Çağı'nın (Aufklärung) en önemli edebiyat kuramcısıdır."
  },
  {
    id: 50,
    type: "multiple_choice",
    question_de: "50. Gegen wen waren Bodmer und Breitinger?",
    question_tr: "50. İsviçreli bilginler Bodmer ve Breitinger kime karşı çıkmışlardır?",
    options: [
      { de: "Gegen Martin Luther", tr: "Martin Luther'e karşı" },
      { de: "Gegen Gottsched", tr: "Gottsched'e karşı (Gottsched)" },
      { de: "Gegen William Shakespeare", tr: "William Shakespeare'e karşı" },
      { de: "Gegen Immanuel Kant", tr: "Immanuel Kant'a karşı" }
    ],
    correctAnswer: 1,
    explanation_de: "Die Schweizer Literaturtheoretiker Bodmer und Breitinger wandten sich im Leipziger-Zürcher Literaturstreit gegen Gottscheds starren Rationalismus.",
    explanation_tr: "Bodmer ve Breitinger, sanatta hayal gücünü ve mucizevi olanı savunarak Gottsched'in katı kuralcılığına karşı çıkmışlardır."
  },

  // --- GÖRSEL 9 (Sorular 51 - 56) ---
  {
    id: 51,
    type: "multiple_choice",
    question_de: "51. Wer entspricht dem deutschen Geschmack nach Lessing?",
    question_tr: "51. Lessing'e göre Alman sanat/tiyatro zevkine kim uymaktadır?",
    options: [
      { de: "Pierre Corneille", tr: "Pierre Corneille" },
      { de: "Jean Racine", tr: "Jean Racine" },
      { de: "William Shakespeare", tr: "Shakespeare" },
      { de: "Giovanni Boccaccio", tr: "Giovanni Boccaccio" }
    ],
    correctAnswer: 2,
    explanation_de: "Im 17. Literaturbrief erklärte Lessing, dass das Genie William Shakespeares dem deutschen Geschmack viel mehr entspricht als das französische Theater.",
    explanation_tr: "Lessing, Fransız klasisizmi yerine Shakespeare'in doğal ve güçlü tiyatrosunun Alman zevkine çok daha uygun olduğunu savunmuştur."
  },
  {
    id: 52,
    type: "multiple_choice",
    question_de: "52. Wer hat das Werk 'Nathan der Weise' geschrieben?",
    question_tr: "52. 'Bilge Nathan' (Nathan der Weise) adlı eseri kim yazmıştır?",
    options: [
      { de: "Andreas Gryphius", tr: "Andreas Gryphius" },
      { de: "Johann Christoph Gottsched", tr: "Johann Christoph Gottsched" },
      { de: "Hans Jakob Christoffel von Grimmelshausen", tr: "Grimmelshausen" },
      { de: "Gotthold Ephraim Lessing", tr: "Lessing" }
    ],
    correctAnswer: 3,
    explanation_de: "Das dramatische Gedicht 'Nathan der Weise' (mit der berühmten Ringparabel über religiöse Toleranz) wurde 1779 von Lessing geschrieben.",
    explanation_tr: "Dinler arası hoşgörüyü yüzük meseliyle anlatan 'Nathan der Weise' (Bilge Nathan) eseri Lessing tarafından yazılmıştır."
  },
  {
    id: 53,
    type: "multiple_choice",
    question_de: "53. Welches Werk von Lessing wurde im Dritten Reich verboten?",
    question_tr: "53. Lessing'in hangi eseri Üçüncü Reich (Nazi Almanyası) döneminde yasaklanmıştır?",
    options: [
      { de: "Nathan der Weise", tr: "Nathan der Weise (Bilge Nathan)" },
      { de: "Minna von Barnhelm", tr: "Minna von Barnhelm" },
      { de: "Emilia Galotti", tr: "Emilia Galotti" },
      { de: "Laokoon", tr: "Laokoon" }
    ],
    correctAnswer: 0,
    explanation_de: "Wegen seiner Botschaft der religiösen Toleranz und der edlen jüdischen Hauptfigur wurde 'Nathan der Weise' im Dritten Reich verboten.",
    explanation_tr: "Yahudi bir bilgeyi başkahraman yapması ve hoşgörü mesajı vermesi nedeniyle 'Nathan der Weise' Nazi döneminde (Drittes Reich) yasaklanmıştır."
  },
  {
    id: 54,
    type: "multiple_choice",
    question_de: "54. Wessen Gedanken haben die Griechenbegeisterung der deutschen Klassik geprägt?",
    question_tr: "54. Kimin düşünceleri Alman Klasisizmi'ndeki Yunan hayranlığını şekillendirmiştir?",
    options: [
      { de: "Martin Opitz", tr: "Martin Opitz" },
      { de: "Johann Joachim Winckelmann", tr: "Winckelmann" },
      { de: "Johannes Reuchlin", tr: "Johannes Reuchlin" },
      { de: "Wolfram von Eschenbach", tr: "Wolfram von Eschenbach" }
    ],
    correctAnswer: 1,
    explanation_de: "Winckelmanns Ideal der 'edlen Einfalt und stillen Größe' prägte die Griechenbegeisterung der deutschen Klassik maßgeblich.",
    explanation_tr: "Arkeolog ve sanat tarihçisi Winckelmann'ın düşünceleri, Alman Klasisizmi'nin Antik Yunan hayranlığını derinden şekillendirmiştir."
  },
  {
    id: 55,
    type: "multiple_choice",
    question_de: "55. Welche kleinen Bewegungen gibt es in der Aufklärung, die gefühlsbetont sind?",
    question_tr: "55. Aydınlanma Çağı içinde yer alan ve duygu ağırlıklı (hissi) olan küçük akımlar hangileridir?",
    options: [
      { de: "Der Humanismus und die Reformation", tr: "Hümanizm ve Reform" },
      { de: "Der Minnesang und die Volksbücher", tr: "Minnesang ve Halk Kitapları" },
      { de: "Die Empfindsamkeit und der Pietismus", tr: "Empfindsamkeit (Duyarlılık) ve Pietismus (Tasavvufi/Duygusal Dindarlık)" },
      { de: "Der Rationalismus und der Klassizismus", tr: "Rasyonalizm ve Klasisizm" }
    ],
    correctAnswer: 2,
    explanation_de: "Parallel zur rationalen Aufklärung betonten die Empfindsamkeit (im Säkularen) und der Pietismus (im Religiösen) das tiefe Gefühl.",
    explanation_tr: "Aydınlanma Çağı'nda duyguları ön plana çıkaran iki alt akım 'die Empfindsamkeit und der Pietismus' (Duyarlılık ve Pietizm) olmuştur."
  },
  {
    id: 56,
    type: "multiple_choice",
    question_de: "56. In welcher Zeitperiode spricht man von der Vernunft?",
    question_tr: "56. Hangi dönemde 'Akıl'dan (Vernunft) temel ilke olarak bahsedilir?",
    options: [
      { de: "Germanische Zeitperiode", tr: "Cermen Dönemi" },
      { de: "Frühes Mittelalter", tr: "Erken Orta Çağ" },
      { de: "Barock", tr: "Barok Dönemi" },
      { de: "Aufklärung", tr: "Aydınlanma Çağı (Aufklärung)" }
    ],
    correctAnswer: 3,
    explanation_de: "In der Aufklärung gilt die menschliche Vernunft (Ratio) als oberster Maßstab für Erkenntnis, Moral und Gesellschaft.",
    explanation_tr: "Akıl (Vernunft), Aydınlanma Çağı'nın (Aufklärung) en merkezi kavramı ve yol gösterici ilkesidir."
  },

  // --- GÖRSEL 10 (Doğru / Yanlış Soruları 1 - 10 -> ID 57 - 66) ---
  {
    id: 57,
    type: "true_false",
    question_de: "R/F 1: Wolfram von Eschenbach war ein Reformator.",
    question_tr: "D/Y 1: Wolfram von Eschenbach bir reformcuydu (Reform dönemi din adamıydı).",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 1,
    explanation_de: "Falsch! Wolfram von Eschenbach war kein Reformator, sondern ein höfischer Dichter des Hohen Mittelalters (Autor des 'Parzival'). Der berühmte Reformator war Martin Luther.",
    explanation_tr: "Yanlış! Wolfram von Eschenbach bir reformcu değil, Yüksek Orta Çağ'da 'Parzival' destanını yazan bir şövalye şairiydi. Ünlü reformcu Martin Luther'dir."
  },
  {
    id: 58,
    type: "true_false",
    question_de: "R/F 2: Ritterliche Tugenden gibt es im Frühen Mittelalter.",
    question_tr: "D/Y 2: Şövalyelik erdemleri (Ritterliche Tugenden) Erken Orta Çağ'da görülür.",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 1,
    explanation_de: "Falsch! Ritterliche Tugenden (wie Minne, Mâze, Triuwe) gehören in das Hohe Mittelalter, nicht in das geistlich geprägte Frühe Mittelalter.",
    explanation_tr: "Yanlış! Şövalyelik erdemleri Erken Orta Çağ'da değil, şövalye kültürünün zirveye ulaştığı Yüksek Orta Çağ'da (Hohes Mittelalter) görülür."
  },
  {
    id: 59,
    type: "true_false",
    question_de: "R/F 3: Merseburger Zaubersprüche wurden in der germanischen Zeitperiode gefunden (entstanden dort).",
    question_tr: "D/Y 3: Merseburg Büyü Sözleri (Merseburger Zaubersprüche) Cermen dönemine aittir.",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 0,
    explanation_de: "Richtig! Die Merseburger Zaubersprüche stammen aus der heidnisch-germanischen Zeitperiode und sind das älteste bekannte Beispiel für Zaubersprüche.",
    explanation_tr: "Doğru! Merseburg Büyü Sözleri, pagan Cermen dönemine (Germanische Zeitperiode) ait en eski sözlü büyü metinleridir."
  },
  {
    id: 60,
    type: "true_false",
    question_de: "R/F 4: 'Parzival' wurde von Hartmann von Aue geschrieben.",
    question_tr: "D/Y 4: 'Parzival' adlı eser Hartmann von Aue tarafından yazılmıştır.",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 1,
    explanation_de: "Falsch! Das Epos 'Parzival' wurde von Wolfram von Eschenbach geschrieben (Hartmann von Aue schrieb u. a. 'Erec', 'Iwein' und 'Der arme Heinrich').",
    explanation_tr: "Yanlış! 'Parzival' destanı Hartmann von Aue tarafından değil, Wolfram von Eschenbach tarafından yazılmıştır."
  },
  {
    id: 61,
    type: "true_false",
    question_de: "R/F 5: Die Dichtung des Frühen Mittelalters war höfisch.",
    question_tr: "D/Y 5: Erken Orta Çağ'ın edebiyatı saraylı (höfisch) nitelikteydi.",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 1,
    explanation_de: "Falsch! Die Dichtung des Frühen Mittelalters war geistlich (kirchlich). Erst im Hohen Mittelalter war die Dichtung höfisch.",
    explanation_tr: "Yanlış! Erken Orta Çağ edebiyatı saraylı (höfisch) değil, dini/ruhani (geistlich) nitelikteydi. Saray edebiyatı Yüksek Orta Çağ'dadır."
  },
  {
    id: 62,
    type: "true_false",
    question_de: "R/F 6: Das Wort 'Barock' bedeutet 'Perle'.",
    question_tr: "D/Y 6: 'Barok' (Barock) kelimesi '(düzensiz şekilli) inci' anlamına gelir.",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 0,
    explanation_de: "Richtig! Das aus dem Portugiesischen ('barroco') stammende Wort 'Barock' bedeutet eine unregelmäßig geformte Perle.",
    explanation_tr: "Doğru! Portekizceden gelen 'Barock' kelimesi, düzgün olmayan / yamuk şekilli 'inci' (Perle) anlamına gelmektedir."
  },
  {
    id: 63,
    type: "true_false",
    question_de: "R/F 7: Der Dreißigjährige Krieg war im Hohen Mittelalter.",
    question_tr: "D/Y 7: Otuz Yıl Savaşları Yüksek Orta Çağ'da gerçekleşmiştir.",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 1,
    explanation_de: "Falsch! Der Dreißigjährige Krieg (1618–1648) fand in der Barockzeit (17. Jahrhundert) statt, nicht im Hohen Mittelalter.",
    explanation_tr: "Yanlış! Otuz Yıl Savaşları (1618–1648) Yüksek Orta Çağ'da değil, 17. yüzyılda Barok döneminde yaşanmıştır."
  },
  {
    id: 64,
    type: "true_false",
    question_de: "R/F 8: Volksbücher entstanden in der germanischen Zeitperiode.",
    question_tr: "D/Y 8: Halk kitapları (Volksbücher) Cermen döneminde ortaya çıkmıştır.",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 1,
    explanation_de: "Falsch! Die Volksbücher entstanden im Späten Mittelalter (und der frühen Neuzeit) durch die Erfindung des Buchdrucks, nicht in der mündlichen germanischen Zeitperiode.",
    explanation_tr: "Yanlış! Halk kitapları (Volksbücher) sözlü Cermen döneminde değil, Geç Orta Çağ'da (Spätes Mittelalter) ortaya çıkmıştır."
  },
  {
    id: 65,
    type: "true_false",
    question_de: "R/F 9: Martin Opitz ist ein Theoretiker.",
    question_tr: "D/Y 9: Martin Opitz bir edebiyat kuramcısıdır (teorisyendir).",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 0,
    explanation_de: "Richtig! Martin Opitz ist der bedeutendste Literaturtheoretiker der Barockzeit ('Buch von der Deutschen Poeterey').",
    explanation_tr: "Doğru! Martin Opitz, Barok döneminin en önemli edebiyat kuramcısıdır (Theoretiker der Barockzeit)."
  },
  {
    id: 66,
    type: "true_false",
    question_de: "R/F 10: Lessing ist ein Reformator.",
    question_tr: "D/Y 10: Lessing bir din reformcusudur (Reformator).",
    options: [
      { de: "Richtig", tr: "Doğru" },
      { de: "Falsch", tr: "Yanlış" }
    ],
    correctAnswer: 1,
    explanation_de: "Falsch! Gotthold Ephraim Lessing war der wichtigste Dichter und Dramatiker der Aufklärung, kein kirchlicher Reformator des 16. Jahrhunderts.",
    explanation_tr: "Yanlış! Lessing bir Reform dönemi din adamı (Reformator) değil, 18. yüzyıl Aydınlanma Çağı'nın (Aufklärung) en önemli yazar ve oyun yazarıdır."
  }
];

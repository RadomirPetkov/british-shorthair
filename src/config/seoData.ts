// SEO metadata for all pages - supports English and Bulgarian

export interface PageSEO {
  en: {
    title: string
    description: string
    keywords: string
  }
  bg: {
    title: string
    description: string
    keywords: string
  }
}

export const seoData: Record<string, PageSEO> = {
  home: {
    en: {
      title: 'Home - British Shorthair Cattery',
      description: 'SilverGlow is a reputable British Shorthair and Longhair cattery specializing in Silver and Gold cats. Our kittens are raised at home, well-socialized, registered with pedigrees, and fully vaccinated.',
      keywords: 'British Shorthair cattery, British Shorthair kittens, Silver British Shorthair, Gold British Shorthair, British Longhair, pedigree cats, vaccinated kittens, SilverGlow'
    },
    bg: {
      title: 'Начало - Развъдник Британски Късокосмести Котки',
      description: 'SilverGlow е реномиран развъдник на британски късокосмести и дългокосмести котки със сребърен и златен окрас. Нашите котенца са отгледани в домашна среда, добре социализирани, регистрирани с родословие и напълно ваксинирани.',
      keywords: 'британски късокосмести котки, развъдник британски котки, сребърни британски котки, златни британски котки, британски дългокосмести, котенца с родословие, ваксинирани котенца, SilverGlow'
    }
  },
  aboutTheBreed: {
    en: {
      title: 'About the British Shorthair Breed',
      description: 'Discover the fascinating history, characteristics, and origins of the British Shorthair breed. Learn about one of the oldest and most beloved cat breeds in the world.',
      keywords: 'British Shorthair history, British Shorthair breed, cat breed information, British Shorthair origins, British cat breed, pedigreed cats'
    },
    bg: {
      title: 'За Породата Британска Късокосместа Котка',
      description: 'Открийте завладяващата история, характеристики и произход на британската късокосместа порода. Научете повече за една от най-старите и обичани котешки породи в света.',
      keywords: 'история на британските котки, британска късокосместа порода, информация за котешки породи, произход на британските котки, родословни котки'
    }
  },
  appearance: {
    en: {
      title: 'British Shorthair Appearance & Physical Traits',
      description: 'Explore the distinctive physical characteristics of British Shorthair cats including their round face, dense coat, stocky build, and various color patterns like Silver and Gold.',
      keywords: 'British Shorthair appearance, British Shorthair physical traits, round face cats, dense coat, Silver British Shorthair, Gold British Shorthair, British cat colors'
    },
    bg: {
      title: 'Външен Вид и Физически Характеристики на Британските Котки',
      description: 'Разгледайте отличителните физически характеристики на британските късокосмести котки - кръглото им лице, гъстата козина, здравата конституция и различните цветови вариации като сребърен и златен.',
      keywords: 'външен вид британски котки, физически характеристики, кръгло лице, гъста козина, сребърни британски котки, златни британски котки, цветове британски котки'
    }
  },
  personality: {
    en: {
      title: 'British Shorthair Personality & Temperament',
      description: 'Learn about the calm, affectionate, and gentle temperament of British Shorthair cats. Perfect family companions with easygoing personalities and loyalty.',
      keywords: 'British Shorthair personality, British Shorthair temperament, calm cats, family cats, gentle cats, loyal cats, cat behavior, British cat character'
    },
    bg: {
      title: 'Характер и Темперамент на Британските Котки',
      description: 'Научете за спокойния, нежен и обичлив характер на британските късокосмести котки. Перфектни семейни спътници с уравновесен темперамент и лоялност.',
      keywords: 'характер британски котки, темперамент, спокойни котки, семейни котки, нежни котки, лоялни котки, поведение на котки'
    }
  },
  gallery: {
    en: {
      title: 'Photo Gallery - Our Beautiful British Shorthair Cats',
      description: 'Browse our gallery of stunning British Shorthair cats and kittens. See photos of our Silver and Gold British Shorthairs in their loving home environment.',
      keywords: 'British Shorthair photos, British Shorthair gallery, cat pictures, Silver British Shorthair photos, Gold British Shorthair images, kitten photos'
    },
    bg: {
      title: 'Фото Галерия - Нашите Красиви Британски Котки',
      description: 'Разгледайте нашата галерия с красиви британски късокосмести котки и котенца. Вижте снимки на нашите сребърни и златни британци в домашна среда.',
      keywords: 'снимки британски котки, галерия, снимки на котки, сребърни британски котки снимки, златни британски котки, снимки котенца'
    }
  },
  kittens: {
    en: {
      title: 'Available Kittens - British Shorthair Kittens for Sale',
      description: 'View our currently available British Shorthair kittens for adoption. All kittens come with pedigree, vaccinations, and health guarantees. Contact us to reserve your kitten.',
      keywords: 'British Shorthair kittens for sale, available kittens, British Shorthair adoption, pedigree kittens, vaccinated kittens, Silver kittens for sale, Gold kittens'
    },
    bg: {
      title: 'Налични Котенца - Британски Късокосмести Котенца за Осиновяване',
      description: 'Разгледайте наличните британски късокосмести котенца за осиновяване. Всички котенца са с родословие, ваксинации и здравни гаранции. Свържете се с нас за резервация.',
      keywords: 'британски котенца за продажба, налични котенца, британски котки осиновяване, котенца с родословие, ваксинирани котенца, сребърни котенца, златни котенца'
    }
  },
  studs: {
    en: {
      title: 'Our Studs - Champion British Shorthair Males',
      description: 'Meet our champion British Shorthair stud males. Our breeding males have excellent pedigrees, show titles, and outstanding temperaments for producing quality kittens.',
      keywords: 'British Shorthair studs, breeding males, champion studs, British Shorthair males, pedigree studs, Silver stud males, Gold stud males'
    },
    bg: {
      title: 'Нашите Мъжки - Шампиони Британски Котки',
      description: 'Запознайте се с нашите шампион британски мъжки котки за развъждане. Мъжките ни имат отлични родословия, изложбени титли и изключителен темперамент.',
      keywords: 'британски мъжки котки, мъжки за развъждане, шампиони, британски котки мъжки, родословни мъжки, сребърни мъжки, златни мъжки'
    }
  },
  queens: {
    en: {
      title: 'Our Queens - Beautiful British Shorthair Females',
      description: 'Discover our beautiful British Shorthair queen females. Our breeding queens are carefully selected for their excellent health, temperament, and conformity to breed standards.',
      keywords: 'British Shorthair queens, breeding females, British Shorthair females, pedigree queens, Silver queens, Gold queens, British cat females'
    },
    bg: {
      title: 'Нашите Дами - Красиви Британски Женски Котки',
      description: 'Открийте нашите красиви британски женски котки за развъждане. Дамите ни са внимателно подбрани заради отличното им здраве, темперамент и съответствие със стандарта на породата.',
      keywords: 'британски женски котки, женски за развъждане, дами британски котки, родословни дами, сребърни дами, златни дами'
    }
  },
  feedback: {
    en: {
      title: 'Customer Reviews & Testimonials',
      description: 'Read testimonials and reviews from happy British Shorthair kitten owners. See what our customers say about their experience with SilverGlow cattery.',
      keywords: 'British Shorthair reviews, cattery testimonials, customer feedback, kitten reviews, breeder reviews, SilverGlow reviews, cat breeder testimonials'
    },
    bg: {
      title: 'Отзиви и Мнения на Клиенти',
      description: 'Прочетете отзиви и мнения от щастливи собственици на британски котенца. Вижте какво споделят нашите клиенти за техния опит с развъдник SilverGlow.',
      keywords: 'отзиви британски котки, отзиви развъдник, мнения клиенти, отзиви котенца, мнения за развъдник, SilverGlow отзиви'
    }
  },
  contact: {
    en: {
      title: 'Contact Us - Get in Touch',
      description: 'Contact SilverGlow British Shorthair cattery to inquire about available kittens, breeding program, or any questions. We are located in Stara Zagora, Bulgaria & Coventry, UK and ship worldwide.',
      keywords: 'contact British Shorthair cattery, contact breeder, British Shorthair Bulgaria, Stara Zagora cattery, Coventry cattery, cat breeder contact, kitten inquiry'
    },
    bg: {
      title: 'Контакти - Свържете се с Нас',
      description: 'Свържете се с развъдник SilverGlow за информация относно налични котенца, програма за развъждане или други въпроси. Намираме се в Стара Загора, България и Ковентри, Великобритания и изпращаме по целия свят.',
      keywords: 'контакт британски котки, контакт развъдник, британски котки България, Стара Загора развъдник, Ковентри развъдник, контакт с развъдник, запитване за котенца'
    }
  },
  faq: {
    en: {
      title: 'Frequently Asked Questions (FAQ)',
      description: 'Find answers to common questions about British Shorthair cats, our breeding program, kitten care, adoption process, pricing, and more.',
      keywords: 'British Shorthair FAQ, cat questions, kitten care, breeding questions, adoption process, British Shorthair information, cattery FAQ'
    },
    bg: {
      title: 'Често Задавани Въпроси (ЧЗВ)',
      description: 'Намерете отговори на често задавани въпроси относно британските котки, нашата програма за развъждане, грижа за котенца, процес на осиновяване, цени и др.',
      keywords: 'често задавани въпроси, въпроси за котки, грижа за котенца, въпроси за развъждане, процес на осиновяване, британски котки информация'
    }
  },
  aroundTheWorld: {
    en: {
      title: 'SilverGlow Around the World - Our Global Family',
      description: 'See where our British Shorthair kittens have found their forever homes around the world. We proudly serve customers internationally with safe shipping.',
      keywords: 'British Shorthair worldwide, international shipping, cats around the world, global cattery, British Shorthair export, international kitten delivery'
    },
    bg: {
      title: 'SilverGlow по Целия Свят - Нашето Глобално Семейство',
      description: 'Вижте къде нашите британски котенца са намерили своите вечни домове по целия свят. Гордо обслужваме клиенти международно с безопасна доставка.',
      keywords: 'британски котки по света, международна доставка, котки по света, глобален развъдник, експорт британски котки, международна доставка котенца'
    }
  }
}

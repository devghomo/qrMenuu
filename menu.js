document.addEventListener("DOMContentLoaded", function () {
    // Kategoriler ve ürünlerin verilerini içeren bir dizi oluşturalım
    var data = [
        {
            categoryName: "Fırın Ürünleri",
            categoryImage: "images/kategori/1.png",
            products: [
                {
                    name: "Sade Simit",
                    description: "",
                    price: "15₺",
                    image: "susamli-simit_menu_g1486_1440x810_QeIToTyH.jpg"
                },
                {
                    name: "Ankara Simidi",
                    description: "",
                    price: "15₺",
                    image: "ankara-simidi_menu_g1396_1440x810_cKLyzDo2.jpg"
                },
                {
                    name: "Tereyağlı Simit",
                    description: "",
                    price: "18.75₺",
                    image: "tereyagli-simit_menu_g1410_1440x810_5F1SQ9q1.jpg"
                },
                {
                    name: "Kaşarlı Simit",
                    description: "",
                    price: "24.75₺",
                    image: "simit-arasi-kasar_menu_g1406_1440x810_SdLCLmBt.jpg"
                },
                {
                    name: "Kaşarlı-Zeytinli Simit",
                    description: "",
                    price: "24.75₺",
                    image: "kasarli-zeytinli-simit_menu_g1401_1440x810_fGKvx2KF.jpg"
                },
                {
                    name: "Karışık Simit",
                    description: "",
                    price: "24.75₺",
                    image: "simit-arasi-kasarli-salamli_menu_g1407_1440x810_rCbIbF9T.jpg"
                },
                {
                    name: "Sade Poğaça",
                    description: "",
                    price: "16.25₺",
                    image: "sade-pogaca_menu_g1361_1440x810_mtC8lX7c.jpg"
                },
                {
                    name: "Peynirli Poğaça",
                    description: "",
                    price: "18.50₺",
                    image: "peynirli-pogaca_menu_g1360_1440x810_jvwXWPgo.jpg"
                },
                {
                    name: "Zeytinli Poğaça",
                    description: "",
                    price: "17.50₺",
                    image: "zeytinli-pogaca_menu_g1363_1440x810_GesFCKGe.jpg"
                },
                {
                    name: "Patatesli Poğaça",
                    description: "",
                    price: "17.50₺",
                    image: "patatesli-pogaca_menu_g1359_1440x810_sMgO3Uyj.jpg"
                },
                {
                    name: "Kaşarlı Poğaça",
                    description: "",
                    price: "18.75₺",
                    image: "kasarli-pogaca_menu_g1356_1440x810_UyFAScwq.jpg"
                },
                {
                    name: "Dereotlu Poğaça",
                    description: "",
                    price: "17.50₺",
                    image: "dereotlu-ev-coregi_menu_g1316_1440x810_8Qc6Bnuk.jpg"
                },
                {
                    name: "Sade Açma",
                    description: "",
                    price: "17.25₺",
                    image: "sade-pogaca_menu_g1361_1440x810_mtC8lX7c.jpg"
                },
                {
                    name: "Zeytinli Açma",
                    description: "",
                    price: "18.25₺",
                    image: "zeytinli-pogaca_menu_g1363_1440x810_GesFCKGe.jpg"
                },
                {
                    name: "Kaşarlı Açma",
                    description: "",
                    price: "18.75₺",
                    image: "kasarli-pogaca_menu_g1356_1440x810_UyFAScwq.jpg"
                },
                {
                    name: "Çikolatalı Açma",
                    description: "",
                    price: "17,50₺",
                    image: "cikolatali-findikli-acma-tarifi.jpg"
                },
                {
                    name: "Beyaz Peynirli Domatesli Simit Arası",
                    description: "",
                    price: "46₺",
                    image: "beyaz-peynirli-simit-sandvic_menu_g1364_1440x810_EsXkbOSm.jpg"
                },
                {
                    name: "Beyaz Peynirli Salamlı Simit Arası",
                    description: "",
                    price: "48₺",
                    image: "simit-arasi-kasarli-salamli_menu_g1407_1440x810_rCbIbF9T.jpg"
                },
                {
                    name: "Jambonlu Cheddar Peyniri Simit Arası",
                    description: "",
                    price: "50₺",
                    image: "jambonlu-sandvic_menu_g1366_1440x810_djp7Rq4X.jpg"
                },
                {
                    name: "Kaşarlı Simit Arası",
                    description: "",
                    price: "48₺",
                    image: "kasarli-simit_menu_g1400_1440x810_I8SnXtbU.jpg"
                },
                {
                    name: "Salamlı Simit Arası",
                    description: "",
                    price: "45₺",
                    image: "simit-arasi-kasarli-salamli_menu_g1407_1440x810_rCbIbF9T.jpg"
                },
                {
                    name: "Çikolatalı Simit Arası",
                    description: "",
                    price: "47₺",
                    image: "simit-arasi-nutellali_menu_g1408_1440x810_sBc4BxQv.jpg"
                },
                {
                    name: "Peynirli Rulo Börek",
                    description: "",
                    price: "26.25₺",
                    image: "borek-peynirli_menu_g1305_1920x1280_XzDZfAzl.jpg"
                },
                {
                    name: "Patatesli Rulo Börek",
                    description: "",
                    price: "26.25₺",
                    image: "borek-patatesli_menu_g1303_1920x1280_v5ffoYeu.jpg"
                },
                {
                    name: "Ispanak-Peynirli Rulo Börek",
                    description: "",
                    price: "26.25₺",
                    image: "borek-ispanak_menu_g2494_1920x1280_LpAgkqSn.jpg"
                },
                {
                    name: "Peynirli Gül Böreği",
                    description: "",
                    price: "28.25₺",
                    image: "patatesli-gul-boregi-one-cikan.webp"
                },
                {
                    name: "Patatesli Gül Böreği",
                    description: "",
                    price: "28.25₺",
                    image: "patatesli-gul-boregi-one-cikan.webp"
                },
                {
                    name: "Ispanaklı Gül Böreği",
                    description: "",
                    price: "28.25₺",
                    image: "kiymali-gul-boregi-tarifi-buse.jpg"
                },
                {
                    name: "Kıymalı Köy Böreği",
                    description: "",
                    price: "37.25₺",
                    image: "kiymali-koyboregi_menu_g1298_1920x1280_bkDO4xL3.jpg"
                },
                {
                    name: "Peynirli Su Böreği / Porsiyon",
                    description: "",
                    price: "36.75₺",
                    image: "suboregipeynirli.webp"
                },
                {
                    name: "Peynirli Su Böreği / Kg",
                    description: "",
                    price: "320₺",
                    image: "suboregipeynirli.webp"
                },
                {
                    name: "Patatesli Simitçi Dürüm",
                    description: "",
                    price: "28.75₺",
                    image: "sarma-borek_menu_g1299_1440x810_Ma86zMqq.jpg"
                },
                {
                    name: "Pizza Çeşitleri Mini",
                    description: "",
                    price: "36₺",
                    image: "pastane-usulu-mini-pizza-tarifi.jpg"
                },
                {
                    name: "Pide Çeşitleri",
                    description: "",
                    price: "36₺",
                    image: "kusbasili-pide-tarifi.jpg"
                },
                {
                    name: "Tepsi Böreği Çeşitleri",
                    description: "",
                    price: "29.75₺",
                    image: "tepsi-boregi-resimli-yemek-tarifi(15).jpg"
                },
                {
                    name: "Danish Çeşitleri",
                    description: "",
                    price: "28.5₺",
                    image: "images.jpg"
                },
                {
                    name: "Mini Kurabiye Çeşitleri / Adet",
                    description: "",
                    price: "12₺",
                    image: "kahveli_mini_kurabiyeler-ccbe0dd4-49ae-4f32-958a-0600b7980ce9.webp"
                },
                {
                    name: "Kurabiye / Kg",
                    description: "",
                    price: "180₺",
                    image: "kahveli_mini_kurabiyeler-ccbe0dd4-49ae-4f32-958a-0600b7980ce9.webp"
                },
                {
                    name: "Mini Kurabiye Çeşitleri / Porsiyon",
                    description: "",
                    price: "40₺",
                    image: "kahveli_mini_kurabiyeler-ccbe0dd4-49ae-4f32-958a-0600b7980ce9.webp"
                },
                {
                    name: "Portakallı Kurabiye",
                    description: "",
                    price: "22₺",
                    image: "cikolatali-portakalli-kurabiye-yildiz.webp"
                },
                {
                    name: "Tahinli Çörek",
                    description: "",
                    price: "35₺",
                    image: "tahinli-corek_menu_g1320_1440x810_vtjESb7L.jpg"
                },
                {
                    name: "Ay Çöreği",
                    description: "",
                    price: "32.25₺",
                    image: "ay-coregi_menu_g1314_1440x810_SfmoF6JY.jpg"
                },
                {
                    name: "Kruvasan",
                    description: "",
                    price: "35₺",
                    image: "kruvasan.webp"
                },
                {
                    name: "Strudel Çeşitleri",
                    description: "",
                    price: "24₺",
                    image: "strudel_menu_g1319_1440x810_yXNFKxJc.jpg"
                },
                {
                    name: "Dereotlu Ev Çöreği",
                    description: "",
                    price: "28₺",
                    image: "dereotlu-ev-coregi_menu_g1316_1440x810_8Qc6Bnuk.jpg"
                },
                {
                    name: "Donut Çeşitleri",
                    description: "",
                    price: "28₺",
                    image: "images (1).jpg"
                },
                {
                    name: "Muffin Çeşitleri",
                    description: "",
                    price: "35₺",
                    image: "muffin-cesitleri.png"
                },
                {
                    name: "Dilimli Kek Çeşitleri",
                    description: "",
                    price: "35₺",
                    image: "hqdefault.jpg"
                },
                {
                    name: "Peynir Beyaz",
                    price: "45₺",
                    description: "",
                    image: "zeytinana-sert-beyaz-peynir.jpg"
                },
                {
                    name: "Kaşar",
                    price: "45₺",
                    description: "",
                    image: "taze-kasar-peyniri-250-gr-5d6b92.webp"
                },
                {
                    name: "Zeytin",
                    price: "45₺",
                    description: "",
                    image: "yagli-siyah-zeytin-aydinli-amca-siyah-sele-zeytin-organik-siyah-zeytin-dogal-fermente-zeytin-en-iyi-siyah-zeytin-yagli-zeytin-aydin-zeytin-satisi-aydin-zeytin-fiyatlari-dogal-fermente-siyah-z.webp"
                },
                {
                    name: "Bal-Kaymak",
                    price: "47₺",
                    description: "",
                    image: "bal-kaymak-faydalari-3.jpg.webp"
                },
                {
                    name: "Bal",
                    price: "45₺",
                    description: "",
                    image: "bal-alirken-nelere-dikkat-etmeliyiz.jpeg",

                },
                {
                    name: "Kaymak",
                    price: "45₺",
                    description: "",
                    image: "rulo-kaymak-karakoy-gulluoglu-8a-406.jpg"
                },
                {
                    name: "Tereyağ",
                    price: "45₺",
                    description: "",
                    image: "1500x1500_thumb_nn002.jpg"
                },
                {
                    name: "Jambon",
                    price: "45₺",
                    description: "",
                    image: "35525649.webp"
                }
            ]
        },
        {
            categoryName: "Gözlemeler",
            categoryImage: "images/kategori/2.png",
            products: [
                {
                    name: "Ispanaklı Gözleme",
                    description: "Tereyağında pişirilmiş ıspanaklı gözleme yanında kızarmış patates, yeşillik, domates, salatalık.",
                    price: "160₺",
                    image: "ispanakli-gozleme_menu_g1453_1440x810_jhNOgVKV.jpg"
                },
                {
                    name: "Kıymalı Gözleme",
                    description: "Tereyağında pişirilmiş kıymalı gözleme yanında kızarmış patates, yeşillik, domates, salatalık.",
                    price: "165₺",
                    image: "kiymali-gozleme.png"
                },
                {
                    name: "Patatesli Gözleme",
                    description: "Tereyağında pişirilmiş patatesli gözleme yanında kızarmış patetes, yeşillik, domates, salatalık",
                    price: "160₺",
                    image: "patatesli-gozleme_menu_g1456_1440x810_NpHeVQwS.jpg"
                },
                {
                    name: "Kaşarlı Peynirli Gözleme",
                    description: "Tereyağında pişirilmiş kaşarlı gözleme yanında kızarmış patates, yeşillik, domates, salatalık.",
                    price: "163₺",
                    image: "peynirli-gozleme-menu-g1457-1440x810-jqf9ckjh_menu_g7625_1440x810_GCI6gzaq.jpg"
                },
                {
                    name: "Çikolatalı Fındıklı Gözleme",
                    description: "Tereyağında pişirilmiş sade gözleme yanında nutella ve fındık.",
                    price: "155₺",
                    image: "nutellali-gozleme_menu_g1455_1440x810_utTODMZR.jpg"
                }
            ]
        },
        {
            categoryName: "Kahvaltılar",
            categoryImage: "images/kategori/3.png",
            products: [
                {
                    name: "Klasik Kahvaltı",
                    description: "Beyaz peynir, çeçil peynir, kaşar peyniri, tulum peyniri, macar salam, domates, salatalık, yeşillik, haşlanmış yumurta, rulo börek, tereyağı, bal, zeytin, reçel, 1 adet cam fincan çay.",
                    price: "240₺",
                    image: "klasik-kahvalti_menu_g1326_1440x810_ydNr6X3l.jpg"
                },
                {
                    name: "Serpme Kahvaltı (2 Kişilik)",
                    description: "Beyaz peynir, çeçil peynir, kaşar peyniri, tulum peyniri, macar salam, domates, salatalık, yeşillik, haşlanmış yumurta, rulo börek, tereyağı, bal, zeytin, reçel, 1 adet cam fincan çay.",
                    price: "490₺",
                    image: "serpme-kahvalti_menu_g1330_1920x1280_A7CgYDry.jpg"
                },
                {
                    name: "Sıcak Kahvaltı",
                    description: "Izgara sucuk, menemen, çıtır sigara böreği, kızarmış patates, ızgara hellim, közlenmiş domates biber, kızarmış sosis, 1 adet cam fincan çay.",
                    price: "280₺",
                    image: "635e85c063fff_sicak-kahvalti.jpg"
                },
                {
                    name: "Pankelili Kahvaltı",
                    description: "10 adet pankek yanında 3 çeşit çikolata sos, çilek, muz, 1 adet cam fincan çay.",
                    price: "230₺",
                    image: "maxresdefault.jpg"
                },
                {
                    name: "Börekli Kahvaltı",
                    description: "Beyaz peynir, kaşar peyniri, domates, salatalık, yeşillik, tereyağı, bal, zeytin, reçel, su böreği, gül böreği, 1 adet cam fincan çay.",
                    price: "270₺",
                    image: "Kahvalti-Tabagi-2.jpg"
                },
                {
                    name: "Köy Kahvaltısı",
                    description: "Beyaz peynir, kaşar peyniri, çeçil peynir, tulum peyniri, bal, kaymak, yeşillik, domates, salatalık, zeytin, reçel, tahin pekmez, bazlama, tereyağlı yumurta, 1 cam fincan çay.",
                    price: "320₺",
                    image: "istanbulda-koy-kahvaltisi-en-iyi-nerede-yapilir-10-huzurlu-mekan-4.jpg"
                },
                {
                    name: "Annemin Kahvaltısı",
                    description: "Reçel, bal, tereyağı, zeytin, domates, salatalık, kaşar peyniri, beyaz peynir, poğaça, simit, 1 adet cam fincan çay.",
                    price: "220₺",
                    image: "annemin-kahvaltisi-8617.jpg"
                },
                {
                    name: "Simitçi'nin Kahvaltısı",
                    description: "1 adet simit, beyaz peynir, domates, salatalık, zeytin, 1 adet ince belli çay.",
                    price: "210₺",
                    image: "kahvalti-tabagi.jpg"
                },
                {
                    name: "Peynir Tabağı",
                    description: "",
                    price: "170₺",
                    image: "peynir-tabagi-yemekcom.webp"
                },
                {
                    name: "Soğuş Tabağı",
                    description: "",
                    price: "150₺",
                    image: "images (2).jpg"
                }
            ]
        },
        {
            categoryName: "Sıcak İçecekler",
            categoryImage: "resim/sicak.jpg",
            products: [
                {
                    name: "Demleme Çay Cam Bardak",
                    description: "",
                    price: "20₺",
                    image: "0_bBlxfCJf_rQ9fkJq.jpg"
                },
                {
                    name: "Demleme Çay Fincan",
                    description: "",
                    price: "35₺",
                    image: "10234530463794.jpg"
                },
                {
                    name: "Demleme Çay Kupa",
                    description: "",
                    price: "35₺",
                    image: "images (31).jpg"
                },
                {
                    name: "Oralet",
                    description: "",
                    price: "25₺",
                    image: "images (32).jpg"
                },
                {
                    name: "Bitki Çayları",
                    description: "",
                    price: "130₺",
                    image: "images (33).jpg"
                },
                {
                    name: "Salep",
                    description: "",
                    price: "100₺",
                    image: "dogal-bucak-salebi-fincan-da-tarcinli.jpg"
                },
                {
                    name: "Sıcak Çikolata",
                    description: "",
                    price: "100₺",
                    image: "hakiki-sicak-cikolata.jpg"
                },
                {
                    name: "Geleneksel Türk Kahvesi",
                    description: "",
                    price: "70₺",
                    image: "images (34).jpg"
                },
                {
                    name: "Damla Sakızlı Türk Kahvesi",
                    description: "",
                    price: "80₺",
                    image: "images (34).jpg"
                },
                {
                    name: "Osmanlı Dibek Kahvesi",
                    description: "",
                    price: "75₺",
                    image: "images (35).jpg"
                },
                {
                    name: "Menengiç Kahvesi",
                    description: "",
                    price: "75₺",
                    image: "images (36).jpg"
                },
                {
                    name: "Granül Kahve Sade",
                    description: "",
                    price: "85₺",
                    image: "granul-kahvenin-faydalari-ve-zararlari.jpg"
                },
                {
                    name: "Granül Kahve Sütlü",
                    description: "",
                    price: "90₺",
                    image: "Sütlü-Granül-Kahve-1000x1000.jpg"
                },
                {
                    name: "Espresso",
                    description: "",
                    price: "90₺",
                    image: "espresso-fincani-nasil-olmali-83c47bd7-2d04-4ae0-8a2e-083bdbade81c.jpg"
                },
                {
                    name: "Double Espresso",
                    description: "",
                    price: "100₺",
                    image: "images (37).jpg"
                },
                {
                    name: "Americano",
                    description: "",
                    price: "95₺",
                    image: "beyaz-fincanda-americano.webp"
                },
                {
                    name: "Cappuccino",
                    description: "",
                    price: "95₺",
                    image: "832acdf0bcf812226ac48bdb5dcb6cb996bd35f1.jpg"
                },
                {
                    name: "Latte",
                    description: "",
                    price: "95₺",
                    image: "blog-10.webp"
                },
                {
                    name: "Chocalate Mocha",
                    description: "",
                    price: "105₺",
                    image: "images (38).jpg"
                },
                {
                    name: "Filtre Kahve",
                    description: "",
                    price: "110₺",
                    image: "filtre-kahve-yanina-ne-gider-736bcfb7-3cb2-4f5c-b634-7c14b5aba40f.jpg"
                }
            ]
        }
    ];
    data.push({
        categoryName: "Sahanda Ürünler",
        categoryImage: "images/kategori/4.png",
        products: [
            {
                name: "Haşlanmış Yumurta",
                description: "2 adet haşlanmış yumurta, simit, tereyağı",
                price: "85₺",
                image: "haslanmis-yumurta-faydalari-2.webp"
            },
            {
                name: "Poşe Yumurta",
                description: "2 adet poşe pişirilmiş yumurta, simit, tereyağı.",
                price: "85₺",
                image: "pose-yumurta-tarifi.webp"
            },
            {
                name: "Yumurtalı Ekmek",
                description: "Kızartılmış yumurtalı ekmekler yanında labne peyniri ve reçel.",
                price: "125₺",
                image: "yumurtali-ekmek_menu_g9633_1920x1280_gu6cMJ7g.jpg"
            },
            {
                name: "Sahanda Yumurta",
                description: "Sahanda tereyağında pişirilmiş 2 adet göz yumurta, simit.",
                price: "95₺",
                image: "tereyagli-yumurta_menu_g1332_1440x810_mGwAsCG4.jpg"
            },
            {
                name: "Sucuklu Sahan Yumurta",
                description: "Sahan tereyağı ile pişirilmiş dana sucuklu 2 adet göz yumurta, simit.",
                price: "140₺",
                image: "sucuklu-yumurta_menu_g1331_1440x810_EaFvygY8.jpg"
            },
            {
                name: "Kavurmalı Sahan Yumurta",
                description: "Sahan tereyağı ile pişirilmiş dana kavurmalı 2 adet göz yumurta, simit.",
                price: "160₺",
                image: "2408818528442865487206.jpg"
            },
            {
                name: "Menemen",
                description: "Salçada tereyağı ile pişirilmiş yeşil biber, domates, yumurta, simit.",
                price: "130₺",
                image: "menemen_menu_g1328_1920x1280_mslznnnX.jpg"
            },
            {
                name: "Muhlama",
                description: "Tereyağında hazırlanmış mısır unu ve kolot peyniri, simit.",
                price: "180₺",
                image: "images (3).jpg"
            },
            {
                name: "Sade Omlet",
                description: "Tereyağında pişirilmiş sade omlet yanında kızarmış patates, yeşillik, domates, salatalık, simit.",
                price: "140₺",
                image: "kasarli-omlet_menu_g1324_1440x810_OJB1y6tY.jpg"
            },
            {
                name: "Kaşarlı Omlet",
                description: "Tereyağında pişirilmiş kaşarlı omlet yanında kızarmış patates, yeşillik, domates, salatalık, simit.",
                price: "195₺",
                image: "kasarli-omlet-resimli-yemek-tarifi(11).jpg"
            },
            {
                name: "Karışık Omlet",
                description: "Tereyağında pişirilen kaşar, sosis, sucuk, mantarlı omlet yanında kızarmış patates, yeşillik, domates, salatalık, simit.",
                price: "205₺",
                image: "karisik-omlet-rs-scaled-8.jpg"
            },
            {
                name: "Sosisli Omlet",
                description: "Tereyağında pişirilen kaşar peynirli ve sosisli omlet yanında kızarmış patates, yeşillik, domates, salatalık, simit.",
                price: "170₺",
                image: "images (4).jpg"
            },
            {
                name: "Yeşil Omlet",
                description: "Tereyağında pişirilen kaşar peynirli, maydanoz, dereotu, taze soğanlı omlet yanında kızarmış patates, yeşillik, domates, salatalık, simit.",
                price: "150₺",
                image: "sddefault.jpg"
            },
            {
                name: "Sütlü Yumurta",
                description: "Tereyağında pişirilmiş 2 adet çırpılmış sütlü yumurta, kızarmış patates, yeşillik, domates, salatalık, kızarmış ekmek.",
                price: "155₺",
                image: "sutlu-omlet_menu_g1323_1920x1280_WfFIGUc3.jpg"
            },
            {
                name: "Kıymalı Menemen",
                description: "Kıyma, yumurta, domates, biber, simit",
                price: "160₺",
                image: "kiymali-menemen-tarifi.jpg"
            },
            {
                name: "Kavurmalı Menemen",
                description: "Kavurma, yumurta, domates, biber, simit",
                price: "180₺",
                image: "images (24).jpg"
            },
            {
                name: "Kaşarlı Menemen",
                description: "Kaşar, yumurta, domates, biber, simit",
                price: "140₺",
                image: "kasarli-menemen-sunum-yemekcom.webp"
            },
            {
                name: "Sucuklu Menemen",
                description: "Yumurta, domates, biber, simit",
                price: "150₺",
                image: "5fa3e48a5542821a08545ced.webp"
            },
            {
                name: "Sucuklu Omlet",
                description: "Sucuk, yumurta, patates, salatalık, yeşillik, simit",
                price: "160₺",
                image: "sebzeli-sucuklu-omlet-tarifi.webp"
            },
            {
                name: "Kavurmalı Omlet",
                description: "Kavurma, yumurta, patates, salatalık, yeşillik, simit",
                price: "185₺",
                image: "images (25).jpg"
            },
            {
                name: "İspanyol Omlet",
                description: "Salam, maydonoz, beyaz peynir, yumurta, patates, domates, salatalık, yeşillik, simit",
                price: "195₺",
                image: "ispanyol-omleti-tortilla-yemekcom.webp"
            }
        ]
    });

    data.push({
        categoryName: "Sıcak Sandviçler",
        categoryImage: "images/kategori/5.png",
        products: [
            {
                name: "Peynirli Tavuk Sandviç",
                description: "Cabata ekmek, meat sos, sotelenmiş tavuk eti, karamelize soğan, eritilmiş kaşar, kızarmış patates",
                price: "120₺",
                image: "tavuklu-begendili-sandvic-yemekcom.webp"
            },
            {
                name: "Peynirli Steak Sandviç",
                description: "Cabata ekmek, meat sos, sotelenmiş biftek etleri, karamelize soğan, eritilmiş kaşar, kızarmış patates.",
                price: "170₺",
                image: "steak-sandvic-reels.webp"
            },
            {
                name: "Kumru Sandviç",
                description: "Susamlı baget ekmek, şerit doğranmış salam sosis, kaşar peyniri, meat sos, turşu, parmak patates.",
                price: "155₺",
                image: "2_8_11zon (1).webp"
            },
            {
                name: "Köfteli Sandviç",
                description: "Ciabata ekmek, meat sos, izgara köfte, karamelize soğan, közlenmiş domates, biber parmak patates.",
                price: "180₺",
                image: "kofteli-sandvic-a156d75d-3ccb-4e12-b951-83e7afc06f78.webp"
            },
            {
                name: "Kıtır Tavuklu Sandviç",
                description: "Baget ekmeğinde çıtır tavuk, meat sos, kaşar peyniri.",
                price: "165₺",
                image: "unnamed.jpg"
            }
        ]
    });

    data.push({
        categoryName: "Soğuk Sandviçler",
        categoryImage: "images/kategori/6.png",
        products: [
            {
                name: "Beyaz Peynirli Simit Baget Sandviç",
                description: "Simit baget, beyaz peynir, domates, salatalık, marul, yeşil biber.",
                price: "65₺",
                image: "beyaz-peynirli-simit-sandvic_menu_g1364_1440x810_EsXkbOSm.jpg"
            },
            {
                name: "Kaşarlı Salamlı Simit Baget Sandviç",
                description: "Simit ekmek, meat sos, marul, kaşar peyniri, macar salam, domates, salatalık",
                price: "68₺",
                image: "jambonlu-sandvic_menu_g1366_1440x810_djp7Rq4X.jpg"
            },
            {
                name: "Karışık Baget Sandviç",
                description: "Ekşili baget ekmeğinde, macar salamı, cheddar peyniri, hindi füme, kaşar peyniri, marul, domates, salatalık, meat sos.",
                price: "75₺",
                image: "hindi-fume-etli-sandvicler_menu_g1365_1440x810_GIyRCeln.jpg"
            },
            {
                name: "Jambon Cheddarlı Baget Sandviç",
                description: "Ekşili baget ekmeğinde, marul, domates, salatalık, cheddar peyniri, jambon, meat sos.",
                price: "78₺",
                image: "pratik-lezzetler-sarkuteri-baget-sandvic.jpg"
            },
            {
                name: "Atom Sandviç",
                description: "Çabate ekmeğinde Kaymak, bal, muz, ceviz içi, fındık kreması.",
                price: "85₺",
                image: "images (5).jpg"
            },
            {
                name: "Ton Balıklı Zeytinli Sandviç",
                description: "Baget ekmeği, zeytin ezmesi, ton balığı, mayonez, turşu, domates, salatalık.",
                price: "130₺",
                image: "ton_balikli_sandvic-892a7027-e105-4a1f-ab55-e6b2e9a1c760.webp"
            },
            {
                name: "Klüp Sandviç",
                description: "Jumbo tost ekmeği, meat sos, marul, dana jambon, cheddar peyniri, macar salam, kaşar peyniri, domates, salatalık.",
                price: "138₺",
                image: "images (6).jpg"
            }
        ]
    });
    data.push({
        categoryName: "Tostlar",
        categoryImage: "images/kategori/7.png",
        products: [
            {
                name: "Kaşarlı Bazlama Tost",
                description: "Bazlama ekmeğinde kaşar peyniri ile hazırlanan tost yanında kızarmış patates, yeşillik, domates, salatalık, sos.",
                price: "170₺",
                image: "kasarli-bazlama-tost_menu_g1463_1440x810_rObhKnOf.jpg"
            },
            {
                name: "Tavuklu Bazlama Tost",
                description: "Bazlama ekmeğinde kaşar peyniri ve sotelernrıiş tavuk ile hazırlanan tost yanında kızarmış patates, yeşillik, domates, salatalık, sos.",
                price: "155₺",
                image: "tavuklu-bazlama-tost_menu_g1467_1440x810_SoLRLsth.jpg"
            },
            {
                name: "Ayvalık Tost",
                description: "Ayvalık tost ekmeğinde kaşar peyniri, sosis, sucuk, salam, amerikan salata, turşu ile hazırlanan tost yanında kızarmış patates, yeşillik, domates, salatalık, sos.",
                price: "170₺",
                image: "ayvalik-tost_menu_g1462_1440x810_UQiEGq52.jpg"
            },
            {
                name: "Kaşarlı Tost",
                description: "Jumbo tost ekmeğinde kaşar peyniri ile hazırlanan tost yanında kızarmış patates, yeşillik, domates, salatalık, sos.",
                price: "165₺",
                image: "kasarli-tost_menu_g1464_1440x810_kY3Vbdzm.jpg"
            },
            {
                name: "Karışık Tost",
                description: "Jumbo tost ekmeğinde kaşar peyniri, sosis, sucuk, salam, domates, turşu ile hazırlanan tost yanında kızarmış patates, yeşillik, domates, salatalık, sos.",
                price: "175₺",
                image: "images (7).jpg"
            },
            {
                name: "Ekmek Üstü Kaşarlı Domatesli Tost",
                description: "Kızarmış ekmekler üzerinde kaşar peyniri ve çeri domatesler ile hazırlamnış açık tostlar, yanında kızarmış patates, yeşillik, domates, salatalık, sos.",
                price: "150₺",
                image: "bol-peynirli-tost-yemekcom.jpg"
            },
            {
                name: "Ekmek Üstü Sucuklu Kaşarlı Tost",
                description: "Kızarmış ekmekler üzerinde kaşar peyniri ve dana sucuk dilimleri ile hazırlanmış açık tostlar, yanında kızarmış patates, yeşillik, domates, salatalık, sos.",
                price: "155₺",
                image: "sucuklu-ekmek-ustu-680x1024.jpg"
            },
            {
                name: "Simitçinin Tostu",
                description: "Susamlı simit ekmeğinde veya terayağlı simitte kaşar peyniri, dana sucuk dilimleri ile hazırlanan tost yanında kızarmış patates, yeşillik, domates, salatalık. sos.",
                price: "157₺",
                image: "simit_tost-1f6a448f-fc00-48f7-8254-64f0d7a138b9.webp"
            },
            {
                name: "Kaşarlı Sucuklu Bazlama Tost",
                description: "Sucuk, kaşar, patates, yeşillik, domates, salatalık",
                price: "175₺",
                image: "bazlama-tost-sunum-yemekcom.webp"
            },
            {
                name: "Kavurmalı Bazlama Tost",
                description: "Kavurma, kaşar, patates, yeşillik, domates, salatalık",
                price: "180₺",
                image: "images (28).jpg"
            },
            {
                name: "Kaşarlı Sucuklu Tost",
                description: "Kaşar, sucuk, patates, yeşillik, domates, salatalık",
                price: "170₺",
                image: "kasarlisucuklutost.jpg"
            }
        ]
    });

    data.push({
        categoryName: "Atıştırmalıklar",
        categoryImage: "images/kategori/8.png",
        products: [
            {
                name: "Karışık Çıtır Sepeti",
                description: "Parmak patates, yıldız sosis, sigara böreği, çıtır tavuk, meat sos.",
                price: "180₺",
                image: "images (8).jpg"
            },
            {
                name: "Kızarmış Sosis Sepeti",
                description: "Kızarmış parmak patates, yıldız sosis, meat sos.",
                price: "160₺",
                image: "sosis-tava-1-sutis-600x600.jpg"
            },
            {
                name: "Çıtır Börek Sepeti",
                description: "Kızarmış peynirli çıtır börek, meat sos.",
                price: "135₺",
                image: "citir-borek-tarifi-yemekcom.webp"
            },
            {
                name: "Kıtır Tavuk Sepeti",
                description: "Kızarmış parmak patates, kıtır tavuk, kajun çeşni ve meat sos.",
                price: "195₺",
                image: "images (9).jpg"
            },
            {
                name: "Parmak Patates Sepeti",
                description: "Kızartılmış parmak patates, meat sos.",
                price: "145₺",
                image: "patates-sepeti_menu_g1441_2133x3200_iBOQJgrj.jpg"
            },
            {
                name: "Tavuk Nugget",
                description: "Tavuk nugget, patates sos",
                price: "160₺",
                image: "tavuk-nugget-i7.jpg"
            },
            {
                name: "Çıtır Soğan Halkası Sepeti",
                description: "Soğan halkası, patates, sos",
                price: "150₺",
                image: "sogan-halkasi-500x500.jpg"
            },
            {
                name: "Paçanga Böreği",
                description: "2 adet paçanga böreği, patates sos",
                price: "165₺",
                image: "pacanga-yatay-1-yilbasi.webp"
            }
        ]
    });

    data.push({
        categoryName: "Ana Yemekler",
        categoryImage: "images/kategori/9.png",
        products: [
            {
                name: "Soğanlı Kepap",
                description: "Közlenmiş domates, közlenmiş biber ile",
                price: "198₺",
                image: "1.png"
            },

            {
                name: "Adana Kebap",
                description: "Közlenmiş domates, közlenmiş biber ile",
                price: "210₺",
                image: "3.png"
            },

            {
                name: "Karışık Kebap",
                description: "Adana kebap, kestane kebabı, tavuk şiş, kuzu pirzola. Közlenmiş domates, közlenmiş biber ile",
                price: "550₺",
                image: "5.png"
            },
            {
                name: "Urfa Kebap",
                description: "Közlenmiş domates, közlenmiş biber ile",
                price: "210₺",
                image: "6.png"
            },
            {
                name: "Sebzeli Kebap",
                description: "Kuzu kıyma, kuru soğan, kırmızıbiber, yeşil sivri biber, sarımsak, maydanoz. Közlenmiş domates, közlenmiş biber ile",
                price: "198₺",
                image: "7.png"
            },

            {
                name: "Patlıcanlı Kebap",
                description: "Közlenmiş domates, közlenmiş biber ile",
                price: "220₺",
                image: "10.png"
            },
            {
                name: "Sara Beyti Kebap",
                description: "Yoğurtlu, soslu. Közlenmiş domates, közlenmiş biber ile",
                price: "11₺",
                image: "11.png"
            },
            {
                name: "Alinazik Kebap",
                description: "Közlenmiş domates, közlenmiş biber ile",
                price: "245₺",
                image: "12.png"
            },
            {
                name: "Yoğurtlu Kebap",
                description: "Közlenmiş domates, közlenmiş biber ile",
                price: "240₺",
                image: "13.png"
            },
            {
                name: "Domatesli Kebap",
                description: "Közlenmiş domates, közlenmiş biber ile",
                price: "195₺",
                image: "14.png"
            },

            {
                name: "Köri Soslu Tavuk",
                description: "Tereyağında sotelenmiş tavuk eti, mantar, renkli biber, krema, köri, tavuk çeşni, mevsim yeşillikleri, domates, salatalık, kızarmış parmak patates, renkli biber, meat sos.",
                price: "210₺",
                image: "kori_menu_g1292_1920x1280_cMFM8pcY.jpg"
            },
            {
                name: "Mantar Soslu Tavuk",
                description: "Tereyağında sotelernrıiş tavuk eti, mantar, krema, tavuk çeşni, mevsim yeşillikleri, domates, salatalık, kızarmış parmak patates, meat sos.",
                price: "215₺",
                image: "mantar_menu_g1293_1920x1280_8RHa1WR7.jpg"
            },
            {
                name: "Saçta Tavuk Kavurma",
                description: "Tereyağında sotelernrıiş tavuk eti, domates, biber, tavuk çeşni, kekik, kızarmış parmak patates, biberli lavaş ekmeği, biber salça, toz biber, meat sos.",
                price: "210₺",
                image: "sacda-tavuk-sote-tarifi.jpg"
            },
            {
                name: "Meksikan Tavuk Fajita",
                description: "Renkli biber, jelepone, soğan, mısır, meksika fasülyesi, kajun çeşni, ızgara tavuk fileto, tortilla, ekşi krema sos, salsa sos, cheddar sos.",
                price: "250₺",
                image: "6208f1ee86b24a121827a148.webp"
            }
        ]
    });

    data.push({
        categoryName: "Salatalar",
        categoryImage: "images/kategori/10.png",
        products: [
            {
                name: "Tavuklu Sezar",
                description: "Aysberk, kruton ekmek, sezar sos, parmesan, ızgara tavuk parçaları, çeri domates, limon.",
                price: "170₺",
                image: "tavuklu-sezar-salata-sunum-yemekcom.webp"
            },
            {
                name: "Ton Balıklı Nisuaz",
                description: "Yeşillik, ton balığı, çeri domates, turşu, mısır, kırmızı soğan, havuç, salatalık, kruton ekmek, zeytinyağı, limon.",
                price: "180₺",
                image: "nicoise-salata-cd61cf60-4b2b-4693-ad9f-4e3022a4bca4.jpg"
            },
            {
                name: "Gavurdağ Salata",
                description: "Domates, soğan, salatalık. ceviz, maydanoz, zeytinyağı, limon, nar ekşisi, yeşil biber.",
                price: "165₺",
                image: "gavurdagi-salatasi-yeni-one-cikan.jpg"
            },
            {
                name: "Çoban Salata",
                description: "Soğan, domates, salatalık, maydonoz",
                price: "110₺",
                image: "coban_salata1.webp"
            },
            {
                name: "Mevsim Salatası",
                description: "Mevsim yeşillikleri, domates, kıvırcık, marul, salatalık, sos",
                price: "105₺",
                image: "mevsim-salatasi-sunum-yemekcom.webp"
            },
            {
                name: "Hellim Peyniri Salata",
                description: "Hellim peyniri, mevsim yeşillikleri, kıvırcık, marul, domates, salatalık, mısır, zeytin, turşu, sos",
                price: "120₺",
                image: "hellimli-salata-sunum.webp"
            },
            {
                name: "Çıtır Tavuklu Salata",
                description: "Kıvırcık, marul, mevsim yeşillikleri, domates, salatalık, zeytin, mısır, kroton ekmeği, çıtır tavuk parçaları",
                price: "175₺",
                image: "1660207587-62f4c1e309a5b.png"
            },
            {
                name: "Biftekli Salata",
                description: "Dana biftek, mevsim yeşillikleri, kıvırcık, domates, salatalık, marul, zeytin, turşu",
                price: "185₺",
                image: "soslu_ve_biftekli_salata-0bfa60fd-8660-4351-baa3-562204d99990.webp"
            }
        ]
    });
    data.push({
        categoryName: "Makarnalar",
        categoryImage: "images/kategori/11.png",
        products: [
            {
                name: "Alfredo Soslu Tavuklu Fettucini",
                description: "Zeytinyağı, sarımsak, fettucini makarna, mantar, tavuk eti, krema, pesto sos, makarna peyniri, fesleğen.",
                price: "185₺",
                image: "tavuklu-fettucine-alfredo-tarifi.webp"
            },
            {
                name: "Acılı Domates Soslu Penne",
                description: "Zeytinyağı, sarımsak, penne makarna, acılı domates sos, pesto sos, makarna peyniri, fesleğeıı.",
                price: "180₺",
                image: "10-4.webp"
            },
            {
                name: "Etli Mantarlı Penne",
                description: "Bonale, mantar, pesta sosu, krema , permasan",
                price: "235₺",
                image: "kremali-bonfileli-penne-tarifi.webp"
            },
            {
                name: "Kıymalı Ev Mantısı",
                description: "Ev yapımı kıymalı mantı, yoğurt sos, naneli biberli tereyağı sos.",
                price: "250₺",
                image: "ev-yapimi-kayseri-mantisi_menu_g1347_1440x810_wsBpitu5.jpg"
            },
            {
                name: "Köri Soslu Fettucini",
                description: "Tavuk, mantar, krema, kapya, carliston biber, parmesan",
                price: "185₺",
                image: "kori-soslu-fettucini.jpg"
            },
            {
                name: "Kıymalı Spagetti Bolonez",
                description: "Kıyma, acılı domates sos, parmesan",
                price: "190₺",
                image: "kiymali-makarna-guncelleme-sunum-1.webp"
            },
            {
                name: "Tavuklu Mantarlı Penne",
                description: "Tavuk, mantar, pesta sosu, krema, parmesan",
                price: "185₺",
                image: "kremali-makarna.webp"
            }
        ]
    });

    data.push({
        categoryName: "Burgerler",
        categoryImage: "images/kategori/12.png",
        products: [
            {
                name: "Hamburger 140gr",
                description: "Susamlı burger ekmek, ızgarada pişirilmiş beef burger köftesi, karamelize soğaıı, marul, domates turşu, meat sos, parmak patates.",
                price: "190₺",
                image: "hamburger_menu_g1310_1440x810_GHfQXgtT.jpg"
            },
            {
                name: "Hamburger 90gr",
                description: "Susamlı burger ekmek, ızgarada pişirilmiş beef burger köftesi, karamelize soğaıı, marul, domates turşu, meat sos, parmak patates.",
                price: "165₺",
                image: "hamburger_menu_g1310_1440x810_GHfQXgtT.jpg"
            },
            {
                name: "Cheesburger",
                description: "Burger ekmek, ızgarada pişirilmiş beef burger köfte, karamelize soğan, cheddar peyniri, marul, domates, turşu, meat sos, parmak patates.",
                price: "185₺",
                image: "chesee-burger_menu_g1309_1440x810_P4HdJi5s.jpg"
            },
            {
                name: "Çıtır Tavuk Burger",
                description: "Susamlı burger ekmek, kızarmış çıtır tavuk, karamelize soğaıı, marul, domates, turşu, meat sos, parmak patates.",
                price: "170₺",
                image: "kitir-tavuk-burger_menu_g1311_1440x810_oK1wvhOI.jpg"
            },

        ]
    });

    data.push({
        categoryName: "Pizzalar",
        categoryImage: "images/kategori/13.png",
        products: [
            {
                name: "Pizza Margarita",
                description: "Pizza hamuru, domates sos, pizza mix baharat, mozzarella, domates, fesleğen.",
                price: "200₺",
                image: "pizza-magherita_menu_g1354_1440x810_hkl2mdKZ.jpg"
            },
            {
                name: "Pizza Pepperoni",
                description: "Pizza hamuru, domates sos, pizza mix baharat, mozzarella, dilim sucuk, fesleğen.",
                price: "210₺",
                image: "__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg"
            },
            {
                name: "Pizza Mantarlı",
                description: "Pizza hamuru, domates sos, pizza mix baharat,mozzarella, mantar, fesleğen.",
                price: "205₺",
                image: "images (10).jpg"
            },
            {
                name: "Pizza Karışık",
                description: "Pizza hamuru, domates sos, pizza mix baharat, mozzarella, sucuk, sosis, salam, mantar, zeytin, domates, renkli biber, mısır, fesleğen.",
                price: "225₺",
                image: "karsik-pizza_menu_g1352_1440x810_DbbBtJMH.jpg"
            },
            {
                name: "Kavurmalı Pizza",
                description: "Kavurma, mozerella sos",
                price: "235₺",
                image: "kavurmali-pizza-one-cikan.webp"
            },
            {
                name: "Ton Balıklı Pizza",
                description: "Ton balığı, mozerella sos",
                price: "220₺",
                image: "images (29).jpg"
            },
            {
                name: "Acılı Tavuklu Pizza",
                description: "Tavuk, jalebona biber, mozerella sos",
                price: "210₺",
                image: "images (30).jpg"
            }
        ]
    });


    data.push({
        categoryName: "Dürümler",
        categoryImage: "images/kategori/15.png",
        products: [
            {
                name: "Soslu Tavuklu Dürüm",
                description: "Tortilla ekmek, acılı domates sos, sotelenmiş tavuk, marul, domates, biber, kaşar peyniri, kızarmış parmak patates, meat sos.",
                price: "185₺",
                image: "soslu-tavuk-durum_menu_g1451_1440x810_B18qcAP8.jpg"
            },
            {
                name: "Köfteli Tortilla Dürüm",
                description: "Tortilla ekmek, ızgara köfte, karamelize soğan, marul, domates, turşu, kaşar peyniri, kızarmış parmak patates, meat sos.",
                price: "220₺",
                image: "kofteli-durum_menu_g1449_1440x810_DJ4bDbz9.jpg"
            },
            {
                name: "Çıtır Tavuk Dürüm",
                description: "Tortilla ekmek, kızarmış çıtır tavuk parçaları, marul, domates, kaşar peyniri ile hazırlanır, yanında kızarmış parmak patates, mevsim yeşillik, domates salatalık, meat sos.",
                price: "195₺",
                image: "kitir-tavuklu-durum_menu_g1448_1440x810_a6nzWoHH.jpg"
            }
        ]
    });

    data.push({
        categoryName: "Tatlılar",
        categoryImage: "images/kategori/16.png",
        products: [
            {
                name: "Frambuazlı Cheesecake",
                description: "",
                price: "135₺",
                image: "frambuazli-pasta_menu_g1416_1920x1280_jVwLOE8d.jpg"
            },
            {
                name: "Fıstıklı Mono Pasta",
                description: "",
                price: "135₺",
                image: "images (12).jpg"
            },
            {
                name: "Vişneli Mono Pasta",
                description: "",
                price: "135₺",
                image: "Destereci-Firini-1948-Mono-Pasta.jpg"
            },
            {
                name: "Latte Pasta",
                description: "",
                price: "135₺",
                image: "latte-pasta-3dcd999f-bcec-46da-84b7-5c20b5a082a8.webp"
            },
            {
                name: "Devil's Pasta",
                description: "",
                price: "135₺",
                image: "0febdd7c90376512adfd516fbf8a7224.png"
            },
            {
                name: "Fıstık Rüyası Pasta",
                description: "",
                price: "135₺",
                image: "images (13).jpg"
            },
            {
                name: "Çikolatalı - Fıstıklı Rulo Pasta",
                description: "",
                price: "135₺",
                image: "images (14).jpg"
            },
            {
                name: "Muzlu Rulo Pasta",
                description: "",
                price: "135₺",
                image: "muzlu-rulo-pasta-ys-market-yemekcom.webp"
            },
            {
                name: "Havuçlu Dilimli Pasta",
                description: "",
                price: "135₺",
                image: "indir.jpg"
            },
            {
                name: "Waffle",
                description: "",
                price: "185₺",
                image: "waffle_menu_g1424_1440x810_9RcFxFxa.jpg"
            },
            {
                name: "Dondurmalı Soğuk Kahve",
                description: "",
                price: "110₺",
                image: "15238689800.00493800.jpg"
            }
        ]
    });
    data.push({
        categoryName: "Soğuk İçecekler",
        categoryImage: "images/kategori/17.png",
        products: [
            {
                name: "Coca Cola Light, Zero",
                description: "",
                price: "55₺",
                image: "kola-kac-kalori.jpg"
            },
            {
                name: "Sprite, Fanta",
                description: "",
                price: "55₺",
                image: "images (15).jpg"
            },
            {
                name: "Fuse Tea Çeşitleri",
                description: "",
                price: "55₺",
                image: "images (16).jpg"
            },
            {
                name: "Cappy Meyve Suları",
                description: "",
                price: "55₺",
                image: "tr_cappy_desktopbanner02_1440x810.webp"
            },
            {
                name: "Schweppes Çeşitleri",
                description: "",
                price: "53₺",
                image: "Hero-Schweppes.webp"
            },
            {
                name: "Mini Meyve Suları",
                description: "",
                price: "38₺",
                image: "0_org_zoom.webp"
            },
            {
                name: "Sade Soda",
                description: "",
                price: "48₺",
                image: "3380089_72a13fe9f41ab6a71db4998434b3ec9a.jpg"
            },
            {
                name: "Meyveli Soda",
                description: "",
                price: "53₺",
                image: "meyveli-soda.jpg"
            },
            {
                name: "Taze Limon Soda",
                description: "",
                price: "65₺",
                image: "5fd1ee3855427e0fbc2a9e89.webp"
            },
            {
                name: "Ayran Küçük",
                description: "",
                price: "30₺",
                image: "indir (1).jpg"
            },
            {
                name: "Ayran Büyük",
                description: "",
                price: "60₺",
                image: "indir (2).jpg"
            },
            {
                name: "Süt",
                description: "",
                price: "35₺",
                image: "sutun-kotu-oldugu-nasil-anlasilir-0e78496b-5601-4e00-b1a0-6e0fefdd468b.webp"
            },
            {
                name: "Meyveli Süt",
                description: "",
                price: "45₺",
                image: "images (17).jpg"
            },
            {
                name: "Su Pet",
                description: "",
                price: "15₺",
                image: "Erikli-Su-500-Ml-12-Li-Paket_RI23495FT1MF130547-orta.jpg"
            },
            {
                name: "Su Cam Şişe",
                description: "",
                price: "18₺",
                image: "4ba6f7bf-7a4e-41b6-b53a-ae01d9f53f91.jpg"
            },
            {
                name: "Limonata",
                description: "",
                price: "120₺",
                image: "limonata-sq.jpg"
            },
            {
                name: "Çilekli Limonata Yeni",
                description: "",
                price: "130₺",
                image: "images (18).jpg"
            },
            {
                name: "Naneli Limonata",
                description: "",
                price: "130₺",
                image: "naneli-limonata-tria.webp"
            },
            {
                name: "Burn",
                description: "",
                price: "120₺",
                image: "f631485d-1556-4a01-9296-d9ca61db542b.jpg"
            },
            {
                name: "Powerade",
                description: "",
                price: "120₺",
                image: "tr_powerade_prod_powerade-iceblast_750x750.webp"
            },
            {
                name: "Sıkma Portakal Suyu Bardak",
                description: "",
                price: "130₺",
                image: "64230fa92367e_taze-sikma-portakal-suyu.jpg"
            },
            {
                name: "Nar Suyu Bardak",
                description: "",
                price: "130₺",
                image: "nar-suyunun-faydalari-5.webp"
            },
            {
                name: "Karışık Meyve Suyu",
                description: "",
                price: "140₺",
                image: "karisik-meyve-suyu-taze.jpg"
            },
            {
                name: "Atom (Süt, Muz, Bal)",
                description: "",
                price: "145₺",
                image: "atom-balli-muzlu-icecek.jpg"
            },
            {
                name: "Klasik Soğuk Kahve",
                description: "",
                price: "170₺",
                image: "images (19).jpg"
            },
            {
                name: "Nutellalı Soğuk Kahve",
                description: "",
                price: "170₺",
                image: "images (20).jpg"
            },
            {
                name: "Dondurmalı Soğuk Kahve",
                description: "",
                price: "170₺",
                image: "images (21).jpg"
            },
            {
                name: "Çikolatalı Milkshake",
                description: "",
                price: "150₺",
                image: "cikolatali-milkshake-yemekcom.webp"
            },
            {
                name: "Baklavalı Milkshake",
                description: "",
                price: "150₺",
                image: "images (22).jpg"
            },
            {
                name: "Karamel Milkshake",
                description: "",
                price: "150₺",
                image: "karamelmilkshake-min.jpg"
            },
            {
                name: "Meyveli (Çilek, Mango, Muz) Milkshake",
                description: "",
                price: "150₺",
                image: "images (23).jpg"
            },
            {
                name: "Karpuzlu, Muzlu, Mangolu, Çilekli, Kivili Frozen",
                description: "",
                price: "155₺",
                image: "cilekli-frozen-600x700-1.jpg"
            },
            {
                name: "Çikolatalı, Çilek, Mango, Karamel, Muz Frappe",
                description: "",
                price: "155₺",
                image: "frappe1646725707.jpg"
            },
            {
                name: "Acılı Şalgam",
                description: "",
                price: "50₺",
                image: ""
            }, {
                name: "Acısız Şalgam",
                description: "",
                price: "50₺",
                image: ""
            }
        ]
    });
    data.push({
        categoryName: "Izgara Çeşitleri",
        categoryImage: "resim/odemus-izgara-kofte.jpg",
        products: [
            {
                name: "Tavuk Şiş",
                description: "Tavuk, ızgara domates, ızgara biber, patates, lavaş ekmek, pilav",
                price: "195₺",
                image: "images (26).jpg"
            },
            {
                name: "Kanat Izgara",
                description: "Tavuk kanat, közlenmiş domates, biber, patates pilav, lavaş",
                price: "205₺",
                image: "izgara-kanat-one-cikan-yemekcom.jpg"
            },

            {
                name: "Kuzu Şiş",
                description: "Kuzu eti, ızgara domates, ızgara biber, patates, pilav, lavaş ekmeği",
                price: "280₺",
                image: "kuzu-şiş-porsiyon-nizam-pide-sütlaç-istanbul-beyoğlu-istiklal-caddesi.jpg"
            },
            {
                name: "Izgara Biftek",
                description: "Dana biftek, közlenmiş biber, domates, pilav, lavaş, patates",
                price: "380₺",
                image: "images (27).jpg"
            },
        ]
    })
    data.push({
        categoryName: "Beyaz Etler",
        categoryImage: "images/kategori/17.png",
        products: [
            {
                name: "Tavuk Fajita",
                description: "Tavuk, biber çeşitleri, soğan sos",
                price: "220₺",
                image: "s-8cda755172010702ea2f2626c0d60ccb660f9c41.webp"
            },

            {
                name: "Soya Soslu Tavuk",
                description: "Tavuk, mantar, biber, BBQ sos, krema, patates, kremalı makarna",
                price: "210₺",
                image: "soyasoslutavuk.jpg"
            },
            {
                name: "Pesto Soslu Tavuk",
                description: "Tavuk, mantar, biber, pesto sos, krema, patates, kremalı makarna",
                price: "210₺",
                image: "pesto-soslu-tavuk-resimli-yemek-tarifi(7).jpg"
            },

        ]
    });
    data.push({
        categoryName: "Kırmızı Etler",
        categoryImage: "resim/et-cesitleri-nelerdir-etin-hangi-kismi-nasil-kullanilir-16.jpg",
        products: [

            {
                name: "Güveçte Et",
                description: "Bonfile, biber çeşitleri, domates, soğan",
                price: "320₺",
                image: "et-guvec-3.webp"
            },
            {
                name: "Meksika Usulü Et",
                description: "Bonfile, Meksika fasulyesi, biber çeşitleri, jalapeno biber, acı sos, patates, kremalı makarna",
                price: "335₺",
                image: "fajita-scaled.jpg"
            },

            {
                name: "Meksikan Usulü Biftek",
                description: "Dana biftek, Meksika fasulyesi, acı sos, krema patates, pilav, közlenmiş biber domates",
                price: "375₺",
                image: "fajita-003530-27288613-8cf6-40fc-8ea4-17b5cd78c9ce.jpg"
            },
            {
                name: "Kremalı Mantar Soslu Biftek",
                description: "Dana biftek, mantar, krema, közlenmiş biber domates, patates, pilav",
                price: "365₺",
                image: "mantar-soslu-biftek-tarifi.jpg"
            },
            {
                name: "Köri Soslu Et",
                description: "Bonfile, mantar, biberi kremai köri sos, patates, makarna",
                price: "330₺",
                image: "maxresdefault (1).jpg"
            },
            {
                name: "Kuzu Pirzola",
                description: "Kuzu pirzola, közlenmiş biber domates, pilav, patates lavaş",
                price: "290₺",
                image: "kuzu-pirzola-yemekcom.jpg"
            },
            {
                name: "Yoğurtlu Kebap",
                description: "Köfte, közlenmiş biber domates, yoğurt, pilav",
                price: "240₺",
                image: "yogurtlu-kebap.jpg"
            }
        ]
    })

    data.push({

    });



    var menuContainer = document.querySelector(".col-md-10");

    // Her kategori için döngü oluşturalım
    data.forEach(function (category) {
        // Kategori başlığını oluşturalım
        var categoryTitle = document.createElement("div");
        categoryTitle.classList.add("menu-category");
        categoryTitle.innerHTML = `
        <div class="menu-category-title collapse-toggle" role="tab" data-target="#${category.categoryName.replace(/\s+/g, '-').toLowerCase()}Content" data-toggle="collapse" aria-expanded="true">
        <div class="bg-image"><img src="${category.categoryImage}" alt=""></div>
        <h3 class="title"><strong>${category.categoryName}</strong></h3>
    </div>
    <div id="${category.categoryName.replace(/\s+/g, '-').toLowerCase()}Content" class="menu-category-content collapse"></div>
    `;
        menuContainer.appendChild(categoryTitle);

        // Kategori içindeki ürünleri ekleyelim
        var menuCategoryContent = document.getElementById(`${category.categoryName.replace(/\s+/g, '-').toLowerCase()}Content`);
        category.products.forEach(function (product) {
            var menuItem = document.createElement("div");
            menuItem.classList.add("menu-item", "menu-list-item");
            menuItem.innerHTML = `
            <div class="row align-items-center">
            <div class="col-sm-3">
                <img src="resim/${product.image}" alt="Menu Item Image">
            </div>
            <div class="col-sm-6">
            <strong><h6 class="mb-0">${product.name}</h6></strong>
                <p class="text-sm mb-1">${product.description}</p>
            </div>
            <div class="col-sm-3 text-sm-right">
                <p class="fiyat mb-0">Fiyat: ${product.price}</p>
            </div>
        </div>
            `;
            menuCategoryContent.appendChild(menuItem);
        });
    });
});
